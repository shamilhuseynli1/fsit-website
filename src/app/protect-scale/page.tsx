'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import HeroProtectVisual from '@/components/HeroProtectVisual';
import ProcessFlow from '@/components/ProcessFlow';
import BranchingFromTitle from '@/components/BranchingFromTitle';

export default function ProtectScale() {
  const processSteps = [
    { num: '01', title: 'Assess', desc: 'Security audit' },
    { num: '02', title: 'Plan', desc: 'Design controls' },
    { num: '03', title: 'Implement', desc: 'Deploy security' },
    { num: '04', title: 'Monitor', desc: 'Continuous watch' },
    { num: '05', title: 'Optimize', desc: 'Improve always' },
  ];

  const whyProtect = [
    { title: 'Enterprise-grade security', desc: 'Protect AI systems at scale' },
    { title: 'Regulatory compliance', desc: 'Meet industry standards' },
    { title: 'Risk mitigation', desc: 'Proactive threat detection' },
    { title: 'Scalable infrastructure', desc: 'Grow without limits' },
    { title: 'Continuous monitoring', desc: '24/7 observability' },
  ];
  const governanceAreas = [
    {
      title: 'AI Security',
      description: 'Protect your AI systems from adversarial attacks, data breaches, and unauthorized access.',
      features: ['Model security', 'Prompt injection defense', 'Access controls', 'Encryption'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Compliance & Governance',
      description: 'Meet regulatory requirements with comprehensive AI governance frameworks.',
      features: ['Regulatory compliance', 'Audit trails', 'Policy enforcement', 'Documentation'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate risks associated with AI systems in production.',
      features: ['Risk assessment', 'Bias detection', 'Impact analysis', 'Mitigation planning'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: 'Scalability',
      description: 'Scale your AI systems confidently with robust infrastructure and architecture.',
      features: ['Horizontal scaling', 'Load balancing', 'Multi-region deployment', 'Performance at scale'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      ),
    },
  ];

  const complianceFrameworks = [
    { name: 'SOC 2 Type II', description: 'Security, availability, and confidentiality controls' },
    { name: 'GDPR', description: 'European data protection regulation' },
    { name: 'HIPAA', description: 'Healthcare data privacy and security' },
    { name: 'ISO 27001', description: 'Information security management' },
    { name: 'PCI DSS', description: 'Payment card data security' },
    { name: 'NIST AI RMF', description: 'AI risk management framework' },
  ];

  const securityLayers = [
    {
      layer: 'Data Layer',
      controls: ['Encryption at rest & transit', 'Data anonymization', 'Access logging', 'Retention policies'],
    },
    {
      layer: 'Model Layer',
      controls: ['Model versioning', 'Adversarial testing', 'Output filtering', 'Confidence thresholds'],
    },
    {
      layer: 'Application Layer',
      controls: ['Authentication', 'Rate limiting', 'Input validation', 'Audit trails'],
    },
    {
      layer: 'Infrastructure Layer',
      controls: ['Network isolation', 'Container security', 'Secrets management', 'Patch management'],
    },
  ];

  const scalingCapabilities = [
    {
      title: 'Elastic Infrastructure',
      description: 'Automatically scale compute resources based on demand',
      metric: 'Auto-scale in seconds',
    },
    {
      title: 'Global Distribution',
      description: 'Deploy AI systems across multiple regions for low latency',
      metric: '<50ms latency globally',
    },
    {
      title: 'High Availability',
      description: 'Redundant systems ensure continuous availability',
      metric: '99.99% uptime SLA',
    },
    {
      title: 'Cost Optimization',
      description: 'Scale efficiently without overspending on infrastructure',
      metric: '40% cost savings',
    },
  ];

  const industries = [
    {
      name: 'Financial Services',
      requirements: ['SOX compliance', 'Fraud prevention', 'Data residency', 'Audit requirements'],
    },
    {
      name: 'Healthcare',
      requirements: ['HIPAA compliance', 'PHI protection', 'Clinical validation', 'FDA considerations'],
    },
    {
      name: 'Government',
      requirements: ['FedRAMP', 'Data sovereignty', 'Security clearances', 'Accessibility'],
    },
    {
      name: 'Enterprise',
      requirements: ['SOC 2', 'Data governance', 'Vendor management', 'Business continuity'],
    },
  ];

  const stats = [
    { value: '100%', label: 'Compliance audit pass rate' },
    { value: '0', label: 'Security breaches' },
    { value: '98%', label: 'Governance success rate' },
    { value: '99.99%', label: 'Uptime achieved' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1920&q=80"
          alt="Protect & Scale"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <NetworkBackground nodeCount={60} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                AI Governance<br />
                <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Built for Enterprise</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Enterprise-grade security, compliance, and scalability for AI systems. Meet regulatory requirements and scale with confidence in highly regulated industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Discuss your requirements
                </Link>
                <Link href="/ai-operations" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-900 transition-all text-lg">
                  View AI operations
                </Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <HeroProtectVisual />
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

      {/* Governance Process - Animated Flow */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Our Governance Process</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              A systematic approach to securing and scaling your AI systems
            </p>
          </div>
          <ProcessFlow steps={processSteps} />
        </div>
      </section>

      {/* Governance Areas */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>AI Governance & Scaling</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Comprehensive governance to protect your AI investment and scale with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {governanceAreas.map((area, index) => (
              <div key={index} className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-lg p-4 hover:border-[#00A651] hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 mb-3">
                  {area.icon}
                </div>
                <h3 className="text-base font-semibold text-dark-900 mb-1">{area.title}</h3>
                <p className="text-dark-500 text-sm mb-3 line-clamp-2">{area.description}</p>
                <div className="flex flex-wrap gap-1">
                  {area.features.slice(0, 3).map((feature, i) => (
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

      {/* Security Layers */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Defense in Depth</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Multiple layers of security controls to protect your AI systems
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="protectSecurityLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="protectSecurityPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#protectSecurityLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#protectSecurityPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {securityLayers.map((layer, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-neutral-200 text-center">
                <h3 className="text-lg font-semibold text-dark-900 mb-4">{layer.layer}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {layer.controls.map((control, i) => (
                    <div key={i} className="group p-2 rounded-lg hover:bg-primary-50 transition-all">
                      <span className="text-sm text-dark-600 group-hover:text-green-600 font-medium transition-colors">{control}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="section-sm" style={{ background: 'var(--white)' }}>
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--black)' }}>Regulatory Compliance</h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              We help you meet the compliance requirements for your industry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-lg p-3 hover:border-[#00A651] hover:shadow-md transition-all duration-300 text-center">
                <div className="w-8 h-8 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 mx-auto mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-dark-900 mb-1">{framework.name}</h3>
                <p className="text-dark-500 text-xs">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scaling Capabilities */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Scale With Confidence</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Infrastructure and architecture designed for enterprise-scale AI
            </p>
          </div>

          {/* Animated horizontal line */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="scaleLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="scalePulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#scaleLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#scalePulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {scalingCapabilities.map((cap, index) => (
              <div key={index} className="relative">
                {/* Dashed connector line between blocks */}
                {index < scalingCapabilities.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0 -translate-y-1/2 z-10" style={{ borderTop: '2px dashed #00A651', opacity: 0.5 }} />
                )}
                <div className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl p-5 h-full hover:border-[#00A651] hover:shadow-lg transition-all duration-300 text-center">
                  <h3 className="font-semibold text-dark-900 mb-2 text-base">{cap.title}</h3>
                  <p className="text-dark-500 text-sm mb-3">{cap.description}</p>
                  <p className="text-primary-500 font-semibold text-base">{cap.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Requirements */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Industry-Specific Expertise</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Deep understanding of compliance requirements across regulated industries
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="protectIndustryLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="protectIndustryPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#protectIndustryLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#protectIndustryPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl p-6 hover:border-[#00A651] hover:shadow-lg transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-dark-900 mb-4">{industry.name}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {industry.requirements.map((req, i) => (
                    <div key={i} className="group p-2 rounded-lg hover:bg-primary-50 transition-all">
                      <span className="text-sm text-dark-600 group-hover:text-green-600 font-medium transition-colors">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FSIT */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Governance Expertise</h2>
            <p className="text-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              We understand that enterprise AI requires more than just good technology. Security, compliance, and governance are built into everything we do.
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="protectGovLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="protectGovPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#protectGovLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#protectGovPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {[
              'Deep experience in regulated industries',
              'Security-first architecture and development',
              'Compliance expertise across frameworks',
              'Scalable infrastructure design',
              'Continuous security monitoring',
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

          {/* Arrow down to Governance Deliverables */}
          <div className="flex justify-center mb-6">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0v32M6 26l6 6 6-6" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Governance Deliverables */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-dark-900 mb-6 text-center">Governance Deliverables</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                { title: 'Security Assessment', desc: 'Comprehensive security review of AI systems' },
                { title: 'Compliance Roadmap', desc: 'Path to meeting regulatory requirements' },
                { title: 'Risk Register', desc: 'Documented risks and mitigation strategies' },
                { title: 'Scaling Architecture', desc: 'Design for growth and high availability' },
              ].map((item, i) => (
                <div key={i} className="group text-center p-4 rounded-xl bg-white hover:bg-primary-50 transition-all duration-300">
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

      {/* Why Protect - Animated Branching */}
      <section className="py-16" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-2">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--black)' }}>Why organizations choose FSIT for governance</h2>
          </div>
          <BranchingFromTitle items={whyProtect} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-md text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
            Ready to secure
            <br />
            <span style={{ color: 'var(--green)' }}>and scale?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            Let's discuss your governance requirements and build a roadmap
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Talk to our experts
            </Link>
            <Link href="/build-innovate" className="btn-secondary">
              Start building
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
