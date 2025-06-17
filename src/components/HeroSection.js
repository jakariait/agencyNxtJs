"use client"
import { useState, useEffect } from 'react';
import { ArrowRight, Zap, TrendingUp, Globe, Users, Star, Play } from 'lucide-react';

export default function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: "500+", label: "Brands Scaled" },
    { number: "2.5M+", label: "Revenue Generated" },
    { number: "300%", label: "Average ROI" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const services = [
    { icon: Globe, title: "Website Development", desc: "Custom, high-converting websites" },
    { icon: TrendingUp, title: "E-commerce Solutions", desc: "Scalable online stores that sell" },
    { icon: Users, title: "Digital Marketing", desc: "Data-driven growth strategies" },
    { icon: Zap, title: "Meta Marketing", desc: "Facebook & Instagram mastery" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-300/30 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/5 w-8 h-8 bg-blue-300/20 rotate-12 animate-bounce animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-indigo-300/40 animate-bounce animation-delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left Content */}
          <div className={`lg:w-1/2 text-center lg:text-left transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-purple-200 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              #1 Digital Growth Agency
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We Build &
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Scale</span>
              <br />
              Your Brand
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Through cutting-edge <span className="text-purple-400 font-semibold">website development</span>,
              <span className="text-blue-400 font-semibold"> e-commerce solutions</span>, and
              <span className="text-pink-400 font-semibold"> meta marketing</span> that converts.
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Success Stories
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full border-2 border-white"></div>
                </div>
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className={`lg:w-1/2 mt-16 lg:mt-0 lg:pl-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating CTA Card */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to 10X Your Business?</h3>
              <p className="text-gray-300 mb-4">Get a free strategy session worth $500</p>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Claim Your Free Session
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}