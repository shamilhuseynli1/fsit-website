'use client';

import Link from 'next/link';
import Image from 'next/image';
import NetworkBackground from '@/components/NetworkBackground';

export default function Home() {
  const talentPillars = [
    { title: 'Build & Deploy AI Systems', desc: 'Production-ready AI from prototype to scale' },
    { title: 'AI-Native Teams at Scale', desc: 'Dedicated experts embedded in your organization' },
    { title: 'Secure, Governed, Production-Ready', desc: 'Enterprise-grade compliance and security' },
    { title: 'Human-in-the-Loop Where It Matters', desc: 'AI with appropriate human oversight' },
  ];

  const aiUseCases = [
    { title: 'AI for Operations', desc: 'Streamline workflows and automate processes' },
    { title: 'AI for Public Sector & Smart Cities', desc: 'Vision 2030 aligned government solutions' },
    { title: 'AI for Enterprise Modernisation', desc: 'Transform legacy systems with AI' },
    { title: 'AI for Data & Automation', desc: 'Unlock insights and automate decisions' },
  ];

  const stats = [
    { number: '80,000+', label: 'Elite talent in our network' },
    { number: '50+', label: 'Businesses served' },
    { number: '90%', label: 'Outsourced, vetted experts' },
    { number: '98%', label: 'Client retention' },
  ];

  const technologies = [
    {
      name: 'Cloud & AI Platforms',
      tools: [
        { name: 'AWS', logo: '/tools/aws.png' },
        { name: 'Azure', logo: '/tools/azure.png' },
        { name: 'Google Cloud', logo: '/tools/googlecloud.png' },
      ],
    },
    {
      name: 'Large Language Models',
      tools: [
        { name: 'OpenAI', logo: '/tools/openai.webp' },
        { name: 'Anthropic', logo: '/tools/anthropic.png' },
        { name: 'Meta', logo: '/tools/meta.png' },
      ],
    },
    {
      name: 'Data & BI Platforms',
      tools: [
        { name: 'Tableau', logo: '/tools/tableau.png' },
        { name: 'Power BI', logo: '/tools/powerbi.png' },
        { name: 'Snowflake', logo: '/tools/snowflake.png' },
      ],
    },
    {
      name: 'AI Deployment',
      tools: [
        { name: 'MLflow', logo: '/tools/mlflow.png' },
        { name: 'Kubernetes', logo: '/tools/kubernetes.png' },
        { name: 'Docker', logo: '/tools/docker.png' },
      ],
    },
    {
      name: 'Enterprise Security',
      tools: [
        { name: 'Okta', logo: '/tools/okta.png' },
        { name: 'Auth0', logo: '/tools/auth0.png' },
        { name: 'Azure AD', logo: '/tools/azuread.png' },
      ],
    },
  ];

  const expertRoles = [
    'AI Engineers & Machine Learning Engineers',
    'Data Scientists & Applied AI Specialists',
    'AI Product Managers',
    'MLOps & AI Infrastructure Engineers',
    'Computer Vision & NLP Specialists',
    'AI Architects & Technical Leads',
  ];

  const experts = [
    { initials: 'SC', name: 'Sarah Chen', role: 'Senior AI Engineer', company: 'Previously at Google', location: 'San Francisco', rating: '4.9', skills: ['React', 'Node.js'] },
    { initials: 'MW', name: 'Marcus Williams', role: 'Product Manager', company: 'Previously at Meta', location: 'New York', rating: '4.8', skills: ['Product Strategy', 'Data Analytics'] },
    { initials: 'ER', name: 'Emily Rodriguez', role: 'UX Design Lead', company: 'Previously at Apple', location: 'Austin', rating: '5', skills: ['User Research', 'Figma'] },
    { initials: 'JP', name: 'James Park', role: 'Investment Analyst', company: 'Previously at Goldman Sachs', location: 'Chicago', rating: '4.9', skills: ['Financial Modeling', 'M&A'] },
  ];

  const processSteps = [
    { step: 'Define', desc: 'align on outcomes and priorities' },
    { step: 'Embed', desc: 'deploy dedicated AI teams' },
    { step: 'Build', desc: 'develop integrated systems' },
    { step: 'Operate', desc: 'ensure reliability in production' },
    { step: 'Scale', desc: 'expand with governance' },
  ];

  const clients = [
    { name: 'Riyad Capital', logo: '/clients/Riyad-Capital-Logo.png', url: 'https://www.riyadcapital.com/en/' },
    { name: 'Ministry of Health', logo: '/clients/Saudi-Ministry-of-Health-Logo.png', url: 'https://www.moh.gov.sa/en' },
    { name: 'Arab Bank', logo: '/clients/Arab-Bank-Logo.png', url: 'https://www.arabbank.com/' },
    { name: 'Tadawul', logo: '/clients/Saudi-Tadawul-Logo.png', url: 'https://www.saudiexchange.sa/' },
    { name: 'NCB Capital', logo: '/clients/NCB-Capital-Logo.png', url: 'https://www.alahlicapital.com/' },
    { name: 'Vision 2030', logo: '/clients/Vision-2023-Logo.png', url: 'https://www.vision2030.gov.sa/' },
    { name: 'Multinational Consulting Firms', logo: '/clients/Multinational-Consulting-Firms.png', url: null },
    { name: 'Jadwa Investment', logo: '/clients/Jadwa-Investment-Logo.png', url: 'https://www.jadwa.com/' },
    { name: 'Herald Investment', logo: '/clients/Herald-Investment-Management-Logo.png', url: 'https://www.heralduk.com/' },
    { name: 'Public Pension Agency', logo: '/clients/Public-Pension-Agency-Logo-Wide.png', url: 'https://www.pension.gov.sa/' },
    { name: 'Emirates NBD', logo: '/clients/Emirates-NBD-Logo-Wide.png', url: 'https://www.emiratesnbd.com.sa/' },
    { name: 'Elm', logo: '/clients/ELM-Logo-Wide.png', url: 'https://www.elm.sa/en' },
    { name: 'Bank Al Jazira', logo: '/clients/Bank-Al-Jazira-Logo-Wide.png', url: 'https://www.bankaljazira.com/en-us' },
    { name: 'Blom Bank', logo: '/clients/Blom-Bank-Logo.png', url: 'https://www.blombank.com/' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-dark bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        <NetworkBackground nodeCount={70} maxDistance={130} />
        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-6">Future Systems for Information Technology</p>
            <h1 className="hero-title text-white">
              On-Site AI.<br />
              <span className="text-primary-500">Real Results.</span><br />
              Built Capability.
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 mb-4">
              Executing AI transformation across Saudi Arabia and the Middle East
            </p>
            <p className="hero-subtitle">
              AI-native teams delivering production-ready systems across government and enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Talk to our AI delivery team
              </Link>
              <Link href="/build-scale-ai" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
                Start with a pilot
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-neutral-150 border-b border-neutral-200">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-dark-700 mb-10">Trusted By Leading Organizations</p>
        </div>
        <div className="relative overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing">
          <div className="flex animate-scroll hover:pause-animation px-4 min-w-max">
            {/* First set of logos */}
            {clients.map((client, index) => (
              client.url ? (
                <a
                  key={`first-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition-all mx-4 flex items-center justify-center h-32 w-64"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="object-contain max-h-20"
                  />
                </a>
              ) : (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 mx-4 flex items-center justify-center h-32 w-64"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="object-contain max-h-20"
                  />
                </div>
              )
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              client.url ? (
                <a
                  key={`second-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition-all mx-4 flex items-center justify-center h-32 w-64"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="object-contain max-h-20"
                  />
                </a>
              ) : (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 mx-4 flex items-center justify-center h-32 w-64"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="object-contain max-h-20"
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Leverage Top 1% AI Talent Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title">Leverage the Top 1% of AI Talent, On-Demand</h2>
          </div>
          <div className="grid-4">
            {talentPillars.map((pillar, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">{pillar.title}</h3>
                <p className="text-dark-500 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How FSIT Works */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title !text-white">How FSIT Works</h2>
            <p className="text-xl text-primary-500 font-semibold mt-4">
              Define → Embed → Build → Operate → Scale
            </p>
          </div>

          <div className="flex justify-center items-start gap-2 md:gap-4 mb-16">
            {processSteps.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center px-2 md:px-4 py-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mx-auto mb-3">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-white mb-1 text-sm md:text-base">{item.step}</p>
                  <p className="text-xs text-dark-400 max-w-[120px] md:max-w-[150px]">{item.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-4 md:w-8 h-px bg-dark-700 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* AI Use Cases */}
          <div className="grid-4 max-w-5xl mx-auto">
            {aiUseCases.map((useCase, index) => (
              <div key={index} className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500 transition-all">
                <h3 className="font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-dark-400 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Aligned with Vision 2030 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-title">Aligned with Vision 2030</h2>
            <p className="section-subtitle mx-auto">
              With a strong regional presence and global reach, FSIT supports national transformation initiatives and enterprise AI programs
            </p>
          </div>

          <div className="bg-neutral-150 rounded-2xl p-8 border border-neutral-200">
            <p className="text-center text-sm font-semibold text-dark-700 mb-8">Globally Recognized Technologies</p>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-neutral-200 text-center w-[180px]">
                  <h4 className="font-semibold text-dark-900 text-sm mb-5 leading-tight min-h-[40px] flex items-center justify-center">{tech.name}</h4>
                  <div className="flex justify-center items-center gap-3">
                    {tech.tools.map((tool, i) => (
                      <div key={i} className="group relative">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-10 h-10 object-contain"
                        />
                        <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 bg-dark-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-500">
        <div className="container-max">
          <p className="text-center text-white/80 text-sm mb-8">
            We are working extensively to build a vetted network of talents available at short notice
          </p>
          <div className="grid-4 stagger-children">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white">{stat.number}</p>
                <p className="text-white/80 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Some of Our Experts</h2>
            <p className="section-subtitle mx-auto">
              A network of pre-vetted, technical experts ready to seamlessly integrate into your organisation
            </p>
          </div>

          <div className="grid-4 mb-12">
            {experts.map((expert, index) => (
              <div key={index} className="card card-hover">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 font-bold text-xl mx-auto mb-4">
                  {expert.initials}
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-dark-900">{expert.name}</h3>
                  <p className="text-dark-500 text-sm">{expert.role}</p>
                  <p className="text-dark-400 text-xs mt-1">{expert.company}</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xs text-dark-400">{expert.location}</span>
                    <span className="text-xs text-gold-500">★ {expert.rating}</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1 mt-3">
                    {expert.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-neutral-150 text-dark-600 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expert Roles */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200">
            <div className="flex flex-wrap justify-center gap-3">
              {expertRoles.map((role, index) => (
                <span key={index} className="bg-dark-900 text-white px-4 py-2 rounded-pill text-sm font-medium">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Case Study</p>
              <h2 className="section-title">AI Operations Copilot</h2>
              <p className="text-dark-500 mb-6">
                Secure, Vision 2030–aligned AI that automates workflows, unlocks institutional knowledge, and accelerates decision-making for a Saudi Government Entity.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-primary-500">-45%</span>
                <span className="text-dark-500">manual processing time</span>
              </div>
              <Link href="/solutions" className="btn-ghost">
                View more case studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-neutral-150 rounded-2xl p-8 md:p-12 border border-neutral-200">
              <div className="space-y-4">
                {['Workflow automation', 'Knowledge management', 'Decision intelligence', 'Governance compliant'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Organizations Choose FSIT */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Organizations Choose FSIT</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: 'AI-first augmented intelligence model', desc: 'Not traditional IT services' },
              { title: 'Proven delivery', desc: 'Enterprise and government environments' },
              { title: 'Hybrid approach', desc: 'Embedded AI talent and managed services' },
              { title: 'Faster execution', desc: 'Than consulting-led engagements' },
              { title: 'Focus on measurable outcomes', desc: 'Not proofs of concept' },
            ].map((item, index) => (
              <div key={index} className="card card-hover text-center">
                <h3 className="font-semibold text-dark-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-dark-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-max text-center">
          <h2 className="section-title !text-white mb-4">
            Ready to build AI that actually runs?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Talk to our AI delivery team and start your transformation today
          </p>
          <Link href="/build-scale-ai" className="btn-primary">
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
