'use client';

import React, { useState } from 'react';
import { PROMANAGE_CONTACT, formatWhatsAppEnquiryDraft } from '@/lib/whatsapp';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';

export const EnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'Interior Design',
    location: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasGenerated, setHasGenerated] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Please indicate your project location (e.g., PJ SS2, Lake City, Mont Kiara).';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please briefly describe your requirements or property type.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinueOnWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const draft = formatWhatsAppEnquiryDraft(formData);
    const whatsappUrl = `https://wa.me/${PROMANAGE_CONTACT.phoneRaw}?text=${encodeURIComponent(draft)}`;
    setHasGenerated(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details & Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs sm:text-sm font-bold tracking-widest text-[#8A6A2C] uppercase">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2722] tracking-tight leading-tight text-balance">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-[18px] sm:text-[20px] text-stone-700 leading-relaxed font-normal">
              Whether you are planning a home renovation, office fit-out, or structural extension, reach out directly to Benedict Tan for practical advice and scheduling.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#27482A] text-white shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Phone & WhatsApp
                  </div>
                  <a
                    href={`tel:${PROMANAGE_CONTACT.phoneRaw}`}
                    className="text-[19px] font-bold text-stone-900 hover:text-[#27482A] block underline"
                  >
                    {PROMANAGE_CONTACT.phoneDisplay}
                  </a>
                  <div className="text-sm text-stone-600 mt-0.5">
                    Benedict Tan, Managing Director
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#27482A] text-white shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${PROMANAGE_CONTACT.email}`}
                    className="text-[17px] sm:text-[18px] font-bold text-stone-900 hover:text-[#27482A] break-all underline"
                  >
                    {PROMANAGE_CONTACT.email}
                  </a>
                  <div className="text-sm text-stone-600 mt-0.5">
                    Official company correspondence
                  </div>
                </div>
              </div>

              {/* Office & Address */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#27482A] text-white shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Registered Office
                  </div>
                  <p className="text-[17px] font-bold text-stone-900 leading-snug">
                    {PROMANAGE_CONTACT.address}
                  </p>
                  <a
                    href={PROMANAGE_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#27482A] hover:underline mt-2"
                  >
                    <span>View Location on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Legal Entity note */}
            <div className="p-4 rounded-lg bg-stone-100 text-xs text-stone-600 space-y-1">
              <div><strong>Company:</strong> {PROMANAGE_CONTACT.companyName}</div>
              <div><strong>Registration No:</strong> {PROMANAGE_CONTACT.registrationNumber}</div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-stone-300 bg-[#FAF8F5] p-6 sm:p-8 shadow-md">
              <div className="border-b border-stone-200 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-[#27482A]" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    WhatsApp Enquiry Form
                  </h3>
                </div>
                <p className="text-[16px] text-stone-600 mt-1">
                  Fill in your project details below. Clicking &quot;Continue on WhatsApp&quot; opens WhatsApp with your pre-formatted draft to send directly to Benedict Tan.
                </p>
              </div>

              <form onSubmit={handleContinueOnWhatsApp} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="enquiry-name" className="block text-[17px] font-bold text-stone-900 mb-1.5">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Mr. Wong / Sarah"
                    className={`w-full min-h-[48px] px-4 py-2.5 rounded-lg border text-[18px] bg-white text-stone-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047] ${
                      errors.name ? 'border-red-500 bg-red-50/50' : 'border-stone-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="enquiry-service" className="block text-[17px] font-bold text-stone-900 mb-1.5">
                    Service Required <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="enquiry-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-stone-300 text-[18px] bg-white text-stone-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                  >
                    <option value="Interior Design">Interior Design (Space Planning & 3D Visuals)</option>
                    <option value="Renovation & Repairs">Renovation & Repairs (Kitchen, Bath & Carpentry)</option>
                    <option value="Construction Works">Construction Works (Structural Additions & Extensions)</option>
                    <option value="Project Management">Project Management & Supervision</option>
                    <option value="Full House / Turnkey Package">Full House / Turnkey Renovation Package</option>
                    <option value="Commercial / Office Fit-Out">Commercial / Office Fit-Out</option>
                    <option value="General Enquiry">General Consultation</option>
                  </select>
                </div>

                {/* Project Location */}
                <div>
                  <label htmlFor="enquiry-location" className="block text-[17px] font-bold text-stone-900 mb-1.5">
                    Project Location / Area <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="enquiry-location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => {
                      setFormData({ ...formData, location: e.target.value });
                      if (errors.location) setErrors({ ...errors, location: '' });
                    }}
                    placeholder="e.g. Petaling Jaya SS2, Bangsar South, Subang, Rawang"
                    className={`w-full min-h-[48px] px-4 py-2.5 rounded-lg border text-[18px] bg-white text-stone-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047] ${
                      errors.location ? 'border-red-500 bg-red-50/50' : 'border-stone-300'
                    }`}
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.location}</span>
                    </p>
                  )}
                </div>

                {/* Optional Budget */}
                <div>
                  <label htmlFor="enquiry-budget" className="block text-[17px] font-bold text-stone-900 mb-1.5">
                    Estimated Budget Range <span className="text-xs font-normal text-stone-500">(Optional)</span>
                  </label>
                  <input
                    id="enquiry-budget"
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g. RM 50,000 - RM 100,000 or Open for Discussion"
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-stone-300 text-[18px] bg-white text-stone-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="enquiry-message" className="block text-[17px] font-bold text-stone-900 mb-1.5">
                    Project Details / Requirements <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="enquiry-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Briefly describe your property (e.g. 3-bedroom condo / double-storey landed), priority areas (kitchen carpentry, tiling, extension), and target completion timeframe."
                    className={`w-full p-4 rounded-lg border text-[18px] bg-white text-stone-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047] leading-relaxed ${
                      errors.message ? 'border-red-500 bg-red-50/50' : 'border-stone-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Form Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 min-h-[52px] px-8 py-3.5 rounded-lg bg-[#27482A] text-white text-[19px] font-bold shadow-md hover:bg-[#1C351E] active:scale-[0.99] transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                  >
                    <MessageSquare className="w-5 h-5 text-amber-300" aria-hidden="true" />
                    <span>Continue on WhatsApp</span>
                  </button>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-normal text-center">
                    Note: Clicking &quot;Continue on WhatsApp&quot; will open WhatsApp with your project details formatted as a ready-to-send draft for Benedict Tan. You can review and edit before sending. No data is stored on external servers.
                  </p>
                </div>

                {hasGenerated && (
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      WhatsApp draft prepared! If WhatsApp did not open automatically,{' '}
                      <a
                        href={`https://wa.me/${PROMANAGE_CONTACT.phoneRaw}?text=${encodeURIComponent(formatWhatsAppEnquiryDraft(formData))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline"
                      >
                        click here to open your draft
                      </a>.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
