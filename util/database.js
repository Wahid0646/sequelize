const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', 'Wahid@0646', {
  dialect: 'mysql',
  host: '127.0.0.1'
});

module.exports = sequelize;
