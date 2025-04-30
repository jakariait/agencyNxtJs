"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const textArray = [
    "এক্সপার্ট ই-কমার্স ওয়েবসাইট ডেভেলপার টিম",
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

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section className="bg-lime-50 py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          আমরা তৈরি করি
          <br />
          <span className="text-red-500 mt-12  inline-block border-r-2 border-red-500 pr-2 animate-pulse">
            {textArray[index].substring(0, subIndex)}
          </span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mt-4 mb-8">
          ওয়েবসাইট যেটা দেখতে সুন্দর, ইউজ করতে সহজ আর সবচেয়ে বড় কথা – বিক্রি বাড়ায়।
          ফাস্ট লোডিং, SEO ফ্রেন্ডলি, আর ফাংশনাল ডিজাইনে আমরা পারদর্শী।
        </p>
        <a
          href="https://wa.me/8801234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
        >
          এখনই কথা বলুন
        </a>
      </div>
    </section>
  );
};

export default Hero;
