'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import AnimatedBackground from '@/components/AnimatedBackground';
import OperationsCardEnhanced from '@/components/OperationsCardEnhanced';
import HeroOperationsVisual from '@/components/HeroOperationsVisual';

interface OperationsSolution {
  title: string;
  description: string;
  inputLabel: string;
  inputIcon: React.ReactNode;
  outputLabel: string;
  outputIcon: React.ReactNode;
  platforms: string[];
  features: string[];
  metric: string;
  metricValue: string;
}

// Icons for operations flows
const OpsIcons = {
  model: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  cloud: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  ),
  deployed: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  metrics: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  alerts: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  data: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  pipeline: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  optimize: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  performance: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

const operationsSolutions: OperationsSolution[] = [
  {
    title: 'Model Deployment',
    description: 'Production-grade deployment of AI models with proper infrastructure, scaling, and reliability built-in.',
    inputLabel: 'AI Model',
    inputIcon: OpsIcons.model,
    outputLabel: 'Live API',
    outputIcon: OpsIcons.deployed,
    platforms: ['K8s', 'Docker', 'AWS'],
    features: ['Container orchestration', 'Auto-scaling', 'Blue-green deploys', 'A/B testing'],
    metric: 'Deployment Time',
    metricValue: '<5 min',
  },
  {
    title: 'Monitoring & Observability',
    description: 'Real-time monitoring of model performance, data drift, and system health to ensure reliable AI.',
    inputLabel: 'System Data',
    inputIcon: OpsIcons.metrics,
    outputLabel: 'Insights',
    outputIcon: OpsIcons.alerts,
    platforms: ['Grafana', 'Prometheus', 'W&B'],
    features: ['Performance metrics', 'Drift detection', 'Alerting', 'Dashboards'],
    metric: 'Issue Detection',
    metricValue: '5x faster',
  },
  {
    title: 'Data Pipeline Management',
    description: 'End-to-end data pipelines that feed your AI systems with clean, reliable, and timely data.',
    inputLabel: 'Raw Data',
    inputIcon: OpsIcons.data,
    outputLabel: 'Features',
    outputIcon: OpsIcons.pipeline,
    platforms: ['Airflow', 'Spark', 'Kafka'],
    features: ['ETL automation', 'Quality checks', 'Feature stores', 'Streaming'],
    metric: 'Data Freshness',
    metricValue: '<1 min',
  },
  {
    title: 'Model Optimization',
    description: 'Continuous improvement of model performance through retraining, fine-tuning, and optimization.',
    inputLabel: 'Baseline',
    inputIcon: OpsIcons.model,
    outputLabel: 'Optimized',
    outputIcon: OpsIcons.performance,
    platforms: ['MLflow', 'Ray', 'Optuna'],
    features: ['Retraining', 'Hyperparameter tuning', 'Pruning', 'Quantization'],
    metric: 'Cost Reduction',
    metricValue: '40%',
  },
];

const trustSafety = [
  { title: 'Content Moderation', desc: 'Ensure AI outputs meet safety and compliance standards', icon: '🛡️' },
  { title: 'Bias Detection', desc: 'Monitor for and mitigate bias in AI decisions', icon: '⚖️' },
  { title: 'PII Protection', desc: 'Safeguard sensitive data throughout the AI pipeline', icon: '🔒' },
  { title: 'Audit Trails', desc: 'Complete logging of all AI decisions and actions', icon: '📋' },
  { title: 'Compliance Monitoring', desc: 'Ensure adherence to industry regulations', icon: '✓' },
  { title: 'Incident Response', desc: 'Rapid response to AI failures or safety issues', icon: '🚨' },
];

const platforms = [
  { name: 'AWS SageMaker', category: 'Cloud ML', color: 'from-orange-500 to-gold-500' },
  { name: 'Azure ML', category: 'Cloud ML', color: 'from-primary-500 to-primary-400' },
  { name: 'Google Vertex AI', category: 'Cloud ML', color: 'from-red-500 to-yellow-500' },
  { name: 'MLflow', category: 'MLOps', color: 'from-primary-600 to-primary-400' },
  { name: 'Kubeflow', category: 'MLOps', color: 'from-primary-600 to-primary-500' },
  { name: 'Weights & Biases', category: 'Tracking', color: 'from-yellow-500 to-orange-500' },
  { name: 'Grafana', category: 'Monitoring', color: 'from-orange-600 to-yellow-500' },
  { name: 'Prometheus', category: 'Monitoring', color: 'from-red-600 to-orange-500' },
];

