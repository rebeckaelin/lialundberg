import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import TreatmentsPage from "./pages/TreatmentsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LillaLia from "./pages/LillaLia.jsx";
import Ebony from "./pages/Ebony.jsx";
import Webshop from "./pages/Webshop.jsx";
import Books from "./pages/Books.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/om-mig" element={<AboutPage />} />
        <Route path="/behandlingar" element={<TreatmentsPage />} />
        <Route path="/bocker" element={<Books />} />
        <Route path="/bocker/lillalia" element={<LillaLia />} />
        <Route path="/bocker/ebony" element={<Ebony />} />
        <Route path="/webbshop" element={<Webshop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
