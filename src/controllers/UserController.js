const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json({ users });
  },  

  async store(req, res) {
    const user = req.body;

    if (user.name === '') {
      return res.status(400).json({error: 'Nome nao informado'});
    }

    if (user.email === '') {
        return res.status(400).json({message: 'Email nao informado'});
    }

    if (user.password_hash === '') {
        return res.status(400).json({message: 'Senha nao informada'});
    }

    const hash = await bcrypt.hash(user.password_hash, 8);

    user.password_hash = hash;

    User.create(user)
      .then(res.status(201).json(user))
      .catch(error => res.json({ error: `${error}` }))

    return res.status(201).json(user);
  },

  async update() {
    
  },

  async delete() {
    
  }
}