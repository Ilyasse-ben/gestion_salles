exports.isAdmin = (req, res, next) => {
  if (!req.session.user || req.session.user.role !== "administration") {
    return res.redirect("/login");
  }
  next();
};
exports.isEnseignant = (req, res, next) => {
  if (!req.session.user || req.session.user.role !== "enseignant") {
    return res.redirect("/login");
  }
  next();
};

