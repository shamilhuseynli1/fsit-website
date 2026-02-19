'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export default function AIAgents() {
  const agentTypes = [
    {
      title: 'Task Automation Agents',
      description: 'Autonomous agents that handle repetitive tasks, data processing, and workflow automation without human intervention.',
      useCases: ['Document processing', 'Data entry automation', 'Report generation', 'Email triage'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Decision Support Agents',
      description: 'Intelligent agents that analyze data, surface insights, and provide recommendations to support human decision-making.',
      useCases: ['Risk assessment', 'Investment analysis', 'Resource allocation', 'Strategic planning'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Conversational Agents',
      description: 'AI-powered assistants and copilots that interact naturally with users, answer questions, and guide through processes.',
      useCases: ['Customer support', 'Employee helpdesk', 'Onboarding assistants', 'Knowledge Q&A'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Multi-Agent Systems',
      description: 'Coordinated networks of specialized agents that work together to solve complex, multi-step problems.',
      useCases: ['Research automation', 'Complex workflows', 'Parallel processing', 'System orchestration'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const capabilities = [
    { title: 'Tool Use & API Integration', desc: 'Agents that can call APIs, query databases, and use external tools' },
    { title: 'Memory & Context', desc: 'Long-term memory for persistent context across interactions' },
    { title: 'Reasoning & Planning', desc: 'Multi-step reasoning to break down complex tasks' },
    { title: 'Self-Correction', desc: 'Ability to detect errors and adjust approach autonomously' },
    { title: 'Human-in-the-Loop', desc: 'Escalation to humans for high-stakes decisions' },
    { title: 'Observability', desc: 'Full audit trails and explainability of agent actions' },
  ];

  const industries = [
    {
      name: 'Financial Services',
      agents: ['Compliance monitoring agent', 'Fraud detection agent', 'Customer onboarding agent'],
    },
    {
      name: 'Healthcare',
      agents: ['Clinical documentation agent', 'Appointment scheduling agent', 'Patient follow-up agent'],
    },
    {
      name: 'Government',
      agents: ['Citizen inquiry agent', 'Document processing agent', 'Policy research agent'],
    },
    {
      name: 'Manufacturing',
      agents: ['Quality inspection agent', 'Maintenance scheduling agent', 'Supply chain agent'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your workflows to identify high-impact automation opportunities',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Architect the agent system with appropriate tools, memory, and guardrails',
    },
    {
      step: '03',
      title: 'Build',
      description: 'Develop and train agents using your data and business logic',
    },
    {
      step: '04',
      title: 'Test',
      description: 'Rigorous testing with edge cases, failure modes, and human oversight',
    },
    {
      step: '05',
      title: 'Deploy',
      description: 'Production deployment with monitoring, logging, and continuous improvement',
    },
  ];

  const differentiators = [
    {
      title: 'Tailored, Use-Case-Driven',
      description: 'Custom AI agents built for your specific workflows — not generic tools that need heavy customization.',
    },
    {
      title: 'Works Within Your Processes',
      description: 'Agents designed to integrate with your existing business processes rather than requiring you to change.',
    },
    {
      title: '98% Production Success',
      description: 'We don\'t build demos. Our agents are designed for reliability, scale, and real-world production.',
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'SOC2, GDPR, and industry-specific compliance built in. Governance and audit trails included.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-dark bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        {/* Saudi Riyadh Skyline Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://source.unsplash.com/9cbkE8kNUBA/1920x1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <NetworkBackground nodeCount={70} maxDistance={130} />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow-pulse" />

        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-4 md:!mb-6 animate-fade-in">AI Agents</p>
            <h1 className="hero-title text-white animate-fade-in-up text-3xl md:text-5xl lg:text-6xl">
              Autonomous AI<br />
              <span className="text-primary-500 text-glow">That Takes Action</span>
            </h1>
            <p className="hero-subtitle text-base md:text-lg lg:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Custom AI agents that automate workflows, make decisions, and integrate with your enterprise systems — built to work within your existing business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/contact" className="btn-primary text-center">
                Discuss your use case
              </Link>
              <Link href="/solutions" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900 text-center">
                Explore AI solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Are AI Agents */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Beyond Chatbots</p>
              <h2 className="section-title">What Are AI Agents?</h2>
              <p className="text-dark-500 mb-6">
                AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional chatbots that only respond to queries, agents can:
              </p>
              <ul className="space-y-3">
                {[
                  'Execute multi-step tasks independently',
                  'Use tools and APIs to interact with systems',
                  'Maintain context and memory across sessions',
                  'Reason through complex problems',
                  'Know when to escalate to humans',
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
            <div className="bg-neutral-150 rounded-2xl p-8 border border-neutral-200">
              <h3 className="font-semibold text-dark-900 mb-6">Agent vs Chatbot</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-medium text-dark-400 mb-2">Traditional Chatbot</p>
                  <p className="text-dark-700">"Here's information about your order status..."</p>
                </div>
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="bg-primary-500/10 rounded-lg p-4 border-2 border-primary-500">
                  <p className="text-sm font-medium text-primary-600 mb-2">AI Agent</p>
                  <p className="text-dark-700">"I've checked your order, contacted the carrier, updated the delivery date, and sent you a confirmation email."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Types */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Agent Types</p>
            <h2 className="section-title">AI Agents We Build</h2>
            <p className="section-subtitle mx-auto">
              Tailored agents designed for specific enterprise use cases and workflows
            </p>
          </div>

          <div className="grid-2">
            {agentTypes.map((agent, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
                    {agent.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-900 mb-2">{agent.title}</h3>
                    <p className="text-dark-500 text-sm mb-4">{agent.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.useCases.map((useCase, i) => (
                        <span key={i} className="text-xs bg-neutral-150 text-dark-600 px-2 py-1 rounded">
                          {useCase}
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

      {/* Core Capabilities */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label !text-primary-500">Core Capabilities</p>
            <h2 className="section-title !text-white">Built for Real-World Complexity</h2>
            <p className="section-subtitle mx-auto !text-dark-300">
              Enterprise-grade capabilities that enable agents to operate reliably in production
            </p>
          </div>

          <div className="grid-3">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500 transition-all">
                <h3 className="font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-dark-400 text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Industry Applications</p>
            <h2 className="section-title">Agents Across Verticals</h2>
            <p className="section-subtitle mx-auto">
              Purpose-built agents tailored to industry-specific workflows and compliance requirements
            </p>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-dark-900 mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.agents.map((agent, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-dark-600">
                      <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {agent}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Our Process</p>
            <h2 className="section-title">How We Build AI Agents</h2>
            <p className="section-subtitle mx-auto">
              A rigorous process that ensures agents are reliable, safe, and effective
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-dark-500 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FSIT */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Why FSIT</p>
            <h2 className="section-title">Enterprise AI Agents Done Right</h2>
          </div>

          <div className="grid-2">
            {differentiators.map((diff, index) => (
              <div key={index} className="feature-box">
                <h3 className="text-lg font-semibold text-dark-900 mb-2">{diff.title}</h3>
                <p className="text-dark-500">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Arabia Presence Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://source.unsplash.com/9cbkE8kNUBA/1920x1080"
                alt="Riyadh Saudi Arabia cityscape"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm">AI Agents Deployed in KSA</p>
              </div>
            </div>
            <div>
              <p className="section-label">Powering Saudi Arabia</p>
              <h2 className="section-title">AI Agents for the Kingdom</h2>
              <p className="text-dark-500 mb-6">
                Our AI agents are actively transforming operations across Saudi government entities and enterprises, aligned with Vision 2030 digital transformation goals.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-100 rounded-xl p-4">
                  <p className="font-bold text-dark-900">Government</p>
                  <p className="text-sm text-dark-500">Citizen services automation</p>
                </div>
                <div className="bg-neutral-100 rounded-xl p-4">
                  <p className="font-bold text-dark-900">Banking</p>
                  <p className="text-sm text-dark-500">Financial process agents</p>
                </div>
                <div className="bg-neutral-100 rounded-xl p-4">
                  <p className="font-bold text-dark-900">Healthcare</p>
                  <p className="text-sm text-dark-500">Patient engagement AI</p>
                </div>
                <div className="bg-neutral-100 rounded-xl p-4">
                  <p className="font-bold text-dark-900">Energy</p>
                  <p className="text-sm text-dark-500">Operations automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://source.unsplash.com/PYOHfWTYkzA/1920x1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container-max text-center relative z-10">
          <h2 className="section-title !text-white mb-4">
            Ready to deploy AI agents?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
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
