import Header from "@/components/header";
import Hero from "@/components/hero";
import WhyFunctionalEcommerce from "@/components/whyFunctionalEcommerce";
import EcommerceFeatures from "@/components/ecommerceFeatures";
import ServicesWeOffer from "@/components/ServicesWeOffer";
import Footer from "@/components/Footer";
import CopyWright from "@/components/CopyWright";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyFunctionalEcommerce />
      <EcommerceFeatures/>
      <ServicesWeOffer/>
      <Footer />
      <CopyWright/>
    </>
  );
}
