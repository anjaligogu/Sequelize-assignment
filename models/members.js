const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
// const { connection } = require("./Connection");
// const sequelize = require("../connection");

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
  {
    tableName: "members",
    timestamps: false,
    indexes: [
      {
        unique: false,
        fields: ["name", "email"],
      },
    ],
  }
);
// Member.associate = (models) => {
//   Member.hasMany(models.Loan, { foreignKey: "member_id" });
//   Member.hasMany(models.Reservation, { foreignKey: "member_id" });
// };
module.exports = Member;
