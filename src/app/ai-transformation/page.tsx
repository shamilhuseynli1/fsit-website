'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export default function AITransformation() {
  const marketStats = [
    { stat: '90%', description: 'of companies will use AI by 2026', source: 'Gartner' },
    { stat: '83%', description: 'of leaders view AI as top investment priority', source: 'McKinsey' },
    { stat: '$15.7T', description: 'AI contribution to global economy by 2030', source: 'PwC' },
    { stat: '40%', description: 'productivity gains from AI adoption', source: 'Accenture' },
  ];

  const transformationAreas = [
    {
      title: 'Operations Transformation',
      description: 'Automate processes, reduce costs, and improve efficiency across your operations.',
      outcomes: ['50% reduction in manual tasks', '30% cost savings', '24/7 automated operations'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Customer Experience',
      description: 'Deliver personalized, intelligent experiences that increase satisfaction and loyalty.',
      outcomes: ['24/7 AI-powered support', 'Personalized interactions', '35% higher satisfaction'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Decision Intelligence',
      description: 'Augment human decision-making with AI-powered insights and recommendations.',
      outcomes: ['Real-time insights', 'Predictive analytics', '25% better decisions'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Product Innovation',
      description: 'Build AI-powered products and services that create new value for your customers.',
      outcomes: ['New revenue streams', 'Competitive advantage', 'Market differentiation'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  const journeyPhases = [
    {
      phase: '01',
      title: 'Assess',
      description: 'Evaluate your current state, identify opportunities, and build the business case for AI transformation.',
      activities: ['AI readiness assessment', 'Opportunity identification', 'ROI modeling', 'Roadmap development'],
    },
    {
      phase: '02',
      title: 'Pilot',
      description: 'Validate AI feasibility with focused proof-of-concepts that demonstrate value quickly.',
      activities: ['Use case selection', 'PoC development', 'Results measurement', 'Stakeholder alignment'],
    },
    {
      phase: '03',
      title: 'Scale',
      description: 'Expand successful pilots to production systems across the organization.',
      activities: ['Production deployment', 'Integration', 'Change management', 'Training'],
    },
    {
      phase: '04',
      title: 'Transform',
      description: 'Embed AI into your organizational DNA with governance, culture, and continuous innovation.',
      activities: ['AI governance', 'Center of excellence', 'Continuous improvement', 'Innovation pipeline'],
    },
  ];

  const barriers = [
    { barrier: 'Talent Gap', solution: 'Embed vetted AI specialists directly into your team' },
    { barrier: 'Data Readiness', solution: 'Assess and prepare your data infrastructure for AI' },
    { barrier: 'Unclear ROI', solution: 'Start with high-impact pilots that demonstrate value' },
    { barrier: 'Integration Complexity', solution: 'Seamless integration with existing systems' },
    { barrier: 'Governance Concerns', solution: 'Enterprise-grade security and compliance built in' },
    { barrier: 'Change Resistance', solution: 'Change management and training programs' },
  ];

  const industries = [
    { name: 'Financial Services', adoption: '78%', focus: 'Fraud detection, risk assessment, customer service' },
    { name: 'Healthcare', adoption: '72%', focus: 'Clinical support, operations, patient engagement' },
    { name: 'Manufacturing', adoption: '68%', focus: 'Predictive maintenance, quality control, supply chain' },
    { name: 'Retail', adoption: '65%', focus: 'Personalization, inventory, demand forecasting' },
    { name: 'Government', adoption: '55%', focus: 'Citizen services, document processing, analytics' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        {/* Saudi Modern City Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://source.unsplash.com/PYOHfWTYkzA/1920x1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <NetworkBackground nodeCount={70} maxDistance={130} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-4 md:!mb-6 animate-fade-in">Business Transformation with AI</p>
            <h1 className="hero-title text-white animate-fade-in-up text-3xl md:text-5xl lg:text-6xl">
              The AI Era<br />
              <span className="text-primary-500 text-glow">Is Here. Are You Ready?</span>
            </h1>
            <p className="hero-subtitle text-base md:text-lg lg:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              By 2026, 90% of companies will use AI. 83% of business leaders already view AI as their top investment priority. The question isn't whether to adopt AI — it's how fast you can transform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/contact" className="btn-primary text-center">
                Start your transformation
              </Link>
              <Link href="/leverage-ai" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900 text-center">
                Explore AI services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-primary-500">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {marketStats.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white">{item.stat}</p>
                <p className="text-white/90 text-sm mt-2">{item.description}</p>
                <p className="text-white/60 text-xs mt-1">— {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Imperative */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-label">The AI Imperative</p>
            <h2 className="section-title">Transform or Be Disrupted</h2>
            <p className="text-dark-500 text-lg">
              AI is no longer a competitive advantage — it's becoming table stakes. Organizations that fail to adopt AI risk falling behind competitors who are already using it to reduce costs, improve experiences, and make better decisions.
            </p>
          </div>

          <div className="grid-2">
            {transformationAreas.map((area, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-900 mb-2">{area.title}</h3>
                    <p className="text-dark-500 text-sm mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.outcomes.map((outcome, i) => (
                        <span key={i} className="text-xs bg-primary-500/10 text-primary-600 px-2 py-1 rounded">
                          {outcome}
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

      {/* Transformation Journey */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label !text-primary-500">The Journey</p>
            <h2 className="section-title !text-white">Your AI Transformation Roadmap</h2>
            <p className="section-subtitle mx-auto !text-dark-300">
              A proven approach to AI transformation that balances quick wins with long-term capability building
            </p>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            {journeyPhases.map((phase, index) => (
              <div key={index} className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500 transition-all">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-dark-300 text-sm mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-dark-400">
                      <svg className="w-3 h-3 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Adoption */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Industry Trends</p>
            <h2 className="section-title">AI Adoption by Industry</h2>
            <p className="section-subtitle mx-auto">
              Where is your industry in the AI adoption curve?
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-dark-900">{industry.name}</h3>
                  <span className="text-primary-500 font-bold">{industry.adoption} adoption</span>
                </div>
                <div className="w-full bg-neutral-150 rounded-full h-2 mb-3">
                  <div
                    className="bg-primary-500 h-2 rounded-full"
                    style={{ width: industry.adoption }}
                  />
                </div>
                <p className="text-dark-500 text-sm">Focus: {industry.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barriers & Solutions */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Overcoming Barriers</p>
            <h2 className="section-title">Common Challenges, Solved</h2>
            <p className="section-subtitle mx-auto">
              We help you overcome the most common barriers to AI transformation
            </p>
          </div>

          <div className="grid-3">
            {barriers.map((item, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-dark-900">{item.barrier}</h3>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-dark-500 text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FSIT */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Your Transformation Partner</p>
              <h2 className="section-title">Why Transform with FSIT</h2>
              <p className="text-dark-500 mb-6">
                We're not consultants who deliver reports and leave. We're an AI-native delivery platform that embeds vetted AI specialists directly into your organization to build, deploy, and scale real AI systems.
              </p>
              <ul className="space-y-4">
                {[
                  '98% project success rate vs industry 59%',
                  'Teams deployed in weeks, not months',
                  'Focus on execution and production impact',
                  'Enterprise-grade security and governance',
                  'Vision 2030 aligned for Saudi organizations',
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
            <div className="bg-dark-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">The Cost of Waiting</h3>
              <p className="text-dark-300 mb-6">
                Every month you delay AI transformation, your competitors are:
              </p>
              <ul className="space-y-3">
                {[
                  'Automating processes you do manually',
                  'Delivering experiences you can\'t match',
                  'Making decisions faster than you',
                  'Building capabilities you\'ll need to catch up on',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span className="text-dark-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Transformation */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://source.unsplash.com/9cbkE8kNUBA/1920x1080"
                alt="Riyadh Saudi Arabia skyline representing Vision 2030"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-primary-600 font-bold">Vision 2030</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label">Saudi Arabia Focus</p>
              <h2 className="section-title">Transforming the Kingdom with AI</h2>
              <p className="text-dark-500 mb-6">
                We're proud partners in Saudi Arabia's Vision 2030, helping government entities and enterprises embrace AI transformation that drives real economic impact.
              </p>
              <div className="bg-primary-50 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600">90%</p>
                    <p className="text-sm text-dark-500">of companies adopting AI by 2026</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600">$20B+</p>
                    <p className="text-sm text-dark-500">Saudi AI investment by 2030</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'url(https://source.unsplash.com/PYOHfWTYkzA/1920x1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container-max text-center relative z-10">
          <h2 className="section-title !text-white mb-4">
            Ready to start your AI transformation?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Don't get left behind. Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start your transformation
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
