const { Model, DataTypes } = require('sequelize');

class Ad extends Model {
  static init(sequelize) {
    super.init({
      image: DataTypes.STRING,
      price: DataTypes.FLOAT,
      price_negotiable: DataTypes.BOOLEAN,
      title: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Ad;
