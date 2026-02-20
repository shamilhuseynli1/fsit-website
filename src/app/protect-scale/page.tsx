'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import HeroProtectVisual from '@/components/HeroProtectVisual';

export default function ProtectScale() {
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
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        {/* Saudi Riyadh Skyline Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <NetworkBackground nodeCount={60} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label !text-primary-500 !mb-4 md:!mb-6 animate-fade-in">Protect & Scale</p>
              <h1 className="hero-title text-white animate-fade-in-up text-3xl md:text-5xl lg:text-6xl">
                AI Governance<br />
                <span className="text-primary-500 text-glow">Built for Enterprise</span>
              </h1>
              <p className="hero-subtitle text-base md:text-lg lg:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Enterprise-grade security, compliance, and scalability for AI systems. Meet regulatory requirements and scale with confidence in highly regulated industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Link href="/contact" className="btn-primary text-center">
                  Discuss your requirements
                </Link>
                <Link href="/ai-operations" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900 text-center">
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

      {/* Governance Areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">AI Governance & Scaling</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive governance to protect your AI investment and scale with confidence
            </p>
          </div>

          <div className="grid-2">
            {governanceAreas.map((area, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-900 mb-2">{area.title}</h3>
                    <p className="text-dark-500 text-sm mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.features.map((feature, i) => (
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

      {/* Security Layers */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label !text-primary-500">Security Architecture</p>
            <h2 className="section-title !text-white">Defense in Depth</h2>
            <p className="section-subtitle mx-auto !text-dark-300">
              Multiple layers of security controls to protect your AI systems
            </p>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            {securityLayers.map((layer, index) => (
              <div key={index} className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
                <h3 className="font-semibold text-white mb-4">{layer.layer}</h3>
                <div className="space-y-2">
                  {layer.controls.map((control, i) => (
                    <div key={i} className="flex items-center gap-2 bg-dark-700/50 p-2 rounded-lg border border-dark-600/50">
                      
                      <span className="text-sm text-dark-300">{control}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Compliance</p>
            <h2 className="section-title">Regulatory Compliance</h2>
            <p className="section-subtitle mx-auto">
              We help you meet the compliance requirements for your industry
            </p>
          </div>

          <div className="grid-3">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">{framework.name}</h3>
                <p className="text-dark-500 text-sm">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scaling Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Scale</p>
            <h2 className="section-title">Scale With Confidence</h2>
            <p className="section-subtitle mx-auto">
              Infrastructure and architecture designed for enterprise-scale AI
            </p>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            {scalingCapabilities.map((cap, index) => (
              <div key={index} className="card card-hover text-center">
                <h3 className="font-semibold text-dark-900 mb-2">{cap.title}</h3>
                <p className="text-dark-500 text-sm mb-4">{cap.description}</p>
                <p className="text-primary-500 font-semibold">{cap.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Requirements */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Industries</p>
            <h2 className="section-title">Industry-Specific Expertise</h2>
            <p className="section-subtitle mx-auto">
              Deep understanding of compliance requirements across regulated industries
            </p>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-dark-900 mb-4">{industry.name}</h3>
                <div className="space-y-2">
                  {industry.requirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-2 bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                      
                      <span className="text-sm text-dark-600">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FSIT */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Why FSIT</p>
              <h2 className="section-title">Governance Expertise</h2>
              <p className="text-dark-500 mb-6">
                We understand that enterprise AI requires more than just good technology. Security, compliance, and governance are built into everything we do.
              </p>
              <div className="space-y-3">
                {[
                  'Deep experience in regulated industries',
                  'Security-first architecture and development',
                  'Compliance expertise across frameworks',
                  'Scalable infrastructure design',
                  'Continuous security monitoring',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-neutral-100 p-3 rounded-xl border border-neutral-200 hover:border-primary-500/30 transition-all">
                    
                    <span className="text-dark-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-dark-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Governance Deliverables</h3>
              <div className="space-y-4">
                {[
                  { title: 'Security Assessment', desc: 'Comprehensive security review of AI systems' },
                  { title: 'Compliance Roadmap', desc: 'Path to meeting regulatory requirements' },
                  { title: 'Risk Register', desc: 'Documented risks and mitigation strategies' },
                  { title: 'Scaling Architecture', desc: 'Design for growth and high availability' },
                ].map((item, i) => (
                  <div key={i} className="bg-dark-800 rounded-lg p-4 border border-dark-700">
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-dark-400 text-sm">{item.desc}</p>
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
            Ready to secure and scale your AI?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Let's discuss your governance requirements and build a roadmap
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Talk to our experts
            </Link>
            <Link href="/build-innovate" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
              Start building
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
