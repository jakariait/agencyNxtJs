"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import ContactForm from "@/components/ContactForm";

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
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#1e1b4b", // same as bg-indigo-950
            maxWidth: "600px",          // same as max-w-2xl
            width: "100%",
            borderRadius: 2,
            mx: "auto",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            backgroundColor: "#1e1b4b",
          }}
        >
          Request a Call
        </DialogTitle>

        <DialogContent sx={{ backgroundColor: "#1e1b4b", p: 0 }}>
          <ContactForm />
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default CallOrWhatsApp;
