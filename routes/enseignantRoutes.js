const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/enseignantController");
const { isAdmin } = require("../middlewares/authMiddleware");

router.get("/admin/enseignants", isAdmin, ctrl.list);
router.get("/admin/enseignants/add", isAdmin, ctrl.showAdd);
router.post("/admin/enseignants/add", isAdmin, ctrl.add);
router.get("/admin/enseignants/edit/:id", isAdmin, ctrl.showEdit);
router.post("/admin/enseignants/edit/:id", isAdmin, ctrl.update);
router.get("/admin/enseignants/delete/:id", isAdmin, ctrl.delete);

module.exports = router;
