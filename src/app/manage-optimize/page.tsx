'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import HeroOptimizeVisual from '@/components/HeroOptimizeVisual';
import ProcessFlow from '@/components/ProcessFlow';
import BranchingFromTitle from '@/components/BranchingFromTitle';

export default function ManageOptimize() {
  const whyManage = [
    { title: 'Continuous optimization', desc: 'Always improving performance' },
    { title: '24/7 system monitoring', desc: 'Round-the-clock oversight' },
    { title: 'Expert AI operations', desc: 'Specialized MLOps teams' },
    { title: 'Performance guarantees', desc: 'SLAs you can trust' },
    { title: 'Proactive issue resolution', desc: 'Fix problems before they grow' },
  ];
  const services = [
    {
      title: 'AI System Management',
      description: 'Full lifecycle management of your AI systems — from deployment to retirement.',
      features: ['System administration', 'Version management', 'Configuration control', 'Dependency updates'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time visibility into AI system performance with proactive issue detection.',
      features: ['Latency tracking', 'Throughput monitoring', 'Error rate alerts', 'Resource utilization'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Model Optimization',
      description: 'Continuous improvement of model accuracy, speed, and cost-effectiveness.',
      features: ['Model retraining', 'Hyperparameter tuning', 'Inference optimization', 'Cost reduction'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Data Quality Management',
      description: 'Ensure the data feeding your AI systems remains accurate and reliable.',
      features: ['Data validation', 'Drift detection', 'Quality scoring', 'Pipeline monitoring'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ];

  const optimizationAreas = [
    {
      title: 'Accuracy',
      current: '94%',
      optimized: '99%',
      description: 'Model prediction accuracy',
    },
    {
      title: 'Latency',
      current: '450ms',
      optimized: '85ms',
      description: 'Average inference time',
    },
    {
      title: 'Cost',
      current: '$12K/month',
      optimized: '$4K/month',
      description: 'Infrastructure costs',
    },
    {
      title: 'Uptime',
      current: '97%',
      optimized: '99.9%',
      description: 'System availability',
    },
  ];

  const monitoringCapabilities = [
    { title: 'Model Performance', items: ['Accuracy metrics', 'Prediction confidence', 'Output quality', 'A/B test results'] },
    { title: 'System Health', items: ['CPU/GPU utilization', 'Memory usage', 'Queue depths', 'Error rates'] },
    { title: 'Data Quality', items: ['Input validation', 'Feature drift', 'Label distribution', 'Data freshness'] },
    { title: 'Business Metrics', items: ['Conversion impact', 'Cost per prediction', 'User satisfaction', 'ROI tracking'] },
  ];

  const supportTiers = [
    {
      tier: 'Standard',
      description: 'Essential support for stable AI systems',
      features: ['Business hours support', 'Email & ticket system', '24-hour response SLA', 'Monthly performance reviews'],
      recommended: false,
    },
    {
      tier: 'Premium',
      description: 'Comprehensive support for mission-critical AI',
      features: ['24/7 support coverage', 'Dedicated success manager', '4-hour response SLA', 'Weekly optimization reviews'],
      recommended: true,
    },
    {
      tier: 'Enterprise',
      description: 'White-glove service for enterprise AI programs',
      features: ['Embedded support team', 'Proactive monitoring', '1-hour response SLA', 'Continuous optimization'],
      recommended: false,
    },
  ];

  const stats = [
    { value: '98%', label: 'Optimization success rate' },
    { value: '99.9%', label: 'Uptime achieved' },
    { value: '65%', label: 'Cost reduction' },
    { value: '24/7', label: 'Proactive monitoring' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[auto] md:min-h-[85vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1920&q=80"
          alt="Manage & Optimize"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 md:bg-black/60" />
        <NetworkBackground nodeCount={60} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative container-max pt-36 pb-4 md:py-36">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight animate-fade-in-up" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Keep AI Running<br />
                <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>At Peak Performance</span>
              </h1>
              <p className="text-lg md:text-2xl text-white mb-6 md:mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Continuous management and optimization of your AI systems. We ensure your AI stays accurate, fast, and cost-effective as your business evolves.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Link href="/contact" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                  Optimize your AI
                </Link>
                <Link href="/ai-operations" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-900 transition-all text-base md:text-lg">
                  View AI operations
                </Link>
              </div>
            </div>
            <div className="mt-2 lg:mt-0 transform scale-[0.75] md:scale-100 origin-top -mb-16 md:mb-0">
              <HeroOptimizeVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-dark-900">{stat.value}</p>
                <p className="text-dark-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>AI Management Services</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Comprehensive management to keep your AI systems running smoothly
            </p>
          </div>

          <div className="mb-12">
            <ProcessFlow steps={[
              { num: '01', title: 'Manage', desc: 'System Administration' },
              { num: '02', title: 'Monitor', desc: 'Performance Tracking' },
              { num: '03', title: 'Optimize', desc: 'Model Improvement' },
              { num: '04', title: 'Maintain', desc: 'Data Quality' },
            ]} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-lg p-4 hover:border-[#00A651] hover:shadow-md transition-all duration-300 text-center md:text-left">
                <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 mb-3 mx-auto md:mx-0">
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold text-dark-900 mb-1">{service.title}</h3>
                <p className="text-dark-500 text-sm mb-3 line-clamp-2">{service.description}</p>
                <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="text-[10px] bg-white text-dark-600 px-1.5 py-0.5 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Results */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--black)' }}>Real Optimization Results</h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Typical improvements we achieve for our clients' AI systems
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-neutral-200 text-center">
                <h3 className="text-base font-semibold text-dark-900 mb-2">{area.title}</h3>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-dark-400 line-through text-xs">{area.current}</span>
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-lg font-bold text-primary-600">{area.optimized}</span>
                </div>
                <p className="text-dark-500 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-max">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>What We Monitor</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Comprehensive visibility across all aspects of your AI systems
            </p>
          </div>

          {/* Animated horizontal line */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="monitorLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="monitorPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#monitorLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#monitorPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {monitoringCapabilities.map((cap, index) => (
              <div key={index} className="relative">
                {/* Dashed connector line between blocks */}
                {index < monitoringCapabilities.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0 -translate-y-1/2 z-10" style={{ borderTop: '2px dashed #00A651', opacity: 0.5 }} />
                )}
                <div className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl p-5 h-full hover:border-[#00A651] hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-dark-900 mb-3 text-base">{cap.title}</h3>
                  <div className="space-y-1.5">
                    {cap.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-[#00A651]/10">
                        <span className="text-sm text-dark-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--black)' }}>Choose Your Support Level</h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Flexible support options to match your operational requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {supportTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-[#F5F3F0] rounded-lg p-4 hover:shadow-md transition-all duration-300 relative ${tier.recommended ? 'border-2 border-primary-500' : 'border border-[#00A651]/20 hover:border-[#00A651]'}`}
              >
                {tier.recommended && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-dark-900 mb-1 mt-1">{tier.tier}</h3>
                <p className="text-dark-500 text-sm mb-3">{tier.description}</p>
                <div className="space-y-1">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-neutral-50 p-1.5 rounded border border-neutral-100">
                      <span className="text-sm text-dark-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Manage With Us */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Proactive, Not Reactive</h2>
            <p className="text-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              We don't wait for things to break. Our proactive approach identifies and resolves issues before they impact your business.
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="manageWhyLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="manageWhyPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#manageWhyLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#manageWhyPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {[
              'Proactive monitoring catches issues early',
              'Continuous optimization, not just maintenance',
              'Deep AI expertise, not generic IT support',
              'Business-aligned SLAs and metrics',
              'Regular reporting and recommendations',
            ].map((item, i) => (
              <div key={i} className="relative">
                {/* Arrow connector between blocks */}
                {i < 4 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8M10 4l4 4-4 4" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                <div className="group text-center p-4 bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl hover:border-[#00A651] hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-base font-bold group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow down to Included With Management */}
          <div className="flex justify-center mb-6">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0v32M6 26l6 6 6-6" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Included With Management */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-dark-900 mb-6 text-center">Included With Management</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Custom Dashboards', desc: 'Real-time visibility into your AI systems' },
                { title: 'Monthly Reports', desc: 'Performance trends and recommendations' },
                { title: 'Optimization Reviews', desc: 'Regular analysis for improvement opportunities' },
                { title: 'Incident Response', desc: 'Rapid resolution when issues arise' },
              ].map((item, i) => (
                <div key={i} className="group text-center p-4 rounded-xl bg-neutral-100 hover:bg-primary-50 transition-all duration-300">
                  <h4 className="font-bold text-base mb-2 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                    {item.title}
                  </h4>
                  <p className="text-dark-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Manage - Animated Branching */}
      <section className="py-16" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-2">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--black)' }}>Why organizations choose FSIT for AI operations</h2>
          </div>
          <BranchingFromTitle items={whyManage} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-md text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
            Ready to optimize
            <br />
            <span style={{ color: 'var(--green)' }}>your AI?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            Let's discuss how we can improve the performance and reliability of your AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get started
            </Link>
            <Link href="/protect-scale" className="btn-secondary">
              Learn about governance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
