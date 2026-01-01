const User = require("../models/User");
const bcrypt = require("bcryptjs");

// LISTE
exports.list = async (req, res) => {
  const enseignants = await User.find({ role: "enseignant" });
  res.render("admin/enseignants", { enseignants });
};

// FORM AJOUT
exports.showAdd = (req, res) => {
  res.render("admin/addEnseignant");
};

// AJOUT
exports.add = async (req, res) => {
  const { nom, email, motDePasse } = req.body;
  const hash = await bcrypt.hash(motDePasse, 10);

  await User.create({
    nom,
    email,
    motDePasse: hash,
    role: "enseignant"
  });

  res.redirect("/admin/enseignants");
};

// FORM MODIFICATION
exports.showEdit = async (req, res) => {
  const enseignant = await User.findById(req.params.id);
  res.render("admin/editEnseignant", { enseignant });
};

// MODIFICATION
exports.update = async (req, res) => {
  const { nom, email } = req.body;
  await User.findByIdAndUpdate(req.params.id, { nom, email });
  res.redirect("/admin/enseignants");
};

// SUPPRESSION
exports.delete = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/admin/enseignants");
};
