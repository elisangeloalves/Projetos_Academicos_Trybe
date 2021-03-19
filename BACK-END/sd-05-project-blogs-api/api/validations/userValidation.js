const emailValidation = (email) => {
  const mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email) {
    const resultado = !!email.match(mail);
    return resultado;
  }
};

module.exports = (req, res) => {
  const { email, password } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!emailValidation(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
};
