import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExpertiseStrip from '@/components/ExpertiseStrip';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import CustomerJourneySection from '@/components/CustomerJourneySection';
import FaqSection from '@/components/FaqSection';
import Link from 'next/link';
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
        <section className="bg-[#27482A] px-4 py-16 text-center text-white"><h2 className="text-3xl font-bold sm:text-4xl">Ready to Plan Your Project?</h2><p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed">Tell us about your space and what you have in mind.</p><Link href="/contact" className="mt-6 inline-flex min-h-14 items-center rounded-lg bg-white px-7 text-lg font-semibold text-[#27482A] hover:bg-stone-100">Contact Us</Link></section>
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Non-obscuring Floating Labelled WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
