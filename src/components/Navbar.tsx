'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showExploreTooltip, setShowExploreTooltip] = useState(true);
  const pathname = usePathname();

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Check if any dropdown item is active (for Services, Industries, etc.)
  const isDropdownActive = (link: any) => {
    if (link.megaDropdown) {
      return link.megaDropdown.sections.some((section: any) =>
        section.items.some((item: any) => isActive(item.href))
      );
    }
    if (link.dropdown) {
      return link.dropdown.some((item: any) => isActive(item.href));
    }
    return false;
  };

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
          ? 'py-1'
          : 'py-2'
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
          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo-full-cropped.png"
              alt="FSIT - Kingdom's preferred choice for AI"
              className="h-14 w-auto"
            />
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
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1 rounded-lg relative ${
                      isActive(link.href) || isDropdownActive(link)
                        ? 'text-green-600'
                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`}
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
                    {/* Active indicator */}
                    {(isActive(link.href) || isDropdownActive(link)) && (
                      <span
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ background: 'var(--green)' }}
                      />
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
          <div className="lg:hidden flex items-center">
            {/* Explore FSIT Tooltip - Only shows on first load */}
            {showExploreTooltip && (
              <div className="relative animate-float ml-12">
                <div
                  className="px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap"
                  style={{
                    background: 'var(--green)',
                    color: 'white',
                  }}
                >
                  Explore FSIT
                </div>
                {/* Green Arrow exiting the box */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -right-2"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '6px solid transparent',
                    borderBottom: '6px solid transparent',
                    borderLeft: '8px solid var(--green)',
                  }}
                />
              </div>
            )}

            {/* Cascading Hamburger - Right Aligned, 20% bigger */}
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setShowExploreTooltip(false);
              }}
              className="p-2 transition-all duration-300"
              style={{ transform: 'translate(-4px, 3px)' }}
              aria-label="Toggle menu"
            >
              <div className="w-8 h-5 flex flex-col justify-between items-end">
                {isOpen ? (
                  <div className="w-6 h-5 relative">
                    <span
                      className="block h-0.5 w-5 rounded-full transition-all duration-300 absolute top-1/2 -translate-y-1/2 rotate-45"
                      style={{ background: 'var(--green)' }}
                    />
                    <span
                      className="block h-0.5 w-5 rounded-full transition-all duration-300 absolute top-1/2 -translate-y-1/2 -rotate-45"
                      style={{ background: 'var(--green)' }}
                    />
                  </div>
                ) : (
                  <>
                    {/* Long line - top */}
                    <span
                      className="block h-0.5 rounded-full"
                      style={{ background: 'var(--green)', width: '24px' }}
                    />
                    {/* Middle line */}
                    <span
                      className="block h-0.5 rounded-full"
                      style={{ background: 'var(--green)', width: '17px' }}
                    />
                    {/* Short line - bottom */}
                    <span
                      className="block h-0.5 rounded-full"
                      style={{ background: 'var(--green)', width: '10px' }}
                    />
                  </>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div
              className="rounded-2xl p-4 space-y-0 max-h-[70vh] overflow-y-auto"
              style={{
                background: 'var(--white)',
                boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                border: '1px solid var(--gray-100)'
              }}
            >
              {navLinks.map((link) => {
                const hasDropdown = link.dropdown || link.megaDropdown;
                const isExpanded = mobileExpanded === link.name;

                return (
                  <div key={link.name} className="border-b border-gray-100 last:border-b-0">
                    {hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : link.name)}
                          className={`w-full flex justify-between items-center px-4 py-3 font-medium ${
                            isDropdownActive(link) ? 'text-green-600' : ''
                          }`}
                          style={{ color: isDropdownActive(link) ? 'var(--green)' : 'var(--black)' }}
                        >
                          {link.name}
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {isExpanded && (
                          <div className="pb-3 animate-fade-in">
                            {/* Mega dropdown items for mobile */}
                            {link.megaDropdown && (
                              <div className="pl-4 space-y-3">
                                {link.megaDropdown.sections.map((section, sectionIdx) => (
                                  <div key={sectionIdx}>
                                    <p
                                      className="px-3 py-1 text-xs font-bold uppercase tracking-wider"
                                      style={{ color: 'var(--green)' }}
                                    >
                                      {section.title}
                                    </p>
                                    {section.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                                        style={{ color: 'var(--gray-600)' }}
                                        onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
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
                              <div className="pl-4 space-y-0">
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
                                        setMobileExpanded(null);
                                      }}
                                      className="block px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer"
                                      style={{ color: 'var(--gray-600)' }}
                                    >
                                      {item.name}
                                    </a>
                                  ) : (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="block px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                                      style={{ color: 'var(--gray-600)' }}
                                      onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                                    >
                                      {item.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 font-medium ${
                          isActive(link.href) ? 'text-green-600 bg-green-50' : ''
                        }`}
                        style={{ color: isActive(link.href) ? 'var(--green)' : 'var(--black)' }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
              <div className="pt-3 mt-2" style={{ borderTop: '1px solid var(--gray-100)' }}>
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
