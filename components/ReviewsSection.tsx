'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS_LIST, GYM_INFO } from '@/lib/gymData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0B0C10] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-radial from-[#FFE500]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Big Google Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-1 bg-[#FFE500]" />
              <span className="text-xs sm:text-sm font-black tracking-widest text-[#FFE500] uppercase font-display">
                MEMBER EXPERIENCES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              REAL RESULTS. <span className="text-[#FFE500]">VERIFIED VOICES.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Read how everyday professionals, lifters, and athletes in Seawoods transformed their fitness lifestyle at Powerplex.
            </p>
          </div>

          {/* Google Verified Review Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12151C] border-2 border-neutral-800 shadow-xl flex items-center gap-4 shrink-0">
            <div className="w-14 h-14 rounded-xl bg-[#FFE500] text-black font-display font-black text-2xl flex items-center justify-center shadow-lg shadow-[#FFE500]/20">
              4.6
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#FFE500]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFE500]" />
                ))}
              </div>
              <p className="text-xs font-bold text-white mt-1">
                Google Customer Rating
              </p>
              <p className="text-[11px] text-neutral-400">
                Based on {GYM_INFO.totalReviews}+ Verified Local Reviews
              </p>
            </div>
            <a
              href={GYM_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Google Reviews"
              className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-[#FFE500] text-neutral-300 hover:text-[#FFE500] transition-colors ml-2"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_LIST.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#12151C] border border-neutral-800 hover:border-[#FFE500]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#FFE500]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFE500]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-700 group-hover:text-[#FFE500]/40 transition-colors" />
                </div>

                {/* Review Highlight */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  &ldquo;{review.highlight}&rdquo;
                </h3>

                {/* Review Comment */}
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {review.comment}
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#FFE500]/50 bg-neutral-800">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{review.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <p className="text-[11px] text-neutral-400">
                      {review.role} · {review.location}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-neutral-500 font-mono">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Review CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href={GYM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-[#FFE500] text-neutral-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Read All {GYM_INFO.totalReviews}+ Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#FFE500]" />
          </a>
        </div>

      </div>
    </section>
  );
}
