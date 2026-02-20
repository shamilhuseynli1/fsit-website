'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroSolutionsVisual from '@/components/HeroSolutionsVisual';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Solutions() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const coreServices = [
    {
      title: 'LLM & AI Agent Development',
      description: 'Dedicated AI engineers, data scientists, and AI product teams embedded directly into your organization. We build custom LLM applications, fine-tune models for your domain, and develop AI agents that automate complex workflows.',
      features: ['Custom LLM applications', 'Model fine-tuning', 'AI agent development', 'RAG implementations'],
      icon: '🤖',
    },
    {
      title: 'Managed AI Services',
      description: 'End-to-end ownership of AI systems, from deployment and monitoring to optimization and lifecycle management. We handle the complexity so you can focus on outcomes.',
      features: ['24/7 monitoring', 'Model optimization', 'Performance tuning', 'Lifecycle management'],
      icon: '⚙️',
    },
    {
      title: 'Data Platforms for AI Readiness',
      description: 'Design and development of AI-powered products, copilots, agents, and internal platforms. We ensure your data infrastructure is ready for production AI.',
      features: ['Data pipeline design', 'Feature engineering', 'Vector databases', 'Data governance'],
      icon: '📊',
    },
    {
      title: 'Custom AI & ML Systems',
      description: 'Secure, scalable, and compliant AI infrastructure to support production-grade AI systems. Built for enterprise requirements from day one.',
      features: ['MLOps infrastructure', 'Model serving', 'A/B testing', 'Scalable deployment'],
      icon: '🏗️',
    },
    {
      title: 'Intelligent Automation',
      description: 'AI agents and automation solutions that streamline operations and reduce manual effort. From document processing to workflow automation.',
      features: ['Process automation', 'Document AI', 'Workflow optimization', 'RPA integration'],
      icon: '⚡',
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
      color: 'border-primary-500',
    },
    {
      vertical: 'Banking & Financial Services',
      models: [
        { name: 'Transaction Analysis AI', desc: 'Fraud detection and anomaly identification in financial data' },
        { name: 'Risk Assessment Models', desc: 'Credit scoring and risk evaluation with explainable AI' },
        { name: 'Compliance Automation', desc: 'Regulatory compliance checking and reporting automation' },
      ],
      outcomes: ['Real-time fraud detection', 'Regulatory compliant', 'Audit-ready outputs'],
      color: 'border-primary-500',
    },
    {
      vertical: 'Healthcare',
      models: [
        { name: 'Clinical NLP', desc: 'Medical record understanding and clinical text extraction' },
        { name: 'Diagnostic Support AI', desc: 'Image analysis for radiology and pathology support' },
        { name: 'Patient Engagement Copilot', desc: 'AI assistants for appointment scheduling and health queries' },
      ],
      outcomes: ['HIPAA compliant', 'Clinical validation', 'EHR integration'],
      color: 'border-red-500',
    },
    {
      vertical: 'Manufacturing & Logistics',
      models: [
        { name: 'Predictive Maintenance AI', desc: 'Equipment failure prediction and maintenance scheduling' },
        { name: 'Quality Control Vision', desc: 'Computer vision for defect detection and quality assurance' },
        { name: 'Supply Chain Optimizer', desc: 'Demand forecasting and inventory optimization models' },
      ],
      outcomes: ['30% reduction in downtime', 'Real-time monitoring', 'IoT integration'],
      color: 'border-orange-500',
    },
    {
      vertical: 'Energy & Utilities',
      models: [
        { name: 'Grid Optimization AI', desc: 'Load balancing and energy distribution optimization' },
        { name: 'Asset Monitoring', desc: 'Predictive analytics for infrastructure maintenance' },
        { name: 'Sustainability Analytics', desc: 'Carbon footprint tracking and ESG reporting automation' },
      ],
      outcomes: ['Energy efficiency gains', 'Predictive insights', 'ESG compliance'],
      color: 'border-yellow-500',
    },
    {
      vertical: 'Retail & E-Commerce',
      models: [
        { name: 'Personalization Engine', desc: 'Product recommendations and customer journey optimization' },
        { name: 'Demand Forecasting', desc: 'Sales prediction and inventory planning models' },
        { name: 'Customer Service AI', desc: 'Conversational AI for support and sales assistance' },
      ],
      outcomes: ['Increased conversion', 'Reduced inventory costs', '24/7 customer support'],
      color: 'border-primary-600',
    },
  ];

  const capabilities = [
    {
      category: 'Natural Language Processing',
      items: ['Text Classification', 'Named Entity Recognition', 'Sentiment Analysis', 'Language Translation', 'Text Summarization', 'Question Answering'],
      icon: '💬',
    },
    {
      category: 'Computer Vision',
      items: ['Object Detection', 'Image Classification', 'OCR & Document AI', 'Video Analytics', 'Facial Recognition', 'Quality Inspection'],
      icon: '👁️',
    },
    {
      category: 'Predictive Analytics',
      items: ['Time Series Forecasting', 'Anomaly Detection', 'Churn Prediction', 'Risk Scoring', 'Demand Planning', 'Price Optimization'],
      icon: '📈',
    },
    {
      category: 'Conversational AI',
      items: ['AI Copilots', 'Virtual Assistants', 'Knowledge Chatbots', 'Voice Interfaces', 'Multi-turn Dialogue', 'Intent Recognition'],
      icon: '🗣️',
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
    'Automotive': {
      description: 'AI solutions for modern automotive operations and services',
      useCases: ['Predictive vehicle maintenance', 'Sales & service optimization', 'Customer experience AI', 'Parts demand forecasting'],
    },
    'Energy': {
      description: 'Smart energy management and sustainability solutions',
      useCases: ['Grid optimization', 'Energy consumption forecasting', 'Asset monitoring & maintenance', 'ESG reporting automation'],
    },
    'Travel & Hospitality': {
      description: 'Enhanced guest experiences and operational optimization',
      useCases: ['Personalized recommendations', 'Dynamic pricing optimization', 'Customer service chatbots', 'Demand forecasting'],
    },
    'Education': {
      description: 'AI-powered learning experiences and administrative efficiency',
      useCases: ['Personalized learning paths', 'Student performance analytics', 'Administrative automation', 'Content generation & curation'],
    },
    'Agriculture': {
      description: 'Precision agriculture and smart farming solutions',
      useCases: ['Crop yield prediction', 'Disease detection & prevention', 'Resource optimization', 'Supply chain management'],
    },
    'Entertainment & Media': {
      description: 'Content intelligence and audience engagement',
      useCases: ['Content recommendations', 'Audience analytics', 'Automated content tagging', 'Sentiment & trend analysis'],
    },
    'Sports & Sports Technology': {
      description: 'Performance analytics and fan engagement solutions',
      useCases: ['Player performance analytics', 'Injury prediction models', 'Fan engagement AI', 'Game strategy optimization'],
    },
  };

  const allIndustries = Object.keys(industryUseCases);

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-solutions.jpg)' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark-900/80" />

        {/* Network pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="networkPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#22c55e" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#networkPattern)" />
          </svg>
        </div>

        <AnimatedBackground />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI Systems &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                  Solutions
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
                From general-purpose LLMs to industry-specific AI models — we build, deploy, and operate production-grade AI systems tailored to your vertical
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/build-scale-ai"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                >
                  Discuss your AI needs
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/ml-models"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-600 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Explore ML Models
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">50+</div>
                  <div className="text-neutral-400 text-sm">AI Systems Built</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">98%</div>
                  <div className="text-neutral-400 text-sm">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">24/7</div>
                  <div className="text-neutral-400 text-sm">Production Ready</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block">
              <HeroSolutionsVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-4">
              <span className="text-primary-500 text-sm font-medium">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core AI Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end AI delivery from strategy to production operations
            </p>
          </div>

          <div className="space-y-4">
            {coreServices.map((service, index) => (
              <div key={index} className="group bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-400/20 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 bg-gradient-to-r from-primary-500/10 to-primary-400/10 px-4 py-2 rounded-lg border border-primary-500/20">
                          <span className="w-5 h-5 bg-gradient-to-br from-primary-500 to-primary-400 rounded-md flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Models Section */}
      <section className="relative py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-4">
              <span className="text-primary-400 text-sm font-medium">Foundation AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              General-Purpose AI Models
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Leverage state-of-the-art foundation models for broad enterprise applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {generalModels.map((model, index) => (
              <div key={index} className="group bg-dark-800/60 backdrop-blur-sm border border-dark-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">{model.name}</h3>
                <p className="text-neutral-400 text-sm mb-4">{model.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-neutral-500 mb-3">Use Cases:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {model.useCases.map((uc, i) => (
                      <div key={i} className="flex items-center gap-2 bg-dark-700/50 p-2 rounded-lg border border-dark-600">
                        <span className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-400 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-xs text-neutral-300">{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-neutral-500 mb-2">Platforms:</p>
                  <p className="text-xs text-neutral-400">{model.platforms.join(' • ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeted Models for Verticals */}
      <section className="relative py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/10 border border-primary-600/30 rounded-full mb-4">
              <span className="text-primary-500 text-sm font-medium">Industry-Specific AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Targeted Models for Verticals
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Fine-tuned and purpose-built AI models designed for specific industry requirements, compliance needs, and domain expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {targetedModels.map((vertical, index) => (
              <div key={index} className={`group bg-dark-900/60 backdrop-blur-sm rounded-2xl p-6 border-l-4 ${vertical.color} border border-dark-700 hover:border-primary-500/30 transition-all`}>
                <h3 className="text-xl font-semibold text-white mb-4">{vertical.vertical}</h3>

                <div className="space-y-3 mb-4">
                  {vertical.models.map((model, i) => (
                    <div key={i} className="bg-dark-800/60 rounded-lg p-3">
                      <p className="text-primary-400 font-medium text-sm">{model.name}</p>
                      <p className="text-neutral-400 text-xs">{model.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700">
                  {vertical.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-primary-400/15 px-3 py-1.5 rounded-lg border border-primary-500/20">
                      <span className="w-4 h-4 bg-gradient-to-br from-primary-500 to-primary-400 rounded flex items-center justify-center text-[8px] font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-xs text-primary-300 font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-400 mb-4">Need AI solutions for a different vertical?</p>
            <Link
              href="/build-scale-ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
            >
              Discuss your requirements
            </Link>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="relative py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full mb-4">
              <span className="text-gold-400 text-sm font-medium">Technical Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI & ML Capabilities
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Deep expertise across the full spectrum of AI and machine learning technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div key={index} className="group bg-dark-800/60 backdrop-blur-sm border border-dark-700 rounded-xl p-6 hover:border-primary-500/50 transition-all">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="font-semibold text-white mb-4 group-hover:text-primary-400 transition-colors">{cap.category}</h3>
                <div className="space-y-2">
                  {cap.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-dark-700/30 p-2.5 rounded-lg border border-dark-600/50 hover:border-primary-500/30 transition-colors">
                      <span className="w-7 h-7 bg-gradient-to-br from-primary-500/20 to-primary-400/20 border border-primary-500/30 rounded-lg flex items-center justify-center text-xs font-semibold text-primary-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            AI systems that stay accurate, compliant, and reliable in production
          </h2>
          <p className="text-white/80">
            Our AI solutions are built to operate in complex, regulated, and high-impact environments
          </p>
        </div>
      </section>

      {/* Case Study */}
      <section className="relative py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                <span className="text-primary-400 text-sm font-medium">Case Study</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Operations Copilot
              </h2>
              <p className="text-neutral-400 mb-6">
                Secure, Vision 2030–aligned AI that automates workflows, unlocks institutional knowledge, and accelerates decision-making for a Saudi Government Entity.
              </p>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">-45%</span>
                <span className="text-neutral-400">manual processing time</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Custom LLM', 'Arabic NLP', 'RAG System', 'On-premise'].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-primary-400/15 px-4 py-2 rounded-lg border border-primary-500/30">
                    <span className="w-5 h-5 bg-gradient-to-br from-primary-500 to-primary-400 rounded-md flex items-center justify-center text-[10px] font-bold text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-primary-300 font-medium">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-dark-900/60 backdrop-blur-sm rounded-2xl p-8 border border-dark-700">
              <h4 className="font-semibold text-white mb-6">AI Components Deployed</h4>
              <div className="space-y-3">
                {[
                  'Fine-tuned Arabic/English LLM',
                  'Document understanding pipeline',
                  'Knowledge retrieval system',
                  'Workflow automation agents',
                  'Human-in-the-loop validation'
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-4 bg-gradient-to-r from-dark-800/80 to-dark-800/40 rounded-xl p-4 border border-dark-700 hover:border-primary-500/40 transition-all">
                    <div className="relative">
                      <span className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-400 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-primary-500/20">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-400 rounded-full animate-pulse" />
                    </div>
                    <span className="text-neutral-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Industries */}
      <section className="relative py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-4">
              <span className="text-primary-400 text-sm font-medium">Industries We Serve</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solutions Across Verticals
            </h2>
            <p className="text-neutral-400">Click on any industry to see AI use cases</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {allIndustries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndustry(industry)}
                className="bg-dark-800/60 backdrop-blur-sm border border-dark-700 rounded-xl p-4 text-center hover:border-primary-500/50 hover:bg-dark-800 transition-all min-h-[80px] flex items-center justify-center"
              >
                <span className="text-neutral-300 font-medium text-sm">{industry}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedIndustry && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndustry(null)}
        >
          <div
            className="bg-dark-800 border border-dark-700 rounded-2xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIndustry(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-500 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{selectedIndustry}</h3>
            <p className="text-neutral-400 text-sm mb-6">{industryUseCases[selectedIndustry]?.description}</p>

            <div className="space-y-3 mb-6">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">AI Use Cases</p>
              {industryUseCases[selectedIndustry]?.useCases.map((useCase, i) => (
                <div key={i} className="flex items-center gap-4 bg-gradient-to-r from-dark-900/80 to-dark-800/60 p-4 rounded-xl border border-dark-700 hover:border-primary-500/30 transition-all">
                  <span className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-md">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-neutral-200 text-sm font-medium">{useCase}</span>
                </div>
              ))}
            </div>

            <Link
              href="/build-scale-ai"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
            >
              Discuss {selectedIndustry} Solutions
            </Link>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build production AI?
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Talk to our AI delivery team about your requirements
          </p>
          <Link
            href="/build-scale-ai"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
          >
            Start Building
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
