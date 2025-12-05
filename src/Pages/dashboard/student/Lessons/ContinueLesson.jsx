import { Link } from "react-router-dom";
import StudentNavbar from "../../../../Components/StudentNavbar";

export default function ContinueLesson() {
  return (
    <>
      <StudentNavbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] mb-10">
            <h1 className="text-3xl font-semibold text-gray-900">
              Continue Your Last Lesson 📘
            </h1>
            <p className="text-gray-600 mt-2">
              Pick up right where you left off. Stay consistent and keep learning.
            </p>
          </div>

          {/* Lesson Card */}
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-lg">

            {/* Lesson Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Algebra Basics — Linear Equations (Lesson 4)
            </h2>

            {/* Video Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 text-xl font-medium mb-6">
              Video Player Placeholder
            </div>

            {/* Lesson Notes */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lesson Notes
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In this lesson, you learned how to solve simple linear equations
                using inverse operations. Remember: whatever you do to one side,
                you must do to the other. This forms the foundation of Algebra.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition font-semibold">
                Mark as Completed
              </button>

              <button className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition font-semibold">
                Next Lesson →
              </button>
            </div>

            {/* Back link */}
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
      </div>
    </>
  );
}
