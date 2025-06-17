"use client"

import React, { useState } from 'react';
import { Code, ShoppingCart, TrendingUp, Target, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code,
      name: "Web Development",
      description: "Custom websites that convert visitors into customers",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: ShoppingCart,
      name: "E-commerce Development",
      description: "Powerful online stores that drive sales and growth",
      features: ["Payment Integration", "Inventory Management", "Mobile Optimized", "Analytics"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: TrendingUp,
      name: "Landing Pages",
      description: "High-converting pages that maximize your ROI",
      features: ["A/B Testing", "Conversion Tracking", "Lead Generation", "Fast Loading"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Target,
      name: "Digital Marketing",
      description: "Strategic campaigns that boost your online presence",
      features: ["SEO & SEM", "Content Strategy", "Email Marketing", "Analytics"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: Users,
      name: "Meta Marketing",
      description: "Social media strategies that engage and convert",
      features: ["Facebook Ads", "Instagram Marketing", "Community Building", "Brand Awareness"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Services That Drive
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating digital solutions that not only look amazing but deliver measurable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Service Cards */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? `${service.bgColor} ${service.borderColor} transform scale-105 shadow-xl`
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}>
                      <ServiceIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Service Details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${services[activeService].color} shadow-lg mb-4`}>
                  {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {services[activeService].name}
                </h3>
                <p className="text-gray-600 text-lg">
                  {services[activeService].description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                <div className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <button className={`w-full py-4 px-6 bg-gradient-to-r ${services[activeService].color} text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  Get Started Today
                </button>
                <button className="w-full py-4 px-6 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}