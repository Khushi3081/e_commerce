'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable(
        'category',
        {
          uuid: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
          name: { type: Sequelize.STRING, allowNull: false },
          image: { type: Sequelize.TEXT, allowNull: true },
          status: { type: Sequelize.STRING, allowNull: false },
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
        },
        { transaction: t },
      );
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable('category', { transaction: t });
    });
  }
};
