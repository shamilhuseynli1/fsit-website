'use client';

import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import NetworkBackground from '@/components/NetworkBackground';
import HeroProcessVisual from '@/components/HeroProcessVisual';

export default function HowWeWork() {
  const steps = [
    {
      step: 'Define',
      title: 'Align on outcomes',
      description: 'We align on business outcomes, system constraints, data readiness, and operational realities. AI use cases are prioritised based on impact, feasibility, and time to value.',
      icon: '🎯',
      color: 'from-primary-500 to-primary-400',
    },
    {
      step: 'Embed',
      title: 'Deploy AI teams',
      description: 'We deploy dedicated AI engineers, data scientists, and delivery leads who work as an extension of your internal teams.',
      icon: '👥',
      color: 'from-primary-500 to-green-500',
    },
    {
      step: 'Build',
      title: 'Develop integrated systems',
      description: 'AI systems are developed to integrate with existing platforms, workflows, and data sources — not as standalone experiments.',
      icon: '🔧',
      color: 'from-primary-600 to-primary-500',
    },
    {
      step: 'Operate',
      title: 'Ensure reliability',
      description: 'We support deployment, monitoring, optimisation, and human-in-the-loop workflows to ensure reliability, accuracy, and compliance in production.',
      icon: '⚙️',
      color: 'from-gold-500 to-orange-500',
    },
    {
      step: 'Scale',
      title: 'Expand with governance',
      description: 'Successful systems are expanded across teams, functions, or regions with performance, governance, and security in place.',
      icon: '🚀',
      color: 'from-primary-500 to-primary-400',
    },
  ];

  const delivers = [
    { text: 'Pre-vetted AI engineers and data specialists with real production experience', icon: '👨‍💻' },
    { text: 'Teams structured around outcomes, not hours', icon: '🎯' },
    { text: 'Long-term engagement models for continuous improvement', icon: '🔄' },
    { text: 'Deep collaboration with internal stakeholders and systems', icon: '🤝' },
  ];

  const enterpriseFeatures = [
    { text: 'Secure data handling and encrypted transmission', icon: '🔒' },
    { text: 'Deployment within existing IT and cloud environments', icon: '☁️' },
    { text: 'Governance-aware AI workflows', icon: '📋' },
    { text: 'Human oversight where automation alone is insufficient', icon: '👁️' },
    { text: 'Monitoring and optimisation post-deployment', icon: '📊' },
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
              <pattern id="networkPatternProcess" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#8b5cf6" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#networkPatternProcess)" />
          </svg>
        </div>

        <AnimatedBackground />
        <NetworkBackground nodeCount={50} maxDistance={120} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Our Process</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                How We{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                  Work
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
                AI execution, built for production, not experimentation
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">98%</div>
                  <div className="text-neutral-400 text-sm">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">3 weeks</div>
                  <div className="text-neutral-400 text-sm">To Deploy</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">5 Steps</div>
                  <div className="text-neutral-400 text-sm">Process</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block">
              <HeroProcessVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="relative py-24 bg-dark-800">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-neutral-400 mb-4">
            Most organisations don&apos;t fail at AI because of lack of ambition
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold mb-12">
            They fail because AI is treated as a side project, disconnected from real systems, data, and operations
          </p>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500" />
            <div className="relative bg-dark-900/90 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 mb-4">
                FSIT exists to close that gap
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                We work as an execution partner — embedding AI-native teams that design, build, deploy, and operate AI systems inside real enterprise environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-4">
              <span className="text-primary-400 text-sm font-medium">The Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Define → Embed → Build → Operate → Scale
            </h2>
          </div>

          <div className="space-y-6">
            {steps.map((item, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

                <div className="relative bg-dark-800/80 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 md:p-8 hover:border-primary-500/50 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color} font-semibold uppercase text-sm tracking-wider`}>
                          {item.step}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FSIT Delivers */}
      <section className="relative py-24 bg-dark-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-4">
              <span className="text-primary-400 text-sm font-medium">What We Deliver</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              FSIT Delivers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {delivers.map((item, index) => (
              <div key={index} className="group bg-dark-900/60 backdrop-blur-sm border border-dark-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:translate-y-[-2px]">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <span className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-primary-500/20 mb-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <p className="text-neutral-300 font-medium leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Ready */}
      <section className="relative py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/10 border border-primary-600/30 rounded-full mb-4">
              <span className="text-primary-500 text-sm font-medium">Enterprise Grade</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-ready by design
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              AI systems designed to operate in complex, regulated, and high-stakes environments
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="group bg-dark-800/60 backdrop-blur-sm border border-dark-700 p-6 rounded-2xl text-center hover:border-primary-600/50 transition-all duration-300 hover:translate-y-[-2px]">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <p className="text-neutral-300 font-medium text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Flow Diagram */}
      <section className="relative py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              From Strategy to Execution
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A seamless flow from defining outcomes to scaling AI systems
            </p>
          </div>

          {/* Visual Flow */}
          <div className="relative bg-dark-900/60 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Your Team */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/30">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-white font-semibold mb-1">Your Team</h3>
                <p className="text-neutral-400 text-sm">Internal stakeholders</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-primary-500" />
                <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-primary-500 to-primary-500" />

              {/* FSIT */}
              <div className="text-center flex-1">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-primary-400 rounded-3xl opacity-30 blur-lg animate-pulse" />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/30">
                    <span className="text-3xl">🤖</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-1">FSIT AI Teams</h3>
                <p className="text-neutral-400 text-sm">Embedded specialists</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600" />
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-primary-500 to-primary-600" />

              {/* Production Systems */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-600/30">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-white font-semibold mb-1">Production AI</h3>
                <p className="text-neutral-400 text-sm">Working systems</p>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 pt-8 border-t border-dark-700">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">98%</p>
                  <p className="text-neutral-400 text-sm mt-1">Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">3 weeks</p>
                  <p className="text-neutral-400 text-sm mt-1">To Deploy</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Production</p>
                  <p className="text-neutral-400 text-sm mt-1">Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build AI systems that actually run your business
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Talk to FSIT&apos;s delivery team
          </p>
          <Link
            href="/build-scale-ai"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
          >
            Book a free consultation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
