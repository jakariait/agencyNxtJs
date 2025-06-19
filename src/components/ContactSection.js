"use client";
import React from "react";
import FloatingShapes from "@/components/FloatingShapes";

const ContactSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-300 via-blue-300 to-indigo-300 px-4 py-20 overflow-hidden">
      <FloatingShapes />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Let&apos;s Talk About Your Project
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed mb-12">
          Have an idea or project in mind? Let’s connect and bring it to life.
        </p>

        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="col-span-1 sm:col-span-1 px-4 py-3 rounded-lg border border-gray-900 focus:outline-none placeholder:text-black  "
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="col-span-1 sm:col-span-1 px-4 py-3 rounded-lg border border-gray-900 focus:outline-none placeholder:text-black  "
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="col-span-1 sm:col-span-1 px-4 py-3 rounded-lg border border-gray-900 focus:outline-none placeholder:text-black  "
          />
          <select
            required
            className="col-span-1 sm:col-span-1 px-4 py-3 rounded-lg border border-gray-900 focus:outline-none placeholder:text-black  "
          >
            <option value="">Select a Service</option>
            <option value="web">Website Development</option>
            <option value="ecom">E-commerce Store</option>
            <option value="seo">SEO & Marketing</option>
            <option value="design">UI/UX Design</option>
          </select>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-lg border border-gray-900 focus:outline-none placeholder:text-black w-full "
          ></textarea>
          <button
            type="submit"
            className="col-span-1 sm:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
