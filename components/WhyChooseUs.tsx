'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award, Clock, Dumbbell, Flame, ShieldCheck, Sparkles, Star, ChevronRight } from 'lucide-react';
import { WHY_CHOOSE_US, GYM_INFO } from '@/lib/gymData';

interface WhyChooseUsProps {
  onOpenTrialModal: () => void;
}

export default function WhyChooseUs({ onOpenTrialModal }: WhyChooseUsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'award':
        return <Award className="w-6 h-6 text-[#FFE500]" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-[#FFE500]" />;
      case 'dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#FFE500]" />;
      case 'flame':
        return <Flame className="w-6 h-6 text-[#FFE500]" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-[#FFE500]" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-[#FFE500]" />;
      default:
        return <Star className="w-6 h-6 text-[#FFE500]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#0B0C10] relative overflow-hidden">
      {/* Decorative background grid and hazard stripes */}
      <div className="absolute inset-0 bg-carbon-texture opacity-60 pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-radial from-[#FFE500]/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-1 bg-[#FFE500]" />
              <span className="text-xs sm:text-sm font-black tracking-widest text-[#FFE500] uppercase font-display">
                THE POWERPLEX ADVANTAGE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              WHY ATHLETES & PROFESSIONALS CHOOSE <span className="text-[#FFE500]">POWERPLEX</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFE500] text-black font-display font-black text-xl flex items-center justify-center">
                4.6★
              </div>
              <div className="text-xs">
                <p className="font-bold text-white uppercase tracking-wide">Google Rating</p>
                <p className="text-neutral-400">105+ Local Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#12151C] border border-neutral-800 hover:border-[#FFE500]/60 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-[#FFE500]/40 flex items-center justify-center mb-5 transition-colors">
                {getIcon(item.icon)}
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white group-hover:text-[#FFE500] transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quick Comparison Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            <div className="pt-2 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl font-black text-[#FFE500]">17 HRS</span>
              <p className="text-xs font-semibold text-neutral-400 uppercase mt-1">Daily Facility Access</p>
              <p className="text-[11px] text-neutral-500">6 AM – 11 PM Mon–Sat</p>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl font-black text-white">105+</span>
              <p className="text-xs font-semibold text-neutral-400 uppercase mt-1">Verified Member Reviews</p>
              <p className="text-[11px] text-neutral-500">4.6 Stars Average</p>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl font-black text-[#FFE500]">4</span>
              <p className="text-xs font-semibold text-neutral-400 uppercase mt-1">Dedicated Zones</p>
              <p className="text-[11px] text-neutral-500">Strength, Turf, Cardio, PT</p>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl font-black text-white">100%</span>
              <p className="text-xs font-semibold text-neutral-400 uppercase mt-1">Hygienic & Air-Conditioned</p>
              <p className="text-[11px] text-neutral-500">Sanitized Multiple Times Daily</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
