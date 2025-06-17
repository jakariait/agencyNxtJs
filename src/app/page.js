import Header from "@/components/ssr/header";
import Hero from "@/components/ssr/hero";
import WhyFunctionalEcommerce from "@/components/ssr/whyFunctionalEcommerce";
import EcommerceFeatures from "@/components/ssr/ecommerceFeatures";
import ServicesWeOffer from "@/components/ssr/ServicesWeOffer";
import Footer from "@/components/ssr/Footer";
import CopyWright from "@/components/ssr/CopyWright";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AgencyHeroSection from "@/components/AgencyHeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HeroSection/>
      <AgencyHeroSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <WhyFunctionalEcommerce />
      <EcommerceFeatures/>
      <ServicesWeOffer/>
      <Footer />
      <CopyWright/>
    </>
  );
}
