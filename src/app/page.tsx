import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'LLM & AI Agent Development',
      description: 'Dedicated AI engineers and data scientists embedded directly into your organization.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Managed AI Services',
      description: 'End-to-end ownership from deployment and monitoring to optimization.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Custom AI & ML Systems',
      description: 'Secure, scalable infrastructure to support production-grade AI systems.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Intelligent Automation',
      description: 'AI agents that streamline operations and reduce manual effort.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: '80,000+', label: 'AI Experts in Network' },
    { number: '50+', label: 'Enterprises Served' },
    { number: '98%', label: 'Client Retention' },
    { number: '-45%', label: 'Avg. Processing Time' },
  ];

  const partners = ['AWS', 'Azure', 'Google Cloud', 'OpenAI', 'Anthropic'];

  const processSteps = [
    { step: 'Define', desc: 'Align on outcomes and priorities' },
    { step: 'Embed', desc: 'Deploy dedicated AI teams' },
    { step: 'Build', desc: 'Develop integrated systems' },
    { step: 'Operate', desc: 'Ensure reliability in production' },
    { step: 'Scale', desc: 'Expand with governance' },
  ];

  return (
    <>
      {/* Hero Section - Dark like vstorm */}
      <section className="hero-dark bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-6">Applied AI Engineering Consultancy</p>
            <h1 className="hero-title text-white">
              On-Site AI.<br />
              <span className="text-primary-500">Real Results.</span><br />
              Built Capability.
            </h1>
            <p className="hero-subtitle">
              AI-native teams delivering production-ready systems across government and enterprise in Saudi Arabia and the Middle East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/build-scale-ai" className="btn-primary">
                Book a free consultation
              </Link>
              <Link href="/solutions" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
                Explore our services
              </Link>
            </div>
          </div>
        </div>

        {/* Animated gradient orb */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Partners/Technologies */}
      <section className="py-12 bg-neutral-150 border-b border-neutral-200">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-dark-500 mb-8">Trusted by enterprises across the Middle East</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="logo-card !p-4 !px-6">
                <span className="text-dark-500 font-semibold text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid-4 stagger-children">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="stat-number">{stat.number}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">AI Systems & Solutions</h2>
            <p className="section-subtitle mx-auto">
              From prototype to production-grade AI embedded into your existing systems
            </p>
          </div>

          <div className="grid-2">
            {services.map((service, index) => (
              <div key={index} className="feature-box group">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">{service.title}</h3>
                <p className="text-dark-500">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/solutions" className="btn-ghost">
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Our Process</p>
            <h2 className="section-title !text-white">How FSIT Works</h2>
            <p className="section-subtitle mx-auto !text-dark-300">
              AI execution built for production, not experimentation
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-0">
            {processSteps.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center px-6 py-4">
                  <div className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-white mb-1">{item.step}</p>
                  <p className="text-sm text-dark-400">{item.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block w-12 h-px bg-dark-700" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-we-work" className="btn-primary">
              Learn how we work
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Case Study</p>
              <h2 className="section-title">AI Operations Copilot</h2>
              <p className="text-dark-500 mb-6">
                Secure, Vision 2030–aligned AI that automates workflows, unlocks institutional knowledge, and accelerates decision-making for a Saudi Government Entity.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-primary-500">-45%</span>
                <span className="text-dark-500">manual processing time</span>
              </div>
              <Link href="/solutions" className="btn-ghost">
                View more case studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-neutral-150 rounded-2xl p-8 md:p-12 border border-neutral-200">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-700">Workflow automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-700">Knowledge management</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-700">Decision intelligence</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-700">Governance compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FSIT Section */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Why FSIT</p>
            <h2 className="section-title">Built for Real-World Impact</h2>
          </div>

          <div className="grid-3">
            {[
              { title: 'AI-First Model', desc: 'Not traditional IT services — genuine AI expertise embedded in your operations' },
              { title: 'Production Focus', desc: 'Systems designed to operate in complex, regulated environments' },
              { title: 'Proven Delivery', desc: 'Track record with enterprise and government across the Middle East' },
              { title: 'Hybrid Approach', desc: 'Combining embedded AI talent with managed services' },
              { title: 'Faster Execution', desc: 'Move quicker than consulting-led engagements' },
              { title: 'Measurable Outcomes', desc: 'Focus on real results, not proofs of concept' },
            ].map((item, index) => (
              <div key={index} className="card card-hover">
                <h3 className="font-semibold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-dark-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-max text-center">
          <h2 className="section-title !text-white mb-4">
            Ready to build AI that actually runs?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Talk to our AI delivery team and start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/build-scale-ai" className="btn-primary">
              Book a free consultation
            </Link>
            <Link href="/contact" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
