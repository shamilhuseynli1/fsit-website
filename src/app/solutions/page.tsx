import Link from 'next/link';

export const metadata = {
  title: 'AI Systems & Solutions | FSIT AI',
  description: 'Providing augmented intelligence capacity and managed AI services, from prototype to production-grade AI embedded into existing systems.',
};

export default function Solutions() {
  const services = [
    {
      title: 'LLM & AI Agent Development',
      description: 'Dedicated AI engineers, data scientists, and AI product teams embedded directly into your organization.',
    },
    {
      title: 'Managed AI Services',
      description: 'End-to-end ownership of AI systems, from deployment and monitoring to optimization and lifecycle management.',
    },
    {
      title: 'Data Platforms for AI Readiness',
      description: 'Design and development of AI-powered products, copilots, agents, and internal platforms.',
    },
    {
      title: 'Custom AI & ML Systems',
      description: 'Secure, scalable, and compliant AI infrastructure to support production-grade AI systems.',
    },
    {
      title: 'Intelligent Automation',
      description: 'AI agents and automation solutions that streamline operations and reduce manual effort.',
    },
  ];

  const capabilities = [
    'AI Copilots & Intelligent Assistants',
    'AI Agents for Process Automation',
    'Predictive Analytics & Decision Intelligence',
    'Natural Language Processing (NLP)',
    'Computer Vision Solutions',
    'AI-Powered Knowledge Management',
    'AI for Operational Efficiency & Compliance',
  ];

  const industries = [
    'Government & Public Sector', 'Consulting Firms', 'Healthcare', 'Banking & Financial Services', 'Manufacturing',
    'Logistics & Supply Chain', 'Real Estate', 'Retail', 'Automotive', 'Energy',
    'Travel & Hospitality', 'Education', 'Agriculture', 'Entertainment & Media', 'Sports Technology',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-dark bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-6">Our Services</p>
            <h1 className="hero-title text-white">
              AI Systems &<br />
              <span className="text-primary-500">Solutions</span>
            </h1>
            <p className="hero-subtitle">
              Providing augmented intelligence capacity and managed AI services, from prototype to production-grade AI embedded into existing systems.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Our AI Services</h2>
          </div>

          <div className="grid-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="feature-box group">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-400">
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">{service.title}</h3>
                <p className="text-dark-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Our AI solutions are built to operate in complex, regulated, and high-impact environments
          </h2>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Capabilities</p>
            <h2 className="section-title">AI Capabilities</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {capabilities.map((cap, index) => (
              <span key={index} className="tag">
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Case Study</p>
              <h2 className="section-title">AI Operations Copilot</h2>
              <p className="text-dark-500 mb-6">
                Secure, Vision 2030–aligned AI that automates workflows, unlocks institutional knowledge, and accelerates decision-making for a Saudi Government Entity.
              </p>
              <div className="flex items-baseline gap-4">
                <span className="stat-number">-45%</span>
                <span className="text-dark-500">manual processing time</span>
              </div>
            </div>
            <div className="card-dark">
              <h4 className="font-semibold text-white mb-4">Key Outcomes</h4>
              <div className="space-y-3">
                {['Workflow automation', 'Knowledge management', 'Decision intelligence', 'Governance compliant'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Industries</p>
            <h2 className="section-title">Solutions For</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="card card-hover text-center !p-4">
                <span className="text-dark-700 font-medium text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900">
        <div className="container-max text-center">
          <h2 className="section-title !text-white mb-4">
            Ready to build AI systems that work?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Talk to our AI delivery team and start your transformation.
          </p>
          <Link href="/build-scale-ai" className="btn-primary">
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
