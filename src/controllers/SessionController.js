const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Usuário ou senha não conferem' })
    }

    return res.json({
      user,
      token: user.generateToken()
    });
  }
}