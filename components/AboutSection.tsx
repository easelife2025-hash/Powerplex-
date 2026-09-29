'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Check, Shield, Flame, Target, Trophy, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '@/lib/gymData';

interface AboutSectionProps {
  onOpenTrialModal: () => void;
}

export default function AboutSection({ onOpenTrialModal }: AboutSectionProps) {
  const highlights = [
    {
      title: "Engineered for Serious Transformation",
      desc: "No fluff, no gimmicks. Built for progressive overload, athletic conditioning, and consistent physical progression.",
    },
    {
      title: "Signature Yellow & Black Arena",
      desc: "Inspired by raw athletic energy with high-contrast motivational walls, industrial LED strip ceiling, and high-tempo beats.",
    },
    {
      title: "Biomechanical Commercial Gear",
      desc: "Heavy-duty lime green & matte black pin-selected and plate-loaded machines built for smooth resistance and joint protection.",
    },
    {
      title: "Dedicated Functional Turf Strip",
      desc: "Specially installed artificial turf track for sprint drills, battle rope power complexes, and agility conditioning.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0B0C10] relative overflow-hidden">
      {/* Subtle background hazard lines in corners */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-hazard-stripes opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-radial from-[#FFE500]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Gym Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Feature Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-2xl bg-neutral-900 group">
              <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                  alt="Inside Powerplex Fitness gym floor and equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              </div>

              {/* Real Gym Signature Accent Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/90 backdrop-blur-md border border-[#FFE500]/30 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black tracking-widest text-[#FFE500] uppercase">
                    Signature Facility
                  </p>
                  <p className="text-sm font-bold text-white">
                    Powerplex Strength & Turf Arena
                  </p>
                  <p className="text-xs text-neutral-400">
                    Seawoods West · Sector 42A, Nerul
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#FFE500] text-black font-black flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 fill-black" />
                </div>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-xl bg-[#181B22] border-2 border-[#FFE500] shadow-2xl items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#FFE500] flex items-center justify-center text-black font-display font-black text-2xl">
                4.6★
              </div>
              <div>
                <p className="text-xs font-black text-white uppercase tracking-wider">Top-Rated Gym</p>
                <p className="text-xs text-neutral-400">105+ Verified Member Reviews</p>
              </div>
            </div>

            {/* Industrial hazard stripe bar with smooth moving lines animation */}
            <div className="mt-3 h-2 w-full rounded-full bg-hazard-stripes-accent animate-moving-stripes opacity-90" />
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Tag */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-1 bg-[#FFE500]" />
              <span className="text-xs sm:text-sm font-black tracking-widest text-[#FFE500] uppercase font-display">
                ABOUT POWERPLEX FITNESS
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white leading-tight tracking-tight">
              BUILT FOR THOSE WHO REFUSE TO BE <span className="text-[#FFE500]">AVERAGE.</span>
            </h2>

            {/* Body */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Located in the heart of Seawoods West, <strong className="text-white">Powerplex Fitness</strong> was founded with a singular purpose: to deliver an authentic, high-voltage fitness sanctuary where dedication meets top-tier biomechanics.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Step into an electric atmosphere characterized by bold yellow & black industrial aesthetics, high-intensity neon ceiling lights, and heavy-duty lime green & matte black machinery. Whether you are loading your first deadlift or chasing competitive PRs, Powerplex provides the exact environment you need to excel.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Check className="w-4 h-4 text-[#FFE500] shrink-0 stroke-[3]" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-neutral-400 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenTrialModal}
                className="px-6 py-3.5 rounded-xl bg-[#FFE500] hover:bg-[#ebd400] text-black font-black uppercase text-xs sm:text-sm tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 shadow-lg shadow-[#FFE500]/20"
              >
                <Dumbbell className="w-4 h-4" />
                <span>Experience Powerplex Today</span>
              </button>

              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="px-5 py-3.5 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-neutral-200 font-bold text-xs sm:text-sm tracking-wide transition-colors"
              >
                Speak with Floor Manager
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
