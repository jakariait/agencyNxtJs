import React from "react";
import { Laptop, Code, ShoppingBag, Phone, Server, Layers } from "lucide-react";

const ServicesWeOffer = () => {
  return (
    <section className="bg-black py-16 border-t border-red-500">
      <div className="xl:container xl:mx-auto px-4 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          আমাদের সেবা সমূহ
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          প্রযুক্তি এবং ডিজাইনে আমরা আপনার ব্যবসাকে পরবর্তী স্তরে নিয়ে যাবো।
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 items-stretch">
          {[
            {
              icon: <Laptop className="text-blue-500 mb-4" size={40} />,
              title: "ই-কমার্স ডেভেলপমেন্ট",
              desc: "বিশ্বস্ত এবং দক্ষ ই-কমার্স সাইট ডেভেলপমেন্ট, যেটি আপনার ব্যবসাকে দ্রুত বাড়াতে সহায়তা করবে।",
            },
            {
              icon: <Code className="text-blue-500 mb-4" size={40} />,
              title: "ওয়েবসাইট ডেভেলপমেন্ট",
              desc: "ব্যবসার জন্য আধুনিক এবং রেসপন্সিভ ওয়েবসাইট ডেভেলপমেন্ট, যেটি ব্যবহারকারীকে আকর্ষণ করবে।",
            },
            {
              icon: <ShoppingBag className="text-blue-500 mb-4" size={40} />,
              title: "ডিজিটাল মার্কেটিং",
              desc: "SEO, সোশ্যাল মিডিয়া মার্কেটিং এবং PPC ক্যাম্পেইন সহ ডিজিটাল মার্কেটিং স্ট্রাটেজি যা আপনার ব্যবসার উন্নতি ঘটাবে।",
            },
            {
              icon: <Server className="text-blue-500 mb-4" size={40} />,
              title: "হোস্টিং সেবা",
              desc: "বিশ্বস্ত এবং স্কেলেবল ওয়েব হোস্টিং সেবা, যাতে আপনার সাইট সবসময় আপ থাকবে এবং ফাস্ট লোড হয়।",
            },
            {
              icon: <Phone className="text-blue-500 mb-4" size={40} />,
              title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
              desc: "iOS এবং Android অ্যাপ ডেভেলপমেন্ট, যা আপনার কাস্টমারদের সাথে আরও ভাল যোগাযোগ এবং অভিজ্ঞতা প্রদান করবে।",
            },
            {
              icon: <Layers className="text-blue-500 mb-4" size={40} />,
              title: "UI/UX ডিজাইন",
              desc: "স্মার্ট, ব্যবহারকারী-বান্ধব UI/UX ডিজাইন, যা আপনার ওয়েবসাইট এবং অ্যাপ্লিকেশনকে সুন্দর এবং ব্যবহারযোগ্য করবে।",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-2 md:p-6 rounded-xl bg-gray-900 border border-gray-800 shadow hover:shadow-xl transition flex flex-col items-center text-center h-full"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className={"flex items-center justify-center relative mt-9"}>
          <a
            href="tel:+8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-l-lg transition duration-300 w-36"
          >
            কথা বলুন
          </a>
          {/* OR Section */}
          <div className="text-white absolute bg-black px-1 py-1 rounded-full border-3 border-white z-50 flex items-center justify-center">
            OR
          </div>
          <a
            href="https://wa.me/8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-r-lg transition duration-300 w-36"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;
