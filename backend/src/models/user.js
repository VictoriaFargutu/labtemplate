'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
   username: DataTypes.STRING,
   password: DataTypes.STRING,
   userType: DataTypes.STRING
		
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};