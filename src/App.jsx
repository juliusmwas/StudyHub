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
import CompletedLessons from "./Pages/dashboard/student/Lessons/CompletedLessons";
import ReviewLesson from "./Pages/dashboard/student/Lessons/ReviewLesson";
import StudentProgress from "./Pages/dashboard/student/Progress/StudentProgress";
import AllClasses from "./Pages/dashboard/student/Classes/AllClasses";
import ClassDetails from './Pages/dashboard/student/Classes/ClassDetails';
import JoinLiveClass from './Pages/dashboard/student/Classes/JoinLiveClass';
import Notes from './Pages/dashboard/student/Resources/Notes';
import PDFs from './Pages/dashboard/student/Resources/PDFs';
import Videos from './Pages/dashboard/student/Resources/Videos';
import Notifications from './Pages/dashboard/student/Notifications/Notifications';
import Profile from './Pages/dashboard/student/Profile';
import Settings from './Pages/dashboard/student/Settings';
import Support from './Pages/dashboard/student/Support';



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
        <Route path="/student/lessons/completed" element={<CompletedLessons />}/>
        <Route path="/student/lessons/:id/review" element={<ReviewLesson />} />
        <Route path="/student/progress" element={<StudentProgress />} />
        <Route path="/student/classes" element={<AllClasses />} />
        <Route path="/student/classes/:id" element={<ClassDetails />} />
        <Route path="/student/class/:id/live" element={<JoinLiveClass />} />
        <Route path="/student/Resources/notes" element={<Notes />} />
        <Route path="/student/Resources/pdfs" element={<PDFs />} />
        <Route path="/student/Resources/videos" element={<Videos />} />
        <Route path="/student/Notifications" element={<Notifications />} />
        <Route path="/student/Profile" element={<Profile />} />
        <Route path="/student/Settings" element={<Settings />} />
        <Route path="/student/Support" element={<Support />} />


      
        

      </Routes>
    </Router>
  );
}

export default App;
