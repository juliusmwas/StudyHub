import './index.css'
import Homepage from "./Pages/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, // smooth speed
      offset: 100,   // triggers earlier
      once: false,    // animate only once per scroll
    });
  }, []);

  return (
    <>
      <Homepage />
    </>
  )
}

export default App
