'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
<<<<<<< HEAD
   username: DataTypes.STRING,
   password: DataTypes.STRING,
   userType: DataTypes.STRING
		
=======
   username:DataTypes.STRING,
   password:DataTypes.STRING,
   userType:DataTypes.STRING,
	
>>>>>>> origin/sigin-profile
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};