const Loans = require("/Users/administrator/Desktop/Library/models/loans.js");

// Function to create a new loan
async function createLoan(data) {
  try {
    const loan = await Loans.create(data);
    console.log("Loan created:", loan.toJSON());
  } catch (error) {
    console.error("Error in creating loan:", error);
  }
}

// Function to read a loan by ID
async function readLoanById(id) {
  try {
    const loan = await Loans.findOne({ where: { id: id } });
    if (loan) {
      console.log("Loan found:", loan.toJSON());
      return loan;
    } else {
      console.log("Loan not found");
      return null;
    }
  } catch (error) {
    console.error("Error finding loan:", error);
  }
}

// Function to read all loans
async function readAllLoans() {
  try {
    const loans = await Loans.findAll();
    console.table(loans.map((loan) => loan.toJSON()));
  } catch (error) {
    console.error("Error reading loans:", error);
  }
}

// Function to update a loan by ID
async function updateLoanById(id, newData) {
  try {
    await Loans.update(newData, {
      where: { id: id },
    });
    console.log("Loan updated successfully");
  } catch (error) {
    console.error("Error updating loan:", error);
  }
}

// Function to delete a loan by ID
async function deleteLoanById(id) {
  try {
    await Loans.destroy({
      where: { id: id },
    });
    console.log("Loan deleted successfully");
  } catch (error) {
    console.error("Error deleting loan:", error);
  }
}

module.exports = {
  createLoan,
  readLoanById,
  readAllLoans,
  updateLoanById,
  deleteLoanById,
};
