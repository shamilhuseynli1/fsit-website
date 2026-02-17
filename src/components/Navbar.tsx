'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(true); // Default to true to prevent flash of white text

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    // Check initial scroll position on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/solutions',
      dropdown: [
        { name: 'AI Systems & Solutions', href: '/solutions' },
        { name: 'How We Work', href: '/how-we-work' },
        { name: 'How We Vet', href: '/how-we-vet' },
      ],
    },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'About FSIT', href: '/about' },
        { name: 'Mission & Vision', href: '/mission' },
        { name: 'Regions & Delivery', href: '/regions' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span
              className="text-2xl font-bold transition-colors duration-400"
              style={{ color: scrolled ? '#1a1a2e' : '#ffffff' }}
            >
              FSIT
            </span>
            <span className="text-2xl font-bold text-primary-500 ml-1">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-5 py-2 font-medium text-sm transition-colors duration-300 flex items-center gap-1 hover:text-primary-500"
                  style={{ color: scrolled ? '#374151' : 'rgba(255,255,255,0.9)' }}
                >
                  {link.name}
                  {link.dropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 w-56 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-100 py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-5 py-3 text-sm text-dark-700 hover:bg-neutral-50 hover:text-primary-500 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/build-scale-ai" className="btn-primary !py-3 !px-6">
              Book a consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 transition-colors"
            style={{ color: scrolled ? '#1a1a2e' : '#ffffff' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-dark-900 font-medium hover:text-primary-500 hover:bg-neutral-50 rounded-lg transition-colors"
                    onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-dark-500 hover:text-primary-500 hover:bg-neutral-50 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-neutral-100">
                <Link
                  href="/build-scale-ai"
                  className="block btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
