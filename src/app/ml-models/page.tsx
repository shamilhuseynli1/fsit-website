'use client';

import { useState } from 'react';
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

const categories = [
  {
    id: 'finance',
    name: 'Finance',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'ML solutions for financial services, banking, and investment management',
    problems: [
      {
        title: 'Fraud Detection & Prevention',
        description: 'Real-time transaction monitoring using ML models to detect anomalies, suspicious patterns, and potential fraud before it impacts the business.',
        impact: '99.2% detection accuracy',
      },
      {
        title: 'Credit Risk Assessment',
        description: 'Predictive models that analyze creditworthiness using alternative data sources, improving lending decisions while reducing default rates.',
        impact: '35% fewer defaults',
      },
      {
        title: 'Algorithmic Trading',
        description: 'ML-powered trading strategies that analyze market patterns, sentiment, and macroeconomic indicators to optimize portfolio performance.',
        impact: '23% higher returns',
      },
      {
        title: 'Regulatory Compliance (AML/KYC)',
        description: 'Automated compliance monitoring with intelligent document processing for KYC and transaction screening for AML requirements.',
        impact: '70% faster processing',
      },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    description: 'Optimize supply chain operations with intelligent automation',
    problems: [
      {
        title: 'Route Optimization',
        description: 'Dynamic routing algorithms that consider real-time traffic, weather, and delivery constraints to minimize costs and maximize efficiency.',
        impact: '18% fuel savings',
      },
      {
        title: 'Demand Forecasting',
        description: 'Predictive models that analyze historical data, seasonality, and market trends to accurately forecast inventory requirements.',
        impact: '30% better accuracy',
      },
      {
        title: 'Warehouse Automation',
        description: 'Intelligent picking, packing, and inventory management systems that optimize warehouse operations and reduce manual errors.',
        impact: '40% faster fulfillment',
      },
      {
        title: 'Fleet Management',
        description: 'Predictive maintenance and utilization optimization for vehicle fleets, reducing downtime and extending asset lifespan.',
        impact: '25% less downtime',
      },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Transform business operations with AI-driven insights and automation',
    problems: [
      {
        title: 'Customer Churn Prediction',
        description: 'ML models that identify at-risk customers before they leave, enabling proactive retention strategies and personalized engagement.',
        impact: '45% churn reduction',
      },
      {
        title: 'Sales Forecasting',
        description: 'Accurate revenue predictions using historical data, market signals, and pipeline analysis to improve planning and resource allocation.',
        impact: '92% forecast accuracy',
      },
      {
        title: 'Process Automation (RPA+AI)',
        description: 'Intelligent automation that combines RPA with ML to handle complex business processes requiring judgment and decision-making.',
        impact: '60% cost reduction',
      },
      {
        title: 'Customer Segmentation',
        description: 'Advanced clustering and classification models that identify high-value customer segments for targeted marketing and personalization.',
        impact: '35% higher conversion',
      },
    ],
  },
  {
    id: 'management',
    name: 'Management',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: 'Enhance leadership decision-making with data-driven intelligence',
    problems: [
      {
        title: 'Workforce Planning',
        description: 'Predictive models for talent acquisition, capacity planning, and skills gap analysis to optimize human resource allocation.',
        impact: '28% better retention',
      },
      {
        title: 'Performance Analytics',
        description: 'ML-powered performance measurement systems that identify top performers, predict outcomes, and recommend development paths.',
        impact: '40% productivity gain',
      },
      {
        title: 'Resource Allocation',
        description: 'Optimization algorithms that balance workloads, project assignments, and budget allocation across teams and initiatives.',
        impact: '25% efficiency increase',
      },
      {
        title: 'Risk Management',
        description: 'Enterprise risk assessment models that identify, quantify, and prioritize operational, financial, and strategic risks.',
        impact: '50% faster response',
      },
    ],
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: 'AI-powered tools for strategic advisory and client delivery',
    problems: [
      {
        title: 'Market Intelligence',
        description: 'Automated market research and competitive analysis using NLP to process vast amounts of unstructured data from multiple sources.',
        impact: '80% faster insights',
      },
      {
        title: 'Due Diligence Automation',
        description: 'ML-powered document analysis for M&A due diligence, contract review, and compliance verification at unprecedented speed.',
        impact: '65% time savings',
      },
      {
        title: 'Strategy Recommendations',
        description: 'Data-driven strategic recommendations powered by ML models that analyze industry trends, benchmarks, and success patterns.',
        impact: '3x faster delivery',
      },
      {
        title: 'Client Analytics',
        description: 'Predictive models for client health scoring, opportunity identification, and relationship management optimization.',
        impact: '42% revenue growth',
      },
    ],
  },
  {
    id: 'data-governance',
    name: 'Data Governance',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: 'Ensure data quality, security, and compliance with intelligent systems',
    problems: [
      {
        title: 'Data Quality Management',
        description: 'ML models that automatically detect data anomalies, inconsistencies, and quality issues across enterprise data assets.',
        impact: '95% data accuracy',
      },
      {
        title: 'Privacy & Compliance',
        description: 'Automated PII detection, data classification, and compliance monitoring for GDPR, CCPA, and industry regulations.',
        impact: '100% compliance',
      },
      {
        title: 'Master Data Management',
        description: 'Intelligent entity resolution and data matching algorithms that create unified, trusted views of critical business entities.',
        impact: '60% deduplication',
      },
      {
        title: 'Data Lineage & Cataloging',
        description: 'Automated metadata discovery and lineage tracking that maps data flows and dependencies across the enterprise.',
        impact: '70% faster audits',
      },
    ],
  },
];

export default function MLModelsPage() {
  const [activeCategory, setActiveCategory] = useState('finance');
  const activeData = categories.find(c => c.id === activeCategory);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-dark-900 overflow-hidden">
        {/* Saudi Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <NetworkBackground />
        <div className="relative z-10 max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-primary-400 text-sm font-medium">ML Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              General ML Models
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl">
              Enterprise-grade machine learning solutions solving real business problems across industries. Each category addresses the top challenges with proven AI implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Category Selector */}
      <section className="bg-dark-800 border-b border-dark-700 sticky top-0 z-20">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-700 text-neutral-300 hover:bg-dark-600 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Category Content */}
      {activeData && (
        <section className="py-20 bg-white">
          <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-6">
                {activeData.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {activeData.name} ML Solutions
              </h2>
              <p className="text-xl text-dark-500 max-w-2xl mx-auto">
                {activeData.description}
              </p>
            </div>

            {/* Problems Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {activeData.problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-neutral-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-900 mb-2">{problem.title}</h3>
                      <p className="text-dark-600">{problem.description}</p>
                    </div>
                  </div>
                  <div className="ml-14 mt-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm">
                      Impact: {problem.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Categories Overview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              All Categories
            </h2>
            <p className="text-xl text-dark-500 max-w-2xl mx-auto">
              Explore ML solutions across all business domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`text-left p-6 rounded-2xl border-2 transition-all ${
                  activeCategory === category.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 bg-white hover:border-primary-300'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-primary-100 text-primary-600'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-2">{category.name}</h3>
                <p className="text-dark-500 text-sm mb-3">{category.description}</p>
                <div className="text-primary-600 font-medium text-sm">
                  {category.problems.length} solutions →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        {/* Saudi Background */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1733757361453-5f493624a734?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement ML Solutions?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Our team of ML engineers can help you deploy production-ready models tailored to your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/case-studies" className="btn-secondary border-white/20 text-white hover:bg-white/10">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
