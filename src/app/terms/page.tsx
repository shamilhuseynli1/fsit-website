'use client';

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="max-w-3xl">
            <p className="label mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              Terms of Service
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
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>1. Agreement to Terms</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                By accessing or using FSIT's services, website, or any related platforms, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>2. Description of Services</h2>
              <p className="mb-4" style={{ color: 'var(--gray-600)' }}>
                FSIT provides AI consulting, development, and implementation services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--gray-600)' }}>
                <li>AI Systems & Solutions development</li>
                <li>Staff augmentation and talent placement</li>
                <li>AI operations and managed services</li>
                <li>AI strategy consulting and transformation</li>
                <li>Machine learning model development and deployment</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>3. Use of Services</h2>
              <p className="mb-4" style={{ color: 'var(--gray-600)' }}>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--gray-600)' }}>
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Transmit any malicious code or interfere with our services</li>
                <li>Reproduce, duplicate, or exploit any portion of our services without permission</li>
                <li>Use our services to compete directly with FSIT</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>4. Intellectual Property</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of FSIT and are protected by international copyright, trademark, and other intellectual property laws. Custom solutions developed for clients are subject to separate agreements.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>5. Confidentiality</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our engagement. This includes business strategies, technical specifications, client data, and any other information marked as confidential.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>6. Payment Terms</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                Payment terms for our services will be outlined in separate service agreements or statements of work. Unless otherwise specified, invoices are due within 30 days of receipt. Late payments may be subject to interest charges as permitted by applicable law.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>7. Limitation of Liability</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                To the fullest extent permitted by law, FSIT shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising out of or related to your use of our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>8. Indemnification</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                You agree to defend, indemnify, and hold harmless FSIT and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your breach of these Terms or your use of our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>9. Termination</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use our services will immediately cease.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>10. Governing Law</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Riyadh, Saudi Arabia.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>11. Changes to Terms</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>12. Contact Us</h2>
              <p style={{ color: 'var(--gray-600)' }}>
                If you have any questions about these Terms of Service, please contact us:
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
            Our team is here to help with any inquiries about our terms.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
