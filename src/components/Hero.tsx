"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroProps {
  onContactClick: () => void;
}

// Client logos for the marquee
const clientLogos = [
  { src: "/images/fdnb-removebg-preview.png", alt: "FDNB" },
  { src: "/images/lumitel-removebg-preview.png", alt: "Lumitel" },
  { src: "/images/mdnac-removebg-preview.png", alt: "MDNAC" },
  { src: "/images/onatour-removebg-preview.png", alt: "ONATOUR" },
  { src: "/images/pnb-removebg-preview.png", alt: "PNB" },
  { src: "/images/prrpb-removebg-preview (4).png", alt: "PRRPB" },
  { src: "/images/rEGIDESO-removebg-preview.png", alt: "REGIDESO" },
];

/**
 * Hero section with background image, left content, and request form card
 * Matching reference design from Alzumorod
 */
export default function Hero({ onContactClick }: HeroProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSuccess(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", phone: "", company: "" });
    }, 3000);
  };

  return (
    <section
      id="accueil"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48">
        <div className="grid lg:grid-cols-4 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 text-white">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-2xl text-accent">👋</span>
              <span className="text-white/80 text-sm">Bienvenue chez East African General Trade Company</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6" style={{ fontSize: '47px' }}>
              {/* <span className="text-accent">East African General Trade Company</span> <span className="text-white/80">–</span>  */}
              Votre partenaire de confiance en supply chain et services industriels en Afrique de l&apos;Est.
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Entreprise établie depuis 2009 offrant expertise en commerce général, approvisionnement industriel, travaux techniques, télécommunications et services logistiques.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
              >
                Nous contacter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Phone with icon */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div id="portfolio">
                  <p className="text-white/60 text-sm">Appelez-nous</p>
                  <a href="tel:+25769780222" className="text-white font-semibold hover:text-accent transition-colors">
                    +257 69 780 222
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          {/* <div className="lg:col-span-1 lg:justify-self-end w-full max-w-md">
            <div className="bg-card-dark rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Demande de devis</h3>
              
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white">Merci ! Nous vous contacterons sous 24h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-1">Nom</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-1">Email <span className="text-accent">*</span></label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-1">Téléphone <span className="text-accent">*</span></label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+257 XX XXX XXX"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-1">Entreprise</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nom entreprise"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-dark text-primary font-semibold py-4 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi...
                      </>
                    ) : (
                      "Soumettre"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div> */}
        </div>
      </div>

      {/* Client Logos Section - Full Width */}
      <div  className="absolute bottom-0 left-0 right-0 w-full py-6 backdrop-blur-xs bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h3 className="text-white text-left text-xl sm:text-2xl mb-6">
            Ils nous ont fait confiance
          </h3>
        </div>
        
        {/* Logos Marquee */}
        <div className="overflow-hidden">
          <div className="marquee-track">
            {/* First set of logos */}
            {clientLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="shrink-0 mx-10 w-24 h-14 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={96}
                  height={56}
                  className="w-full h-full object-contain grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicated set for seamless loop */}
            {clientLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="shrink-0 mx-10 w-24 h-14 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={96}
                  height={56}
                  className="w-full h-full object-contain grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
