import React from "react";
import TypeWriterText from "@/components/csr/TypeWriterText";
import CallOrWhatsApp from "@/components/ssr/CallOrWhatsApp";

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
        <CallOrWhatsApp/>
      </div>
    </section>
  );
};

export default Hero;
