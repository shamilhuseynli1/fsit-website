import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import BranchingFromTitle from '@/components/BranchingFromTitle';

export const metadata = {
  title: 'Mission & Vision | FSIT',
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
    'Knowledge transfer and capability building within client organizations',
  ];

  const lifecycle = [
    { title: 'AI strategy and solution design' },
    { title: 'AI product and platform engineering' },
    { title: 'Deployment, monitoring, and optimisation' },
    { title: 'AI operations, governance, and compliance' },
  ];

  const enablers = [
    { title: 'Scale AI delivery', desc: 'Without long-term hiring risk' },
    { title: 'Accelerate execution', desc: 'Faster timelines to production' },
    { title: 'Retain control', desc: 'Security and institutional knowledge' },
    { title: 'Measurable outcomes', desc: 'Tied to business KPIs' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[auto] md:min-h-[85vh] flex items-center bg-cream-50 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1682695796795-cc287af78a2b?auto=format&fit=crop&w=1920&q=80"
          alt="Mission"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 md:from-white/70 via-white/60 md:via-white/50 to-white/40 md:to-white/30" />
        <NetworkBackground nodeCount={60} />
        <div className="relative container-max pt-36 pb-4 md:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-dark-900 !text-2xl md:!text-4xl lg:!text-5xl">
              We exist to close the gap between AI ambition and{' '}
              <span className="text-primary-500">real-world execution</span>
            </h1>
            <p className="hero-subtitle !text-center mx-auto !text-base md:!text-xl">
              We enable organizations to access trusted AI capacity that delivers measurable outcomes
            </p>
          </div>
        </div>
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Mission Statement */}
      <section className="section bg-white">
        <div className="container-max text-center">
          <h2 className="h2 mb-6">Augmenting. Enabling. Executing.</h2>
          <p className="text-xl text-dark-500 max-w-4xl mx-auto">
            Our mission is to help organizations build, scale, and operationalize artificial intelligence through augmented intelligence — combining elite AI expertise, delivery teams, and managed AI services embedded directly into their operations
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-neutral-150">
        <div className="container-max">
          <p className="text-center text-dark-500 mb-8 md:mb-12 text-sm md:text-base">
            We are working extensively to build a vetted network of talents available at short notice
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-1 md:mb-2">{stat.number}</p>
                <p className="text-xs md:text-sm text-dark-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="h2">Our Leadership</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            <div className="border-l-4 border-primary-500 pl-4 md:pl-6">
              <p className="text-dark-600 text-base md:text-lg">
                Founded in 2012 and headquartered in Riyadh, Future Systems for Information Technology (FSIT) is an AI-first augmented intelligence partner supporting enterprises and government entities across Saudi Arabia, the MENA region, and beyond
              </p>
            </div>
            <div className="border-l-4 border-primary-500/50 pl-4 md:pl-6">
              <p className="text-dark-600 text-base md:text-lg">
                Long before AI became mainstream, FSIT recognized that real transformation would require more than traditional consulting or staffing models. Organizations would need trusted AI expertise embedded directly into their operations — focused on execution, governance, and measurable outcomes
              </p>
            </div>
            <div className="bg-cream-50 rounded-2xl p-5 md:p-8">
              <p className="text-dark-900 font-medium text-base md:text-lg">
                Today, FSIT operates one of the region&apos;s most selective AI talent networks, with over 80,000 carefully vetted professionals across AI engineering, machine learning, data science, AI product delivery, digital transformation, and enterprise technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Model */}
      <section className="py-16" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-dark-900 font-medium">
            Our model is simple: embed the right AI expertise, at the right time, inside your organization — to reduce execution risk, accelerate delivery, and build lasting internal capability
          </p>
        </div>
      </section>

      {/* AI with Purpose */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="h2">We Stand for AI with Purpose</h2>
            <p className="text-body mx-auto text-sm md:text-base">
              AI should deliver tangible value — not remain trapped in pilots or proofs of concept. Every FSIT engagement is designed around real operational impact
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            <span className="tag text-sm md:text-base">Production-ready AI systems</span>
            <span className="tag text-sm md:text-base">Secure, governed deployments</span>
            <span className="tag text-sm md:text-base">Long-term sustainability</span>
          </div>
          <p className="text-center text-lg md:text-xl font-bold text-dark-900 italic">
            No hype. No experimentation theatre.
          </p>
        </div>
      </section>

      {/* Augmented Intelligence */}
      <section className="py-16 bg-neutral-150">
        <div className="container-lg">
          <div className="text-center mb-2">
            <h2 className="h2">Augmented Intelligence, Not Outsourcing</h2>
            <p className="text-body mx-auto mb-4">
              FSIT does not operate as a traditional outsourcing provider. We embed AI professionals and teams directly into client environments.
            </p>
          </div>
          <BranchingFromTitle items={enablers} />
        </div>
      </section>

      {/* AI Lifecycle */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="h2">End-to-End AI Enablement</h2>
            <p className="text-body mx-auto text-sm md:text-base">FSIT supports the full AI lifecycle</p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-6 md:mb-8 hidden md:block">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="missionLifecycleLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="missionLifecyclePulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#missionLifecycleLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#missionLifecyclePulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {lifecycle.map((item, index) => (
              <div key={index} className="group text-center p-3 md:p-4 rounded-xl hover:bg-neutral-50 transition-all duration-300 bg-neutral-50 md:bg-transparent">
                <h3 className="text-xs md:text-sm font-bold group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
          <p className="text-center text-dark-500 mt-6 md:mt-8 max-w-3xl mx-auto text-sm md:text-base">
            Whether embedding AI experts into existing teams or delivering managed AI services, we ensure continuity, accountability, and long-term value
          </p>
        </div>
      </section>

      {/* Commitments */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="h2">FSIT is committed to:</h2>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-6 md:mb-8 hidden md:block">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="missionCommitLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="missionCommitPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#missionCommitLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#missionCommitPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {commitments.map((item, index) => (
              <div key={index} className="group text-center p-3 md:p-4 rounded-xl hover:bg-white transition-all duration-300 bg-white md:bg-transparent">
                <h3 className="text-xs md:text-sm font-bold group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {item}
                </h3>
              </div>
            ))}
          </div>
          <p className="text-center text-lg md:text-xl text-primary-500 font-semibold">
            We measure success by impact — not headcount, buzzwords, or slide decks
          </p>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="section bg-neutral-150">
        <div className="container-max text-center">
          <h2 className="h2 mb-4 md:mb-6">Looking Ahead</h2>
          <p className="text-base md:text-xl text-dark-500 max-w-3xl mx-auto mb-6 md:mb-8">
            As AI reshapes industries and governments, FSIT&apos;s mission remains clear: to serve as a trusted augmented intelligence partner enabling organizations to execute AI confidently, securely, and at scale
          </p>
          <div className="bg-cream-50 rounded-2xl p-5 md:p-8 max-w-3xl mx-auto border-l-4 border-primary-500">
            <p className="text-base md:text-lg text-dark-600 mb-3 md:mb-4">We don&apos;t just help organizations adopt AI</p>
            <p className="text-lg md:text-xl font-bold text-primary-500">
              We help them operate with it — with purpose, precision, and lasting capability
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-max text-center">
          <h2 className="h2 mb-4">Ready to transform with AI?</h2>
          <p className="text-body mx-auto mb-8">
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
