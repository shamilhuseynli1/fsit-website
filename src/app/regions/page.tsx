import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'Regions & Delivery | FSIT AI',
  description: 'Regional execution. Global delivery. FSIT operates across Saudi Arabia and the Middle East, supported by globally distributed teams.',
};

export default function Regions() {
  const regions = [
    {
      name: 'Saudi Arabia & Middle East',
      description: 'FSIT works closely with organisations across Saudi Arabia and the wider Middle East, supporting AI-driven transformation aligned with regional priorities.',
      focus: [
        'Government and public sector initiatives',
        'Enterprise AI modernisation',
        'Digital infrastructure and smart systems',
        'Long-term capability building',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Europe – Engineering & Architecture',
      description: 'Our European teams contribute:',
      focus: [
        'AI system architecture',
        'Advanced data engineering',
        'Platform and integration expertise',
        'Enterprise-grade software engineering',
      ],
      note: 'This ensures AI solutions are built on strong technical foundations that scale securely and reliably.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Asia – Scale, speed, and execution',
      description: 'Our teams across Asia provide:',
      focus: [
        'Scalable AI and data engineering capacity',
        'Rapid development and iteration',
        'Cost-efficient delivery without compromising quality',
      ],
      note: 'This enables faster execution while maintaining consistent standards across engagements.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: 'United States – AI, data & product leadership',
      description: 'Our US-based expertise supports:',
      focus: [
        'Advanced AI and ML design',
        'Product thinking and system usability',
        'Exposure to leading AI platforms and practices',
        'Alignment with global AI innovation trends',
      ],
      note: 'This strengthens FSIT\'s ability to deliver modern, future-ready AI systems.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1674386491555-5b92161e4d04?auto=format&fit=crop&w=1920&q=80"
            alt="Aerial view of city"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-900/80" />
        </div>
        <NetworkBackground nodeCount={60} />
        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-6">Global Presence</p>
            <h1 className="hero-title text-white">
              Regional execution.<br />
              <span className="text-primary-500">Global delivery.</span>
            </h1>
            <p className="hero-subtitle">
              Our teams and projects operate across multiple regions, working seamlessly across time zones and markets. This global presence allows us to deliver locally informed, internationally aligned solutions.
            </p>
            <p className="text-lg text-white/90 mt-6 font-medium">
              Riyadh · Doha · Dubai · Bangalore · Ho Chi Minh City · Singapore · Manila · Amman · Lebanon · Barcelona · Milan · London · Berlin · Zagreb
            </p>
          </div>
        </div>
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Value Statement */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-white font-medium">
            This model allows us to combine regional understanding with global scale, speed, and specialised AI expertise
          </p>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Our Regions</p>
            <h2 className="section-title">Where We Operate</h2>
          </div>
          <div className="space-y-8">
            {regions.map((region, index) => (
              <div key={index} className="card card-hover">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-500">
                      {region.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-dark-900 mb-3">{region.name}</h3>
                    <p className="text-dark-500 mb-4">{region.description}</p>
                    <div className="space-y-2 mb-4">
                      {region.focus.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg border border-neutral-200 hover:border-primary-500/30 transition-all">
                          <span className="w-7 h-7 bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          </span>
                          <span className="text-dark-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    {region.note && (
                      <p className="text-dark-500 text-sm italic border-l-2 border-primary-500 pl-4">{region.note}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Statement */}
      <section className="section-padding bg-dark-900">
        <div className="container-max text-center">
          <p className="section-label">One Standard</p>
          <h2 className="section-title !text-white mb-6">Global team, one delivery standard</h2>
          <p className="text-xl text-dark-300 mb-6 max-w-3xl mx-auto">
            AI transformation requires both local understanding and global capability
          </p>
          <p className="text-3xl font-bold text-primary-500">
            FSIT delivers both
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="section-title mb-4">Ready to partner with a global AI team?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Connect with our delivery team across any region
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
