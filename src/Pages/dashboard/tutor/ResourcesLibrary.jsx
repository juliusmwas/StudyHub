import React from "react";

const resources = [
  {
    id: 1,
    title: "Linear Equations Notes",
    type: "PDF",
    uploadedBy: "Tutor",
    date: "Jan 3, 2026",
  },
  {
    id: 2,
    title: "Solving Equations Video",
    type: "Video",
    uploadedBy: "Tutor",
    date: "Jan 4, 2026",
  },
  {
    id: 3,
    title: "Practice Worksheet",
    type: "PDF",
    uploadedBy: "Tutor",
    date: "Jan 5, 2026",
  },
  {
    id: 4,
    title: "Khan Academy – Algebra",
    type: "Link",
    uploadedBy: "Tutor",
    date: "Jan 5, 2026",
  },
];

const ResourcesLibrary = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Resources Library</h1>
          <p className="text-gray-500">All learning materials for this class</p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Upload Resource
        </button>
      </div>

      {/* Resource List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full">
          <thead className="border-b text-left text-gray-500">
            <tr>
              <th className="py-2">Title</th>
              <th>Type</th>
              <th>Uploaded By</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {resources.map((r) => (
              <tr key={r.id} className="border-b last:border-none">
                <td className="py-3 font-medium">{r.title}</td>
                <td>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {r.type}
                  </span>
                </td>
                <td>{r.uploadedBy}</td>
                <td>{r.date}</td>
                <td>
                  <button className="text-blue-600 hover:underline">
                    Open
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourcesLibrary;
