'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('AuthCode',{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true

    },

   
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true

  },

  valid_till: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true

},
    
  
    })
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('AuthCode',{})
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
