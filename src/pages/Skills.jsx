import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaGithub,
  FaJava,
  FaIndustry,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiRedux,
  SiCplusplus,
  SiSolidity,
  SiNextdotjs,
  SiMysql,
  SiChainlink,
  SiIpfs,
  SiEthers,
} from "react-icons/si";

const skills = {
  Languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Solidity", icon: <SiSolidity /> },
  ],
  Frameworks: [
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Redux", icon: <SiRedux /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Docker", icon: <FaDocker /> },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "SQL", icon: <SiMysql /> },
  ],
  Blockchain: [
    { name: "Foundry", icon: <FaIndustry /> },
    { name: "Ethers.js", icon: <SiEthers /> },
    { name: "IPFS", icon: <SiIpfs /> },
    { name: "Chainlink", icon: <SiChainlink /> },
    { name: "Remix IDE", icon: <SiSolidity /> }, // reused Solidity icon
  ],
  Styling: [{ name: "Tailwind CSS", icon: <SiTailwindcss /> }],
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {items.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-[#1f1f1f] p-4 rounded-lg flex flex-col items-center shadow-lg hover:bg-[#2a2a2a] transition"
                  >
                    <div className="text-3xl mb-2 text-green-400">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
