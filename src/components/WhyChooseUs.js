"use client"
import React, { useState, useEffect } from 'react';
import {
  Shield,
  Zap,
  Trophy,
  Users,
  Target,
  Clock,
  TrendingUp,
  CheckCircle,
  Star,
  Quote,
  ArrowRight,
  Award,
  Lightbulb,
  Rocket,
  Heart
} from 'lucide-react';

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    growth: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  const tabs = [
    {
      id: 'results',
      title: 'Proven Results',
      icon: TrendingUp,
      content: {
        title: 'Data-Driven Success Stories',
        description: 'Our strategies have generated over $2.5M in revenue for clients across 15+ industries.',
        features: [
          'Average 300% ROI within 6 months',
          '95% client retention rate',
          '2x faster project delivery',
          'Real-time performance tracking'
        ]
      }
    },
    {
      id: 'expertise',
      title: 'Expert Team',
      icon: Award,
      content: {
        title: 'Industry-Leading Professionals',
        description: 'Certified experts in Meta advertising, web development, and growth marketing.',
        features: [
          'Meta Blueprint certified specialists',
          'Google Analytics & Ads experts',
          'Full-stack development team',
          'Continuous skill development'
        ]
      }
    },
    {
      id: 'approach',
      title: 'Unique Approach',
      icon: Lightbulb,
      content: {
        title: 'Custom Growth Strategies',
        description: 'No cookie-cutter solutions. Every strategy is tailored to your specific goals.',
        features: [
          'In-depth market analysis',
          'Competitor research & insights',
          'Custom funnel development',
          'A/B tested campaigns'
        ]
      }
    },
    {
      id: 'support',
      title: '24/7 Support',
      icon: Heart,
      content: {
        title: 'Always Here When You Need Us',
        description: 'Dedicated account managers and round-the-clock support for all clients.',
        features: [
          'Dedicated account manager',
          '24/7 technical support',
          'Weekly performance calls',
          'Priority issue resolution'
        ]
      }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      image: "SC",
      rating: 5,
      text: "They transformed our online presence completely. Our revenue increased by 400% in just 4 months!",
      results: "+400% Revenue"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, EcoShop",
      image: "MR",
      rating: 5,
      text: "Best investment we've made. Their Meta marketing strategy brought us 1000+ qualified leads monthly.",
      results: "1000+ Leads/Month"
    },
    {
      name: "Emily Watson",
      role: "CMO, HealthPlus",
      image: "EW",
      rating: 5,
      text: "Professional, results-driven, and always available. They're true partners in our growth journey.",
      results: "+250% Conversions"
    }
  ];

  const achievements = [
    { icon: Trophy, number: 50, suffix: '+', label: 'Industry Awards' },
    { icon: Users, number: 500, suffix: '+', label: 'Happy Clients' },
    { icon: Target, number: 98, suffix: '%', label: 'Success Rate' },
    { icon: Rocket, number: 2.5, suffix: 'M+', label: 'Revenue Generated' }
  ];

  useEffect(() => {
    setIsVisible(true);

    // Animate counters
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    const targets = {
      experience: 7,
      projects: 500,
      clients: 150,
      growth: 300
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        experience: Math.min(Math.floor((targets.experience * step) / steps), targets.experience),
        projects: Math.min(Math.floor((targets.projects * step) / steps), targets.projects),
        clients: Math.min(Math.floor((targets.clients * step) / steps), targets.clients),
        growth: Math.min(Math.floor((targets.growth * step) / steps), targets.growth)
      });

      if (step >= steps) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            <Shield className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Partner You Can
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Trust</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            We don't just deliver projects – we deliver results that transform businesses.
            Here's what makes us different from the rest.
          </p>
        </div>

        {/* Stats Counter */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {index === 0 ? counters.experience :
                  index === 1 ? counters.projects :
                    index === 2 ? counters.clients : counters.growth}
                <span className="text-purple-600">{achievement.suffix}</span>
              </div>
              <div className="text-gray-600 font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Interactive Tabs */}
        <div className={`max-w-6xl mx-auto mb-20 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-2xl p-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {tabs[activeTab].content.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {tabs[activeTab].content.description}
                </p>
                <div className="space-y-4">
                  {tabs[activeTab].content.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
                  <div className="mb-6">
                    {React.createElement(tabs[activeTab].icon, { className: "w-16 h-16 text-white/80" })}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h4>
                  <p className="mb-6 text-white/90">
                    Join hundreds of successful businesses who've transformed their growth with our proven strategies.
                  </p>
                  <button className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className={`transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-lg text-gray-600">
              Don't just take our word for it – hear from businesses we've helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <Quote className="w-8 h-8 text-purple-300 mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{testimonial.results}</div>
                    <div className="text-xs text-gray-500">Result</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with our proven strategies and expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}