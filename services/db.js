const Sequelize = require('sequelize');
const UserModel = require('../models/User');
const ProductModel = require('../models/Product');
const SellModel = require('../models/Sell');

const sequelize = new Sequelize('eunoiadb', 'admin', 'fhF9v2rAjq', {
    host: 'eunoiamia-prod.chm5tno4ikas.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Sell = SellModel(sequelize, Sequelize);

sequelize.sync({ force: true })
.then(() => {
    console.log("Tablas sincronizadas");
})

module.exports = {
    User,
    Product,
    Sell
}