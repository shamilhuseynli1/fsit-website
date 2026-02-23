'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Grouped dropdown structure for Services
  const servicesDropdown = {
    sections: [
      {
        title: 'What We Offer',
        items: [
          { name: 'AI Systems & Solutions', href: '/solutions' },
          { name: 'Staff Augmentation', href: '/staff-augmentation' },
          { name: 'AI Agents', href: '/ai-agents' },
          { name: 'AI Operations', href: '/ai-operations' },
        ],
      },
      {
        title: 'How We Deliver',
        items: [
          { name: 'How We Work', href: '/how-we-work' },
          { name: 'How We Vet', href: '/how-we-vet' },
        ],
      },
      {
        title: 'Our Approach',
        items: [
          { name: 'Build & Innovate', href: '/build-innovate' },
          { name: 'Manage & Optimize', href: '/manage-optimize' },
          { name: 'Protect & Scale', href: '/protect-scale' },
          { name: 'Leverage AI', href: '/leverage-ai' },
          { name: 'AI Transformation', href: '/ai-transformation' },
        ],
      },
    ],
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/solutions',
      megaDropdown: servicesDropdown,
    },
    {
      name: 'ML Models',
      href: '/ml-models',
      dropdown: [
        { name: 'Finance', href: '/ml-models#finance' },
        { name: 'Logistics', href: '/ml-models#logistics' },
        { name: 'Business', href: '/ml-models#business' },
        { name: 'Management', href: '/ml-models#management' },
        { name: 'Consulting', href: '/ml-models#consulting' },
        { name: 'Data Governance', href: '/ml-models#data-governance' },
        { name: 'Sports & Entertainment', href: '/ml-models#sports-entertainment' },
      ],
    },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        { name: 'All Industries', href: '/industries' },
        { name: 'Financial Services', href: '/industries/financial-services' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Retail & E-Commerce', href: '/industries/retail' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Technology & SaaS', href: '/industries/technology' },
        { name: 'Sports & Entertainment', href: '/industries/sports-entertainment' },
      ],
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3'
          : 'py-5'
      }`}
      style={{
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--gray-100)' : 'none'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: 'var(--black)' }}
            >
              FSIT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const hasDropdown = link.dropdown || link.megaDropdown;
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 rounded-lg"
                    style={{ color: 'var(--gray-600)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--black)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-600)'}
                  >
                    {link.name}
                    {hasDropdown && (
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
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

                  {/* Mega Dropdown Menu (for Services) */}
                  {link.megaDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 pt-2 animate-fade-in">
                      <div
                        className="rounded-xl py-5 px-4 overflow-hidden flex gap-8"
                        style={{
                          background: 'var(--white)',
                          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                          border: '1px solid var(--gray-100)',
                          minWidth: '620px'
                        }}
                      >
                        {link.megaDropdown.sections.map((section, sectionIdx) => (
                          <div key={sectionIdx} className="flex-1 min-w-[180px]">
                            <p
                              className="px-3 py-2 text-sm font-bold uppercase tracking-wider"
                              style={{ color: 'var(--gray-500)' }}
                            >
                              {section.title}
                            </p>
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2.5 text-base font-medium rounded-lg transition-all duration-200"
                                style={{ color: 'var(--gray-700)' }}
                                onClick={() => setActiveDropdown(null)}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = 'var(--cream)';
                                  e.currentTarget.style.color = 'var(--green)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = 'transparent';
                                  e.currentTarget.style.color = 'var(--gray-700)';
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Regular Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in">
                      <div
                        className="rounded-xl py-3 overflow-hidden"
                        style={{
                          background: 'var(--white)',
                          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                          border: '1px solid var(--gray-100)'
                        }}
                      >
                        {link.dropdown.map((item) => {
                          const hasHash = item.href.includes('#');
                          const itemStyle = {
                            color: 'var(--gray-700)',
                          };
                          return hasHash ? (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                const [path, hash] = item.href.split('#');
                                if (window.location.pathname === path || window.location.pathname === path + '/') {
                                  window.location.hash = hash;
                                  window.dispatchEvent(new HashChangeEvent('hashchange'));
                                } else {
                                  window.location.href = item.href;
                                }
                                setActiveDropdown(null);
                              }}
                              className="block px-5 py-3 text-base font-medium transition-all duration-200 cursor-pointer"
                              style={itemStyle}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--cream)';
                                e.currentTarget.style.color = 'var(--green)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'var(--gray-700)';
                              }}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-5 py-3 text-base font-medium transition-all duration-200"
                              style={itemStyle}
                              onClick={() => setActiveDropdown(null)}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--cream)';
                                e.currentTarget.style.color = 'var(--green)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'var(--gray-700)';
                              }}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/build-scale-ai"
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: 'var(--green)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--green-dark)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--green)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 transition-colors"
            style={{ color: 'var(--black)' }}
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
            <div
              className="rounded-2xl p-6 space-y-1"
              style={{
                background: 'var(--white)',
                boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                border: '1px solid var(--gray-100)'
              }}
            >
              {navLinks.map((link) => {
                const hasDropdown = link.dropdown || link.megaDropdown;
                return (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 font-medium rounded-xl transition-colors"
                      style={{ color: 'var(--black)' }}
                      onClick={() => !hasDropdown && setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {/* Mega dropdown items for mobile */}
                    {link.megaDropdown && (
                      <div className="pl-4 space-y-4">
                        {link.megaDropdown.sections.map((section, sectionIdx) => (
                          <div key={sectionIdx}>
                            <p
                              className="px-4 py-2 text-sm font-bold uppercase tracking-wider"
                              style={{ color: 'var(--gray-500)' }}
                            >
                              {section.title}
                            </p>
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-base font-medium rounded-lg transition-colors"
                                style={{ color: 'var(--gray-700)' }}
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Regular dropdown items for mobile */}
                    {link.dropdown && (
                      <div className="pl-4 space-y-1">
                        {link.dropdown.map((item) => {
                          const hasHash = item.href.includes('#');
                          return hasHash ? (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                const [path, hash] = item.href.split('#');
                                if (window.location.pathname === path || window.location.pathname === path + '/') {
                                  window.location.hash = hash;
                                  window.dispatchEvent(new HashChangeEvent('hashchange'));
                                } else {
                                  window.location.href = item.href;
                                }
                                setIsOpen(false);
                              }}
                              className="block px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer"
                              style={{ color: 'var(--gray-700)' }}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-3 text-base font-medium rounded-lg transition-colors"
                              style={{ color: 'var(--gray-700)' }}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 mt-4" style={{ borderTop: '1px solid var(--gray-100)' }}>
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
