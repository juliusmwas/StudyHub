const express = require("express");
const router = express.Router();
const {
  getClassDetails,
  getClassStudents,
  getClassSessions,
} = require("../controllers/class.controller");

router.get("/:id", getClassDetails);
router.get("/:id/students", getClassStudents);
router.get("/:id/sessions", getClassSessions);

module.exports = router;
