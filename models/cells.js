'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cells extends Model {
    static associate(models) {
      Cells.hasMany(models.Games, {
        foreignKey: 'cells_id'
      })
    }
  }
  Cells.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cells',
  });
  return Cells;
};