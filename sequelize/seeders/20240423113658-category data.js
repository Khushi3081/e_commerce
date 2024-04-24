'use strict';

/** @type {import('sequelize-cli').Migration} */
const categoryData = [
  {
    uuid: '01',
    name: 'electronics',
    image: '../public/images/electronics.jpg',
    status:"ACTIVE"
  },
  {
    uuid: '02',
    name: 'jewelery',
    image: '../public/images/jwellery.jpg',
    status:"ACTIVE"
  },
  {
    uuid: '03',
    name: "men's clothing",
    image: "../public/images/man's clothing.jpg",
    status:"ACTIVE"
  },
  {
    uuid: '04',
    name: "women's clothing",
    image: "../public/images/women's clothing.jpg",
    status:"ACTIVE"
  },
  {
    uuid: '05',
    name: 'Perfumes',
    image: '../public/images/perfume.jpg',
    status:"ACTIVE"
  },
];
module.exports = {
  async up(queryInterface, Sequelize) {
   return await queryInterface.bulkInsert('category', categoryData);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('category', null, {});
  },
};
