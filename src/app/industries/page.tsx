'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import BranchingList from '@/components/BranchingList';
import BranchingFromTitle from '@/components/BranchingFromTitle';

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
  {
    id: 'sports-entertainment',
    name: 'Sports & Entertainment',
    icon: '🏟️',
    description: 'AI solutions for fan engagement, player performance, stadium operations, and dynamic pricing in Saudi Arabia\'s $38B+ sports economy.',
    useCases: ['Fan analytics & engagement', 'Dynamic ticket pricing', 'Player performance AI', 'Stadium operations', 'Broadcast personalization'],
    stats: { projects: '15+', accuracy: '97.5%' },
  },
];

const stats = [
  { number: '98%', label: 'Project success rate' },
  { number: '9+', label: 'Industries served' },
  { number: '300+', label: 'Projects delivered' },
  { number: '3 weeks', label: 'Average deployment' },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-start overflow-hidden">
        {/* Saudi Modern Architecture Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1682687219573-3fd75f982217?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container-max py-20 md:py-28 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 text-left" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              AI Solutions for{' '}
              <span style={{ color: 'var(--green)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                Every Industry
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl font-medium text-left" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
              Deep domain expertise combined with AI-native development. We understand the unique challenges, regulations, and opportunities in your industry — delivering solutions that work in production.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-neutral-200" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: 'var(--green)' }}>{stat.number}</div>
                <div className="text-lg md:text-xl font-medium" style={{ color: 'var(--gray-700)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              Industries We Serve
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              From regulated sectors to fast-moving tech companies, we bring AI expertise tailored to your industry's specific needs.
            </p>
          </div>

          {/* Grid with dividing lines - 3 columns for 9 items (3x3) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#00A651]/20 rounded-2xl overflow-hidden">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries/${industry.id}`}
                className="group bg-white p-10 hover:bg-[#F5F3F0] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-[#00A651]/10 flex items-center justify-center text-[#00A651] mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-[#00A651] transition-colors" style={{ color: 'var(--black)' }}>
                  {industry.name}
                </h3>
                <p className="text-base md:text-lg mb-6 line-clamp-2" style={{ color: 'var(--gray-600)' }}>
                  {industry.description}
                </p>
                <div className="flex items-center gap-4 text-lg font-semibold">
                  <span style={{ color: 'var(--green)' }}>{industry.stats.projects}</span>
                  <span style={{ color: 'var(--gray-300)' }}>|</span>
                  <span style={{ color: 'var(--gray-600)' }}>{industry.stats.accuracy}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              Common Use Cases Across Industries
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Whether you're optimizing operations, enhancing customer experience, or building new AI-powered products — we've delivered it before.
            </p>
          </div>

          <BranchingFromTitle items={[
            { title: 'Document Processing', desc: 'Intelligent extraction & classification' },
            { title: 'Predictive Analytics', desc: 'Forecast with AI accuracy' },
            { title: 'Conversational AI', desc: 'Natural language interactions' },
            { title: 'Computer Vision', desc: 'Visual intelligence at scale' },
          ]} />

          {/* Grid with dividing lines - 3 columns for 6 items (2x3) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#00A651]/20 rounded-2xl overflow-hidden mt-8">
            {[
              { title: 'Intelligent Document Processing', desc: 'Extract, classify, and process documents with 98%+ accuracy. From invoices to medical records.' },
              { title: 'Predictive Analytics', desc: 'Forecast demand, predict churn, and anticipate maintenance needs before they happen.' },
              { title: 'Conversational AI', desc: 'Customer service bots, internal assistants, and voice agents that actually understand context.' },
              { title: 'Computer Vision', desc: 'Quality inspection, medical imaging, retail analytics, and security monitoring.' },
              { title: 'Recommendation Systems', desc: 'Product recommendations, content personalization, and next-best-action engines.' },
              { title: 'Process Automation', desc: 'End-to-end workflow automation with AI decision-making at every step.' },
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-10 hover:bg-[#F5F3F0] transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-[#00A651]/10 flex items-center justify-center text-[#00A651] mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: 'var(--black)' }}>{useCase.title}</h3>
                <p className="text-base md:text-lg" style={{ color: 'var(--gray-600)' }}>{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Why Industry Expertise Matters</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Generic AI solutions fail in production. We have learned this across 300+ projects. That is why every engagement starts with deep domain understanding.
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="industryLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="industryPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#industryLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#industryPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          {/* Items grid with dividing lines */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#00A651]/20 rounded-2xl overflow-hidden">
            {[
              { title: 'Regulatory Compliance', desc: 'SOC2, HIPAA, GDPR, PCI-DSS — we build compliant from day one, not as an afterthought.' },
              { title: 'Domain-Specific Models', desc: 'Pre-trained on industry data, fine-tuned for your use case, validated by domain experts.' },
              { title: 'Proven Playbooks', desc: "We don't experiment with your production systems. We apply what's worked before." },
            ].map((item, index) => (
              <div key={index} className="group text-center p-10 bg-white hover:bg-[#F5F3F0] transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-[#00A651] transition-colors" style={{ color: 'var(--black)' }}>
                  {item.title}
                </h3>
                <p className="text-base md:text-lg" style={{ color: 'var(--gray-600)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/build-scale-ai" className="btn-primary text-lg px-8 py-4">
              Start your project
            </Link>
          </div>
        </div>
      </section>

      {/* The FSIT Difference */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: 'var(--black)' }}>The FSIT Difference</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: 'var(--green)' }}>98%</div>
              <p className="text-lg md:text-xl" style={{ color: 'var(--gray-600)' }}>Project success rate (vs 59% industry average)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: 'var(--green)' }}>3 weeks</div>
              <p className="text-lg md:text-xl" style={{ color: 'var(--gray-600)' }}>Average time to production deployment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: 'var(--green)' }}>80K+</div>
              <p className="text-lg md:text-xl" style={{ color: 'var(--gray-600)' }}>Vetted AI specialists in our network</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            Let's discuss how AI can solve your industry's specific challenges. Our experts are ready to share relevant case studies and proven approaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/build-scale-ai" className="btn-primary text-lg px-8 py-4">
              Schedule a Consultation
            </Link>
            <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
