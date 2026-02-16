import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'AI Systems & Solutions | FSIT AI',
  description: 'Providing augmented intelligence capacity and managed AI services, from prototype to production-grade AI embedded into existing systems.',
};

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
    {
      vertical: 'Energy & Utilities',
      models: [
        { name: 'Grid Optimization AI', desc: 'Load balancing and energy distribution optimization' },
        { name: 'Asset Monitoring', desc: 'Predictive analytics for infrastructure maintenance' },
        { name: 'Sustainability Analytics', desc: 'Carbon footprint tracking and ESG reporting automation' },
      ],
      outcomes: ['Energy efficiency gains', 'Predictive insights', 'ESG compliance'],
    },
    {
      vertical: 'Retail & E-Commerce',
      models: [
        { name: 'Personalization Engine', desc: 'Product recommendations and customer journey optimization' },
        { name: 'Demand Forecasting', desc: 'Sales prediction and inventory planning models' },
        { name: 'Customer Service AI', desc: 'Conversational AI for support and sales assistance' },
      ],
      outcomes: ['Increased conversion', 'Reduced inventory costs', '24/7 customer support'],
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

  const allIndustries = [
    'Government & Public Sector', 'Consulting Firms & System Integrators', 'Healthcare',
    'Banking & Financial Services', 'Manufacturing', 'Logistics & Supply Chain',
    'Real Estate', 'Retail', 'Automotive', 'Energy', 'Travel & Hospitality',
    'Education', 'Agriculture', 'Entertainment & Media', 'Sports & Sports Technology',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-dark bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        <NetworkBackground nodeCount={60} />
        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-6">Our Services</p>
            <h1 className="hero-title text-white">
              AI Systems &<br />
              <span className="text-primary-500">Solutions</span>
            </h1>
            <p className="hero-subtitle">
              From general-purpose LLMs to industry-specific AI models — we build, deploy, and operate production-grade AI systems tailored to your vertical.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Core Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Core AI Services</h2>
            <p className="section-subtitle mx-auto">
              End-to-end AI delivery from strategy to production operations
            </p>
          </div>

          <div className="space-y-6">
            {coreServices.map((service, index) => (
              <div key={index} className="feature-box group">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-400">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark-900 mb-3">{service.title}</h3>
                    <p className="text-dark-500 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-neutral-150 text-dark-600 px-3 py-1 rounded-full">
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

      {/* General Models Section */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Foundation AI</p>
            <h2 className="section-title">General-Purpose AI Models</h2>
            <p className="section-subtitle mx-auto">
              Leverage state-of-the-art foundation models for broad enterprise applications
            </p>
          </div>

          <div className="grid-3">
            {generalModels.map((model, index) => (
              <div key={index} className="card card-hover">
                <h3 className="text-lg font-semibold text-dark-900 mb-2">{model.name}</h3>
                <p className="text-dark-500 text-sm mb-4">{model.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-dark-700 mb-2">Use Cases:</p>
                  <div className="flex flex-wrap gap-1">
                    {model.useCases.map((uc, i) => (
                      <span key={i} className="text-xs bg-primary-500/10 text-primary-600 px-2 py-1 rounded">
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-dark-700 mb-2">Platforms:</p>
                  <p className="text-xs text-dark-500">{model.platforms.join(' • ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeted Models for Verticals */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label !text-primary-500">Industry-Specific AI</p>
            <h2 className="section-title !text-white">Targeted Models for Verticals</h2>
            <p className="section-subtitle mx-auto !text-dark-300">
              Fine-tuned and purpose-built AI models designed for specific industry requirements, compliance needs, and domain expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {targetedModels.map((vertical, index) => (
              <div key={index} className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
                <h3 className="text-xl font-semibold text-white mb-4">{vertical.vertical}</h3>

                <div className="space-y-3 mb-4">
                  {vertical.models.map((model, i) => (
                    <div key={i} className="bg-dark-900/50 rounded-lg p-3">
                      <p className="text-primary-400 font-medium text-sm">{model.name}</p>
                      <p className="text-dark-400 text-xs">{model.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700">
                  {vertical.outcomes.map((outcome, i) => (
                    <span key={i} className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded">
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-dark-400 mb-4">Need AI solutions for a different vertical?</p>
            <Link href="/contact" className="btn-primary">
              Discuss your requirements
            </Link>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Technical Capabilities</p>
            <h2 className="section-title">AI & ML Capabilities</h2>
            <p className="section-subtitle mx-auto">
              Deep expertise across the full spectrum of AI and machine learning technologies
            </p>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            {capabilities.map((cap, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-dark-900 mb-4">{cap.category}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark-600">
                      <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-20 bg-primary-500">
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
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Case Study</p>
              <h2 className="section-title">AI Operations Copilot</h2>
              <p className="text-dark-500 mb-6">
                Secure, Vision 2030–aligned AI that automates workflows, unlocks institutional knowledge, and accelerates decision-making for a Saudi Government Entity.
              </p>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="stat-number">-45%</span>
                <span className="text-dark-500">manual processing time</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="tag">Custom LLM</span>
                <span className="tag">Arabic NLP</span>
                <span className="tag">RAG System</span>
                <span className="tag">On-premise</span>
              </div>
            </div>
            <div className="card-dark">
              <h4 className="font-semibold text-white mb-4">AI Components Deployed</h4>
              <div className="space-y-3">
                {[
                  'Fine-tuned Arabic/English LLM',
                  'Document understanding pipeline',
                  'Knowledge retrieval system',
                  'Workflow automation agents',
                  'Human-in-the-loop validation'
                ].map((item, i) => (
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

      {/* All Industries */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Industries We Serve</p>
            <h2 className="section-title">Solutions Across Verticals</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {allIndustries.map((industry, index) => (
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
            Whether you need general-purpose LLMs or industry-specific AI models, our team delivers production-ready systems.
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
