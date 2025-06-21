import React from "react";
import {
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Loader,
  TrendingUp,
  Search,
  Server,
  Package,
  Boxes,
  FileText,
  MapPin,
  MessageCircle,
  CreditCard,
  Gift,
  Tag,
} from "lucide-react";
import CallOrWhatsApp from "@/components/CallOrWhatsApp";

const EcommerceFeatures = () => {
  return (
    <section className="bg-black py-16 border-t border-red-500">
      <div className="xl:container xl:mx-auto px-4 text-center flex flex-col items-center justify-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          আমাদের ই-কমার্স সাইটের ফিচারসমূহ
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          পারফরম্যান্স, ইউজার এক্সপেরিয়েন্স আর কনভার্শনে আমরা সিরিয়াস।
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 items-stretch">
          {[
            {
              icon: <Rocket className="text-red-500 mb-4" size={40} />,
              title: "আলট্রা ফাস্ট লোডিং",
              desc: "ওয়েবসাইট হবে সুপার ফাস্ট — যেন কাস্টমার কোনো সময়ই ওয়েট না করে।",
            },
            {
              icon: <ShoppingCart className="text-red-500 mb-4" size={40} />,
              title: "সহজ অর্ডার প্রসেস",
              desc: "কাস্টমার মাত্র ২-৩ ক্লিকে প্রোডাক্ট অর্ডার করতে পারবে, কোনো ঝামেলা ছাড়াই।",
            },
            {
              icon: <ShieldCheck className="text-red-500 mb-4" size={40} />,
              title: "সিকিউরিটি ও বিশ্বাসযোগ্যতা",
              desc: "SSL, Trust Badge, এবং কাস্টমার রিভিউ – সবকিছু থাকবে ট্রাস্ট বিল্ড করার জন্য।",
            },
            {
              icon: <Loader className="text-red-500 mb-4" size={40} />,
              title: "মোবাইল অপ্টিমাইজড",
              desc: "মোবাইল, ট্যাব, কম্পিউটার – সব ডিভাইসে একই রকম সুন্দর এবং ফ্লুয়েন্ট এক্সপেরিয়েন্স।",
            },
            {
              icon: <TrendingUp className="text-red-500 mb-4" size={40} />,
              title: "কনভার্শন ফোকাসড ডিজাইন",
              desc: "ডিসকাউন্ট ব্যানার, রিভিউ, Call-to-Action – সবকিছু থাকবে বিক্রি বাড়ানোর জন্য।",
            },
            {
              icon: <Search className="text-red-500 mb-4" size={40} />,
              title: "SEO ফ্রেন্ডলি স্ট্রাকচার",
              desc: "গুগলে র‍্যাঙ্ক করার জন্য প্রয়োজনীয় ট্যাগ, স্পিড, আর ক্লিন কোড সবই থাকবে।",
            },
            {
              icon: <Server className="text-red-500 mb-4" size={40} />,
              title: "সার্ভার সাইট ট্র্যাকিং",
              desc: "Facebook Conversion API সেটআপ থাকবে যাতে অ্যাড পারফরম্যান্স ঠিকমতো ট্র্যাক করা যায়।",
            },
            {
              icon: <Package className="text-red-500 mb-4" size={40} />,
              title: "এক ক্লিকে কুরিয়ার অর্ডার",
              desc: "স্টিডফাস্ট, পাঠাও, বা অন্য কুরিয়ার — অর্ডার হওয়ার সাথে সাথেই এক ক্লিকে কুরিয়ারে বুকিং হয়ে যাবে।",
            },
            {
              icon: <Boxes className="text-red-500 mb-4" size={40} />,
              title: "অটোমেটেড স্টক ম্যানেজমেন্ট",
              desc: "অর্ডার হলে অটোমেটিক স্টক কমে যাবে। কোন প্রোডাক্ট আউট অফ স্টক — সেটাও রিয়েল টাইমে দেখাবে।",
            },
            {
              icon: <FileText className="text-red-500 mb-4" size={40} />,
              title: "অ্যাডমিন ইনভয়েস ডাউনলোড",
              desc: "অ্যাডমিন চাইলে যেকোনো অর্ডারের ইনভয়েস প্রিন্ট ও PDF আকারে ডাউনলোড করতে পারবেন, ট্র্যাকিংয়ের সুবিধার জন্য।",
            },
            {
              icon: <MapPin className="text-red-500 mb-4" size={40} />,
              title: "অর্ডার ট্র্যাকিং সিস্টেম",
              desc: "কাস্টমার নিজের অর্ডার কোথায় আছে — সেটা রিয়েল টাইমে ট্র্যাক করতে পারবে ট্র্যাকিং আইডি দিয়ে।",
            },
            {
              icon: <MessageCircle className="text-red-500 mb-4" size={40} />,
              title: "SMS নোটিফিকেশন সিস্টেম",
              desc: "অর্ডার কনফার্ম, শিপমেন্ট, বা ডেলিভারি — সব আপডেট কাস্টমার SMS এর মাধ্যমে রিয়েল টাইমে পাবে।",
            },
            {
              icon: <CreditCard className="text-red-500 mb-4" size={40} />,
              title: "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন",
              desc: "বিকাশ, নগদ, কার্ড, কিংবা ব্যাংক — সব মাধ্যমে কাস্টমার যেন সহজেই পেমেন্ট করতে পারে।",
            },
            {
              icon: <Gift className="text-red-500 mb-4" size={40} />,
              title: "রিওয়ার্ড পয়েন্ট সিস্টেম",
              desc: "কাস্টমাররা তাদের কেনাকাটায় রিওয়ার্ড পয়েন্ট উপার্জন করতে পারবে, যা পরবর্তীতে ডিসকাউন্টে রিডিম করা যাবে।",
            },
            {
              icon: <Tag className="text-red-500 mb-4" size={40} />, // Promo Code Icon
              title: "প্রোমো কোড সিস্টেম",
              desc: "কাস্টমাররা বিভিন্ন প্রোমো কোড ব্যবহার করে ডিসকাউন্ট পেতে পারবে, কেনাকাটায় বিশেষ ছাড়।",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-2 md:p-6 rounded-xl bg-gray-900 border border-gray-800 shadow hover:shadow-xl transition flex flex-col items-center text-center h-full"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className={"mt-9"}>
          <CallOrWhatsApp/>
        </div>

      </div>
    </section>
  );
};

export default EcommerceFeatures;
