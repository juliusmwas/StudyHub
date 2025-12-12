import { useParams, Link } from "react-router-dom";

const classData = {
  1: {
    subject: "Mathematics",
    tutor: "Mr. Kamau",
    time: "Today • 2:00 PM",
    description: "This class will cover Algebraic Expressions and Quadratic Equations.",
  },
  2: {
    subject: "Chemistry",
    tutor: "Ms. Wanjiku",
    time: "Tomorrow • 11:00 AM",
    description: "Introduction to Chemical Bonding and practical lab preparation.",
  },
  3: {
    subject: "English",
    tutor: "Mr. Otieno",
    time: "Fri • 9:00 AM",
    description: "Understanding Comprehension Techniques and Essay Writing.",
  },
};

export default function ClassDetails() {
  const { id } = useParams();
  const cls = classData[id];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900">{cls.subject}</h1>
      <p className="text-gray-600 mt-2">Tutor: {cls.tutor}</p>
      <p className="text-gray-800 font-medium mt-2">{cls.time}</p>

      <p className="mt-5 text-gray-700">{cls.description}</p>

      <Link
        to={`/student/class/${id}/live`}
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Join Live Session
      </Link>
    </div>
  );
}
