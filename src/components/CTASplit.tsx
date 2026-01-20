"use client";

interface CTASplitProps {
  onContactClick: () => void;
}

/**
 * CTA Split section with two columns and center video
 * Matching reference design from Alzumorod
 */
export default function CTASplit({ onContactClick }: CTASplitProps) {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Left Image */}
        <div className="relative h-64 md:h-auto">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80')`,
            }}
          />
        </div>

        {/* Left CTA - Need Services */}
        <div className="bg-accent py-12 px-8 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">
            Besoin de nos services ?
          </h3>
          <p className="text-primary/70 text-sm mb-4">
            Contactez-nous pour discuter de vos besoins en commerce et logistique.
          </p>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Nous contacter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Center - Video/Image with Play Button */}
        <div className="relative h-64 md:h-auto">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-primary/30" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right CTA - Discuss with Agents */}
        <div className="bg-primary py-12 px-8 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Discuter avec nos agents
          </h3>
          <p className="text-white/70 text-sm mb-4">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>
          <a
            href="tel:+25769780222"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            Nous appeler
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
