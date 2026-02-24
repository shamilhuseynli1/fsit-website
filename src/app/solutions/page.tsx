'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroSolutionsVisual from '@/components/HeroSolutionsVisual';
import AnimatedBackground from '@/components/AnimatedBackground';
import BranchingList from '@/components/BranchingList';
import BranchingFromTitle from '@/components/BranchingFromTitle';

export default function Solutions() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

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

  const targetedModels = [
    {
      vertical: 'Government & Public Sector',
      models: [
        { name: 'Document Processing AI', desc: 'Automated classification, extraction, and routing of government documents' },
        { name: 'Citizen Services Copilot', desc: 'AI assistants for citizen inquiries aligned with government policies' },
        { name: 'Policy Analysis Engine', desc: 'NLP models fine-tuned on regulatory and policy documents' },
      ],
      outcomes: ['40% faster document processing', 'Vision 2030 aligned', 'Arabic/English bilingual'],
    },
    {
      vertical: 'Banking & Financial Services',
      models: [
        { name: 'Transaction Analysis AI', desc: 'Fraud detection and anomaly identification in financial data' },
        { name: 'Risk Assessment Models', desc: 'Credit scoring and risk evaluation with explainable AI' },
        { name: 'Compliance Automation', desc: 'Regulatory compliance checking and reporting automation' },
      ],
      outcomes: ['Real-time fraud detection', 'Regulatory compliant', 'Audit-ready outputs'],
    },
    {
      vertical: 'Healthcare',
      models: [
        { name: 'Clinical NLP', desc: 'Medical record understanding and clinical text extraction' },
        { name: 'Diagnostic Support AI', desc: 'Image analysis for radiology and pathology support' },
        { name: 'Patient Engagement Copilot', desc: 'AI assistants for appointment scheduling and health queries' },
      ],
      outcomes: ['HIPAA compliant', 'Clinical validation', 'EHR integration'],
    },
    {
      vertical: 'Manufacturing & Logistics',
      models: [
        { name: 'Predictive Maintenance AI', desc: 'Equipment failure prediction and maintenance scheduling' },
        { name: 'Quality Control Vision', desc: 'Computer vision for defect detection and quality assurance' },
        { name: 'Supply Chain Optimizer', desc: 'Demand forecasting and inventory optimization models' },
      ],
      outcomes: ['30% reduction in downtime', 'Real-time monitoring', 'IoT integration'],
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

  const industryUseCases: Record<string, { useCases: string[]; description: string }> = {
    'Government & Public Sector': {
      description: 'AI solutions aligned with Vision 2030 for digital government transformation',
      useCases: ['Document processing & classification', 'Citizen services automation', 'Policy analysis & compliance', 'Arabic/English bilingual AI'],
    },
    'Consulting Firms & System Integrators': {
      description: 'AI capabilities to enhance consulting deliverables and client solutions',
      useCases: ['AI strategy & roadmap development', 'Solution architecture design', 'Implementation acceleration', 'Knowledge management systems'],
    },
    'Healthcare': {
      description: 'Clinical AI solutions for improved patient outcomes and operational efficiency',
      useCases: ['Clinical documentation AI', 'Diagnostic support systems', 'Patient engagement copilots', 'Medical imaging analysis'],
    },
    'Banking & Financial Services': {
      description: 'Secure, compliant AI for financial operations and customer experience',
      useCases: ['Fraud detection & prevention', 'Risk assessment models', 'Regulatory compliance automation', 'Customer service AI'],
    },
    'Manufacturing': {
      description: 'AI-driven operational excellence and quality assurance',
      useCases: ['Predictive maintenance', 'Quality control vision systems', 'Production optimization', 'Supply chain forecasting'],
    },
    'Logistics & Supply Chain': {
      description: 'End-to-end supply chain visibility and optimization',
      useCases: ['Route optimization', 'Demand forecasting', 'Warehouse automation', 'Fleet management AI'],
    },
    'Real Estate': {
      description: 'AI for property management, valuation, and customer experience',
      useCases: ['Property valuation models', 'Tenant management automation', 'Market analysis & prediction', 'Virtual property assistants'],
    },
    'Retail': {
      description: 'Personalized customer experiences and operational efficiency',
      useCases: ['Product recommendations', 'Inventory optimization', 'Customer behavior analytics', 'Dynamic pricing models'],
    },
    'Energy': {
      description: 'Smart energy management and sustainability solutions',
      useCases: ['Grid optimization', 'Energy consumption forecasting', 'Asset monitoring & maintenance', 'ESG reporting automation'],
    },
  };

  const allIndustries = Object.keys(industryUseCases);

  return (
    <div style={{ background: 'var(--white)' }} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?auto=format&fit=crop&w=1920&q=80)' }}
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60" />

        <AnimatedBackground />

        <div className="container-max relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                AI Systems &{' '}
                <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  Solutions
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed max-w-xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
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
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-400">50+</div>
                  <div className="text-sm text-white/80">AI Systems Built</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-white/80">Production Ready</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
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

          {/* Flowing line animation with branches to each item */}
          <div className="relative">
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
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-[#00A651]/20 rounded-2xl overflow-hidden -mt-4">
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
                className="group relative p-10 bg-white hover:bg-[#F5F3F0] transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
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
                  <div className="space-y-3">
                    {model.useCases.map((uc, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--green)' }} />
                        <span className="text-base" style={{ color: 'var(--gray-700)' }}>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div className="pt-5" style={{ borderTop: '1px solid var(--gray-100)' }}>
                  <div className="flex flex-wrap gap-2">
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

      {/* Targeted Models */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Targeted Models for Verticals</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Fine-tuned and purpose-built AI models designed for specific industry requirements
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {targetedModels.map((vertical, index) => {
              const icons = [
                // Government
                <svg key="gov" className="w-6 h-6" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>,
                // Banking
                <svg key="bank" className="w-6 h-6" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>,
                // Healthcare
                <svg key="health" className="w-6 h-6" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>,
                // Manufacturing
                <svg key="mfg" className="w-6 h-6" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>,
              ];

              return (
                <div
                  key={index}
                  className="group relative p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  style={{
                    background: 'var(--cream)',
                    border: '1px solid var(--gray-100)'
                  }}
                >
                  {/* Header with icon */}
                  <div className="flex items-start gap-2 mb-3 min-h-[56px]">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(0, 166, 81, 0.1)' }}
                    >
                      {icons[index]}
                    </div>
                    <h3 className="text-base font-bold group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                      {vertical.vertical}
                    </h3>
                  </div>

                  {/* Models */}
                  <div className="space-y-2 mb-3">
                    {vertical.models.slice(0, 2).map((model, i) => (
                      <div
                        key={i}
                        className="p-2 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.5)' }}
                      >
                        <p className="text-base font-semibold mb-1" style={{ color: 'var(--green)' }}>{model.name}</p>
                        <p className="text-sm line-clamp-2" style={{ color: 'var(--gray-600)' }}>{model.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <div className="pt-2" style={{ borderTop: '1px solid var(--gray-200)' }}>
                    <div className="flex flex-wrap gap-1">
                      {vertical.outcomes.slice(0, 2).map((outcome, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            background: 'rgba(0, 166, 81, 0.1)',
                            color: 'var(--green)'
                          }}
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg mb-6" style={{ color: 'var(--gray-600)' }}>Need AI solutions for a different vertical?</p>
            <Link href="/build-scale-ai" className="btn-primary">
              Discuss your requirements
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

            {/* SVG with branching lines */}
            <svg className="w-full h-44" viewBox="0 0 1000 180" preserveAspectRatio="xMidYMid meet">
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
            <div className="grid grid-cols-4 gap-4 -mt-2">
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
                {/* Spacer for SVG width */}
                <div className="w-44 flex-shrink-0"></div>
                <p className="flex-1 font-semibold mb-6 text-center text-lg" style={{ color: 'var(--black)' }}>AI Components Deployed</p>
              </div>

              <div className="flex items-start">
                {/* SVG with curved branches - height matches items */}
                <svg className="w-44 flex-shrink-0 h-[280px]" viewBox="0 0 180 280" preserveAspectRatio="none" style={{ marginRight: '-8px' }}>
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

      {/* Industries */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="h2 mb-6">Solutions Across Verticals</h2>
            <p className="text-small">Click on any industry to see AI use cases</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {allIndustries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndustry(industry)}
                className="px-5 py-3 rounded-full font-medium text-sm transition-all duration-300"
                style={{
                  background: 'var(--gray-100)',
                  color: 'var(--gray-700)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--green)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--gray-100)';
                  e.currentTarget.style.color = 'var(--gray-700)';
                }}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedIndustry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)' }}
          onClick={() => setSelectedIndustry(null)}
        >
          <div
            className="rounded-2xl max-w-lg w-full p-8 relative shadow-2xl animate-fade-in"
            style={{ background: 'var(--white)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIndustry(null)}
              className="absolute top-4 right-4 transition-colors"
              style={{ color: 'var(--gray-400)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--black)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-400)'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="h4 mb-2">{selectedIndustry}</h3>
            <p className="text-small mb-8">{industryUseCases[selectedIndustry]?.description}</p>

            <p className="label-muted mb-4">AI Use Cases</p>
            <div className="list-lines mb-8">
              {industryUseCases[selectedIndustry]?.useCases.map((useCase, i) => (
                <div key={i} className="list-lines-item">
                  <span className="font-medium" style={{ color: 'var(--gray-700)' }}>{useCase}</span>
                </div>
              ))}
            </div>

            <Link
              href="/build-scale-ai"
              className="btn-primary w-full justify-center"
            >
              Discuss {selectedIndustry} Solutions
            </Link>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-md text-center">
          <h2 className="h2 mb-6">Ready to build production AI?</h2>
          <p className="text-body max-w-xl mx-auto mb-10">
            Talk to our AI delivery team about your requirements
          </p>
          <Link href="/build-scale-ai" className="btn-primary">
            Start Building
          </Link>
        </div>
      </section>
    </div>
  );
}
