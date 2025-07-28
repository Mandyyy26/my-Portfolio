// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] text-white overflow-hidden">
      {/* Profile Image */}
      <motion.img
        src="/Mandy.JPG"
        alt="Mandeep Malik"
        className="w-40 h-40 rounded-full object-cover shadow-xl mb-6 border-4 border-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.15 }}
        transition={{ duration: 0.6 }}
      />

      {/* Animated Name Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Hi, I’m{" "}
        <span className="text-green-400 underline decoration-green-400/50">
          Mandeep Malik
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Full-stack Web3 builder blending React, Node.js, and Ethereum smart
        contracts to craft secure decentralized apps.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
      >
        <a
          href="/projects"
          className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-105"
        >
          View My Projects
        </a>
        <a
          href="https://drive.google.com/file/d/1iV47QxFsDH2J_WehMMaMfjBn_kL4oARR/view?usp=sharing"
          download
          className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-100"
        >
          Download CV
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex space-x-6 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <a
          href="https://github.com/Mandyyy26"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/mandeep-malik-985151202/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/Mandyyy_yy"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300"
        >
          <FaXTwitter size={24} />
        </a>
      </motion.div>

      {/* SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 text-[#1f1f1f]"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,29.83,158,17.59
             C254.58,47,310.38,7.05,365,4.19c65.53-3.35,
             132.83,22,198,35.6C623.36,53,689.66,49.52,
             753,31.34c59.08-17.26,114-50.11,173-63.66,
             66.7-15.7,134.37-5.39,199,17.67V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
