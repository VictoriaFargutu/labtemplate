'use strict';
module.exports = (sequelize, DataTypes) => {
  var country = sequelize.define('country', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return country;
};