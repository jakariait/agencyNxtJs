"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FloatingShapes from "@/components/FloatingShapes";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-indigo-950 pt-10 pb-5 px-4 text-white">
      {/* Floating shapes (background layer) */}
      <div className="absolute inset-0 z-0">
        <FloatingShapes />
      </div>

      <div className="xl:container xl:mx-auto grid grid-cols-1 md:grid-cols-13 items-center justify-between gap-10 relative z-10">
        {/* Logo + About */}
        <div className="col-span-4 text-center md:text-left">
          <Link href="/">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image
                src="/Topper-IT-Logo-149x74.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-bold text-white">WebNinja</span>
            </div>
          </Link>
          <p className="mt-4 text-sm text-gray-300">
            We craft stunning, scalable websites and digital solutions that help
            businesses grow and thrive online.
          </p>
        </div>

        {/* Quick Links + Services */}
        <div className="col-span-6 grid grid-cols-2 text-center md:text-left">
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-blue-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-300 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-blue-300 transition">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  href="#clients"
                  className="hover:text-blue-300 transition"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300 transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>Website Development</li>
              <li>E-commerce Solutions</li>
              <li>SEO & Marketing</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm text-gray-300 flex flex-col gap-2">
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <FaPhoneAlt size={14} /> +880 1234-567890
            </span>
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <FaEnvelope size={14} /> info@webninja.com
            </span>
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <FaMapMarkerAlt size={14} /> Dhaka, Bangladesh
            </span>
          </p>

          <div className="mt-4 flex gap-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:text-[#4a8dfc] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:text-[#3d7cc9] transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#5de287] transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-400 relative z-10">
        © {new Date().getFullYear()} WebNinja. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
