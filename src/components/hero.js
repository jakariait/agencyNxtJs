"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const textArray = [
    "ফাস্ট-লোডিং এবং কনভার্শন ফোকাসড ই-কমার্স ওয়েবসাইট",
    "সেল বুস্টিং ল্যান্ডিং পেজ",
    "সুপার ফাস্ট ও SEO ফ্রেন্ডলি ওয়েবসাইট",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === textArray.length) return;

    if (subIndex === textArray[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % textArray.length);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
      },
      deleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section className="bg-black py-10">
      <div className="xl:container xl:mx-auto px-4 text-center ">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-200 mb-4 h-45">
          আমরা তৈরি করি
          <br />
          <span className="text-red-500 mt-12  inline-block border-r-2 border-red-500 pr-2 animate-pulse">
            {textArray[index].substring(0, subIndex)}
          </span>
        </h1>

        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-lg font-semibold md:text-3xl mt-4 mb-8">
          ওয়েবসাইট যা দেখতে সুন্দর, ইউজ করতে সহজ আর সবচেয়ে বড় কথা – বিক্রি
          বাড়ায়। ফাস্ট লোডিং, SEO ফ্রেন্ডলি, আর ফাংশনাল ডিজাইনে আমরা পারদর্শী।
        </h1>
        <div className={"flex items-center justify-center relative"}>
          <a
            href="tel:+8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-l-lg transition duration-300 w-36"
          >
            কথা বলুন
          </a>
          <div className="text-white absolute bg-black px-1 right-[538px] py-1 rounded-full border-3  border-white z-50">
            OR
          </div>
          <a
            href="https://wa.me/8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-800 text-white font-semibold px-6  py-3 rounded-r-lg transition duration-300 w-36"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
