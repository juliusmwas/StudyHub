import StudentNavbar from "../../../Components/StudentNavbar.jsx";

export default function StudentDashboard() {
  return (
    <>
      <StudentNavbar />

      {/* Background gradient */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-10">

        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <section className="mb-10">
            <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white">
              <h1 className="text-4xl font-semibold text-gray-900">
                Welcome back, Julius 👋
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Ready to continue your learning journey today?
              </p>

              {/* Mini CTA */}
              <div className="mt-6">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition font-semibold">
                  Continue Last Lesson →
                </button>
              </div>
            </div>
          </section>

          {/* Quick Stats - Modern Glass Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Next Session", value: "Math • 2:00 PM", icon: "📅" },
              { title: "Messages", value: "3 New", icon: "💬" },
              { title: "Completed Lessons", value: "14", icon: "📘" },
              { title: "Learning Streak", value: "5 Days 🔥", icon: "⚡" },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/50 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="text-4xl">{card.icon}</div>
                <h3 className="font-semibold text-gray-800 mt-3 text-lg">
                  {card.title}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {card.value}
                </p>
              </div>
            ))}
          </section>

          {/* Upcoming Classes (Glassy + Minimal + Clean) */}
          <section className="mb-14">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Upcoming Classes
              </h2>
              <button className="text-blue-600 hover:underline font-medium">
                View all
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { subject: "Mathematics", tutor: "Mr. Kamau", time: "Today • 2:00 PM" },
                { subject: "Chemistry", tutor: "Ms. Wanjiku", time: "Tomorrow • 11:00 AM" },
                { subject: "English", tutor: "Mr. Otieno", time: "Fri • 9:00 AM" },
              ].map((cls, i) => (
                <div
                  key={i}
                  className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{cls.subject}</h3>
                  <p className="text-gray-600 mt-1">Tutor: {cls.tutor}</p>
                  <p className="text-gray-800 font-medium mt-3">{cls.time}</p>

                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                    Join Class
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity (More modern + bubbly look) */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Recent Activity
            </h2>

            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white space-y-4">
              {[
                "✔ You received feedback on your Chemistry assignment",
                "📄 New study material uploaded: English Notes",
                "🔔 Math class rescheduled to 2:00 PM",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 bg-white/70 border border-white rounded-2xl shadow-sm hover:shadow-md transition text-gray-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Resource Shortcuts — redesigned to look more premium */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Quick Resources
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                "📘 Recent Notes",
                "📂 Popular Study PDFs",
                "🎥 Video Lessons",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/50 backdrop-blur-xl p-8 border border-white rounded-3xl shadow-lg hover:shadow-2xl transition text-center text-xl font-semibold text-gray-800 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
