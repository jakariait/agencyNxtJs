"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const CallOrWhatsApp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-10">
      {/* Buttons */}
      <div className="flex items-center justify-center relative flex-wrap gap-0">
        {/* Call Now */}
        <a
          href="tel:+8801234567890"
          className="inline-block bg-red-500 hover:bg-red-700 text-white font-semibold px-3 py-3 rounded-l-lg transition duration-300  text-center"
        >
          Call Now
        </a>

        {/* Request Call */}
        <button
          onClick={() => setOpen(true)}
          className="inline-block bg-indigo-600 hover:bg-indigo-800 text-white font-semibold px-3 py-3 transition duration-300  text-center cursor-pointer"
        >
          Request a Callback
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/8801234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-3 py-3 rounded-r-lg transition duration-300 text-center"
        >
          WhatsApp
        </a>
      </div>

      {/* MUI Dialog with HTML Form */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle className="font-bold text-gray-800 text-center">
          Request a Call
        </DialogTitle>
        <DialogContent>
          <form
            className="space-y-4 mt-2"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission here
              setOpen(false);
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
            <select
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            >
              <option value="">Select Service</option>
              <option value="website">Website Development</option>
              <option value="ecommerce">E-commerce</option>
              <option value="marketing">Marketing</option>
            </select>
            <textarea
              placeholder="Your Message"
              rows="3"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            ></textarea>

            <DialogActions className="px-0">
              <Button onClick={() => setOpen(false)} color="inherit">
                Cancel
              </Button>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CallOrWhatsApp;
