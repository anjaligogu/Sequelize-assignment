const Author = require("../models/authors");

// Function to create a new author
async function createAuthor(data) {
  try {
    const author = await Author.create(data);
    console.log('Author created:', author.toJSON());
  } catch (error) {
    console.error('Error in creating author:', error);
  }
}

// Function to read an author by ID
async function readAuthorById(id) {
  try {
    const author = await Author.findOne({ where: { id: id } });
    if (author) {
      console.log('Author found:', author.toJSON());
      return author;
    } else {
      console.log('Author not found');
      return null;
    }
  } catch (error) {
    console.error('Error finding author:', error);
  }
}

// Function to read all authors
async function readAllAuthors() {
  try {
    const authors = await Author.findAll();
    console.table(authors.map(author => author.toJSON()));
  } catch (error) {
    console.error('Error reading authors:', error);
  }
}

// Function to update an author by ID
async function updateAuthorById(id, newData) {
  try {
    await Author.update(newData, {
      where: { id: id }
    });
    console.log('Author updated successfully');
  } catch (error) {
    console.error('Error updating author:', error);
  }
}

// Function to delete an author by ID
async function deleteAuthorById(id) {
  try {
    await Author.destroy({
      where: { id: id }
    });
    console.log('Author deleted successfully');
  } catch (error) {
    console.error('Error deleting author:', error);
  }
}

module.exports = { createAuthor, readAuthorById, readAllAuthors, updateAuthorById, deleteAuthorById };
