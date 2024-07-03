const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const Reservations = sequelize.define(
  "Reservations",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "books",
        key: "id",
      },
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "members",
        key: "id",
      },
    },
    reservation_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "reservations",
  }
);

module.exports = Reservations;
