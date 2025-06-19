import Header from "@/components/header";
import React from "react";
import Footer from "@/components/Footer";


export default function PublicLayout({ children }) {
  return (
    <>
      <Header />

      {children}
      <Footer />

    </>
  );
}