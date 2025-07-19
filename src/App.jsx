import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0f1a] text-white">
      <BrowserRouter>
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
