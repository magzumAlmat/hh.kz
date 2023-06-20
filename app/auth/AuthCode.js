const {DataTypes} = require('sequelize')
const sequelize = require('../../config/db')

const AuthCode = sequelize.define('AuthCode', {
    email: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true
     

    },
  code:{
    type: DataTypes.STRING,
    allowNull: false,
  },

  valid_till:{
    type: DataTypes.STRING,
    allowNull: false,
  }
})


module.exports = Company;
