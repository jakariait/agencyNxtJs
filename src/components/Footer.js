"use client";

import React from "react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black border-t pb-8 border-red-500 py-1 md:py-10 px-4">
      <div
        className={
          "text-white md:hidden items-center flex justify-center text-2xl mb-4 "
        }
      >
        <h1 className={"border-red-500 border-b-2 py-3"}>Contact Info</h1>
      </div>

      <div
        className={
          "flex gap-6 xl:container xl:mx-auto justify-center md:justify-between "
        }
      >
        <div
          className={
            "text-white  flex flex-col items-center justify-center gap-6 md:gap-3"
          }
        >
          <img
            src="/Topper-IT-Logo-149x74.png"
            alt="Brand Logo"
            className="w-32 mb-5 hidden md:block"
          />
          <p>Pachbag, Gafargaon, Myemensing</p>
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
        <div className={"hidden md:block"}>
          <h1 className="text-red-500 text-3xl mb-5">Service</h1>
          <ul className="text-gray-100 flex flex-col justify-center gap-3">
            <li>
              <a href="/" className="hover:text-red-400 transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="/website-development"
                className="hover:text-red-400 transition"
              >
                Website Development
              </a>
            </li>
            <li>
              <a
                href="/digital-marketing"
                className="hover:text-red-400 transition"
              >
                Digital Marketing Service
              </a>
            </li>
            <li>
              <a
                href="/mobile-app-development"
                className="hover:text-red-400 transition"
              >
                Mobile Apps Development
              </a>
            </li>
            <li>
              <a
                href="/domain-hosting"
                className="hover:text-red-400 transition"
              >
                Domain Hosting Service
              </a>
            </li>
            <li>
              <a
                href="/graphics-design"
                className="hover:text-red-400 transition"
              >
                Graphics Design
              </a>
            </li>
          </ul>
        </div>
        <div className={"hidden md:block"}>
          <h1 className="text-red-500 text-3xl mb-5">Quick Link</h1>
          <ul className="text-gray-100 flex flex-col justify-center gap-3">
            <li>
              <a href="/" className="hover:text-red-400 transition">
                Facebook Page
              </a>
            </li>
            <li>
              <a
                href="/website-development"
                className="hover:text-red-400 transition"
              >
                Chat on Messenger
              </a>
            </li>
            <li>
              <a
                href="/digital-marketing"
                className="hover:text-red-400 transition"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/mobile-app-development"
                className="hover:text-red-400 transition"
              >
                Return Policy
              </a>
            </li>
            <li>
              <a
                href="/domain-hosting"
                className="hover:text-red-400 transition"
              >
                Support Policy
              </a>
            </li>
            <li>
              <a
                href="/graphics-design"
                className="hover:text-red-400 transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className={"hidden md:block"}>
          <h1 className="text-red-500 text-3xl mb-5">Important Link</h1>
          <ul className="text-gray-100 flex flex-col justify-center gap-3">
            <li>
              <a href="/" className="hover:text-red-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/website-development"
                className="hover:text-red-400 transition"
              >
                Conact
              </a>
            </li>
            <li>
              <a
                href="/digital-marketing"
                className="hover:text-red-400 transition"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
