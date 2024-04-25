'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('products', 'addedToCart', {
      type: Sequelize.BOOLEAN,
      defaultValue:false
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('products', 'addedToCart');
  },
};
