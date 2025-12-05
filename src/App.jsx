import './index.css';
import Homepage from "./Pages/Homepage";
import AuthPage from "./Pages/AuthPage"; // Make sure to create this page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import StudentDashboard from './Pages/dashboard/student/Dashboard';
import TutorDashboard from './Pages/dashboard/tutor/Dashboard';
import ContinueLesson from './Pages/dashboard/student/Lessons/ContinueLesson';
import StudentSchedule from './Pages/dashboard/student/Lessons/StudentSchedule';
import StudentMessages from "./Pages/dashboard/student/Messages/StudentMessages";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, // smooth speed
      offset: 100,   // triggers earlier
      once: false,   // animate only once per scroll
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* AuthPage for login/sign-up */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Future Dashboard Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/tutor/dashboard" element={<TutorDashboard />} />
        <Route path="/student/lessons/continue" element={<ContinueLesson />}/>
        <Route path="/student/schedule" element={<StudentSchedule />}/>
        <Route path="/student/messages" element={<StudentMessages />}/>

      </Routes>
    </Router>
  );
}

export default App;
