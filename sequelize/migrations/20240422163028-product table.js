'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable('products', {
        uuid: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
        category_uuid: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'category',
            key: 'uuid',
          },
        },
        title: { type: Sequelize.STRING, allowNull: false },
        description: { type: Sequelize.TEXT, allowNull: false },
        images: { type: Sequelize.STRING, allowNull: false },
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

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable('products', { transaction: t });
    });
  }
};
