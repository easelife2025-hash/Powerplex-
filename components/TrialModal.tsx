'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Phone, CheckCircle2, Dumbbell, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { GYM_INFO } from '@/lib/gymData';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: string;
}

export default function TrialModal({ isOpen, onClose, initialGoal }: TrialModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState(initialGoal || 'Strength & Muscle Building');
  const [slot, setSlot] = useState('Morning (6 AM - 10 AM)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const message = encodeURIComponent(
      `Hello Powerplex Fitness! I'd like to claim my 1-Day Free Trial Pass.\n\nName: ${name || 'Prospective Member'}\nPhone: ${phone || 'Not provided'}\nGoal: ${goal}\nPreferred Time: ${slot}\nLooking forward to working out at Powerplex!`
    );
    window.open(`https://wa.me/917977654950?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-lg w-full bg-[#12151C] border-2 border-[#FFE500]/50 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden z-10"
        >
          {/* Top yellow hazard accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-hazard-stripes-accent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close trial pass modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FFE500]/20 border-2 border-[#FFE500] text-[#FFE500] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-3xl font-black uppercase text-white">
                  PASS RESERVED!
                </h3>
                <p className="text-sm text-neutral-300">
                  Welcome to Powerplex, <span className="text-[#FFE500] font-bold">{name}</span>!
                </p>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                  We have registered your 1-Day Trial request for <strong className="text-white">{slot}</strong>.
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleWhatsAppInstant}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20"
                >
                  <FaWhatsapp className="w-5 h-5 text-black" />
                  <span>Send Confirmation on WhatsApp</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FFE500]/15 text-[#FFE500] text-[11px] font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>1-Day Free Trial Pass</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
                  JOIN POWERPLEX FITNESS
                </h3>
                <p className="text-xs text-neutral-400">
                  Experience our heavy strength floor, turf track, and cardio zone at zero cost before committing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFE500]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFE500]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                      Goal
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs focus:outline-none focus:border-[#FFE500]"
                    >
                      <option value="Strength & Muscle Building">Strength & Muscle</option>
                      <option value="Fat Loss & Toning">Fat Loss & Toning</option>
                      <option value="Cardio & Endurance">Cardio & Stamina</option>
                      <option value="Personal Coaching">Personal Coaching</option>
                      <option value="Functional Turf">Functional Turf</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                      Preferred Slot
                    </label>
                    <select
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs focus:outline-none focus:border-[#FFE500]"
                    >
                      <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                      <option value="Afternoon (11 AM - 3 PM)">Afternoon (11 AM - 3 PM)</option>
                      <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                      <option value="Late Night (8 PM - 11 PM)">Late Night (8 PM - 11 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#FFE500] hover:bg-[#ebd400] text-black font-black uppercase text-xs sm:text-sm tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FFE500]/25 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Claim Free 1-Day Trial Pass</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInstant}
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-[#25D366] font-bold uppercase text-xs tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Instant Booking via WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[10px] text-neutral-400 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> No commitment required
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Dumbbell className="w-3 h-3 text-[#FFE500]" /> Full floor access
                  </span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
