module.exports = (sequelize, type) => {
  return sequelize.define('product', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: type.STRING,
      price: type.STRING,
      stock: type.INTEGER,
      description: type.STRING,
      detail: type.STRING(2000),
      image: type.STRING,
      category: type.STRING
  })
}