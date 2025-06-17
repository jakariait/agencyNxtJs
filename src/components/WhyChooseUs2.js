"use client";
import React from "react";
import { ShieldCheck, Sparkles, Headphones, TrendingUp } from "lucide-react";

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Proven Expertise",
    desc: "Years of experience delivering results-driven websites and marketing solutions.",
  },
  {
    icon: Sparkles,
    title: "Creative Excellence",
    desc: "We blend strategy with stunning design for memorable digital experiences.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Friendly, responsive support that’s with you every step of the way.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    desc: "Everything we do is aimed at helping your business grow online.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-6xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We’re more than just a service provider — we’re your long-term digital growth partner.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {whyUs.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-1 opacity-0 animate-fadeInUp"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: "forwards",
            }}
          >
            <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-indigo-600 text-white shadow-md">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-duration: 600ms;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
