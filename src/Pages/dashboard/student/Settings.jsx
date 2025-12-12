// File: src/pages/student/Settings.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Settings() {
  const navigate = useNavigate();

  // Mock settings state
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    emailUpdates: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <button
          onClick={() => navigate("/student/dashboard")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Settings Card */}
      <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-lg space-y-6">
        {/* Notification Settings */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-900 font-medium">Notifications</p>
            <p className="text-gray-500 text-sm">Receive notifications for assignments and messages</p>
          </div>
          <button
            onClick={() => handleToggle("notifications")}
            className={`w-12 h-6 rounded-full transition-colors duration-200 ${
              settings.notifications ? "bg-indigo-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                settings.notifications ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* Dark Mode */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-900 font-medium">Dark Mode</p>
            <p className="text-gray-500 text-sm">Enable dark theme for the dashboard</p>
          </div>
          <button
            onClick={() => handleToggle("darkMode")}
            className={`w-12 h-6 rounded-full transition-colors duration-200 ${
              settings.darkMode ? "bg-indigo-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                settings.darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* Email Updates */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-900 font-medium">Email Updates</p>
            <p className="text-gray-500 text-sm">Receive weekly email summaries</p>
          </div>
          <button
            onClick={() => handleToggle("emailUpdates")}
            className={`w-12 h-6 rounded-full transition-colors duration-200 ${
              settings.emailUpdates ? "bg-indigo-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                settings.emailUpdates ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
}
