'use client';

import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { GYM_INFO } from '@/lib/gymData';

export default function FloatingContactButtons() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside aria-label="Quick Contact Actions" className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Call Button */}
      <div className="relative group flex items-center">
        {/* Tooltip on hover */}
        <span className="hidden sm:inline-block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-md border border-neutral-700 text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Call: {GYM_INFO.phone}
        </span>

        <a
          href={`tel:${GYM_INFO.phoneRaw}`}
          aria-label={`Call Powerplex Fitness at ${GYM_INFO.phone}`}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FFE500] hover:bg-[#e6ce00] text-black flex items-center justify-center shadow-xl shadow-black/50 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-black"
        >
          <Phone className="w-6 h-6 stroke-[2.5]" />
        </a>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="relative group flex items-center">
        {/* Tooltip on hover */}
        <span className="hidden sm:inline-block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-md border border-neutral-700 text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat on WhatsApp
        </span>

        {/* Pulse beacon effect behind WhatsApp */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10" />

        <a
          href={GYM_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Powerplex Fitness on WhatsApp"
          className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9" />
        </a>
      </div>
    </aside>
  );
}
