const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
// const { connection } = require("./Connection");
// const sequelize = require("../connection");

const Loans = sequelize.define(
  "Loans",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    loan_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "loans",
    timestamps: false,
  }
);
// Loan.associate = (models) => {
//   Loan.belongsTo(models.Book, { foreignKey: "book_id" });
//   Loan.belongsTo(models.Member, { foreignKey: "member_id" });
// };

module.exports = Loans;
