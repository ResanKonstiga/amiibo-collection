const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'id' });
    }
  }
  Collection.init({
    userId: DataTypes.INTEGER,
    amiiboSeries: DataTypes.STRING,
    character: DataTypes.STRING,
    gameSeries: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    img: DataTypes.STRING,
    releaseAu: DataTypes.STRING,
    releaseEu: DataTypes.STRING,
    releaseJp: DataTypes.STRING,
    releaseNa: DataTypes.STRING,
    tail: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Collection',
  });
  return Collection;
};
