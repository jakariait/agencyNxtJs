"use client";

import React, { useEffect, useState } from "react";

const TypeWriterText = () => {
  const textArray = [
    "Fast-loading and conversion-focused eCommerce websites",
    "Sales-boosting landing pages",
    "Super-fast and SEO-friendly websites",
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
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-300 mt-10 mb-4 h-45">
        We build
        <br />
        <span className="text-red-500 inline-block border-r-2 border-red-500 pr-2 animate-pulse">
          {textArray[index].substring(0, subIndex)}
        </span>
      </h1>

    </div>
  );
};

export default TypeWriterText;
