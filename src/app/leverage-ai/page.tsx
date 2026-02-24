'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import HeroLeverageVisual from '@/components/HeroLeverageVisual';
import ProcessFlow from '@/components/ProcessFlow';
import BranchingFromTitle from '@/components/BranchingFromTitle';

export default function LeverageAI() {
  const whyLeverage = [
    { title: 'Reduce operational costs', desc: 'AI-powered efficiency gains' },
    { title: 'Accelerate decision making', desc: 'Real-time insights at scale' },
    { title: 'Enhance customer experience', desc: 'Personalized AI interactions' },
    { title: 'Automate repetitive tasks', desc: 'Focus on high-value work' },
    { title: 'Gain competitive advantage', desc: 'Stay ahead with AI' },
  ];
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
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1738410775719-9f237adb266d?auto=format&fit=crop&w=1920&q=80"
          alt="Leverage AI"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <NetworkBackground nodeCount={70} maxDistance={130} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Adopt AI.<br />
                <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Scale with Confidence.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                From strategy to production — we help organizations adopt and scale AI through consulting, custom development, and seamless system integration. Business-driven AI that aligns with your existing IT ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Get AI readiness assessment
                </Link>
                <Link href="/solutions" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-900 transition-all text-lg">
                  View AI solutions
                </Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <HeroLeverageVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Outforce style */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>End-to-End AI Services</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              From initial assessment to production operations — we deliver AI that works
            </p>
          </div>

          <div className="mb-12">
            <ProcessFlow steps={[
              { num: '01', title: 'Assess', desc: 'Strategy & Roadmap' },
              { num: '02', title: 'Develop', desc: 'Custom AI Solutions' },
              { num: '03', title: 'Integrate', desc: 'System Connectivity' },
              { num: '04', title: 'Operate', desc: 'Support & Optimize' },
            ]} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-lg p-4 hover:border-[#00A651] hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-500 mb-3">
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold text-dark-900 mb-1">{service.title}</h3>
                <p className="text-dark-500 text-sm mb-3 line-clamp-2">{service.description}</p>
                <div className="flex flex-wrap gap-1">
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <span key={i} className="text-[10px] bg-white text-dark-600 px-1.5 py-0.5 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Use Cases */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--black)' }}>Business-Driven AI Applications</h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Practical AI solutions that deliver measurable business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-neutral-200 hover:border-primary-500 transition-all">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">{useCase.category}</span>
                <h3 className="text-base font-semibold text-dark-900 mt-1 mb-2">{useCase.title}</h3>
                <div className="space-y-1 mb-3">
                  {useCase.examples.slice(0, 3).map((example, i) => (
                    <div key={i} className="flex items-center gap-2 bg-neutral-50 p-1.5 rounded border border-neutral-100">
                      <span className="text-sm text-dark-600">{example}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-neutral-200">
                  <span className="text-primary-600 font-semibold text-sm">{useCase.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Readiness */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Are You Ready for AI?</h2>
            <p className="text-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Successful AI implementation depends on several key factors. We assess your readiness and help you address gaps before investing in development.
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="leverageReadyLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="leverageReadyPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#leverageReadyLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#leverageReadyPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {readinessFactors.map((item, i) => (
              <div key={i} className="group text-center p-4 bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl hover:border-[#00A651] hover:shadow-lg transition-all duration-300">
                <h3 className="text-base font-bold mb-2 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {item.factor}
                </h3>
                <p className="text-dark-500 text-sm">{item.question}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              Get your readiness assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--black)' }}>Transparent Pricing</h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Clear investment ranges based on project scope and complexity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {investmentTiers.map((tier, index) => (
              <div key={index} className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-lg p-4 hover:border-[#00A651] hover:shadow-md transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-dark-900 mb-1">{tier.tier}</h3>
                <p className="text-2xl font-bold text-primary-500 mb-2">{tier.range}</p>
                <p className="text-dark-500 text-sm mb-3">{tier.description}</p>
                <div className="space-y-1 text-left">
                  {tier.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-neutral-50 p-1.5 rounded border border-neutral-200">
                      <span className="text-sm text-dark-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-dark-500 text-xs mt-6">
            Final pricing depends on specific requirements. Contact us for a detailed quote.
          </p>
        </div>
      </section>

      {/* Why FSIT - Outforce positioning */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>AI-Native Delivery</h2>
            <p className="text-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              We're not traditional consultants who hand over reports and leave. We embed vetted AI engineers directly into your organization to build, deploy, and scale real AI systems — focusing on execution, speed, and production impact.
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="leverageWhyLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="leverageWhyPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#leverageWhyLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#leverageWhyPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {[
              '98% project success rate vs 59% industry standard',
              'Teams deployed in 3 weeks, not 6 months',
              'Vetted AI specialists, not generalist contractors',
              'Focus on production systems, not just PoCs',
              'Knowledge transfer built into every engagement',
            ].map((item, i) => (
              <div key={i} className="group text-center p-4 bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl hover:border-[#00A651] hover:shadow-lg transition-all duration-300">
                <h3 className="text-base font-bold group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {item}
                </h3>
              </div>
            ))}
          </div>

          {/* Comparison Grid */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-dark-900 mb-6 text-center">Traditional vs FSIT</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Approach', old: 'Consulting reports', new: 'Working software' },
                { label: 'Team', old: 'Generalists', new: 'AI specialists' },
                { label: 'Timeline', old: '6+ months', new: '3 weeks' },
                { label: 'Success rate', old: '59%', new: '98%' },
              ].map((item, i) => (
                <div key={i} className="group text-center p-4 rounded-xl bg-neutral-100 hover:bg-primary-50 transition-all duration-300">
                  <p className="text-dark-600 text-sm mb-2">{item.label}</p>
                  <p className="text-dark-400 line-through text-base">{item.old}</p>
                  <p className="text-primary-600 font-bold text-lg">{item.new}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Leverage AI - Animated Branching */}
      <section className="py-16" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-2">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--black)' }}>Why organizations leverage AI with FSIT</h2>
          </div>
          <BranchingFromTitle items={whyLeverage} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-md text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
            Ready to leverage
            <br />
            <span style={{ color: 'var(--green)' }}>AI?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            Start with a free AI readiness assessment and discover your highest-impact opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get your free assessment
            </Link>
            <Link href="/staff-augmentation" className="btn-secondary">
              Build your AI team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
