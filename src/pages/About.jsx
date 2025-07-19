// src/pages/About.jsx
import React from "react";
import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import GreetingAnimation from "../components/GreetingAnimation";

const steps = [
  {
    key: "past",
    title: "Past",
    icon: FaGraduationCap,
    gradient: "from-green-400 to-blue-600",
    text: `Graduated from IIITM Gwalior, explored full‑stack development, “broke”
      things (ethically) to learn security fundamentals.`,
  },
  {
    key: "now",
    title: "Now",
    icon: FaLaptopCode,
    gradient: "from-purple-500 to-pink-600",
    text: `Auditing smart contracts, building Blockchain based applications, and grinding DSA problems
      to sharpen my core CS skills.`,
  },
  {
    key: "next",
    title: "Next",
    icon: FaRocket,
    gradient: "from-yellow-400 to-red-500",
    text: `Diving deeper into Web3 security, leading open‐source audits, and
      architecting scalable dApps.`,
  },
];

export default function About() {
  return (
    <>
      <GreetingAnimation />
      <section className="bg-gray-900 text-white py-20 min-h-screen">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center border border-gray-700"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                >
                  <div
                    className={`bg-gradient-to-br ${step.gradient} w-16 h-16 flex items-center justify-center rounded-full text-white mb-6 shadow-md`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
