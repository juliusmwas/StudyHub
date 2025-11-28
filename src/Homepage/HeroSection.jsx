
export default function HeroSection() {
    return(
        <>
     <section id="home">
  {/* Outer padding to create space around the background image */}
  <div className="w-full mt-10 px-4 sm:px-8 md:px-12">
    <div className="relative w-full py-28 sm:py-36 md:py-44 min-h-[600px] flex items-center bg-[url('/bg6.jpg')] bg-cover bg-center rounded-2xl overflow-hidden shadow-xl">

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start h-full text-center md:text-left mx-auto max-w-7xl w-full px-4">
        
        <div className="w-full md:w-1/2 lg:w-4/5 flex flex-col items-center md:items-start">
          
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Collaborate, Learn, and Achieve Anytime, Anywhere</h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-10 font-light">
            Join live study rooms, access course materials, and collaborate with peers all in one easy-to-use platform designed to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:justify-start">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 w-full sm:w-auto">Register Now</button>
            <button className="border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg transition duration-300 w-full sm:w-auto">Learn How It Works</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}