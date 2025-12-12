import { Link } from "react-router-dom";

export default function AllClasses() {
  const classes = [
    { id: 1, subject: "Mathematics", tutor: "Mr. Kamau", time: "Today • 2:00 PM" },
    { id: 2, subject: "Chemistry", tutor: "Ms. Wanjiku", time: "Tomorrow • 11:00 AM" },
    { id: 3, subject: "English", tutor: "Mr. Otieno", time: "Fri • 9:00 AM" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Classes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls) => (
          <Link
            key={cls.id}
            to={`/student/classes/${cls.id}`}
            className="p-6 bg-white/60 backdrop-blur-xl rounded-3xl border border-white shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">{cls.subject}</h3>
            <p className="text-gray-600 mt-1">Tutor: {cls.tutor}</p>
            <p className="text-gray-800 font-medium mt-3">{cls.time}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
