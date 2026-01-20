"use client";

/**
 * Features data for the 2x2 grid
 * Updated with EAGTC expertise and regional presence
 */
const features = [
  {
    title: "Expertise terrain reconnue",
    description: "17 ans d'expérience, 103+ projets livrés, réseaux MT/BT maîtrisés de A à Z.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    position: "top-left",
  },
  {
    title: "Couverture régionale intégrée",
    description: "Siège à Bujumbura + présence opérationnelle en RDC, assurant import, transit et dédouanement en toute fluidité.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    position: "top-right",
  },
  {
    title: "Partenariats solides",
    description: "Accès direct aux grands contribuables burundais et aux filières agricoles financées par la Banque mondiale.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    position: "bottom-left",
  },
  {
    title: "Solutions clé en main",
    description: "Études, fourniture, transport, installation et mise en service : un seul interlocuteur pour vos projets électriques, télécoms ou agricoles.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    position: "bottom-right",
  },
];

/**
 * WhyChooseUs section with 2x2 feature grid
 * Matching reference design from Alzumorod
 */
export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content & Image */}
          <div>
            {/* Section Badge */}
            <div className="section-badge">
              Pourquoi nous choisir
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8">
              L&apos;excellence au service de vos projets
            </h2>

            {/* Image - Industrial/electrical infrastructure work */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1713937400833-f817938b51e4?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Technicien électricien sur le terrain"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Right - 2x2 Feature Grid */}
          <div className="relative">
            {/* Center connecting element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`relative bg-white rounded-2xl p-6 card-shadow ${
                    index < 2 ? 'lg:mb-4' : 'lg:mt-4'
                  }`}
                >
                  {/* Corner decoration image - contextual to card content */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                    <img
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&q=80" // Electrical panel/switchboard - MT/BT expertise
                          : index === 1
                          ? "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=100&q=80" // Shipping containers/port - logistics & transit
                          : index === 2
                          ? "https://images.unsplash.com/photo-1589923188651-268a9765e432?w=100&q=80" // African farmers in field - agriculture partnerships
                          : "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=100&q=80" // Telecom tower workers - turnkey solutions
                      }
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Top accent line */}
                  <div className="w-12 h-1 bg-accent mb-4" />

                  {/* Icon */}
                  <div className="text-accent mb-4">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
