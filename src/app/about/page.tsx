import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'About FSIT | FSIT AI',
  description: 'FSIT was created to solve a growing problem: AI ambition is everywhere, but real execution is rare.',
};

export default function About() {
  const beliefs = [
    'AI is infrastructure, not innovation theatre',
    'Execution matters more than strategy decks',
    'AI systems must be secure, observable, and accountable',
    'Humans remain essential in critical AI workflows',
    'Global talent is only valuable when aligned to real outcomes',
  ];

  const notStatements = [
    'FSIT is not a traditional consultancy',
    'FSIT is not a generic outsourcing provider',
    'FSIT is not a staffing marketplace',
  ];

  const delivers = [
    'AI-native engineering and delivery teams',
    'End-to-end responsibility from build to operation',
    'Long-term engagement models for sustained value',
    'Systems designed to survive real-world complexity',
  ];

  const failReasons = [
    'Isolated from core systems',
    'Built without operational ownership',
    'Treated as experiments rather than infrastructure',
    'Delivered without accountability for production impact',
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        {/* Saudi Riyadh Skyline Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <NetworkBackground nodeCount={60} />
        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-6">About FSIT</p>
            <h1 className="hero-title text-white">
              AI ambition is everywhere.<br />
              <span className="text-primary-500">Real execution is rare.</span>
            </h1>
            <p className="hero-subtitle">
              FSIT was created to solve this growing problem
            </p>
          </div>
        </div>
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-dark-500 mb-8">
              Enterprises and governments invest heavily in AI initiatives, yet struggle to move beyond pilots, proofs of concept, and disconnected tools
            </p>
            <div className="card-dark">
              <p className="text-xl text-white font-semibold">
                The gap is not technology — <span className="text-primary-500">it is delivery</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why FSIT */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">The Problem</p>
            <h2 className="section-title">AI initiatives fail when they are:</h2>
          </div>
          <div className="grid-2 max-w-3xl mx-auto mb-12">
            {failReasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-3 card !p-4">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-dark-700">{reason}</span>
              </div>
            ))}
          </div>
          <div className="card-dark max-w-4xl mx-auto text-center">
            <p className="text-lg text-dark-300">
              FSIT was founded to deliver AI systems that operate inside real environments — embedded into workflows, governed appropriately, and built to scale
            </p>
          </div>
        </div>
      </section>

      {/* We Believe */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Our Beliefs</p>
            <h2 className="section-title">We believe that:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {beliefs.map((belief, index) => (
              <div key={index} className="card card-hover text-center flex items-center justify-center min-h-[100px]">
                <p className="text-dark-700 font-medium text-sm">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Statements */}
      <section className="section-padding bg-dark-900 relative overflow-hidden">
        {/* Saudi Night Cityscape Background */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container-max text-center relative z-10">
          <div className="space-y-4 mb-12">
            {notStatements.map((statement, index) => (
              <p key={index} className="text-xl md:text-2xl text-white font-semibold">
                {statement}
              </p>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary-500 mb-8">
            We operate as an AI execution partner, delivering:
          </h3>
          <div className="grid-2 max-w-3xl mx-auto">
            {delivers.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-dark-800/80 backdrop-blur-sm p-4 rounded-xl">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Saudi Arabia */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="section-label">Regional Focus</p>
              <h2 className="section-title mb-6">Built for Saudi Arabia and the Middle East</h2>
              <p className="text-xl text-dark-500">
                FSIT works closely with organisations across Saudi Arabia and the Middle East, supporting national and enterprise-level AI initiatives aligned with regional priorities
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1733757361453-5f493624a734?auto=format&fit=crop&w=1920&q=80"
                alt="Riyadh, Saudi Arabia skyline at sunset"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white px-6 py-3 rounded-xl shadow-lg">
                <p className="font-bold">Vision 2030 Aligned</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Presence */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Our Presence</p>
            <h2 className="section-title">Across the Kingdom</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80"
                alt="Riyadh Saudi Arabia"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-xl">Riyadh</p>
                <p className="text-white/70 text-sm">Headquarters</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1733757361453-5f493624a734?auto=format&fit=crop&w=1920&q=80"
                alt="Saudi Arabia modern architecture"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-xl">Jeddah</p>
                <p className="text-white/70 text-sm">Regional Office</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1707386910260-a0e999662858?auto=format&fit=crop&w=1920&q=80"
                alt="Saudi Arabia landscape"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-xl">NEOM</p>
                <p className="text-white/70 text-sm">Future Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Our Team</p>
            <h2 className="section-title">Leadership</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Haitham Saead', role: 'CEO', image: '/team/Haitam Said.jpg', scale: 1.6, position: '50% 20%' },
              { name: 'Fahed Alenezi', role: 'Managing Director', image: '/team/Fahed Alenezi.png', scale: 1, position: '50% 0%' },
              { name: 'Khalil Jaouni', role: 'Executive Director', image: '/team/Khalil Jaouni.png', scale: 1, position: '50% 20%' },
              { name: 'Ritesh Raj', role: 'Executive Director', image: '/team/Ritesh Raj.png', scale: 1.6, position: '50% 30%' },
              { name: 'Rula Jouhar', role: 'COO', image: '/team/Rula.png', scale: 1, position: '50% 0%' },
              { name: 'AlMutasm Al Shayyab', role: 'Business Development', image: '/team/AlMutasm Al Shayyab.png', scale: 1, position: '50% 15%' },
              { name: 'Ismail Katanani', role: 'Senior Director', image: '/team/Ismail Katanani.png', scale: 1, position: '50% 10%' },
              { name: 'Arwa Muhie Eddin', role: 'Talent Acquisition Director', image: '/team/Arwa Muhie Eddin.png', scale: 1.5, position: '50% 15%' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg bg-neutral-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${member.scale})`,
                      objectPosition: member.position,
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-dark-900">{member.name}</h3>
                <p className="text-dark-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900 relative overflow-hidden">
        {/* Saudi Background */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1733757361453-5f493624a734?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container-max text-center relative z-10">
          <p className="text-xl text-dark-300 mb-4">AI success is not about intent</p>
          <h2 className="section-title !text-white mb-8">
            It&apos;s about <span className="text-primary-500">execution</span>
          </h2>
          <Link href="/contact" className="btn-primary">
            Start today
          </Link>
        </div>
      </section>
    </>
  );
}
