'use strict';
module.exports = (sequelize, DataTypes) => {
  var person = sequelize.define('person', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return person;
};