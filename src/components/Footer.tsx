'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const footerLinks = {
    services: [
      { name: 'AI Systems & Solutions', href: '/solutions' },
      { name: 'How We Work', href: '/how-we-work' },
      { name: 'How We Vet', href: '/how-we-vet' },
      { name: 'Build & Scale AI', href: '/build-scale-ai' },
    ],
    company: [
      { name: 'About FSIT', href: '/about' },
      { name: 'Mission & Vision', href: '/mission' },
      { name: 'Regions & Delivery', href: '/regions' },
      { name: 'Contact', href: '/contact' },
    ],
    industries: [
      { name: 'Government & Public Sector', href: '/industries' },
      { name: 'Banking & Finance', href: '/industries/financial-services' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Sports & Entertainment', href: '/industries/sports-entertainment' },
    ],
  };

  return (
    <footer style={{ background: 'var(--white)', borderTop: '1px solid var(--gray-100)' }}>
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 text-center md:text-left lg:col-span-2 mb-4 md:mb-0">
            <Link href="/" className="inline-block -mt-2">
              <img
                src="/logo.png"
                alt="FSIT"
                className="w-auto max-w-[280px] md:max-w-[320px]"
              />
            </Link>
            <p className="mt-8 md:mt-3 mb-6 md:mb-8 max-w-sm mx-auto md:mx-0 leading-relaxed text-sm" style={{ color: 'var(--gray-500)' }}>
              On-Site AI. Real Results. Built Capability. Pioneering AI transformation across Saudi Arabia and the Middle East.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/company/fsitksa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'var(--gray-100)', color: 'var(--gray-500)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--green)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--gray-100)';
                  e.currentTarget.style.color = 'var(--gray-500)';
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com/FSIT_KSA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'var(--gray-100)', color: 'var(--gray-500)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--green)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--gray-100)';
                  e.currentTarget.style.color = 'var(--gray-500)';
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="label mb-4 md:mb-6">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--gray-500)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--green)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-500)'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="label mb-4 md:mb-6">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--gray-500)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--green)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-500)'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="label mb-4 md:mb-6">Contact</h4>
            <div className="flex justify-center md:justify-start">
              <ul className="space-y-2 md:space-y-3 inline-block text-left">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--green)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm" style={{ color: 'var(--gray-500)' }}>
                    Riyadh, Saudi Arabia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--green)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <a
                      href="mailto:ai@fsitksa.com"
                      className="text-sm transition-colors"
                      style={{ color: 'var(--gray-500)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--green)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-500)'}
                    >
                      ai@fsitksa.com
                    </a>
                    <a
                      href="mailto:bd@fsitksa.com"
                      className="text-sm transition-colors"
                      style={{ color: 'var(--gray-500)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--green)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-500)'}
                    >
                      bd@fsitksa.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--green)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="tel:+966501234567"
                    className="text-sm transition-colors"
                    style={{ color: 'var(--gray-500)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--green)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-500)'}
                  >
                    +966 50 123 4567
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid var(--gray-100)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: 'var(--gray-400)' }}>
              &copy; {new Date().getFullYear()} FSIT. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-sm transition-colors"
                style={{ color: 'var(--gray-400)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--green)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-400)'}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm transition-colors"
                style={{ color: 'var(--gray-400)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--green)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-400)'}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
