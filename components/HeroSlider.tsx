'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, MapPin, Flame } from 'lucide-react';
import { HERO_SLIDES, GYM_INFO } from '@/lib/gymData';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      aria-label="Powerplex Fitness Hero Banner"
      className="relative w-full h-[88vh] min-h-[580px] max-h-[820px] bg-black overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Deep dark cinematic gym overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-black/60 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10] via-black/50 to-transparent" />
          {/* Subtle industrial caution stripes accent line with slow moving animation at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-hazard-stripes-accent animate-moving-stripes" />
          {/* Ambient horizontal moving laser line at bottom border */}
          <div className="absolute bottom-1.5 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#FFE500] to-transparent animate-moving-line" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8 sm:py-12">
        {/* Top Floating Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#FFE500]/40 text-xs text-white shadow-xl">
            <span className="flex text-[#FFE500]">
              <Star className="w-3.5 h-3.5 fill-[#FFE500]" />
              <Star className="w-3.5 h-3.5 fill-[#FFE500]" />
              <Star className="w-3.5 h-3.5 fill-[#FFE500]" />
              <Star className="w-3.5 h-3.5 fill-[#FFE500]" />
              <Star className="w-3.5 h-3.5 fill-[#FFE500] fill-opacity-70" />
            </span>
            <span className="font-extrabold text-[#FFE500]">4.6 ★</span>
            <span className="text-neutral-300">({GYM_INFO.totalReviews} Google Reviews)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 text-xs text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-[#FFE500]" />
            <span>Seawoods West, Nerul, Navi Mumbai</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 text-xs text-neutral-300">
            <Flame className="w-3.5 h-3.5 text-[#FFE500]" />
            <span>6:00 AM – 11:00 PM</span>
          </div>
        </motion.div>

        {/* Center Motivational Slide Typography */}
        <div className="my-auto max-w-4xl pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Category Tagline */}
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-8 bg-[#FFE500]" />
                <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#FFE500]">
                  {slide.tagline}
                </span>
              </div>

              {/* Bold Required Motivational Headline */}
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92]">
                {slide.headline.split('.').map((part, i) => (
                  <span key={i} className="block last:text-[#FFE500]">
                    {part.trim() ? `${part.trim()}.` : ''}
                  </span>
                ))}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation & Slide Indicators */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Slide Progress Bars */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${s.headline}`}
                className="group relative flex-1 sm:w-28 text-left py-2 focus:outline-none"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold tracking-wider uppercase transition-colors ${
                    currentSlide === idx ? 'text-[#FFE500]' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-[9px] hidden lg:inline font-mono ${
                    currentSlide === idx ? 'text-white' : 'text-neutral-600'
                  }`}>
                    {idx === 0 ? 'Results' : idx === 1 ? 'Limits' : idx === 2 ? 'Strong' : 'Transform'}
                  </span>
                </div>
                <div className="h-1 sm:h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  {currentSlide === idx ? (
                    <motion.div
                      layoutId="activeSlideIndicator"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: isPaused ? 0 : 5.5, ease: 'linear' }}
                      className="h-full bg-[#FFE500] rounded-full"
                    />
                  ) : (
                    <div className="h-full w-0 group-hover:w-full bg-neutral-600 transition-all duration-300 rounded-full" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Slide Prev/Next Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-2.5 rounded-lg bg-black/60 border border-neutral-700 hover:border-[#FFE500] text-white hover:text-[#FFE500] transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-2.5 rounded-lg bg-black/60 border border-neutral-700 hover:border-[#FFE500] text-white hover:text-[#FFE500] transition-all backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
