"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FloatingShapes from "@/components/FloatingShapes";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 py-20 px-4"
    >
      <FloatingShapes />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Have a project in mind?
        </motion.h2>

        <p className="text-gray-200 max-w-2xl mx-auto text-lg sm:text-xl mb-10">
          Want to audit your marketing funnel or build a high-performing website?
          Let’s talk strategy, design, and results — tailored for your business.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/8801307217573"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
          >
            📞 Book a Free Call on WhatsApp
          </a>

          <Link
            href="/request-callback"
            className="inline-block border border-white text-white hover:bg-white hover:text-indigo-800 font-semibold px-6 py-3 rounded-full shadow-lg transition"
          >
            📩 Request a Callback
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
