'use strict';
module.exports = (sequelize, DataTypes) => {
  var continent = sequelize.define('continent', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return continent;
};