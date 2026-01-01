
const students = [
    {
        id:1,
        name:"Aisha Noor",
        email:"aishanoor@gmail.com",
        attendance:"92%",
        performance:"Excellent",
    },
    {
        id:2,
        name:"John Kim",
        email:"johnkim@gmail.com",
        attendance:"78%",
        performance:"Good",
    },
    {
        id:3,
        name:"David Kim",
        email:"Davidkim@gmail.com",
        attendance:"64%",
        performance:"Needs attention",
    },
];

const StudentDirectory = () =>{
    return(
        <>
            <div className="p-6">
                {/*Page Header*/}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Student Directory</h1>
                    <p className="text-gray-500">
                        Manage and track students enrolled in your classes.
                    </p>
                </div>
                
                {/*Search & Filters*/}
                <div className="flex gap-4 mb-6">
                    <input 
                        type="text"
                        placeholder="Search student...."
                        className="border px-4 py-2 rounded-lg w-64"
                    />
                    <select className="border px-4 py-2 rounde-lg">
                        <option>All Performance</option>
                        <option>Exxellent</option>
                        <option>Good</option>
                        <option>Needs Attention</option>
                    </select>
                </div>

                {/*Student Table*/}
                <div className="bg-white shadow rounded-xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100 text-sm text-gray-600">
                            <tr>
                                <th className="p-4">Name</th>
                                <th>Email</th>
                                <th>Attendance</th>
                                <th>Performance</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.map((student) =>(
                                <tr 
                                    key={student.id}
                                    className="border-t hover:bg-gray-50 transition"
                                >
                                    <td className="p-4 font-medium">{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.attendance}</td>
                                    <td>
                                        <span 
                                            className={`px-3 py-1 rounded-full text-xs font-semibold 
                                                ${
                                                    student.performance === "Excellent"
                                                    ? "bg-green-100 text-green-700"
                                                    :student.performance === "Good" 
                                                    ?"bg-blue-100 text-blue-700"
                                                    :"bg-red-100 text-red-700"
                                                }`}
                                            >{student.performance}
                                        </span>
                                    </td>

                                    <td className="text-center">
                                        <button className="text-blue-600 hover:underline text-sm cursor-pointer">View Profile</button> 

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
export default StudentDirectory;