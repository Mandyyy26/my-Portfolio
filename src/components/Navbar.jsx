import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons, very light

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="bg-zinc-900 text-white px-6 py-4 shadow-xl sticky top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500"
        >
          Mandy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative transition-all duration-300"
            >
              {link.label}
              <span className="block h-0.5 max-w-0 bg-purple-400 group-hover:max-w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden mt-4 flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-purple-400 text-lg"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
