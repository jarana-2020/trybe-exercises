'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Books', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Books', 'updatedAt');
  }
};
