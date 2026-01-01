
import { useState } from "react";

const students = [
    {id:1, name:"John kim", muted:false},
    {id:2, name:"Aisha kim", muted:true},
    {id:3, name:"David kim", muted:false},
];

export default function LiveSessionPage(){

    const [messages, setMessage] = useState([
        {sender: "System", text: "Class started"},
        {sender: "Aisha", text: "Good Afternoon "}
    ]);
    const [input,setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessage([...messages, {sender: "tutor", text: input}]);
        setInput("");
    };


    return(
        <>
            <div className="h-screen flex flex-col">
                {/*Top Bar*/}
                <div className="bg-white shadow p-4 flex justify-between items-center">
                    <h2 className='text-xl font-semibold'>Physics - Motion</h2>
                    <p className='text-gray-500 text-sm'>Live Sessions</p>
                </div>

                <button className='px-4 py-2 bg-red-600 text-white rounded-lg'> 
                    End Session
                </button>

                <div className='flex flex-1 overflow-hidden'>
                    {/*Video Area*/}
                    <div className='flex-1 bg-black text-white flex items-center justify-center text-xl'>
                        Video Stream Area (Jitsi will go here)
                    </div>

                    {/*Right Panel*/}
                    <div className='w-80 border-1 bg-white flex flex-col'>
                        {/*Participants*/}
                        <div className='p-4 border-b'>
                            <h3 className='font-semibold mb-2'>Students</h3>
                            {students.map((s) => (
                                <div key={s.id} className='flex justify-between text-sm mb-2'>
                                    <span>{s.name}</span>
                                    <span className={s.muted ? 'text-red-500' : "text-green-600"}>{s.muted ? "Muted" : "Speaking"}</span>
                                </div>
                            ))}
                        </div>

                        {/*Chat*/}
                        <div className='flex-1 p-4 overflow-y-auto'>
                            {messages.map((m, i) => (
                                <div key={i} className='mb-2 text-sm'>
                                    <strong>{m.sender}:</strong> {m.text}
                                </div>
                            ))}
                        </div>

                        {/*Imput*/}
                        <div className='p-3 border-t flex gap-2'>
                            <input 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className='flex-1 border rounded-lg px-3 py-2 text-sm'
                                placeholder='Type message....'
                             />
                             
                             <button
                                onClick={sendMessage}
                                className='bg-blue-600 text-white px-4 rounded-lg' 
                             >
                                Send
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}