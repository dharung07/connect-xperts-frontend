import HomePage from "./components/HomePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleSelection from "./components/RoleSelection";
import StudentForm from "./components/StudentRegistration";
import AlumniForm from "./components/AlumniRegistration";
import LoginPage from "./components/LoginPage";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/role" element={<RoleSelection />} />
          <Route path="/student-form" element={<StudentForm />} />
          <Route path="/alumni-form" element={<AlumniForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App