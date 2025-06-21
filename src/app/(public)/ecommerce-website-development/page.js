import React from "react";
import EcommerceFeatures from "@/components/EcommerceFeatures";
import EcomHeroSection from "@/components/EcomHeroSection";
import AboutEcommerceSection from "@/components/AboutEcommerceSection";
import TechStackSection from "@/components/TechStackSection";
import CompareMernSection from "@/components/CompareMernSection";
import MernCommerceFeatures from "@/components/MernCommerceFeatures";
import DemoAccessSection from "@/components/DemoAccessSection";
import ContactSection from "@/components/ContactSection";
import CallOrWhatsApp from "@/components/CallOrWhatsApp";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div>
      <EcomHeroSection />

      <AboutEcommerceSection />
      <div className={"py-5"}>
        <CallOrWhatsApp />
      </div>
      <TechStackSection />

      <CompareMernSection />
      <div className={"py-5"}>
        <CallOrWhatsApp />
      </div>
      <EcommerceFeatures />
      <MernCommerceFeatures />
      <div className={"py-5"}>
        <CallOrWhatsApp />
      </div>
      <DemoAccessSection />
      <ContactSection />

      <ContactSection />
    </div>
  );
};

export default Page;
