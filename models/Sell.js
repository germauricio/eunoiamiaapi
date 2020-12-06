module.exports = (sequelize, type) => {
    return sequelize.define('sell', {
        contact: type.STRING,
        total: type.INTEGER,
        product_name: type.STRING,
        shipment: type.STRING
    })
  }