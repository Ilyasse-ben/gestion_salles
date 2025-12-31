const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Afficher formulaire login
exports.showLogin = (req, res) => {
  res.render("login");
};

// Afficher formulaire register
exports.showRegister = (req, res) => {
  res.render("register");
};

// Inscription
exports.register = async (req, res) => {
  const { nom, email, motDePasse, role } = req.body;

  const hashedPassword = await bcrypt.hash(motDePasse, 10);

  const user = new User({
    nom,
    email,
    motDePasse: hashedPassword,
    role
  });

  await user.save();
  res.redirect("/login");
};

// Connexion
exports.login = async (req, res) => {
  const { email, motDePasse } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.send("Utilisateur non trouvé");

  const isMatch = await bcrypt.compare(motDePasse, user.motDePasse);
  if (!isMatch) return res.send("Mot de passe incorrect");

  req.session.user = user;
  res.send(`Bienvenue ${user.nom} (${user.role})`);
};

// Déconnexion
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};
