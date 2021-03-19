const { Sequelize } = require('../models/index');
const database = require('../models/index');
const { attributesExtrator } = require('../services');

const updateSupport = (founded, me, res) => {
  if (!founded) {
    return res.status(404).json({ message: 'Post não existe' });
  }
  if (founded && founded.User.id !== me.id) {
    return res.status(401).json({ message: 'Usuário não autorizado' });
  }
};

class PostController {
  static async buscaTodosPosts(_req, res) {
    try {
      const posts = await database.Posts.findAll({
        include: {
          model: database.Users,
        },
      });
      const newPosts = await attributesExtrator(posts);
      res.status(200).json(newPosts);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error });
    }
  }

  static async cadastraUmPost(req, res) {
    const novoPost = { ...req.body };
    const { me } = req;
    try {
      const post = await database.Posts.create({
        ...novoPost,
        userId: me.id,
        published: new Date(),
        updated: new Date(),
      });
      return res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async buscaUmPost(req, res) {
    try {
      const { id } = req.params;
      const postFounded = await database.Posts.findOne({
        where: {
          id: Number(id),
        },
        include: {
          model: database.Users,
        },
      });
      if (postFounded !== null) {
        const post = await attributesExtrator([postFounded]);
        return res.status(200).json(...post);
      }
      return res.status(404).json({ message: 'Post não existe' });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  static async atualizaUmPost(req, res) {
    try {
      const { id } = req.params;
      const { me, body } = req;
      console.log(me);
      const founded = await database.Posts.findOne({
        where: { id: Number(id) },
        include: { model: database.Users },
      });
      updateSupport(founded, me, res);
      await database.Posts.update({ ...body }, { where: { id: Number(id) } });
      const { title, content, userId } = await database.Posts.findOne({
        where: Number(id),
      });
      return res.status(200).json({ title, content, userId });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  static async buscaPostPorTermo(req, res) {
    const searchTerm = req.query.q;
    console.log('termo: ', searchTerm);
    try {
      const posts = await database.Posts.findAll({
        where: {
          [Sequelize.Op.or]: [
            { title: { [Sequelize.Op.like]: `%${searchTerm}` } },
            { content: { [Sequelize.Op.like]: `%${searchTerm}` } },
          ],
        },
        include: {
          model: database.Users,
        },
      });
      const post = await attributesExtrator(posts);
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  static async deletaUmPost(req, res) {
    try {
      const { id } = req.params;
      const { me } = req;
      console.log('estpou aqui: ', me);
      const founded = await database.Posts.findOne({
        where: { id: Number(id) }, include: { model: database.Users },
      });
      updateSupport(founded, me, res);
      const deleted = await database.Posts.destroy({ where: { id: Number(id) } });
      if (deleted) {
        return res.status(204).send('Post deletado com sucesso');
      }
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = PostController;
