const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/salleController");
const { isAdmin } = require("../middlewares/authMiddleware");

router.get("/admin/salles", isAdmin, ctrl.list);
router.get("/admin/salles/add", isAdmin, ctrl.showAdd);
router.post("/admin/salles/add", isAdmin, ctrl.add);
router.get("/admin/salles/edit/:id", isAdmin, ctrl.showEdit);
router.post("/admin/salles/edit/:id", isAdmin, ctrl.update);
router.get("/admin/salles/delete/:id", isAdmin, ctrl.delete);

module.exports = router;
