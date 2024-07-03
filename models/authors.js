const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const Author = sequelize.define(
  "Author",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_year: DataTypes.INTEGER,
    nationality: DataTypes.STRING,
  },
  {
    tableName: "authors",
  }
);

module.exports = Author;
