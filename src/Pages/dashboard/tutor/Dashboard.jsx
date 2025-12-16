import React from 'react';
import { 
  Video, 
  Play, // Add this
  Users, 
  Clock, 
  AlertCircle, 
  Plus, 
  Calendar, 
  Upload, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight, 
  ArrowUpRight, 
  BookOpen, 
  MessageSquare 
} from 'lucide-react';
import TutorNavbar from "../../../Components/TutorNavbar";

export default function TutorDashboard() {
  const todayClasses = [
    { id: 1, title: 'Advanced React Patterns', subject: 'Frontend Dev', time: '14:00 - 15:30', students: 24, status: 'Live' },
    { id: 2, title: 'Introduction to UI/UX', subject: 'Design', time: '16:00 - 17:00', students: 12, status: 'Upcoming' },
    { id: 3, title: 'Database Schema Design', subject: 'Backend', time: '09:00 - 10:30', students: 18, status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <TutorNavbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* 1️⃣ Hero Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Card 1: Today's Workload */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <Calendar size={20} />
              </div>
              <span className="text-xs font-medium text-gray-400">TODAY</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">4 Classes</h3>
            <p className="text-sm text-gray-500 mt-1">2:00 PM – 6:00 PM</p>
          </div>

          {/* Card 2: Next Session (The Focus Card) */}
          <div className="bg-blue-600 p-5 rounded-xl shadow-md text-white">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-blue-500/50 rounded-lg">
                <Video size={20} />
              </div>
              <span className="text-xs font-bold bg-blue-400/30 px-2 py-1 rounded">IN 45 MINS</span>
            </div>
            <h3 className="text-lg font-bold leading-tight">Advanced React Patterns</h3>
            <button className="mt-4 w-full bg-white text-blue-600 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Play size={16} fill="currentColor" /> Start Class
            </button>
          </div>

          {/* Card 3: Total Students */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-green-50 rounded-lg text-green-600">
                <Users size={20} />
              </div>
              <div className="flex items-center text-green-600 text-xs font-medium">
                <ArrowUpRight size={14} /> 12%
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1,284</h3>
            <p className="text-sm text-gray-500 mt-1">Active Students</p>
          </div>

          {/* Card 4: Pending Actions */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <AlertCircle size={20} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">7 Tasks</h3>
            <p className="text-sm text-gray-500 mt-1">Assignments to review</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 2️⃣ Today's Schedule (Main Column) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
              <button className="text-blue-600 text-sm font-medium hover:underline">View Calendar</button>
            </div>
            
            <div className="space-y-4">
              {todayClasses.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-blue-200 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-center min-w-[80px]">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.time.split(' ')[0]}</p>
                      <div className={`h-2 w-2 rounded-full mx-auto mt-2 ${item.status === 'Live' ? 'bg-red-500 animate-pulse' : 'bg-gray-300'}`}></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        {item.subject} • <Users size={14}/> {item.students} students
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    {item.status === 'Live' ? (
                      <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-100">Resume</button>
                    ) : item.status === 'Upcoming' ? (
                      <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-100">Start</button>
                    ) : (
                      <button className="text-gray-400 px-4 py-2 text-sm font-medium flex items-center gap-1">Summary <ChevronRight size={16}/></button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 4️⃣ Class Performance Snapshot */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp size={20} className="text-blue-600"/> Performance Snapshot
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Attendance</span>
                    <span className="font-bold text-gray-900">92%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[92%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Assignments</span>
                    <span className="font-bold text-gray-900">78%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[78%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Engagement</span>
                    <span className="font-bold text-gray-900">85%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Actions & Feed */}
          <div className="space-y-8">
            {/* 3️⃣ Quick Actions Panel */}
            <section>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow gap-2 group">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Plus size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-700">New Class</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow gap-2 group">
                  <div className="p-2 bg-purple-50 text-purple-600 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Upload size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-700">Upload</span>
                </button>
              </div>
            </section>

            {/* 5️⃣ Recent Activity Feed */}
            <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-5">
                {[
                  { user: 'Jane Doe', action: 'submitted Assignment 2', icon: <CheckCircle2 size={14}/>, color: 'text-green-600' },
                  { user: 'Mark Smith', action: 'enrolled in Java Basics', icon: <Users size={14}/>, color: 'text-blue-600' },
                  { user: 'New Message', action: 'from Sarah Jenkins', icon: <MessageSquare size={14}/>, color: 'text-purple-600' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className={`mt-1 ${item.color}`}>{item.icon}</div>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-gray-900">{item.user}</span> {item.action}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6️⃣ Teaching Tip Card */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-xl text-white">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={18}/>
                <span className="text-xs font-bold uppercase opacity-80">Teaching Tip</span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                "Using breakout rooms can increase student participation by up to 40% in digital sessions."
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}