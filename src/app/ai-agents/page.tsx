'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import AnimatedBackground from '@/components/AnimatedBackground';
import AgentCardEnhanced from '@/components/AgentCardEnhanced';
import HeroAgentVisual from '@/components/HeroAgentVisual';
import BranchingFromTitle from '@/components/BranchingFromTitle';

type ModelProvider = 'openai' | 'anthropic' | 'google' | 'meta' | 'mistral' | 'huggingface';

interface AgentSolution {
  title: string;
  description: string;
  triggerLabel: string;
  triggerIcon: React.ReactNode;
  actionLabel: string;
  actionIcon: React.ReactNode;
  models: ModelProvider[];
  capabilities: string[];
  metric: string;
  metricValue: string;
}

// Icons for agent flows
const AgentIcons = {
  task: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  automation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  data: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  chat: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  check: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  insight: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  response: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  workflow: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  result: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

const agentSolutions: AgentSolution[] = [
  {
    title: 'Task Automation Agent',
    description: 'Autonomous agents that handle repetitive tasks, data processing, and workflow automation without human intervention.',
    triggerLabel: 'Task Queue',
    triggerIcon: AgentIcons.task,
    actionLabel: 'Completed',
    actionIcon: AgentIcons.check,
    models: ['openai', 'anthropic'],
    capabilities: ['Document processing', 'Data entry', 'Report generation', 'Email triage'],
    metric: 'Tasks Automated',
    metricValue: '10K+/day',
  },
  {
    title: 'Decision Support Agent',
    description: 'Intelligent agents that analyze data, surface insights, and provide recommendations to support human decision-making.',
    triggerLabel: 'Data Input',
    triggerIcon: AgentIcons.data,
    actionLabel: 'Insights',
    actionIcon: AgentIcons.insight,
    models: ['anthropic', 'google'],
    capabilities: ['Risk assessment', 'Investment analysis', 'Resource allocation', 'Strategic planning'],
    metric: 'Decision Accuracy',
    metricValue: '94%',
  },
  {
    title: 'Conversational Agent',
    description: 'AI-powered assistants and copilots that interact naturally with users, answer questions, and guide through processes.',
    triggerLabel: 'User Query',
    triggerIcon: AgentIcons.chat,
    actionLabel: 'Response',
    actionIcon: AgentIcons.response,
    models: ['openai', 'anthropic', 'mistral'],
    capabilities: ['Customer support', 'Employee helpdesk', 'Onboarding', 'Knowledge Q&A'],
    metric: 'Response Time',
    metricValue: '<2s',
  },
  {
    title: 'Multi-Agent System',
    description: 'Coordinated networks of specialized agents that work together to solve complex, multi-step problems autonomously.',
    triggerLabel: 'Complex Task',
    triggerIcon: AgentIcons.workflow,
    actionLabel: 'Result',
    actionIcon: AgentIcons.result,
    models: ['openai', 'anthropic', 'google'],
    capabilities: ['Research automation', 'Complex workflows', 'Parallel processing', 'Orchestration'],
    metric: 'Complexity Handled',
    metricValue: '50+ steps',
  },
];

const capabilities = [
  {
    title: 'Tool Use & API Integration',
    desc: 'Agents that can call APIs, query databases, and use external tools',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    )
  },
  {
    title: 'Memory & Context',
    desc: 'Long-term memory for persistent context across interactions',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    )
  },
  {
    title: 'Reasoning & Planning',
    desc: 'Multi-step reasoning to break down complex tasks',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    )
  },
  {
    title: 'Self-Correction',
    desc: 'Ability to detect errors and adjust approach autonomously',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    )
  },
  {
    title: 'Human-in-the-Loop',
    desc: 'Escalation to humans for high-stakes decisions',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    title: 'Observability',
    desc: 'Full audit trails and explainability of agent actions',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
];

const whyAgents = [
  { title: 'Autonomous task execution', desc: 'Agents work independently without constant supervision' },
  { title: 'Complex reasoning & planning', desc: 'Break down multi-step problems intelligently' },
  { title: 'Tool & API integration', desc: 'Connect with your existing systems and databases' },
  { title: 'Human-in-the-loop when needed', desc: 'Escalate high-stakes decisions to humans' },
  { title: 'Full observability & audit trails', desc: 'Complete transparency into agent actions' },
];

