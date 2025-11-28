import { motion } from "framer-motion";


export default function HeroSection() {
    return(
        <>
            <section id="home">
            {/* Outer padding to create space around the background image */}
            <div className="w-full px-4 mt-10 sm:px-8 md:px-12">
                
                {/* Background container */}
                <div className="relative w-full py-28 sm:py-36 md:py-44 min-h-[600px] flex items-center bg-[url('/bg6.jpg')] bg-cover bg-center rounded-2xl overflow-hidden shadow-xl">

                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>

                {/* Text container */}
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start h-full text-center md:text-left mx-auto max-w-7xl w-full px-4">
                    
                    <div className="w-full md:w-1/2 lg:w-4/5 flex flex-col items-center md:items-start">

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Collaborate, Learn, and Achieve Anytime, Anywhere
                    </motion.h1>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        className="text-lg sm:text-xl text-gray-200 mb-10 font-light"
                    >
                        Join live study rooms, access course materials, and collaborate with peers all in one easy-to-use platform designed to help you succeed.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                        hidden: {},
                        visible: {
                            transition: {
                            staggerChildren: 0.25
                            }
                        }
                        }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full md:justify-start"
                    >
                        <motion.button
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 w-full sm:w-auto"
                        >
                        Register Now
                        </motion.button>

                        <motion.button
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg transition duration-300 w-full sm:w-auto"
                        >
                        Learn How It Works
                        </motion.button>
                    </motion.div>

                    </div>
                </div>
                </div>
            </div>
            </section>

        </>
    );
}