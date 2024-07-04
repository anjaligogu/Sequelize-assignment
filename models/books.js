const { Sequelize, DataTypes } = require("sequelize");
// const { connection } = require("./Connection");
const sequelize = require("../database");
// const sequelize = require("../connection");

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
// Book.associate = (models) => {
//   Book.belongsTo(models.Author, { foreignKey: "authorId" });
//   Book.hasMany(models.Loan, { foreignKey: "book_id" });
//   Book.hasMany(models.Reservation, { foreignKey: "book_id" });
// };
module.exports = Book;
