"use client";
import React from "react";
import { Globe, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import FloatingShapes from "@/components/FloatingShapes";
import CallOrWhatsApp from "@/components/CallOrWhatsApp";

const ServiceSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      desc: "We design and develop responsive, SEO-friendly websites that load fast and convert visitors into customers.",
      href: "/services/website-development",
      features: [
        "Fast loading",
        "Mobile responsive",
        "SEO optimized",
        "Custom design",
        "Analytics integration",
      ],
    },
    {
      icon: TrendingUp,
      title: "E-commerce Solutions",
      desc: "From product listings to secure checkout, we build scalable online stores that drive sales and grow with your business.",
      href: "/services/ecommerce-solutions",
      features: [
        "Secure checkout",
        "Scalable platform",
        "Product management",
        "Mobile optimized",
        "Payment gateway integration",
      ],
    },
    {
      icon: Users,
      title: "Digital Marketing",
      desc: "Using targeted ads, SEO, and analytics, we help you reach the right people with the right message at the right time.",
      href: "/services/digital-marketing",
      features: [
        "Targeted ads",
        "SEO strategies",
        "Analytics & reports",
        "Social media growth",
        "Conversion tracking",
      ],
    },
    {
      icon: Zap,
      title: "Meta Marketing",
      desc: "Certified experts in Facebook & Instagram Ads. We optimize ad performance to deliver measurable ROI.",
      href: "/services/meta-marketing",
      features: [
        "Certified experts",
        "ROI optimization",
        "Ad performance tracking",
        "Audience targeting",
        "Budget management",
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-300 via-blue-300 to-indigo-300 px-2 overflow-hidden py-20">
      {/* Floating geometric shapes */}
      <FloatingShapes />


      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 relative inline-block">
          Our Core Services
          <span className="block h-1 w-24 bg-indigo-600 rounded mt-2 mx-auto"></span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed tracking-wide">
          From building stunning websites to executing data-driven marketing
          campaigns — we offer everything you need to grow online.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white group rounded-2xl shadow-md p-6 text-center transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 animate-fadeInUp"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: "forwards",
            }}
          >
            <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <service.icon className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-yellow-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {service.desc}
            </p>

            {/* Feature Highlights */}
            <ul className="text-sm text-gray-500 list-disc list-inside space-y-1 text-left max-w-xs mx-auto">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Link
              href={service.href}
              className="btn-indigo"
            >
              Visit Service Page
            </Link>
          </div>

        ))}

      </div>
      <div className={"mt-10 -mb-10"}>
        <CallOrWhatsApp/>
      </div>
      {/* Custom animation styles */}
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

        /* Animation delay utilities for blobs and shapes */
        .animation-delay-0 {
          animation-delay: 0ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .animation-delay-3000 {
          animation-delay: 3000ms;
        }
        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
      `}</style>
    </section>
  );
};

export default ServiceSection;