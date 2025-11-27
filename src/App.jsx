import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import WriterPage from "./pages/WriterPage";
import TreatmentsPage from "./pages/TreatmentsPage";
import ContactPage from "./pages/ContactPage.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LillaLia from "./pages/LillaLia.jsx";
import Ebony from "./pages/Ebony.jsx";
import Webshop from "./pages/Webshop.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/om-mig" element={<AboutPage />} />
        <Route path="/behandlingar" element={<TreatmentsPage />} />
        <Route path="/forfattare" element={<WriterPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/bocker/lillalia" element={<LillaLia />} />
        <Route path="/bocker/ebony" element={<Ebony />} />
        <Route path="/bocker/webbshop" element={<Webshop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
