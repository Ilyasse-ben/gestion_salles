const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/enseignantEspaceController");
const { isEnseignant } = require("../middlewares/authMiddleware");

router.get("/enseignant/salles", isEnseignant, ctrl.listSalles);
router.get("/enseignant/reserver/:id", isEnseignant, ctrl.showReservationForm);
router.post("/enseignant/reserver/:id", isEnseignant, ctrl.reserver);
router.get("/enseignant/reservations", isEnseignant, ctrl.mesReservations);

module.exports = router;
