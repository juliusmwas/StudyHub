import React from "react";

const ActivityLog = () => {
  const logs = [
    {
      time: "09:12 AM",
      user: "Aisha",
      action: "Joined live session",
      type: "session",
    },
    {
      time: "09:14 AM",
      user: "Brian",
      action: "Submitted Assignment 2",
      type: "assignment",
    },
    {
      time: "09:20 AM",
      user: "Kevin",
      action: "Asked a question in chat",
      type: "chat",
    },
    {
      time: "09:35 AM",
      user: "Lydia",
      action: "Left the session",
      type: "session",
    },
    {
      time: "10:05 AM",
      user: "Tutor",
      action: "Started a new live session",
      type: "system",
    },
  ];

  const badgeColor = (type) => {
    switch (type) {
      case "session":
        return "bg-blue-100 text-blue-700";
      case "assignment":
        return "bg-green-100 text-green-700";
      case "chat":
        return "bg-purple-100 text-purple-700";
      case "system":
        return "bg-gray-200 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold">Activity Log</h1>
        <p className="text-gray-500">
          Track all activity happening in your class
        </p>
      </div>

      {/* Logs */}
      <div className="bg-white rounded-xl shadow divide-y">
        {logs.map((log, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 text-gray-400 text-sm">{log.time}</div>

              <div>
                <p className="font-semibold">{log.user}</p>
                <p className="text-gray-500 text-sm">{log.action}</p>
              </div>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm ${badgeColor(
                log.type
              )}`}
            >
              {log.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
