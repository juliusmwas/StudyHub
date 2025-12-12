import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";




/* -------------------------------------------------------------------------- */
/*                               ICON COMPONENTS                               */
/* -------------------------------------------------------------------------- */

const IconWrapper = ({ children, className = "w-5 h-5", ...props }) => (
    <svg {...props} className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        {children}
    </svg>
);

const Home = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0v-4a1 1 0 011-1h2a1 1 0 011 1v4m-6 0h6" /></IconWrapper>
);
const BookOpen = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5v11M17.5 9.5a5 5 0 00-10 0v11M7 21h10a1 1 0 001-1V9.5M6 21h12M12 4a2 2 0 100 4 2 2 0 000-4z" /></IconWrapper>
);
const ClipboardCheck = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></IconWrapper>
);
const ChatAlt2 = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z" /></IconWrapper>
);
const Bell = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></IconWrapper>
);
const UserCircle = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.935.918 6.879 2.054M12 14a6 6 0 100-12 6 6 0 000 12z" /></IconWrapper>
);
const OutlineLogout = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></IconWrapper>
);
const Cog = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35-.375.426-.59 1.054-.59 1.724a1.724 1.724 0 001.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35.375-.426.59-1.054.59-1.724a1.724 1.724 0 00-1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.568.35.986.993 1.066 1.724z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></IconWrapper>
);
const Support = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m3.536-3.536A8 8 0 0121 12h-3m-6-10V3M4 18l3.536-3.536m-3.536 3.536A8 8 0 003 12h3m6 6v3M5.636 5.636l3.536 3.536m-3.536-3.536A8 8 0 0012 3v3m12 6h-3M6 12H3" /></IconWrapper>
);
const ChevronDown = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></IconWrapper>
);
const OutlineSearch = (props) => (
    <IconWrapper {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></IconWrapper>
);

/* ------------------------------ Reusable Link ------------------------------ */

const NavLink = ({ icon: Icon, label, href, isActive }) => (
    <a
        href={href}
        className={`
            flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg 
            transition-all duration-200
            ${isActive ?
                'bg-indigo-600 text-white shadow-md' :
                'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
            }
        `}
    >
        <Icon className="w-5 h-5" />
        <span className="hidden lg:block">{label}</span>
    </a>
);



/* ------------------------------ Profile Menu -------------------------------- */

const ProfileDropdown = ({ onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { name: 'My Profile', href: '#/profile', icon: UserCircle },
        { name: 'Settings', href: '#/settings', icon: Cog },
        { name: 'Support / Help', href: '#/support', icon: Support },
        { name: 'Logout', action: onLogout, icon: OutlineLogout, isDestructive: true },
    ];



    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-1 rounded-full border-2 border-transparent hover:border-indigo-500 transition-colors"
            >
                <div className="w-9 h-9 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    JD
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-xl z-30">
                    <div className="p-2">
                        {items.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => {
                                    if (item.action) item.action();
                                    setIsOpen(false);
                                }}
                                className={`
                                    w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg
                                    ${item.isDestructive ?
                                        "text-red-600 hover:bg-red-50" :
                                        "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                                    }
                                `}
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

/* -------------------------------------------------------------------------- */
/*                               MAIN NAVBAR                                   */
/* -------------------------------------------------------------------------- */

export default function StudentNavbar({ activeTab = 'Dashboard' }) {
    const [mobileOpen, setMobileOpen] = useState(false);
const navigate = useNavigate();
    const handleLogout = () => {
        console.log("Logging out...");
    };

    return (
        <nav className="sticky top-0 z-20 bg-white shadow border-b border-gray-100">

            {/* TOP BAR */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <a href="/student/dashboard" className="text-2xl font-bold text-gray-900">
                        Study<span className="text-indigo-600">Hub</span>
                    </a>

                    {/* Desktop Middle Nav */}
                    <div className="hidden md:flex gap-4">
                        <NavLink icon={Home} label="Dashboard" href="#dashboard" isActive={activeTab === 'Dashboard'} />
                        <NavLink icon={BookOpen} label="Classes" href="#classes" isActive={activeTab === 'Classes'} />
                        <NavLink icon={ClipboardCheck} label="Assignments" href="#assignments" isActive={activeTab === 'Assignments'} />
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-2 sm:gap-4">

                        {/* Search */}
                        <div className="hidden sm:block relative">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 w-40 md:w-52 text-sm border border-gray-300 rounded-xl focus:ring-indigo-500"
                            />
                            <OutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>

                        {/* Notifications */}
                        <button
                            className="relative p-2 rounded-full hover:bg-gray-100 text-gray-600"
                            onClick={() => navigate("/student/Notifications")}
                            >
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                4
                            </span>
                            </button>

                        {/* Messages */}
                        <button className="relative p-2 rounded-full hover:bg-gray-100 text-gray-600">
                            <ChatAlt2 className="w-6 h-6" />
                            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
                        </button>

                        {/* Profile */}
                        <ProfileDropdown onLogout={handleLogout} />

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-full hover:bg-gray-100"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <ChevronDown className={`w-6 h-6 transition-transform ${mobileOpen ? "rotate-180" : ""}`} />
                        </button>

                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-3 animate-fade-in-down">

                    <NavLink icon={Home} label="Dashboard" href="#/dashboard" isActive={activeTab === 'Dashboard'} />
                    <NavLink icon={BookOpen} label="Classes" href="#/classes" isActive={activeTab === 'Classes'} />
                    <NavLink icon={ClipboardCheck} label="Assignments" href="#/assignments" isActive={activeTab === 'Assignments'} />

                    <div className="pt-3 border-t">
                        <button className="flex gap-3 items-center text-gray-700 py-2">
                            <UserCircle className="w-5 h-5" /> My Profile
                        </button>
                        <button className="flex gap-3 items-center text-gray-700 py-2">
                            <Cog className="w-5 h-5" /> Settings
                        </button>
                        <button className="flex gap-3 items-center text-red-600 py-2" onClick={handleLogout}>
                            <OutlineLogout className="w-5 h-5" /> Logout
                        </button>
                    </div>

                </div>
            )}

            <style jsx>{`
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down {
                    animation: fade-in-down .2s ease-out;
                }
            `}</style>
        </nav>
    );
}
