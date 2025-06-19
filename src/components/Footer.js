"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FloatingShapes from "@/components/FloatingShapes";

const Footer = () => {
  return (
    <footer className="relative bg-indigo-900 pt-10 pb-5 px-4 text-white">

      {/* Floating shapes (background layer) */}
      <div className="absolute inset-0 z-0">
        <FloatingShapes />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo + About */}
        <div>
          <Link href="/frontend/public">
            <div className="flex items-center gap-3">
              <Image src="/Topper-IT-Logo-149x74.png" alt="Logo" width={40} height={40} />
              <span className="text-2xl font-bold text-white">WebNinja</span>
            </div>
          </Link>
          <p className="mt-4 text-sm text-gray-300">
            We craft stunning, scalable websites and digital solutions that help
            businesses grow and thrive online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/frontend/public">Home</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#team">Meet the Team</Link>
            </li>
            <li>
              <Link href="#clients">Clients</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2  text-gray-300">
            <li>Website Development</li>
            <li>E-commerce Solutions</li>
            <li>SEO & Marketing</li>
            <li>UI/UX Design</li>
            <li>Mobile Apps</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-300">
            📞 +880 1234-567890 <br />
            📧 info@webninja.com <br />
            🏢 Dhaka, Bangladesh
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
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
