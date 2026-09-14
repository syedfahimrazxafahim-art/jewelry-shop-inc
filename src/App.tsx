import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Collections } from './components/Collections';
import { CustomDesigns } from './components/CustomDesigns';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { ReviewSlider } from './components/ReviewSlider';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { JewelryCategory } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [galleryCategory, setGalleryCategory] = useState<JewelryCategory | 'All'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [contactService, setContactService] = useState<string>('Custom Jewelry');

  // Handle section scrolling and update active section
  const handleNavigate = (href: string) => {
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId);
    }
  };

  // Scroll listener for active navigation highlighting
  useEffect(() => {
    const sections = ['home', 'about', 'collections', 'custom-designs', 'gallery', 'reviews', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Map sub-sections to the 4 main navigation keys (home, about, gallery, contact)
            if (sectionId === 'collections' || sectionId === 'custom-designs') {
              setActiveSection('gallery');
            } else if (sectionId === 'reviews') {
              setActiveSection('about');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectCategoryFromCollections = (category: JewelryCategory) => {
    setGalleryCategory(category);
    handleNavigate('#gallery');
  };

  const handleOpenLightboxFromCollections = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCustomInquiry = () => {
    setContactService('Custom Jewelry');
    handleNavigate('#contact');
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#D4AF37] selection:text-[#080808]">
      {/* Minimal Luxury Header with Centered Logo */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => handleNavigate('#gallery')}
          onCustomClick={handleCustomInquiry}
        />

        {/* 2. About Section */}
        <About onLearnMore={() => handleNavigate('#collections')} />

        {/* 3. Jewelry Collections Showcase (Rings, Necklaces, Bracelets, Earrings, Custom) */}
        <Collections
          onSelectCategory={handleSelectCategoryFromCollections}
          onOpenLightbox={handleOpenLightboxFromCollections}
        />

        {/* 4. Custom Designs Atelier (Sophisticated Deep-Black Section) */}
        <CustomDesigns onCustomInquiryClick={handleCustomInquiry} />

        {/* 5. Why Choose Diarays (4 Elegant Feature Blocks) */}
        <WhyChooseUs />

        {/* 6. Curated Gallery — Exactly 21 Website Images with Lightbox */}
        <Gallery
          selectedCategory={galleryCategory}
          onCategoryChange={setGalleryCategory}
          lightboxIndex={lightboxIndex}
          onSetLightboxIndex={setLightboxIndex}
        />

        {/* 7. Reviews Section (Accessible Testimonial Slider with Clear Sample Notice) */}
        <ReviewSlider />

        {/* 8. Contact Section (Official Information & Accessible Inquiry Form) */}
        <Contact preselectedService={contactService} />
      </main>

      {/* 9. Compact Luxury Footer with Social Links */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
