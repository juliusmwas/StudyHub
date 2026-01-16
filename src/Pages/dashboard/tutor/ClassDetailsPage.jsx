import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ClassDetailsPage = () => {
  const navigate = useNavigate();
  const { classId } = useParams(); // classId from route

  const [classInfo, setClassInfo] = useState(null);
  const [students, setStudents] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const [classRes, studentsRes, sessionsRes] = await Promise.all([
          fetch(`/api/classes/${classId}`),
          fetch(`/api/classes/${classId}/students`),
          fetch(`/api/classes/${classId}/sessions`),
        ]);

        const classData = await classRes.json();
        const studentsData = await studentsRes.json();
        const sessionsData = await sessionsRes.json();

        // Calculate derived stats
        const avgProgress =
          studentsData.length > 0
            ? Math.round(
                studentsData.reduce((a, s) => a + (s.progress || 0), 0) /
                  studentsData.length
              )
            : 0;

        const avgAttendance =
          studentsData.length > 0
            ? Math.round(
                studentsData.reduce((a, s) => a + (s.attendance || 0), 0) /
                  studentsData.length
              )
            : 0;

        const atRiskCount = studentsData.filter(
          (s) => s.progress < 50 || s.attendance < 70
        ).length;

        setClassInfo({
          name: classData.name,
          totalStudents: studentsData.length,
          avgProgress,
          avgAttendance,
          activeAssignments: 0, // can be wired later
          atRisk: atRiskCount,
        });

        setStudents(studentsData);
        setSessions(sessionsData);

      } catch (error) {
        console.error("Failed to load class data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClassData();
  }, [classId]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading class details...
      </div>
    );
  }

  if (!classInfo) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
      <p className="text-gray-500 text-lg">
        No class details available.
      </p>

      <button
        onClick={() => navigate("/tutor/dashboard")}
        className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}


  return (
    <div className="p-4 md:p-6 space-y-8 max-w-7xl mx-auto">

      {/* Back Button */}
      <button
        onClick={() => navigate("/tutor/dashboard")}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h1 className="text-2xl font-bold">{classInfo.name}</h1>
        <p className="text-gray-500 mt-1">
          {classInfo.totalStudents} students · Average progress {classInfo.avgProgress}%
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Students" value={classInfo.totalStudents} />
        <StatCard title="Attendance" value={`${classInfo.avgAttendance}%`} />
        <StatCard title="Assignments" value={classInfo.activeAssignments} />
        <StatCard title="At-Risk" value={classInfo.atRisk} danger />
      </div>

      {/* Students */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Students</h2>

        {students.length === 0 ? (
          <EmptyState message="No students enrolled yet." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {students.map((s) => {
              const atRisk = s.progress < 50 || s.attendance < 70;

              return (
                <div
                  key={s._id}
                  className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-sm text-gray-500">
                      Progress {s.progress || 0}% · Attendance {s.attendance || 0}%
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      atRisk
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {atRisk ? "At Risk" : "On Track"}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Sessions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Sessions</h2>

        {sessions.length === 0 ? (
          <EmptyState message="No sessions conducted yet." />
        ) : (
          <div className="space-y-3">
            {sessions.map((s) => (
              <div
                key={s._id}
                className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{s.topic}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(s.date).toLocaleDateString()}
                  </p>
                </div>

                <p className="text-sm text-gray-600">
                  Attendance: {s.attendanceCount || 0}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ClassDetailsPage;

/* ---------- Helpers ---------- */

const StatCard = ({ title, value, danger }) => (
  <div
    className={`rounded-xl p-5 shadow-sm bg-white ${
      danger ? "border border-red-200" : ""
    }`}
  >
    <p className="text-sm text-gray-500">{title}</p>
    <p
      className={`text-2xl font-bold ${
        danger ? "text-red-600" : ""
      }`}
    >
      {value}
    </p>
  </div>
);

const EmptyState = ({ message }) => (
  <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-500">
    {message}
  </div>
);
