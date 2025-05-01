"use client";

import React, { useEffect, useState } from "react";

const TypeWriterText = () => {
  const textArray = [
    "ফাস্ট-লোডিং এবং কনভার্শন ফোকাসড ই-কমার্স ওয়েবসাইট",
    "সেল বুস্টিং ল্যান্ডিং পেজ",
    "সুপার ফাস্ট ও SEO ফ্রেন্ডলি ওয়েবসাইট",
  ];
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
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-300 mt-10 mb-4 h-45">
        আমরা তৈরি করি
        <br />
        <span className="text-red-500 mt-12  inline-block border-r-2 border-red-500 pr-2 animate-pulse">
          {textArray[index].substring(0, subIndex)}
        </span>
      </h1>
    </div>
  );
};

export default TypeWriterText;
