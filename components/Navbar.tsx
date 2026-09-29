'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Dumbbell, Clock, MapPin, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { GYM_INFO } from '@/lib/gymData';

interface NavbarProps {
  onOpenTrialModal: (goal?: string) => void;
}

export default function Navbar({ onOpenTrialModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Powerplex', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Hours & Location', href: '#hours-location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#FFE500] text-black text-xs font-bold py-1.5 px-4 tracking-wide text-center uppercase flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          ⭐ 4.6 Rated on Google (105+ Reviews) in Seawoods West, Navi Mumbai
        </span>
        <span className="hidden md:inline text-black/50">|</span>
        <span className="hidden md:flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> Mon–Sat: 6 AM – 11 PM · Sun: 9 AM – 2 PM
        </span>
        <span className="hidden lg:inline text-black/50">|</span>
        <a 
          href={`tel:${GYM_INFO.phoneRaw}`} 
          className="hidden lg:inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-80"
        >
          <Phone className="w-3 h-3" /> Call: {GYM_INFO.phone}
        </a>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0C10]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
            : 'bg-[#0B0C10]/85 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[#FFE500] text-black flex items-center justify-center font-black shadow-lg shadow-[#FFE500]/20 transition-transform group-hover:scale-105">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-display text-2xl sm:text-3xl font-black tracking-wider text-white uppercase leading-none">
                  POWERPLEX
                </span>
                <span className="font-display text-2xl sm:text-3xl font-black text-[#FFE500] leading-none ml-1.5">
                  FITNESS
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-semibold">
                Seawoods · Navi Mumbai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-neutral-300 hover:text-[#FFE500] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#FFE500] decoration-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone Button */}
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              aria-label={`Call Powerplex Fitness at ${GYM_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-bold hover:border-[#FFE500]/50 hover:text-white transition-all group"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFE500] group-hover:rotate-12 transition-transform" />
              <span className="hidden xl:inline">{GYM_INFO.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={GYM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Powerplex Fitness on WhatsApp"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/20 transition-all"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#FFE500]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0C10] border-b border-neutral-800 px-5 pt-4 pb-6 space-y-4">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#FFE500]" />
                Call Now
              </a>
              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] text-black font-bold text-sm"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-3 rounded-lg text-neutral-200 hover:bg-neutral-900 hover:text-[#FFE500] font-semibold text-base transition-colors flex items-center justify-between border-b border-neutral-900 last:border-0"
                >
                  <span>{link.name}</span>
                  <span className="text-[#FFE500] text-sm">→</span>
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3.5 rounded-lg bg-[#FFE500] text-black font-black uppercase text-sm tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FFE500]/20"
            >
              <Sparkles className="w-4 h-4" />
              Claim 1-Day Free Trial Pass
            </button>

            <div className="pt-2 text-xs text-neutral-400 space-y-1 border-t border-neutral-900">
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FFE500]" />
                Mon–Sat: 6:00 AM – 11:00 PM · Sun: 9:00 AM – 2:00 PM
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FFE500]" />
                Seawoods West, Nerul, Navi Mumbai
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
