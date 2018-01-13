'use strict';
module.exports = (sequelize, DataTypes) => {
  var image = sequelize.define('image', {
    path: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return image;
};