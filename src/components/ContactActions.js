"use client";
import React, { useState } from "react";

const ContactActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Need to talk with us?</h2>
      <p className="text-gray-600 mb-8">
        We’re here to answer your questions and help your business grow.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button
          onClick={toggleDialog}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
        >
          📞 Request a Call
        </button>

        <a
          href="https://wa.me/8801307217573"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition inline-flex items-center justify-center"
        >
          💬 WhatsApp Message
        </a>
      </div>

      {/* Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={toggleDialog}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
            >
              &times;
            </button>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Request a Call</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>Select Service</option>
                <option>Website Development</option>
                <option>E-commerce Solutions</option>
                <option>Digital Marketing</option>
                <option>Meta Ads</option>
              </select>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                rows="4"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactActions;
