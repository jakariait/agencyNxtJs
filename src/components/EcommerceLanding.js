"use client"
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Shield, Truck, Star, Code, Database, Server, Smartphone, ChevronRight, Check, ArrowRight, Globe, Users, Zap, Award, Settings, BarChart3, MessageSquare, Bell, CreditCard, Bot, FileText, UserCheck, Package } from 'lucide-react';

const EcommerceLanding = () => {
  const [activeTab, setActiveTab] = useState('mern');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const techComparisons = {
    mern: {
      title: 'Our Custom Platform',
      color: 'from-green-500 to-emerald-600',
      icon: <Zap className="w-8 h-8" />,
      advantages: [
        '40% higher conversion rates than competitors',
        'Launch your store in just 2 weeks',
        'Lower total cost of ownership',
        'Lightning-fast page loading speeds',
        'Unlimited growth potential without restrictions',
        'Future-proof technology stack'
      ]
    },
    wordpress: {
      title: 'WordPress WooCommerce',
      color: 'from-blue-500 to-indigo-600',
      icon: <Globe className="w-8 h-8" />,
      advantages: [
        'Easy to start with',
        'Many available themes',
        'Good for basic blogs'
      ],
      disadvantages: [
        'Frequent security breaches cost you customers',
        'Slow loading speeds hurt your sales',
        'Crashes during high traffic periods',
        'Monthly plugin costs add up quickly',
        'Limited customization for unique needs',
        'Constant maintenance headaches'
      ]
    },
    shopify: {
      title: 'Shopify',
      color: 'from-purple-500 to-violet-600',
      icon: <ShoppingCart className="w-8 h-8" />,
      advantages: [
        'Quick setup process',
        'Built-in payment processing',
        'App marketplace available'
      ],
      disadvantages: [
        'Monthly fees eat into your profits',
        'Transaction fees on every sale',
        'Limited design customization options',
        'Vendor lock-in - hard to switch later',
        'Extra costs for basic features',
        'Performance issues with many products'
      ]
    },
    magento: {
      title: 'Magento',
      color: 'from-red-500 to-pink-600',
      icon: <Database className="w-8 h-8" />,
      advantages: [
        'Feature-rich platform',
        'Good for large catalogs',
        'Flexible customization'
      ],
      disadvantages: [
        'Extremely expensive to maintain',
        'Requires technical expertise to manage',
        'Slow and resource-heavy platform',
        'Complex setup delays your launch',
        'High hosting costs due to requirements',
        'Frequent updates break functionality'
      ]
    }
  };

  const platformFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Interactive Shopping Experience',
      description: 'Engage customers with dynamic product displays and smooth animations'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Sales Analytics Dashboard',
      description: 'Track revenue, customer behavior, and growth opportunities in real-time'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: 'Mobile-Optimized Store',
      description: 'Capture mobile shoppers with lightning-fast, responsive design'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Customer Self-Service Portal',
      description: 'Reduce support costs with easy account management and order tracking'
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-400" />,
      title: 'Easy Store Setup',
      description: 'Configure your entire store without technical knowledge'
    },
    {
      icon: <Package className="w-8 h-8 text-indigo-500" />,
      title: 'Smart Category System',
      description: 'Help customers find products faster with intelligent organization'
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
      title: 'Inventory Management',
      description: 'Never oversell again with real-time stock tracking and alerts'
    },
    {
      icon: <FileText className="w-8 h-8 text-teal-500" />,
      title: 'Order Processing Hub',
      description: 'Streamline fulfillment and reduce shipping errors'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: 'Marketing Campaigns',
      description: 'Boost sales with targeted discounts and promotional offers'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-pink-500" />,
      title: 'Customer Database',
      description: 'Build loyalty with detailed customer profiles and purchase history'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      title: 'Help Desk System',
      description: 'Resolve customer issues quickly and maintain satisfaction'
    },
    {
      icon: <Bell className="w-8 h-8 text-red-500" />,
      title: 'Email Marketing',
      description: 'Recover abandoned carts and announce new products automatically'
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-400" />,
      title: 'Instant Notifications',
      description: 'Keep customers engaged with order updates and special offers'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      title: 'SMS Marketing',
      description: 'Reach customers instantly with text message promotions'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: 'Secure Payment Processing',
      description: 'Accept all major payment methods with bank-level security'
    },
    {
      icon: <Bot className="w-8 h-8 text-cyan-500" />,
      title: '24/7 AI Customer Service',
      description: 'Answer customer questions instantly, even while you sleep'
    },
    {
      icon: <FileText className="w-8 h-8 text-amber-500" />,
      title: 'SEO-Optimized Blog',
      description: 'Drive more organic traffic with built-in content marketing tools'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: 'Staff Access Control',
      description: 'Protect sensitive data with customizable employee permissions'
    },
    {
      icon: <Truck className="w-8 h-8 text-emerald-500" />,
      title: 'Shipping Integration',
      description: 'Automate shipping calculations and tracking for all major carriers'
    }
  ];

  const coreFeatures = [
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'Faster Loading = More Sales',
      description: 'Studies show 1-second delay reduces conversions by 7%. Our platform loads 3x faster.',
      stats: '40% more conversions'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: 'Never Lose Money to Downtime',
      description: 'Enterprise-grade security and 99.9% uptime guarantee protects your revenue.',
      stats: '99.9% uptime SLA'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-500" />,
      title: 'Capture Mobile Shoppers',
      description: '60% of shopping happens on mobile. Our responsive design converts on every device.',
      stats: '100% mobile optimized'
    },
    {
      icon: <Globe className="w-12 h-12 text-green-500" />,
      title: 'Grow Without Limits',
      description: 'Handle Black Friday traffic spikes without crashes or slowdowns.',
      stats: 'Unlimited scalability'
    }
  ];

  const sellingPoints = [
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: 'Proven Results That Pay For Themselves',
      description: 'Our clients see average 40% increase in sales within 90 days of launch',
      highlight: 'ROI in 90 Days'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'White-Glove Service Included',
      description: 'Dedicated project manager and ongoing support - no extra charges',
      highlight: 'Free Setup & Training'
    },
    {
      icon: <Truck className="w-8 h-8 text-green-500" />,
      title: 'Launch Faster Than Competition',
      description: 'While others take months, we get you selling online in just 2 weeks',
      highlight: 'Launch in 2 Weeks'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Never Deal With Technical Issues',
      description: 'We handle all updates, security, and maintenance so you focus on sales',
      highlight: 'Worry-Free Operation'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Fashion Forward Boutique',
      text: 'My online sales doubled in the first month. The platform is so easy to use and my customers love the fast checkout.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Tech Gadgets Store',
      text: 'Finally, no more website crashes during sales! My revenue increased 60% since switching from WordPress.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Handmade Crafts',
      text: 'The support team set everything up for me. I went from zero to selling $10k/month in just 3 months.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);


  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Boost Your Sales by 40% with Our Ecommerce Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stop losing customers to slow websites and complicated systems.
              Our proven platform helps businesses increase revenue while reducing costs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Start Your Store <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why MERN Stack Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Our Platform Beats the Competition
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            See how we help businesses succeed where others fail
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.entries(techComparisons).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r ' + tech.color + ' text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                {tech.icon}
                {tech.title}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                {techComparisons[activeTab].icon}
                {techComparisons[activeTab].title} Benefits
              </h3>
              <div className="space-y-4">
                {techComparisons[activeTab].advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            {techComparisons[activeTab].disadvantages && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why {techComparisons[activeTab].title} Costs You Money
                </h3>
                <div className="space-y-4">
                  {techComparisons[activeTab].disadvantages.map((disadvantage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm">×</span>
                      </div>
                      <span className="text-gray-400">{disadvantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How We Drive More Sales For Your Business
          </h2>
          <p className="text-gray-400 text-lg">
            Every feature designed to increase revenue and reduce costs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Features Section */}
      <div className="bg-gray-800/30 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-gray-400 text-lg">
              No hidden costs, no missing features - complete ecommerce solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-102">
                <div className="flex items-center gap-4 mb-3">
                  {feature.icon}
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selling Points Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us Over Competitors
            </h2>
            <p className="text-gray-400 text-lg">
              Proven results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sellingPoints.map((point, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-3 rounded-lg">
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                    <p className="text-gray-400 mb-4">{point.description}</p>
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-bold inline-block">
                      {point.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Success Stories From Our Clients
          </h2>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-300 mb-6 italic">
              &quot;{testimonials[currentTestimonial].text}&quot;
            </blockquote>
            <div className="text-white font-semibold">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-purple-400">
              {testimonials[currentTestimonial].company}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-purple-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-cyan-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of successful merchants who chose our MERN stack solution
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Free <ChevronRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceLanding;