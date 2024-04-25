'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable('productsCart', {
        uuid: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true,autoIncrement :true },
        product_uuid: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'products',
            key: 'uuid',
          },
        },
        price: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        total_price: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        payment_done: {
          type: Sequelize.ENUM('PENDING', 'COMPLETED'),
          allowNull: false,
          defaultValue: 'PENDING',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          allowNull: true,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        },
        deleted_at: { type: Sequelize.Sequelize.DATE, allowNull: true },
      });
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable('productsCart', { transaction: t });
    });
  },
};
