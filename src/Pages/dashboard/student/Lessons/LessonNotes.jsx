import { useParams, Link } from "react-router-dom";
import StudentNavbar from "../../../../Components/StudentNavbar";

// Mock notes data
const lessonsNotes = [
  {
    id: 1,
    title: "Linear Equations Notes",
    file: "LinearEquations.pdf",
    summary: "Summary of linear equations: y = mx + b, solving for x, practice problems.",
  },
  {
    id: 2,
    title: "Organic Chemistry Notes",
    file: "OrganicChemBasics.pdf",
    summary: "Summary of basic organic chemistry: hydrocarbons, functional groups, reactions.",
  },
];

export default function LessonNotes() {
  const { id } = useParams();
  const lesson = lessonsNotes.find((l) => l.id === parseInt(id)) || lessonsNotes[0];

  return (
    <>
      <StudentNavbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 px-6 py-10">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-lg mb-10">
            <h1 className="text-3xl font-semibold text-gray-900">{lesson.title} 📄</h1>
          </div>

          {/* Notes Content */}
          <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg mb-8">
            <p className="text-gray-800 text-lg">{lesson.summary}</p>

            <div className="mt-6 flex gap-4">
              {/* Mock download button */}
              <a
                href={`/${lesson.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
              >
                Download Notes
              </a>
              <Link
                to={`/student/lessons/${id}/review`}
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-xl hover:bg-gray-300 transition font-semibold"
              >
                Back to Review
              </Link>
            </div>
          </div>

          {/* Back to Dashboard */}
          <div>
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
