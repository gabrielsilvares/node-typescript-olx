const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      img: DataTypes.STRING,
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Category;
