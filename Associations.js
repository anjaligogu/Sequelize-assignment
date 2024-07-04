// associations.js
const Author = require("./models/authors");
const Book = require("./models/books");
const Loan = require("./models/loans");
const Member = require("./models/members");
const Reservation = require("./models/reservations");

const initializeAssociations = () => {
  Author.hasMany(Book, { foreignKey: "authorId" });
  Book.belongsTo(Author, { foreignKey: "authorId" });

  Book.hasMany(Loan, { foreignKey: "book_id" });
  Loan.belongsTo(Book, { foreignKey: "book_id" });

  Member.hasMany(Loan, { foreignKey: "member_id" });
  Loan.belongsTo(Member, { foreignKey: "member_id" });

  Book.hasMany(Reservation, { foreignKey: "book_id" });
  Reservation.belongsTo(Book, { foreignKey: "book_id" });

  Member.hasMany(Reservation, { foreignKey: "member_id" });
  Reservation.belongsTo(Member, { foreignKey: "member_id" });
};

module.exports = initializeAssociations;
