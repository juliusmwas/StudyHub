import React from 'react';
import { HiCheckCircle } from "react-icons/hi"; // Using a checkmark icon for visual appeal

export default function AboutSection() {
    // Key features to use in the bullet points
    const featuresList = [
        "Live group study sessions and video rooms.",
        "Collaborative note-taking and resource sharing.",
        "Real-time progress tracking and task management.",
    ];

    return(
        
        <section id="about">
            <div className="w-full px-6 py-20 lg:py-28 max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Your All-in-One Learning Platform
                    </h1>
                </div>

                {/* Content Row */}
                {/* Ensure items are aligned to the top on desktop to prevent the image stretching the text container */}
                <div className="flex flex-col-reverse md:flex-row items-start gap-14"> 

                    {/* Text Section */}
                    <div className="w-full lg:mt-10 md:w-1/2">
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                            Study<span className="text-indigo-600 font-semibold">Hub</span> is a platform that helps
                            students learn together smarter. Join live study sessions, share resources, and stay
                            organized — everything you need in one place. Whether you're preparing for exams or
                            collaborating on group projects, StudyHub makes learning easier, more interactive, and
                            enjoyable.
                        </p>

                        {/* Bullets Points (ADDED HERE) */}
                        <ul className="space-y-4 mb-8">
                            {featuresList.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    {/* Checkmark icon for visual pop */}
                                    <HiCheckCircle className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-3 mt-1" />
                                    <span className="text-lg text-gray-700">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="flex flex-col lg:block">
                            <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Get Started
                            </button>
                        </div>
                        
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:mt-10 md:w-1/2 flex justify-center">
                        <img
                            src="/about4.jpg"
                            alt="Students learning together"
                            // Removed max-w-lg to allow it to grow slightly more if needed
                            className="rounded-xl shadow-xl w-full object-cover" 
                        />
                    </div>
                </div>
            </div>
        </section>
        
    );
}