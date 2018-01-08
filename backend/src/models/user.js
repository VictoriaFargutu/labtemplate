'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    id: DataTypes.INTEGER,
	allowNull: false,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};