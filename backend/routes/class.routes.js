const express = require("express");
const router = express.Router();
const {
  getClassDetails,
  getClassStudents,
  getClassSessions,
  createClass,
} = require("../controllers/class.controller");

const { verifyToken } = require("../middleware/authMiddleware");

// POST - create class (protected)
router.post("/", verifyToken, createClass);

// GET routes
router.get("/:id", verifyToken, getClassDetails);
router.get("/:id/students", verifyToken, getClassStudents);
router.get("/:id/sessions", verifyToken, getClassSessions);

module.exports = router;
