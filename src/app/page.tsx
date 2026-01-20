"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import ClientPortfolio from "@/components/ClientPortfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASplit from "@/components/CTASplit";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

/**
 * Main homepage component
 * Redesigned to match Alzumorod reference design
 */
export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      {/* Navigation */}
      <Navbar onContactClick={openContactModal} />

      {/* Main content */}
      <main id="main-content">
        {/* Hero section with form card */}
        <Hero onContactClick={openContactModal} />

        {/* About section with overlapping images */}
        <About />

        {/* Stats bar with background image */}
        <Stats />

        {/* Services section with image cards */}
        <Services />

        {/* Why Choose Us section */}
        <WhyChooseUs />

        {/* CTA Split banner */}
        <CTASplit onContactClick={openContactModal} />
      </main>

      {/* Footer with newsletter */}
      <Footer onContactClick={openContactModal} />

      {/* Contact modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}
