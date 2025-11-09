const express = require("express");
const router = express.Router();
const {
  getAllLands,
  addLand,
  getLandById,
  editLand,
} = require("../controllers/landController");

router.get("/", getAllLands);
router.post("/", addLand);
router.get("/:id", getLandById);
router.put("/:id", editLand);

module.exports = router;
