const Reservations = require("/Users/administrator/Desktop/Library/models/reservations.js");

// Function to create a new reservation
async function createReservation(data) {
  try {
    const reservation = await Reservations.create(data);
    console.log("Reservation created:", reservation.toJSON());
  } catch (error) {
    console.error("Error in creating reservation:", error);
  }
}

// Function to read a reservation by ID
async function readReservationById(id) {
  try {
    const reservation = await Reservations.findOne({ where: { id: id } });
    if (reservation) {
      console.log("Reservation found:", reservation.toJSON());
      return reservation;
    } else {
      console.log("Reservation not found");
      return null;
    }
  } catch (error) {
    console.error("Error finding reservation:", error);
  }
}

// Function to read all reservations
async function readAllReservations() {
  try {
    const reservations = await Reservations.findAll();
    console.table(reservations.map((reservation) => reservation.toJSON()));
  } catch (error) {
    console.error("Error reading reservations:", error);
  }
}

// Function to update a reservation by ID
async function updateReservationById(id, newData) {
  try {
    await Reservations.update(newData, {
      where: { id: id },
    });
    console.log("Reservation updated successfully");
  } catch (error) {
    console.error("Error updating reservation:", error);
  }
}

// Function to delete a reservation by ID
async function deleteReservationById(id) {
  try {
    await Reservations.destroy({
      where: { id: id },
    });
    console.log("Reservation deleted successfully");
  } catch (error) {
    console.error("Error deleting reservation:", error);
  }
}

module.exports = {
  createReservation,
  readReservationById,
  readAllReservations,
  updateReservationById,
  deleteReservationById,
};
