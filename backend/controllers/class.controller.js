const Class = require("../models/Class");
const User = require("../models/User");
const Session = require("../models/Session");

exports.getClassDetails = async (req, res) => {
  const classData = await Class.findById(req.params.id);

  if (!classData) {
    return res.status(404).json({ message: "Class not found" });
  }

  res.json(classData);
};

exports.getClassStudents = async (req, res) => {
  const classData = await Class.findById(req.params.id).populate("students");

  res.json(classData.students || []);
};

exports.getClassSessions = async (req, res) => {
  const sessions = await Session.find({ classId: req.params.id });
  res.json(sessions);
};
