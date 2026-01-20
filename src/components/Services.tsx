"use client";

import { useState, useEffect } from "react";

/**
 * Service data with images and icons - 6 domains as per spec
 */
const services = [
  {
    title: "Équipements de Télécommunication",
    description:
      "Fourniture d'antennes relais de télécommunication, équipements IT et infrastructures réseau. Solutions complètes pour opérateurs et entreprises.",
    image: "https://images.unsplash.com/photo-1594915440248-1e419eba6611?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: "Intrants Agricoles",
    description:
      "Fourniture d'engrais, semences et produits phytosanitaires. Respect des spécifications internationales et calendriers agricoles pour une agriculture performante.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Matériel Réseaux MT/BT",
    description:
      "Fourniture du matériel d'entretien, de renforcement et d'extension des réseaux moyenne et basse tension. Équipements électriques certifiés.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Transport International",
    description:
      "Transport international des marchandises par voie terrestre, maritime et aérienne. Gestion douanière et logistique de bout en bout.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Location d'Engins de Construction",
    description:
      "Location d'engins de construction et de travaux publics : pelleteuses, bulldozers, grues et camions. Maintenance et support technique inclus.",
    image: "https://images.unsplash.com/photo-1584186118422-895ef18c418d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "BTP - Bâtiment et Travaux Publics",
    description:
      "Réalisation de travaux de construction et d’électrification, avec étude, fourniture, installation et mise en service des infrastructures.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

/**
 * Services section with carousel display and image cards
 * Matching reference design from Alzumorod
 */
export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 to show duplicated first slide
  const [cardsPerView, setCardsPerView] = useState(1);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4); // lg screens: 4 cards
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2); // sm screens: 2 cards
      } else {
        setCardsPerView(1); // mobile: 1 card
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Create infinite loop by duplicating services
  const extendedServices = [...services, ...services, ...services]; // Triple the array for seamless infinite scroll
  const totalSlides = Math.ceil(services.length / cardsPerView);

  // Auto-scroll functionality with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        // Reset to middle when reaching the end of the duplicated array
        if (next >= services.length + totalSlides) {
          return totalSlides;
        }
        return next;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      // Reset to middle when reaching the end of the duplicated array
      if (next >= services.length + totalSlides) {
        return totalSlides;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = prev - 1;
      // Reset to middle when reaching the beginning of the duplicated array
      if (prevSlide < 0) {
        return services.length - cardsPerView;
      }
      return prevSlide;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            {/* Section Badge */}
            <div className="section-badge">
              Ce que nous offrons
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Nos Services
            </h2>
          </div>

          {/* View All Button */}
          <a
            href="#projets"
            className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent text-primary hover:text-primary font-semibold px-6 py-3 rounded-lg transition-all group"
          >
            Voir tout
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)` }}
            >
              {extendedServices.map((service, index) => (
                <article
                  key={`${service.title}-${index}`}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                      <div className="bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow group h-full">
                        {/* Image with overlapping icon */}
                        <div className="relative">
                          <div className="h-48 overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>

                          {/* Overlapping Icon Badge */}
                          <div className="absolute -bottom-6 left-6">
                            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-white shadow-lg">
                              {service.icon}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 pt-10">
                          <h3 className="text-xl font-bold text-primary mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted text-sm leading-relaxed mb-4">
                            {service.description}
                          </p>

                          {/* Read More Link */}
                          <a href="#contact" className="read-more-link">
                            En savoir plus
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-200 z-10"
            aria-label="Previous services"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-200 z-10"
            aria-label="Next services"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  Math.floor(currentSlide % totalSlides) === index
                    ? 'bg-accent'
                    : 'bg-muted'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
