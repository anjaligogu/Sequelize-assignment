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
    timestamps: true, // add the createdat and updatedAt timings.
    createdAt: false, //  I don't want createdAt
    updatedAt: "updateTimestamp", //  I want updatedAt to actually be called updateTimestamp
    indexes: [
      // {
      //   unique: false,
      //   fields: ["name"],
      // },
      // {
      //   unique: false,
      //   fields: ["nationality"],
      // },
      {
        unique: false,
        fields: ["name", "nationality"], //  multi-column index
      },
    ],
  }
);

// Author.associate = (models) => {
//   Author.hasMany(models.Book, { foreignkey: "authorId" });
// };

module.exports = Author;
