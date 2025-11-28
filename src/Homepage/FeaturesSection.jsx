import { MdOutlineVideoCall } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";




export default function FeaturesSection() {
    return(
        <>
            <section id="features"> 
                <div className="w-full px-6 py-20 lg:py-28 max-w-[1200px] mx-auto">
  <div className="text-center mb-14">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
      Why Study<span className="text-blue-600">Hub</span>?
    </h1>
  </div>

  {/* Features Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Card 1 */}
    <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
      <MdOutlineVideoCall className="text-6xl text-blue-600 mb-6" />
      <h3 className="text-2xl font-semibold mb-3">Live Study Sessions</h3>
      <p className="text-gray-600 leading-relaxed">
        Connect instantly with peers through live video and real-time collaboration.
        Join or create study rooms whenever you need support.
      </p>
    </div>

   
    <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
      <IoLibraryOutline  className="text-6xl text-blue-600 mb-6" />
      <h3 className="text-2xl font-semibold mb-3">Resource Library</h3>
      <p className="text-gray-600 leading-relaxed">
        Access shared notes, school resources, and course materials all in one organized place.
      </p>
    </div>

    
    <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
      <MdGroups2 className="text-6xl text-blue-600 mb-6" />
      <h3 className="text-2xl font-semibold mb-3">Collaborative Tools</h3>
      <p className="text-gray-600 leading-relaxed">
        Work together on assignments and projects with tools designed for teamwork and productivity.
      </p>
    </div>

  </div>
</div>

            </section>
        </>
    );
}