'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import HeroBuildVisual from '@/components/HeroBuildVisual';
import ProcessFlow from '@/components/ProcessFlow';

export default function BuildInnovate() {
  const capabilities = [
    {
      title: 'Custom AI Solutions',
      description: 'Purpose-built AI systems designed for your specific business challenges, not off-the-shelf products.',
      features: ['Custom LLM applications', 'Domain-specific models', 'Bespoke AI agents', 'Tailored workflows'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Rapid Prototyping',
      description: 'Move from concept to working prototype quickly. Validate ideas before committing to full development.',
      features: ['POC development', 'Feasibility studies', 'Technical validation', 'Stakeholder demos'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Production Engineering',
      description: 'Enterprise-grade engineering that takes AI from prototype to production-ready systems.',
      features: ['Scalable architecture', 'Performance optimization', 'Security hardening', 'Integration development'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'AI Product Development',
      description: 'End-to-end development of AI-powered products, from ideation to market-ready solutions.',
      features: ['Product strategy', 'UX design', 'Full-stack development', 'Launch support'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
  ];

  const techStack = [
    { category: 'LLM Frameworks', tools: ['LangChain', 'LlamaIndex', 'Semantic Kernel', 'Haystack'] },
    { category: 'ML Platforms', tools: ['PyTorch', 'TensorFlow', 'JAX', 'Hugging Face'] },
    { category: 'Vector Databases', tools: ['Pinecone', 'Weaviate', 'Milvus', 'Chroma'] },
    { category: 'Cloud Platforms', tools: ['AWS', 'Azure', 'Google Cloud', 'On-premise'] },
  ];

  const useCases = [
    {
      title: 'Intelligent Document Processing',
      description: 'Automate extraction, classification, and routing of documents at scale',
      outcome: '70% reduction in manual processing',
    },
    {
      title: 'Enterprise Knowledge Base',
      description: 'AI-powered search and Q&A across your organizational knowledge',
      outcome: '5x faster information retrieval',
    },
    {
      title: 'Customer Service Automation',
      description: 'AI agents that handle inquiries, resolve issues, and escalate appropriately',
      outcome: '40% reduction in support costs',
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'ML models for forecasting, anomaly detection, and decision support',
      outcome: '25% improvement in forecast accuracy',
    },
  ];

  const stats = [
    { value: '98%', label: 'Production success rate' },
    { value: '3 weeks', label: 'To operational teams' },
    { value: '100+', label: 'AI systems in production' },
    { value: '50+', label: 'Enterprise clients' },
  ];

  const differentiators = [
    { old: 'Reports', new: 'Working software', label: 'Deliverable' },
    { old: 'Consultants', new: 'Engineers', label: 'Team' },
    { old: 'More projects', new: 'Your success', label: 'Goal' },
    { old: 'Walks away', new: 'Transferred', label: 'Knowledge' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[auto] md:min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1738410775719-9f237adb266d?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/60" />
        <NetworkBackground nodeCount={60} maxDistance={120} />

        <div className="relative container-max pt-36 pb-4 md:py-36">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-green-400 font-semibold text-sm tracking-wider uppercase mb-3 md:mb-4">Build & Innovate</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-[1.1]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Build AI Systems
                <span className="block text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>That Actually Work</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Operationalize AI at scale, not just experiment with it. We embed AI into mission-critical systems with strong governance, security, and industry compliance.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                  Start your AI project
                </Link>
                <Link href="/solutions" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-900 transition-all text-base md:text-lg">
                  Explore solutions
                </Link>
              </div>
            </div>
            <div className="mt-2 lg:mt-0 transform scale-[0.75] md:scale-100 origin-top -mb-16 md:mb-0">
              <HeroBuildVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-subtle">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-modern">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="label mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>AI Development Capabilities</h2>
            <p className="text-xl" style={{ color: 'var(--gray-600)' }}>
              End-to-end AI development from concept to production-ready systems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {capabilities.map((cap, index) => (
              <div key={index} className="card-feature group text-center md:text-left">
                <div className="icon-modern mb-4 mx-auto md:mx-0">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2 group-hover:text-green-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{cap.description}</p>
                <div className="space-y-1.5">
                  {cap.features.map((feature, i) => (
                    <div key={i} className="tag-modern text-xs">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="label mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>How We Build</h2>
            <p className="text-xl" style={{ color: 'var(--gray-600)' }}>
              A proven methodology that delivers production-ready AI systems
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ProcessFlow steps={[
              { title: 'Discovery', desc: 'Strategy & Assessment' },
              { title: 'Design', desc: 'Architecture & Planning' },
              { title: 'Build', desc: 'Agile Development' },
              { title: 'Deploy', desc: 'Launch & Support' },
            ]} />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="label mb-3">Real Results</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>What We've Built</h2>
            <p className="text-xl" style={{ color: 'var(--gray-600)' }}>
              Real AI solutions delivering measurable business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="card-glass group text-center md:text-left">
                <h3 className="text-base font-semibold text-dark-900 mb-2 group-hover:text-green-600 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{useCase.description}</p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-green-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm font-semibold">{useCase.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="label mb-3">Technology</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Our Tech Stack</h2>
            <p className="text-xl" style={{ color: 'var(--gray-600)' }}>
              Modern AI infrastructure and frameworks for production-grade systems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="card-feature text-center md:text-left">
                <h3 className="font-semibold text-dark-900 mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.tools.map((tool, i) => (
                    <div key={i} className="flex items-center justify-center md:justify-start gap-2 p-2 rounded-lg bg-white/50 border border-gray-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="label mb-3">Why FSIT</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Build With Experts</h2>
            <p className="text-xl" style={{ color: 'var(--gray-600)' }}>
              We're not a traditional consulting firm that hands over a report and leaves. We build alongside you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {differentiators.map((item, index) => (
                <div key={index} className="card-glass text-center p-6">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm text-gray-400 line-through mb-1">{item.old}</p>
                  <p className="text-lg font-bold text-green-600">{item.new}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              Ready to build
              <span className="block text-gradient">AI that works?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--gray-600)' }}>
              Let's discuss your challenges and design an AI solution that delivers real results
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start your project
              </Link>
              <Link href="/manage-optimize" className="btn-secondary">
                Learn about AI operations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
