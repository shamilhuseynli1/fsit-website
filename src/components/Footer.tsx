import Link from 'next/link';

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
      { name: 'Government & Public Sector', href: '/solutions' },
      { name: 'Banking & Finance', href: '/solutions' },
      { name: 'Healthcare', href: '/solutions' },
      { name: 'Energy & Utilities', href: '/solutions' },
    ],
  };

  return (
    <footer className="bg-dark-900 text-white">
      {/* Main Footer */}
      <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">FSIT</span>
              <span className="text-2xl font-bold text-primary-500 ml-1">AI</span>
            </Link>
            <p className="text-dark-400 text-sm mb-6 max-w-sm">
              On-Site AI. Real Results. Built Capability. Executing AI transformation across Saudi Arabia and the Middle East.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 text-sm hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 text-sm hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-dark-400 text-sm">
                  Riyadh, Saudi Arabia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@fsitksa.com" className="text-dark-400 text-sm hover:text-primary-500 transition-colors">
                  support@fsitksa.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+966540830093" className="text-dark-400 text-sm hover:text-primary-500 transition-colors">
                  +966 54 083 0093
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 text-sm">
              &copy; {new Date().getFullYear()} FSIT AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-dark-500 text-sm hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-dark-500 text-sm hover:text-primary-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
