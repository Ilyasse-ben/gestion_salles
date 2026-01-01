const User = require("../models/User");
const Reservation = require("../models/Reservation");

// Dashboard admin
exports.dashboard = (req, res) => {
  res.render("admin/dashboard");
};

// Liste enseignants
exports.listEnseignants = async (req, res) => {
  const enseignants = await User.find({ role: "enseignant" });
  res.render("admin/enseignants", { enseignants });
};

// Voir réservations
exports.listReservations = async (req, res) => {
  const reservations = await Reservation
    .find()
    .populate("salle")
    .populate("enseignant");

  res.render("admin/reservations", { reservations });
};
