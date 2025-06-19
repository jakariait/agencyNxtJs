import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ComparisonSection from "@/components/ComparisonSection";
import Clients from "@/components/Clients";
import React from "react";
import TeamPreviewSection from "@/components/TeamPreviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


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
      <Footer />
      {/*<CopyWright />*/}
    </>
  );
}
