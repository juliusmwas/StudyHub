import React from 'react';

// Testimonials Data (Moved inside the function or imported from a separate file)
const testimonialsData = [
    {
        id: 1,
        name: "Mehwish",
        title: "Student, Computer Science",
        quote: "StudyHub has completely transformed my study routine. The shared notes and video sessions make group projects seamless and fun!",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Placeholder
        accentColor: "border-indigo-500", // Tailwind colors for border
    },
    {
        id: 2,
        name: "Elizabeth Jeff",
        title: "Tutor, Mathematics",
        quote: "I found it easy to connect with my students and track their progress in real-time. A highly organized and effective learning tool.",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg", // Placeholder
        accentColor: "border-pink-500", // Tailwind colors for border
    },
    {
        id: 3,
        name: "Emily Thomas",
        title: "User, Professional Development",
        quote: "I use StudyHub to collaborate on certification materials. It keeps everything organized and helps our small team stay on track.",
        avatar: "https://randomuser.me/api/portraits/women/66.jpg", // Placeholder
        accentColor: "border-purple-500", // Tailwind colors for border
    },
];

// Reusable Testimonial Card Component
const TestimonialCard = ({ name, quote, avatar, accentColor }) => (
    <div className={`p-6 bg-white rounded-lg shadow-lg border-l-4 ${accentColor} transition duration-300 ease-in-out hover:shadow-xl`}>
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                    <p className="font-semibold text-gray-900 text-lg">{name}</p>
                </div>
            </div>
            {/* The Quote Icon (similar to the design) */}
            <span className={`text-4xl leading-none font-serif opacity-20 ${accentColor.replace('border-', 'text-')}`}>
                ”
            </span>
        </div>
        <p className="text-gray-600 text-base italic">
            "{quote}"
        </p>
    </div>
);


export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
                    
                    {/* Left Column: Header, CTA, and Star Graphic */}
                    <div className="lg:sticky lg:top-10 lg:pt-10 mb-12 lg:mb-0">
                        {/* Star Graphic (using a placeholder div) */}
                        
                        
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                            Hear From  <br /> Our Community.
                        </h2>
                        
                        {/* Summary Text */}
                        <p className="mt-6 text-xl text-gray-600 max-w-lg">
                            Trusted by thousands of students and tutors globally, StudyHub is the top-rated platform for organized, collaborative learning.
                        </p>
                        
                        {/* CTA Button */}
                        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300">
                            View More Success Stories
                        </button>
                    </div>

                    {/* Right Column: Testimonial Cards */}
                    <div className="space-y-6">
                        {testimonialsData.map((testimonial) => (
                            <TestimonialCard 
                                key={testimonial.id}
                                name={testimonial.name}
                                quote={testimonial.quote}
                                avatar={testimonial.avatar}
                                accentColor={testimonial.accentColor}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}