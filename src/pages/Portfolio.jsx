// src/pages/Portfolio.jsx
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import Skills from "./Skills";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("home");
  const [formStatus, setFormStatus] = useState(null);
  const { scrollYProgress } = useScroll();

  // Parallax effect
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(sectionId);
  };

  // Navigation Items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "ChainWatch",
      description:
        "A decentralized uptime monitoring system where validators across the globe check website health and report status to a central hub for real-time tracking and analytics.",
      image: "/dpin.png",
      repo: "https://github.com/Mandyyy26/dpin_monitoring",
      demo: "https://blogify-mandeepmalik.netlify.app", // TODO: add demo
      tags: ["Blockchain"],
    },
    {
      id: 2,
      title: "AgentX402",
      description:
        "Autonomous shopping assistance using polygon agentic x402 payments.",
      image: "/Agentx402.png",
      repo: "https://github.com/Mandyyy26/Agentx402",
      demo: "https://subspace-mandeepmalik.netlify.app", // TODO: add demo
      tags: ["React", "https payments", "NLM"],
    },
    {
      id: 3,
      title: "CrossLend",
      description:
        "Secure, seamless borrowing of USDT on Avalanche by locking ETH collateral on Ethereum, powered by Chainlink CCIP.",
      image: "/CrossLend.png",
      repo: "https://github.com/chainlink-Hackthon-project",
      demo: "https://your-demo-url.com",
      tags: ["Ethereum", "Avalanche", "Chainlink"],
    },
    {
      id: 4,
      title: "RWA TESLA",
      description: "Real world asset tokenization of Tesla stocks.",
      image: "/tesla.jpg",
      repo: "https://github.com/Mandyyy26/RWA-dTsla",
      demo: "https://your-demo-url.com",
      tags: ["RWA", "Tokenization", "Solidity"],
    },
    {
      id: 5,
      title: "Blogify",
      description:
        "AI-powered content automation system that generates, formats, and previews Markdown articles using n8n workflows.",
      image: "/Blogify.png",
      repo: "https://github.com/Mandyyy26/Blog-Generator",
      demo: "https://blogify-mandeepmalik.netlify.app",
      tags: ["n8n", "AI", "Markdown"],
    },
    {
      id: 6,
      title: "ChatSpace",
      description:
        "Real-time chat application built with React, GraphQL (Hasura), and Nhost Auth.",
      image: "/Chatspace.png",
      repo: "https://github.com/Mandyyy26/TaskHive",
      demo: "https://subspace-mandeepmalik.netlify.app",
      tags: ["React", "GraphQL", "Hasura"],
    },
    {
      id: 7,
      title: "Aquavista",
      description: "Full-stack book selling platform with modern UI.",
      image: "/Aquavista.png",
      repo: "https://github.com/Mandyyy26/Aquavista",
      demo: "https://aquavista.vercel.app/",
      tags: ["Full-Stack", "E-commerce"],
    },
  ];

  const about = [
    {
      key: "past",
      title: "Past",
      icon: FaGraduationCap,
      gradient: "from-green-400 to-blue-600",
      text: `Graduated from IIITM Gwalior, explored full‑stack development, "broke" things (ethically) to learn security fundamentals.`,
    },
    {
      key: "now",
      title: "Now",
      icon: FaLaptopCode,
      gradient: "from-purple-500 to-pink-600",
      text: `Auditing smart contracts, building Blockchain based applications, and grinding DSA problems to sharpen my core CS skills.`,
    },
    {
      key: "next",
      title: "Next",
      icon: FaRocket,
      gradient: "from-yellow-400 to-red-500",
      text: `Diving deeper into Web3 security, leading open‐source audits, and architecting scalable dApps.`,
    },
  ];

  // Email form ref
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qr7fu5t",
        "template_hve1hzw",
        form.current,
        "LNPH83bEHcJ47spQu"
      )
      .then(
        () => {
          setFormStatus("SUCCESS");
          form.current.reset();
          setTimeout(() => setFormStatus(null), 4000);
        },
        () => {
          setFormStatus("ERROR");
          setTimeout(() => setFormStatus(null), 4000);
        }
      );
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
      />

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1 }}
          >
            Mandeep
          </motion.div>

          <div className="flex gap-8 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition-colors hidden sm:block ${
                  activeNav === item.id
                    ? "text-green-400"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                {activeNav === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500"
                    layoutId="underline"
                  />
                )}
              </motion.button>
            ))}

            {/* CV/Resume Link */}
            <motion.a
              href="https://drive.google.com/file/d/1z0zlz-uwmCxQRWVCZ4MRz77vR5Lk3_t-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-slate-900 font-semibold rounded-full text-sm transition-all duration-300 shadow-lg shadow-green-500/50"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(74, 222, 128, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Resume
            </motion.a>
          </div>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 flex items-center justify-center"
      >
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 opacity-40">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
            animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          ></motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl opacity-60"></div>
            <motion.img
              src="/Mandy.JPG"
              alt="Mandeep Malik"
              className="relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-slate-700 hover:border-green-400 transition-colors duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Name Heading */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400">
                Hi, I'm Mandeep
              </span>
            </h1>
            <motion.div
              className="h-1 w-32 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            ></motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-green-400/10 border border-green-400/30 backdrop-blur-sm">
              <span className="text-sm font-semibold text-green-300">
                💻 Full-Stack Web3 Builder
              </span>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
              Building{" "}
              <span className="text-green-400 font-semibold">secure</span> and{" "}
              <span className="text-blue-400 font-semibold">scalable</span> web3
              applications that bridge traditional systems with decentralized
              networks.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-slate-900 font-bold rounded-full shadow-lg shadow-green-500/50 transition-all duration-300 flex items-center gap-2"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(74, 222, 128, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              View My Projects →
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-slate-400 hover:border-green-400 text-white font-bold rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-slate-700/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              {
                icon: FaGithub,
                url: "https://github.com/Mandyyy26",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                url: "https://www.linkedin.com/in/mandeep-malik-985151202/",
                label: "LinkedIn",
              },
              {
                icon: FaXTwitter,
                url: "https://x.com/Mandyyy_yy",
                label: "Twitter",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="relative group"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-slate-700 group-hover:bg-slate-600 border border-slate-600 group-hover:border-green-400 transition-all duration-300">
                  <social.icon
                    size={24}
                    className="text-slate-300 group-hover:text-green-400 transition-colors"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-green-400 rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section
        id="about"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                About Me
              </span>
            </h2>
            <p className="text-xl text-slate-400">My journey so far</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.key}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 group-hover:border-green-400/50 transition-all duration-300 h-full">
                    <div
                      className={`bg-gradient-to-br ${item.gradient} w-16 h-16 flex items-center justify-center rounded-full text-white mb-6 shadow-lg shadow-green-500/20`}
                    >
                      <Icon size={32} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SKILLS SECTION ========== */}
      <section>
        <Skills />
      </section>

      {/* ========== PROJECTS SECTION ========== */}
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-slate-400">Showcasing my best work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group relative h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700 group-hover:border-green-400/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-48 bg-slate-900">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-green-400/10 border border-green-400/30 text-green-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-slate-700">
                      <motion.a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-slate-700/50 hover:bg-green-400/20 rounded-lg transition-all duration-300 text-slate-300 hover:text-green-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaGithub /> Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-green-400/10 hover:bg-green-400/20 border border-green-400/30 rounded-lg transition-all duration-300 text-green-300 hover:text-green-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaExternalLinkAlt /> Live
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section
        id="contact"
        className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20 px-4 relative flex items-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Have a project in mind? Let's talk!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {[
                  {
                    icon: FaMapMarkerAlt,
                    title: "Location",
                    value: "Faridabad, India",
                  },
                  {
                    icon: FaEnvelope,
                    title: "Email",
                    value: "mandeepmalik2003@gmail.com",
                    href: "mailto:mandeepmalik2003@gmail.com",
                  },
                  {
                    icon: FaPhone,
                    title: "Phone",
                    value: "+91 9799804682",
                    href: "tel:+919799804682",
                  },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  const content = (
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-green-400/10 border border-green-400/30">
                        <IconComp className="text-green-400 text-lg" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">{item.title}</p>
                        <p className="text-lg font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:opacity-80 transition-opacity"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-slate-400 mb-4">Follow me on</p>
                <div className="flex gap-4">
                  {[
                    { icon: FaGithub, url: "https://github.com/Mandyyy26" },
                    {
                      icon: FaLinkedin,
                      url: "https://www.linkedin.com/in/mandeep-malik-985151202/",
                    },
                    { icon: FaXTwitter, url: "https://x.com/Mandyyy_yy" },
                  ].map((social, idx) => {
                    const IconComp = social.icon;
                    return (
                      <motion.a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-green-400/20 border border-slate-600 hover:border-green-400 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <IconComp className="text-slate-300 hover:text-green-400" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 space-y-6"
              >
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 focus:border-green-400 focus:ring-1 focus:ring-green-400 text-white placeholder-slate-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 focus:border-green-400 focus:ring-1 focus:ring-green-400 text-white placeholder-slate-500 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 focus:border-green-400 focus:ring-1 focus:ring-green-400 text-white placeholder-slate-500 resize-none transition-all duration-300"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-slate-900 font-bold rounded-lg shadow-lg shadow-green-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>

                {/* Status Messages */}
                {formStatus === "SUCCESS" && (
                  <motion.p
                    className="text-green-400 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Message sent successfully!
                  </motion.p>
                )}
                {formStatus === "ERROR" && (
                  <motion.p
                    className="text-red-400 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ❌ Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>
            © 2025 Mandeep Malik. Built with React, Framer Motion & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
