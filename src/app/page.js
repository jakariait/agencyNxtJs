import Header from "@/components/ssr/header";
import WhyFunctionalEcommerce from "@/components/ssr/whyFunctionalEcommerce";
import EcommerceFeatures from "@/components/ssr/ecommerceFeatures";
import Footer from "@/components/ssr/Footer";
import CopyWright from "@/components/ssr/CopyWright";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceSection from "@/components/ServiceSection";
import WhyChooseUs2 from "@/components/WhyChooseUs2";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs2/>
      <WhyChooseUs />
      <WhyFunctionalEcommerce />
      <EcommerceFeatures />
      <Footer />
      <CopyWright />
    </>
  );
}
