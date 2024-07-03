const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const Member = sequelize.define(
  "Member",
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
    address: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { tableName: "members" }
);

module.exports = Member;
