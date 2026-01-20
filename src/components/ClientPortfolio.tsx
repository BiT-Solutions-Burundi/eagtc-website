"use client";

/**
 * Client Portfolio section - Partners section
 * Client logos have been moved to Hero marquee
 */
export default function ClientPortfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Links Section */}
        <div className="pt-4">
          <h3 className="text-xl font-bold text-primary text-center mb-8">
            Nos Partenaires
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Partner links */}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-cream hover:bg-accent/10 text-primary px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              GROUPE EIS-EKA
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-cream hover:bg-accent/10 text-primary px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              SOTEM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
