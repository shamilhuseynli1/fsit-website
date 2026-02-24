'use client';

import Link from 'next/link';
import RegionsMap from '@/components/RegionsMap';

export default function About() {
  const stats = [
    { value: '80,000+', label: 'Elite talent in our network' },
    { value: '50+', label: 'Businesses served' },
    { value: '98%', label: 'Client retention rate' },
    { value: '2012', label: 'Founded in Riyadh' },
  ];

  const values = [
    {
      title: 'AI is Infrastructure',
      description: 'Not innovation theatre. We build systems that run real operations.',
    },
    {
      title: 'Execution Over Strategy',
      description: 'Strategy decks don\'t transform businesses. Working systems do.',
    },
    {
      title: 'Secure & Accountable',
      description: 'AI systems must be observable, governed, and compliant.',
    },
    {
      title: 'Humans in the Loop',
      description: 'Critical AI workflows require human judgment and oversight.',
    },
    {
      title: 'Outcomes, Not Hours',
      description: 'Global talent is only valuable when aligned to real results.',
    },
  ];

  const timeline = [
    { year: '2012', event: 'Founded in Riyadh as Future Systems for Information Technology' },
    { year: '2015', event: 'Expanded IT staffing and consulting across Saudi Arabia' },
    { year: '2019', event: 'Pivoted to AI-first augmented intelligence model' },
    { year: '2022', event: 'Launched managed AI services for enterprise clients' },
    { year: '2024', event: 'Expanded globally across Europe, Asia, and the United States' },
    { year: 'Today', event: '80,000+ vetted AI professionals serving 50+ organizations' },
  ];

  const leadership = [
    { name: 'Haitham Saead', role: 'Chief Executive Officer', image: '/team/Haitam Said.jpg', position: 'center top' },
    { name: 'Rula Jouhar', role: 'Chief Operating Officer', image: '/team/Rula.png', position: 'center top' },
    { name: 'Fahed Alenezi', role: 'Managing Director', image: '/team/Fahed Alenezi.png', position: 'center top' },
    { name: 'Ritesh Raj', role: 'Executive Director', image: '/team/Ritesh Raj.png', position: 'center 15%' },
    { name: 'Khalil Jaouni', role: 'Executive Director', image: '/team/Khalil Jaouni.png', position: 'center top' },
    { name: 'Ismail Katanani', role: 'Senior Director', image: '/team/Ismail Katanani.png', position: 'center top' },
  ];

  const regions = [
    {
      region: 'Saudi Arabia & Middle East',
      focus: 'Regional headquarters and primary market',
      capabilities: ['Government and public sector initiatives', 'Enterprise AI modernisation', 'Vision 2030 aligned projects'],
    },
    {
      region: 'Europe',
      focus: 'Engineering and architecture excellence',
      capabilities: ['AI system architecture', 'Advanced data engineering', 'Enterprise software development'],
    },
    {
      region: 'Asia Pacific',
      focus: 'Scale, speed, and execution',
      capabilities: ['Scalable AI engineering capacity', 'Rapid development cycles', 'Cost-efficient delivery'],
    },
    {
      region: 'United States',
      focus: 'AI innovation and product leadership',
      capabilities: ['Advanced AI/ML design', 'Product strategy', 'Leading AI practices'],
    },
  ];

  return (
    <>
      {/* 1. Hero - Vision Statement */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1694018359679-49465b4c0d61?auto=format&fit=crop&w=1920&q=80"
          alt="FSIT Team"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-max relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-green-400 font-semibold text-lg mb-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>About FSIT</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Closing the gap between{' '}
              <span className="text-green-400">AI ambition and execution</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              We exist to help organizations build, scale, and operationalize AI through augmented intelligence — combining elite expertise, delivery teams, and managed services embedded directly into operations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. At a Glance - Key Metrics */}
      <section className="py-16 border-y border-neutral-200" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-lg mb-2">FSIT at a Glance</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: 'var(--black)' }}>Future Systems for Information Technology</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: 'var(--green)' }}>{stat.value}</p>
                <p className="text-lg md:text-xl font-medium" style={{ color: 'var(--gray-700)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-10 rounded-2xl bg-neutral-50 shadow-lg">
              <div className="w-16 h-16 mb-6 rounded-xl bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--black)' }}>Our Mission</h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                To empower organizations worldwide with practical, production-ready AI solutions that deliver measurable business outcomes. We bridge the gap between AI ambition and real-world execution by embedding elite expertise directly into client operations, ensuring every AI initiative moves from concept to impact.
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-neutral-50 shadow-lg">
              <div className="w-16 h-16 mb-6 rounded-xl bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--black)' }}>Our Vision</h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                To become the most trusted AI execution partner for enterprises and governments globally, setting the standard for how organizations successfully implement, scale, and operate AI systems. We envision a future where every organization can harness the transformative power of AI with confidence and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Story */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-0">
            {/* Left Content */}
            <div className="lg:w-[42%] lg:pr-6 flex flex-col justify-center">
              <p className="text-green-600 font-semibold text-lg mb-4">Our Story</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>From IT services to AI-first delivery</h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-600">
                  Founded in 2012 and headquartered in Riyadh, Future Systems for Information Technology (FSIT) began as an IT staffing and consulting company serving enterprises across Saudi Arabia.
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                  Long before AI became mainstream, we recognised that real transformation would require more than traditional consulting or staffing models. Organizations would need trusted AI expertise embedded directly into their operations — focused on execution, governance, and measurable outcomes.
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                  Today, FSIT operates as an AI-first augmented intelligence partner, with one of the region's most selective talent networks spanning over 80,000 carefully vetted professionals across AI engineering, machine learning, data science, and enterprise technology.
                </p>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                <p className="text-xl md:text-2xl font-medium text-gray-900">
                  "Embed the right AI expertise, at the right time, inside your organisation — to reduce execution risk, accelerate delivery, and build lasting internal capability."
                </p>
              </div>
            </div>

            {/* Right Timeline with vertical line */}
            <div className="lg:w-[58%] lg:pl-8">
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-green-500 to-green-200" />

                {/* Animated dot traveling down the line */}
                <div className="absolute left-4 w-0.5 h-full overflow-hidden">
                  <div
                    className="w-3 h-3 -ml-[5px] rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                    style={{
                      animation: 'travelDown 4s ease-in-out infinite',
                    }}
                  />
                </div>

                <style jsx>{`
                  @keyframes travelDown {
                    0% { transform: translateY(0); opacity: 1; }
                    100% { transform: translateY(100%); opacity: 0.3; }
                  }
                `}</style>

                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative group flex items-start gap-6">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                          <div className="w-3 h-3 rounded-full bg-white" />
                        </div>
                        {/* Pulse animation */}
                        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-300 transition-all duration-300 group-hover:translate-x-2">
                        <p className="text-base md:text-lg font-bold text-green-600 mb-1">{item.year}</p>
                        <p className="text-gray-700 text-base md:text-lg">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Problem We Solve */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-green-600 font-semibold text-lg mb-4">The Challenge</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>AI ambition is everywhere. Real execution is rare.</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Enterprises and governments invest heavily in AI initiatives but struggle beyond pilots and disconnected tools. The gap isn't technology — it's delivery.
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                FSIT was created to solve this growing problem.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-4 text-lg md:text-xl">AI initiatives fail when they are:</p>
              <div className="space-y-3">
                {[
                  'Isolated from core systems',
                  'Built without operational ownership',
                  'Treated as experiments rather than infrastructure',
                  'Delivered without accountability for production impact',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                    <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-gray-700 text-base md:text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-5 rounded-xl bg-green-50 border border-green-200">
                <p className="text-gray-800 text-base md:text-lg">
                  <span className="font-semibold text-green-700">FSIT delivers</span> AI systems embedded into workflows, properly governed, and built to scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. What We Are / Are NOT */}
      <section className="py-20 bg-subtle">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-500 mb-6">FSIT is not a traditional consultancy. Not a generic outsourcing provider. Not a staffing marketplace.</p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8" style={{ color: 'var(--black)' }}>We are an <span className="text-green-600">AI execution partner</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                'AI-native engineering teams',
                'End-to-end responsibility',
                'Long-term engagement models',
                'Systems built for complexity',
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <p className="text-base md:text-lg font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. What We Believe - Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold text-lg mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--black)' }}>What we believe</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every engagement and define how we deliver AI that works.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <div key={index} className="card-feature p-6 text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg md:text-xl">{value.title}</h3>
                <p className="text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Choose FSIT */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold text-lg mb-4">Why FSIT</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--black)' }}>What sets us apart</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with a relentless focus on delivery, ensuring your AI initiatives succeed where others fail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Production-First Mindset',
                description: 'We don\'t build demos or experiments. Every solution we deliver is designed for production environments, with proper monitoring, governance, and scalability built in from day one.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Elite Talent Network',
                description: 'Access to 80,000+ carefully vetted AI professionals across machine learning, data science, MLOps, and enterprise technology. We match the right expertise to your specific challenges.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Outcome Accountability',
                description: 'We take responsibility for results, not just deliverables. Our engagement models are designed around measurable business outcomes, ensuring alignment between our success and yours.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                title: 'Regional Understanding',
                description: 'Headquartered in Riyadh with deep roots in the Middle East, we understand local business culture, regulatory requirements, and market dynamics while delivering global-standard solutions.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Enterprise Security',
                description: 'AI systems must be secure, governed, and compliant. We build with enterprise-grade security from the start, ensuring your AI investments meet the strictest regulatory and compliance requirements.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: 'Knowledge Transfer',
                description: 'We don\'t create dependency. Every engagement includes structured knowledge transfer, training, and documentation to ensure your teams can maintain and evolve solutions independently.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 mb-5 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--black)' }}>{item.title}</h3>
                <p className="text-base md:text-lg text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Our Approach */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold text-lg mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--black)' }}>How we deliver success</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every AI initiative moves from concept to production with precision and accountability.
            </p>
          </div>

          {/* Steps with connecting arrows */}
          <div className="relative">
            <style jsx>{`
              @keyframes pulseStep {
                0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
                50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
              }
              @keyframes arrowMove {
                0%, 100% { transform: translateX(0); opacity: 0.5; }
                50% { transform: translateX(8px); opacity: 1; }
              }
            `}</style>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative z-20">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                  title: 'Discover & Assess',
                  description: 'We start by understanding your business objectives, existing infrastructure, and operational constraints. Our assessment identifies high-impact AI opportunities.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  title: 'Design & Architect',
                  description: 'Our experts design production-ready architectures that integrate seamlessly with your existing systems. We prioritize scalability and security.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                  title: 'Build & Deploy',
                  description: 'Using agile methodologies and continuous delivery practices, we build and deploy solutions incrementally with working systems in production.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Operate & Optimize',
                  description: 'Post-deployment, we provide ongoing support, monitoring, and optimization to ensure continuous improvement and lasting capability transfer.',
                },
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col items-center px-4">
                  {/* Step indicator circle */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg"
                      style={{
                        animation: `pulseStep 2s ease-in-out infinite`,
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Animated arrow between steps (desktop only) */}
                  {index < 3 && (
                    <div className="hidden lg:flex absolute top-8 left-[calc(50%+40px)] items-center z-30" style={{ width: 'calc(100% - 80px)' }}>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-green-400 to-green-300" />
                      <div
                        className="flex items-center"
                        style={{ animation: 'arrowMove 1.5s ease-in-out infinite', animationDelay: `${index * 0.3}s` }}
                      >
                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Card content - fixed height */}
                  <div className="p-8 rounded-2xl bg-neutral-50 shadow-sm hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col" style={{ minHeight: '280px' }}>
                    <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--black)' }}>{item.title}</h3>
                    <p className="text-base md:text-lg text-gray-600 flex-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Industry Expertise */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold text-lg mb-4">Industry Expertise</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--black)' }}>Deep domain knowledge</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We bring specialized AI expertise across key industries, understanding the unique challenges, regulations, and opportunities in each sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: 'Financial Services',
                description: 'From fraud detection to algorithmic trading, we help banks and financial institutions leverage AI for risk management, compliance automation, and customer experience enhancement.',
                capabilities: ['Fraud Detection & Prevention', 'Credit Risk Modeling', 'Regulatory Compliance', 'Customer Analytics'],
              },
              {
                industry: 'Healthcare & Life Sciences',
                description: 'AI-powered solutions for medical imaging, drug discovery, patient care optimization, and clinical operations that improve outcomes while maintaining strict compliance.',
                capabilities: ['Medical Image Analysis', 'Clinical Decision Support', 'Drug Discovery AI', 'Patient Flow Optimization'],
              },
              {
                industry: 'Government & Public Sector',
                description: 'Supporting digital transformation initiatives with secure, scalable AI solutions for citizen services, public safety, and operational efficiency.',
                capabilities: ['Smart City Solutions', 'Document Processing', 'Predictive Analytics', 'Citizen Services AI'],
              },
              {
                industry: 'Energy & Utilities',
                description: 'Optimizing operations, predicting maintenance needs, and improving grid efficiency through AI-driven insights and automation.',
                capabilities: ['Predictive Maintenance', 'Grid Optimization', 'Energy Forecasting', 'Asset Management'],
              },
              {
                industry: 'Retail & E-commerce',
                description: 'Personalizing customer experiences, optimizing supply chains, and driving revenue growth through intelligent automation and analytics.',
                capabilities: ['Personalization Engines', 'Demand Forecasting', 'Price Optimization', 'Inventory Management'],
              },
              {
                industry: 'Manufacturing',
                description: 'Driving operational excellence through predictive maintenance, quality control, and intelligent process automation on the factory floor.',
                capabilities: ['Quality Inspection AI', 'Supply Chain Analytics', 'Process Optimization', 'Robotics Integration'],
              },
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--black)' }}>{item.industry}</h3>
                <p className="text-base md:text-lg text-gray-600 mb-5">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.capabilities.map((cap, i) => (
                    <span key={i} className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-full font-medium">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Global Presence - Map */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-lg mb-4">Global Presence</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--black)' }}>Regional execution. Global delivery.</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Headquartered in Riyadh with distributed teams across Europe, Asia, and the United States. This model combines regional understanding with global scale and specialised AI expertise.
            </p>
          </div>

          {/* Interactive Map */}
          <div className="mb-16">
            <RegionsMap />
          </div>

          {/* Region Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map((region, index) => (
              <div key={index} className="card-feature p-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg md:text-xl">{region.region}</h3>
                <p className="text-base text-green-600 mb-3">{region.focus}</p>
                <ul className="space-y-2">
                  {region.capabilities.map((cap, i) => (
                    <li key={i} className="text-sm md:text-base text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Cities Scroll */}
      <section className="py-4 overflow-hidden bg-subtle border-y border-gray-100">
        <div className="relative">
          <div className="flex animate-scroll-cities whitespace-nowrap">
            {['Riyadh', 'Doha', 'Dubai', 'Bangalore', 'Ho Chi Minh City', 'Singapore', 'Manila', 'Amman', 'Beirut', 'Barcelona', 'Milan', 'London', 'Berlin', 'Zagreb', 'Riyadh', 'Doha', 'Dubai', 'Bangalore', 'Ho Chi Minh City', 'Singapore', 'Manila', 'Amman', 'Beirut', 'Barcelona', 'Milan', 'London', 'Berlin', 'Zagreb'].map((city, index) => (
              <span key={index} className="text-sm font-medium mx-6 inline-block text-gray-500">
                {city}
                <span className="mx-3 text-green-500">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Leadership Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold text-lg mb-4">Leadership</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'var(--black)' }}>Our leadership team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="text-center group">
                <div
                  className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 border-4 border-white"
                  style={{ background: 'var(--gray-100)' }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.position }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm md:text-base">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Vision 2030 Alignment */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80"
                  alt="Riyadh skyline"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-green-600 font-semibold text-lg mb-4">Vision 2030 Aligned</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Built for Saudi Arabia and the Middle East</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                FSIT supports AI and digital transformation initiatives aligned with Vision 2030. We work closely with government and semi-government entities, large enterprises, and consulting partners to deliver operational efficiency, data-driven decision-making, and secure AI adoption.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white">
                  <p className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--green)' }}>$20B+</p>
                  <p className="text-base md:text-lg text-gray-600">Saudi AI Investment by 2030</p>
                </div>
                <div className="p-5 rounded-xl bg-white">
                  <p className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--green)' }}>90%</p>
                  <p className="text-base md:text-lg text-gray-600">Companies adopting AI by 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Saudi Presence */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'var(--black)' }}>Across the Kingdom</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: 'Riyadh', type: 'Headquarters', image: 'https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80' },
              { city: 'Jeddah', type: 'Regional Office', image: 'https://images.unsplash.com/photo-1641935886235-d5deab1625f5?auto=format&fit=crop&w=1920&q=80' },
              { city: 'NEOM', type: 'Future Projects', image: 'https://images.unsplash.com/photo-1682687221080-5cb261c645cb?auto=format&fit=crop&w=1920&q=80' },
            ].map((location, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden group h-72">
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold text-2xl md:text-3xl">{location.city}</p>
                  <p className="text-white/90 text-lg">{location.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Commitment */}
      <section className="py-20 bg-subtle">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-green-600 font-semibold text-lg mb-4">Our Commitment</p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--black)' }}>We measure success by impact</h3>
            <p className="text-lg md:text-xl text-gray-600 mb-8">Not headcount, buzzwords, or slide decks.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                'Responsible AI adoption',
                'Measurable business outcomes',
                'Long-term partnerships',
                'Knowledge transfer built-in',
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl bg-white border border-gray-100">
                  <p className="text-base md:text-lg font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 17. CTA */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="container-max text-center">
          <p className="text-xl md:text-2xl text-gray-500 mb-4">AI success is not about intent</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ color: 'var(--black)' }}>
            It's about <span className="text-green-600">execution</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We don't just help organisations adopt AI. We help them operate with it — with purpose, precision, and lasting capability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Start today
            </Link>
            <Link href="/how-we-work" className="btn-secondary text-lg px-8 py-4">
              How we work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
