import StudentNavbar from "../../../../Components/StudentNavbar";
import { Link } from "react-router-dom";

export default function StudentProgress() {
  // Mock progress data
  const progressData = {
    streak: 5, // days
    weeklyStudyHours: [2, 3, 1.5, 2.5, 0, 3, 4], // Mon-Sun
    lessonsCompleted: [
      { subject: "Mathematics", completed: 14 },
      { subject: "Chemistry", completed: 10 },
      { subject: "English", completed: 12 },
    ],
  };

  const totalLessons = progressData.lessonsCompleted.reduce((a, b) => a + b.completed, 0);

  return (
    <>
      <StudentNavbar />

      <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-indigo-100 px-6 py-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] mb-10">
            <h1 className="text-3xl font-semibold text-gray-900">Your Progress ⚡</h1>
            <p className="text-gray-600 mt-2">
              Track your learning streak and performance across all subjects.
            </p>
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            {/* Learning Streak */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg flex flex-col items-center">
  <div className="relative w-32 h-32 flex items-center justify-center">

    {/* Progress Ring */}
    <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 36 36">
      {/* Background circle */}
      <circle
        className="text-gray-200"
        strokeWidth="4"
        stroke="currentColor"
        fill="transparent"
        r="16"
        cx="18"
        cy="18"
      />

      {/* Progress circle */}
      <circle
        className="text-indigo-500"
        strokeWidth="4"
        strokeDasharray={`${progressData.streak * 20}, 100`}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r="16"
        cx="18"
        cy="18"
      />
    </svg>

    {/* Perfectly Centered Text Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-gray-900 font-semibold text-lg">
        {progressData.streak} Days
      </span>
    </div>

  </div>

  <p className="mt-4 text-gray-700 font-medium text-center">Learning Streak</p>
  <p className="mt-2 text-gray-500 text-center text-sm">
    Keep going! You’re on a roll.
  </p>
</div>


            {/* Total Lessons Completed */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg flex flex-col items-center justify-center">
              <div className="text-5xl">📘</div>
              <h3 className="font-semibold text-gray-800 mt-3 text-lg">Lessons Completed</h3>
              <p className="text-2xl font-bold text-gray-900 mt-2">{totalLessons}</p>
            </div>

            {/* Weekly Study Hours */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-4 text-lg">Weekly Study Hours</h3>
              <div className="flex justify-between items-end h-32 gap-2">
                {progressData.weeklyStudyHours.map((hours, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-6 rounded-t-xl bg-indigo-500 transition-all"
                      style={{ height: `${hours * 15}px` }}
                    ></div>
                    <span className="text-gray-600 text-xs mt-2">
                      {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][idx]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lessons Completed Per Subject */}
          <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg mb-10">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Lessons Completed Per Subject</h3>
            <div className="space-y-4">
              {progressData.lessonsCompleted.map((subj, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{subj.subject}</span>
                  <div className="w-2/3 bg-gray-200 rounded-xl h-4 overflow-hidden">
                    <div
                      className="h-4 bg-green-500 rounded-xl"
                      style={{ width: `${(subj.completed / totalLessons) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-700 ml-2 font-medium">{subj.completed}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Dashboard */}
          <div className="mt-4">
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
