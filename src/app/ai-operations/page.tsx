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

// Icons for operations flows - using explicit width/height for reliability
const OpsIcons = {
  model: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  cloud: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  ),
  deployed: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  metrics: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  alerts: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  data: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  pipeline: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  optimize: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  performance: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
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
  {
    title: 'Content Moderation',
    desc: 'Ensure AI outputs meet safety and compliance standards',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="1.5" style={{ flexShrink: 0, maxWidth: '28px', maxHeight: '28px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    title: 'Bias Detection',
    desc: 'Monitor for and mitigate bias in AI decisions',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="1.5" style={{ flexShrink: 0, maxWidth: '28px', maxHeight: '28px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    )
  },
  {
    title: 'PII Protection',
    desc: 'Safeguard sensitive data throughout the AI pipeline',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="1.5" style={{ flexShrink: 0, maxWidth: '28px', maxHeight: '28px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  },
  {
    title: 'Audit Trails',
    desc: 'Complete logging of all AI decisions and actions',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="1.5" style={{ flexShrink: 0, maxWidth: '28px', maxHeight: '28px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    )
  },
  {
    title: 'Compliance Monitoring',
    desc: 'Ensure adherence to industry regulations',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="1.5" style={{ flexShrink: 0, maxWidth: '28px', maxHeight: '28px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    )
  },
  {
    title: 'Incident Response',
    desc: 'Rapid response to AI failures or safety issues',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="1.5" style={{ flexShrink: 0, maxWidth: '28px', maxHeight: '28px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
      </svg>
    )
  },
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
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1629667051607-e412f1c493c0?auto=format&fit=crop&w=1920&q=80)' }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />

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

        <div className="relative container-max py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                AI That Runs<br />
                <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  In Production
                </span>
              </h1>

              <p className="text-xl text-white mb-8 leading-relaxed max-w-xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                End-to-end AI operations — from deployment to monitoring to optimization. We ensure your AI systems remain accurate, compliant, and reliable in real-world production environments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4 text-center">
                  Discuss your AI operations
                </Link>
                <Link href="/solutions" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-900 transition-all text-lg text-center">
                  View all solutions
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: '99.9%', label: 'Uptime' },
                  { value: '98%', label: 'Accuracy' },
                  { value: '24/7', label: 'Support' },
                  { value: '5x', label: 'Faster' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-green-400">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/80">{stat.label}</p>
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
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              AI Operations Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
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
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
                AI + Human Intelligence
              </h2>
              <p className="text-xl mb-8" style={{ color: 'var(--gray-600)' }}>
                The most reliable AI systems combine automation with human oversight. Our human-in-the-loop services ensure your AI remains accurate, safe, and aligned with business objectives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Quality Assurance',
                    desc: 'Human reviewers validate AI outputs',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="1.5" style={{ flexShrink: 0, maxWidth: '20px', maxHeight: '20px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    )
                  },
                  {
                    title: 'Escalation Handling',
                    desc: 'Complex decisions routed to experts',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="1.5" style={{ flexShrink: 0, maxWidth: '20px', maxHeight: '20px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                      </svg>
                    )
                  },
                  {
                    title: 'Training Data Curation',
                    desc: 'Humans label and annotate data',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="1.5" style={{ flexShrink: 0, maxWidth: '20px', maxHeight: '20px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                      </svg>
                    )
                  },
                  {
                    title: 'Feedback Loops',
                    desc: 'Continuous feedback to refine AI',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="1.5" style={{ flexShrink: 0, maxWidth: '20px', maxHeight: '20px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    )
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-neutral-200 hover:border-green-500/30 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(0, 166, 81, 0.1)' }}>
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-dark-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-dark-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div className="bg-neutral-150 rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-xl font-semibold text-dark-900 mb-6">Why Human-in-the-Loop?</h3>
              <ul className="space-y-6">
                {[
                  { stat: '99.5%', text: 'accuracy with human QA vs 94% without' },
                  { stat: '73%', text: 'of enterprises require human oversight for AI' },
                  { stat: '5x', text: 'faster issue detection with human monitoring' },
                  { stat: '0', text: 'high-stakes decisions made without review' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500 w-24">
                      {item.stat}
                    </span>
                    <span className="text-dark-500 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Safe, Compliant, Reliable</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Comprehensive governance to ensure your AI systems meet the highest standards
            </p>
          </div>

          {/* Horizontal line with flowing animation */}
          <div className="relative">
            <style jsx>{`
              @keyframes flowTrust {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#00A651" strokeWidth="2" strokeDasharray="8 4"
                style={{ animation: 'flowTrust 8s linear infinite' }} />
            </svg>
          </div>

          {/* Cards grid with gap separators */}
          <div className="relative pt-8">
            {/* First row */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
              {trustSafety.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white z-10"
                  style={{ border: '1px solid var(--gray-100)' }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 overflow-hidden flex-shrink-0" style={{ background: 'rgba(0, 166, 81, 0.1)', minWidth: '56px', maxWidth: '56px', minHeight: '56px', maxHeight: '56px' }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                    {item.title}
                  </h3>
                  <p className="text-base" style={{ color: 'var(--gray-600)' }}>{item.desc}</p>
                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Dashed separator between rows */}
            <div className="relative h-6 my-0 hidden lg:flex items-center">
              <div className="absolute left-0 right-0 top-1/2" style={{ borderTop: '2px dashed #00A651', opacity: 0.3 }} />
              <div className="absolute top-0 bottom-0" style={{ left: 'calc(33.333% - 12px)', borderLeft: '2px dashed #00A651', opacity: 0.3 }} />
              <div className="absolute top-0 bottom-0" style={{ left: 'calc(66.666% + 12px)', borderLeft: '2px dashed #00A651', opacity: 0.3 }} />
            </div>

            {/* Second row */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustSafety.slice(3, 6).map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white z-10"
                  style={{ border: '1px solid var(--gray-100)' }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 overflow-hidden flex-shrink-0" style={{ background: 'rgba(0, 166, 81, 0.1)', minWidth: '56px', maxWidth: '56px', minHeight: '56px', maxHeight: '56px' }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                    {item.title}
                  </h3>
                  <p className="text-base" style={{ color: 'var(--gray-600)' }}>{item.desc}</p>
                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Platforms We Work With</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Deep expertise across leading MLOps and AI infrastructure platforms
            </p>
          </div>

          {/* Horizontal line with flowing animation */}
          <div className="relative">
            <style jsx>{`
              @keyframes flowPlatforms {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#00A651" strokeWidth="2" strokeDasharray="8 4"
                style={{ animation: 'flowPlatforms 8s linear infinite' }} />
            </svg>
          </div>

          {/* Platform cards grid with gap separators */}
          <div className="relative pt-8">
            {/* First row - 4 items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.slice(0, 4).map((platform, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white z-10"
                  style={{ border: '1px solid var(--gray-100)' }}
                >
                  {/* Colored accent bar */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${platform.color} rounded-full mb-4 group-hover:w-full transition-all duration-300`} />
                  <h3 className="font-bold text-lg mb-1 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                    {platform.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--gray-500)' }}>{platform.category}</p>
                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Dashed separator between rows */}
            <div className="relative h-6 hidden lg:flex items-center">
              <div className="absolute left-0 right-0 top-1/2" style={{ borderTop: '2px dashed #00A651', opacity: 0.3 }} />
              <div className="absolute top-0 bottom-0" style={{ left: 'calc(25% - 12px)', borderLeft: '2px dashed #00A651', opacity: 0.3 }} />
              <div className="absolute top-0 bottom-0" style={{ left: '50%', borderLeft: '2px dashed #00A651', opacity: 0.3 }} />
              <div className="absolute top-0 bottom-0" style={{ left: 'calc(75% + 12px)', borderLeft: '2px dashed #00A651', opacity: 0.3 }} />
            </div>

            {/* Second row - remaining 4 items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.slice(4, 8).map((platform, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white z-10"
                  style={{ border: '1px solid var(--gray-100)' }}
                >
                  {/* Colored accent bar */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${platform.color} rounded-full mb-4 group-hover:w-full transition-all duration-300`} />
                  <h3 className="font-bold text-lg mb-1 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                    {platform.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--gray-500)' }}>{platform.category}</p>
                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>From Assessment to Operations</h2>
          </div>

          {/* Horizontal line with flowing animation */}
          <div className="relative">
            <style jsx>{`
              @keyframes flowProcess {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#00A651" strokeWidth="2" strokeDasharray="8 4"
                style={{ animation: 'flowProcess 8s linear infinite' }} />
            </svg>
          </div>

          {/* Cards with vertical connector lines */}
          <div className="relative">
            {/* Vertical lines from horizontal line to center of each card */}
            <div className="hidden lg:block absolute top-0 left-[12.5%] w-px h-8" style={{ background: '#00A651' }} />
            <div className="hidden lg:block absolute top-0 left-[37.5%] w-px h-8" style={{ background: '#00A651' }} />
            <div className="hidden lg:block absolute top-0 left-[62.5%] w-px h-8" style={{ background: '#00A651' }} />
            <div className="hidden lg:block absolute top-0 left-[87.5%] w-px h-8" style={{ background: '#00A651' }} />

            <div className="grid md:grid-cols-4 gap-6 pt-8">
              {[
                { phase: 'Assess', title: 'Infrastructure Assessment', desc: 'Evaluate current AI infrastructure and identify gaps' },
                { phase: 'Design', title: 'Architecture Design', desc: 'Design scalable, reliable MLOps architecture' },
                { phase: 'Implement', title: 'Implementation', desc: 'Build and deploy monitoring and pipelines' },
                { phase: 'Operate', title: 'Managed Operations', desc: 'Ongoing management and optimization' },
              ].map((step, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
                  style={{ border: '1px solid var(--gray-100)' }}
                >
                  <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--green)' }}>{step.phase}</p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>{step.title}</h3>
                  <p className="text-base" style={{ color: 'var(--gray-600)' }}>{step.desc}</p>
                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-neutral-150 overflow-hidden">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
            Ready to operationalize your AI?
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--gray-600)' }}>
            Let's discuss how we can help you deploy, monitor, and scale your AI systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Talk to our operations team
            </Link>
            <Link href="/staff-augmentation" className="btn-secondary">
              Build your AI team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
