// src/components/Footer.jsx
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaChessKnight,
  FaFutbol,
  FaChess,
} from "react-icons/fa";
import { FaRegChessPawn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Chess + copyright + Football */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <FaChessKnight className="text-green-400" size={24} />
          <span className="text-sm">
            &copy; {new Date().getFullYear()} Mandy. All rights reserved.
          </span>
          <FaFutbol className="text-green-400" size={24} />
        </div>

        {/* Right: Social icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Mandyyy26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mandeep-malik-985151202/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://x.com/Mandyyy_yy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://lichess.org/@/maaaandyy_108" // Replace with your exact Chess.com username if different
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LiChess.com"
          >
            <FaChess size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
