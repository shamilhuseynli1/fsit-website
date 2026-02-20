'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import HeroBuildVisual from '@/components/HeroBuildVisual';

export default function BuildInnovate() {
  const capabilities = [
    {
      title: 'Custom AI Solutions',
      description: 'Purpose-built AI systems designed for your specific business challenges, not off-the-shelf products.',
      features: ['Custom LLM applications', 'Domain-specific models', 'Bespoke AI agents', 'Tailored workflows'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Rapid Prototyping',
      description: 'Move from concept to working prototype quickly. Validate ideas before committing to full development.',
      features: ['POC development', 'Feasibility studies', 'Technical validation', 'Stakeholder demos'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Production Engineering',
      description: 'Enterprise-grade engineering that takes AI from prototype to production-ready systems.',
      features: ['Scalable architecture', 'Performance optimization', 'Security hardening', 'Integration development'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'AI Product Development',
      description: 'End-to-end development of AI-powered products, from ideation to market-ready solutions.',
      features: ['Product strategy', 'UX design', 'Full-stack development', 'Launch support'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  const buildProcess = [
    {
      phase: '01',
      title: 'Discovery & Strategy',
      description: 'Understand your business objectives, technical landscape, and define the AI opportunity',
      deliverables: ['Requirements document', 'Technical assessment', 'AI roadmap'],
    },
    {
      phase: '02',
      title: 'Design & Architecture',
      description: 'Design the solution architecture, data flows, and integration points',
      deliverables: ['System architecture', 'Data model', 'API specifications'],
    },
    {
      phase: '03',
      title: 'Build & Iterate',
      description: 'Agile development with regular demos and feedback loops',
      deliverables: ['Working software', 'Test coverage', 'Documentation'],
    },
    {
      phase: '04',
      title: 'Deploy & Launch',
      description: 'Production deployment with monitoring, testing, and go-live support',
      deliverables: ['Production system', 'Runbooks', 'Training materials'],
    },
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

  return (
    <>
      {/* Hero Section */}
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        {/* Saudi Futuristic Architecture Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1733757361453-5f493624a734?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <NetworkBackground nodeCount={70} maxDistance={130} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label !text-primary-500 !mb-4 md:!mb-6 animate-fade-in">Build & Innovate</p>
              <h1 className="hero-title text-white animate-fade-in-up text-3xl md:text-5xl lg:text-6xl">
                Build AI Systems<br />
                <span className="text-primary-500 text-glow">That Actually Work</span>
              </h1>
              <p className="hero-subtitle text-base md:text-lg lg:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Operationalize AI at scale, not just experiment with it. We embed AI into mission-critical systems with strong governance, security, and industry compliance — built for regulated sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Link href="/contact" className="btn-primary text-center">
                  Start your AI project
                </Link>
                <Link href="/solutions" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900 text-center">
                  Explore solutions
                </Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <HeroBuildVisual />
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

      {/* What We Build */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">What We Build</p>
            <h2 className="section-title">AI Development Capabilities</h2>
            <p className="section-subtitle mx-auto">
              End-to-end AI development from concept to production-ready systems
            </p>
          </div>

          <div className="grid-2">
            {capabilities.map((cap, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
                    {cap.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-900 mb-2">{cap.title}</h3>
                    <p className="text-dark-500 text-sm mb-4">{cap.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.features.map((feature, i) => (
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

      {/* Build Process */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label !text-primary-500">Our Process</p>
            <h2 className="section-title !text-white">How We Build</h2>
            <p className="section-subtitle mx-auto !text-dark-300">
              A proven methodology that delivers production-ready AI systems
            </p>
          </div>

          <div className="space-y-6">
            {buildProcess.map((step, index) => (
              <div key={index} className="bg-dark-800 rounded-2xl p-6 md:p-8 border border-dark-700 hover:border-primary-500 transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-dark-300 mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable, i) => (
                        <span key={i} className="text-xs bg-dark-700 text-dark-300 px-3 py-1 rounded-full">
                          {deliverable}
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

      {/* Use Cases */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Use Cases</p>
            <h2 className="section-title">What We've Built</h2>
            <p className="section-subtitle mx-auto">
              Real AI solutions delivering measurable business outcomes
            </p>
          </div>

          <div className="grid-2">
            {useCases.map((useCase, index) => (
              <div key={index} className="card card-hover">
                <h3 className="text-lg font-semibold text-dark-900 mb-2">{useCase.title}</h3>
                <p className="text-dark-500 text-sm mb-4">{useCase.description}</p>
                <div className="flex items-center gap-2 text-primary-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="font-semibold">{useCase.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Technology</p>
            <h2 className="section-title">Our Tech Stack</h2>
            <p className="section-subtitle mx-auto">
              Modern AI infrastructure and frameworks for production-grade systems
            </p>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            {techStack.map((tech, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-dark-900 mb-4 text-sm">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.tools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-2 bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                      <span className="w-5 h-5 bg-gradient-to-br from-primary-500 to-primary-400 rounded flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span className="text-sm text-dark-600">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Build With Us */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Why FSIT</p>
              <h2 className="section-title">Build With Experts</h2>
              <p className="text-dark-500 mb-6">
                We're not a traditional consulting firm that hands over a report and leaves. We build alongside you, with engineers who've shipped AI at scale.
              </p>
              <div className="space-y-3">
                {[
                  'Engineers with production AI experience',
                  'Not just prototypes — we ship to production',
                  'Embedded teams that transfer knowledge',
                  'Focus on outcomes, not billable hours',
                  'Long-term partnership approach',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-neutral-200 hover:border-primary-500/30 transition-all">
                    <span className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-dark-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-dark-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Consulting vs FSIT</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-dark-700">
                  <span className="text-dark-300">Deliverable</span>
                  <div className="text-right">
                    <span className="text-dark-400 line-through mr-3">Reports</span>
                    <span className="text-primary-500 font-semibold">Working software</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-dark-700">
                  <span className="text-dark-300">Team</span>
                  <div className="text-right">
                    <span className="text-dark-400 line-through mr-3">Consultants</span>
                    <span className="text-primary-500 font-semibold">Engineers</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-dark-700">
                  <span className="text-dark-300">Goal</span>
                  <div className="text-right">
                    <span className="text-dark-400 line-through mr-3">More projects</span>
                    <span className="text-primary-500 font-semibold">Your success</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-300">Knowledge</span>
                  <div className="text-right">
                    <span className="text-dark-400 line-through mr-3">Walks away</span>
                    <span className="text-primary-500 font-semibold">Transferred</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-max text-center">
          <h2 className="section-title !text-white mb-4">
            Ready to build your AI solution?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Let's discuss your challenges and design an AI solution that delivers real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start your project
            </Link>
            <Link href="/manage-optimize" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
              Learn about AI operations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
