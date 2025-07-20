import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Project Data
const projects = [
  {
    id: 1,
    title: "CrossLend",
    description:
      "CrossLend enables secure, seamless borrowing of USDT on Avalanche by locking ETH collateral on Ethereum, powered by Chainlink CCIP.",
    image: "/CrossLend.png",
    repo: "https://github.com/chainlink-Hackthon-project",
    demo: "https://your-demo-url.com",
  },
  {
    id: 2,
    title: "RWA TESLA",
    description:
      "Real world asset tokenization of Tesla stocks. Buy and sell tokenized shares seamlessly.",
    image: "/tesla.jpg",
    repo: "https://github.com/yourusername/audit-tool",
    demo: "https://your-demo-url.com",
  },
  {
    id: 3,
    title: "Aquavista",
    description:
      "A full-stack book selling platform with modern UI and scalable backend.",
    image: "/Aquavista.png",
    repo: "https://github.com/Mandyyy26/Aquavista",
    demo: "https://aquavista.vercel.app/",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section className="relative bg-[#0e0e0e] py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white"
            variants={cardVariants}
          >
            🚀 My Projects
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto"
            variants={cardVariants}
          >
            A glimpse into what I’ve built so far. Each one is a step in my
            learning journey.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-yellow-400/10 transition duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{p.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-500 transition"
                  >
                    <FaGithub size={22} />
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-500 transition"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* "See More Projects" Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="px-6 py-3 rounded-full border border-white/20 text-white text-sm tracking-wide bg-white/10 hover:bg-white/20 backdrop-blur-lg transition-all"
            onClick={() => alert("Coming soon…")}
          >
            + See More Projects
          </button>
        </motion.div>
      </div>

      {/* Decorative SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 text-[#0e0e0e]"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,29.83,158,17.59
            C254.58,47,310.38,7.05,365,4.19
            c65.53-3.35,132.83,22,198,35.6
            C623.36,53,689.66,49.52,753,31.34
            c59.08-17.26,114-50.11,173-63.66
            c66.7-15.7,134.37-5.39,199,17.67V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
