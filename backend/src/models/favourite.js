'use strict';
module.exports = (sequelize, DataTypes) => {
  var favourite = sequelize.define('favourite', {
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return favourite;
};