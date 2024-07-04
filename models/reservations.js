const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
// const { connection } = require("./Connection");
// const sequelize = require("../connection");

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
// Reservation.associate = (models) => {
//   Reservation.belongsTo(models.Book, { foreignKey: "book_id" });
//   Reservation.belongsTo(models.Member, { foreignKey: "member_id" });
// };
module.exports = Reservations;
