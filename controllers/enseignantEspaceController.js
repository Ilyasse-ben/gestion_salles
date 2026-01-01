const Salle = require("../models/Salle");
const Reservation = require("../models/Reservation");

// Voir toutes les salles
exports.listSalles = async (req, res) => {
  const salles = await Salle.find();
  res.render("enseignant/salles", { salles });
};

// Formulaire réservation
exports.showReservationForm = async (req, res) => {
  const salle = await Salle.findById(req.params.id);
  res.render("enseignant/reserver", { salle });
};

// Enregistrer réservation
exports.reserver = async (req, res) => {
  const { date, heureDebut, heureFin } = req.body;

  await Reservation.create({
    salle: req.params.id,
    enseignant: req.session.user._id,
    date,
    heureDebut,
    heureFin
  });

  res.redirect("/enseignant/reservations");
};

// Voir mes réservations
exports.mesReservations = async (req, res) => {
  const reservations = await Reservation
    .find({ enseignant: req.session.user._id })
    .populate("salle");

  res.render("enseignant/reservations", { reservations });
};
