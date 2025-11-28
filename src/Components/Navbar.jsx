import { HiMenu } from "react-icons/hi";


export default function Navbar() {
    return(
        <>
        <div className="bg-blue-800 flex items-center justify-around ">
            <div>
                <h1 className="text-2xl font-medium p-5">StudyHub</h1>
            </div>

            <div>
                <ul className="flex items-center">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">How it Works</a></li>
                </ul>
            </div>
            
            <HiMenu />


        </div>
        </>
    );
}