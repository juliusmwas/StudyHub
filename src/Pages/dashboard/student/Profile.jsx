// File: src/pages/student/Profile.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Profile() {
  const navigate = useNavigate();

  // Mock student data
  const [student, setStudent] = useState({
    fullName: "Julius Mwangi",
    email: "julius@example.com",
    phone: "+254 712 345 678",
    avatar: "", // could be a URL or leave blank
    joined: "Jan 15, 2025",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <button
          onClick={() => navigate("/student/dashboard")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-indigo-500 text-white flex items-center justify-center text-4xl font-bold">
            {student.avatar ? (
              <img
                src={student.avatar}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              student.fullName
                .split(" ")
                .map((n) => n[0])
                .join("")
            )}
          </div>

          {/* Student Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900">{student.fullName}</h2>
            <p className="text-gray-700 mt-1">{student.email}</p>
            <p className="text-gray-700 mt-1">{student.phone}</p>
            <p className="text-gray-500 mt-2 text-sm">Joined: {student.joined}</p>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium">
                Edit Profile
              </button>
              <button className="px-5 py-2 bg-gray-200 text-gray-900 rounded-xl hover:bg-gray-300 transition font-medium">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Additional Info Section */}
      <div className="max-w-3xl mx-auto mt-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white/50 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-lg">
            <p className="text-gray-500 text-sm">Total Lessons Completed</p>
            <p className="text-gray-900 font-semibold mt-1">14</p>
          </div>
          <div className="bg-white/50 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-lg">
            <p className="text-gray-500 text-sm">Current Learning Streak</p>
            <p className="text-gray-900 font-semibold mt-1">5 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
