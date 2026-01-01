const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { isAdmin } = require("../middlewares/authMiddleware");

router.get("/admin", isAdmin, adminController.dashboard);
router.get("/admin/enseignants", isAdmin, adminController.listEnseignants);
router.get("/admin/reservations", isAdmin, adminController.listReservations);

module.exports = router;
