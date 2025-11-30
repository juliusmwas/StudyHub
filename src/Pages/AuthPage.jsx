import React, { useState } from 'react';
import { HiUser, HiAcademicCap, HiPencilAlt, HiArrowLeft } from 'react-icons/hi'; 
import { useNavigate, useLocation } from 'react-router-dom'; 

// --- Reusable Form Input Component (Unchanged) ---
const FormInput = ({ id, label, type = 'text', value, onChange, placeholder, required = true }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
        />
    </div>
);

// --- Login Form Component (UPDATED with Role Selection) ---
const LoginForm = ({ switchToRegister, handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // 👈 New state for role

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass role along with credentials
        handleLogin({ email, password, role }); 
        console.log('Logging in with:', { email, password, role });
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 sm:p-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h3>
            <p className="mb-8 text-gray-500">Sign in to access your StudyHub dashboard.</p>

            <FormInput
                id="login-email"
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@studyhub.com"
            />
            <FormInput
                id="login-password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
            />

            {/* Role Selection Field (New Requirement) */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Log in as
                </label>
                <div className="flex space-x-4">
                    <button
                        type="button"
                        onClick={() => setRole('student')}
                        className={`flex-1 py-2 px-4 border rounded-lg transition duration-200 flex items-center justify-center gap-2 ${
                            role === 'student' 
                                ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-inner' 
                                : 'bg-white border-gray-300 text-gray-700 hover:border-indigo-400'
                        }`}
                    >
                        <HiAcademicCap className="w-5 h-5" /> Student
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole('tutor')}
                        className={`flex-1 py-2 px-4 border rounded-lg transition duration-200 flex items-center justify-center gap-2 ${
                            role === 'tutor' 
                                ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-inner' 
                                : 'bg-white border-gray-300 text-gray-700 hover:border-indigo-400'
                        }`}
                    >
                        <HiPencilAlt className="w-5 h-5" /> Tutor
                    </button>
                </div>
            </div>
            {/* End Role Selection */}

            <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
                Login
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <button 
                    type="button" 
                    onClick={() => switchToRegister('student')}
                    className="text-indigo-600 font-semibold hover:text-indigo-800"
                >
                    Register
                </button>
            </p>
        </form>
    );
};

// --- Registration Form Component (Unchanged) ---
const RegisterForm = ({ role, switchToLogin, handleRegister }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const userData = { fullName, email, password, role };
        if (role === 'tutor') {
            userData.phone = phone;
        }

        handleRegister(userData);
        console.log('Registering user:', userData);
    };

    const isTutor = role === 'tutor';

    return (
        <form onSubmit={handleSubmit} className="p-8 sm:p-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {isTutor ? 'Tutor Registration' : 'Student Registration'}
            </h3>
            <p className="mb-6 text-gray-500">Join StudyHub to start {isTutor ? 'teaching and mentoring.' : 'learning collaboratively.'}</p>
            
            <FormInput
                id="reg-fullname"
                label="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
            />
            <FormInput
                id="reg-email"
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@studyhub.com"
            />
            <FormInput
                id="reg-password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
            />
            <FormInput
                id="reg-confirm-password"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
            />
            
            {/* Tutor specific field */}
            {isTutor && (
                <FormInput
                    id="reg-phone"
                    label="Phone Number (Optional)"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(+1) 123 456 7890"
                    required={true}
                />
            )}

            <button
                type="submit"
                className="w-full mt-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
                Create new account
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button 
                    type="button" 
                    onClick={switchToLogin}
                    className="text-indigo-600 font-semibold hover:text-indigo-800"
                >
                    Login
                </button>
            </p>
        </form>
    );
};

