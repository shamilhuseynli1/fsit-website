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
      {/* Hero - Vision Statement */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden" style={{ background: 'var(--cream)' }}>
        <img
          src="https://images.unsplash.com/photo-1694018359679-49465b4c0d61?auto=format&fit=crop&w=1920&q=80"
          alt="FSIT Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/20" />
        <div className="container-max relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="label mb-4">About FSIT</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6 leading-[1.1]">
              Closing the gap between
              <span className="block text-gradient">AI ambition and execution</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              We exist to help organizations build, scale, and operationalize AI through augmented intelligence — combining elite expertise, delivery teams, and managed services embedded directly into operations.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h3 mb-6">AI ambition is everywhere. Real execution is rare.</h2>
              <p className="text-gray-600 mb-6">
                Enterprises and governments invest heavily in AI initiatives but struggle beyond pilots and disconnected tools. The gap isn't technology — it's delivery.
              </p>
              <p className="text-gray-600 mb-6">
                FSIT was created to solve this growing problem.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-4">AI initiatives fail when they are:</p>
              <div className="space-y-3">
                {[
                  'Isolated from core systems',
                  'Built without operational ownership',
                  'Treated as experiments rather than infrastructure',
                  'Delivered without accountability for production impact',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200">
                <p className="text-gray-800 text-sm">
                  <span className="font-semibold text-green-700">FSIT delivers</span> AI systems embedded into workflows, properly governed, and built to scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance - Key Metrics */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="label mb-2">FSIT at a Glance</p>
            <h2 className="h4">Future Systems for Information Technology</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-transparent">
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-0">
            {/* Left Content */}
            <div className="lg:w-[42%] lg:pr-6 flex flex-col justify-center">
              <p className="label mb-4">Our Story</p>
              <h2 className="h3 mb-6">From IT services to AI-first delivery</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2012 and headquartered in Riyadh, Future Systems for Information Technology (FSIT) began as an IT staffing and consulting company serving enterprises across Saudi Arabia.
                </p>
                <p>
                  Long before AI became mainstream, we recognised that real transformation would require more than traditional consulting or staffing models. Organizations would need trusted AI expertise embedded directly into their operations — focused on execution, governance, and measurable outcomes.
                </p>
                <p>
                  Today, FSIT operates as an AI-first augmented intelligence partner, with one of the region's most selective talent networks spanning over 80,000 carefully vetted professionals across AI engineering, machine learning, data science, and enterprise technology.
                </p>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                <p className="text-lg font-medium text-gray-900">
                  "Embed the right AI expertise, at the right time, inside your organisation — to reduce execution risk, accelerate delivery, and build lasting internal capability."
                </p>
              </div>
            </div>

            {/* Center Connection - SVG with lines */}
            <div className="hidden lg:block lg:w-[16%] relative">
              <svg className="w-full h-full" viewBox="0 0 100 400" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="storyLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#19AB5D" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#19AB5D" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="storyVertGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#19AB5D" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#19AB5D" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#19AB5D" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Main node - center left */}
                <circle cx="20" cy="200" r="8" fill="#19AB5D" />
                <circle cx="20" cy="200" r="12" fill="none" stroke="#19AB5D" strokeWidth="2" opacity="0.3">
                  <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Horizontal line from main node */}
                <line x1="28" y1="200" x2="50" y2="200" stroke="url(#storyLineGrad)" strokeWidth="2" />

                {/* Vertical trunk line */}
                <line x1="50" y1="30" x2="50" y2="370" stroke="url(#storyVertGrad)" strokeWidth="2" />

                {/* Branch lines to timeline items */}
                {[45, 105, 165, 225, 285, 355].map((y, i) => (
                  <g key={i}>
                    {/* Vertical connector to branch */}
                    <line x1="50" y1="200" x2="50" y2={y} stroke="#19AB5D" strokeWidth="1.5" opacity="0.4" />
                    {/* Horizontal branch */}
                    <line x1="50" y1={y} x2="85" y2={y} stroke="url(#storyLineGrad)" strokeWidth="2" />
                    {/* Animated dot on branch */}
                    <circle r="3" fill="#19AB5D">
                      <animateMotion dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite">
                        <mpath href={`#branchPath${i}`} />
                      </animateMotion>
                    </circle>
                    <path id={`branchPath${i}`} d={`M50,${y} L85,${y}`} fill="none" />
                    {/* End dot */}
                    <circle cx="85" cy={y} r="4" fill="#19AB5D" opacity="0.6" />
                  </g>
                ))}
              </svg>
            </div>

            {/* Right Timeline */}
            <div className="lg:w-[42%]">
              <div className="relative h-full flex flex-col justify-between py-2">
                {timeline.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Content */}
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-300 transition-all duration-300 group-hover:translate-x-2">
                      <p className="text-sm font-bold text-green-600 mb-1">{item.year}</p>
                      <p className="text-gray-700 text-sm">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="label mb-4">Our Values</p>
            <h2 className="h3 mb-4">What we believe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every engagement and define how we deliver AI that works.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <div key={index} className="card-feature p-6 text-center group">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Are NOT */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 mb-6">FSIT is not a traditional consultancy. Not a generic outsourcing provider. Not a staffing marketplace.</p>
            <h3 className="h4 mb-8">We are an <span className="text-gradient">AI execution partner</span></h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'AI-native engineering teams',
                'End-to-end responsibility',
                'Long-term engagement models',
                'Systems built for complexity',
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-sm font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence - Map */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="label mb-4">Global Presence</p>
            <h2 className="h3 mb-4">Regional execution. Global delivery.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
              <div key={index} className="card-feature p-5">
                <h3 className="font-semibold text-gray-900 mb-1">{region.region}</h3>
                <p className="text-sm text-green-600 mb-3">{region.focus}</p>
                <ul className="space-y-1">
                  {region.capabilities.map((cap, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Scroll */}
      <section className="py-4 overflow-hidden bg-white border-y border-gray-100">
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

      {/* Leadership Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="label mb-4">Leadership</p>
            <h2 className="h3">Our leadership team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="text-center group">
                <div
                  className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 border-4 border-white"
                  style={{ background: 'var(--gray-100)' }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.position }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{member.name}</h3>
                <p className="text-gray-500 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 Alignment */}
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
              <p className="label mb-4">Vision 2030 Aligned</p>
              <h2 className="h3 mb-6">Built for Saudi Arabia and the Middle East</h2>
              <p className="text-gray-600 mb-6">
                FSIT supports AI and digital transformation initiatives aligned with Vision 2030. We work closely with government and semi-government entities, large enterprises, and consulting partners to deliver operational efficiency, data-driven decision-making, and secure AI adoption.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white">
                  <p className="text-3xl font-bold text-gradient">$20B+</p>
                  <p className="text-sm text-gray-600">Saudi AI Investment by 2030</p>
                </div>
                <div className="p-4 rounded-xl bg-white">
                  <p className="text-3xl font-bold text-gradient">90%</p>
                  <p className="text-sm text-gray-600">Companies adopting AI by 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Presence */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="h3">Across the Kingdom</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { city: 'Riyadh', type: 'Headquarters', image: 'https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80' },
              { city: 'Jeddah', type: 'Regional Office', image: 'https://images.unsplash.com/photo-1641935886235-d5deab1625f5?auto=format&fit=crop&w=1920&q=80' },
              { city: 'NEOM', type: 'Future Projects', image: 'https://images.unsplash.com/photo-1682687221080-5cb261c645cb?auto=format&fit=crop&w=1920&q=80' },
            ].map((location, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden group h-64">
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-lg">{location.city}</p>
                  <p className="text-white/90 text-sm">{location.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-subtle">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label mb-4">Our Commitment</p>
            <h3 className="h4 mb-6">We measure success by impact</h3>
            <p className="text-gray-600 mb-8">Not headcount, buzzwords, or slide decks.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Responsible AI adoption',
                'Measurable business outcomes',
                'Long-term partnerships',
                'Knowledge transfer built-in',
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-white border border-gray-100">
                  <p className="text-sm font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max text-center">
          <p className="text-xl text-gray-500 mb-4">AI success is not about intent</p>
          <h2 className="h2 mb-8">
            It's about <span className="text-gradient">execution</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We don't just help organisations adopt AI. We help them operate with it — with purpose, precision, and lasting capability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start today
            </Link>
            <Link href="/how-we-work" className="btn-secondary">
              How we work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
