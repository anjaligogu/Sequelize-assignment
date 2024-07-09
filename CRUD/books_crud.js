const Book = require("/Users/administrator/Desktop/Library/models/books.js");

// Function to create a new book
async function createBook(data) {
  try {
    const book = await Book.create(data);
    console.log("Book created:", book.toJSON());
  } catch (error) {
    console.error("Error in creating book:", error);
  }
}

// Function to read a book by ID
async function readBookById(id) {
  try {
    const book = await Book.findOne({ where: { id: id } });
    if (book) {
      console.log("Book found:", book.toJSON());
      return book;
    } else {
      console.log("Book not found");
      return null;
    }
  } catch (error) {
    console.error("Error finding book:", error);
  }
}

// Function to read all books
async function readAllBooks() {
  try {
    const books = await Book.findAll();
    console.table(books.map((book) => book.toJSON()));
  } catch (error) {
    console.error("Error reading books:", error);
  }
}

// Function to update a book by ID
async function updateBookById(id, newData) {
  try {
    await Book.update(newData, {
      where: { id: id },
    });
    console.log("Book updated successfully");
  } catch (error) {
    console.error("Error updating book:", error);
  }
}

// Function to delete a book by ID
async function deleteBookById(id) {
  try {
    await Book.destroy({
      where: { id: id },
    });
    console.log("Book deleted successfully");
  } catch (error) {
    console.error("Error deleting book:", error);
  }
}

module.exports = {
  createBook,
  readBookById,
  readAllBooks,
  updateBookById,
  deleteBookById,
};
