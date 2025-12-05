import { useState } from "react";
import { Link } from "react-router-dom";
import StudentNavbar from "../../../../Components/StudentNavbar";

export default function StudentMessages() {
  // Mock conversations
  const mockConversations = [
    {
      id: 1,
      tutor: "Mr. Kamau",
      lastMessage: "Don’t forget your homework!",
      unread: 1,
      messages: [
        { from: "tutor", text: "Don’t forget your homework!", time: "10:30 AM" },
        { from: "student", text: "Sure, thank you!", time: "10:32 AM" },
      ],
    },
    {
      id: 2,
      tutor: "Ms. Wanjiku",
      lastMessage: "Your notes are uploaded.",
      unread: 0,
      messages: [
        { from: "tutor", text: "Your notes are uploaded.", time: "9:15 AM" },
      ],
    },
    {
      id: 3,
      tutor: "Mr. Otieno",
      lastMessage: "See you in class tomorrow.",
      unread: 2,
      messages: [
        { from: "tutor", text: "See you in class tomorrow.", time: "Yesterday" },
      ],
    },
  ];

  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const updated = { ...selectedConversation };
    updated.messages.push({
      from: "student",
      text: newMessage,
      time: "Now",
    });
    setSelectedConversation(updated);
    setNewMessage("");
  };

  return (
    <>
      <StudentNavbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-stone-100 px-6 py-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] mb-10">
            <h1 className="text-3xl font-semibold text-gray-900">Your Messages 💬</h1>
            <p className="text-gray-600 mt-2">Stay connected with your tutors. Check unread messages and reply instantly.</p>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Conversations List */}
            <div className="col-span-1">
              <div className="bg-white/60 backdrop-blur-xl p-4 rounded-3xl border border-white shadow-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Conversations</h2>

                {mockConversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    className={`p-3 mb-3 rounded-2xl cursor-pointer transition ${
                      selectedConversation.id === conv.id
                        ? "bg-blue-50 border border-blue-400"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-800">{conv.tutor}</h3>
                      {conv.unread > 0 && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mt-1 truncate">{conv.lastMessage}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Panel */}
            <div className="col-span-2 flex flex-col bg-white/60 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-lg h-[600px]">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {selectedConversation.tutor}
              </h2>

              {/* Messages Scroll Area */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-3">
                {selectedConversation.messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.from === "student" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`px-4 py-2 rounded-2xl max-w-xs ${msg.from === "student" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"}`}>
                      <p className="text-sm">{msg.text}</p>
                      <span className="text-xs mt-1 block text-gray-500 text-right">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Box */}
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  className="px-6 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition font-semibold"
                >
                  Send
                </button>
              </div>
            </div>

          </div>

          {/* Back to Dashboard */}
          <div className="mt-8">
            <Link
              to="/student/dashboard"
              className="text-blue-600 hover:underline"
            >
              ← Back to Dashboard
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
