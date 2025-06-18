import Header from "@/components/ssr/header";
import WhyFunctionalEcommerce from "@/components/ssr/whyFunctionalEcommerce";
import EcommerceFeatures from "@/components/ssr/ecommerceFeatures";
import Footer from "@/components/ssr/Footer";
import CopyWright from "@/components/ssr/CopyWright";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ComparisonSection from "@/components/ComparisonSection";
import EcommerceLanding from "@/components/EcommerceLanding";
import Clients from "@/components/Clients";
import WhyChooseUs2 from "@/components/WhyChooseUs";
import React from "react";
import TeamPreviewSection from "@/components/TeamPreviewSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSection />
      <ComparisonSection />
      {/*<EcommerceLanding/>*/}
      <Clients/>
      <TeamPreviewSection/>
      <ContactSection/>
      {/*<WhyFunctionalEcommerce />*/}
      {/*<EcommerceFeatures />*/}
      {/*<Footer />*/}
      {/*<CopyWright />*/}
    </>
  );
}
