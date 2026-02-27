'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="max-w-3xl">
            <p className="label mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              Privacy Policy
            </h1>
            <p className="text-lg" style={{ color: 'var(--gray-600)' }}>
              Last updated: February 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="max-w-3xl mx-auto prose prose-lg">

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>1. Introduction</h2>
              <p className="mb-4" style={{ color: 'var(--gray-600)' }}>
                FSIT ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p style={{ color: 'var(--gray-600)' }}>
                By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>2. Information We Collect</h2>
              <p className="mb-4" style={{ color: 'var(--gray-600)' }}>
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--gray-600)' }}>
                <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact information you provide when filling out forms or contacting us.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent on pages, and navigation patterns.</li>
                <li><strong>Device Data:</strong> Information about your device, including IP address, browser type, operating system, and device identifiers.</li>
                <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>3. How We Use Your Information</h2>
              <p className="mb-4" style={{ color: 'var(--gray-600)' }}>
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--gray-600)' }}>
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you marketing and promotional communications (with your consent)</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>4. Data Security</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>5. Third-Party Services</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                We may use third-party services that collect, monitor, and analyze data to help us improve our services. These third parties have their own privacy policies addressing how they use such information.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>6. Your Rights</h2>
              <p className="mb-4" style={{ color: 'var(--gray-600)' }}>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--gray-600)' }}>
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to object to processing of your data</li>
                <li>The right to data portability</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>7. Contact Us</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 rounded-xl" style={{ background: 'var(--cream)' }}>
                <p style={{ color: 'var(--gray-700)' }}><strong>FSIT</strong></p>
                <p style={{ color: 'var(--gray-600)' }}>Riyadh, Saudi Arabia</p>
                <p style={{ color: 'var(--gray-600)' }}>Email: <a href="mailto:ai@fsitksa.com" style={{ color: 'var(--green)' }}>ai@fsitksa.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'var(--cream)' }}>
        <div className="container-md text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--black)' }}>
            Have Questions?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--gray-600)' }}>
            Our team is here to help with any privacy-related inquiries.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
