import { useNavigate } from "react-router-dom";

export default function Notifications() {
  const navigate = useNavigate();

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      type: "New Assignment",
      message: "Algebra Homework is due tomorrow",
      date: "Dec 12, 2025",
      link: "/student/assignments/1",
      isRead: false,
    },
    {
      id: 2,
      type: "Message",
      message: "Your tutor sent a new message",
      date: "Dec 11, 2025",
      link: "/student/messages",
      isRead: false,
    },
    {
      id: 3,
      type: "Class Update",
      message: "Chemistry class rescheduled to 3:00 PM",
      date: "Dec 10, 2025",
      link: "/student/join-class/2",
      isRead: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
        <button
          onClick={() => navigate("/student/dashboard")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Notifications List */}
      <div className="max-w-5xl mx-auto grid gap-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            onClick={() => navigate(notif.link)}
            className={`bg-white/50 backdrop-blur-xl p-5 rounded-3xl border border-white shadow-lg hover:shadow-2xl transition cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2
                        ${notif.isRead ? "opacity-70" : "opacity-100"}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  notif.isRead ? "bg-gray-400" : "bg-indigo-500"
                }`}
              ></div>
              <div>
                <p className="text-gray-900 font-semibold text-lg">{notif.type}</p>
                <p className="text-gray-700">{notif.message}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2 sm:mt-0">{notif.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
