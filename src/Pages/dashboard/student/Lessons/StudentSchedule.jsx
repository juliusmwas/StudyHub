import StudentNavbar from "../../../../Components/StudentNavbar";
import { Link } from "react-router-dom";

export default function StudentSchedule() {
  // Mock upcoming sessions data
  const sessions = [
    {
      id: 1,
      subject: "Mathematics",
      tutor: "Mr. Kamau",
      time: "Today • 2:00 PM",
      joinLink: "#",
    },
    {
      id: 2,
      subject: "Chemistry",
      tutor: "Ms. Wanjiku",
      time: "Tomorrow • 11:00 AM",
      joinLink: "#",
    },
    {
      id: 3,
      subject: "English",
      tutor: "Mr. Otieno",
      time: "Fri • 9:00 AM",
      joinLink: "#",
    },
  ];

  return (
    <>
      <StudentNavbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] mb-10 border border-white">
            <h1 className="text-3xl font-semibold text-gray-900">
              Upcoming Sessions 📅
            </h1>
            <p className="text-gray-600 mt-2">
              All your upcoming lessons and schedules in one place.
            </p>
          </div>

          {/* Session Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg hover:shadow-xl transition cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{session.subject}</h2>
                  <p className="text-gray-600 mt-1">Tutor: {session.tutor}</p>
                  <p className="text-gray-800 font-medium mt-2">{session.time}</p>
                </div>

                <Link
                  to={session.joinLink}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold text-center"
                >
                  Join Class
                </Link>
              </div>
            ))}
          </div>

          {/* Back to Dashboard */}
          <div className="mt-8">
            <Link
              to="/student/dashboard"
              className="text-blue-600 hover:underline"
            >
              ← Back to Dashboard
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