export default function AIOperations() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-dark-900 overflow-hidden">
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
              <pattern id="networkPatternOps" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#f59e0b" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#f59e0b" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#f59e0b" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#f59e0b" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#networkPatternOps)" />
          </svg>
        </div>

        {/* Animated particles */}
        <AnimatedBackground />

        <NetworkBackground nodeCount={50} maxDistance={120} />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
                <span className="text-gold-400 text-sm font-medium">AI Operations</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI That Runs<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-primary-400">
                  In Production
                </span>
              </h1>

              <p className="text-lg text-neutral-300 mb-8 leading-relaxed max-w-xl">
                End-to-end AI operations — from deployment to monitoring to optimization. We ensure your AI systems remain accurate, compliant, and reliable in real-world production environments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Discuss your AI operations
                </Link>
                <Link href="/solutions" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900 text-center">
                  View all solutions
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-12 grid grid-cols-4 gap-4">
                {[
                  { value: '99.9%', label: 'Uptime' },
                  { value: '98%', label: 'Accuracy' },
                  { value: '24/7', label: 'Support' },
                  { value: '5x', label: 'Faster' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-primary-400">
                      {stat.value}
                    </p>
                    <p className="text-xs text-neutral-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative mt-8 lg:mt-0">
              <HeroOperationsVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 border border-dark-700 rounded-full mb-6">
              <span className="text-neutral-400 text-sm">Core Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Operations Services
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Comprehensive MLOps and AI operations to keep your AI systems running reliably
            </p>
          </div>

          {/* Operations Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {operationsSolutions.map((ops, index) => (
              <OperationsCardEnhanced
                key={index}
                title={ops.title}
                description={ops.description}
                inputLabel={ops.inputLabel}
                inputIcon={ops.inputIcon}
                outputLabel={ops.outputLabel}
                outputIcon={ops.outputIcon}
                platforms={ops.platforms}
                features={ops.features}
                metric={ops.metric}
                metricValue={ops.metricValue}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Human in the Loop Section */}
      <section className="relative py-24 bg-dark-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent" />

        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700 border border-dark-600 rounded-full mb-6">
                <span className="text-neutral-400 text-sm">Human-in-the-Loop</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI + Human Intelligence
              </h2>
              <p className="text-neutral-300 mb-8">
                The most reliable AI systems combine automation with human oversight. Our human-in-the-loop services ensure your AI remains accurate, safe, and aligned with business objectives.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Quality Assurance', desc: 'Human reviewers validate AI outputs', icon: '✓' },
                  { title: 'Escalation Handling', desc: 'Complex decisions routed to experts', icon: '↑' },
                  { title: 'Training Data Curation', desc: 'Humans label and annotate data', icon: '◉' },
                  { title: 'Feedback Loops', desc: 'Continuous feedback to refine AI', icon: '⟲' },
                ].map((item, index) => (
                  <div key={index} className="bg-dark-900/50 rounded-xl p-4 border border-dark-700 hover:border-primary-500/30 transition-all">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 text-xl mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-white mb-1 text-sm">{item.title}</h3>
                    <p className="text-neutral-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div className="bg-dark-900 rounded-2xl p-8 border border-dark-700">
              <h3 className="text-xl font-semibold text-white mb-6">Why Human-in-the-Loop?</h3>
              <ul className="space-y-6">
                {[
                  { stat: '99.5%', text: 'accuracy with human QA vs 94% without' },
                  { stat: '73%', text: 'of enterprises require human oversight for AI' },
                  { stat: '5x', text: 'faster issue detection with human monitoring' },
                  { stat: '0', text: 'high-stakes decisions made without review' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500 w-24">
                      {item.stat}
                    </span>
                    <span className="text-neutral-400 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 border border-dark-700 rounded-full mb-6">
              <span className="text-neutral-400 text-sm">Trust & Safety</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Safe, Compliant, Reliable
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Comprehensive governance to ensure your AI systems meet the highest standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustSafety.map((item, index) => (
              <div
                key={index}
                className="group bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl p-6
                           hover:border-primary-500/50 transition-all duration-300
                           hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="relative py-24 bg-dark-800 overflow-hidden">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700 border border-dark-600 rounded-full mb-6">
              <span className="text-neutral-400 text-sm">Technology Stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platforms We Work With
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Deep expertise across leading MLOps and AI infrastructure platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group bg-dark-900 rounded-xl px-6 py-4 border border-dark-700
                           hover:border-dark-600 transition-all hover:scale-105"
              >
                <div className={`w-full h-1 bg-gradient-to-r ${platform.color} rounded-full mb-3 opacity-60 group-hover:opacity-100 transition-opacity`} />
                <p className="font-medium text-white">{platform.name}</p>
                <p className="text-xs text-neutral-500">{platform.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 border border-dark-700 rounded-full mb-6">
              <span className="text-neutral-400 text-sm">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              From Assessment to Operations
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: 'Assess', title: 'Infrastructure Assessment', desc: 'Evaluate current AI infrastructure and identify gaps' },
              { phase: 'Design', title: 'Architecture Design', desc: 'Design scalable, reliable MLOps architecture' },
              { phase: 'Implement', title: 'Implementation', desc: 'Build and deploy monitoring and pipelines' },
              { phase: 'Operate', title: 'Managed Operations', desc: 'Ongoing management and optimization' },
            ].map((step, index) => (
              <div key={index} className="group bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-gold-500/30 transition-all text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-wide mb-2">{step.phase}</p>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-neutral-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-dark-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-900/20 via-transparent to-primary-900/20" />

        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to operationalize your AI?
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
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
