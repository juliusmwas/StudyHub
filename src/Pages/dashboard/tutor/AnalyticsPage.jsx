import React from "react";

const AnalyticsPage = () => {
  const stats = [
    { title: "Total Students", value: 24 },
    { title: "Avg Attendance", value: "87%" },
    { title: "Assignments Completed", value: "72%" },
    { title: "Active Sessions", value: 3 },
  ];

  const students = [
    { name: "Aisha", attendance: "90%", assignments: "80%", status: "Good" },
    { name: "Brian", attendance: "70%", assignments: "60%", status: "Average" },
    { name: "Kevin", attendance: "95%", assignments: "92%", status: "Excellent" },
    { name: "Lydia", attendance: "60%", assignments: "50%", status: "At Risk" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold">Class Analytics</h1>
        <p className="text-gray-500">
          Monitor student performance and engagement
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.title}
            className="bg-white p-6 rounded-xl shadow text-center"
          >
            <p className="text-gray-500">{s.title}</p>
            <p className="text-3xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Student Performance Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Student Performance</h2>

        <table className="w-full text-left">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="py-2">Student</th>
              <th>Attendance</th>
              <th>Assignments</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="py-3">{s.name}</td>
                <td>{s.attendance}</td>
                <td>{s.assignments}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      s.status === "Excellent"
                        ? "bg-green-100 text-green-700"
                        : s.status === "Good"
                        ? "bg-blue-100 text-blue-700"
                        : s.status === "Average"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsPage;
