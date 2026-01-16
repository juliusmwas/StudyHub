const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
    topic: String,
    date: Date,
    attendanceCount: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", sessionSchema);
