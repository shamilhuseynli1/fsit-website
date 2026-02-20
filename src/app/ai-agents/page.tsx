'use client';

import { useState } from 'react';
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import AnimatedBackground from '@/components/AnimatedBackground';
import AgentCardEnhanced from '@/components/AgentCardEnhanced';
import HeroAgentVisual from '@/components/HeroAgentVisual';

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
  { title: 'Tool Use & API Integration', desc: 'Agents that can call APIs, query databases, and use external tools', icon: '🔧' },
  { title: 'Memory & Context', desc: 'Long-term memory for persistent context across interactions', icon: '🧠' },
  { title: 'Reasoning & Planning', desc: 'Multi-step reasoning to break down complex tasks', icon: '📊' },
  { title: 'Self-Correction', desc: 'Ability to detect errors and adjust approach autonomously', icon: '🔄' },
  { title: 'Human-in-the-Loop', desc: 'Escalation to humans for high-stakes decisions', icon: '👤' },
  { title: 'Observability', desc: 'Full audit trails and explainability of agent actions', icon: '👁️' },
];

export default function AIAgents() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-primary-400 text-sm font-medium">AI Agents</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Autonomous AI<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-400">
                  That Takes Action
                </span>
              </h1>

              <p className="text-lg text-neutral-300 mb-8 leading-relaxed max-w-xl">
                Custom AI agents that automate workflows, make decisions, and integrate with your enterprise systems — built to work within your existing business processes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Discuss your use case
                </Link>
                <Link href="/solutions" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900 text-center">
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
                    <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-400">
                      {stat.value}
                    </p>
                    <p className="text-sm text-neutral-500">{stat.label}</p>
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
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 border border-dark-700 rounded-full mb-6">
              <span className="text-neutral-400 text-sm">Agent Types</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Agents We Build
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
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
      <section className="relative py-24 bg-dark-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent" />

        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700 border border-dark-600 rounded-full mb-6">
              <span className="text-neutral-400 text-sm">Core Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Real-World Complexity
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Enterprise-grade capabilities that enable agents to operate reliably in production
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group relative bg-dark-900/50 backdrop-blur-sm border border-dark-700 rounded-xl p-6
                           hover:border-primary-500/50 transition-all duration-300
                           hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-neutral-400 text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent vs Chatbot Visual */}
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 border border-dark-700 rounded-full mb-6">
                <span className="text-neutral-400 text-sm">Beyond Chatbots</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Makes an Agent Different?
              </h2>
              <p className="text-neutral-300 mb-8">
                AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional chatbots that only respond to queries, agents can execute complex workflows independently.
              </p>
              <div className="space-y-3">
                {[
                  'Execute multi-step tasks independently',
                  'Use tools and APIs to interact with systems',
                  'Maintain context and memory across sessions',
                  'Reason through complex problems',
                  'Know when to escalate to humans',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-dark-800/60 p-4 rounded-xl border border-dark-700 hover:border-primary-500/40 transition-all">
                    <span className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-500 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-primary-500/20 flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-neutral-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual comparison */}
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
              <h3 className="font-semibold text-white mb-6 text-center">Agent vs Chatbot</h3>
              <div className="space-y-6">
                <div className="bg-dark-900 rounded-xl p-6 border border-dark-600">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-neutral-400">Traditional Chatbot</span>
                  </div>
                  <p className="text-neutral-300">"Here's information about your order status..."</p>
                </div>

                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-primary-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                <div className="bg-gradient-to-br from-primary-500/10 to-primary-500/10 rounded-xl p-6 border-2 border-primary-500/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-primary-400">AI Agent</span>
                  </div>
                  <p className="text-neutral-200">"I've checked your order, contacted the carrier, updated the delivery date, and sent you a confirmation email."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="relative py-24 bg-dark-800 overflow-hidden">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700 border border-dark-600 rounded-full mb-6">
              <span className="text-neutral-400 text-sm">Industry Applications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Agents Across Verticals
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Purpose-built agents tailored to industry-specific workflows and compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Financial Services',
                agents: ['Compliance monitoring', 'Fraud detection', 'Customer onboarding'],
                color: 'from-green-500 to-primary-400',
              },
              {
                name: 'Healthcare',
                agents: ['Clinical documentation', 'Appointment scheduling', 'Patient follow-up'],
                color: 'from-primary-500 to-primary-400',
              },
              {
                name: 'Government',
                agents: ['Citizen inquiry', 'Document processing', 'Policy research'],
                color: 'from-primary-600 to-primary-500',
              },
              {
                name: 'Manufacturing',
                agents: ['Quality inspection', 'Maintenance scheduling', 'Supply chain'],
                color: 'from-orange-500 to-gold-500',
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="group bg-dark-900 rounded-xl p-6 border border-dark-700 hover:border-dark-600 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} opacity-80 flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-4">{industry.name}</h3>
                <div className="space-y-2">
                  {industry.agents.map((agent, i) => (
                    <div key={i} className="flex items-center gap-3 bg-dark-800/60 p-2.5 rounded-lg border border-dark-700/50 hover:border-primary-500/30 transition-all">
                      <span className="w-6 h-6 bg-gradient-to-br from-primary-500/80 to-primary-400/80 rounded-md flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span className="text-sm text-neutral-300">{agent}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-900/20" />

        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to deploy AI agents?
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
            Tell us about your workflow challenges and we'll design agents that solve them
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start your agent project
            </Link>
            <Link href="/solutions" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
              View all AI solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
