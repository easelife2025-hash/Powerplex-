'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Phone, Sparkles, Star, Dumbbell, Clock, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { GYM_INFO } from '@/lib/gymData';

interface FinalCTAProps {
  onOpenTrialModal: () => void;
}

export default function FinalCTA({ onOpenTrialModal }: FinalCTAProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-black overflow-hidden border-t-2 border-[#FFE500]">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop"
          alt="Athlete training hard at Powerplex Fitness"
          fill
          className="object-cover object-center opacity-25 filter grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/80" />
      </div>

      {/* Decorative hazard stripe accent ribbons with moving animation */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-hazard-stripes-accent animate-moving-stripes" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-hazard-stripes-accent animate-moving-stripes" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE500]/20 border border-[#FFE500]/50 text-[#FFE500] text-xs font-black uppercase tracking-widest">
          <Star className="w-3.5 h-3.5 fill-[#FFE500]" />
          <span>SEAWOODS&apos; #1 HIGH-VOLTAGE FITNESS DESTINATION</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-3">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95]">
            NO MORE EXCUSES. <br />
            <span className="text-[#FFE500]">JUST RESULTS.</span>
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Every day you wait is a day of progress lost. Claim your 1-day free trial pass, experience our machinery, and feel the Powerplex energy for yourself.
          </p>
        </div>

        {/* Triple CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenTrialModal}
            className="px-8 py-4 sm:py-5 rounded-2xl bg-[#FFE500] hover:bg-[#ebd400] text-black font-black uppercase text-sm sm:text-base tracking-wider transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-2xl shadow-[#FFE500]/30 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-black" />
            <span>Claim 1-Day Free Trial</span>
          </button>

          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border-2 border-neutral-700 hover:border-white text-white font-bold text-sm sm:text-base tracking-wide transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5 text-[#FFE500]" />
            <span>Call {GYM_INFO.phone}</span>
          </a>

          <a
            href={GYM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-black text-sm sm:text-base tracking-wide transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-xl shadow-[#25D366]/20"
          >
            <FaWhatsapp className="w-5 h-5 text-black" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Quick Trust Meta */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-semibold border-t border-neutral-800/80 max-w-xl mx-auto">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#FFE500]" />
            <span>Mon–Sat 6 AM – 11 PM</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#FFE500]" />
            <span>Sun 9 AM – 2 PM</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#FFE500]" />
            <span>Seawoods West, Navi Mumbai</span>
          </span>
        </div>

      </div>
    </section>
  );
}
