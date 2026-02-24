'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import HeroTransformVisual from '@/components/HeroTransformVisual';
import ProcessFlow from '@/components/ProcessFlow';
import BranchingFromTitle from '@/components/BranchingFromTitle';

export default function AITransformation() {
  const processSteps = [
    { num: '01', title: 'Assess', desc: 'Evaluate readiness' },
    { num: '02', title: 'Pilot', desc: 'Validate quickly' },
    { num: '03', title: 'Scale', desc: 'Expand to production' },
    { num: '04', title: 'Transform', desc: 'Embed in DNA' },
  ];

  const whyTransform = [
    { title: 'AI-first competitive advantage', desc: 'Stay ahead of the competition' },
    { title: 'Reduced operational costs', desc: 'Automate and optimize workflows' },
    { title: 'Enhanced customer experiences', desc: 'Personalized AI-powered interactions' },
    { title: 'Data-driven decision making', desc: 'Insights from your data at scale' },
    { title: 'Future-proof operations', desc: 'Ready for tomorrow\'s challenges' },
  ];
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
      title: 'Assess',
      description: 'Evaluate your current state, identify opportunities, and build the business case for AI transformation.',
      activities: ['AI readiness assessment', 'Opportunity identification', 'ROI modeling', 'Roadmap development'],
    },
    {
      title: 'Pilot',
      description: 'Validate AI feasibility with focused proof-of-concepts that demonstrate value quickly.',
      activities: ['Use case selection', 'PoC development', 'Results measurement', 'Stakeholder alignment'],
    },
    {
      title: 'Scale',
      description: 'Expand successful pilots to production systems across the organization.',
      activities: ['Production deployment', 'Integration', 'Change management', 'Training'],
    },
    {
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
      <section className="relative min-h-[auto] md:min-h-[85vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1629667051607-e412f1c493c0?auto=format&fit=crop&w=1920&q=80"
          alt="AI Transformation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 md:bg-black/60" />
        <NetworkBackground nodeCount={70} maxDistance={130} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative container-max pt-36 pb-4 md:py-36">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight animate-fade-in-up" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                The AI Era<br />
                <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Is Here. Are You Ready?</span>
              </h1>
              <p className="text-lg md:text-2xl text-white mb-6 md:mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                By 2026, 90% of companies will use AI. 83% of business leaders already view AI as their top investment priority. The question isn't whether to adopt AI — it's how fast you can transform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Link href="/contact" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                  Start your transformation
                </Link>
                <Link href="/leverage-ai" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-900 transition-all text-base md:text-lg">
                  Explore AI services
                </Link>
              </div>
            </div>
            <div className="mt-2 lg:mt-0 transform scale-[0.75] md:scale-100 origin-top -mb-16 md:mb-0">
              <HeroTransformVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {marketStats.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-5xl font-bold text-dark-900">{item.stat}</p>
                <p className="text-dark-500 text-xs md:text-sm mt-1 md:mt-2">{item.description}</p>
                <p className="text-dark-400 text-xs mt-1">— {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Imperative */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Transform or Be Disrupted</h2>
            <p className="text-xl" style={{ color: 'var(--gray-600)' }}>
              AI is no longer a competitive advantage — it's becoming table stakes. Organizations that fail to adopt AI risk falling behind competitors who are already using it to reduce costs, improve experiences, and make better decisions.
            </p>
          </div>

          <div className="grid-2">
            {transformationAreas.map((area, index) => (
              <div key={index} className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl p-6 hover:border-[#00A651] hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark-900 mb-2">{area.title}</h3>
                    <p className="text-dark-500 text-base mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.outcomes.map((outcome, i) => (
                        <span key={i} className="text-sm bg-primary-500/10 text-primary-600 px-2 py-1 rounded">
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

      {/* Transformation Journey - Animated Process Flow */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Your AI Transformation Roadmap</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              A proven approach to AI transformation that balances quick wins with long-term capability building
            </p>
          </div>

          <div className="mb-16">
            <ProcessFlow steps={processSteps} />
          </div>

          {/* Journey Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {journeyPhases.map((phase, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 border border-neutral-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">{phase.title}</h3>
                <p className="text-dark-500 text-base mb-4">{phase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {phase.activities.map((activity, i) => (
                    <div key={i} className="text-center p-2 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-all">
                      <span className="text-sm text-dark-600 font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Adoption */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>AI Adoption by Industry</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              Where is your industry in the AI adoption curve?
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="aiTransformIndustryLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="aiTransformIndustryPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#aiTransformIndustryLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#aiTransformIndustryPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="group text-center p-4 bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl hover:border-[#00A651] hover:shadow-lg transition-all duration-300">
                <h3 className="text-base font-bold mb-2 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {industry.name}
                </h3>
                <p className="text-xl font-bold text-primary-500">{industry.adoption}</p>
                <p className="text-sm text-dark-500 mt-1">{industry.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barriers & Solutions */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Common Challenges, Solved</h2>
            <p className="text-xl mx-auto" style={{ maxWidth: '42rem', color: 'var(--gray-600)' }}>
              We help you overcome the most common barriers to AI transformation
            </p>
          </div>

          <div className="grid-3">
            {barriers.map((item, index) => (
              <div key={index} className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl p-6 hover:border-[#00A651] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-sm"></span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900">{item.barrier}</h3>
                </div>
                <div className="bg-primary-50 p-3 rounded-xl">
                  <p className="text-dark-600 text-base">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FSIT */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Why Transform with FSIT</h2>
            <p className="text-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              We're not consultants who deliver reports and leave. We're an AI-native delivery platform that embeds vetted AI specialists directly into your organization to build, deploy, and scale real AI systems.
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="aiTransformWhyLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="aiTransformWhyPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#aiTransformWhyLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#aiTransformWhyPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {[
              '98% project success rate vs industry 59%',
              'Teams deployed in weeks, not months',
              'Focus on execution and production impact',
              'Enterprise-grade security and governance',
              'Vision 2030 aligned for Saudi organizations',
            ].map((item, i) => (
              <div key={i} className="group text-center p-4 bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl hover:border-[#00A651] hover:shadow-lg transition-all duration-300">
                <h3 className="text-base font-bold group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {item}
                </h3>
              </div>
            ))}
          </div>

          {/* The Cost of Waiting */}
          <div className="bg-neutral-150 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-dark-900 mb-4 text-center">The Cost of Waiting</h3>
            <p className="text-lg text-dark-500 mb-6 text-center">
              Every month you delay AI transformation, your competitors are:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Automating processes you do manually',
                'Delivering experiences you can\'t match',
                'Making decisions faster than you',
                'Building capabilities you\'ll need to catch up on',
              ].map((item, i) => (
                <div key={i} className="group text-center p-4 rounded-xl bg-white hover:bg-primary-50 transition-all duration-300">
                  <h3 className="text-sm font-bold group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Transformation */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80"
                alt="Riyadh Saudi Arabia skyline representing Vision 2030"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-primary-600 font-bold">Vision 2030</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Transforming the Kingdom with AI</h2>
              <p className="text-xl mb-6" style={{ color: 'var(--gray-600)' }}>
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

      {/* Why Transform - Animated Branching */}
      <section className="py-16" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-2">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--black)' }}>Why organizations are transforming now</h2>
          </div>
          <BranchingFromTitle items={whyTransform} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-md text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
            Ready to transform
            <br />
            <span style={{ color: 'var(--green)' }}>with AI?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            Don't get left behind. Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start your transformation
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
