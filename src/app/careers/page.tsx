'use client';

import { useState } from 'react';
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

const departments = ['All', 'Engineering', 'AI/ML', 'Product', 'Operations', 'Sales'];

const openPositions = [
  {
    id: 'senior-ml-engineer',
    title: 'Senior Machine Learning Engineer',
    department: 'AI/ML',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    description: 'Build and deploy production ML systems for enterprise clients. Work on challenging problems across industries.',
    requirements: ['5+ years ML experience', 'Python, PyTorch/TensorFlow', 'Production ML systems', 'Strong communication skills'],
  },
  {
    id: 'ai-solutions-architect',
    title: 'AI Solutions Architect',
    department: 'AI/ML',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Design end-to-end AI solutions for enterprise clients. Bridge the gap between business needs and technical implementation.',
    requirements: ['7+ years in software architecture', '3+ years AI/ML experience', 'Client-facing experience', 'Cloud platforms (AWS/GCP/Azure)'],
  },
  {
    id: 'fullstack-engineer',
    title: 'Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    description: 'Build AI-powered applications and internal tools. Work with modern tech stack including React, Node.js, and Python.',
    requirements: ['4+ years full-stack experience', 'React/Next.js, Node.js', 'API design & databases', 'Experience with AI integration'],
  },
  {
    id: 'devops-engineer',
    title: 'DevOps/MLOps Engineer',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build and maintain ML infrastructure. Deploy models at scale with monitoring and observability.',
    requirements: ['4+ years DevOps experience', 'Kubernetes, Docker', 'CI/CD pipelines', 'ML deployment experience preferred'],
  },
  {
    id: 'product-manager',
    title: 'Product Manager - AI Platform',
    department: 'Product',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Drive product strategy for our internal AI platform. Work closely with engineering and clients to prioritize features.',
    requirements: ['5+ years product management', 'Technical background', 'B2B/Enterprise experience', 'AI/ML familiarity'],
  },
  {
    id: 'client-success-manager',
    title: 'Client Success Manager',
    department: 'Operations',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    description: 'Ensure client success from onboarding to ongoing partnership. Be the voice of the customer internally.',
    requirements: ['3+ years in client success', 'Technical aptitude', 'Strong communication', 'Experience with enterprise clients'],
  },
  {
    id: 'enterprise-sales',
    title: 'Enterprise Account Executive',
    department: 'Sales',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Drive new business with enterprise clients. Consultative selling of AI solutions to C-level executives.',
    requirements: ['5+ years enterprise sales', 'Technical services/SaaS experience', 'Proven track record', 'AI/ML knowledge preferred'],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    department: 'AI/ML',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Work on diverse client projects - from NLP to computer vision to time series. Turn data into actionable insights.',
    requirements: ['3+ years data science', 'Python, SQL', 'Statistical modeling', 'Communication skills'],
  },
];

const benefits = [
  { icon: '🌍', title: 'Remote-First', desc: 'Work from anywhere. We hire globally and embrace async communication.' },
  { icon: '💰', title: 'Competitive Compensation', desc: 'Top-of-market salaries, equity, and performance bonuses.' },
  { icon: '📚', title: 'Learning Budget', desc: '$5,000 annual budget for courses, conferences, and certifications.' },
  { icon: '🏥', title: 'Health & Wellness', desc: 'Comprehensive health insurance and wellness stipend.' },
  { icon: '🏖️', title: 'Unlimited PTO', desc: 'Take the time you need. We trust you to manage your schedule.' },
  { icon: '💻', title: 'Equipment', desc: 'Top-spec MacBook, monitor, and home office budget.' },
];

const values = [
  { title: 'Ship to Production', desc: "We don't build demos. Every project ends with real systems running in production." },
  { title: 'Ownership', desc: "Take ownership of problems end-to-end. We hire people who don't need to be managed." },
  { title: 'Client Impact', desc: 'Our success is measured by client outcomes, not hours worked.' },
  { title: 'Continuous Learning', desc: 'AI moves fast. We invest in staying ahead through constant learning.' },
];

export default function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState('All');

  const filteredPositions = activeDepartment === 'All'
    ? openPositions
    : openPositions.filter(position => position.department === activeDepartment);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[auto] md:min-h-[85vh] flex items-center overflow-hidden">
        {/* Saudi Riyadh Skyline Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1694018359679-49465b4c0d61?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-cream-50/50" />
        <NetworkBackground />
        <div className="relative z-10 container-max pt-36 pb-4 md:py-36">
          <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-4 md:mb-6">
              Build AI That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-500">
                Actually Works
              </span>
            </h1>
            <p className="text-lg md:text-xl text-dark-500 leading-relaxed max-w-3xl">
              Join a team of elite AI engineers and specialists deploying production AI systems for the world's most ambitious companies. We're remote-first, impact-driven, and always learning.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-neutral-200" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Team members globally' },
              { number: '25+', label: 'Countries represented' },
              { number: '98%', label: 'Project success rate' },
              { number: '4.8/5', label: 'Glassdoor rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-dark-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              What We Value
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto">
              Our culture is built around these core principles. If they resonate with you, you'll thrive here.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                
                <h3 className="text-xl font-bold text-dark-900 mb-2">{value.title}</h3>
                <p className="text-dark-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto">
              We take care of our team so they can focus on building amazing things.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-dark-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto mb-8">
              Find your next role. All positions are remote-first.
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeDepartment === dept
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-dark-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredPositions.map((position) => (
              <div
                key={position.id}
                className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                        {position.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500 mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                    <p className="text-dark-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white text-dark-600 text-xs rounded-full border border-neutral-200">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:flex-shrink-0">
                    <Link
                      href={`/careers/${position.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
                    >
                      Apply Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-500">No open positions in this department at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Don't See Your Role */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-dark-600 mb-8">
              We're always looking for exceptional talent. If you're passionate about AI and believe you can contribute to our mission, we'd love to hear from you.
            </p>
            <Link href="/contact" className="btn-primary">
              Send Us Your Resume
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
            Ready to Build the Future of AI?
          </h2>
          <p className="text-xl text-dark-500 mb-8 max-w-2xl mx-auto">
            Join a team that's deploying real AI systems for real businesses. Work on challenging problems, learn constantly, and make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#positions" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#positions')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Open Positions
            </a>
            <Link href="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
