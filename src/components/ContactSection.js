"use client";
import React from "react";
import { motion } from "framer-motion";
import FloatingShapes from "@/components/FloatingShapes";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactSection = () => {
  return (
    <section className="relative  px-4 py-20 overflow-hidden">
      <FloatingShapes />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          variants={fadeInUp}
          custom={0}
        >
          Let&apos;s Talk About Your Project
          <span className="block h-1 w-24 bg-indigo-600 rounded mt-2 mx-auto"></span>
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed mb-12"
          variants={fadeInUp}
          custom={1}
        >
          Have an idea or project in mind? Let’s connect and bring it to life.
        </motion.p>

        <motion.form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
          variants={fadeInUp}
          custom={2}
        >
          {[
            { type: "text", placeholder: "Your Name", required: true },
            { type: "email", placeholder: "Your Email", required: true },
            { type: "tel", placeholder: "Phone Number", required: false },
          ].map(({ type, placeholder, required }, idx) => (
            <motion.input
              key={idx}
              type={type}
              placeholder={placeholder}
              required={required}
              className="col-span-1 px-4 py-3 rounded-lg border border-white bg-transparent text-white placeholder:text-gray-300 focus:outline-none"
              variants={fadeInUp}
              custom={3 + idx}
            />
          ))}

          <motion.select
            required
            className="col-span-1 px-4 py-3 rounded-lg border border-white bg-transparent text-white placeholder:text-gray-300 focus:outline-none"
            variants={fadeInUp}
            custom={6}
            defaultValue=""
          >
            <option value="" className="text-black">
              Select a Service
            </option>
            <option value="web-development" className="text-black">
              Website Development
            </option>
            <option value="ecommerce-solutions" className="text-black">
              E-Commerce Solutions
            </option>
            <option value="digital-marketing" className="text-black">
              Digital Marketing
            </option>
            <option value="meta-marketing" className="text-black">
              Meta Marketing
            </option>
            <option value="other" className="text-black">
              Other
            </option>
          </motion.select>

          <motion.textarea
            placeholder="Your Message"
            rows="4"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-lg border border-white bg-transparent text-white placeholder:text-gray-300 w-full focus:outline-none"
            variants={fadeInUp}
            custom={7}
          />

          <motion.button
            type="submit"
            className="col-span-1 sm:col-span-2 btn-indigo"
            variants={fadeInUp}
            custom={8}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
