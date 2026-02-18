'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export default function StaffAugmentation() {
  const benefits = [
    {
      title: 'Flexibility & Scalability',
      description: 'Scale your team up or down based on project demands. Add specialists when needed, reduce when requirements change.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      ),
    },
    {
      title: 'Cost Efficiency',
      description: 'Eliminate recruitment costs, training overhead, and infrastructure expenses. Pay only for the expertise you need.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Full Control',
      description: 'Maintain complete oversight of your augmented team. Direct communication, aligned processes, and integrated workflows.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Rapid Deployment',
      description: 'Get pre-vetted AI specialists integrated into your team within days, not months. Hit the ground running.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const engagementModels = [
    {
      title: 'Dedicated Teams',
      description: 'A fully committed remote team that functions as an extension of your in-house team. Ideal for long-term product development and ongoing AI initiatives.',
      features: ['Long-term commitment', 'Full integration', 'Dedicated resources', 'Direct management'],
      recommended: true,
    },
    {
      title: 'Team Extension',
      description: 'Add specific AI specialists to your existing team to fill skill gaps. Perfect for projects requiring niche expertise.',
      features: ['Skill gap filling', 'Flexible duration', 'Specialized roles', 'Quick onboarding'],
      recommended: false,
    },
    {
      title: 'Project-Based',
      description: 'Engage a team for specific deliverables with defined scope and timeline. Best for proof-of-concepts and discrete projects.',
      features: ['Defined scope', 'Fixed timeline', 'Deliverable-focused', 'Clear milestones'],
      recommended: false,
    },
  ];

  const roles = [
    { title: 'AI Engineers', count: '500+' },
    { title: 'ML Engineers', count: '300+' },
    { title: 'Data Scientists', count: '400+' },
    { title: 'MLOps Engineers', count: '200+' },
    { title: 'AI Product Managers', count: '150+' },
    { title: 'NLP Specialists', count: '180+' },
    { title: 'Computer Vision Engineers', count: '120+' },
    { title: 'AI Architects', count: '100+' },
  ];

  const process = [
    { step: '01', title: 'Requirements', desc: 'Define your technical needs, team structure, and project goals' },
    { step: '02', title: 'Matching', desc: 'We identify pre-vetted specialists from our talent network' },
    { step: '03', title: 'Interviews', desc: 'You interview and select candidates that fit your culture' },
    { step: '04', title: 'Onboarding', desc: 'Seamless integration with your tools, processes, and team' },
    { step: '05', title: 'Delivery', desc: 'Ongoing support, performance tracking, and team optimization' },
  ];

  const stats = [
    { number: '98%', label: 'Project success rate' },
    { number: '3 weeks', label: 'Team deployment (not 6 months)' },
    { number: '80,000+', label: 'Vetted AI specialists' },
    { number: '59%', label: 'Industry failure rate we beat' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        <NetworkBackground nodeCount={60} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-4 md:!mb-6 animate-fade-in">Staff Augmentation</p>
            <h1 className="hero-title text-white animate-fade-in-up text-3xl md:text-5xl lg:text-6xl">
              Dedicated AI Teams<br />
              <span className="text-primary-500 text-glow">As Your Own</span>
            </h1>
            <p className="hero-subtitle text-base md:text-lg lg:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              An AI-native talent platform that embeds vetted AI engineers and specialists directly into your organization. We focus on execution, speed, and production impact — not traditional consulting or generic outsourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/contact" className="btn-primary text-center">
                Build your AI team
              </Link>
              <Link href="/how-we-vet" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900 text-center">
                See our vetting process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-500">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.number}</p>
                <p className="text-white/80 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Why Staff Augmentation</p>
            <h2 className="section-title">Scale Without Compromise</h2>
            <p className="section-subtitle mx-auto">
              Get the expertise you need, when you need it, without the traditional hiring burden
            </p>
          </div>

          <div className="grid-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-dark-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Engagement Models</p>
            <h2 className="section-title">Choose Your Model</h2>
            <p className="section-subtitle mx-auto">
              Flexible engagement options tailored to your project needs and organizational structure
            </p>
          </div>

          <div className="grid-3">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className={`card card-hover relative ${model.recommended ? 'border-2 border-primary-500' : ''}`}
              >
                {model.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-dark-900 mb-3 mt-2">{model.title}</h3>
                <p className="text-dark-500 text-sm mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark-600">
                      <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Roles */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label !text-primary-500">Available Talent</p>
            <h2 className="section-title !text-white">AI Specialists Ready to Deploy</h2>
            <p className="section-subtitle mx-auto !text-dark-300">
              Access our network of pre-vetted AI professionals across all specializations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((role, index) => (
              <div key={index} className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500 transition-all text-center">
                <p className="text-2xl font-bold text-primary-500 mb-1">{role.count}</p>
                <p className="text-white font-medium">{role.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-dark-400 mb-4">Need a specialized role not listed?</p>
            <Link href="/contact" className="btn-primary">
              Tell us your requirements
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">From Request to Delivery</h2>
            <p className="section-subtitle mx-auto">
              A streamlined process to get the right talent integrated into your team
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-dark-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FSIT */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Why FSIT</p>
              <h2 className="section-title">AI-Native Talent Platform</h2>
              <p className="text-dark-500 mb-6">
                We're not a traditional staffing agency. We're an AI-native delivery platform that embeds vetted specialists to build, deploy, and scale real AI systems — focusing on execution, speed, and production impact.
              </p>
              <ul className="space-y-4">
                {[
                  '98% project success rate vs 59% industry standard',
                  'Teams operational in 3 weeks, not 6 months',
                  'Vetted AI specialists, not generalist contractors',
                  'Focus on production systems, not just PoCs',
                  'Long-term partnership, not body shopping',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Traditional Outsourcing vs FSIT</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-dark-700">
                  <span className="text-dark-300">Success rate</span>
                  <div className="text-right">
                    <span className="text-dark-400 line-through mr-3">59%</span>
                    <span className="text-primary-500 font-semibold">98%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-dark-700">
                  <span className="text-dark-300">Time to deploy</span>
                  <div className="text-right">
                    <span className="text-dark-400 line-through mr-3">6 months</span>
                    <span className="text-primary-500 font-semibold">3 weeks</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-dark-700">
                  <span className="text-dark-300">Focus</span>
                  <div className="text-right">
                    <span className="text-dark-400 line-through mr-3">Cost cutting</span>
                    <span className="text-primary-500 font-semibold">Production impact</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-300">Outcome</span>
                  <div className="text-right">
                    <span className="text-dark-400 line-through mr-3">PoCs & reports</span>
                    <span className="text-primary-500 font-semibold">Working systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-max text-center">
          <h2 className="section-title !text-white mb-4">
            Ready to build your AI team?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Tell us your requirements and we'll match you with the right AI specialists within 48 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start building your team
            </Link>
            <Link href="/how-we-vet" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
              Learn about our vetting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
