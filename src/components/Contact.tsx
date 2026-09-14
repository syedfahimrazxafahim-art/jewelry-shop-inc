import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, JEWELRY_CATEGORIES } from '../data/businessData';
import { ContactFormData } from '../types';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Custom Jewelry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-[#080808] text-white relative">
      {/* Top thin gold border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#D4AF37]/25" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal tracking-wide text-white uppercase leading-tight mb-2">
                {BUSINESS_INFO.name}
              </h2>

              <p className="font-sans-luxury text-sm text-[#C8C8C8] font-light tracking-wide uppercase mb-4">
                {BUSINESS_INFO.location}
              </p>

              {/* Thin gold divider */}
              <div className="w-12 h-[1.5px] bg-[#D4AF37] mb-5" aria-hidden="true" />

              {/* Direct Details List */}
              <div className="space-y-4 mb-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-[#171717] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans-luxury text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block">
                      Telephone
                    </span>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="font-sans-luxury text-base text-white hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-[#171717] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans-luxury text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block">
                      Direct Email
                    </span>
                    <a
                      href={BUSINESS_INFO.emailHref}
                      className="font-sans-luxury text-base text-white hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-[#171717] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans-luxury text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block">
                      Instagram
                    </span>
                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans-luxury text-base text-white hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    >
                      {BUSINESS_INFO.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-[#171717] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans-luxury text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block">
                      Facebook
                    </span>
                    <a
                      href={BUSINESS_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans-luxury text-base text-white hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    >
                      {BUSINESS_INFO.facebookHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#D4AF37]/20">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#F1D77A] text-[#080808] font-sans-luxury text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.25)] focus:outline-none"
              >
                Call Now
              </a>
              <a
                href={BUSINESS_INFO.emailHref}
                className="px-5 py-2.5 border border-[#D4AF37]/40 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] font-sans-luxury text-xs tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none"
              >
                Email Diarays
              </a>
            </div>
          </div>

          {/* Right Column: Accessible Inquiry Form */}
          <div className="lg:col-span-7 bg-[#171717] border border-[#D4AF37]/30 p-6 sm:p-7 relative shadow-xl">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white uppercase tracking-wider mb-5 font-normal">
              Inquire With Us
            </h3>

            {submitted ? (
              <div className="p-6 bg-[#080808] border border-[#D4AF37]/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto stroke-[1.5]" />
                <h4 className="font-serif-luxury text-2xl text-white uppercase tracking-wider">
                  Inquiry Received
                </h4>
                <p className="font-sans-luxury text-sm text-[#C8C8C8] max-w-md mx-auto font-light leading-relaxed">
                  Thank you for reaching out to {BUSINESS_INFO.name}. We will connect with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-5 py-2 text-xs font-sans-luxury tracking-[0.2em] uppercase border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#080808] transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block font-sans-luxury text-xs tracking-[0.2em] uppercase text-[#C8C8C8] mb-1.5">
                    Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full bg-[#080808] border border-[#D4AF37]/30 px-3.5 py-2.5 text-white font-sans-luxury text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                  />
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block font-sans-luxury text-xs tracking-[0.2em] uppercase text-[#C8C8C8] mb-1.5">
                      Phone Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 1 212-884-1499"
                      className="w-full bg-[#080808] border border-[#D4AF37]/30 px-3.5 py-2.5 text-white font-sans-luxury text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block font-sans-luxury text-xs tracking-[0.2em] uppercase text-[#C8C8C8] mb-1.5">
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full bg-[#080808] border border-[#D4AF37]/30 px-3.5 py-2.5 text-white font-sans-luxury text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Service / Inquiry Selection */}
                <div>
                  <label htmlFor="contact-service" className="block font-sans-luxury text-xs tracking-[0.2em] uppercase text-[#C8C8C8] mb-1.5">
                    Service / Inquiry <span className="text-[#D4AF37]">*</span>
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#080808] border border-[#D4AF37]/30 px-3.5 py-2.5 text-white font-sans-luxury text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                  >
                    {JEWELRY_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat} Consultation
                      </option>
                    ))}
                    <option value="General Inquiry">General Jewelry Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block font-sans-luxury text-xs tracking-[0.2em] uppercase text-[#C8C8C8] mb-1.5">
                    Message <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the design, occasion, or piece you have in mind..."
                    className="w-full bg-[#080808] border border-[#D4AF37]/30 px-3.5 py-2.5 text-white font-sans-luxury text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#F1D77A] text-[#080808] font-sans-luxury text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  <Send className="w-4 h-4" />
                  <span>CONTACT US</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
