'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, AlertCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { GYM_INFO } from '@/lib/gymData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Muscle & Strength Building',
    slot: 'Evening (5:00 PM – 8:00 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate immediate processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Powerplex Fitness! I'm interested in joining.\n\nName: ${formData.name || 'Visitor'}\nPhone: ${formData.phone || 'Not provided'}\nGoal: ${formData.goal}\nPreferred Slot: ${formData.slot}\nNote: ${formData.message || 'Looking forward to visiting!'}`
    );
    window.open(`https://wa.me/917977654950?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B0C10] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-hazard-stripes opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-1 bg-[#FFE500]" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#FFE500] uppercase font-display">
              GET IN TOUCH
            </span>
            <span className="w-6 h-1 bg-[#FFE500]" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
            CONNECT WITH <span className="text-[#FFE500]">POWERPLEX FITNESS</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400">
            Have questions about membership packages, certified personal coaching, or want to drop in for a walk-in gym tour? We’re here to help.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#12151C] border border-neutral-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFE500]/10 flex items-center justify-center text-[#FFE500] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Direct Phone Line
                  </h3>
                  <a
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="text-xl sm:text-2xl font-display font-black text-white hover:text-[#FFE500] transition-colors"
                  >
                    {GYM_INFO.phone}
                  </a>
                </div>
              </div>
              <p className="text-xs text-neutral-400">
                Call floor staff anytime between 6:00 AM and 11:00 PM for instant answers.
              </p>
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFE500] hover:underline"
              >
                Tap to Call Now →
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#12151C] border border-[#25D366]/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Official WhatsApp
                  </h3>
                  <a
                    href={GYM_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-display font-black text-[#25D366] hover:underline"
                  >
                    +91 79776 54950
                  </a>
                </div>
              </div>
              <p className="text-xs text-neutral-400">
                Quick responses for trial passes, fee inquiries, and personal training slots.
              </p>
              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
              >
                Start WhatsApp Chat →
              </a>
            </div>

            {/* Hours Summary Card */}
            <div className="p-6 rounded-2xl bg-[#12151C] border border-neutral-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white shrink-0">
                  <Clock className="w-6 h-6 text-[#FFE500]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Gym Hours
                  </h3>
                  <p className="text-sm font-bold text-white">
                    Mon–Sat: 6:00 AM – 11:00 PM
                  </p>
                  <p className="text-xs text-neutral-400">
                    Sunday: 9:00 AM – 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Address Summary */}
            <div className="p-6 rounded-2xl bg-[#12151C] border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFE500] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Visit In Person</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {GYM_INFO.address}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Booking & Inquiry Form */}
          <div className="lg:col-span-7 bg-[#12151C] rounded-2xl border-2 border-neutral-800 p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
                    INQUIRY RECEIVED!
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-[#FFE500]">{formData.name}</strong>. Our front desk team will contact you at <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 max-w-md mx-auto space-y-2">
                  <p>Want an instant confirmation right now?</p>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-black font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-all"
                  >
                    <FaWhatsapp className="w-5 h-5 text-black" />
                    <span>Send Details directly on WhatsApp</span>
                  </button>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-neutral-400 hover:text-white underline pt-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
                    REQUEST A CALL / FREE TRIAL
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill out the form below and step into Powerplex Fitness this week.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFE500] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFE500] transition-colors"
                    />
                  </div>
                </div>

                {/* Primary Fitness Goal */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#FFE500] transition-colors cursor-pointer"
                  >
                    <option value="Muscle & Strength Building">Muscle & Strength Building (Hypertrophy / Power)</option>
                    <option value="Fat Loss & Body Recomposition">Fat Loss & Body Recomposition</option>
                    <option value="Cardio & Endurance Conditioning">Cardio & Endurance Conditioning</option>
                    <option value="Personal Coaching (1-on-1)">Personal Coaching (1-on-1 Dedicated Trainer)</option>
                    <option value="Functional Fitness & Turf Training">Functional Fitness & Turf Training</option>
                  </select>
                </div>

                {/* Preferred Workout Time Slot */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    Preferred Workout Time Slot
                  </label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#FFE500] transition-colors cursor-pointer"
                  >
                    <option value="Early Morning (6:00 AM – 9:00 AM)">Early Morning (6:00 AM – 9:00 AM)</option>
                    <option value="Midday (10:00 AM – 2:00 PM)">Midday (10:00 AM – 2:00 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                    <option value="Late Night (8:00 PM – 11:00 PM)">Late Night (8:00 PM – 11:00 PM)</option>
                  </select>
                </div>

                {/* Message / Questions */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    Any specific questions or injuries? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about previous workout experience, health goals, or preferred trial date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFE500] transition-colors resize-none"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-4 px-6 rounded-xl bg-[#FFE500] hover:bg-[#ebd400] text-black font-black uppercase text-xs sm:text-sm tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-lg shadow-[#FFE500]/20 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Details</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-black uppercase text-xs sm:text-sm tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 cursor-pointer"
                  >
                    <FaWhatsapp className="w-5 h-5 text-black" />
                    <span>WhatsApp Directly</span>
                  </button>
                </div>

                <p className="text-[11px] text-neutral-500 text-center">
                  🔒 We respect your privacy. No spam. You will only receive information related to your Powerplex inquiry.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
