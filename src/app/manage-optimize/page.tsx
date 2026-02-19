'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export default function ManageOptimize() {
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
      current: '$12K/mo',
      optimized: '$4K/mo',
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
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        {/* Saudi Modern Office Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-PYOHfWTYkzA?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <NetworkBackground nodeCount={60} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-4 md:!mb-6 animate-fade-in">Manage & Optimize</p>
            <h1 className="hero-title text-white animate-fade-in-up text-3xl md:text-5xl lg:text-6xl">
              Keep AI Running<br />
              <span className="text-primary-500 text-glow">At Peak Performance</span>
            </h1>
            <p className="hero-subtitle text-base md:text-lg lg:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Continuous management and optimization of your AI systems. We ensure your AI stays accurate, fast, and cost-effective as your business evolves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/contact" className="btn-primary text-center">
                Optimize your AI
              </Link>
              <Link href="/ai-operations" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900 text-center">
                View AI operations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary-500">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-white/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Our Services</p>
            <h2 className="section-title">AI Management Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive management to keep your AI systems running smoothly
            </p>
          </div>

          <div className="grid-2">
            {services.map((service, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-900 mb-2">{service.title}</h3>
                    <p className="text-dark-500 text-sm mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-neutral-150 text-dark-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Results */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label !text-primary-500">Optimization Impact</p>
            <h2 className="section-title !text-white">Real Optimization Results</h2>
            <p className="section-subtitle mx-auto !text-dark-300">
              Typical improvements we achieve for our clients' AI systems
            </p>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="bg-dark-800 rounded-2xl p-6 border border-dark-700 text-center">
                <h3 className="font-semibold text-white mb-4">{area.title}</h3>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-dark-400 line-through">{area.current}</span>
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-2xl font-bold text-primary-500">{area.optimized}</span>
                </div>
                <p className="text-dark-400 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Monitoring</p>
            <h2 className="section-title">What We Monitor</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive visibility across all aspects of your AI systems
            </p>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            {monitoringCapabilities.map((cap, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-dark-900 mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark-600">
                      <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Support Options</p>
            <h2 className="section-title">Choose Your Support Level</h2>
            <p className="section-subtitle mx-auto">
              Flexible support options to match your operational requirements
            </p>
          </div>

          <div className="grid-3">
            {supportTiers.map((tier, index) => (
              <div
                key={index}
                className={`card card-hover relative ${tier.recommended ? 'border-2 border-primary-500' : ''}`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-dark-900 mb-2 mt-2">{tier.tier}</h3>
                <p className="text-dark-500 text-sm mb-4">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
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

      {/* Why Manage With Us */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Why FSIT</p>
              <h2 className="section-title">Proactive, Not Reactive</h2>
              <p className="text-dark-500 mb-6">
                We don't wait for things to break. Our proactive approach identifies and resolves issues before they impact your business.
              </p>
              <ul className="space-y-4">
                {[
                  'Proactive monitoring catches issues early',
                  'Continuous optimization, not just maintenance',
                  'Deep AI expertise, not generic IT support',
                  'Business-aligned SLAs and metrics',
                  'Regular reporting and recommendations',
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
            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <h3 className="font-semibold text-dark-900 mb-6">Included With Management</h3>
              <div className="space-y-4">
                {[
                  { title: 'Custom Dashboards', desc: 'Real-time visibility into your AI systems' },
                  { title: 'Monthly Reports', desc: 'Performance trends and recommendations' },
                  { title: 'Optimization Reviews', desc: 'Regular analysis for improvement opportunities' },
                  { title: 'Incident Response', desc: 'Rapid resolution when issues arise' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-neutral-150 rounded-lg p-4">
                    <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-dark-900">{item.title}</h4>
                      <p className="text-dark-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-max text-center">
          <h2 className="section-title !text-white mb-4">
            Ready to optimize your AI systems?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Let's discuss how we can improve the performance and reliability of your AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get started
            </Link>
            <Link href="/protect-scale" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
              Learn about governance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
