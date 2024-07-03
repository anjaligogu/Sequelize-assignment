const Author = require("./models/authors");
const Book = require("./models/books");
const Loans = require("./models/loans");
const Member = require("./models/members");
const Reservations = require("./models/reservations");
const sequelize = require("./database");

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synchronized");

    return Author.create({
      name: "Anji",
      birth_year: 2002,
      nationality: "Indian",
    });
  })
  .then((author) => {
    console.log("Author created:", author);

    return Book.create({
      title: "Sample Book",
      authorId: 1,
      genre: "Fiction",
      isbn: "1234567890",
      publication_year: 2002,
    });
  })
  .then((book) => {
    console.log("Book created:", book);

    return Member.create({
      name: "Naruto",
      address: "123 Main St",
      phone_number: "12345",
      email: "Naro@example.com",
    });
  })
  .then((member) => {
    console.log("Member created:", member);

    return Loans.create({
      book_id: 1,
      member_id: 1,
      loan_date: new Date(),
      due_date: new Date("2024-08-01"),
    });
  })
  .then((loan) => {
    console.log("Loan created:", loan);

    return Reservations.create({
      book_id: 1,
      member_id: 1,
      reservation_date: new Date(),
    });
  })
  .then((reservation) => {
    console.log("Reservation created:", reservation);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
