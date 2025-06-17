import Header from "@/components/ssr/header";
import WhyFunctionalEcommerce from "@/components/ssr/whyFunctionalEcommerce";
import EcommerceFeatures from "@/components/ssr/ecommerceFeatures";
import Footer from "@/components/ssr/Footer";
import CopyWright from "@/components/ssr/CopyWright";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ComparisonSection from "@/components/ComparisonSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSection />
      <ComparisonSection />
      <WhyFunctionalEcommerce />
      <EcommerceFeatures />
      <Footer />
      <CopyWright />
    </>
  );
}
