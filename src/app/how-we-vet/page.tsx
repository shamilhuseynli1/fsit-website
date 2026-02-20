'use client';

import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import NetworkBackground from '@/components/NetworkBackground';
import HeroVettingVisual from '@/components/HeroVettingVisual';

export default function HowWeVet() {
  const vettingSteps = [
    {
      number: '1',
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
      number: '2',
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
      number: '3',
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
      number: '4',
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
      number: '5',
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
    { label: 'Initial Applications', value: '100%', icon: '📥' },
    { label: 'Technical Screening', value: '40%', icon: '🔍' },
    { label: 'Deep Evaluation', value: '15%', icon: '🎯' },
    { label: 'Final Selection', value: '1%', icon: '⭐' },
  ];

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-solutions.jpg)' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark-900/80" />

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Quality Assurance</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                How We Vet{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                  Elite AI Talent
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
                At FSIT, our vetting process ensures only top-tier AI professionals become part of our augmented intelligence network
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">99%</div>
                  <div className="text-neutral-400 text-sm">Filtered Out</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">Top 1%</div>
                  <div className="text-neutral-400 text-sm">Selected</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">5 Steps</div>
                  <div className="text-neutral-400 text-sm">Vetting</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="mt-8 lg:mt-0">
              <HeroVettingVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Funnel Visual */}
      <section className="relative py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filterStats.map((stat, index) => (
              <div key={index} className="relative group">
                {/* Connector */}
                {index < filterStats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent z-10" />
                )}

                <div className={`bg-dark-900/60 backdrop-blur-sm border border-dark-700 rounded-xl p-6 text-center hover:border-primary-500/50 transition-all duration-300 ${
                  index === filterStats.length - 1 ? 'bg-gradient-to-br from-primary-500/10 to-primary-400/10 border-primary-500/30' : ''
                }`}>
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <p className={`text-3xl font-bold mb-2 ${
                    index === filterStats.length - 1
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300'
                      : 'text-white'
                  }`}>{stat.value}</p>
                  <p className="text-neutral-400 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Steps */}
      <section className="relative py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-4">
              <span className="text-primary-400 text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              5-Step Vetting Framework
            </h2>
          </div>

          <div className="space-y-6">
            {vettingSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

                <div className="relative bg-dark-800/80 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 md:p-8 hover:border-primary-500/50 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-2xl">{step.number}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{step.icon}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-neutral-400 mb-4">{step.description}</p>

                      <div className="grid md:grid-cols-2 gap-3">
                        {step.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 bg-dark-700/40 p-3 rounded-lg border border-dark-600/50 hover:border-primary-500/30 transition-all">
                            <span className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-400 rounded-md flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </span>
                            <span className="text-neutral-300 text-sm leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cutting Edge Note */}
      <section className="relative py-16 bg-gradient-to-r from-primary-600 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0tNCA0aC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🚀</div>
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
            This ensures that the professionals you work with remain at the
            <br />
            <span className="font-bold text-white/90">cutting edge of AI delivery</span>
          </p>
        </div>
      </section>

      {/* Why Our Vetting Matters */}
      <section className="relative py-24 bg-dark-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/10 border border-primary-600/30 rounded-full mb-4">
              <span className="text-primary-500 text-sm font-medium">The Result</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Our Vetting Matters
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500" />

              <div className="relative bg-dark-900/90 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-10 md:p-12 text-center">
                <div className="text-6xl mb-6">🏆</div>
                <p className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 mb-6">
                  99%
                </p>
                <p className="text-2xl text-white mb-4">
                  We filter out up to 99% of applicants
                </p>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  ensuring organizations gain access to trusted AI capacity capable of delivering real, scalable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="relative py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              FSIT Talent vs Generic Outsourcing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Generic */}
            <div className="bg-dark-800/60 backdrop-blur-sm border border-dark-700 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">❌</div>
                <h3 className="text-xl font-semibold text-neutral-400">Generic Outsourcing</h3>
              </div>
              <div className="space-y-3">
                {[
                  'Resume-based screening only',
                  'No production AI experience required',
                  'Generalist contractors',
                  'High turnover, inconsistent quality',
                  'No ongoing performance monitoring',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-dark-700/40 p-3 rounded-lg border border-red-500/20">
                    <span className="w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-md flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-neutral-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FSIT */}
            <div className="bg-gradient-to-br from-primary-500/10 to-primary-400/10 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-xl font-semibold text-white">FSIT Vetted Talent</h3>
              </div>
              <div className="space-y-3">
                {[
                  '5-step comprehensive evaluation',
                  'Proven production AI delivery required',
                  'Specialized AI professionals',
                  'Long-term partnerships, consistent excellence',
                  'Continuous performance monitoring & upskilling',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-dark-800/60 p-3 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-all">
                    <span className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-400 rounded-md flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-neutral-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="relative py-24 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-neutral-400 mb-4">With FSIT, you don&apos;t just access talent —</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            you gain augmented intelligence{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
              engineered for results.
            </span>
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to access elite AI talent?
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
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
