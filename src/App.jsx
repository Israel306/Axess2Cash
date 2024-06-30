import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Personal from "./pages/Personal";
import About from "./pages/About";
import Help from "./pages/Help";
import Awareness from "./pages/Awareness";
import Faq from "./pages/Faq";
import Signup from "./pages/signup/process/Signup";
import Otp from "./pages/signup/process/Otp";
import AccSetup from "./pages/signup/process/AccSetup";
import CreatePin from "./pages/signup/process/CreatePin";
import ConfirmPin from "./pages/signup/process/ConfirmPin";
import Login from "./pages/signup/process/Login";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/accsetup" element={<AccSetup />} />
        <Route path="/createpin" element={<CreatePin />} />
        <Route path="/confirmpin" element={<ConfirmPin />} />
      </Routes>
    </Router>
  );
}

export default App;
