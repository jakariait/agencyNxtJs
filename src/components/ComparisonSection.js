"use client";
import React from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import FloatingShapes from "@/components/FloatingShapes";
import { motion } from "framer-motion";
import WhyChooseUs2 from "@/components/WhyChooseUs";

const listVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};


export default function ComparisonSection() {
  const otherAgencyPoints = [
    "Poor Collaboration",
    "No Support After Delivery",
    "Generic, Template-Based Solutions",
    "Slow, Unstructured Process",
    "Limited Understanding of Your Business",
  ];

  const quixtaPoints = [
    "Quick & Clear Communication",
    "Free Post-Launch Maintenance",
    "Custom-Built Digital Solutions",
    "Transparent Process & Timelines",
    "Deep Industry, Brand and UX Research",
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <FloatingShapes />
      <WhyChooseUs2/>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Why Would You Want to{" "}
          <span className="text-pink-400">Settle for Less?</span>
        </h2>
        <p className="text-lg text-purple-200 mb-14">
          Compare the experience — and see why businesses choose{" "}
          <span className="text-white font-semibold">Quixta</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Other Agencies */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-red-300/20">
            <div className="flex items-center mb-5">
              <ThumbsDown className="w-7 h-7 text-red-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">
                Other Agencies
              </h3>
            </div>
            <ul className="space-y-4 mt-4">
              {otherAgencyPoints.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="text-red-100 border-l-4 border-red-500 pl-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={idx}
                  variants={listVariants}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quixta */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-green-300/20">
            <div className="flex items-center mb-5">
              <ThumbsUp className="w-7 h-7 text-green-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Quixta</h3>
            </div>
            <ul className="space-y-4 mt-4">
              {quixtaPoints.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="text-green-100 border-l-4 border-green-400 pl-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={idx}
                  variants={listVariants}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}