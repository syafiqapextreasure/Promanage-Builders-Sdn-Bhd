import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExpertiseStrip from '@/components/ExpertiseStrip';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import CustomerJourneySection from '@/components/CustomerJourneySection';
import FaqSection from '@/components/FaqSection';
import EnquirySection from '@/components/EnquirySection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#B89047]/30 selection:text-stone-900">
      {/* Sticky Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Sections - Strictly ordered according to requirements */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Compact Four-Expertise Strip */}
        <ExpertiseStrip />

        {/* 3. About */}
        <AboutSection />

        {/* 4. Services (Four Clear Cards with Expandable Details) */}
        <ServicesSection />

        {/* 5. Featured Portfolio & Accessible Gallery */}
        <PortfolioSection />

        {/* 6. Suggested Customer Journey (Discuss → Plan & Design → Build & Coordinate → Review & Handover) */}
        <CustomerJourneySection />

        {/* 7. Short FAQ (Offered Services, Consultation Preparation, Scope & Cost Timing) */}
        <FaqSection />

        {/* 8. Enquiry Section with Contact Details & WhatsApp Form */}
        <EnquirySection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Non-obscuring Floating Labelled WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
