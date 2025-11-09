const express = require("express");
const router = express.Router();
const {
  getAllLands,
  addLand,
  getLandById,
  editLand,
  deleteLand,
} = require("../controllers/landController");

router.get("/", getAllLands);
router.post("/", addLand);
router.get("/:id", getLandById);
router.put("/:id", editLand);
router.delete("/:id", deleteLand);

module.exports = router;
