"use client";

import React from "react";
import {
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Loader,
  TrendingUp,
  Search,
} from "lucide-react";

const EcommerceFeatures = () => {
  return (
    <section className="bg-black py-16 border-t border-red-500">
      <div className="xl:container xl:mx-auto px-4 text-center flex flex-col items-center justify-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          আমাদের ই-কমার্স সাইটের ফিচারসমূহ
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          পারফরম্যান্স, ইউজার এক্সপেরিয়েন্স আর কনভার্শনে আমরা সিরিয়াস।
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 items-stretch">
          {[
            {
              icon: <Rocket className="text-red-500 mb-4" size={40} />,
              title: "আলট্রা ফাস্ট লোডিং",
              desc: "ওয়েবসাইট হবে সুপার ফাস্ট — যেন কাস্টমার কোনো সময়ই ওয়েট না করে।",
            },
            {
              icon: <ShoppingCart className="text-red-500 mb-4" size={40} />,
              title: "সহজ অর্ডার প্রসেস",
              desc: "কাস্টমার মাত্র ২-৩ ক্লিকে প্রোডাক্ট অর্ডার করতে পারবে, কোনো ঝামেলা ছাড়াই।",
            },
            {
              icon: <ShieldCheck className="text-red-500 mb-4" size={40} />,
              title: "সিকিউরিটি ও বিশ্বাসযোগ্যতা",
              desc: "SSL, Trust Badge, এবং কাস্টমার রিভিউ – সবকিছু থাকবে ট্রাস্ট বিল্ড করার জন্য।",
            },
            {
              icon: <Loader className="text-red-500 mb-4" size={40} />,
              title: "মোবাইল অপ্টিমাইজড",
              desc: "মোবাইল, ট্যাব, কম্পিউটার – সব ডিভাইসে একই রকম সুন্দর এবং ফ্লুয়েন্ট এক্সপেরিয়েন্স।",
            },
            {
              icon: <TrendingUp className="text-red-500 mb-4" size={40} />,
              title: "কনভার্শন ফোকাসড ডিজাইন",
              desc: "ডিসকাউন্ট ব্যানার, রিভিউ, Call-to-Action – সবকিছু থাকবে বিক্রি বাড়ানোর জন্য।",
            },
            {
              icon: <Search className="text-red-500 mb-4" size={40} />,
              title: "SEO ফ্রেন্ডলি স্ট্রাকচার",
              desc: "গুগলে র‍্যাঙ্ক করার জন্য প্রয়োজনীয় ট্যাগ, স্পিড, আর ক্লিন কোড সবই থাকবে।",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-2 md:p-6 rounded-xl bg-gray-900 border border-gray-800 shadow hover:shadow-xl transition flex flex-col items-center text-center h-full"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceFeatures;
