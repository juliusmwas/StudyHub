
import {Menu} from 'lucide-react';

import { useState } from "react";

export default function LiveSessionPage(){

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState("chtat");

    const [messages, setMessage] = useState([
        {sender: "Tutor", text: "Welcome everyone"},
        {sender: "Student A", text: "Hello "}
    ]);

    const [participants, setParticipants] = useState([
        {id: 1, name: "Julius (Tutor)", muted:false},
        {id: 2, name: "Student A", muted:true},
        {id: 3, name: "Student B", muted:false}
    ]);

    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        if (!newMessage.trim()) return;
        setMessage([...messages, {sender: "You", text: newMessage}]);
        setNewMessage("");
    };

    const toggleMute = (id) => {
        setParticipants(
            participants.map(p =>
                p.id === id ? {...p, muted: !p.muted } : p
            )
        );
    };

    return(
        <>
            <div>
                <div className="flex items-center  justify-between bg-white shadow-sm py-5 px-5">
                    <h1 className="text-lg cursor-pointer font-medium text-blue-600">Back to Dashboard</h1>
                    <button className="cursor-pointer inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">+ Add Session</button>
                </div>
            </div>

            <div className="flex h-screen bg-gray-100">
                <div className="flex-1 flex flex-col">
                    <div className="bg-black flex-1 flex items-center justify-center text-white text-2xl">
                        Video Session Area
                    </div>

                    <div className="p-2 bg-gray-900 text-white flex justify-center">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="bg-blue-600 px-4 py-2 rounded"
                        >
                            <Menu/>
                        </button>
                    </div>
                </div>

                <div className={`w-80 bg-white border-1 shadow-lg transition-transform duration-300
                    ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>

                        <div className='flex border-b'>
                            <button
                                onClick={() => setActiveTab("chat")}
                                className={`flex-1 p-3 ${activeTab === "chat" ? "bg-blue-100 font-bold" : ""}`} 
                            >People</button>
                        </div>

                        <div className='h-full flex flex-col'>
                            {activeTab === "chat" && (
                                <>
                                <div className="flex-1 p-4 overflow-y-auto">
                                    {messages.map((msg, index) => (
                                        <div key={index} className='mb-2'>
                                            <span className='font-semibold'>{msg.sender}:</span>{""}
                                            {msg.text}
                                        </div>
                                    ))}
                                </div>

                                <div className="p-3 border-t flex">
                                    <input 
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        className="flex-1 border p-2 rounded"
                                        placeholder="Type a message"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        className='ml-2 bg-blue-600 text-white px-4 rounded'
                                    >Send 
                                    </button>
                                </div>
                                </>
                            )}

                        {activeTab === "people" && (
                            <div className="p-4 space-y-3">
                                {participants.map( p => (
                                    <div
                                        key={p.id}
                                        className="flex justify-between items-center border p-2 rounded"
                                    >
                                    <span>{p.name}</span>
                                    <button
                                        onClick={() => toggleMute(p.id)}
                                        className={`px-3 py-1 rounded text-white ${
                                            p.muted ? "bg-red-600" : "bg-green-600"
                                        }`}
                                    >
                                        {p.muuted ? "Muted" : "Unmuted"}
                                    </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        </div>
                </div>
            </div>
        </>
    );
}