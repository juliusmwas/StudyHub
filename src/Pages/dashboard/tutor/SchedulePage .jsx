import { Link } from "react-router-dom";

export default function SchedulePage (){
    return(
        <>
            <div className="mt-1">
                <div className="flex items-center  justify-between bg-white shadow-sm py-5 px-5">
                    <h1 className="text-lg cursor-pointer font-medium text-blue-600">Back to Dashboard</h1>
                    <button className="cursor-pointer inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">+ Add Session</button>
                </div>

                <div className=" bg-white shadow-sg rounded-2xl px-5 py-3 m-5">
                    <h1 className="grid justify-items-center text-xl font-bold text-gray-900 px-5 py-5 mt-5">My Teaching Schedule</h1>
                    <div className="flex justify-center items-center py-5  gap-5">
                        <button className="cursor-pointer inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">Day</button>
                        <button className="cursor-pointer inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">Week</button>
                        <button className="cursor-pointer inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">Month</button>
                    </div>
                    
                </div>

                <div className="flex m-5 items-center gap-5 justify-evenly">
                     <div className="bg-white px-5 text-center w-fit rounded-lg shadow-sm py-5 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer">
                        <h2 className="text-gray-800 font-semibold text-sm p-1">Oct 21 - Oct 27</h2>
                        <h1 className="text-gray-800 font-semibold text-lg">Advanced React Patterns</h1>
                        <p className="text-gray-800 font-normal text-lg">Time: 14:00-15:30</p>
                        <p className="text-gray-800 font-normal text-lg">Type: <span className="font-semibold">Group Class</span></p>
                     </div>

                    <div className="bg-white px-5 text-center w-fit rounded-lg shadow-sm py-5 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer">
                        <h2 className="text-gray-800 font-semibold text-sm p-1">Oct 21 - Oct 27</h2>
                        <h1 className="text-gray-800 font-semibold text-lg">Advanced React Patterns</h1>
                        <p className="text-gray-800 font-normal text-lg">Time: 14:00-15:30</p>
                        <p className="text-gray-800 font-normal text-lg">Type: <span className="font-semibold">Group Class</span></p>
                     </div>

                     <div className="bg-white px-5 text-center w-fit rounded-lg shadow-sm py-5 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer">
                        <h2 className="text-gray-800 font-semibold text-sm p-1">Oct 21 - Oct 27</h2>
                        <h1 className="text-gray-800 font-semibold text-lg">Advanced React Patterns</h1>
                        <p className="text-gray-800 font-normal text-lg">Time: 14:00-15:30</p>
                        <p className="text-gray-800 font-normal text-lg">Type: <span className="font-semibold">Group Class</span></p>
                     </div>

                     <div className="bg-white px-5 text-center w-fit rounded-lg shadow-sm py-5 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer">
                        <h2 className="text-gray-800 font-semibold text-sm p-1">Oct 21 - Oct 27</h2>
                        <h1 className="text-gray-800 font-semibold text-lg">Advanced React Patterns</h1>
                        <p className="text-gray-800 font-normal text-lg">Time: 14:00-15:30</p>
                        <p className="text-gray-800 font-normal text-lg">Type: <span className="font-semibold">Group Class</span></p>
                     </div>

                </div>
                
            </div>
        </>
    );
}