const Salle = require("../models/Salle");

// LISTE
exports.list = async (req, res) => {
  const salles = await Salle.find();
  res.render("admin/salles", { salles });
};

// FORM AJOUT
exports.showAdd = (req, res) => {
  res.render("admin/addSalle");
};

// AJOUT
exports.add = async (req, res) => {
  await Salle.create(req.body);
  res.redirect("/admin/salles");
};

// FORM MODIF
exports.showEdit = async (req, res) => {
  const salle = await Salle.findById(req.params.id);
  res.render("admin/editSalle", { salle });
};

// MODIF
exports.update = async (req, res) => {
  await Salle.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/admin/salles");
};

// SUPPRESSION
exports.delete = async (req, res) => {
  await Salle.findByIdAndDelete(req.params.id);
  res.redirect("/admin/salles");
};
