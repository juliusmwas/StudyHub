import { MdOutlineVideoCall } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";

export default function FeaturesSection() {
    return(
        
        <section id="features"> 
            <div className="w-full px-6 py-20 lg:py-28 max-w-[1200px] mx-auto">
                
                {/* Header with AOS animation (Fade from top) */}
                <div className="text-center mb-14" data-aos="fade-down">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Why Study<span className="text-indigo-600">Hub</span>?
                    </h1>
                </div>

                {/* Features Grid with Staggered AOS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Card 1: Live Study Sessions (Fade up with 0ms delay) */}
                    <div 
                        className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-easing="ease-in-out"
                    >
                        <MdOutlineVideoCall className="text-6xl text-indigo-600 mb-6" />
                        <h3 className="text-2xl font-semibold mb-3">Live Study Sessions</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Connect instantly with peers through live video and real-time collaboration.
                            Join or create study rooms whenever you need support.
                        </p>
                    </div>

                    {/* Card 2: Resource Library (Fade up with 150ms delay) */}
                    <div 
                        className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition"
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-easing="ease-in-out"
                    >
                        <IoLibraryOutline  className="text-6xl text-indigo-600 mb-6" />
                        <h3 className="text-2xl font-semibold mb-3">Resource Library</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Access shared notes, school resources, and course materials all in one organized place.
                        </p>
                    </div>

                    {/* Card 3: Collaborative Tools (Fade up with 300ms delay) */}
                    <div 
                        className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-easing="ease-in-out"
                    >
                        <MdGroups2 className="text-6xl text-indigo-600 mb-6" />
                        <h3 className="text-2xl font-semibold mb-3">Collaborative Tools</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Work together on assignments and projects with tools designed for teamwork and productivity.
                        </p>
                    </div>

                </div>
            </div>
        </section>
        
    );
}