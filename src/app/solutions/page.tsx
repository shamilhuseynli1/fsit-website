'use client';

import Link from 'next/link';
import HeroSolutionsVisual from '@/components/HeroSolutionsVisual';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Solutions() {

  const coreServices = [
    {
      title: 'LLM & AI Agent Development',
      description: 'Dedicated AI engineers, data scientists, and AI product teams embedded directly into your organization. We build custom LLM applications, fine-tune models for your domain, and develop AI agents that automate complex workflows.',
      features: ['Custom LLM applications', 'Model fine-tuning', 'AI agent development', 'RAG implementations'],
    },
    {
      title: 'Managed AI Services',
      description: 'End-to-end ownership of AI systems, from deployment and monitoring to optimization and lifecycle management. We handle the complexity so you can focus on outcomes.',
      features: ['24/7 monitoring', 'Model optimization', 'Performance tuning', 'Lifecycle management'],
    },
    {
      title: 'Data Platforms for AI Readiness',
      description: 'Design and development of AI-powered products, copilots, agents, and internal platforms. We ensure your data infrastructure is ready for production AI.',
      features: ['Data pipeline design', 'Feature engineering', 'Vector databases', 'Data governance'],
    },
    {
      title: 'Custom AI & ML Systems',
      description: 'Secure, scalable, and compliant AI infrastructure to support production-grade AI systems. Built for enterprise requirements from day one.',
      features: ['MLOps infrastructure', 'Model serving', 'A/B testing', 'Scalable deployment'],
    },
    {
      title: 'Intelligent Automation',
      description: 'AI agents and automation solutions that streamline operations and reduce manual effort. From document processing to workflow automation.',
      features: ['Process automation', 'Document AI', 'Workflow optimization', 'RPA integration'],
    },
  ];

  const generalModels = [
    {
      name: 'Large Language Models (LLMs)',
      description: 'General-purpose language models for broad enterprise applications',
      useCases: ['Document summarization', 'Content generation', 'Code assistance', 'General Q&A'],
      platforms: ['GPT-4', 'Claude', 'Llama', 'Mistral'],
    },
    {
      name: 'Embedding Models',
      description: 'Vector representations for semantic search and retrieval',
      useCases: ['Semantic search', 'Document similarity', 'Recommendation systems', 'Knowledge bases'],
      platforms: ['OpenAI Embeddings', 'Cohere', 'Sentence Transformers'],
    },
    {
      name: 'Multi-Modal Models',
      description: 'Models that process text, images, and documents together',
      useCases: ['Document understanding', 'Image analysis', 'Visual Q&A', 'Content moderation'],
      platforms: ['GPT-4V', 'Claude Vision', 'Gemini'],
    },
  ];


  const capabilities = [
    {
      category: 'Natural Language Processing',
      items: ['Text Classification', 'Named Entity Recognition', 'Sentiment Analysis', 'Language Translation', 'Text Summarization', 'Question Answering'],
    },
    {
      category: 'Computer Vision',
      items: ['Object Detection', 'Image Classification', 'OCR & Document AI', 'Video Analytics', 'Facial Recognition', 'Quality Inspection'],
    },
    {
      category: 'Predictive Analytics',
      items: ['Time Series Forecasting', 'Anomaly Detection', 'Churn Prediction', 'Risk Scoring', 'Demand Planning', 'Price Optimization'],
    },
    {
      category: 'Conversational AI',
      items: ['AI Copilots', 'Virtual Assistants', 'Knowledge Chatbots', 'Voice Interfaces', 'Multi-turn Dialogue', 'Intent Recognition'],
    },
  ];


  return (
    <div style={{ background: 'var(--white)' }} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[auto] md:min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?auto=format&fit=crop&w=1920&q=80)' }}
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/45" />

        <AnimatedBackground />

        <div className="container-max relative pt-36 pb-4 md:py-36">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                AI Systems &{' '}
                <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  Solutions
                </span>
              </h1>

              <p className="text-2xl md:text-3xl mb-8 text-white leading-relaxed max-w-xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                From general-purpose LLMs to industry-specific AI models — we build, deploy, and operate production-grade AI systems tailored to your vertical
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/build-scale-ai" className="btn-primary text-lg px-8 py-4 text-center">
                  Discuss your AI needs
                </Link>
                <Link href="/ml-models" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-900 transition-all text-lg text-center">
                  Explore ML Models
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-green-400">50+</div>
                  <div className="text-xs md:text-sm text-white/80">AI Systems Built</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-green-400">98%</div>
                  <div className="text-xs md:text-sm text-white/80">Success Rate</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-green-400">24/7</div>
                  <div className="text-xs md:text-sm text-white/80">Production Ready</div>
                </div>
              </div>
            </div>

            {/* Hero Visual - scaled down on mobile */}
            <div className="transform scale-[0.8] md:scale-100 origin-center -my-8 md:my-0">
              <HeroSolutionsVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Core AI Services</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              End-to-end AI delivery from strategy to production operations
            </p>
          </div>

          {/* Flowing line animation with branches to each item - hidden on mobile */}
          <div className="relative hidden md:block">
            <style jsx>{`
              @keyframes flowDown1 {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -200; }
              }
              @keyframes flowDown2 {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -200; }
              }
              @keyframes flowDown3 {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -200; }
              }
              @keyframes flowDown4 {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -200; }
              }
              @keyframes flowDown5 {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -200; }
              }
            `}</style>

            {/* SVG with branching lines */}
            <svg className="w-full h-32 pointer-events-none" viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet">
              {/* Main horizontal line - gray only */}
              <line x1="50" y1="20" x2="950" y2="20" stroke="#d1d5db" strokeWidth="2" />

              {/* Vertical branch 1 */}
              <line x1="100" y1="20" x2="100" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="100" y1="20" x2="100" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowDown1 2s ease-in-out infinite' }} />

              {/* Vertical branch 2 */}
              <line x1="300" y1="20" x2="300" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="300" y1="20" x2="300" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowDown2 2s ease-in-out infinite', animationDelay: '0.3s' }} />

              {/* Vertical branch 3 - center */}
              <line x1="500" y1="20" x2="500" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="500" y1="20" x2="500" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowDown3 2s ease-in-out infinite', animationDelay: '0.6s' }} />

              {/* Vertical branch 4 */}
              <line x1="700" y1="20" x2="700" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="700" y1="20" x2="700" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowDown4 2s ease-in-out infinite', animationDelay: '0.9s' }} />

              {/* Vertical branch 5 */}
              <line x1="900" y1="20" x2="900" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="900" y1="20" x2="900" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowDown5 2s ease-in-out infinite', animationDelay: '1.2s' }} />
            </svg>
          </div>

          {/* Items grid with dividing lines - 5 columns for 5 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#00A651]/20 rounded-2xl overflow-hidden md:-mt-4">
            {coreServices.map((item, index) => (
              <div key={index} className="group text-center p-8 bg-white hover:bg-[#F5F3F0] transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {item.title}
                </h3>
                <p className="text-lg" style={{ color: 'var(--gray-600)' }}>
                  {item.description.split('.')[0]}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/build-scale-ai" className="btn-primary">
              Start your AI project
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="section-sm" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm md:text-base font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--green)' }}>Compliance & Security</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--black)' }}>
              Enterprise-Grade Standards, <span style={{ color: 'var(--green)' }}>Operationalized</span>
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Built for government and enterprise clients with strict compliance requirements
            </p>
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
            {['SOC2', 'HIPAA', 'GDPR', 'PCI-DSS'].map((standard, i) => (
              <div
                key={i}
                className="px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 bg-white"
                style={{ borderColor: 'var(--green)' }}
              >
                <span className="text-sm md:text-base font-bold" style={{ color: 'var(--green)' }}>{standard}</span>
              </div>
            ))}
          </div>

          {/* Operationalization Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Data Residency */}
            <div className="p-6 md:p-8 rounded-xl border transition-all duration-300 hover:shadow-lg" style={{ background: 'var(--cream)', borderColor: 'var(--gray-200)' }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-5" style={{ background: 'var(--green-light)' }}>
                <svg className="w-6 h-6 md:w-7 md:h-7" style={{ color: 'var(--green)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--black)' }}>Data Residency</h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--gray-600)' }}>
                Saudi-based data centers with regional deployment options. Your data stays in-country, meeting local regulations and Vision 2030 digital sovereignty requirements.
              </p>
            </div>

            {/* On-Premise Deployment */}
            <div className="p-6 md:p-8 rounded-xl border transition-all duration-300 hover:shadow-lg" style={{ background: 'var(--cream)', borderColor: 'var(--gray-200)' }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-5" style={{ background: 'var(--green-light)' }}>
                <svg className="w-6 h-6 md:w-7 md:h-7" style={{ color: 'var(--green)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--black)' }}>On-Premise Options</h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--gray-600)' }}>
                Deploy AI systems directly on your infrastructure. Air-gapped installations available for sensitive government workloads with full control over data flow.
              </p>
            </div>

            {/* Governance Model */}
            <div className="p-6 md:p-8 rounded-xl border transition-all duration-300 hover:shadow-lg" style={{ background: 'var(--cream)', borderColor: 'var(--gray-200)' }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-5" style={{ background: 'var(--green-light)' }}>
                <svg className="w-6 h-6 md:w-7 md:h-7" style={{ color: 'var(--green)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--black)' }}>Governance Model</h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--gray-600)' }}>
                Complete audit trails, compliance documentation, and regular security assessments. Quarterly compliance reports and dedicated support for government audits.
              </p>
            </div>
          </div>

          {/* Government Focus Note */}
          <div className="mt-8 md:mt-10 p-5 md:p-6 rounded-xl border-l-4" style={{ background: 'var(--green-light)', borderColor: 'var(--green)' }}>
            <p className="text-sm md:text-base font-semibold mb-2" style={{ color: 'var(--green)' }}>
              ✓ Trusted by Government Entities
            </p>
            <p className="text-sm md:text-base" style={{ color: 'var(--gray-700)' }}>
              Our compliance framework has been validated by multiple Saudi government ministries and PIF entities. We maintain active certifications and work closely with regulatory bodies to ensure continued adherence.
            </p>
          </div>
        </div>
      </section>

      {/* General Models */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>General-Purpose AI Models</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Leverage state-of-the-art foundation models for broad enterprise applications
            </p>
          </div>

          {/* Grid with dividing lines - 3 columns for 3 models */}
          <div className="grid md:grid-cols-3 gap-px bg-[#00A651]/20 rounded-2xl overflow-hidden">
            {generalModels.map((model, index) => (
              <div
                key={index}
                className="group relative p-6 md:p-10 bg-white hover:bg-[#F5F3F0] transition-all duration-300 text-center md:text-left"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 mx-auto md:mx-0"
                  style={{ background: 'rgba(0, 166, 81, 0.1)' }}
                >
                  {index === 0 && (
                    <svg className="w-8 h-8" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {model.name}
                </h3>
                <p className="text-lg mb-6" style={{ color: 'var(--gray-500)' }}>
                  {model.description}
                </p>

                {/* Use Cases */}
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--green)' }}>
                    Use Cases
                  </p>
                  <div className="space-y-3 inline-block text-left">
                    {model.useCases.map((uc, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--green)' }} />
                        <span className="text-base" style={{ color: 'var(--gray-700)' }}>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div className="pt-5" style={{ borderTop: '1px solid var(--gray-100)' }}>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {model.platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm font-medium rounded-full"
                        style={{
                          background: 'var(--gray-100)',
                          color: 'var(--gray-600)'
                        }}
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Teaser */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--black)' }}>
              Industry-Specific AI Solutions
            </h2>
            <p className="text-base md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              From healthcare to financial services, we deliver AI models fine-tuned for your industry's unique requirements and regulatory standards
            </p>
          </div>

          {/* Industry Icons Grid */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10">
            {[
              { name: 'Government', icon: '🏛️' },
              { name: 'Financial Services', icon: '🏦' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Manufacturing', icon: '🏭' },
              { name: 'Technology', icon: '💻' },
              { name: 'Logistics', icon: '🚚' },
              { name: 'Energy', icon: '⚡' },
              { name: 'Retail', icon: '🛒' },
              { name: 'Sports & Entertainment', icon: '🏟️' },
            ].map((industry, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'var(--cream)', border: '1px solid var(--gray-200)' }}
              >
                <div className="text-3xl md:text-4xl">{industry.icon}</div>
                <span className="text-xs md:text-sm font-semibold text-center" style={{ color: 'var(--gray-700)' }}>
                  {industry.name}
                </span>
              </div>
            ))}
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--green)' }}>9+</div>
              <p className="text-sm md:text-base" style={{ color: 'var(--gray-600)' }}>Industries Served</p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--green)' }}>300+</div>
              <p className="text-sm md:text-base" style={{ color: 'var(--gray-600)' }}>Projects Delivered</p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--green)' }}>98%</div>
              <p className="text-sm md:text-base" style={{ color: 'var(--gray-600)' }}>Success Rate</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/industries" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
              Explore All Industries
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-4">
            <h2 className="h2 mb-6">AI & ML Capabilities</h2>
            <p className="text-body max-w-2xl mx-auto">
              Deep expertise across the full spectrum of AI and machine learning technologies
            </p>
          </div>

          {/* Custom branching layout with connected blocks */}
          <div className="relative">
            <style jsx>{`
              @keyframes flowCapLine1 {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -300; }
              }
              @keyframes flowCapLine2 {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -250; }
              }
              @keyframes flowCapLine3 {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -250; }
              }
              @keyframes flowCapLine4 {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -300; }
              }
              @keyframes flowVertical {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -100; }
              }
            `}</style>

            {/* SVG with branching lines - hidden on mobile */}
            <svg className="hidden md:block w-full h-44" viewBox="0 0 1000 180" preserveAspectRatio="xMidYMid meet">
              {/* Center node */}
              <circle cx="500" cy="12" r="8" fill="#00A651" />
              <circle cx="500" cy="12" r="14" fill="none" stroke="#00A651" strokeWidth="1.5" opacity="0.3" />

              {/* Line 1 - leftmost */}
              <path d="M500,20 Q500,90 125,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 125,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="50 400"
                style={{ animation: 'flowCapLine1 2.5s ease-in-out infinite' }}
              />

              {/* Line 2 */}
              <path d="M500,20 Q500,90 375,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 375,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="40 300"
                style={{ animation: 'flowCapLine2 2s ease-in-out infinite', animationDelay: '0.3s' }}
              />

              {/* Line 3 */}
              <path d="M500,20 Q500,90 625,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 625,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="40 300"
                style={{ animation: 'flowCapLine3 2s ease-in-out infinite', animationDelay: '0.6s' }}
              />

              {/* Line 4 - rightmost */}
              <path d="M500,20 Q500,90 875,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 875,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="50 400"
                style={{ animation: 'flowCapLine4 2.5s ease-in-out infinite', animationDelay: '0.9s' }}
              />
            </svg>

            {/* Category blocks with titles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:-mt-2">
              {capabilities.map((cap, index) => (
                <div key={index} className="relative">
                  {/* Title block */}
                  <div
                    className="text-center px-4 py-6 rounded-t-[2rem] rounded-b-xl transition-all duration-300 hover:shadow-lg"
                    style={{ background: 'rgba(200, 220, 210, 0.35)' }}
                  >
                    <h3 className="text-base font-bold mb-4" style={{ color: 'var(--black)' }}>
                      {cap.category}
                    </h3>
                    <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'var(--green)' }} />
                  </div>

                  {/* Connecting line */}
                  <div className="flex justify-center py-2">
                    <svg className="w-4 h-8" viewBox="0 0 16 32">
                      <line x1="8" y1="0" x2="8" y2="32" stroke="#d1d5db" strokeWidth="2" />
                      <line x1="8" y1="0" x2="8" y2="32" stroke="#00A651" strokeWidth="2"
                        strokeDasharray="8 24"
                        style={{ animation: 'flowVertical 1.5s ease-in-out infinite', animationDelay: `${index * 0.2}s` }}
                      />
                    </svg>
                  </div>

                  {/* Items block */}
                  <div
                    className="px-4 py-5 rounded-xl transition-all duration-300 hover:shadow-lg"
                    style={{ background: 'var(--white)', border: '1px solid var(--gray-100)' }}
                  >
                    <div className="space-y-2">
                      {cap.items.map((item, i) => (
                        <p
                          key={i}
                          className="text-sm py-1 text-center transition-colors hover:text-green-600"
                          style={{ color: 'var(--gray-700)' }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="section-sm" style={{ background: 'var(--white)' }}>
        <div className="container-md text-center">
          <h2 className="h3 mb-4">
            AI systems that stay accurate, compliant, and reliable in production
          </h2>
          <p className="text-body">
            Our AI solutions are built to operate in complex, regulated, and high-impact environments
          </p>
        </div>
      </section>

      {/* Case Study */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="grid-2 items-center">
            <div>
              <h2 className="h2 mb-6">AI Operations Copilot</h2>
              <p className="text-body mb-8">
                Secure, Vision 2030–aligned AI that automates workflows, unlocks institutional knowledge, and accelerates decision-making for a Saudi Government Entity.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="stat-number">-45%</span>
                <span className="text-body">manual processing time</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Custom LLM', 'Arabic NLP', 'RAG System', 'On-premise'].map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="flex items-start">
                {/* Spacer for SVG width - hidden on mobile */}
                <div className="w-44 flex-shrink-0 hidden md:block"></div>
                <p className="flex-1 font-semibold mb-6 text-center text-lg" style={{ color: 'var(--black)' }}>AI Components Deployed</p>
              </div>

              <div className="flex items-start">
                {/* SVG with curved branches - height matches items - hidden on mobile */}
                <svg className="hidden md:block w-44 flex-shrink-0 h-[280px]" viewBox="0 0 180 280" preserveAspectRatio="none" style={{ marginRight: '-8px' }}>
                  {/* Center node - positioned at middle (item 3) */}
                  <circle cx="12" cy="140" r="6" fill="#00A651" />
                  <circle cx="12" cy="140" r="10" fill="none" stroke="#00A651" strokeWidth="1.5" opacity="0.3" />

                  {/* Branch 1 - connects to item 1 center (28px) */}
                  <path d="M12,140 Q90,140 178,28" stroke="#00A651" strokeWidth="2" fill="none" />

                  {/* Branch 2 - connects to item 2 center (84px) */}
                  <path d="M12,140 Q90,140 178,84" stroke="#00A651" strokeWidth="2" fill="none" />

                  {/* Branch 3 - connects to item 3 center (140px) */}
                  <path d="M12,140 L178,140" stroke="#00A651" strokeWidth="2" fill="none" />

                  {/* Branch 4 - connects to item 4 center (196px) */}
                  <path d="M12,140 Q90,140 178,196" stroke="#00A651" strokeWidth="2" fill="none" />

                  {/* Branch 5 - connects to item 5 center (252px) */}
                  <path d="M12,140 Q90,140 178,252" stroke="#00A651" strokeWidth="2" fill="none" />
                </svg>

                {/* Items list */}
                <div className="flex-1 flex flex-col justify-between h-[280px]">
                  {[
                    'Fine-tuned Arabic/English LLM',
                    'Document understanding pipeline',
                    'Knowledge retrieval system',
                    'Workflow automation agents',
                    'Human-in-the-loop validation'
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="py-4 px-5 rounded-xl transition-all duration-200 hover:shadow-lg"
                      style={{
                        background: 'white',
                        border: '2px solid var(--green)',
                        boxShadow: '0 2px 8px rgba(0,166,81,0.1)'
                      }}
                    >
                      <span className="text-lg font-semibold" style={{ color: 'var(--black)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 md:py-16" style={{ background: 'var(--green)' }}>
        <div className="container-md text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to build AI that actually runs?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-white/80">
            Talk to our delivery team and start your transformation today.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-white hover:bg-gray-100"
            style={{ color: 'var(--green)' }}
          >
            Book a strategy call
          </Link>
        </div>
      </section>
    </div>
  );
}
