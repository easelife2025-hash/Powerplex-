'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import HoursAndLocation from '@/components/HoursAndLocation';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import TrialModal from '@/components/TrialModal';

export default function HomePage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string | undefined>(undefined);

  const handleOpenTrialModal = (goal?: string) => {
    setSelectedGoal(goal || 'Strength & Muscle Building');
    setTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setTrialModalOpen(false);
    setSelectedGoal(undefined);
  };

  return (
    <div className="relative min-h-screen bg-[#0B0C10] text-[#F3F4F6] selection:bg-[#FFE500] selection:text-black">
      {/* Main Top Navigation */}
      <Navbar onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Main Page Flow */}
      <main>
        {/* Full-width Hero Banner with 4 Auto-looping Motivational Gym Slides */}
        <HeroSlider />

        {/* About Powerplex Fitness */}
        <AboutSection onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Core Disciplines / Services */}
        <ServicesSection onSelectService={(serviceName) => handleOpenTrialModal(serviceName)} />

        {/* Why Choose Us */}
        <WhyChooseUs onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Inside Powerplex Gallery */}
        <GallerySection />

        {/* Verified Google Reviews */}
        <ReviewsSection />

        {/* Operating Hours & Location Map */}
        <HoursAndLocation />

        {/* Contact & Inquiry Section */}
        <ContactSection />

        {/* High-Impact Final Call to Action */}
        <FinalCTA onOpenTrialModal={() => handleOpenTrialModal()} />
      </main>

      {/* Main Footer */}
      <Footer />

      {/* WhatsApp Icon and Call Icon at Right Bottom */}
      <FloatingContactButtons />

      {/* Interactive 1-Day Trial / Membership Modal */}
      <TrialModal
        key={selectedGoal || 'default-modal'}
        isOpen={trialModalOpen}
        onClose={handleCloseTrialModal}
        initialGoal={selectedGoal}
      />
    </div>
  );
}
