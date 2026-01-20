"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Navigation links with anchor hrefs for smooth scrolling
 * Updated to match spec: Accueil - À propos - Domaines d'activités - Portfolio - Contact
 */
const navLinks = [
  { href: "#accueil", label: "Accueil", labelEn: "Home" },
  { href: "#apropos", label: "À propos", labelEn: "About" },
  { href: "#services", label: "Domaines d'activités", labelEn: "Services" },
  { href: "#portfolio", label: "Portfolio", labelEn: "Portfolio" },
];

interface NavbarProps {
  onContactClick: () => void;
}

/**
 * Navbar with language switcher (FR/EN)
 */
export default function Navbar({ onContactClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [locale, setLocale] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const toggleLocale = () => {
    setLocale(locale === "fr" ? "en" : "fr");
  };

  // Get label based on current locale
  const getLabel = (link: typeof navLinks[0]) => {
    return locale === "fr" ? link.label : link.labelEn;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-4 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            className="flex items-center"
          >
            <Image
              src="/images/logo-full.svg"
              // src={isScrolled ? "/images/logo-full.svg" : "/images/logo-white.svg"}
              alt="EAGTC - East African General Trade Company"
              width={160}
              height={45}
              className={`h-10 w-auto transition-all duration-300`}
              // className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-20'}`}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? "text-primary hover:text-accent"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {getLabel(link)}
                </a>
              </li>
            ))}
            {/* Language Switcher */}
            <li>
              <button
                onClick={toggleLocale}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? "bg-cream text-primary hover:bg-accent/10"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                aria-label={locale === "fr" ? "Switch to English" : "Passer en Français"}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {locale === "fr" ? "EN" : "FR"}
              </button>
            </li>
            <li>
              <button
                onClick={onContactClick}
                className="bg-accent hover:bg-accent-dark text-primary font-semibold px-6 py-2.5 rounded-lg transition-all flex items-center gap-2"
              >
                {locale === "fr" ? "Nous contacter" : "Contact us"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[500px] mt-4" : "max-h-0"
          }`}
        >
          <div className={`rounded-xl p-4 ${isScrolled ? 'bg-cream' : 'bg-white/10 backdrop-blur-sm'}`}>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
                      isScrolled
                        ? "text-primary hover:bg-accent/10"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {getLabel(link)}
                  </a>
                </li>
              ))}
              {/* Mobile Language Switcher */}
              <li>
                <button
                  onClick={toggleLocale}
                  className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium transition-colors ${
                    isScrolled
                      ? "text-primary hover:bg-accent/10"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  {locale === "fr" ? "English" : "Français"}
                </button>
              </li>
              <li className="mt-2">
                <button
                  onClick={() => {
                    onContactClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-accent hover:bg-accent-dark text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {locale === "fr" ? "Nous contacter" : "Contact us"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
