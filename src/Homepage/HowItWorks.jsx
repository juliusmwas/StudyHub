import { FaRegCheckCircle } from "react-icons/fa";

// Define the steps content, adding AOS delay for staggered animation
const steps = [
  {
    step: '01',
    title: 'Create Your Account',
    description: 'Sign up in seconds using your email. Set up your profile and choose what subjects you want to focus on.',
    icon: FaRegCheckCircle, 
    aosDelay: 100,
  },
  {
    step: '02',
    title: 'Join or Create a Study Room',
    description: 'Enter an existing study session or start your own. Connect with classmates through video, chat, and shared notes.',
    icon: FaRegCheckCircle, 
    aosDelay: 300,
  },
  {
    step: '03',
    title: 'Learn & Stay Organized',
    description: 'Share materials, schedule sessions, and track your progress — everything you need to stay productive in one place.',
    icon: FaRegCheckCircle, 
    aosDelay: 500,
  },
];

export default function HowItWorksSection() { 
  return (
    <section id="howitworks" className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section with AOS */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Let's See How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get started in just three simple steps — no complicated setup.
          </p>
        </div>

        {/* Content Layout - Image and Steps */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center gap-20">

          {/* Left Side: Image (Zoom In) */}
          {/* Adjusted width to match the steps column better (closer to 50/50 split) */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0" data-aos="zoom-in" data-aos-easing="ease-out-back">
            <div className="rounded-2xl shadow-2xl overflow-hidden">
                {/* Use a simple image tag and object-cover for responsive height */}
                <img 
                    src="/how2.jpg" 
                    alt="StudyHub platform interface screenshot" 
                    className="w-full h-full object-cover"
                />
            </div>
          </div>

          {/* Right Side: Steps Breakdown */}
          <div className="w-full lg:w-1/2">
            {steps.map((step, index) => (
              <div 
                key={step.step} 
                className="flex relative pb-10 sm:pb-12"
                data-aos="fade-left"
                data-aos-delay={step.aosDelay}
                data-aos-easing="ease-in-out"
              >

                {/* Vertical Connector Line (Only if not the last step) */}
                {index < steps.length - 1 && (
                  // Position changed for better alignment
                  <div className="absolute top-0 left-5 sm:left-6 h-full w-0.5 bg-indigo-200" aria-hidden="true" />
                )}

                {/* Step Marker/Number */}
                <div className="flex-shrink-0 relative z-10">

                    {/* Outer Circle (Background) */}
                    <div className="h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                        {step.step}
                    </div>

                    {/* Icon Overlay (Optional: If you want to keep the icon, but visually the number is clearer)
                    <step.icon className="h-10 w-10 text-indigo-600 rounded-full bg-white relative z-10 p-1 shadow-md" aria-hidden="true" />
                    */}
                </div>

                {/* Step Content */}
                {/* Simplified padding and margins */}
                <div className="ml-6 pt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    <span className="text-indigo-600 mr-2">{step.step}.</span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}