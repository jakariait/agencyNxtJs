"use client";
import React, { useState, useEffect } from "react";
import { Star, ChevronRight } from "lucide-react";
import UpworkSection from "@/components/UpworkSection";
import FloatingShapes from "@/components/FloatingShapes";
import ContactActions from "@/components/ContactActions";
import CallOrWhatsApp from "@/components/ssr/CallOrWhatsApp";

export default function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: "500+", label: "Brands Scaled" },
    { number: "2.5M+", label: "Revenue Generated" },
    { number: "300%", label: "Average ROI" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [stats.length]);


  return (
    <div className="relative  bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      <FloatingShapes />

      <div className="relative z-10 xl:container xl:mx-auto px-4 pt-30 pb-15">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left Content */}
          <div
            className={`lg:w-1/2 text-center lg:text-left transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-purple-200 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              #1 Digital Growth Agency
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We Build &
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Scale
              </span>
              <br />
              Your Brand
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Through cutting-edge{" "}
              <span className="text-purple-400 font-semibold">
                website development
              </span>
              ,
              <span className="text-blue-400 font-semibold">
                {" "}
                e-commerce solutions
              </span>
              , and
              <span className="text-pink-400 font-semibold">
                {" "}
                meta marketing
              </span>{" "}
              that converts.
            </p>

            {/* Animated Stats */}
            <div className="mb-8">
              <div className="text-center lg:text-left">
                <div className="text-5xl font-bold text-white mb-2 transition-all duration-500">
                  {stats[currentStat].number}
                </div>
                <div className="text-purple-300 text-lg">
                  {stats[currentStat].label}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 cursor-pointer">
                <span className="flex items-center">
                  Start Your Project
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 cursor-pointer">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div
            className={`lg:w-1/2 mt-16 lg:mt-0 lg:pl-12 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <UpworkSection />
          </div>
        </div>
        <div className={"mt-10 -mb-5"}>
          <CallOrWhatsApp/>
        </div>

      </div>

    </div>
  );
}