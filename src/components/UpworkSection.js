"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Briefcase, CheckCircle, Calendar } from "lucide-react";

const statsData = [
  {
    label: "Hours Worked",
    icon: Clock,
    value: 50000,
    color: "text-green-400",
  },
  {
    label: "Projects Completed",
    icon: Briefcase,
    value: 270,
    color: "text-yellow-300",
  },
  {
    label: "Job Success Rate",
    icon: CheckCircle,
    value: 100,
    suffix: "%",
    color: "text-blue-400",
  },
  {
    label: "Experience",
    icon: Calendar,
    value: 13,
    suffix: "+ Years",
    color: "text-pink-400",
  },
];

export default function UpworkSection() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, i) => {
      const increment = stat.value / 50;
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[i] < stat.value) {
            updated[i] = Math.min(updated[i] + increment, stat.value);
          }
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="relative z-10 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-5 shadow-xl"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Proven on Upwork
          </h2>

          {/* Subheading */}
          <p className="text-gray-300 text-lg max-w-2xl">
            We’ve built long-term trust with global clients through consistent
            quality and delivery on the world’s top freelancing platform.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2  gap-8  w-full">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="p-3 bg-white/10 rounded-full shadow-inner">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div
                    className={`text-3xl sm:text-4xl font-bold ${stat.color}`}
                  >
                    {Math.floor(counts[index])}
                    {stat.suffix && (
                      <span className="text-xl font-medium ml-1">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-300 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <a
            href="https://www.upwork.com/freelancers/your-username" // replace with your actual profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            View Our Upwork Profile
          </a>
        </div>
      </motion.div>
    </div>
  );
}
