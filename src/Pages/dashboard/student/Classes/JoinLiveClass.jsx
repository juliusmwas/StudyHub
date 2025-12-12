import { useParams, useNavigate } from "react-router-dom";

export default function JoinLiveClass() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock class data (same IDs you used in the dashboard)
  const classData = {
    1: {
      subject: "Mathematics",
      tutor: "Mr. Kamau",
      time: "Today • 2:00 PM",
    },
    2: {
      subject: "Chemistry",
      tutor: "Ms. Wanjiku",
      time: "Tomorrow • 11:00 AM",
    },
    3: {
      subject: "English",
      tutor: "Mr. Otieno",
      time: "Fri • 9:00 AM",
    },
  };

  const cls = classData[id];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{cls.subject} — Live Class</h1>
        <p className="text-gray-600 mt-2">Tutor: {cls.tutor}</p>
        <p className="text-gray-700 font-medium mt-1">{cls.time}</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-900 rounded-xl hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
        
        {/* MVP Placeholder Section */}
        <div className="w-full h-[400px] flex flex-col items-center justify-center bg-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Live Class Not Available</h2>
          <p className="text-gray-600 max-w-md text-center">
            This is a placeholder for the live class.  
            Video conferencing will be added in a later version.
          </p>

          <div className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium">
            Live class will start here in the final build.
          </div>
        </div>

        {/* Footer Area */}
        <div className="p-6 border-t">
          <button
            onClick={() => navigate("/student/dashboard")}
            className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
          >
            Leave Class
          </button>
        </div>
      </div>
    </div>
  );
}
