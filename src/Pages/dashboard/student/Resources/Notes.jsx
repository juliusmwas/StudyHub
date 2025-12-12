import { useNavigate } from "react-router-dom";

export default function Notes() {
  const navigate = useNavigate();

  const notes = [
    { title: "Algebra Basics", subject: "Mathematics", date: "Dec 10, 2025" },
    { title: "Acids & Bases", subject: "Chemistry", date: "Dec 9, 2025" },
    { title: "Comprehension Skills", subject: "English", date: "Dec 8, 2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Recent Notes</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-900 rounded-xl hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, i) => (
          <div
            key={i}
            className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-900">{note.title}</h2>
            <p className="text-gray-600 mt-1">{note.subject}</p>
            <p className="text-gray-500 mt-1 text-sm">{note.date}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Open Note
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
