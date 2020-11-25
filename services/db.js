const Sequelize = require('sequelize');
const UserModel = require('../models/User');
const ProductModel = require('../models/Product');

const sequelize = new Sequelize('SFOpIrcroG', 'SFOpIrcroG', 'wvKobON9g9', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log("Tablas sincronizadas");
})

module.exports = {
    User,
    Product
}