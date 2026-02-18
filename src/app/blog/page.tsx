'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

const blogPosts = [
  {
    id: 'ai-production-success',
    title: 'Why 59% of AI Projects Fail (And How to Be in the 41%)',
    excerpt: 'Most AI initiatives never make it to production. We analyze the common pitfalls and share what separates successful deployments from expensive experiments.',
    category: 'AI Strategy',
    date: 'Feb 15, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'llm-enterprise-guide',
    title: 'The Enterprise Guide to LLM Deployment',
    excerpt: 'From model selection to infrastructure to governance - everything you need to know about deploying large language models in production.',
    category: 'Technical',
    date: 'Feb 10, 2026',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'ai-staff-augmentation',
    title: 'AI Staff Augmentation: Build vs Buy vs Augment',
    excerpt: 'When should you hire full-time AI talent, outsource to consultancies, or use staff augmentation? A decision framework.',
    category: 'AI Strategy',
    date: 'Feb 5, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 'mlops-best-practices',
    title: 'MLOps Best Practices for 2026',
    excerpt: 'The tooling and processes that separate hobby projects from production-grade ML systems.',
    category: 'Technical',
    date: 'Jan 28, 2026',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'ai-healthcare-compliance',
    title: 'AI in Healthcare: Navigating HIPAA Compliance',
    excerpt: 'How to build AI systems that meet healthcare regulatory requirements without sacrificing capability.',
    category: 'Industry',
    date: 'Jan 20, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 'rag-vs-fine-tuning',
    title: 'RAG vs Fine-Tuning: When to Use Each',
    excerpt: 'A practical guide to choosing between retrieval-augmented generation and model fine-tuning for your use case.',
    category: 'Technical',
    date: 'Jan 15, 2026',
    readTime: '9 min read',
    featured: true,
  },
];

const categories = ['All', 'AI Strategy', 'Technical', 'Industry', 'Case Studies'];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-dark-900 overflow-hidden">
        <NetworkBackground />
        <div className="relative z-10 max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-primary-400 text-sm font-medium">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Insights on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                Production AI
              </span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl">
              Practical insights from deploying AI systems that actually work. No hype, no theory — just lessons from 300+ production deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-900 mb-12">Featured Articles</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.featured).map((post) => (
              <article key={post.id} className="bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <span className="text-6xl opacity-50">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-dark-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-dark-500 text-sm mb-4">{post.excerpt}</p>
                  <div className="text-dark-400 text-sm">{post.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <h2 className="text-3xl font-bold text-dark-900">All Articles</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    cat === 'All'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-dark-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-dark-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-dark-500 mb-4">{post.excerpt}</p>
                <div className="text-dark-400 text-sm">{post.date}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated on Production AI
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Get practical AI insights delivered to your inbox. No spam, no fluff — just actionable content from practitioners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
