const {
  createAuthor,
  readAuthorById,
  readAllAuthors,
  updateAuthorById,
  deleteAuthorById,
} = require("/Users/administrator/Desktop/Library/CRUD/authors_curd.js");

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
        title: "Itachi",
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
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await sequelize.close();
  }
}

// insertData();

performCRUDOperations();
