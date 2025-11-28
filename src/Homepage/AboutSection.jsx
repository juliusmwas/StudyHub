

export default function AboutSection() {
    return(
        <>
        <section id="about">
            <div className="w-full px-4 py-1 sm:px-8 md:px-12 max-w-7xl mx-auto lg:mt-20">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Your All-in-One Learning Platform</h1>
                </div>

            {/* Content Row */}
                <div className="flex lg:mt-20 flex-col-reverse md:flex-row items-center gap-10">

                    {/* Text Section */}
                    <div className="w-full md:w-1/2">
                    <p className="text-lg sm:text-xl text-gray-700 font-normal leading-relaxed">
                        StudyHub is a platform that helps students learn together in a smarter way.
                        You can join live study sessions with your classmates, share notes and resources,
                        and stay organized with everything you need in one place. Whether you are preparing
                        for exams or working on group projects, StudyHub makes learning easier, interactive,
                        and more fun.
                    </p>
                    </div>

                    {/* Image on the Right */}
                    <div className="w-full md:w-1/2  flex justify-center">
                    <img 
                        src="/about4.jpg" 
                        alt="Students learning together" 
                        className="rounded-xl shadow-lg w-full max-w-md object-cover"
                    />
                    </div>

                </div>
            </div>

        </section>
        </>
    );

}