'use client';

import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import NetworkBackground from '@/components/NetworkBackground';
import HeroVettingVisual from '@/components/HeroVettingVisual';
import ProcessFlow from '@/components/ProcessFlow';

export default function HowWeVet() {
  const vettingSteps = [
    {
      title: 'Comprehensive Technical Evaluation',
      description: 'Candidates are assessed across:',
      items: [
        'Machine Learning & Deep Learning fundamentals',
        'Hands-on experience with Large Language Models (LLMs)',
        'MLOps and production AI deployment',
        'Programming expertise (Python, TensorFlow, PyTorch, etc.)',
        'Secure and scalable AI infrastructure',
      ],
      icon: '🛡️',
      color: 'from-primary-500 to-primary-400',
    },
    {
      title: 'AI Delivery & Product Experience',
      description: 'We evaluate:',
      items: [
        'Proven delivery of production-grade AI systems',
        'Experience working with enterprise or government stakeholders',
        'Ability to translate AI into business impact',
        'Understanding of governance, security, and compliance',
      ],
      icon: '📦',
      color: 'from-primary-500 to-green-500',
    },
    {
      title: 'Behavioral & Cultural Fit',
      description: 'We assess:',
      items: [
        'Communication and collaboration skills',
        'Adaptability within enterprise environments',
        'Structured problem-solving',
        'Client-centric mindset',
      ],
      icon: '🤝',
      color: 'from-primary-600 to-primary-500',
    },
    {
      title: 'Practical Test Assignments',
      description: 'Senior candidates complete scenario-based exercises to validate:',
      items: [
        'AI solution design for real use cases',
        'Scalable and maintainable architectures',
        'Decision-making in complex data environments',
      ],
      icon: '💡',
      color: 'from-gold-500 to-orange-500',
    },
    {
      title: 'Continuous Performance Monitoring',
      description: 'Once deployed, we maintain quality through:',
      items: [
        'Engagement feedback',
        'Ongoing skills validation',
        'Outcome-based assessments',
        'Continuous technical upskilling',
      ],
      icon: '📊',
      color: 'from-primary-500 to-primary-400',
    },
  ];

  const filterStats = [
    { label: 'Initial Applications', value: '100%', iconType: 'inbox' },
    { label: 'Technical Screening', value: '40%', iconType: 'search' },
    { label: 'Deep Evaluation', value: '15%', iconType: 'target' },
    { label: 'Final Selection', value: '1%', iconType: 'star' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[auto] md:min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1682695796795-cc287af78a2b?auto=format&fit=crop&w=1920&q=80)' }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/60" />

        {/* Network pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="networkPatternVet" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#22c55e" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#networkPatternVet)" />
          </svg>
        </div>

        <AnimatedBackground />
        <NetworkBackground nodeCount={50} maxDistance={120} />

        <div className="relative container-max pt-36 pb-4 md:py-36">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                How We Vet{' '}
                <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  Elite AI Talent
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-white mb-6 md:mb-8 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                At FSIT, our vetting process ensures only top-tier AI professionals become part of our augmented intelligence network
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:flex md:items-start md:gap-16 mt-6 md:mt-10">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-green-400 whitespace-nowrap">99%</div>
                  <div className="text-white/80 text-xs md:text-base mt-1">Filtered Out</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-green-400 whitespace-nowrap">Top 1%</div>
                  <div className="text-white/80 text-xs md:text-base mt-1">Selected</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-green-400 whitespace-nowrap">5 Steps</div>
                  <div className="text-white/80 text-xs md:text-base mt-1">Vetting</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="mt-2 lg:mt-0 transform scale-[0.75] md:scale-100 origin-top -mb-16 md:mb-0">
              <HeroVettingVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Funnel Visual */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filterStats.map((stat, index) => (
              <div key={index} className="relative group">
                {/* Connector arrow */}
                {index < filterStats.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8M10 4l4 4-4 4" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                <div className={`bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl p-6 text-center hover:border-[#00A651] hover:shadow-lg transition-all duration-300 ${
                  index === filterStats.length - 1 ? 'bg-gradient-to-br from-[#00A651]/10 to-[#00A651]/5 border-[#00A651]/40' : ''
                }`}>
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#00A651]/10 flex items-center justify-center text-[#00A651]">
                    {stat.iconType === 'inbox' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                    )}
                    {stat.iconType === 'search' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    )}
                    {stat.iconType === 'target' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                      </svg>
                    )}
                    {stat.iconType === 'star' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                  </div>
                  <p className={`text-3xl font-bold mb-2 ${
                    index === filterStats.length - 1
                      ? 'text-[#00A651]'
                      : 'text-dark-900'
                  }`}>{stat.value}</p>
                  <p className="text-dark-500 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Steps */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--black)' }}>
              5-Step Vetting Framework
            </h2>
          </div>

          {/* Process Flow Steps */}
          <div className="mb-16">
            <ProcessFlow steps={[
              { num: '01', title: 'Technical', desc: 'Evaluation' },
              { num: '02', title: 'Delivery', desc: 'Experience' },
              { num: '03', title: 'Cultural', desc: 'Fit' },
              { num: '04', title: 'Practical', desc: 'Testing' },
              { num: '05', title: 'Ongoing', desc: 'Monitoring' },
            ]} />
          </div>

          {/* Step Detail Blocks with Dashed Connectors */}
          <div className="relative pt-8">
            {/* Dashed connector line */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0 h-8" style={{ borderLeft: '2px dashed #00A651', opacity: 0.5 }} />

            <div className="hidden md:flex items-stretch justify-between gap-4">
              {vettingSteps.map((step, index) => (
                <div key={index} className="group relative flex-1 text-center flex flex-col">
                  {/* Dashed connector line from ProcessFlow */}
                  <div className="absolute left-1/2 -translate-x-1/2"
                    style={{ top: '-32px', height: '48px', borderLeft: '2px dashed #00A651', opacity: 0.5 }} />

                  {/* Connection dot */}
                  <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00A651] border-2 border-white shadow-sm z-10" />

                  {/* Block card */}
                  <div className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl p-4 mt-4 flex-1 flex flex-col hover:border-[#00A651] hover:shadow-lg transition-all duration-300">
                    {/* Icon */}
                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#00A651]/10 flex items-center justify-center text-[#00A651]">
                      {index === 0 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-dark-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-dark-500 mb-3">{step.description}</p>

                    {/* Items as tags */}
                    <div className="space-y-1.5 flex-1">
                      {step.items.slice(0, 4).map((item, i) => (
                        <div key={i} className="text-xs py-1.5 px-2 rounded bg-white border border-[#00A651]/10 text-dark-600 hover:border-[#00A651]/30 transition-all">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile version */}
            <div className="md:hidden space-y-4">
              {vettingSteps.map((step, index) => (
                <div key={index} className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl p-5 hover:border-[#00A651] transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#00A651] text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-dark-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-dark-500 mb-3">{step.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {step.items.map((item, i) => (
                      <div key={i} className="text-xs py-2 px-3 rounded bg-white border border-[#00A651]/10 text-dark-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cutting Edge Note */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#00A651]/10 flex items-center justify-center text-[#00A651]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-xl md:text-2xl text-dark-900 font-medium leading-relaxed">
            This ensures that the professionals you work with remain at the
            <br />
            <span className="font-bold text-[#00A651]">cutting edge of AI delivery</span>
          </p>
        </div>
      </section>

      {/* Why Our Vetting Matters */}
      <section className="relative py-24 bg-neutral-150 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--black)' }}>
              Why Our Vetting Matters
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500" />

              <div className="relative bg-white backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 md:p-12 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-xl bg-[#00A651]/10 flex items-center justify-center text-[#00A651]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="md:w-12 md:h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <p className="text-5xl md:text-8xl font-bold text-[#00A651] mb-4 md:mb-6">
                  99%
                </p>
                <p className="text-xl md:text-2xl text-dark-900 mb-3 md:mb-4">
                  We filter out up to 99% of applicants
                </p>
                <p className="text-dark-500 text-base md:text-lg leading-relaxed">
                  ensuring organizations gain access to trusted AI capacity capable of delivering real, scalable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--black)' }}>FSIT Talent vs Generic Outsourcing</h2>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="vetCompareLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="vetComparePulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#vetCompareLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#vetComparePulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Generic */}
            <div className="bg-neutral-50 backdrop-blur-sm border border-neutral-200 rounded-2xl p-4 md:p-6">
              <div className="text-center mb-4">
                <h3 className="text-base md:text-lg font-semibold text-dark-500">Generic Outsourcing</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {[
                  'Resume-based screening only',
                  'No production AI experience required',
                  'Generalist contractors',
                  'High turnover, inconsistent quality',
                  'No ongoing performance monitoring',
                ].map((item, i) => (
                  <div key={i} className="text-center p-2 md:p-3 rounded-lg bg-white border border-red-200">
                    <span className="text-dark-500 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FSIT */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 backdrop-blur-sm border border-primary-200 rounded-2xl p-4 md:p-6">
              <div className="text-center mb-4">
                <h3 className="text-base md:text-lg font-semibold text-dark-900">FSIT Vetted Talent</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {[
                  '5-step comprehensive evaluation',
                  'Proven production AI delivery required',
                  'Specialized AI professionals',
                  'Long-term partnerships, consistent excellence',
                  'Continuous performance monitoring & upskilling',
                ].map((item, i) => (
                  <div key={i} className="group text-center p-2 md:p-3 rounded-lg bg-white border border-primary-200 hover:border-primary-400 transition-all">
                    <span className="text-dark-600 text-xs group-hover:text-green-600 font-medium transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-dark-500 mb-4">With FSIT, you don&apos;t just access talent —</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900">
            you gain augmented intelligence{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              engineered for results.
            </span>
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-b from-cream-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
            Ready to access elite AI talent?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            Start your AI transformation with vetted experts
          </p>
          <Link
            href="/build-scale-ai"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
          >
            Build & Scale AI
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
