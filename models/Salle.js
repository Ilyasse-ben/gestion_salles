const mongoose = require("mongoose");

const SalleSchema = new mongoose.Schema({
  nom: String,
  capacite: Number,
  type: String
});

module.exports = mongoose.model("Salle", SalleSchema);
