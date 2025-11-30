import React from 'react';

export default function CTA() {
    return(
        <section id="cta" className="py-20 sm:py-24 bg-indigo-700"> {/* Changed background to match inspiration */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main CTA Card Container */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden 
                                flex flex-col lg:flex-row items-center lg:items-stretch 
                                text-center lg:text-left">
                    
                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center lg:items-start">
                        
                       

                        {/* CTA Headline */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                            Ready to Boost Your Learning?
                        </h2>
                        
                        {/* Supporting Line */}
                        <p className="text-lg text-gray-600 mb-8 max-w-xl">
                            Join StudyHub today and start studying smarter with people who share your goals.
                        </p>
                        
                        {/* Buttons Container */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start max-w-xs sm:max-w-none">
                            {/* Primary Button */}
                            <a 
                                href="#get-started" 
                                className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-md 
                                           hover:bg-indigo-700 transition duration-300 ease-in-out"
                            >
                                Get Started — It’s Free
                            </a>

                            {/* Secondary Button (Book a Free Demo equivalent) */}
                            <a 
                                href="#learn-more" 
                                className="inline-block px-8 py-3 border-2 border-gray-300 text-gray-800 font-medium text-lg rounded-lg 
                                           hover:bg-gray-100 transition duration-300 ease-in-out"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 flex-shrink-0">
                        {/* Image from the inspiration - Replace with a relevant StudyHub image */}
                        <img 
                            src="https://images.unsplash.com/photo-1552664730-d307ca8849d1?fit=crop&q=80&w=1470&h=600" 
                            alt="Group of students or colleagues collaborating around a whiteboard"
                            className="w-full h-full object-cover rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}