import { useParams, Link } from "react-router-dom";
import StudentNavbar from "../../../../Components/StudentNavbar";

// Mock data for demonstration
const lessons = [
  {
    id: 1,
    title: "Linear Equations",
    subject: "Mathematics",
    tutor: "Mr. Kamau",
    date: "2025-12-01",
    content: "This is a review of Linear Equations lesson. You can watch the video, see notes, or revisit exercises.",
  },
  {
    id: 2,
    title: "Organic Chemistry Basics",
    subject: "Chemistry",
    tutor: "Ms. Wanjiku",
    date: "2025-11-29",
    content: "This lesson covers the fundamentals of Organic Chemistry.",
  },
];

export default function ReviewLesson() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === parseInt(id)) || lessons[0];

  return (
    <>
      <StudentNavbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 px-6 py-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-lg mb-10">
            <h1 className="text-3xl font-semibold text-gray-900">{lesson.title} 📘</h1>
            <p className="text-gray-600 mt-2">
              Subject: {lesson.subject} | Tutor: {lesson.tutor} | Completed: {lesson.date}
            </p>
          </div>

          {/* Lesson Content */}
          <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg mb-8">
            <p className="text-gray-800 text-lg">{lesson.content}</p>

            {/* Placeholder for video / slides */}
            <div className="mt-6 bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-500">
              Video / Slides Player
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <Link
              to="/student/dashboard"
              className="px-6 py-2 bg-gray-200 text-gray-900 rounded-xl hover:bg-gray-300 transition font-semibold"
            >
              Back to Dashboard
            </Link>
            <Link
              to={`/student/lessons/${lesson.id}/notes`}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              View Notes
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
