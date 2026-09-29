'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/lib/gymData';

export default function GallerySection() {
  const [filter, setFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const handleNext = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeModalItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveModalItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeModalItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveModalItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0E1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-1 bg-[#FFE500]" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#FFE500] uppercase font-display">
              INSIDE POWERPLEX
            </span>
            <span className="w-6 h-1 bg-[#FFE500]" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
            THE RAW <span className="text-[#FFE500]">ENERGY & ENVIRONMENT</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400">
            Take a look inside Seawoods’ most energized strength and conditioning hub. Built with heavy iron, functional turf, and electric industrial motivation.
          </p>

          {/* Filter Tabs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'strength', label: 'Strength Arena' },
              { id: 'functional', label: 'Functional Turf' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
                  filter === tab.id
                    ? 'bg-[#FFE500] text-black shadow-md shadow-[#FFE500]/20 font-black'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative rounded-2xl overflow-hidden bg-neutral-900 border-2 border-neutral-800 hover:border-[#FFE500]/60 transition-all duration-300 group cursor-pointer shadow-lg"
              onClick={() => setActiveModalItem(item)}
            >
              <div className="aspect-[4/3] relative w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Hover Overlay Button */}
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/70 backdrop-blur-md border border-neutral-700 text-[#FFE500] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Card Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FFE500]">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFE500] transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-300 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {activeModalItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-[#12151C] rounded-2xl border-2 border-neutral-700 overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-4 sm:px-6 bg-black/60 flex items-center justify-between border-b border-neutral-800">
                  <div>
                    <span className="text-xs font-bold text-[#FFE500] uppercase tracking-wider">
                      {activeModalItem.category} Zone
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {activeModalItem.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    aria-label="Close image modal"
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Main Image */}
                <div className="relative aspect-[16/10] w-full max-h-[65vh] bg-black">
                  <Image
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />

                  {/* Nav Arrows */}
                  <button
                    onClick={handlePrev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 border border-neutral-700 hover:border-[#FFE500] text-white hover:text-[#FFE500] transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 border border-neutral-700 hover:border-[#FFE500] text-white hover:text-[#FFE500] transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Footer Caption */}
                <div className="p-4 sm:px-6 bg-neutral-900/90 text-sm text-neutral-300 flex items-center justify-between">
                  <span>{activeModalItem.caption}</span>
                  <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
                    Powerplex Fitness · Seawoods West
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
