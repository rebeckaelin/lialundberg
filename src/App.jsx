import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import WriterPage from "./pages/WriterPage";
import TreatmentsPage from "./pages/TreatmentsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/om-mig" element={<AboutPage />} />
        <Route path="/behandlingar" element={<TreatmentsPage />} />
        <Route path="/forfattare" element={<WriterPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
