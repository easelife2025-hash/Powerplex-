'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Phone, Navigation, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { SCHEDULE_DAYS, GYM_INFO } from '@/lib/gymData';

export default function HoursAndLocation() {
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  // map 0 -> index 6 (Sunday), 1..6 -> index 0..5
  const activeDayScheduleIdx = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  return (
    <section id="hours-location" className="py-20 sm:py-28 bg-[#0E1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-1 bg-[#FFE500]" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#FFE500] uppercase font-display">
              TIMINGS & HOW TO REACH
            </span>
            <span className="w-6 h-1 bg-[#FFE500]" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
            OPEN EARLY. <span className="text-[#FFE500]">STAYING OPEN LATE.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400">
            Conveniently situated in Seawoods West, Nerul, Navi Mumbai. Built around your busy routine with 17 hours of daily training access.
          </p>
        </div>

        {/* 2-Column Layout: Hours on Left, Location & Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Opening Hours Table & Live Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-[#12151C] rounded-2xl border-2 border-neutral-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE500]/10 flex items-center justify-center text-[#FFE500]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black uppercase text-white">
                      OPENING HOURS
                    </h3>
                    <p className="text-xs text-neutral-400">Weekly Training Schedule</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                  Open 7 Days
                </span>
              </div>

              {/* Day-by-Day Table */}
              <div className="divide-y divide-neutral-800/80 my-4">
                {SCHEDULE_DAYS.map((item, index) => {
                  const isToday = index === activeDayScheduleIdx;
                  return (
                    <div
                      key={item.day}
                      className={`py-3 px-3 rounded-lg flex items-center justify-between transition-colors ${
                        isToday
                          ? 'bg-[#FFE500]/10 border border-[#FFE500]/30 text-white font-bold'
                          : 'text-neutral-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="w-2 h-2 rounded-full bg-[#FFE500] animate-pulse" />
                        )}
                        <span className={`text-xs sm:text-sm ${isToday ? 'text-[#FFE500] font-black' : ''}`}>
                          {item.day}
                        </span>
                        {isToday && (
                          <span className="text-[10px] uppercase font-bold text-neutral-400 ml-1">
                            (Today)
                          </span>
                        )}
                      </div>

                      <div className="text-right">
                        <span className={`font-mono text-xs sm:text-sm ${isToday ? 'text-white font-bold' : 'text-neutral-300'}`}>
                          {item.hours}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Summary Note */}
            <div className="mt-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800/90 text-xs text-neutral-400 space-y-1">
              <div className="flex items-center gap-2 text-neutral-200 font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#FFE500]" />
                <span>Extended Hours Guarantee</span>
              </div>
              <p>
                Cardio, free weights, and turf tracks remain fully operational during all open hours, including late evening sessions up to 11:00 PM.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Exact Location, Address, & Interactive Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 bg-[#12151C] rounded-2xl border-2 border-neutral-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6"
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black uppercase text-white">
                      GYM LOCATION
                    </h3>
                    <p className="text-xs text-neutral-400">Seawoods West, Nerul, Navi Mumbai</p>
                  </div>
                </div>

                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-[#FFE500] text-xs font-bold text-neutral-200 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#FFE500]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Exact Address Box from Screenshot */}
              <div className="mt-5 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  Official Registered Address
                </p>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {GYM_INFO.address}
                </p>
                <div className="mt-3 pt-3 border-t border-neutral-800/80 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                  <span>📍 Landmark: {GYM_INFO.nearbyLandmark}</span>
                  <span>🚗 Free 2-Wheeler & Street Parking Available</span>
                </div>
              </div>

              {/* Map Visual Preview Embed */}
              <div className="mt-5 relative aspect-[16/8] sm:aspect-[16/7] w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
                <iframe
                  title="Powerplex Fitness Seawoods Navi Mumbai Map"
                  src="https://maps.google.com/maps?q=Powerplex+fitness+Seawoods+West+Nerul+Navi+Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale contrast-125 invert opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Overlay Pin Card */}
                <div className="absolute bottom-3 left-3 p-2.5 rounded-lg bg-black/90 backdrop-blur-md border border-[#FFE500]/40 flex items-center gap-2 shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-[#FFE500] animate-ping" />
                  <span className="text-xs font-bold text-white">Powerplex Fitness Arena</span>
                </div>
              </div>
            </div>

            {/* Quick Direct Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group"
              >
                <Phone className="w-4 h-4 text-[#FFE500] group-hover:rotate-12 transition-transform" />
                <span>Call {GYM_INFO.phone}</span>
              </a>

              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
