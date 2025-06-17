"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, ShoppingCart, TrendingUp, Target, Star, Users, Award } from 'lucide-react';

export default function AgencyHeroSection() {
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: Code,
      name: "Web Development",
      description: "Custom websites that convert",
      color: "text-blue-400"
    },
    {
      icon: ShoppingCart,
      name: "E-commerce Development",
      description: "Online stores that sell",
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      name: "Landing Pages",
      description: "High-converting pages",
      color: "text-purple-400"
    },
    {
      icon: Target,
      name: "Digital Marketing",
      description: "Growth-driven strategies",
      color: "text-orange-400"
    },
    {
      icon: Users,
      name: "Meta Marketing",
      description: "Social media mastery",
      color: "text-pink-400"
    }
  ];



  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentServiceIcon = services[currentService].icon;

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-white font-medium">Premium Digital Agency</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                We craft exceptional digital experiences that drive growth, boost conversions, and elevate your brand to new heights.
              </p>
            </div>

            {/* Rotating Services */}
            <div className="h-20 flex items-center">
              <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className={`p-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 transform transition-all duration-500 ${services[currentService].color}`}>
                  <CurrentServiceIcon className="w-6 h-6" />
                </div>
                <div className="transform transition-all duration-500">
                  <h3 className="text-white font-semibold text-lg">{services[currentService].name}</h3>
                  <p className="text-gray-400 text-sm">{services[currentService].description}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
                <span className="flex items-center">
                  Start Your Project
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                View Our Work
              </button>
            </div>


          </div>

          {/* Right Content - Interactive Service Cards */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Featured Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Our Services</h3>
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>

                <div className="space-y-4">
                  {services.map((service, index) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-500 cursor-pointer ${
                          index === currentService
                            ? 'bg-white/10 border border-white/20 transform scale-105'
                            : 'hover:bg-white/5'
                        }`}
                        onClick={() => setCurrentService(index)}
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 ${service.color}`}>
                          <ServiceIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{service.name}</h4>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating Action Card */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-6 shadow-2xl animate-bounce-slow">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-sm">Consultation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
        
        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
}