// --- Back to Home Link Component (Simplified for placement logic) ---
const BackToHomeLink = ({ isDark = false, isFullWidth = false }) => {
    const navigate = useNavigate();
    
    // Base classes for the link
    let baseClasses = "flex items-center justify-center gap-1 text-sm font-medium transition duration-150 p-3 rounded-lg";
    
    if (isDark) {
        // Styling for the dark (Visual/Branding) column on large screens
        baseClasses += " text-gray-300 hover:text-white hover:bg-gray-800 relative z-10";
        if (isFullWidth) {
             // Use this for the bottom of the card on mobile
            baseClasses += " w-full";
        }
    } else {
        // Styling for the light (Form) column - used for the footer link
        baseClasses += " text-gray-600 hover:text-indigo-600";
        if (isFullWidth) {
            // Use this for the bottom of the card on mobile
            baseClasses += " w-full";
        }
    }

    return (
        <button
            onClick={() => navigate('/')} 
            className={baseClasses}
        >
            <HiArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
        </button>
    );
};


// --- Main Auth Page Component ---
export default function AuthPage() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const initialView = location.state?.tab === 'register' ? 'register' : 'login';

    const [currentView, setCurrentView] = useState(initialView); 
    const [registerRole, setRegisterRole] = useState('student'); 

    const handleLogin = (data) => {
        console.log('Attempting Login:', data);
        // navigate('/dashboard'); 
    };

    const handleRegister = (data) => {
        console.log('Attempting Registration:', data);
        setCurrentView('login');
    };

    const switchToRegister = (role) => {
        setRegisterRole(role);
        setCurrentView('register');
    };

    const switchToLogin = () => {
        setCurrentView('login');
    };

    // Render the form based on the current view
    const renderForm = () => {
        if (currentView === 'login') {
            return <LoginForm switchToRegister={switchToRegister} handleLogin={handleLogin} />;
        }
        
        return (
            <>
                {/* Role Selector Tabs */}
                <div className="flex justify-center p-4 pt-8 bg-gray-50 border-b border-gray-200">
                    <button
                        onClick={() => setRegisterRole('student')}
                        className={`px-6 py-2 rounded-l-lg text-lg font-medium transition duration-200 flex items-center gap-2 ${
                            registerRole === 'student'
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-r-0 border-gray-300'
                        }`}
                    >
                        <HiAcademicCap className="w-5 h-5" /> Student
                    </button>
                    <button
                        onClick={() => setRegisterRole('tutor')}
                        className={`px-6 py-2 rounded-r-lg text-lg font-medium transition duration-200 flex items-center gap-2 ${
                            registerRole === 'tutor'
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                        }`}
                    >
                        <HiPencilAlt className="w-5 h-5" /> Tutor
                    </button>
                </div>
                <RegisterForm 
                    role={registerRole} 
                    switchToLogin={switchToLogin} 
                    handleRegister={handleRegister} 
                />
            </>
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            
            {/* Main Card Container */}
            <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[550px]">
                
                {/* Left Side: Visual/Branding Column (Desktop Link remains here) */}
                <div className="hidden lg:flex lg:w-1/2 p-10 bg-gray-900 flex-col justify-between text-white relative">
                    {/* Desktop Link: Top left of the dark column */}
                    <div className="absolute top-4 left-4 z-20">
                        <BackToHomeLink isDark={true} />
                    </div>

                    <div className="relative z-10 flex flex-col justify-center h-full">
                        <h1 className="text-4xl font-extrabold mb-4">Study<span className="text-indigo-400">Hub</span></h1>
                        <h2 className="text-3xl font-semibold leading-relaxed">
                            {currentView === 'login' 
                                ? "Collaborate, Learn, and Achieve Anytime, Anywhere."
                                : "Start your journey to success, today."
                            }
                        </h2>
                        <p className="mt-4 text-gray-300">
                            Join live study rooms, access materials, and connect with peers—all in one easy-to-use platform.
                        </p>
                    </div>

                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/image_730414.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </div>

                {/* Right Side: Form Column (Updated for Mobile Link) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    
                    {renderForm()}

                    {/* 1. Mobile Link (New Position - Bottom of the Form Column) */}
                    <div className="lg:hidden p-8 pt-0 sm:p-10 sm:pt-0">
                        <BackToHomeLink isFullWidth={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}