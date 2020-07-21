const Sequelize = require('sequelize');

const sequelize = new Sequelize('cook', 'dailyreport', 'dwarf112!@', {
    dialect: 'mysql',
    host: '101.101.167.169'
});

module.exports = sequelize;