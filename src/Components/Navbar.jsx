import { HiMenu } from "react-icons/hi";


export default function Navbar() {
    return(
        <>
        <div className="bg-gray-200 shadow-sm flex items-center justify-around h-20 ">
            <div>
                <h1 className=" text-xl px-4 lg:text-3xl font-bold">Study<span className="text-blue-600">Hub</span></h1>
            </div>

            <div className="text-sm lg:text-lg text-gray-600 font-normal">
                <ul className="flex items-center gap-5">
                    <li className="hover:text-gray-700 hover:font-medium"><a href="#about">About</a></li>
                    <li className="hover:text-gray-700 hover:font-medium"><a href="#">Features</a></li>
                    <li className="hover:text-gray-700 hover:font-medium"><a href="#">How it Works</a></li>
                </ul>
            </div>
            

            <div className="flex items-center gap-3">
                <button className="border py-1 px-2 rounded-lg text-lg font-medium cursor-pointer">Login</button>
                 <button className=" text-blue-600 border border-blue-600 py-1 px-2 rounded-lg text-lg font-bold cursor-pointer">Register</button>
            </div>

            <HiMenu className="text-2xl lg:hidden"/>


        </div>
        </>
    );
}