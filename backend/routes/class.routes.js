const express = require("express");
const router = express.Router();
const {
  getClassDetails,
  getClassStudents,
  getClassSessions,
  createClass, // new
} = require("../controllers/class.controller");

const { verifyToken } = require("../middleware/authMiddleware"); // JWT auth for tutors

// --- Class creation (POST)
router.post("/", verifyToken, createClass);

// --- Existing GET routes
router.get("/:id", getClassDetails);
router.get("/:id/students", getClassStudents);
router.get("/:id/sessions", getClassSessions);

module.exports = router;
