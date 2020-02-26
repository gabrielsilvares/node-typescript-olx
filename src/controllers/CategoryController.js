const Category = require('../models/Category');

module.exports = {
  
  async index(req, res) {
    const categories = await Category.findAll();
    
    return res.json({ categories });
  },

  async store(req, res) {
    const category = req.body;

    Category.create(category)
      .then(res.status(201).json(category))
      .catch(error => res.json(error))

    return res.status(201).json(category);
  }
}