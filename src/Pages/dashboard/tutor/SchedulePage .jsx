
import { useNavigate } from "react-router-dom";

const sessions = [
    {
        id: 1,
        className: "Algebra Basics",
        date: "2026-01-03",
        time: "10:00 AM",
        students: 12,
        status: "upcoming",
    },
    {
        id: 2,
        className: "Physics - Motion",
        date: "2026-01-03",
        time: "4:00 AM",
        students: 7,
        status: "live",
    },
    {
        id: 1,
        className: "Web development",
        date: "2026-01-03",
        time: "5:00 AM",
        students: 12,
        status: "completed",
    },
]

export default function SchedulePage (){

    const navigate = useNavigate()

    const getStatusStyle = (status) => {
        if (status === "live")return "bg-green-100 text-green-700";
        if (status === "completed")return "bg-gray-100 text-gray-700";
        return "bg-blue-100 text-blue-700";  
    };
    
    return(
        <>
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-6">Class Schedule</h1>

                <div className="bg-white shadow rounded-xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th className="p-4">Class</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Time</th>
                                <th className="p-4">Students</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sessions.map((session) => (
                                <tr key={session.id} className="border-b">
                                    <td className="p-4 ">{session.className}</td>
                                    <td className="p-4 ">{session.date}</td>
                                    <td className="p-4 ">{session.time}</td>
                                    <td className="p-4 ">{session.students}</td>

                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(session.status)}`}>
                                            {session.status}
                                        </span>
                                    </td>

                                    <td className="p-4">
                                        {session.status === "live" && (
                                            <button
                                                onClick={() => navigate("dashboard/tutor/live")}
                                                className="px-4 py-2 bg-green-600 text-white rounded-lg"
                                            >Join</button>
                                        )}

                                        {session.status === "upcoming" && (
                                            <button
                                                onClick={() => navigate("dashboard/tutor/live")}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                                            >Start</button>
                                        )}

                                        {session.status === "completed" && (
                                            <button
                                                onClick={() => navigate("dashboard/tutor/session-summary")}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                                            >View</button>
                                        )}

                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>
        </>
    );
}