import Link from 'next/link';

export const metadata = {
  title: 'How We Work | FSIT AI',
  description: 'AI execution, built for production, not experimentation. Learn how FSIT delivers AI systems that operate inside real enterprise environments.',
};

export default function HowWeWork() {
  const steps = [
    { step: 'Define', title: 'Align on outcomes', description: 'We align on business outcomes, system constraints, data readiness, and operational realities. AI use cases are prioritised based on impact, feasibility, and time to value.' },
    { step: 'Embed', title: 'Deploy AI teams', description: 'We deploy dedicated AI engineers, data scientists, and delivery leads who work as an extension of your internal teams.' },
    { step: 'Build', title: 'Develop integrated systems', description: 'AI systems are developed to integrate with existing platforms, workflows, and data sources — not as standalone experiments.' },
    { step: 'Operate', title: 'Ensure reliability', description: 'We support deployment, monitoring, optimisation, and human-in-the-loop workflows to ensure reliability, accuracy, and compliance in production.' },
    { step: 'Scale', title: 'Expand with governance', description: 'Successful systems are expanded across teams, functions, or regions with performance, governance, and security in place.' },
  ];

  const delivers = [
    'Pre-vetted AI engineers and data specialists with real production experience',
    'Teams structured around outcomes, not hours',
    'Long-term engagement models for continuous improvement',
    'Deep collaboration with internal stakeholders and systems',
  ];

  const enterpriseFeatures = [
    'Secure data handling and encrypted transmission',
    'Deployment within existing IT and cloud environments',
    'Governance-aware AI workflows',
    'Human oversight where automation alone is insufficient',
    'Monitoring and optimisation post-deployment',
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-dark bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-6">Our Process</p>
            <h1 className="hero-title text-white">
              How We <span className="text-primary-500">Work</span>
            </h1>
            <p className="hero-subtitle">
              AI execution, built for production, not experimentation.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <p className="text-xl text-dark-500 mb-4 max-w-3xl mx-auto">
            Most organisations don&apos;t fail at AI because of lack of ambition.
          </p>
          <p className="text-xl text-dark-900 font-semibold max-w-3xl mx-auto mb-8">
            They fail because AI is treated as a side project, disconnected from real systems, data, and operations.
          </p>
          <div className="card-dark max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-500 mb-3">FSIT exists to close that gap</h2>
            <p className="text-dark-300">
              We work as an execution partner — embedding AI-native teams that design, build, deploy, and operate AI systems inside real enterprise environments.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">The Process</p>
            <h2 className="section-title">Define → Embed → Build → Operate → Scale</h2>
          </div>
          <div className="space-y-6">
            {steps.map((item, index) => (
              <div key={index} className="card card-hover flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <div>
                  <span className="text-primary-500 font-semibold">{item.step}</span>
                  <h3 className="text-xl font-bold text-dark-900 mt-1 mb-2">{item.title}</h3>
                  <p className="text-dark-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FSIT Delivers */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">What We Deliver</p>
            <h2 className="section-title">FSIT Delivers</h2>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">
            {delivers.map((item, index) => (
              <div key={index} className="flex items-start gap-4 feature-box">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-dark-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Ready */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Enterprise Grade</p>
            <h2 className="section-title !text-white">Enterprise-ready by design</h2>
            <p className="section-subtitle mx-auto !text-dark-300">
              AI systems designed to operate in complex, regulated, and high-stakes environments
            </p>
          </div>
          <div className="grid-3 lg:grid-cols-5">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-dark-800 p-6 rounded-2xl text-center">
                <p className="text-white font-medium text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="section-title mb-4">Build AI systems that actually run your business</h2>
          <p className="section-subtitle mx-auto mb-8">Talk to FSIT&apos;s delivery team</p>
          <Link href="/build-scale-ai" className="btn-primary">
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
