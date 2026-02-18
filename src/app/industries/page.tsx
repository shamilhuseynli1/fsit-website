'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

const industries = [
  {
    id: 'financial-services',
    name: 'Financial Services',
    icon: '🏦',
    description: 'AI-powered solutions for banking, insurance, and fintech with strict regulatory compliance.',
    useCases: ['Fraud detection & prevention', 'Algorithmic trading', 'Risk assessment models', 'Customer service automation', 'AML/KYC compliance'],
    stats: { projects: '50+', accuracy: '99.2%' },
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: '🏥',
    description: 'HIPAA-compliant AI solutions for diagnostics, patient care, and medical research.',
    useCases: ['Medical image analysis', 'Drug discovery acceleration', 'Patient outcome prediction', 'Clinical trial optimization', 'Administrative automation'],
    stats: { projects: '35+', accuracy: '98.5%' },
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    icon: '🛒',
    description: 'Transform customer experiences with personalization, inventory optimization, and demand forecasting.',
    useCases: ['Product recommendations', 'Dynamic pricing', 'Inventory optimization', 'Customer churn prediction', 'Visual search'],
    stats: { projects: '45+', accuracy: '97.8%' },
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    icon: '🏭',
    description: 'Smart factory solutions with predictive maintenance, quality control, and supply chain optimization.',
    useCases: ['Predictive maintenance', 'Quality inspection', 'Supply chain optimization', 'Production scheduling', 'Energy optimization'],
    stats: { projects: '30+', accuracy: '98.9%' },
  },
  {
    id: 'technology',
    name: 'Technology & SaaS',
    icon: '💻',
    description: 'AI integration for software products, platform enhancement, and developer tools.',
    useCases: ['Code generation & review', 'Product analytics', 'User behavior prediction', 'Automated testing', 'Security threat detection'],
    stats: { projects: '60+', accuracy: '97.5%' },
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    icon: '⚡',
    description: 'Optimize grid operations, predict demand, and accelerate the transition to sustainable energy.',
    useCases: ['Load forecasting', 'Grid optimization', 'Renewable integration', 'Asset monitoring', 'Energy trading'],
    stats: { projects: '25+', accuracy: '98.1%' },
  },
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    icon: '🚚',
    description: 'End-to-end supply chain visibility with route optimization and demand prediction.',
    useCases: ['Route optimization', 'Demand forecasting', 'Fleet management', 'Warehouse automation', 'Last-mile delivery'],
    stats: { projects: '40+', accuracy: '97.9%' },
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    icon: '🏛️',
    description: 'Secure, compliant AI solutions for citizen services, policy analysis, and public safety.',
    useCases: ['Citizen service automation', 'Document processing', 'Fraud detection', 'Policy impact analysis', 'Emergency response'],
    stats: { projects: '20+', accuracy: '99.0%' },
  },
];

const stats = [
  { number: '98%', label: 'Project success rate' },
  { number: '8+', label: 'Industries served' },
  { number: '300+', label: 'Projects delivered' },
  { number: '3 weeks', label: 'Average deployment' },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-dark-900 overflow-hidden">
        <NetworkBackground />
        <div className="relative z-10 max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-primary-400 text-sm font-medium">Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                Every Industry
              </span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl">
              Deep domain expertise combined with AI-native development. We understand the unique challenges, regulations, and opportunities in your industry — delivering solutions that work in production.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-dark-800 border-y border-dark-700">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">{stat.number}</div>
                <div className="text-neutral-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto">
              From regulated sectors to fast-moving tech companies, we bring AI expertise tailored to your industry's specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries/${industry.id}`}
                className="group bg-neutral-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-200"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-dark-500 text-sm mb-4 line-clamp-2">
                  {industry.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-primary-600 font-semibold">{industry.stats.projects} projects</span>
                  <span className="text-dark-400">|</span>
                  <span className="text-dark-500">{industry.stats.accuracy} accuracy</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Common Use Cases Across Industries
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto">
              Whether you're optimizing operations, enhancing customer experience, or building new AI-powered products — we've delivered it before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Intelligent Document Processing', desc: 'Extract, classify, and process documents with 98%+ accuracy. From invoices to medical records.', icon: '📄' },
              { title: 'Predictive Analytics', desc: 'Forecast demand, predict churn, and anticipate maintenance needs before they happen.', icon: '📊' },
              { title: 'Conversational AI', desc: 'Customer service bots, internal assistants, and voice agents that actually understand context.', icon: '💬' },
              { title: 'Computer Vision', desc: 'Quality inspection, medical imaging, retail analytics, and security monitoring.', icon: '👁️' },
              { title: 'Recommendation Systems', desc: 'Product recommendations, content personalization, and next-best-action engines.', icon: '🎯' },
              { title: 'Process Automation', desc: 'End-to-end workflow automation with AI decision-making at every step.', icon: '⚙️' },
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">{useCase.title}</h3>
                <p className="text-dark-500">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-24 bg-white">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                Why Industry Expertise Matters
              </h2>
              <p className="text-lg text-dark-600 mb-8">
                Generic AI solutions fail in production. We have learned this across 300+ projects. That is why every engagement starts with deep domain understanding — your regulations, your data patterns, your competitive landscape.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Regulatory Compliance', desc: 'SOC2, HIPAA, GDPR, PCI-DSS — we build compliant from day one, not as an afterthought.' },
                  { title: 'Domain-Specific Models', desc: 'Pre-trained on industry data, fine-tuned for your use case, validated by domain experts.' },
                  { title: 'Proven Playbooks', desc: "We don't experiment with your production systems. We apply what's worked before." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-900 mb-1">{item.title}</h4>
                      <p className="text-dark-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">The FSIT Difference</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                  <div className="text-dark-600">Project success rate (vs 59% industry average)</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-1">3 weeks</div>
                  <div className="text-dark-600">Average time to production deployment</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-1">80,000+</div>
                  <div className="text-dark-600">Vetted AI specialists in our network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can solve your industry's specific challenges. Our experts are ready to share relevant case studies and proven approaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/build-scale-ai" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/case-studies" className="btn-secondary border-white/20 text-white hover:bg-white/10">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
