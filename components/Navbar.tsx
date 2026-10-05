'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { MessageSquare, Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-stone-300/80 py-3'
          : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-stone-200/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo returning home */}
          <Link
            href="/"
            className="flex items-center rounded-lg p-1 transition-opacity hover:opacity-90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
            aria-label="Promanage Builders Sdn Bhd Home"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation Links - Older-Adult Friendly font size (>= 18px) */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            <Link
              href="/#about"
              className="text-[18px] lg:text-[19px] font-semibold text-stone-800 hover:text-[#254228] transition-colors py-2 px-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047] rounded-md"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-[18px] lg:text-[19px] font-semibold text-stone-800 hover:text-[#254228] transition-colors py-2 px-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047] rounded-md"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-[18px] lg:text-[19px] font-semibold text-stone-800 hover:text-[#254228] transition-colors py-2 px-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047] rounded-md"
            >
              Portfolio
            </Link>
          </nav>

          {/* Action CTAs: Desktop WhatsApp Enquiry Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Hello Benedict Tan, I would like to make an enquiry regarding a renovation or construction project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-2.5 rounded-lg bg-[#27482A] text-white text-[18px] font-semibold shadow-xs hover:bg-[#1E3720] active:scale-[0.99] transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
            >
              <MessageSquare className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button (Clearly Labelled & >= 48px Target) */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl("Hello Benedict Tan, I would like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#27482A] text-white min-h-[48px] min-w-[48px] flex items-center justify-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
              aria-label="Enquire on WhatsApp"
            >
              <MessageSquare className="w-5 h-5 text-amber-300" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 font-semibold text-[17px] min-h-[48px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="w-5 h-5 text-stone-700" /> : <Menu className="w-5 h-5 text-stone-700" />}
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-stone-200 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 shadow-lg"
        >
          <div className="flex flex-col space-y-2">
            <Link
              href="/#about"
              onClick={closeMenu}
              className="text-[19px] font-semibold text-stone-800 hover:text-[#254228] py-3 px-3 rounded-lg hover:bg-stone-100 min-h-[48px] flex items-center"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="text-[19px] font-semibold text-stone-800 hover:text-[#254228] py-3 px-3 rounded-lg hover:bg-stone-100 min-h-[48px] flex items-center"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              onClick={closeMenu}
              className="text-[19px] font-semibold text-stone-800 hover:text-[#254228] py-3 px-3 rounded-lg hover:bg-stone-100 min-h-[48px] flex items-center"
            >
              Portfolio
            </Link>
          </div>

          <div className="pt-2 border-t border-stone-200">
            <a
              href={getWhatsAppUrl("Hello Benedict Tan, I would like to make an enquiry regarding a renovation or construction project.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-3 min-h-[48px] px-5 py-3 rounded-lg bg-[#27482A] text-white text-[18px] font-semibold shadow-xs hover:bg-[#1E3720]"
            >
              <MessageSquare className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>Discuss on WhatsApp</span>
            </a>
            <a
              href="tel:+60163281581"
              className="mt-2.5 w-full flex items-center justify-center gap-2 min-h-[48px] px-5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-800 text-[17px] font-semibold hover:bg-stone-50"
            >
              <Phone className="w-4 h-4 text-stone-600" aria-hidden="true" />
              <span>Call +60 16 328 1581</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
