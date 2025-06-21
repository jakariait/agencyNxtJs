import React from "react";
import EcommerceFeatures from "@/components/EcommerceFeatures";
import EcomHeroSection from "@/components/EcomHeroSection";
import AboutEcommerceSection from "@/components/AboutEcommerceSection";
import TechStackSection from "@/components/TechStackSection";
import CompareMernSection from "@/components/CompareMernSection";

const Page = () => {
  return (
    <div>
      <EcomHeroSection/>
      <AboutEcommerceSection/>
      <TechStackSection/>
      <CompareMernSection/>
      <EcommerceFeatures/>

    </div>
  );
};

export default Page;