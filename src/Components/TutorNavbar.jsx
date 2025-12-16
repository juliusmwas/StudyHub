import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Users, 
  FileText, 
  MessageSquare, 
  Bell, 
  Menu, 
  X, 
  User, 
  Settings, 
  LogOut, 
  ChevronDown 
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, href: '#' },
    { name: 'My Classes', icon: <BookOpen size={18} />, href: '#' },
    { name: 'Schedule', icon: <Calendar size={18} />, href: '#' },
    { name: 'Students', icon: <Users size={18} />, href: '#' },
    { name: 'Resources', icon: <FileText size={18} />, href: '#' },
    { name: 'Messages', icon: <MessageSquare size={18} />, href: '#' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* 1. Platform Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <h1 className="font-bold text-xl text-gray-900">Study<span className='text-indigo-600'>Hub</span></h1>
            </div>
          </div>

          {/* 2. Primary Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          {/* 3 & 4. Notifications & Profile */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
              <Bell size={22} />
              <span className="absolute top-2 right-2.5 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1 pr-3 hover:bg-gray-100 rounded-full transition-all"
              >
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">
                  JD
                </div>
                <ChevronDown size={16} className={`text-gray-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"><User size={16}/> Profile</a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"><Settings size={16}/> Settings</a>
                  <hr className="my-1 border-gray-100" />
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"><LogOut size={16}/> Logout</a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-2 pt-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <hr className="my-2 border-gray-100" />
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-600"><Bell size={18}/> Notifications</a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600"><LogOut size={18}/> Logout</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;