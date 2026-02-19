'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export default function LeverageAI() {
  const services = [
    {
      title: 'AI Consulting & Strategy',
      description: 'We assess your AI readiness, identify high-impact use cases, and develop a roadmap aligned with your business objectives.',
      deliverables: ['AI readiness assessment', 'Use case identification', 'ROI analysis', 'Implementation roadmap'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Custom AI Development',
      description: 'Purpose-built AI solutions designed for your specific business challenges — not off-the-shelf products that need heavy customization.',
      deliverables: ['Custom LLM applications', 'Domain-specific models', 'AI-powered products', 'Intelligent automation'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'System Integration',
      description: 'Seamlessly integrate AI capabilities into your existing IT ecosystem — ERP, CRM, data platforms, and enterprise applications.',
      deliverables: ['API development', 'Data pipeline integration', 'Legacy system connectivity', 'Cloud integration'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'AI Operations & Support',
      description: 'Ongoing management, monitoring, and optimization to ensure your AI systems deliver continuous value in production.',
      deliverables: ['24/7 monitoring', 'Model optimization', 'Performance tuning', 'Continuous improvement'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const useCases = [
    {
      category: 'Automation',
      title: 'Intelligent Process Automation',
      examples: ['Document processing', 'Workflow automation', 'Data entry elimination', 'Email triage & routing'],
      impact: '70% reduction in manual tasks',
    },
    {
      category: 'Analytics',
      title: 'AI-Powered Analytics',
      examples: ['Predictive forecasting', 'Anomaly detection', 'Customer segmentation', 'Risk scoring'],
      impact: '3x faster insights',
    },
    {
      category: 'Applications',
      title: 'Intelligent Applications',
      examples: ['AI copilots & assistants', 'Smart search & retrieval', 'Recommendation engines', 'Chatbots & virtual agents'],
      impact: '40% productivity gain',
    },
    {
      category: 'Operations',
      title: 'Operational Intelligence',
      examples: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Resource allocation'],
      impact: '25% cost reduction',
    },
  ];

  const investmentTiers = [
    {
      tier: 'Pilot',
      range: '$25K - $75K',
      description: 'Proof of concept to validate AI feasibility for a specific use case',
      includes: ['Single use case', 'PoC development', '4-8 week timeline', 'Feasibility report'],
    },
    {
      tier: 'Production',
      range: '$100K - $300K',
      description: 'Production-ready AI system with full integration and deployment',
      includes: ['Full system build', 'Integration & testing', 'Production deployment', '3-6 month timeline'],
    },
    {
      tier: 'Enterprise',
      range: '$300K+',
      description: 'Large-scale AI transformation across multiple use cases and systems',
      includes: ['Multiple use cases', 'Enterprise integration', 'Ongoing optimization', 'Dedicated team'],
    },
  ];

  const readinessFactors = [
    { factor: 'Data Assets', question: 'Do you have quality data relevant to your AI use case?' },
    { factor: 'Infrastructure', question: 'Is your cloud/on-premise infrastructure ready for AI workloads?' },
    { factor: 'Team Readiness', question: 'Do you have technical staff who can work alongside AI specialists?' },
    { factor: 'Business Alignment', question: 'Are stakeholders aligned on AI objectives and success metrics?' },
    { factor: 'Process Clarity', question: 'Are the processes you want to automate well-documented?' },
    { factor: 'Governance', question: 'Do you have policies for data privacy, security, and AI ethics?' },
  ];

  const stats = [
    { value: '98%', label: 'Project success rate' },
    { value: '3 weeks', label: 'Team deployment' },
    { value: '60%', label: 'Faster than traditional hiring' },
    { value: '50+', label: 'Enterprise clients' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        {/* Riyadh Skyline Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <NetworkBackground nodeCount={70} maxDistance={130} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-4 md:!mb-6 animate-fade-in">Leverage AI for Your Business</p>
            <h1 className="hero-title text-white animate-fade-in-up text-3xl md:text-5xl lg:text-6xl">
              Adopt AI.<br />
              <span className="text-primary-500 text-glow">Scale with Confidence.</span>
            </h1>
            <p className="hero-subtitle text-base md:text-lg lg:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              From strategy to production — we help organizations adopt and scale AI through consulting, custom development, and seamless system integration. Business-driven AI that aligns with your existing IT ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/contact" className="btn-primary text-center">
                Get AI readiness assessment
              </Link>
              <Link href="/solutions" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900 text-center">
                View AI solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Outforce style */}
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
            <h2 className="section-title">End-to-End AI Services</h2>
            <p className="section-subtitle mx-auto">
              From initial assessment to production operations — we deliver AI that works
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
                      {service.deliverables.map((item, i) => (
                        <span key={i} className="text-xs bg-neutral-150 text-dark-600 px-2 py-1 rounded">
                          {item}
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

      {/* Business Use Cases */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label !text-primary-500">Use Cases</p>
            <h2 className="section-title !text-white">Business-Driven AI Applications</h2>
            <p className="section-subtitle mx-auto !text-dark-300">
              Practical AI solutions that deliver measurable business outcomes
            </p>
          </div>

          <div className="grid-2">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500 transition-all">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-wide">{useCase.category}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">{useCase.title}</h3>
                <ul className="space-y-2 mb-4">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark-300">
                      <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {example}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-dark-700">
                  <span className="text-primary-500 font-semibold">{useCase.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Readiness */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">AI Readiness</p>
              <h2 className="section-title">Are You Ready for AI?</h2>
              <p className="text-dark-500 mb-6">
                Successful AI implementation depends on several key factors. We assess your readiness and help you address gaps before investing in development.
              </p>
              <Link href="/contact" className="btn-primary">
                Get your readiness assessment
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="font-semibold text-dark-900 mb-4">Key Readiness Factors</h3>
              <div className="space-y-4">
                {readinessFactors.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-dark-900">{item.factor}</p>
                      <p className="text-dark-500 text-sm">{item.question}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Investment</p>
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-subtitle mx-auto">
              Clear investment ranges based on project scope and complexity
            </p>
          </div>

          <div className="grid-3">
            {investmentTiers.map((tier, index) => (
              <div key={index} className="card card-hover text-center">
                <h3 className="text-xl font-semibold text-dark-900 mb-2">{tier.tier}</h3>
                <p className="text-3xl font-bold text-primary-500 mb-3">{tier.range}</p>
                <p className="text-dark-500 text-sm mb-4">{tier.description}</p>
                <ul className="space-y-2 text-left">
                  {tier.includes.map((item, i) => (
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

          <p className="text-center text-dark-400 text-sm mt-8">
            Final pricing depends on specific requirements. Contact us for a detailed quote.
          </p>
        </div>
      </section>

      {/* Why FSIT - Outforce positioning */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Why FSIT</p>
              <h2 className="section-title">AI-Native Delivery</h2>
              <p className="text-dark-500 mb-6">
                We're not traditional consultants who hand over reports and leave. We embed vetted AI engineers directly into your organization to build, deploy, and scale real AI systems — focusing on execution, speed, and production impact.
              </p>
              <ul className="space-y-4">
                {[
                  '98% project success rate vs 59% industry standard',
                  'Teams deployed in 3 weeks, not 6 months',
                  'Vetted AI specialists, not generalist contractors',
                  'Focus on production systems, not just PoCs',
                  'Knowledge transfer built into every engagement',
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
              <h3 className="text-xl font-semibold mb-6">Traditional vs FSIT</h3>
              <div className="space-y-4">
                {[
                  { label: 'Approach', old: 'Consulting reports', new: 'Working software' },
                  { label: 'Team', old: 'Generalists', new: 'AI specialists' },
                  { label: 'Timeline', old: '6+ months', new: '3 weeks' },
                  { label: 'Success rate', old: '59%', new: '98%' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-dark-700 last:border-0 last:pb-0">
                    <span className="text-dark-300">{item.label}</span>
                    <div className="text-right">
                      <span className="text-dark-400 line-through mr-3">{item.old}</span>
                      <span className="text-primary-500 font-semibold">{item.new}</span>
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
            Ready to leverage AI for your business?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Start with a free AI readiness assessment and discover your highest-impact opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get your free assessment
            </Link>
            <Link href="/staff-augmentation" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
              Build your AI team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
