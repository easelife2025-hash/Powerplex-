'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Dumbbell, Activity, UserCheck, Flame, Check, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_LIST, ServiceData } from '@/lib/gymData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const iconMap: Record<string, React.ReactNode> = {
    'strength-training': <Dumbbell className="w-5 h-5 text-[#FFE500]" />,
    'cardio-conditioning': <Activity className="w-5 h-5 text-[#FFE500]" />,
    'personal-training': <UserCheck className="w-5 h-5 text-[#FFE500]" />,
    'functional-fitness': <Flame className="w-5 h-5 text-[#FFE500]" />,
  };

  const filteredServices = activeTab === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.id === activeTab);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0E1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-1 bg-[#FFE500]" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#FFE500] uppercase font-display">
              CORE DISCIPLINES
            </span>
            <span className="w-6 h-1 bg-[#FFE500]" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
            ENGINEERED SERVICES FOR <span className="text-[#FFE500]">REAL RESULTS</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400">
            Every square foot of Powerplex Fitness is calibrated for purpose. Choose your focus or combine disciplines for total physical supremacy.
          </p>

          {/* Interactive Filter Tabs (Buttons) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
                activeTab === 'all'
                  ? 'bg-[#FFE500] text-black shadow-md shadow-[#FFE500]/20'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              All Programs
            </button>
            {SERVICES_LIST.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider flex items-center gap-1.5 ${
                  activeTab === service.id
                    ? 'bg-[#FFE500] text-black shadow-md shadow-[#FFE500]/20'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <span>{service.title.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#12151C] rounded-2xl border-2 border-neutral-800/90 overflow-hidden hover:border-[#FFE500]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Top Image Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-[#12151C]/40 to-transparent" />
                
                {/* Service Tag badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-neutral-700 text-xs font-bold text-white">
                  {iconMap[service.id]}
                  <span className="font-display tracking-wider uppercase text-xs">
                    {service.id.replace('-', ' ')}
                  </span>
                </div>
              </div>

              {/* Service Card Body */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white group-hover:text-[#FFE500] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="pt-2 space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Target & Equipment Note */}
                  <div className="pt-3 border-t border-neutral-800/80 text-xs text-neutral-400 space-y-1">
                    <p>
                      <strong className="text-neutral-200">Ideal For:</strong> {service.suitableFor}
                    </p>
                    <p>
                      <strong className="text-neutral-200">Equipment:</strong> {service.equipment}
                    </p>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 px-4 rounded-xl bg-neutral-900 group-hover:bg-[#FFE500] border border-neutral-700 group-hover:border-[#FFE500] text-neutral-200 group-hover:text-black font-black uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>Claim Free Trial For {service.title.split('&')[0].trim()}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#161820] border border-[#FFE500]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFE500]/10 flex items-center justify-center text-[#FFE500] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Not sure which discipline fits your current fitness level?</h4>
              <p className="text-xs text-neutral-400">Our certified trainers in Seawoods will conduct a complimentary physical assessment on your first visit.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('Free Fitness Assessment')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#FFE500] hover:bg-[#e6ce00] text-black font-black uppercase text-xs tracking-wider transition-all"
          >
            Book Free Assessment
          </button>
        </div>

      </div>
    </section>
  );
}
