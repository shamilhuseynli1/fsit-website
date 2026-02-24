'use client';

import { useState } from 'react';
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

const categories = ['All', 'Financial Services', 'Healthcare', 'Retail', 'Manufacturing', 'Technology'];

const caseStudies = [
  {
    id: 'fraud-detection-fintech',
    title: 'Real-Time Fraud Detection for Major Fintech',
    category: 'Financial Services',
    client: 'Leading Digital Bank',
    challenge: 'Processing 10M+ daily transactions with legacy rule-based fraud detection missing 40% of sophisticated attacks.',
    solution: 'Deployed ML-based anomaly detection with real-time scoring, reducing false positives by 60% while catching 99.2% of fraud.',
    results: [
      { metric: '99.2%', label: 'Fraud detection rate' },
      { metric: '60%', label: 'Reduction in false positives' },
      { metric: '$12M', label: 'Annual savings' },
      { metric: '3 weeks', label: 'Time to production' },
    ],
    tags: ['Machine Learning', 'Real-time Processing', 'Fraud Detection'],
    featured: true,
  },
  {
    id: 'medical-imaging-ai',
    title: 'AI-Powered Medical Image Analysis',
    category: 'Healthcare',
    client: 'Regional Hospital Network',
    challenge: 'Radiologists overwhelmed with 500+ scans daily, leading to 48-hour turnaround and missed early-stage findings.',
    solution: 'Implemented AI pre-screening for chest X-rays and CT scans, prioritizing urgent cases and flagging potential issues.',
    results: [
      { metric: '98.5%', label: 'Diagnostic accuracy' },
      { metric: '4 hours', label: 'Average turnaround (from 48)' },
      { metric: '23%', label: 'More early-stage detections' },
      { metric: '6 weeks', label: 'Full deployment' },
    ],
    tags: ['Computer Vision', 'Healthcare AI', 'HIPAA Compliant'],
    featured: true,
  },
  {
    id: 'retail-personalization',
    title: 'Hyper-Personalized Shopping Experience',
    category: 'Retail',
    client: 'E-commerce Platform (5M+ users)',
    challenge: 'Generic product recommendations leading to 2.3% conversion rate and high cart abandonment.',
    solution: 'Built real-time personalization engine using collaborative filtering and contextual bandits for dynamic recommendations.',
    results: [
      { metric: '47%', label: 'Increase in conversion' },
      { metric: '32%', label: 'Higher average order value' },
      { metric: '25%', label: 'Reduction in cart abandonment' },
      { metric: '4 weeks', label: 'MVP deployment' },
    ],
    tags: ['Recommendation Engine', 'Real-time ML', 'A/B Testing'],
    featured: false,
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance for Manufacturing',
    category: 'Manufacturing',
    client: 'Global Automotive Supplier',
    challenge: 'Unplanned equipment downtime costing $2M/month with reactive maintenance approach.',
    solution: 'Deployed IoT sensor analytics with ML models predicting failures 2-3 weeks in advance.',
    results: [
      { metric: '85%', label: 'Reduction in unplanned downtime' },
      { metric: '$18M', label: 'Annual cost savings' },
      { metric: '95%', label: 'Prediction accuracy' },
      { metric: '8 weeks', label: 'Full rollout' },
    ],
    tags: ['IoT Analytics', 'Predictive Maintenance', 'Time Series'],
    featured: false,
  },
  {
    id: 'document-processing',
    title: 'Intelligent Document Processing Pipeline',
    category: 'Financial Services',
    client: 'Insurance Company',
    challenge: 'Manual processing of 50,000+ claims documents monthly with 15% error rate and 5-day processing time.',
    solution: 'Built end-to-end IDP system with OCR, NLP extraction, and automated validation against policy rules.',
    results: [
      { metric: '98%', label: 'Extraction accuracy' },
      { metric: '4 hours', label: 'Processing time (from 5 days)' },
      { metric: '70%', label: 'Cost reduction' },
      { metric: '5 weeks', label: 'Production deployment' },
    ],
    tags: ['Document AI', 'NLP', 'Process Automation'],
    featured: false,
  },
  {
    id: 'customer-service-ai',
    title: 'AI Customer Service Transformation',
    category: 'Technology',
    client: 'SaaS Platform (100K+ users)',
    challenge: 'Support team handling 10,000+ tickets/month, 24-hour average response time, declining CSAT scores.',
    solution: 'Deployed conversational AI handling 70% of inquiries, with smart routing for complex issues.',
    results: [
      { metric: '70%', label: 'Tickets auto-resolved' },
      { metric: '2 min', label: 'Average response time' },
      { metric: '94%', label: 'Customer satisfaction' },
      { metric: '3 weeks', label: 'Initial deployment' },
    ],
    tags: ['Conversational AI', 'NLP', 'Customer Experience'],
    featured: true,
  },
  {
    id: 'supply-chain-optimization',
    title: 'AI-Driven Supply Chain Optimization',
    category: 'Retail',
    client: 'National Retail Chain',
    challenge: 'Inventory imbalances causing $50M annually in stockouts and overstock write-offs.',
    solution: 'Implemented demand forecasting with dynamic inventory allocation across 500+ locations.',
    results: [
      { metric: '35%', label: 'Reduction in stockouts' },
      { metric: '40%', label: 'Less overstock' },
      { metric: '$22M', label: 'Annual savings' },
      { metric: '10 weeks', label: 'Full deployment' },
    ],
    tags: ['Demand Forecasting', 'Supply Chain', 'Optimization'],
    featured: false,
  },
  {
    id: 'code-review-automation',
    title: 'Automated Code Review & Security Scanning',
    category: 'Technology',
    client: 'Enterprise Software Company',
    challenge: 'Code review bottleneck slowing releases, security vulnerabilities discovered late in cycle.',
    solution: 'Built AI-powered code review system detecting bugs, security issues, and style violations at PR time.',
    results: [
      { metric: '60%', label: 'Faster code reviews' },
      { metric: '85%', label: 'Security issues caught pre-merge' },
      { metric: '3x', label: 'More frequent releases' },
      { metric: '4 weeks', label: 'Integration complete' },
    ],
    tags: ['DevOps AI', 'Security', 'Code Analysis'],
    featured: false,
  },
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory);

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Saudi Riyadh Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />
        <NetworkBackground />
        <div className="relative z-10 max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Real Results from{' '}
              <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Real Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              See how we've helped organizations across industries deploy AI that works in production. No experiments — measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-neutral-200" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '300+', label: 'Projects delivered' },
              { number: '98%', label: 'Success rate' },
              { number: '$500M+', label: 'Client value generated' },
              { number: '3 weeks', label: 'Average time to production' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: 'var(--green)' }}>{stat.number}</div>
                <div className="text-lg md:text-xl font-medium" style={{ color: 'var(--gray-700)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              Featured Success Stories
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Highlighted projects showcasing our impact across different industries and use cases.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {featuredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="p-8 h-[220px] flex flex-col justify-center" style={{ backgroundColor: '#15803d' }}>
                  <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-white text-base mb-4 w-fit">
                    {study.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-primary-100 text-base">{study.client}</p>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-dark-600 mb-6 text-base md:text-lg flex-1">{study.challenge}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-white rounded-xl">
                        <div className="text-2xl md:text-3xl font-bold text-primary-600">{result.metric}</div>
                        <div className="text-sm md:text-base text-dark-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              All Case Studies
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10" style={{ color: 'var(--gray-600)' }}>
              Filter by industry to find relevant examples for your business.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-base font-semibold transition-all ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-dark-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-base font-medium mb-3">
                      {study.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-dark-900">{study.title}</h3>
                    <p className="text-dark-500 text-base mt-1">{study.client}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-dark-800 mb-2 text-lg">Challenge:</h4>
                  <p className="text-dark-600 text-base md:text-lg">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-dark-800 mb-2 text-lg">Solution:</h4>
                  <p className="text-dark-600 text-base md:text-lg">{study.solution}</p>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center p-3 bg-neutral-50 rounded-xl">
                      <div className="text-xl md:text-2xl font-bold text-primary-600">{result.metric}</div>
                      <div className="text-sm text-dark-500">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-neutral-100 text-dark-600 text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            Let's discuss how we can deliver similar results for your organization. Our team is ready to share relevant case studies and proven approaches for your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/build-scale-ai" className="btn-primary text-lg px-8 py-4">
              Start Your Project
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
