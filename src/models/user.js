const { Model } = require("sequelize");
const sequelize = require("sequelize");
const db = require("../database");

const user = db.define("user", {
  id: {
  type: sequelize.DataTypes.INTEGER,
  allowNull: true,
  primaryKey: true
  },
  kode: {
    type: sequelize.DataTypes.STRING,
  },
  first_name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
},{
  freezeTableName: true,
  timestamps: false
});

module.exports = user;
