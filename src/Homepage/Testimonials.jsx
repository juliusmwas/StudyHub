import React from 'react';

// Testimonials Data (Moved inside the function or imported from a separate file)
const testimonialsData = [
    {
        id: 1,
        name: "Mehwish",
        title: "Student, Computer Science",
        quote: "StudyHub has completely transformed my study routine. The shared notes and video sessions make group projects seamless and fun!",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Placeholder
        accentColor: "border-indigo-600", // Using StudyHub's primary color
    },
    {
        id: 2,
        name: "Elizabeth Jeff",
        title: "Tutor, Mathematics",
        quote: "I found it easy to connect with my students and track their progress in real-time. A highly organized and effective learning tool.",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg", // Placeholder
        accentColor: "border-teal-500", // Secondary color for variety
    },
    {
        id: 3,
        name: "Emily Thomas",
        title: "User, Professional Development",
        quote: "I use StudyHub to collaborate on certification materials. It keeps everything organized and helps our small team stay on track.",
        avatar: "https://randomuser.me/api/portraits/women/66.jpg", // Placeholder
        accentColor: "border-yellow-500", // Tertiary color for variety
    },
];

// Reusable Testimonial Card Component
const TestimonialCard = ({ name, quote, avatar, accentColor, title }) => (
    <div className={`p-6 bg-white rounded-xl shadow-lg border-l-4 ${accentColor} transition duration-300 ease-in-out hover:shadow-2xl`}>
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-200 mr-4"
                />
                <div>
                    <p className="font-semibold text-gray-900 text-lg">{name}</p>
                    <p className="text-sm text-gray-500">{title}</p>
                </div>
            </div>
            {/* Enhanced Quote Icon */}
            <span className={`text-5xl leading-none font-serif font-extrabold opacity-30 ${accentColor.replace('border-', 'text-')}`}>
                ”
            </span>
        </div>
        <p className="text-gray-700 text-base italic leading-relaxed">
            "{quote}"
        </p>
    </div>
);


export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
                    
                    {/* Left Column: Header, CTA, and Star Graphic */}
                    {/* AOS: Animate the entire header block with a simple fade-right */}
                    <div 
                        className="lg:sticky lg:top-20 lg:pt-10 mb-12 lg:mb-0"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out"
                    >
                        {/* Star Graphic Placeholder (Optional: Add real stars/rating) */}
                        <div className="flex space-x-1 text-yellow-500 mb-3 text-2xl">
                             ★★★★★
                        </div>
                        
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                            Hear From <br /> Our Community.
                        </h2>
                        
                        {/* Summary Text */}
                        <p className="mt-6 text-xl text-gray-600 max-w-lg">
                            Trusted by thousands of students and tutors globally, StudyHub is the top-rated platform for organized, collaborative learning.
                        </p>
                        
                        {/* CTA Button - Swapped gradient for StudyHub primary color */}
                        <button className="mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transform hover:scale-[1.03] transition duration-300">
                            View More Success Stories
                        </button>
                    </div>

                    {/* Right Column: Testimonial Cards */}
                    <div className="space-y-6">
                        {testimonialsData.map((testimonial, index) => (
                            // AOS: Staggered Fade Up for each card
                            <div 
                                key={testimonial.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 150} // 0ms, 150ms, 300ms delay
                                data-aos-easing="ease-in-out"
                            >
                                <TestimonialCard 
                                    key={testimonial.id}
                                    name={testimonial.name}
                                    title={testimonial.title}
                                    quote={testimonial.quote}
                                    avatar={testimonial.avatar}
                                    accentColor={testimonial.accentColor}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}