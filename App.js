// import express from "express";
const express = require("express");
const app = express();
const route = express.Router();
const sequelize = require("/Users/administrator/Desktop/Library/database.js");
const setUpAssociations = require("/Users/administrator/Desktop/Library/Associations.js");
const authorRoutes = require("./Routes/authors_routes.js");
const bookRoutes = require("./Routes/books_routes.js");
const loanRoutes = require("./Routes/loans_routes.js");
const memberRoutes = require("./Routes/members_routes.js");
const reservationRoutes = require("./Routes/reservations_routes.js");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// const data = require("/Users/administrator/Desktop/Library/wholeData.js");

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    setUpAssociations();

    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database or sync models:", error);
  }
}

// To verify that the tables were created successfully
async function listTables() {
  try {
    const tables = await sequelize.getQueryInterface().showAllSchemas();
    console.log(tables);
  } catch (error) {
    console.error("Error listing tables:", error);
  }
}

initializeDatabase().then(() => {
  listTables();
});

// Ping route
app.use("/api/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/members", memberRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
