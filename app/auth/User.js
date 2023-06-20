const {DataTypes} = require('sequelize')
const sequelize = require('../../config/db')
const Role = sequelize('Role')
const Company = sequelize('Company')
const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

User.belongsTo(Role,{foreignKey:'roleId'})
User.belongsTo(Company,{foreignKey:'companyId'})
module.exports = User;
