import React, { useState } from 'react';
import { 
    HiAcademicCap, HiHome, HiBookOpen, HiPencil, HiChatAlt2, 
    HiBell, HiUserCircle, HiSearch, HiOutlineLogout
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

// --- Reusable Navigation Item Component ---
const NavItem = ({ icon: Icon, label, href, isActive }) => (
    <a 
        href={href} 
        className={`
            flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg 
            transition-colors duration-200
            ${isActive 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
            }
        `}
    >
        <Icon className="w-5 h-5" />
        <span className="hidden lg:block">{label}</span>
    </a>
);

// --- Profile Dropdown Component ---
const ProfileDropdown = ({ onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { name: 'My Profile', action: () => console.log('Go to Profile'), icon: HiUserCircle },
        { name: 'Settings', action: () => console.log('Go to Settings'), icon: HiPencil },
        { name: 'Support', action: () => console.log('Go to Support'), icon: HiAcademicCap },
        { name: 'Logout', action: onLogout, icon: HiOutlineLogout },
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-1.5 rounded-full border-2 border-transparent hover:border-indigo-500 transition-colors duration-200"
            >
                {/* Placeholder for Avatar/User Initial */}
                <div className="w-9 h-9 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    JD
                </div>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-30">
                    <div className="p-2">
                        {items.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => { item.action(); setIsOpen(false); }}
                                className="w-full text-left flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                            >
                                <item.icon className="w-4 h-4" />
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


// --- Main Student Navbar Component ---
export default function StudentNavbar({ activeTab = 'Dashboard' }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/'); // Redirect to homepage or login page
    };

    return (
        <nav className="sticky top-0 z-20 bg-white shadow-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* 1. Left Side: Logo & Branding */}
                    <div className="flex items-center">
                        <a href="/student/dashboard" className="flex items-center gap-2 text-2xl font-extrabold text-gray-900">
                            Study<span className="text-indigo-600">Hub</span>
                            <HiAcademicCap className="w-7 h-7 text-indigo-600" />
                        </a>
                    </div>

                    {/* 2. Center: Primary Navigation Links (Hidden on small screens) */}
                    <div className="hidden md:flex flex-grow justify-center gap-4 mx-8">
                        <NavItem 
                            icon={HiHome} 
                            label="Dashboard" 
                            href="/student/dashboard" 
                            isActive={activeTab === 'Dashboard'} 
                        />
                       
                        <NavItem 
                            icon={HiPencil} 
                            label="Assignments" 
                            href="/student/assignments" 
                            isActive={activeTab === 'Assignments'} 
                        />
                    </div>
                    
                    {/* 3. Right Side: Search, Quick Access Icons & Profile */}
                    <div className="flex items-center gap-3">
                        
                        {/* Search Bar (Tablet/Desktop) */}
                        <div className="hidden sm:block">
                            <div className="relative">
                                <input
                                    type="search"
                                    placeholder="Search resources, tutors..."
                                    className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-48"
                                />
                                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Quick Access Icons */}
                        <button 
                            title="Messages"
                            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-indigo-600 transition-colors relative"
                        >
                            <HiChatAlt2 className="w-6 h-6" />
                            {/* Message count bubble */}
                            <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-500 text-xs text-white"></span>
                        </button>

                        <button 
                            title="Notifications"
                            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-indigo-600 transition-colors relative"
                        >
                            <HiBell className="w-6 h-6" />
                            {/* Notification count bubble */}
                            <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-red-500 text-xs text-white"></span>
                        </button>

                        {/* Profile Dropdown */}
                        <ProfileDropdown onLogout={handleLogout} />

                    </div>
                </div>
            </div>
        </nav>
    );
}

// Example Usage:
// <StudentNavbar activeTab="Assignments" />