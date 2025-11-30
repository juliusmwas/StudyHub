import React from 'react';

export default function CTA() {
    return(
        // The main section can use a simple fade-in
        <section id="cta" className="py-20 sm:py-24 bg-indigo-700" data-aos="fade-in"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main CTA Card Container - Use Zoom-in for dramatic effect */}
                <div 
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden 
                               flex flex-col lg:flex-row items-center lg:items-stretch 
                               text-center lg:text-left"
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-out"
                >
                    
                    {/* Left Side: Text Content - Apply AOS to inner elements for staggering */}
                    <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center lg:items-start">
                        
                        {/* CTA Headline (Fade up first, relative to the card zoom) */}
                        <h2 
                            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Ready to Boost Your Learning?
                        </h2>
                        
                        {/* Supporting Line (Fade up second) */}
                        <p 
                            className="text-lg text-gray-600 mb-8 max-w-xl"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Join StudyHub today and start studying smarter with people who share your goals.
                        </p>
                        
                        {/* Buttons Container (Fade up last) */}
                        <div 
                            className="sm:flex-row gap-4 w-full justify-center lg:justify-start max-w-xs sm:max-w-none"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            {/* Primary Button */}
                            <a 
                                href="#get-started" 
                                // Ensured primary color is indigo for consistency (was blue-600)
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 w-full sm:w-auto"
                            >
                                Get Started — It’s Free
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Side: Image - Use a fade-in for the image */}
                    <div 
                        className="w-full lg:w-1/2 flex-shrink-0"
                        data-aos="fade-in"
                        data-aos-delay="100" // Start slightly before the text
                        data-aos-duration="1000"
                    >
                        
                        <img 
                            src="/public/cta1.jpg" 
                            alt="Students collaborating on study materials"
                            className="w-full h-full object-cover rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}