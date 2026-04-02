const express = require("express");
const router = express.Router();

const { createRecord, getRecords, updateRecord, deleteRecord } = require("../controllers/recordController");

const verifyToken = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

// Create record
router.post("/create", verifyToken, checkRole(["admin"]), createRecord);

// Get records
router.get("/", verifyToken, checkRole(["admin", "analyst"]), getRecords);

// Update record
router.put("/:id", verifyToken, checkRole(["admin"]), updateRecord);

// Delete record
router.delete("/:id", verifyToken, checkRole(["admin"]), deleteRecord);

module.exports = router;