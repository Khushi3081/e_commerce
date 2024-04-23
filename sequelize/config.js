const Sequelize = require('sequelize');
const path = require('path');

// Load the configuration from config.json
const config = require(path.join(__dirname, 'config.json'))['development'];
// Initialize Sequelize with the configuration
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
