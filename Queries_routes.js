// queries.js
const Author = require("./models/authors");
const Book = require("./models/books");
const Loans = require("./models/loans");
const Member = require("./models/members");
const Reservations = require("./models/reservations");
const sequelize = require("./database");
const { Op } = require("sequelize");

// Query to find books by a specific author
async function findBooksByAuthor(authorName) {
  try {
    const author = await Author.findOne({
      where: { name: authorName },
      include: [{ model: Book }],
    });

    if (!author) {
      return `Author with name ${authorName} not found.`;
    }

    return author.Books;
  } catch (error) {
    console.error("Error finding books by author:", error);
    throw error;
  }
}

// Query to list overdue loans
async function findOverdueLoans() {
  try {
    const overdueLoans = await Loans.findAll({
      where: {
        due_date: {
          [Op.lt]: new Date(),
        },
      },
      include: [Book, Member],
    });

    return overdueLoans;
  } catch (error) {
    console.error("Error finding overdue loans:", error);
    throw error;
  }
}

module.exports = { findBooksByAuthor, findOverdueLoans };
