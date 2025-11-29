import { FaRegCheckCircle } from "react-icons/fa";

// Define the steps content
const steps = [
  {
    step: '01',
    title: 'Create Your Account',
    description: 'Sign up in seconds using your email. Set up your profile and choose what subjects you want to focus on.',
    icon: FaRegCheckCircle, 
  },
  {
    step: '02',
    title: 'Join or Create a Study Room',
    description: 'Enter an existing study session or start your own. Connect with classmates through video, chat, and shared notes.',
    icon: FaRegCheckCircle, 
  },
  {
    step: '03',
    title: 'Learn & Stay Organized',
    description: 'Share materials, schedule sessions, and track your progress — everything you need to stay productive in one place.',
    icon: FaRegCheckCircle, 
  },
];

export default function HowItWorksSection() { 
  return (
    // Section background slightly different for transition (bg-gray-50) and generous padding
    <section id="howitworks" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Let's See How It Works
          </h2>
          {/* Micro-copy Tip */}
          <p className="mt-4 text-xl text-gray-600">
            Get started in just a few steps — no complicated setup.
          </p>
        </div>

        {/* Content Layout - Image and Steps */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center gap-20">

          {/* Left Side: Image (similar to the design) */}
          <div className="w-full lg:w-3/3 mb-10 lg:mb-0">
            <div className="rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-[1.02]">

              <div className="bg-cover bg-center h-150 min-h-60">
                <img src="/how2.jpg" alt="" />
              </div>
            </div>
          </div>

          {/* Right Side: Steps Breakdown */}
          <div className="w-full lg:w-3/3">
            {steps.map((step, index) => (
              <div key={step.step} className="flex relative pb-10 sm:pb-12">

                {/* Vertical Connector Line (Only if not the last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-0 left-6 sm:left-12 h-full w-0.5 bg-indigo-200" aria-hidden="true" />
                )}

                {/* Step Marker/Icon/Number */}
                <div className="flex-shrink-0 relative">

                    {/* The Checkmark Circle (Deep Blue primary color) */}
                    {/* Render the icon component directly */}
                    <step.icon className="h-10 w-10 text-indigo-600 rounded-full bg-white relative z-10 p-1 shadow-md" aria-hidden="true" />

                    {/* Desktop Step Number (Hidden on Mobile) */}
                    <div className="hidden lg:flex absolute -left-16 top-0 h-10 w-10 items-center justify-center font-bold text-lg text-indigo-600">
                        {step.step}
                    </div>
                </div>

                {/* Step Content */}
                <div className="ml-6 sm:ml-10 pt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
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