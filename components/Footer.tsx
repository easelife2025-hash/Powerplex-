'use client';

import React from 'react';
import Link from 'next/link';
import { Dumbbell, Phone, Navigation, Clock, MapPin, Star, ShieldCheck, Heart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { GYM_INFO } from '@/lib/gymData';

export default function Footer() {
  return (
    <footer className="bg-[#07080a] border-t border-neutral-900 pt-16 pb-24 lg:pb-12 text-neutral-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-[#FFE500] text-black flex items-center justify-center font-black">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-display text-2xl font-black tracking-wider text-white uppercase leading-none">
                    POWERPLEX
                  </span>
                  <span className="font-display text-2xl font-black text-[#FFE500] leading-none ml-1.5">
                    FITNESS
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-semibold">
                  Seawoods · Navi Mumbai
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Navi Mumbai&apos;s premier high-voltage strength arena and functional fitness gym. Commercial biomechanics, certified coaches, and an electric community.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
              <div className="w-8 h-8 rounded-lg bg-[#FFE500] text-black font-black flex items-center justify-center text-xs">
                4.6★
              </div>
              <div>
                <span className="text-white font-bold block">Rated 4.6 on Google</span>
                <span className="text-[11px] text-neutral-500">105+ Verified Member Reviews</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-base font-black uppercase text-white tracking-wider">
              EXPLORE
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#about" className="hover:text-[#FFE500] transition-colors">About Facility</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFE500] transition-colors">Our Disciplines</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FFE500] transition-colors">Why Powerplex</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FFE500] transition-colors">Gym Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FFE500] transition-colors">Member Reviews</a>
              </li>
              <li>
                <a href="#hours-location" className="hover:text-[#FFE500] transition-colors">Timings & Map</a>
              </li>
            </ul>
          </div>

          {/* Timings Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base font-black uppercase text-white tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FFE500]" />
              <span>FACILITY TIMINGS</span>
            </h4>
            <div className="space-y-2 text-neutral-300">
              <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
                <span className="text-[11px] font-bold text-neutral-400 block uppercase">Monday – Saturday</span>
                <span className="text-sm font-bold text-[#FFE500] font-mono">6:00 AM – 11:00 PM</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
                <span className="text-[11px] font-bold text-neutral-400 block uppercase">Sunday Special</span>
                <span className="text-sm font-bold text-white font-mono">9:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base font-black uppercase text-white tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FFE500]" />
              <span>LOCATION & CONTACT</span>
            </h4>
            <p className="text-neutral-300 leading-relaxed">
              {GYM_INFO.address}
            </p>
            <div className="pt-2 space-y-1.5">
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-white hover:text-[#FFE500] font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFE500]" />
                <span>{GYM_INFO.phone}</span>
              </a>
              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline font-bold"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>+91 79776 54950 (WhatsApp)</span>
              </a>
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-400 hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Micro Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Powerplex Fitness. All rights reserved. Seawoods West, Navi Mumbai.</p>
          <p className="flex items-center gap-1">
            <span>Engineered with passion for high performance</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
