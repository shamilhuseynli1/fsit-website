'use client';

import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import NetworkBackground from '@/components/NetworkBackground';
import HeroStaffVisual from '@/components/HeroStaffVisual';

export default function StaffAugmentation() {
  const benefits = [
    {
      title: 'Flexibility & Scalability',
      description: 'Scale your team up or down based on project demands. Add specialists when needed, reduce when requirements change.',
      icon: '📈',
    },
    {
      title: 'Cost Efficiency',
      description: 'Eliminate recruitment costs, training overhead, and infrastructure expenses. Pay only for the expertise you need.',
      icon: '💰',
    },
    {
      title: 'Full Control',
      description: 'Maintain complete oversight of your augmented team. Direct communication, aligned processes, and integrated workflows.',
      icon: '⚙️',
    },
    {
      title: 'Rapid Deployment',
      description: 'Get pre-vetted AI specialists integrated into your team within days, not months. Hit the ground running.',
      icon: '⚡',
    },
  ];

  const engagementModels = [
    {
      title: 'Dedicated Teams',
      description: 'A fully committed remote team that functions as an extension of your in-house team. Ideal for long-term product development and ongoing AI initiatives.',
      features: ['Long-term commitment', 'Full integration', 'Dedicated resources', 'Direct management'],
      recommended: true,
      icon: '🏢',
    },
    {
      title: 'Team Extension',
      description: 'Add specific AI specialists to your existing team to fill skill gaps. Perfect for projects requiring niche expertise.',
      features: ['Skill gap filling', 'Flexible duration', 'Specialized roles', 'Quick onboarding'],
      recommended: false,
      icon: '🔗',
    },
    {
      title: 'Project-Based',
      description: 'Engage a team for specific deliverables with defined scope and timeline. Best for proof-of-concepts and discrete projects.',
      features: ['Defined scope', 'Fixed timeline', 'Deliverable-focused', 'Clear milestones'],
      recommended: false,
      icon: '📋',
    },
  ];

  const specialists = [
    { role: 'AI Engineers', icon: '🤖', color: 'from-primary-500 to-primary-400' },
    { role: 'ML Engineers', icon: '🧠', color: 'from-primary-600 to-primary-500' },
    { role: 'Data Scientists', icon: '📊', color: 'from-primary-500 to-green-500' },
    { role: 'MLOps Engineers', icon: '⚙️', color: 'from-gold-500 to-orange-500' },
    { role: 'NLP Specialists', icon: '💬', color: 'from-primary-500 to-primary-400' },
    { role: 'Computer Vision', icon: '👁️', color: 'from-primary-600 to-primary-500' },
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
              <pattern id="networkPatternStaff" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#22c55e" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#networkPatternStaff)" />
          </svg>
        </div>

        <AnimatedBackground />
        <NetworkBackground nodeCount={50} maxDistance={120} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">AI Talent Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI Staff{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                  Augmentation
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
                Scale your AI capabilities with pre-vetted specialists who integrate seamlessly into your existing teams
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/build-scale-ai"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                >
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/how-we-vet"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-600 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Our Vetting Process
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">80K+</div>
                  <div className="text-neutral-400 text-sm">AI Specialists</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">Top 1%</div>
                  <div className="text-neutral-400 text-sm">Vetted Talent</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">3 weeks</div>
                  <div className="text-neutral-400 text-sm">Deployment</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="mt-8 lg:mt-0">
              <HeroStaffVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 bg-dark-800 border-y border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">80K+</p>
              <p className="text-neutral-400 mt-2">AI Specialists</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">98%</p>
              <p className="text-neutral-400 mt-2">Client Retention</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">3 weeks</p>
              <p className="text-neutral-400 mt-2">Avg. Deployment</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Top 1%</p>
              <p className="text-neutral-400 mt-2">Vetted Talent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Specialists */}
      <section className="relative py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-4">
              <span className="text-primary-400 text-sm font-medium">Available Talent</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Specialists Ready to Join Your Team
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              From machine learning engineers to MLOps specialists, find the exact expertise your project needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialists.map((spec, index) => (
              <div key={index} className="group bg-dark-800/60 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 text-center hover:border-primary-500/50 transition-all duration-300 hover:translate-y-[-4px]">
                <div className={`w-14 h-14 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{spec.icon}</span>
                </div>
                <p className="text-white font-medium text-sm">{spec.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24 bg-dark-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-4">
              <span className="text-primary-400 text-sm font-medium">Why Staff Augmentation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of FSIT Staff Augmentation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <div className="relative bg-dark-900/80 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/10 border border-primary-600/30 rounded-full mb-4">
              <span className="text-primary-500 text-sm font-medium">Flexible Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Engagement Models
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Choose the engagement model that best fits your project requirements and organizational needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <div key={index} className={`group relative ${model.recommended ? 'md:-translate-y-4' : ''}`}>
                {model.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-primary-400 text-white text-xs font-semibold rounded-full">
                    Recommended
                  </div>
                )}
                <div className={`h-full bg-dark-800/80 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-4px] ${
                  model.recommended ? 'border-primary-500/50 shadow-lg shadow-primary-500/10' : 'border-dark-700 hover:border-primary-500/30'
                }`}>
                  <div className="text-4xl mb-4">{model.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">{model.description}</p>
                  <div className="space-y-2">
                    {model.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 bg-dark-700/40 p-2.5 rounded-lg border border-dark-600/50">
                        <span className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-400 rounded-md flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full mb-4">
              <span className="text-gold-400 text-sm font-medium">Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Staff Augmentation Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Define Requirements', description: 'Share your project needs, required skills, and team dynamics', icon: '📋' },
              { step: '2', title: 'Match Specialists', description: 'We identify pre-vetted AI professionals that fit your needs', icon: '🎯' },
              { step: '3', title: 'Interview & Select', description: 'Review candidates and select the best fit for your team', icon: '👥' },
              { step: '4', title: 'Seamless Integration', description: 'Specialists integrate into your team and start contributing', icon: '🚀' },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent" />
                )}
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
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
            Ready to scale your AI team?
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Get access to pre-vetted AI specialists who can start contributing from day one
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/build-scale-ai"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
            >
              Start Hiring
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/how-we-vet"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-500/50 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all duration-300"
            >
              Learn About Our Vetting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
