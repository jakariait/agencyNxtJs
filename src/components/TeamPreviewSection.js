"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingShapes from "@/components/FloatingShapes";
import CallOrWhatsApp from "@/components/CallOrWhatsApp";

const teamMembers = [
  {
    name: "Jakaria Rahman",
    role: "Founder & CEO",
    image: "/jakaria.jpeg",
    bio: "Visionary leader passionate about digital transformation and client growth.",
  },
  {
    name: "Ridwan H. Rifat",
    role: "Creative Director",
    image: "/hero-img.jpeg",
    bio: "Expert in UI/UX design and brand storytelling. Turns ideas into experiences.",
  },
];

const TeamPreviewSection = () => {
  return (
    <section
      id="team"
      className="relative bg-indigo-900  py-20 px-4"
    >
      <FloatingShapes />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet the Team
          <span className="block h-1 w-24 bg-indigo-400 rounded mt-2 mx-auto"></span>
        </motion.h2>

        <p className="text-gray-200 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed mb-12">
          We’re a team of passionate developers, designers, and marketers
          dedicated to helping brands thrive online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg transition duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center text-white">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-indigo-300 mb-2">{member.role}</p>
                <p className="text-sm text-gray-200">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Us Button */}
        <Link
          href="/about"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-3 rounded-full shadow-md transition"
        >
          Learn more about us
        </Link>
        <div className={"mt-10 -mb-10"}>
          <CallOrWhatsApp/>
        </div>
      </div>
    </section>
  );
};

export default TeamPreviewSection;
