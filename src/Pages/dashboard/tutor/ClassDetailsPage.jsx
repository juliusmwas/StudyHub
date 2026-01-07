
const students = [
    { id:1, name:"Aisha Kamau", progress:82, attendance:90},
    { id:2, name:"Brian Mbeumo", progress:42, attendance:100},
    { id:3, name:"Faith Koeti", progress:67, attendance:10},
    { id:4, name:"Kevin debryune", progress:89, attendance:78},
    { id:5, name:"Nancy Kk", progress:27, attendance:30}, 
];

const sessions = [
    { id:1, date:"jan 1, 2026", topic:"Linear Equations", attendance:18},
    { id:2, date:"jan 3, 2026", topic:"Quadratic Equations", attendance:16},
    { id:3, date:"jan 5, 2026", topic:"Graphs", attendance:20},
];

const ClassDetailsPage = () =>{
    return(
        <>
            <div className="p-6 space-y-8">
                {/*Header*/}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h1 className="text-2xl font-bold">Form 3 Mathematics</h1>
                    <p className="text-gray-500">
                        22 students : sessions this week : Average progress 72%
                    </p>
                </div>

                {/* Class Stats*/}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <p title="students" value="22"/>
                    <p title="Average Attendance" value="84%"/>
                    <p title="Assignments Active" value="4"/>
                    <p title="At-Risk Students" value="3"/>
                </div>

                {/* Students Table*/}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-4">Students</h2>

                    <table className="w-full">
                        <thead className="text-left text-gray-500 border-b">
                            <tr>
                                <th className="py-2">Name</th>
                                <th>Progress</th>
                                <th>Attendance</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.map((s) => {
                                const isRisk = s.progress < 50 || s.attendance < 70;

                                return( 
                                    <tr key={s.id} className="border-b last:border-none">
                                        <td className="py-3">{s.name}</td>
                                        <td>{s.progress}%</td>
                                        <td>{s.attendance}%</td>
                                        <td>
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${
                                                    isRisk
                                                    ? 'bg-red-100 text-red-700'
                                                    : 'bg-green-100 text-green-700'
                                                }`}>
                                                    {isRisk ? "At Risk" : "On Track"}
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                {/*Session History*/}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-4">Recent Sessions</h2>

                    <div className="space-y-4">
                        {sessions.map((s) => (
                            <div
                                key={s.id}
                                className="flex justify-between items-center border p-4 rounded-lg">

                                    <div>
                                        <p className="font-semibold">{s.topic}</p>
                                        <p className="font-semibold">{s.date}</p>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Attendance: {s.attendance} students
                                    </p>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </>
    )
}

export default ClassDetailsPage;