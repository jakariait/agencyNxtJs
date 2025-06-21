import Header from "@/components/header";
import React from "react";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";


export default function PublicLayout({ children }) {
  return (
    <>
      <Header />

      {children}
      <Footer />
      <WhatsAppButton/>
      <ScrollToTop/>
    </>
  );
}