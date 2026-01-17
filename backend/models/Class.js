const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    subject: { type: String, required: true },
    level: { type: String, required: true }, // make level required
    description: { type: String },
    activeAssignments: { type: Number, default: 0 },
    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Class", classSchema);
