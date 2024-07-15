// test.js
const { findBooksByAuthor, findOverdueLoans } = require("Queries_routes.js");
const {
  createLoanTransaction,
  createReservationTransaction,
} = require("./Transactions.js");

async function testQueriesAndTransactions(authorName) {
  try {
    // Test finding books by author
    const booksByAuthor = await findBooksByAuthor(authorName);
    console.log(`Books by ${authorName}:`, booksByAuthor);

    // Test listing overdue loans
    const overdueLoans = await findOverdueLoans();
    console.log("Overdue Loans:", overdueLoans);

    // Test creating a loan transaction
    const newLoan = await createLoanTransaction(
      1,
      1,
      new Date("2024-07-13"),
      new Date("2024-08-13")
    );
    console.log("Created Loan:", newLoan);

    // Test creating a reservation transaction
    const newReservation = await createReservationTransaction(
      1,
      1,
      new Date("2024-07-15")
    );
    console.log("Created Reservation:", newReservation);
  } catch (error) {
    console.error("Error testing queries and transactions:", error);
  }
}

// Accepting author name as a command-line argument
const authorName = process.argv[2] || "J.K. Rowling"; // Default to 'J.K. Rowling' if no argument is provided
testQueriesAndTransactions(authorName);
