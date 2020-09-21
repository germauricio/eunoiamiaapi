module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        username: type.STRING,
        password: type.STRING,
    })
  }