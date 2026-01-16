const Class = require("../models/Class");
const User = require("../models/User");
const Session = require("../models/Session");

// ------------------- CREATE CLASS -------------------
exports.createClass = async (req, res) => {
  try {
    const { name, subject, level, description } = req.body;

    if (!name || !subject) {
      return res.status(400).json({ msg: "Name and subject are required" });
    }

    const newClass = new Class({
      name,
      subject,
      level,
      description,
      tutor: req.user.id, // from JWT middleware
    });

    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (err) {
    console.error("Error creating class:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// ------------------- GET CLASS DETAILS -------------------
exports.getClassDetails = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.id)
      .populate("tutor", "fullName email") // populate tutor info
      .populate("students", "fullName email progress attendance"); // optional

    if (!classData) {
      return res.status(404).json({ message: "Class not found" });
    }

    res.json(classData);
  } catch (err) {
    console.error("Error fetching class details:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- GET CLASS STUDENTS -------------------
exports.getClassStudents = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.id).populate(
      "students",
      "fullName email progress attendance"
    );

    if (!classData) {
      return res.status(404).json({ message: "Class not found" });
    }

    res.json(classData.students || []);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- GET CLASS SESSIONS -------------------
exports.getClassSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ classId: req.params.id });

    // Add attendanceCount for each session
    const sessionsWithAttendance = sessions.map((s) => ({
      _id: s._id,
      topic: s.topic,
      date: s.date,
      attendanceCount: s.attendance?.length || 0, // assuming attendance is an array of student IDs
    }));

    res.json(sessionsWithAttendance);
  } catch (err) {
    console.error("Error fetching sessions:", err);
    res.status(500).json({ message: "Server error" });
  }
};
