import Header from "@/components/ssr/header";
import Hero from "@/components/hero";
import WhyFunctionalEcommerce from "@/components/ssr/whyFunctionalEcommerce";
import EcommerceFeatures from "@/components/ssr/ecommerceFeatures";
import ServicesWeOffer from "@/components/ssr/ServicesWeOffer";
import Footer from "@/components/ssr/Footer";
import CopyWright from "@/components/ssr/CopyWright";

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
