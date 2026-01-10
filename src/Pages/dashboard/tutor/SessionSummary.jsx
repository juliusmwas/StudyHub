import React from "react";

const attendees = [
  { id: 1, name: "Aisha Kamau", status: "Present", participation: "High" },
  { id: 2, name: "Brian Otieno", status: "Present", participation: "Low" },
  { id: 3, name: "Faith Njeri", status: "Present", participation: "Medium" },
  { id: 4, name: "Kevin Mwangi", status: "Absent", participation: "-" },
];

const SessionSummary = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Session Header */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold">Session Summary</h1>
        <p className="text-gray-500 mt-1">
          Topic: Linear Equations • Jan 5, 2026 • 2:00 PM – 3:30 PM
        </p>
      </div>

      {/* Session Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Stat title="Total Students" value="22" />
        <Stat title="Attended" value="18" />
        <Stat title="Absent" value="4" />
        <Stat title="Participation Avg" value="Medium" />
      </div>

      {/* What was taught */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">What Was Covered</h2>
        <p className="text-gray-600">
          We covered solving linear equations using substitution and balancing
          methods. Students practiced solving equations with one and two steps
          and worked on 5 example problems together.
        </p>
      </div>

      {/* Attendance & Participation */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Student Attendance & Participation
        </h2>

        <table className="w-full">
          <thead className="text-left text-gray-500 border-b">
            <tr>
              <th className="py-2">Name</th>
              <th>Status</th>
              <th>Participation</th>
            </tr>
          </thead>

          <tbody>
            {attendees.map((s) => (
              <tr key={s.id} className="border-b last:border-none">
                <td className="py-3">{s.name}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      s.status === "Present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td>{s.participation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tutor Notes */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Tutor Notes</h2>
        <p className="text-gray-600">
          Several students struggled with equation balancing. Next session
          should start with a quick revision. Kevin was absent again — needs
          follow-up.
        </p>
      </div>
    </div>
  );
};

const Stat = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow text-center">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

export default SessionSummary;
