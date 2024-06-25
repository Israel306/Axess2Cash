import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Personal from "./pages/Personal";
import About from "./pages/About";
import Help from "./pages/Help";
import Awareness from "./pages/Awareness";
import Faq from "./pages/Faq";
import Signup from "./pages/signup/process/Signup";
import Otp from "./pages/signup/process/Otp";

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
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </Router>
  );
}

export default App;
