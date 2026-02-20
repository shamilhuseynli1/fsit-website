import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'Mission & Vision | FSIT AI',
  description: 'We exist to close the gap between AI ambition and real-world execution. We enable organizations to access trusted AI capacity that delivers measurable outcomes.',
};

export default function Mission() {
  const stats = [
    { number: '80,000+', label: 'Elite talent in our network' },
    { number: '50+', label: 'Businesses served' },
    { number: '90%', label: 'Outsourced, vetted experts' },
    { number: '98%', label: 'Client retention' },
  ];

  const commitments = [
    'Responsible AI adoption aligned with ethical, security, and governance standards',
    'Measurable outcomes tied to business and operational KPIs',
    'Long-term partnerships, not short-term engagements',
    'Knowledge transfer and capability building within client organisations',
  ];

  const lifecycle = [
    { title: 'AI strategy and solution design' },
    { title: 'AI product and platform engineering' },
    { title: 'Deployment, monitoring, and optimisation' },
    { title: 'AI operations, governance, and compliance' },
  ];

  const enablers = [
    'Scale AI delivery without long-term hiring risk',
    'Accelerate execution timelines',
    'Retain control, security, and institutional knowledge',
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        <NetworkBackground nodeCount={60} />
        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label !text-primary-500 !mb-6">Mission & Vision</p>
            <h1 className="hero-title text-white !text-3xl md:!text-4xl lg:!text-5xl">
              We exist to close the gap between AI ambition and{' '}
              <span className="text-primary-500">real-world execution</span>
            </h1>
            <p className="hero-subtitle !text-center mx-auto">
              We enable organizations to access trusted AI capacity that delivers measurable outcomes
            </p>
          </div>
        </div>
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <p className="section-label">Our Purpose</p>
          <h2 className="section-title mb-6">Augmenting. Enabling. Executing.</h2>
          <p className="text-xl text-dark-500 max-w-4xl mx-auto">
            Our mission is to help organizations build, scale, and operationalize artificial intelligence through augmented intelligence — combining elite AI expertise, delivery teams, and managed AI services embedded directly into their operations
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <p className="text-center text-dark-500 mb-12">
            We are working extensively to build a vetted network of talents available at short notice
          </p>
          <div className="grid-4 stagger-children">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="stat-number">{stat.number}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Our Leadership</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card-dark">
              <p className="text-dark-300 mb-6">
                Founded in 2012 and headquartered in Riyadh, Future Systems for Information Technology (FSIT) is an AI-first augmented intelligence partner supporting enterprises and government entities across Saudi Arabia, the MENA region, and beyond
              </p>
              <p className="text-dark-300 mb-6">
                Long before AI became mainstream, FSIT recognised that real transformation would require more than traditional consulting or staffing models. Organisations would need trusted AI expertise embedded directly into their operations — focused on execution, governance, and measurable outcomes
              </p>
              <p className="text-white font-medium">
                Today, FSIT operates one of the region&apos;s most selective AI talent networks, with over 80,000 carefully vetted professionals across AI engineering, machine learning, data science, AI product delivery, digital transformation, and enterprise technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Model */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-white font-medium">
            Our model is simple: embed the right AI expertise, at the right time, inside your organisation — to reduce execution risk, accelerate delivery, and build lasting internal capability
          </p>
        </div>
      </section>

      {/* AI with Purpose */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Our Values</p>
            <h2 className="section-title">We Stand for AI with Purpose</h2>
            <p className="section-subtitle mx-auto">
              AI should deliver tangible value — not remain trapped in pilots or proofs of concept. Every FSIT engagement is designed around real operational impact
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="tag">Production-ready AI systems</span>
            <span className="tag">Secure, governed deployments</span>
            <span className="tag">Long-term sustainability</span>
          </div>
          <p className="text-center text-xl font-bold text-dark-900 italic">
            No hype. No experimentation theatre.
          </p>
        </div>
      </section>

      {/* Augmented Intelligence */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Our Approach</p>
            <h2 className="section-title">Augmented Intelligence, Not Outsourcing</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-dark-600 mb-6 text-center">
              FSIT does not operate as a traditional outsourcing provider. We embed AI professionals and teams directly into client environments, working as an extension of internal teams while maintaining accountability, governance, and delivery excellence
            </p>
            <p className="text-dark-600 mb-8 text-center">This enables organisations to:</p>
            <div className="grid-3">
              {enablers.map((item, index) => (
                <div key={index} className="card card-hover text-center">
                  <p className="font-semibold text-dark-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Lifecycle */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Full Support</p>
            <h2 className="section-title">End-to-End AI Enablement</h2>
            <p className="section-subtitle mx-auto">FSIT supports the full AI lifecycle</p>
          </div>
          <div className="grid-4">
            {lifecycle.map((item, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-dark-700 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-dark-500 mt-8 max-w-3xl mx-auto">
            Whether embedding AI experts into existing teams or delivering managed AI services, we ensure continuity, accountability, and long-term value
          </p>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Our Commitment</p>
            <h2 className="section-title !text-white">FSIT is committed to:</h2>
          </div>
          <div className="grid-2 max-w-4xl mx-auto mb-12">
            {commitments.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-dark-800 p-4 rounded-xl border border-dark-700 hover:border-primary-500/40 transition-all">
                <span className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-primary-500/20 flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xl text-primary-500 font-semibold">
            We measure success by impact — not headcount, buzzwords, or slide decks
          </p>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max text-center">
          <p className="section-label">The Future</p>
          <h2 className="section-title mb-6">Looking Ahead</h2>
          <p className="text-xl text-dark-500 max-w-3xl mx-auto mb-8">
            As AI reshapes industries and governments, FSIT&apos;s mission remains clear: to serve as a trusted augmented intelligence partner enabling organisations to execute AI confidently, securely, and at scale
          </p>
          <div className="card-dark max-w-3xl mx-auto">
            <p className="text-lg text-dark-300 mb-4">We don&apos;t just help organisations adopt AI</p>
            <p className="text-xl font-bold text-primary-500">
              We help them operate with it — with purpose, precision, and lasting capability
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="section-title mb-4">Ready to transform with AI?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Partner with FSIT for real AI execution
          </p>
          <Link href="/contact" className="btn-primary">
            Start today
          </Link>
        </div>
      </section>
    </>
  );
}
