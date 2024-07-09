const {
  createAuthor,
  readAuthorById,
  readAllAuthors,
  updateAuthorById,
  deleteAuthorById,
} = require("/Users/administrator/Desktop/Library/CRUD/authors_crud.js");
const {
  createBook,
  readBookById,
  readAllBooks,
  updateBookById,
  deleteBookById,
} = require("/Users/administrator/Desktop/Library/CRUD/books_crud.js");
const {
  createLoan,
  readLoanById,
  readAllLoans,
  updateLoanById,
  deleteLoanById,
} = require("/Users/administrator/Desktop/Library/CRUD/loans_crud.js");
const {
  createMember,
  readMemberById,
  readAllMembers,
  updateMemberById,
  deleteMemberById,
} = require("/Users/administrator/Desktop/Library/CRUD/members_crud.js");
const {
  createReservation,
  readReservationById,
  readAllReservations,
  updateReservationById,
  deleteReservationById,
} = require("/Users/administrator/Desktop/Library/CRUD/reservations_crud.js");

const Author = require("./models/authors");
const Book = require("./models/books");
const Loans = require("./models/loans");
const Member = require("./models/members");
const Reservations = require("./models/reservations");
const sequelize = require("./database");

// Function to insert initial data
async function insertData() {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synchronized");

    // Bulk create authors
    const authors = await Author.bulkCreate([
      { name: "Anji", birth_year: 2002, nationality: "Indian" },
      { name: "Naruto", birth_year: 2000, nationality: "Japanese" },
      { name: "Shikamaroo", birth_year: 1998, nationality: "Japanese" },
      { name: "Akamaroo", birth_year: 1996, nationality: "Japanese" },
    ]);
    console.log("Authors created:", authors);

    // const anjiAuthor = await Author.findOne({ where: { name: "Anji" } });
    // if (anjiAuthor) {
    //   await anjiAuthor.update({ name: "Darling", birth_year: 1978, nationality: "Indian" });
    //   console.log("Author 'Anji' updated to 'Darling':", anjiAuthor);
    // }

    // // Create a new author "Prabhas"
    // const newAuthor = await Author.create({ name: "Prabhas", birth_year: 1980, nationality: "Indian" });
    // console.log("New author 'Prabhas' created:", newAuthor);

    // Bulk create books
    const books = await Book.bulkCreate([
      {
        title: "Sample Book",
        authorId: authors[0].id,
        genre: "Fiction",
        isbn: "1234567890",
        publication_year: 2002,
      },
      {
        title: "Jiraiya",
        authorId: authors[1].id,
        genre: "Life",
        isbn: "7647",
        publication_year: 1990,
      },
      {
        title: "Itachi",
        authorId: authors[2].id,
        genre: "Love",
        isbn: "9876543210",
        publication_year: 1985,
      },
      {
        title: "Madara",
        authorId: authors[3].id,
        genre: "Fight",
        isbn: "4567890123",
        publication_year: 1987,
      },
    ]);
    console.log("Books created:", books);

    // Create a member
    const member = await Member.create({
      name: "Naruto",
      address: "123 Main St",
      phone_number: "12345",
      email: "Naro@example.com",
    });
    console.log("Member created:", member);

    // Create loans
    const loans = await Loans.bulkCreate([
      {
        book_id: books[0].id,
        member_id: member.id,
        loan_date: new Date(),
        due_date: new Date("2024-08-01"),
      },
      {
        book_id: books[2].id,
        member_id: member.id,
        loan_date: new Date(),
        due_date: new Date("2024-07-01"),
      },
    ]);
    console.log("Loans created:", loans);

    // Create a reservation
    const reservation = await Reservations.create({
      book_id: books[1].id,
      member_id: member.id,
      reservation_date: new Date(),
    });
    console.log("Reservation created:", reservation);

    console.log("Data insertion completed.");

    // Display all data
    const allAuthors = await Author.findAll();
    console.log("Authors:");
    console.table(allAuthors.map((author) => author.toJSON()));

    const allBooks = await Book.findAll();
    console.log("Books:");
    console.table(allBooks.map((book) => book.toJSON()));

    const allMembers = await Member.findAll();
    console.log("Members:");
    console.table(allMembers.map((member) => member.toJSON()));

    const allLoans = await Loans.findAll();
    console.log("Loans:");
    console.table(allLoans.map((loan) => loan.toJSON()));

    const allReservations = await Reservations.findAll();
    console.log("Reservations:");
    console.table(allReservations.map((reservation) => reservation.toJSON()));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await sequelize.close();
  }
}

// Function to perform CRUD operations
async function performCRUDOperations() {
  try {
    await sequelize.sync({ force: true });
    console.log("Database sync");

    await createAuthor({
      name: "Prabhas",
      birth_year: 1980,
      nationality: "Indian",
    });

    const authorId = 1;
    await readAuthorById(authorId);

    await updateAuthorById(authorId, {
      name: "Darling",
      birth_year: 1978,
      nationality: "Indian",
    });

    await readAuthorById(authorId);

    await deleteAuthorById(authorId);

    await readAuthorById(authorId);

    console.log("CRUD operations completed successfully.");

    // const allAuthors = await readAllAuthors();
    // console.table(allAuthors.map((author) => author.toJSON()));
    await createBook({
      title: "New Book",
      authorId: 2,
      genre: "Fantasy",
      isbn: "1111111111",
      publication_year: 2024,
    });

    const bookId = 1;
    await readBookById(bookId);

    await updateBookById(bookId, {
      title: "Updated Book",
      authorId: 3,
      genre: "Science Fiction",
      isbn: "2222222222",
      publication_year: 2025,
    });

    await readBookById(bookId);

    await deleteBookById(bookId);

    await readBookById(bookId);

    await createMember({
      name: "Sasuke",
      address: "456 Another St",
      phone_number: "67890",
      email: "Sasuke@example.com",
    });

    const memberId = 1;
    await readMemberById(memberId);

    await updateMemberById(memberId, {
      name: "Sasuke Updated",
      address: "789 New St",
      phone_number: "54321",
      email: "SasukeUpdated@example.com",
    });

    await readMemberById(memberId);

    await deleteMemberById(memberId);

    await readMemberById(memberId);

    await createLoan({
      book_id: 1,
      member_id: 1,
      loan_date: new Date(),
      due_date: new Date("2024-09-01"),
    });

    const loanId = 1;
    await readLoanById(loanId);

    await updateLoanById(loanId, {
      book_id: 2,
      member_id: 2,
      loan_date: new Date(),
      due_date: new Date("2024-10-01"),
    });

    await readLoanById(loanId);

    await deleteLoanById(loanId);

    await readLoanById(loanId);

    await createReservation({
      book_id: 2,
      member_id: 1,
      reservation_date: new Date(),
    });

    const reservationId = 1;
    await readReservationById(reservationId);

    await updateReservationById(reservationId, {
      book_id: 3,
      member_id: 2,
      reservation_date: new Date(),
    });

    await readReservationById(reservationId);

    await deleteReservationById(reservationId);

    await readReservationById(reservationId);

    console.log("CRUD operations completed successfully.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await sequelize.close();
  }
}

// insertData();

performCRUDOperations();
