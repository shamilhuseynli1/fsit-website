'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

const whitepapers = [
  {
    id: 'enterprise-ai-playbook',
    title: 'The Enterprise AI Playbook',
    subtitle: 'From Pilot to Production in 90 Days',
    description: 'A comprehensive guide to deploying AI systems that actually work. Covers strategy, team structure, technology selection, and governance.',
    pages: 45,
    topics: ['AI Strategy', 'MLOps', 'Governance'],
    featured: true,
  },
  {
    id: 'llm-security-guide',
    title: 'LLM Security & Compliance Guide',
    subtitle: 'For Regulated Industries',
    description: 'How to deploy large language models while meeting SOC2, HIPAA, GDPR, and industry-specific compliance requirements.',
    pages: 32,
    topics: ['Security', 'Compliance', 'LLMs'],
    featured: true,
  },
  {
    id: 'ai-roi-framework',
    title: 'Measuring AI ROI',
    subtitle: 'A Framework for Business Leaders',
    description: 'How to calculate and communicate the return on investment for AI initiatives. Includes templates and case studies.',
    pages: 28,
    topics: ['ROI', 'Business Case', 'Metrics'],
    featured: false,
  },
  {
    id: 'mlops-maturity-model',
    title: 'MLOps Maturity Model',
    subtitle: 'Assess and Improve Your AI Operations',
    description: 'A 5-level maturity model for evaluating and improving your machine learning operations capabilities.',
    pages: 36,
    topics: ['MLOps', 'Best Practices', 'Assessment'],
    featured: true,
  },
  {
    id: 'ai-talent-guide',
    title: 'Building AI Teams',
    subtitle: 'Hire, Train, or Augment?',
    description: 'A decision framework for building AI capabilities. Covers hiring strategies, training programs, and staff augmentation.',
    pages: 24,
    topics: ['Talent', 'Team Building', 'Strategy'],
    featured: false,
  },
  {
    id: 'industry-ai-benchmarks',
    title: '2026 Industry AI Benchmarks',
    subtitle: 'Performance Data Across Sectors',
    description: 'Benchmark data on AI adoption, success rates, and ROI across financial services, healthcare, retail, and manufacturing.',
    pages: 40,
    topics: ['Benchmarks', 'Industry Data', 'Trends'],
    featured: false,
  },
];

export default function WhitepapersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-dark-900 overflow-hidden">
        <NetworkBackground />
        <div className="relative z-10 max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-primary-400 text-sm font-medium">Whitepapers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Deep Dives on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                Enterprise AI
              </span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl">
              In-depth research and frameworks from our experience deploying AI across industries. Download free resources to accelerate your AI journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Whitepapers */}
      <section className="py-24 bg-white">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-900 mb-12">Featured Resources</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {whitepapers.filter(w => w.featured).map((paper) => (
              <div key={paper.id} className="bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-5xl mb-2">📄</div>
                    <div className="text-white font-bold">{paper.pages} pages</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-primary-600 text-sm mb-3">{paper.subtitle}</p>
                  <p className="text-dark-500 text-sm mb-4">{paper.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.topics.map((topic, idx) => (
                      <span key={idx} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Whitepapers */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-900 mb-12">All Resources</h2>

          <div className="space-y-6">
            {whitepapers.map((paper) => (
              <div key={paper.id} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl">📄</div>
                    <div className="text-primary-600 text-xs font-medium">{paper.pages} pg</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-dark-900 mb-1">{paper.title}</h3>
                  <p className="text-primary-600 text-sm mb-2">{paper.subtitle}</p>
                  <p className="text-dark-500 text-sm mb-3">{paper.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.topics.map((topic, idx) => (
                      <span key={idx} className="px-2 py-1 bg-neutral-100 text-dark-600 text-xs rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Custom Research?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            We offer custom research and advisory services for enterprises planning major AI initiatives. Get tailored insights for your industry and use case.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
