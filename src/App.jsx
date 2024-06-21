import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Personal from "./pages/Personal";
import About from "./pages/About";
import Help from "./pages/Help";
import Awareness from "./pages/Awareness";
import Faq from "./pages/Faq";

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
      </Routes>
    </Router>
  );
}

export default App;
