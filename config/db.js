const Sequelize = require('sequelize');

const db= new Sequelize('shoppingApp', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    port: 8889,
});

module.exports = {db};