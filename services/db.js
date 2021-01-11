const Sequelize = require('sequelize');
const UserModel = require('../models/User');
const ProductModel = require('../models/Product');
const SellModel = require('../models/Sell');

const sequelize = new Sequelize('sql10386341', 'sql10386341', '1At1wFCzJB', {
    host: 'sql10.freemysqlhosting.net',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Sell = SellModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log("Tablas sincronizadas");
})

module.exports = {
    User,
    Product,
    Sell
}