'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export default function AIOperations() {
  const services = [
    {
      title: 'Model Deployment',
      description: 'Production-grade deployment of AI models with proper infrastructure, scaling, and reliability.',
      features: ['Container orchestration', 'Auto-scaling', 'Blue-green deployments', 'A/B testing infrastructure'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      title: 'Monitoring & Observability',
      description: 'Real-time monitoring of model performance, data drift, and system health to ensure reliable AI.',
      features: ['Performance metrics', 'Data drift detection', 'Alerting systems', 'Custom dashboards'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Data Pipeline Management',
      description: 'End-to-end data pipelines that feed your AI systems with clean, reliable, and timely data.',
      features: ['ETL automation', 'Data quality checks', 'Feature stores', 'Real-time streaming'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'Model Optimization',
      description: 'Continuous improvement of model performance through retraining, fine-tuning, and optimization.',
      features: ['Model retraining', 'Hyperparameter tuning', 'Performance optimization', 'Cost reduction'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const humanInLoop = [
    {
      title: 'Quality Assurance',
      description: 'Human reviewers validate AI outputs to ensure accuracy and catch edge cases',
      icon: '✓',
    },
    {
      title: 'Escalation Handling',
      description: 'Complex or high-stakes decisions are routed to human experts',
      icon: '↑',
    },
    {
      title: 'Training Data Curation',
      description: 'Humans label, annotate, and curate data to improve model performance',
      icon: '◉',
    },
    {
      title: 'Feedback Loops',
      description: 'Continuous feedback from human reviewers to refine AI behavior',
      icon: '⟲',
    },
  ];

  const trustSafety = [
    { title: 'Content Moderation', desc: 'Ensure AI outputs meet safety and compliance standards' },
    { title: 'Bias Detection', desc: 'Monitor for and mitigate bias in AI decisions' },
    { title: 'PII Protection', desc: 'Safeguard sensitive data throughout the AI pipeline' },
    { title: 'Audit Trails', desc: 'Complete logging of all AI decisions and actions' },
    { title: 'Compliance Monitoring', desc: 'Ensure adherence to industry regulations' },
    { title: 'Incident Response', desc: 'Rapid response to AI failures or safety issues' },
  ];

  const metrics = [
    { value: '99.9%', label: 'Uptime achieved' },
    { value: '98%', label: 'Accuracy with human QA' },
    { value: '24/7', label: 'Monitoring & support' },
    { value: '5x', label: 'Faster issue detection' },
  ];

  const platforms = [
    { name: 'AWS SageMaker', category: 'Cloud ML' },
    { name: 'Azure ML', category: 'Cloud ML' },
    { name: 'Google Vertex AI', category: 'Cloud ML' },
    { name: 'MLflow', category: 'MLOps' },
    { name: 'Kubeflow', category: 'MLOps' },
    { name: 'Weights & Biases', category: 'Experiment Tracking' },
    { name: 'Grafana', category: 'Monitoring' },
    { name: 'Prometheus', category: 'Monitoring' },
  ];

  const process = [
    {
      phase: 'Assess',
      title: 'Infrastructure Assessment',
      description: 'Evaluate your current AI infrastructure, identify gaps, and plan improvements',
    },
    {
      phase: 'Design',
      title: 'Architecture Design',
      description: 'Design scalable, reliable MLOps architecture tailored to your needs',
    },
    {
      phase: 'Implement',
      title: 'Implementation',
      description: 'Build and deploy monitoring, pipelines, and operational tooling',
    },
    {
      phase: 'Operate',
      title: 'Managed Operations',
      description: 'Ongoing management, monitoring, and optimization of your AI systems',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        {/* Saudi Night Cityscape Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-9cbkE8kNUBA?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <NetworkBackground nodeCount={60} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-4 md:!mb-6 animate-fade-in">AI Operations</p>
            <h1 className="hero-title text-white animate-fade-in-up text-3xl md:text-5xl lg:text-6xl">
              AI That Runs<br />
              <span className="text-primary-500 text-glow">In Production</span>
            </h1>
            <p className="hero-subtitle text-base md:text-lg lg:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              End-to-end AI operations — from deployment to monitoring to optimization. We ensure your AI systems remain accurate, compliant, and reliable in real-world production environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/contact" className="btn-primary text-center">
                Discuss your AI operations
              </Link>
              <Link href="/solutions" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900 text-center">
                View all solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 bg-primary-500">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{metric.value}</p>
                <p className="text-white/80 text-sm mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Core Services</p>
            <h2 className="section-title">AI Operations Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive MLOps and AI operations to keep your AI systems running reliably
            </p>
          </div>

          <div className="grid-2">
            {services.map((service, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-900 mb-2">{service.title}</h3>
                    <p className="text-dark-500 text-sm mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-neutral-150 text-dark-600 px-2 py-1 rounded">
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

      {/* Human in the Loop */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label !text-primary-500">Human-in-the-Loop</p>
              <h2 className="section-title !text-white">AI + Human Intelligence</h2>
              <p className="text-dark-300 mb-8">
                The most reliable AI systems combine automation with human oversight. Our human-in-the-loop services ensure your AI remains accurate, safe, and aligned with business objectives.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {humanInLoop.map((item, index) => (
                  <div key={index} className="bg-dark-800 rounded-xl p-4 border border-dark-700">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 text-xl mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-white mb-1 text-sm">{item.title}</h3>
                    <p className="text-dark-400 text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
              <h3 className="text-xl font-semibold text-white mb-6">Why Human-in-the-Loop?</h3>
              <ul className="space-y-4">
                {[
                  { stat: '99.5%', text: 'accuracy with human QA vs 94% without' },
                  { stat: '73%', text: 'of enterprises require human oversight for AI' },
                  { stat: '5x', text: 'faster issue detection with human monitoring' },
                  { stat: '0', text: 'high-stakes decisions made without review' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-primary-500 w-20">{item.stat}</span>
                    <span className="text-dark-300 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Trust & Safety</p>
            <h2 className="section-title">Safe, Compliant, Reliable</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive governance to ensure your AI systems meet the highest standards
            </p>
          </div>

          <div className="grid-3">
            {trustSafety.map((item, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-dark-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Tools */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Technology Stack</p>
            <h2 className="section-title">Platforms We Work With</h2>
            <p className="section-subtitle mx-auto">
              Deep expertise across leading MLOps and AI infrastructure platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-neutral-150 rounded-xl px-6 py-4 border border-neutral-200 hover:border-primary-500 transition-all">
                <p className="font-medium text-dark-900">{platform.name}</p>
                <p className="text-xs text-dark-500">{platform.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Our Process</p>
            <h2 className="section-title">From Assessment to Operations</h2>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-xs font-semibold text-primary-500 uppercase tracking-wide mb-1">{step.phase}</p>
                <h3 className="font-semibold text-dark-900 mb-2">{step.title}</h3>
                <p className="text-dark-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FSIT */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Why FSIT</p>
              <h2 className="section-title">Operations Expertise</h2>
              <p className="text-dark-500 mb-6">
                We don't just build AI — we run it. Our team has deep experience operating AI systems in production across regulated industries.
              </p>
              <ul className="space-y-4">
                {[
                  'Experience with enterprise-scale AI systems',
                  'Deep expertise in regulated industries (finance, healthcare, government)',
                  'Combined AI + human-in-the-loop capabilities',
                  'Proactive monitoring and issue prevention',
                  '24/7 support and rapid incident response',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-150 rounded-2xl p-8 border border-neutral-200">
              <h3 className="font-semibold text-dark-900 mb-6">What You Get</h3>
              <div className="space-y-4">
                {[
                  { title: 'Dedicated Operations Team', desc: 'Engineers focused on your AI systems' },
                  { title: 'Custom Dashboards', desc: 'Real-time visibility into AI performance' },
                  { title: 'SLA-Backed Reliability', desc: '99.9% uptime guaranteed' },
                  { title: 'Continuous Improvement', desc: 'Ongoing optimization and updates' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-neutral-200">
                    <h4 className="font-medium text-dark-900 mb-1">{item.title}</h4>
                    <p className="text-dark-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Operations Hub */}
      <section className="section-padding bg-neutral-100">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Regional Operations</p>
              <h2 className="section-title">AI Operations Hub in Saudi Arabia</h2>
              <p className="text-dark-500 mb-6">
                Our dedicated operations center in Riyadh provides 24/7 support for AI systems across the Kingdom, ensuring compliance with local regulations and Vision 2030 objectives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-dark-700">24/7 Saudi-based support team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-dark-700">Arabic & English support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-dark-700">SAMA & NCA compliant</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-PYOHfWTYkzA?auto=format&fit=crop&w=800&q=80"
                alt="Riyadh Saudi Arabia at sunset"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-9cbkE8kNUBA?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container-max text-center relative z-10">
          <h2 className="section-title !text-white mb-4">
            Ready to operationalize your AI?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Let's discuss how we can help you deploy, monitor, and scale your AI systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Talk to our operations team
            </Link>
            <Link href="/staff-augmentation" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
              Build your AI team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
