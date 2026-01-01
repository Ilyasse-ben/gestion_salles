const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  salle: { type: mongoose.Schema.Types.ObjectId, ref: "Salle" },
  enseignant: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  heureDebut: String,
  heureFin: String
});

module.exports = mongoose.model("Reservation", ReservationSchema);
