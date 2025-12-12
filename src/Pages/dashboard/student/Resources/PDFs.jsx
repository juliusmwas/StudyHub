import { useNavigate } from "react-router-dom";

export default function PDFs() {
  const navigate = useNavigate();

  const pdfs = [
    { name: "KCSE Math Paper 1 — 2023", subject: "Mathematics", size: "2 MB" },
    { name: "Chemistry Revision Notes Form 3", subject: "Chemistry", size: "1.5 MB" },
    { name: "English Grammar Summary", subject: "English", size: "1 MB" },
    { name: "Physics Form 2 Simplified Notes", subject: "Physics", size: "1.2 MB" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Popular Study PDFs</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-900 rounded-xl hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfs.map((pdf, i) => (
          <div
            key={i}
            className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-900">{pdf.name}</h2>
            <p className="text-gray-600 mt-1">{pdf.subject}</p>
            <p className="text-gray-500 mt-1 text-sm">Size: {pdf.size}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
