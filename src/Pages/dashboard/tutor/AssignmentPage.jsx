import { div } from "framer-motion/client";

const assignments = [
    {
        id:1,
        title: "Algebra Homework",
        className: "Form 3 Matheatics",
        dueDate: "2026-01-12",
        submitted: 18,
        total: 20,
    },
    {
        id:1,
        title: "Essay writing",
        className: "English Literature",
        dueDate: "2026-01-12",
        submitted: 8,
        total: 20,
    },
    {
        id:1,
        title: "Physics quiz",
        className: "Physics",
        dueDate: "2026-01-12",
        submitted: 10,
        total: 20,
    },
];

const AssignmentsPage = () => {
    return (
        <>
            <div className="p-6">
                {/*Header*/}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="font-bold text-2xl">Assignments</h1>
                        <p className="text-gray-500">Create, Track and Review student work</p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">+ Create Assignment</button>
                </div>

                {/*Assignment List*/}
                <div className="grid gap-6">
                    {assignments.map((a) => {
                        const progress = Math.round((a.submitted / a.total) * 100);

                        return (
                            <div
                                key={a.id}
                                className="bg-white p-6 rounded-xl shadow flex justify-between items-center"
                            > 

                            {/*left*/}

                            <div>
                                <h2 className="font-semibold text-lg"> {a.title}</h2>
                                <p className="text-gray-500 text-sm"> {a.className}</p>
                                <p className="text-gray-500 text-sm"> {a.dueDate}</p>
                            </div>

                            {/*Middle*/}
                            <div className="w-1/3">
                                <p className="text-sm text-gray-500 mb-1">
                                    Submissions: {a.submitted} / {a.total}
                                </p>
                                <div className="w-full bg-gray-200 rounded-full  h-2">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full"
                                        style={{width: `${progress}%` }} 
                                    >
                                    </div>
                                </div>
                            </div>

                            {/*Right*/}

                            <div className="flex gap-4">
                                <button className="text-blue-600 hover:underline text-sm">View</button>
                                <button className="text-blue-600 hover:underline text-sm">Edit</button>                                
                            </div>

                            </div>
                        )
                    })}

                </div>

            </div>
        </>
    )
}

export default AssignmentsPage;