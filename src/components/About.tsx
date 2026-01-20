"use client";

/**
 * About section with overlapping images and feature cards
 * Matching reference design from Alzumorod
 */
export default function About() {
  return (
    <section id="apropos" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Overlapping Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80"
                alt="Logistique EAGTC"
                className="w-full h-full object-cover"
              />
              </div>
            </div>

            {/* Secondary Image - Overlapping */}
            <div className="absolute -bottom-8 -right-8 z-20 w-64 h-48 rounded-2xl overflow-hidden shadow-xl hidden md:block">
              
              <img
                  src="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Travailleur EAGTC"
                  // className="w-full h-[400px] object-cover"
                  className="w-full h-full object-cover"
                />
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 z-30 bg-primary text-white px-6 py-4 rounded-xl shadow-lg">
              <div className="text-center">
                <span className="text-sm text-white/70">Nous avons</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-accent">17</span>
                  <span className="text-lg">ans</span>
                </div>
                <span className="text-sm text-white/70">d&apos;expérience</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            {/* Section Badge */}
            <div className="section-badge">
              À propos de l&apos;entreprise
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-primary leading-tight mb-6">
            Un acteur de référence du commerce général et des services techniques en Afrique de l&apos;Est
            </h2>

            {/* Description */}
            <p className="text-muted leading-relaxed mb-8">
              Fondée en 2009, East African General Trade Company (EAGTC) est une entreprise de droit burundais spécialisée dans le commerce général, import-export ainsi que dans la fourniture des biens et services. Avec son siège à Bujumbura et dans son ambition régionale, EAGTC dispose d&apos;une filiale en République Démocratique du Congo. Notre expérience couvre l&apos;approvisionnement industriel, les travaux techniques, la construction et l&apos;électrification ainsi que la coordination logistique de projets à grande échelle.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-cream-dark rounded-xl p-5 flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Tarifs compétitifs</h4>
                  <p className="text-sm text-muted">Prix justes et transparents</p>
                </div>
              </div>

              <div className="bg-cream-dark rounded-xl p-5 flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Livraisons ponctuelles</h4>
                  <p className="text-sm text-muted">Respect des délais garantis</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Optional Video Button */}
              <button className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center hover:bg-accent hover:text-primary text-accent transition-all group">
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
