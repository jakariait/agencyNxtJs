import { ShoppingCart, Zap, Users, Sparkles } from "lucide-react";
import FloatingShapes from "@/components/FloatingShapes";
import { getBrandName } from "@/utils/brand";

const AboutEcommerceSection = () => {
  return (
    <section className="bg-indigo-950 text-white pb-10 px-4 relative overflow-hidden">
      <FloatingShapes />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The easiest way to build an online store
          </h2>

          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            {getBrandName()} is the perfect solution for businesses of all
            sizes. Whether you`&apos;re just starting out or already running an
            established brand, our platform delivers a powerful, ready-to-use
            e-commerce Content Management System (CMS) along with professionally
            designed website templates. With deep expertise in e-commerce design
            and development, we help you launch, manage, and scale your online
            store with ease.
          </p>

          <p className="text-indigo-200 mb-8 text-lg font-medium">
            Here`&apos;s why businesses choose {getBrandName()}:
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  User-Friendly Interface
                </h3>
                <p className="text-gray-300">
                  {getBrandName()} provides an intuitive and user-friendly
                  interface that makes it easy for you to navigate, manage
                  products, and handle customer orders without a steep learning
                  curve.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Powerful Features
                </h3>
                <p className="text-gray-300">
                  {getBrandName()} e-commerce CMS offers a wide range of
                  features to help you customize your store, manage your
                  inventory, and process payments seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Content - Replacing Image */}
        <div className="relative">
          {/* Main Visual Container */}
          <div className="relative bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-3xl p-8 border border-indigo-700 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-8 h-8 text-indigo-300" />
                <span className="text-xl font-bold text-white">
                  Store Builder
                </span>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Setup Steps */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="bg-indigo-700/50 rounded-lg p-4 backdrop-blur-sm border border-indigo-600">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      Choose Template
                    </div>
                    <div className="text-indigo-200 text-sm">
                      Pick from professionally designed themes
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-700/50 rounded-lg p-4 backdrop-blur-sm border border-indigo-600">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      Customize & Launch
                    </div>
                    <div className="text-indigo-200 text-sm">
                      Add products and go live in minutes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">No Coding Required</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Ready-to-Use Templates</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Built-in CMS</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-sm">Launch in Minutes</span>
              </div>
            </div>

            {/* Sparkle effect */}
            <div className="absolute top-4 right-4">
              <Sparkles className="w-6 h-6 text-indigo-300 animate-pulse" />
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute bottom-8 right-8 w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500">
            <Zap className="w-6 h-6 text-purple-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEcommerceSection;
