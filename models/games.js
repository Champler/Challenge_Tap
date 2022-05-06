'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    static associate(models) {
      Games.belongsTo(models.Cells, {
        foreignKey: 'id',
        target_key: 'cells_id'
      })
    }
  }
  Games.init({
    state: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};