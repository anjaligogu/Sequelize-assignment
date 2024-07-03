const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sequelize", "anjalidb", "anjalidb", {
  host: "localhost",
  dialect: "postgres",
});

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}
checkConnection();

module.exports = sequelize;
