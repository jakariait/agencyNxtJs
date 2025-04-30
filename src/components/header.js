"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50">
      <nav className="xl:container xl:mx-auto px-3 py-2 flex items-center justify-between relative">
        {/* Logo */}
        <div className="w-22 z-50">
          <Link href="/">
            <Image
              src="/Topper-IT-Logo-149x74.png"
              alt="MySite Logo"
              width={128}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Hamburger Icon (mobile) */}
        <button
          className="md:hidden text-red-500 z-50 cursor-pointer  border-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={38} /> : <Menu size={38} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="md:flex items-center justify-end gap-6 font-bold hidden ">
          {navItems()}
        </ul>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden fixed top-14 right-0 w-full  bg-gray-50 z-40 transform transition-transform duration-300 ease-in-out px-6 py-8 flex flex-col items-start gap-4 font-bold text-black ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems(true)}
        </ul>
      </nav>
    </header>
  );
};

// Nav Items Renderer
const navItems = (isMobile = false) => {
  const baseLinkClass = "relative group ";
  const underlineClass =
    "absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full";

  const links = [
    { name: "হোম", href: "/" },
    { name: "ই-কমার্স ওয়েবসাইট", href: "/" },
    { name: "ল্যান্ডিং পেজ", href: "/" },
    { name: "প্রাইসিং", href: "/" },
    { name: "আমাদের সম্পর্কে", href: "/" },
    { name: "যোগাযোগ", href: "/" },
    { name: "ব্লগ", href: "/" },
  ];

  return (
    <>
      {links.map((link, i) => (
        <li className={baseLinkClass} key={i}>
          <Link href={link.href}>{link.name}</Link>
          <span className={underlineClass}></span>
        </li>
      ))}
      <li className={`${baseLinkClass}`}>
        <a
          href="https://wa.me/8801234567890"
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            isMobile ? "text-green-600" : "text-green-600"
          } flex items-center justify-center gap-2 font-medium`}
        >
          WhatsApp
        </a>
        <span className={underlineClass}></span>
      </li>
    </>
  );
};

export default Header;
