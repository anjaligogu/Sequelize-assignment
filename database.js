const { Sequelize } = require("sequelize");
const path = require("path");
require("dotenv").config({
  override: true,
  path: path.join(__dirname, "development.env"),
});
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
    port: process.env.PORT,
  }
);
module.exports = sequelize;
