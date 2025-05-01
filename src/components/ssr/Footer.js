import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black border-t pb-8 border-red-500 py-1 md:py-10 px-4">
      <div className="text-white md:hidden items-center flex justify-center text-2xl mb-4">
        <h1 className="border-red-500 border-b-2 py-3">Contact Info</h1>
      </div>

      <div className="flex gap-6 xl:container xl:mx-auto justify-center lg:justify-between">
        <div className="text-white flex flex-col items-center justify-center gap-3 ">
          <img
            src="/Topper-IT-Logo-149x74.png"
            alt="Brand Logo"
            className="w-32 mb-5 hidden md:block"
          />
          <p>Pachbag, Gafargaon </p>
          <p>Mymensingh</p>
          <p>Helpline: 01743914693</p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-full p-2"
            >
              <FaFacebookF className="text-red-500 transition" size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-full p-2"
            >
              <FaLinkedinIn className="text-blue-500 transition" size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-full p-2"
            >
              <FaYoutube className="text-red-600 transition" size={24} />
            </a>
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-full p-2"
            >
              <FaWhatsapp className="text-green-500 transition" size={24} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="hidden md:block">
          <h1 className="text-red-500 text-3xl mb-5">Service</h1>
          <ul className="text-gray-100 flex flex-col justify-center gap-3">
            <li>
              <Link href="/public" className="hover:text-red-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/website-development"
                className="hover:text-red-400 transition"
              >
                Website Development
              </Link>
            </li>
            <li>
              <Link
                href="/digital-marketing"
                className="hover:text-red-400 transition"
              >
                Digital Marketing Service
              </Link>
            </li>
            <li>
              <Link
                href="/mobile-app-development"
                className="hover:text-red-400 transition"
              >
                Mobile Apps Development
              </Link>
            </li>
            <li>
              <Link
                href="/domain-hosting"
                className="hover:text-red-400 transition"
              >
                Domain Hosting Service
              </Link>
            </li>
            <li>
              <Link
                href="/graphics-design"
                className="hover:text-red-400 transition"
              >
                Graphics Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="hidden md:block">
          <h1 className="text-red-500 text-3xl mb-5">Quick Link</h1>
          <ul className="text-gray-100 flex flex-col justify-center gap-3">
            <li>
              <Link href="/public" className="hover:text-red-400 transition">
                Facebook Page
              </Link>
            </li>
            <li>
              <Link
                href="/website-development"
                className="hover:text-red-400 transition"
              >
                Chat on Messenger
              </Link>
            </li>
            <li>
              <Link
                href="/digital-marketing"
                className="hover:text-red-400 transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/mobile-app-development"
                className="hover:text-red-400 transition"
              >
                Return Policy
              </Link>
            </li>
            <li>
              <Link
                href="/domain-hosting"
                className="hover:text-red-400 transition"
              >
                Support Policy
              </Link>
            </li>
            <li>
              <Link
                href="/graphics-design"
                className="hover:text-red-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div className="hidden md:block">
          <h1 className="text-red-500 text-3xl mb-5">Important Link</h1>
          <ul className="text-gray-100 flex flex-col justify-center gap-3">
            <li>
              <Link href="/public" className="hover:text-red-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/website-development"
                className="hover:text-red-400 transition"
              >
                Conact
              </Link>
            </li>
            <li>
              <Link
                href="/digital-marketing"
                className="hover:text-red-400 transition"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
