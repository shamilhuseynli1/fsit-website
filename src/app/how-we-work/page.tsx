'use client';

import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import NetworkBackground from '@/components/NetworkBackground';
import HeroProcessVisual from '@/components/HeroProcessVisual';
import BranchingList from '@/components/BranchingList';
import ProcessFlow from '@/components/ProcessFlow';
import BranchingFromTitle from '@/components/BranchingFromTitle';
import VideoPlaceholder from '@/components/VideoPlaceholder';

export default function HowWeWork() {
  // SVG Icons for steps
  const StepIcons = {
    define: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    embed: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    build: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    operate: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    scale: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  };

  const steps = [
    {
      step: 'Define',
      title: 'Align on outcomes',
      description: 'We align on business outcomes, system constraints, data readiness, and operational realities. AI use cases are prioritised based on impact, feasibility, and time to value.',
      icon: StepIcons.define,
      color: 'from-primary-500 to-primary-400',
    },
    {
      step: 'Embed',
      title: 'Deploy AI teams',
      description: 'We deploy dedicated AI engineers, data scientists, and delivery leads who work as an extension of your internal teams.',
      icon: StepIcons.embed,
      color: 'from-primary-500 to-green-500',
    },
    {
      step: 'Build',
      title: 'Develop integrated systems',
      description: 'AI systems are developed to integrate with existing platforms, workflows, and data sources — not as standalone experiments.',
      icon: StepIcons.build,
      color: 'from-primary-600 to-primary-500',
    },
    {
      step: 'Operate',
      title: 'Ensure reliability',
      description: 'We support deployment, monitoring, optimisation, and human-in-the-loop workflows to ensure reliability, accuracy, and compliance in production.',
      icon: StepIcons.operate,
      color: 'from-gold-500 to-orange-500',
    },
    {
      step: 'Scale',
      title: 'Expand with governance',
      description: 'Successful systems are expanded across teams, functions, or regions with performance, governance, and security in place.',
      icon: StepIcons.scale,
      color: 'from-primary-500 to-primary-400',
    },
  ];

  // SVG Icons for delivers
  const DeliverIcons = {
    engineer: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    target: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    cycle: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    handshake: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '24px', maxHeight: '24px' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  };

  const delivers = [
    { text: 'Pre-vetted AI engineers and data specialists with real production experience', icon: DeliverIcons.engineer },
    { text: 'Teams structured around outcomes, not hours', icon: DeliverIcons.target },
    { text: 'Long-term engagement models for continuous improvement', icon: DeliverIcons.cycle },
    { text: 'Deep collaboration with internal stakeholders and systems', icon: DeliverIcons.handshake },
  ];

  const enterpriseFeatures = [
    { title: 'Secure data handling', desc: 'Encrypted transmission at all times' },
    { title: 'Cloud deployment', desc: 'Within existing IT environments' },
    { title: 'Governance-aware AI', desc: 'Compliant workflows by design' },
    { title: 'Human oversight', desc: 'Where automation is insufficient' },
    { title: 'Post-deployment monitoring', desc: 'Continuous optimisation' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1682695796795-cc287af78a2b?auto=format&fit=crop&w=1920&q=80)' }}
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/30" />

        {/* Network pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="networkPatternProcess" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#8b5cf6" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#networkPatternProcess)" />
          </svg>
        </div>

        <AnimatedBackground />
        <NetworkBackground nodeCount={50} maxDistance={120} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6 leading-tight">
                How We{' '}
                <span className="text-primary-500">
                  Work
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-dark-600 mb-8 leading-relaxed">
                AI execution, built for production, not experimentation
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-500">98%</div>
                  <div className="text-dark-500 text-sm">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-500">3 weeks</div>
                  <div className="text-dark-500 text-sm">To Deploy</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-500">5 Steps</div>
                  <div className="text-dark-500 text-sm">Process</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="mt-8 lg:mt-0">
              <HeroProcessVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-dark-500 mb-4">
            Most organisations don&apos;t fail at AI because of lack of ambition
          </p>
          <p className="text-xl md:text-2xl text-dark-900 font-semibold mb-12">
            They fail because AI is treated as a side project, disconnected from real systems, data, and operations
          </p>

          <div className="bg-white rounded-2xl p-8 border-l-4 border-primary-500">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-500 mb-4">
              FSIT exists to close that gap
            </h2>
            <p className="text-dark-600 text-lg leading-relaxed">
              We work as an execution partner — embedding AI-native teams that design, build, deploy, and operate AI systems inside real enterprise environments
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps - Animated */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="h2">Our 5-Step Process</h2>
          </div>

          <div className="mb-4">
            <ProcessFlow steps={[
              { num: '01', title: 'Define', desc: 'Align on outcomes' },
              { num: '02', title: 'Embed', desc: 'Deploy AI teams' },
              { num: '03', title: 'Build', desc: 'Develop systems' },
              { num: '04', title: 'Operate', desc: 'Ensure reliability' },
              { num: '05', title: 'Scale', desc: 'Expand with governance' },
            ]} />
          </div>

          {/* Detailed descriptions below with connecting lines */}
          <div className="relative pt-8">
            {/* Step blocks - using flex to match ProcessFlow layout */}
            <div className="hidden md:flex items-stretch justify-between">
              {steps.map((item, index) => (
                <div key={index} className="group relative flex-1 text-center px-2 flex flex-col">
                  {/* Dashed connector line from step circle to block */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      top: '-32px',
                      height: '48px',
                      borderLeft: '2px dashed #00A651',
                      opacity: 0.5,
                    }}
                  />

                  {/* Connection dot at top of block */}
                  <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00A651] border-2 border-white shadow-sm z-10" />

                  {/* Block card */}
                  <div className="bg-[#F5F3F0] border border-[#00A651]/30 rounded-xl p-4 mt-4 flex-1 flex flex-col
                                  hover:border-[#00A651] hover:shadow-lg transition-all duration-300
                                  hover:translate-y-[-2px]">
                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white border border-[#00A651]/30
                                    flex items-center justify-center text-[#00A651]
                                    group-hover:border-[#00A651] group-hover:shadow-md transition-all duration-300">
                      {item.icon}
                    </div>

                    {/* Step label */}
                    <div className="text-center mb-2">
                      <span className="text-xs font-mono text-[#00A651] bg-[#00A651]/10 px-2 py-0.5 rounded">
                        {item.step.toUpperCase()}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-dark-500 text-xs leading-relaxed text-center flex-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile layout - grid without lines */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              {steps.map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-[#F5F3F0] border border-[#00A651]/30 rounded-xl p-4
                                  hover:border-[#00A651] hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-white border border-[#00A651]/30
                                      flex items-center justify-center text-[#00A651]">
                        {item.icon}
                      </div>
                      <div>
                        {/* Step label */}
                        <span className="text-xs font-mono text-[#00A651] bg-[#00A651]/10 px-2 py-0.5 rounded">
                          {item.step.toUpperCase()}
                        </span>
                        {/* Description */}
                        <p className="text-dark-500 text-sm leading-relaxed mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Video Walkthrough */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          {/* Centered text */}
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Watch Our Process in Action</h2>
            <p className="text-body max-w-2xl mx-auto">
              See how FSIT takes organizations from AI strategy to production-ready systems. This step-by-step walkthrough shows our proven methodology in action.
            </p>
          </div>

          {/* Video and blocks side by side with connecting lines */}
          <div className="flex items-center justify-center gap-0">
            {/* Video */}
            <div className="w-[45%]">
              <VideoPlaceholder
                title="Our Process Walkthrough"
                description="See how we deliver AI systems"
                duration="2:30"
                thumbnailUrl="/hero-solutions.jpg"
              />
            </div>

            {/* Connecting lines SVG */}
            <div className="relative w-20 h-[280px] flex-shrink-0">
              {/* Center node on video edge */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-[#00A651]" />
                <div className="absolute inset-0 w-6 h-6 -m-1 rounded-full border-2 border-[#00A651] opacity-30" />
              </div>
              <svg className="w-full h-full" viewBox="0 0 80 280" preserveAspectRatio="none">
                <path d="M0,140 Q40,140 78,28" stroke="#00A651" strokeWidth="2" fill="none" />
                <path d="M0,140 Q40,140 78,84" stroke="#00A651" strokeWidth="2" fill="none" />
                <path d="M0,140 L78,140" stroke="#00A651" strokeWidth="2" fill="none" />
                <path d="M0,140 Q40,140 78,196" stroke="#00A651" strokeWidth="2" fill="none" />
                <path d="M0,140 Q40,140 78,252" stroke="#00A651" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Blocks */}
            <div className="w-[40%] space-y-2">
              {['Define clear business outcomes', 'Embed specialized AI teams', 'Build integrated systems', 'Operate with reliability', 'Scale with governance'].map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-3 rounded-lg border transition-all hover:border-[#00A651] hover:shadow-sm"
                  style={{ background: '#F5F3F0', borderColor: 'rgba(0,166,81,0.2)' }}
                >
                  <span className="text-sm font-medium" style={{ color: 'var(--gray-700)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FSIT Delivers */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="h2 mb-6">FSIT Delivers</h2>
            <p className="text-body max-w-2xl mx-auto">
              AI-native teams that work as an extension of your organization
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="deliversLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="deliversPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#deliversLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#deliversPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          {/* Items grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {delivers.map((item, index) => (
              <div key={index} className="group text-center p-4 rounded-xl hover:bg-white transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white border border-[#00A651]/30
                                flex items-center justify-center text-[#00A651]
                                group-hover:border-[#00A651] group-hover:shadow-md transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {item.text}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/build-scale-ai" className="btn-primary">
              Start your project
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Ready */}
      <section className="py-16" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-4">
            <h2 className="h2">Enterprise-ready by design</h2>
          </div>

          <BranchingFromTitle items={enterpriseFeatures.map(f => ({ title: f.title, desc: f.desc }))} />
        </div>
      </section>

      {/* Visual Flow Diagram */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">
              From Strategy to Execution
            </h2>
            <p className="text-body mx-auto" style={{ maxWidth: '42rem' }}>
              A seamless flow from defining outcomes to scaling AI systems
            </p>
          </div>

          {/* Visual Flow */}
          <div className="relative bg-white rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Your Team */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 bg-[#F5F3F0] border border-[#00A651]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#00A651]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '32px', maxHeight: '32px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-dark-900 font-semibold mb-1">Your Team</h3>
                <p className="text-dark-500 text-sm">Internal stakeholders</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center">
                <div className="w-12 h-0.5 bg-primary-500" />
                <svg width="16" height="16" className="text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ maxWidth: '16px', maxHeight: '16px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="md:hidden w-0.5 h-8 bg-primary-500" />

              {/* FSIT */}
              <div className="text-center flex-1">
                <div className="relative">
                  <div className="relative w-24 h-24 bg-[#00A651] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '40px', maxHeight: '40px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-dark-900 font-semibold mb-1">FSIT Teams</h3>
                <p className="text-dark-500 text-sm">Embedded specialists</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center">
                <div className="w-12 h-0.5 bg-primary-500" />
                <svg width="16" height="16" className="text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ maxWidth: '16px', maxHeight: '16px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="md:hidden w-0.5 h-8 bg-primary-500" />

              {/* Production Systems */}
              <div className="text-center flex-1">
                <div className="w-20 h-20 bg-[#F5F3F0] border border-[#00A651]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#00A651]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ maxWidth: '32px', maxHeight: '32px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-dark-900 font-semibold mb-1">Production AI</h3>
                <p className="text-dark-500 text-sm">Working systems</p>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 pt-8 border-t border-neutral-100">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary-500">98%</p>
                  <p className="text-dark-500 text-sm mt-1">Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-500">3 weeks</p>
                  <p className="text-dark-500 text-sm mt-1">To Deploy</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-500">Production</p>
                  <p className="text-dark-500 text-sm mt-1">Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 mb-4">
            Build AI systems that actually run your business
          </h2>
          <p className="text-body mx-auto mb-8" style={{ maxWidth: '42rem' }}>
            Talk to FSIT&apos;s delivery team
          </p>
          <Link href="/build-scale-ai" className="btn-primary">
            Book a free consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
