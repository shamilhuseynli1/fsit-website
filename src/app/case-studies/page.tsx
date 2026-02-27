'use client';

import { useState } from 'react';
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

const categories = ['All', 'Financial Services', 'Healthcare', 'Government', 'Tourism & Hospitality', 'Retail', 'Energy', 'Technology'];

const caseStudies = [
  {
    id: 'saudi-bank-fraud',
    title: 'Real-Time Fraud Detection for Saudi Digital Bank',
    category: 'Financial Services',
    client: 'Leading Saudi Digital Bank',
    challenge: 'Processing 10M+ daily transactions with legacy rule-based fraud detection missing 40% of sophisticated attacks in the growing Saudi fintech market.',
    solution: 'Deployed ML-based anomaly detection with real-time scoring compliant with SAMA regulations, reducing false positives by 60% while catching 99.2% of fraud.',
    results: [
      { metric: '99.2%', label: 'Fraud detection rate' },
      { metric: '60%', label: 'Reduction in false positives' },
      { metric: 'SAR 45M', label: 'Annual savings' },
      { metric: '3 weeks', label: 'Time to production' },
    ],
    tags: ['Machine Learning', 'SAMA Compliant', 'Fraud Detection'],
    featured: true,
  },
  {
    id: 'moh-medical-imaging',
    title: 'AI-Powered Medical Imaging for Ministry of Health',
    category: 'Healthcare',
    client: 'Ministry of Health - Riyadh Region',
    challenge: 'Radiologists across 12 hospitals overwhelmed with 500+ scans daily, leading to 48-hour turnaround and missed early-stage findings.',
    solution: 'Implemented AI pre-screening for chest X-rays and CT scans across the network, prioritizing urgent cases and flagging potential issues aligned with Vision 2030 healthcare goals.',
    results: [
      { metric: '98.5%', label: 'Diagnostic accuracy' },
      { metric: '4 hours', label: 'Average turnaround (from 48)' },
      { metric: '23%', label: 'More early-stage detections' },
      { metric: '6 weeks', label: 'Full deployment' },
    ],
    tags: ['Computer Vision', 'Healthcare AI', 'Vision 2030'],
    featured: true,
  },
  {
    id: 'red-sea-tourism',
    title: 'AI Guest Experience Platform for Red Sea Global',
    category: 'Tourism & Hospitality',
    client: 'Red Sea Global Resort',
    challenge: 'Creating personalized luxury experiences for international guests while managing sustainable tourism practices across 50+ islands.',
    solution: 'Built AI-powered guest personalization system with predictive preferences, multilingual concierge AI, and sustainability monitoring aligned with Vision 2030 tourism goals.',
    results: [
      { metric: '94%', label: 'Guest satisfaction score' },
      { metric: '45%', label: 'Increase in ancillary revenue' },
      { metric: '30%', label: 'Reduction in energy usage' },
      { metric: '5 weeks', label: 'Initial deployment' },
    ],
    tags: ['Personalization AI', 'Sustainability', 'Vision 2030'],
    featured: true,
  },
  {
    id: 'neom-smart-city',
    title: 'Intelligent City Operations for NEOM',
    category: 'Government',
    client: 'NEOM - The Line',
    challenge: 'Managing real-time city operations, traffic flow, and citizen services for a new cognitive city with zero emissions targets.',
    solution: 'Deployed integrated AI operations platform with predictive maintenance, traffic optimization, and automated citizen service routing.',
    results: [
      { metric: '40%', label: 'Faster service resolution' },
      { metric: '99.9%', label: 'System uptime' },
      { metric: '35%', label: 'Energy optimization' },
      { metric: '8 weeks', label: 'Phase 1 complete' },
    ],
    tags: ['Smart City', 'IoT Analytics', 'Sustainability'],
    featured: false,
  },
  {
    id: 'aramco-predictive',
    title: 'Predictive Maintenance for Saudi Aramco Facilities',
    category: 'Energy',
    client: 'Saudi Aramco',
    challenge: 'Unplanned equipment downtime at processing facilities costing SAR 8M/month with reactive maintenance approach.',
    solution: 'Deployed IoT sensor analytics with ML models predicting failures 2-3 weeks in advance across critical infrastructure.',
    results: [
      { metric: '85%', label: 'Reduction in unplanned downtime' },
      { metric: 'SAR 68M', label: 'Annual cost savings' },
      { metric: '95%', label: 'Prediction accuracy' },
      { metric: '8 weeks', label: 'Full rollout' },
    ],
    tags: ['IoT Analytics', 'Predictive Maintenance', 'Energy'],
    featured: false,
  },
  {
    id: 'gosi-document-processing',
    title: 'Intelligent Document Processing for GOSI',
    category: 'Government',
    client: 'General Organization for Social Insurance',
    challenge: 'Manual processing of 50,000+ pension and insurance claims monthly with 15% error rate and 5-day processing time.',
    solution: 'Built end-to-end IDP system with Arabic OCR, NLP extraction, and automated validation against GOSI policy rules.',
    results: [
      { metric: '98%', label: 'Extraction accuracy' },
      { metric: '4 hours', label: 'Processing time (from 5 days)' },
      { metric: '70%', label: 'Cost reduction' },
      { metric: '5 weeks', label: 'Production deployment' },
    ],
    tags: ['Document AI', 'Arabic NLP', 'Government'],
    featured: false,
  },
  {
    id: 'almarai-supply-chain',
    title: 'AI-Driven Supply Chain for Almarai',
    category: 'Retail',
    client: 'Almarai Company',
    challenge: 'Inventory imbalances across GCC distribution causing SAR 185M annually in stockouts and overstock write-offs.',
    solution: 'Implemented demand forecasting with dynamic inventory allocation across 500+ retail locations and cold chain optimization.',
    results: [
      { metric: '35%', label: 'Reduction in stockouts' },
      { metric: '40%', label: 'Less overstock' },
      { metric: 'SAR 82M', label: 'Annual savings' },
      { metric: '10 weeks', label: 'Full deployment' },
    ],
    tags: ['Demand Forecasting', 'Supply Chain', 'Cold Chain AI'],
    featured: false,
  },
  {
    id: 'diriyah-heritage-ai',
    title: 'AI Heritage Experience for Diriyah Gate',
    category: 'Tourism & Hospitality',
    client: 'Diriyah Gate Development Authority',
    challenge: 'Creating immersive cultural experiences while managing visitor flow at UNESCO World Heritage Site with 15M expected annual visitors.',
    solution: 'Deployed AI-powered visitor management, augmented reality heritage tours, and crowd flow optimization preserving the authentic experience.',
    results: [
      { metric: '60%', label: 'Better visitor flow' },
      { metric: '4.8/5', label: 'Visitor satisfaction' },
      { metric: '25%', label: 'Longer dwell time' },
      { metric: '6 weeks', label: 'Initial launch' },
    ],
    tags: ['AR/AI Experience', 'Heritage Tech', 'Vision 2030'],
    featured: false,
  },
  {
    id: 'stc-customer-ai',
    title: 'AI Customer Service for STC',
    category: 'Technology',
    client: 'Saudi Telecom Company',
    challenge: 'Support team handling 500,000+ tickets/month in Arabic and English, 24-hour average response time, declining CSAT scores.',
    solution: 'Deployed bilingual conversational AI handling 70% of inquiries, with smart routing for complex issues and sentiment analysis.',
    results: [
      { metric: '70%', label: 'Tickets auto-resolved' },
      { metric: '2 minutes', label: 'Average response time' },
      { metric: '94%', label: 'Customer satisfaction' },
      { metric: '3 weeks', label: 'Initial deployment' },
    ],
    tags: ['Conversational AI', 'Arabic NLP', 'Telecom'],
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
      <section className="relative min-h-[auto] md:min-h-[85vh] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/70 md:bg-black/60" />
        <NetworkBackground />
        <div className="relative z-10 container-max pt-36 pb-4 md:py-36">
          <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Real Results from{' '}
              <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Real Projects
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              See how we've helped organizations across industries deploy AI that works in production. No experiments — measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-neutral-200" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16">
            {[
              { number: '300+', label: 'Projects delivered' },
              { number: '98%', label: 'Success rate' },
              { number: 'SAR 1.8B+', label: 'Client value generated' },
              { number: '3 weeks', label: 'Average time to production' },
            ].map((stat, index) => (
              <div key={index} className="text-center px-2 md:px-4">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-3" style={{ color: 'var(--green)' }}>{stat.number}</div>
                <div className="text-xs md:text-base lg:text-lg font-medium" style={{ color: 'var(--gray-700)' }}>{stat.label}</div>
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
                      <div key={idx} className="text-center p-2 sm:p-4 bg-white rounded-xl">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600">{result.metric}</div>
                        <div className="text-xs sm:text-sm md:text-base text-dark-500">{result.label}</div>
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

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center p-2 sm:p-3 bg-neutral-50 rounded-xl">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary-600">{result.metric}</div>
                      <div className="text-xs sm:text-sm text-dark-500">{result.label}</div>
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
              Request a Pilot Roadmap
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Your AI Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
