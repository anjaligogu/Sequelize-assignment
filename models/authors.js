const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
// const sequelize = require("../connection");

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

// Author.associate = (models) => {
//   Author.hasMany(models.Book, { foreignkey: "authorId" });
// };

module.exports = Author;
