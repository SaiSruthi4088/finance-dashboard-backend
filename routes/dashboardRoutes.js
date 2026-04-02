const express = require("express");
const router = express.Router();

const { 
  getSummary,
  getCategoryTotals,
  getRecentTransactions
} = require("../controllers/dashboardController");

const verifyToken = require("../middleware/authMiddleware");

router.get("/summary", verifyToken, getSummary);

router.get("/categories", verifyToken, getCategoryTotals);

router.get("/recent", verifyToken, getRecentTransactions);

module.exports = router;