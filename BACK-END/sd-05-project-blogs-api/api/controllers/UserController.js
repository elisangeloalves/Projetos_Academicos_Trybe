const database = require('../models');
const { tokenGenerator } = require('../services');

class UserController {
  static async cadastraUsuario(req, res) {
    const novoUsuario = { ...req.body };
    try {
      const user = await database.Users.create(novoUsuario);
      return res.status(201).json(user);
    } catch (error) {
      if (error.message === 'Validation error') {
        return res.status(409).json({ message: 'Usuário já existe' });
      }
      res.status(500).json(error.message);
    }
  }

  static async efetuaLogin(req, res) {
    const { email, password } = req.body;
    try {
      const usuarioLogado = await database.Users.findOne({
        where: {
          email,
        },
      });
      if (usuarioLogado && password === usuarioLogado.password) {
        const token = await tokenGenerator(usuarioLogado);
        return res.status(200).json({ token });
      }
      return res.status(400).json({ message: 'Campos inválidos' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async buscaTodosUsuarios(_req, res) {
    try {
      const usuarios = await database.Users.findAll();
      res.status(200).json(usuarios);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async buscaUm(req, res) {
    try {
      const { id } = req.params;
      const pessoa = await database.Users.findOne({
        where: {
          id: Number(id),
        },
      });
      if (pessoa !== null) {
        return res.status(200).json(pessoa);
      }
      return res.status(404).json({ message: 'Usuário não existe' });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  static async deletaProprioUsuario(req, res) {
    try {
      const {
        me: { email },
      } = req;
      const pessoaDeletada = await database.Users.destroy({
        where: {
          email,
        },
      });

      if (!pessoaDeletada) return res.status(404).send('Esta pessoa nao existe no banco de dados.');
      res.status(204).send('Pessoa deletada com sucesso!');
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async buscaPorEmail(email) {
    try {
      const usuarioLogado = await database.Users.findOne({
        where: {
          email,
        },
      });
      return usuarioLogado;
    } catch (error) {
      return { message: error.message };
    }
  }

  static async buscaUsuarioPorId(id) {
    try {
      const usuario = await database.Users.findOne({
        where: {
          id: Number(id),
        },
      });
      if (usuario) {
        return usuario;
      }
    } catch (error) {
      return { message: error.message };
    }
  }
}

module.exports = UserController;
