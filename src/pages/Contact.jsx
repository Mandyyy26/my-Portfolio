import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

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
          setStatus("SUCCESS");
          form.current.reset();
          setTimeout(() => setStatus(null), 4000);
        },
        () => {
          setStatus("ERROR");
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  return (
    <section className="bg-[#0e0e0e] py-20 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
        {/* LEFT SIDE - Info */}
        <motion.div
          className="lg:w-1/2 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
          <p className="text-gray-400">
            Whether you have a question, opportunity, or just want to say hi —
            my inbox is always open!
          </p>

          <ul className="space-y-5 text-gray-300 text-base">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-400" />
              Faridabad, India
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-400" />
              <a
                href="mailto:mandeepmalik2003@gmail.com"
                className="hover:underline"
              >
                mandeepmalik2003@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-400" />
              <a href="tel:+919799804682" className="hover:underline">
                +91 9799804682
              </a>
            </li>
          </ul>
        </motion.div>

        {/* RIGHT SIDE - Form */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-white/5 border border-white/10 backdrop-blur-md text-white p-8 rounded-xl shadow-lg"
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white/20 
                  focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white/20 
                  focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white/20 
                  focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-md 
                hover:bg-green-600 transition"
            >
              Send Message
            </motion.button>

            {/* Status Message */}
            {status === "SUCCESS" && (
              <motion.p
                className="text-green-400 text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
            {status === "ERROR" && (
              <motion.p
                className="text-red-400 text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ❌ Something went wrong. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