export default function AIAgents() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-neom.jpg)' }}
        />
        {/* Light overlay - reduced for NEOM visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/40" />

        {/* Network pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="networkPatternAgents" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#3b82f6" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#networkPatternAgents)" />
          </svg>
        </div>

        {/* Animated particles */}
        <AnimatedBackground />

        <NetworkBackground nodeCount={50} maxDistance={120} />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6 leading-tight">
                Autonomous AI<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                  That Takes Action
                </span>
              </h1>

              <p className="text-lg text-black mb-8 leading-relaxed max-w-xl">
                Custom AI agents that automate workflows, make decisions, and integrate with your enterprise systems — built to work within your existing business processes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Discuss your use case
                </Link>
                <Link href="/solutions" className="btn-secondary text-center">
                  Explore AI solutions
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: '50+', label: 'Agents Deployed' },
                  { value: '98%', label: 'Accuracy Rate' },
                  { value: '24/7', label: 'Autonomous' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                      {stat.value}
                    </p>
                    <p className="text-sm text-dark-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative mt-8 lg:mt-0">
              <HeroAgentVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Agent Types Section */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              AI Agents We Build
            </h2>
            <p className="text-dark-500 max-w-2xl mx-auto">
              Tailored agents designed for specific enterprise use cases and workflows
            </p>
          </div>

          {/* Agent Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {agentSolutions.map((agent, index) => (
              <AgentCardEnhanced
                key={index}
                title={agent.title}
                description={agent.description}
                triggerLabel={agent.triggerLabel}
                triggerIcon={agent.triggerIcon}
                actionLabel={agent.actionLabel}
                actionIcon={agent.actionIcon}
                models={agent.models}
                capabilities={agent.capabilities}
                metric={agent.metric}
                metricValue={agent.metricValue}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="h2 mb-6">Built for Real-World Complexity</h2>
            <p className="text-body max-w-2xl mx-auto">
              Enterprise-grade capabilities that enable agents to operate reliably in production
            </p>
          </div>

          {/* Horizontal line with flowing animation */}
          <div className="relative mb-8">
            <style jsx>{`
              @keyframes flowCapabilities {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#00A651" strokeWidth="2" strokeDasharray="8 4"
                style={{ animation: 'flowCapabilities 8s linear infinite' }} />
            </svg>
          </div>

          {/* Cards grid */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {/* Vertical dashed separator lines between columns */}
              <div className="absolute top-6 bottom-0 left-1/3 w-px hidden lg:block" style={{ borderLeft: '2px dashed #00A651', opacity: 0.3 }} />
              <div className="absolute top-6 bottom-0 left-2/3 w-px hidden lg:block" style={{ borderLeft: '2px dashed #00A651', opacity: 0.3 }} />

              {/* Horizontal dashed line between rows */}
              <div className="absolute left-0 right-0 top-1/2 h-px hidden lg:block" style={{ borderTop: '2px dashed #00A651', opacity: 0.3 }} />

              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white z-10"
                  style={{ border: '1px solid var(--gray-100)' }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 min-w-[56px] max-w-[56px] min-h-[56px] max-h-[56px] rounded-xl flex items-center justify-center mb-4 overflow-hidden" style={{ background: 'rgba(0, 166, 81, 0.1)' }}>
                    <div className="w-7 h-7 flex-shrink-0">
                      {cap.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                    {cap.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--gray-500)' }}>{cap.desc}</p>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent vs Chatbot Visual */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg relative z-10">
          <div className="text-center mb-6">
            <h2 className="h2">What Makes an Agent Different?</h2>
            <p className="text-body mx-auto">
              AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional chatbots that only respond to queries, agents can execute complex workflows independently.
            </p>
          </div>

          {/* Horizontal line with flowing animation */}
          <div className="relative mb-8">
            <style jsx>{`
              @keyframes flowDiff {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#00A651" strokeWidth="2" strokeDasharray="8 4"
                style={{ animation: 'flowDiff 4s linear infinite' }} />
            </svg>
          </div>

          {/* Agent capabilities as modern cards */}
          <div className="relative">
            {/* Vertical branch lines */}
            <div className="hidden lg:flex justify-around absolute top-0 left-0 right-0 h-12">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="w-px" style={{ background: 'linear-gradient(to bottom, #00A651, transparent)' }} />
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-16 pt-6">
              {[
                {
                  title: 'Execute multi-step tasks independently',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                    </svg>
                  )
                },
                {
                  title: 'Use tools and APIs to interact with systems',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  )
                },
                {
                  title: 'Maintain context and memory across sessions',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  )
                },
                {
                  title: 'Reason through complex problems',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  )
                },
                {
                  title: 'Know when to escalate to humans',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  )
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ background: 'var(--white)', border: '1px solid var(--gray-100)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'rgba(0, 166, 81, 0.1)' }}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Visual comparison */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg">
              <h3 className="font-semibold text-dark-900 mb-6 text-center text-lg">Agent vs Chatbot</h3>
              <div className="space-y-6">
                <div className="bg-neutral-100 rounded-xl p-6 border border-neutral-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-neutral-200 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-dark-500">Traditional Chatbot</span>
                  </div>
                  <p className="text-dark-600">"Here's information about your order status..."</p>
                </div>

                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(0, 166, 81, 0.1)' }}>
                    <svg className="w-5 h-5" fill="none" stroke="#00A651" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                <div className="rounded-xl p-6 border-2" style={{ background: 'rgba(0, 166, 81, 0.05)', borderColor: '#00A651' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0, 166, 81, 0.15)' }}>
                      <svg className="w-5 h-5" fill="none" stroke="#00A651" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: '#00A651' }}>AI Agent</span>
                  </div>
                  <p className="text-dark-700">"I've checked your order, contacted the carrier, updated the delivery date, and sent you a confirmation email."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="h2 mb-6">Agents Across Verticals</h2>
            <p className="text-body max-w-2xl mx-auto">
              Purpose-built agents tailored to industry-specific workflows and compliance requirements
            </p>
          </div>

          {/* Horizontal line with flowing animation */}
          <div className="relative">
            <style jsx>{`
              @keyframes flowIndustry {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="#00A651" strokeWidth="2" strokeDasharray="8 4"
                style={{ animation: 'flowIndustry 8s linear infinite' }} />
            </svg>
          </div>

          {/* Cards grid with vertical connector lines */}
          <div className="relative">
            {/* Vertical lines from horizontal line to center of each card */}
            <div className="hidden lg:block absolute top-0 left-[12.5%] w-px h-8" style={{ background: '#00A651' }} />
            <div className="hidden lg:block absolute top-0 left-[37.5%] w-px h-8" style={{ background: '#00A651' }} />
            <div className="hidden lg:block absolute top-0 left-[62.5%] w-px h-8" style={{ background: '#00A651' }} />
            <div className="hidden lg:block absolute top-0 left-[87.5%] w-px h-8" style={{ background: '#00A651' }} />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {[
                {
                  name: 'Financial Services',
                  agents: ['Compliance monitoring', 'Fraud detection', 'Customer onboarding'],
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  ),
                },
                {
                  name: 'Healthcare',
                  agents: ['Clinical documentation', 'Appointment scheduling', 'Patient follow-up'],
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  ),
                },
                {
                  name: 'Government',
                  agents: ['Citizen inquiry', 'Document processing', 'Policy research'],
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                  ),
                },
                {
                  name: 'Manufacturing',
                  agents: ['Quality inspection', 'Maintenance scheduling', 'Supply chain'],
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  ),
                },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ background: 'var(--white)', border: '1px solid var(--gray-100)' }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 166, 81, 0.1)' }}>
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-dark-900 mb-4 text-lg">{industry.name}</h3>
                  <div className="space-y-2">
                    {industry.agents.map((agent, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-green-50" style={{ background: '#F5F3F0' }}>
                        <div className="w-2 h-2 rounded-full" style={{ background: '#00A651' }} />
                        <span className="text-sm text-dark-700 font-medium">{agent}</span>
                      </div>
                    ))}
                  </div>
                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Agents - Animated Branching */}
      <section className="py-16" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-4">
            <h2 className="h2 mb-4">Why organizations deploy AI agents</h2>
            <p className="text-body max-w-2xl mx-auto">
              AI agents transform how enterprises operate, bringing autonomous intelligence to every workflow
            </p>
          </div>
          <BranchingFromTitle items={whyAgents} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-md text-center">
          <h2 className="h1 mb-6">
            Ready to deploy
            <br />
            <span style={{ color: 'var(--green)' }}>AI agents?</span>
          </h2>
          <p className="text-large mb-10 max-w-xl mx-auto">
            Tell us about your workflow challenges and we'll design agents that solve them
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start your agent project
            </Link>
            <Link href="/solutions" className="btn-secondary">
              View all AI solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
