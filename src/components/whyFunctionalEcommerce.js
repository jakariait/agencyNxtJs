// "use client";

import React from "react";
import { Smile, Smartphone, TrendingUp,Zap } from "lucide-react";

const features = [
  {
    icon: Smile,
    title: "ইউজার ফ্রেন্ডলি",
    description:
      "ভিজিটর যেন খুব সহজেই পছন্দের প্রোডাক্ট খুঁজে পায় এবং অর্ডার করতে পারে — এটিই মূল লক্ষ্য।",
  },
  {
    icon: Smartphone,
    title: "মোবাইল অপ্টিমাইজড",
    description:
      "আজকের অধিকাংশ কাস্টমার মোবাইল থেকেই কেনাকাটা করে। তাই মোবাইল ফার্স্ট ডিজাইন অপরিহার্য।",
  },
  {
    icon: Zap,
    title: "লোডিং স্পিড = কনভার্শন",
    description:
      "গুগল রিপোর্ট অনুযায়ী ৩ সেকেন্ডের বেশি লোড টাইম হলে ৫০% ইউজার সাইট ছাড়ে। তাই দ্রুতগতি মানেই বেশি বিক্রি।",
  },
  {
    icon: TrendingUp,
    title: "কনভার্শন ফোকাসড",
    description:
      "ডিসকাউন্ট, ট্রাস্ট ব্যাজ, এবং সিম্পল চেকআউট — এসব কিছুই বিক্রি বাড়াতে সহায়তা করে।",
  },
];

const WhyFunctionalEcommerce = () => {
  return (
    <section className="bg-black  py-16 border-t border-red-500">
      <div className="xl:container xl:mx-auto px-4 text-center flex flex-col items-center justify-center ">
        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-lg font-semibold md:text-3xl mt-4 mb-8">
          কেন ফাংশনাল ই-কমার্স ওয়েবসাইট এখন সময়ের দাবি?
        </h1>

        <h1 className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 inline-block text-transparent bg-clip-text text-lg font-semibold md:text-xl mt-4 mb-8">
          আপনার ই-কমার্স ওয়েবসাইট হতে হবে এমন যা
          দ্রুত লোড হয়, সহজে নেভিগেট করা যায়, দেখতে আকর্ষনীয়  এবং কাস্টমারকে অর্ডার করতে আগ্রহী
          করে তোলে।
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 justify-center items-stretch">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:shadow-xl transition h-full flex flex-col items-center"
              >
                <Icon className="text-lime-400 mb-4" size={32} />
                <h3 className="text-lg md:text-xl font-semibold text-lime-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mt-auto">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyFunctionalEcommerce;
