import { Link } from "react-router-dom";
import StudentNavbar from "../../../../Components/StudentNavbar";

export default function CompletedLessons() {
  // Mock completed lessons data
  const completedLessons = [
    {
      id: 1,
      title: "Linear Equations",
      subject: "Mathematics",
      tutor: "Mr. Kamau",
      date: "2025-12-01",
    },
    {
      id: 2,
      title: "Organic Chemistry Basics",
      subject: "Chemistry",
      tutor: "Ms. Wanjiku",
      date: "2025-11-29",
    },
    {
      id: 3,
      title: "Past Tense in English",
      subject: "English",
      tutor: "Mr. Otieno",
      date: "2025-11-28",
    },
    {
      id: 4,
      title: "Quadratic Functions",
      subject: "Mathematics",
      tutor: "Mr. Kamau",
      date: "2025-11-25",
    },
  ];

  return (
    <>
      <StudentNavbar />

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-6 py-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] mb-10">
            <h1 className="text-3xl font-semibold text-gray-900">Completed Lessons 📘</h1>
            <p className="text-gray-600 mt-2">
              Review your past lessons, revisit notes, or rewatch content anytime.
            </p>
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{lesson.title}</h2>
                  <p className="text-gray-600 mt-1">Subject: {lesson.subject}</p>
                  <p className="text-gray-600 mt-1">Tutor: {lesson.tutor}</p>
                  <p className="text-gray-800 font-medium mt-2">Completed: {lesson.date}</p>
                </div>

                <div className="mt-4 flex gap-3">
                  <Link
                    to={`/student/lessons/${lesson.id}/review`}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold text-center"
                  >
                    Review Lesson
                  </Link>
                  <Link
                    to={`/student/lessons/${lesson.id}/notes`}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-xl hover:bg-gray-300 transition font-semibold text-center"
                  >
                    View Notes
                  </Link>
                </div>
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
