import React from "react";
import TypeWriterText from "@/components/csr/TypeWriterText";

const Hero = () => {
  return (
    <section className="bg-black border-t border-red-500 py-10">
      <div className="xl:container xl:mx-auto px-4 text-center ">
        {/*TypeWriter Text Field*/}
        <TypeWriterText />
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
          {/* OR Section */}
          <div className="text-white absolute bg-black px-1 py-1 rounded-full border-3 border-white z-50  flex items-center justify-center">
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
