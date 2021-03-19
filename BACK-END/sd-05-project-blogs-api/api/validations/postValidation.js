module.exports = (req, res, next) => {
  const { title, content } = req.body;

  if (!title || title === '') {
    return res.status(400).json({ message: '"title" is required' });
  }

  if (!content || content === '') {
    return res.status(400).json({ message: '"content" is required' });
  }
  next();
};
