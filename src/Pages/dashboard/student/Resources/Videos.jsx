import { useNavigate } from "react-router-dom";

export default function Videos() {
  const navigate = useNavigate();

  const videos = [
    {
      title: "Introduction to Algebra",
      subject: "Mathematics",
      url: "https://www.youtube.com/embed/5T8r7r5Ehzo",
    },
    {
      title: "Lab Safety Rules",
      subject: "Chemistry",
      url: "https://www.youtube.com/embed/Lv0V5aS1dk4",
    },
    {
      title: "How to Write Good Essays",
      subject: "English",
      url: "https://www.youtube.com/embed/WKexxQ3l7lI",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Video Lessons</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-900 rounded-xl hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((vid, i) => (
          <div
            key={i}
            className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-900">{vid.title}</h2>
            <p className="text-gray-600 mt-1">{vid.subject}</p>
            <div className="mt-3 aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src={vid.url}
                title={vid.title}
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
