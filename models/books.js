const { Sequelize, DataTypes } = require("sequelize");
// const { connection } = require("./Connection");
const sequelize = require("../database");

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: DataTypes.STRING,
    isbn: {
      type: DataTypes.STRING,
      unique: true,
    },
    publication_year: DataTypes.INTEGER,
  },
  {
    tableName: "books",
  }
);

module.exports = Book;
