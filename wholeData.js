const Author = require("./models/authors");
const Book = require("./models/books");
const Loans = require("./models/loans");
const Member = require("./models/members");
const Reservations = require("./models/reservations");
const sequelize = require("./database");
// const { connection } = require("./Connection");

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synchronized");

//     return Author.create({
//       name: "Anji",
//       birth_year: 2002,
//       nationality: "Indian",
//     });
//   })
//   .then((author) => {
//     console.log("Author created:", author);

//     return Book.create({
//       title: "Sample Book",
//       authorId: 1,
//       genre: "Fiction",
//       isbn: "1234567890",
//       publication_year: 2002,
//     });
//   })
//   .then((book) => {
//     console.log("Book created:", book);

//     return Member.create({
//       name: "Naruto",
//       address: "123 Main St",
//       phone_number: "12345",
//       email: "Naro@example.com",
//     });
//   })
//   .then((member) => {
//     console.log("Member created:", member);

//     return Loans.create({
//       book_id: 1,
//       member_id: 1,
//       loan_date: new Date(),
//       due_date: new Date("2024-08-01"),
//     });
//   })
//   .then((loan) => {
//     console.log("Loan created:", loan);

//     return Reservations.create({
//       book_id: 1,
//       member_id: 1,
//       reservation_date: new Date(),
//     });
//   })
//   .then((reservation) => {
//     console.log("Reservation created:", reservation);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

// Define a function to insert data sequentially
async function insertData() {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synchronized");

    // Create an author
    const author = await Author.create({
      name: "Anji",
      birth_year: 2002,
      nationality: "Indian",
    });
    console.log("Author created:", author);

    // Create a book
    const book = await Book.create({
      title: "Sample Book",
      authorId: 4,
      genre: "Fiction",
      isbn: "1234567890",
      publication_year: 2002,
    });
    console.log("Book created:", book);

    // Create a member
    const member = await Member.create({
      name: "Naruto",
      address: "123 Main St",
      phone_number: "12345",
      email: "Naro@example.com",
    });
    console.log("Member created:", member);

    // Create a loan
    const loan = await Loans.create({
      book_id: 1,
      member_id: 2,
      loan_date: new Date(),
      due_date: new Date("2024-08-01"),
    });
    console.log("Loan created:", loan);

    // Create a reservation
    const reservation = await Reservations.create({
      book_id: 1,
      member_id: 1,
      reservation_date: new Date(),
    });
    console.log("Reservation created:", reservation);

    console.log("Data insertion completed.");

    //     const books = await Book.findAll();
    //     console.table(books.map((book) => book.toJSON()));

    const authors = await Author.findAll();
    console.log("Authors:");
    console.table(authors.map((author) => author.toJSON()));

    const books = await Book.findAll();
    console.log("Books:");
    console.table(books.map((book) => book.toJSON()));

    const members = await Member.findAll();
    console.log("Members:");
    console.table(members.map((member) => member.toJSON()));

    const loans = await Loans.findAll();
    console.log("Loans:");
    console.table(loans.map((loan) => loan.toJSON()));

    const reservations = await Reservations.findAll();
    console.log("Reservations:");
    console.table(reservations.map((reservation) => reservation.toJSON()));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await sequelize.close();
  }
}

insertData();
