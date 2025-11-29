

export default function AboutSection() {
    return(
        
        <section id="about">
            <div className="w-full px-6 py-20 lg:py-28 max-w-[1200px] mx-auto">
    <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Your All-in-One Learning Platform
        </h1>
    </div>

    {/* Content Row */}
    <div className="flex flex-col-reverse md:flex-row  items-center gap-14">

        {/* Text Section */}
        <div className="w-full lg:mt-10 md:w-1/2">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Study<span className="text-blue-600 font-semibold">Hub</span> is a platform that helps
                students learn together smarter. Join live study sessions, share resources, and stay
                organized — everything you need in one place. Whether you're preparing for exams or
                collaborating on group projects, StudyHub makes learning easier, more interactive, and
                enjoyable.
            </p>

            <div className="flex flex-col lg:block">
                <button className="mt-8 bg-blue-600  hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
  Get Started
</button>
            </div>
            


        </div>

        {/* Image Section */}
        <div className="w-full lg:mt-10 md:w-1/2 flex justify-center">
            <img
                src="/about4.jpg"
                alt="Students learning together"
                className="rounded-xl shadow-xl w-full max-w-lg object-cover"
            />
        </div>
    </div>
</div>


        </section>
        
    );

}