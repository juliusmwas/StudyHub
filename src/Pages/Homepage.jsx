import Navbar from "../Components/Navbar";
import Hero from "../Homepage/Hero";
import About from "../Homepage/About";
import Features from "../Homepage/Features";
import HowItWorks from "../Homepage/HowItWorks";
import Testimonials from "../Homepage/Testimonials";
import CTA from "../Homepage/CTA";
import Footer from "../Components/Footer";



export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
