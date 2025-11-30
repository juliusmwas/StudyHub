
import { useNavigate } from 'react-router-dom';


export default function HeroSection() {

const navigate = useNavigate();

    const handleRegisterClick = () => {
        // Redirect to the /auth page
        // We can pass state to the AuthPage to default to the 'register' view
        navigate('/auth', { state: { tab: 'register' } }); 
    };


    
    return(
        
            <section id="home">
            {/* Outer padding to create space around the background image */}
            <div className="w-full px-6 h-screen mt-10 sm:px-8 md:px-12">
                
                {/* Background container */}
                <div className="relative w-full py-28 sm:py-36 md:py-44 min-h-[600px] lg:h-screen flex items-center bg-[url('/bg6.jpg')] bg-cover bg-center rounded-2xl overflow-hidden shadow-xl">

                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

                {/* Text container */}
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start h-full text-center md:text-left mx-auto max-w-7xl w-full px-4 lg:px-15" data-aos="fade-right">
                    
                    <div className="w-full md:w-1/2 lg:w-4/5 flex flex-col lg:mt-30 items-center md:items-start">

                    {/* Heading */}
                    <h1 className="text-2xl  md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                        Collaborate, Learn, and Achieve Anytime, Anywhere
                    </h1>

                    {/* Paragraph */}
                    <p className="text-sm sm:text-xl text-white mb-10  font-normal">
                        Join live study rooms, access course materials, and collaborate with peers all in one easy-to-use platform designed to help you succeed.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:justify-start">
                        <button 
                            onClick={handleRegisterClick}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 w-full sm:w-auto">
                        Register Now
                        </button>

                        <a 
                            href="#howitworks" // 👈 Set the hash link here
                            className="w-full sm:w-auto inline-block" // 👈 Wrap to manage button width
                        >
                        <button className="border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg transition duration-300 w-full sm:w-auto">
                        Learn How It Works
                        </button>
                        </a>
                    </div>

                    </div>
                </div>
                </div>
            </div>
            </section>

        
    );
}