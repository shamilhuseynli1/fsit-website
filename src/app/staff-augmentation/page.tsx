'use client';

import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import NetworkBackground from '@/components/NetworkBackground';
import HeroStaffVisual from '@/components/HeroStaffVisual';

export default function StaffAugmentation() {
  const benefits = [
    {
      title: 'Flexibility & Scalability',
      description: 'Scale your team up or down based on project demands. Add specialists when needed, reduce when requirements change.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
    },
    {
      title: 'Cost Efficiency',
      description: 'Eliminate recruitment costs, training overhead, and infrastructure expenses. Pay only for the expertise you need.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Full Control',
      description: 'Maintain complete oversight of your augmented team. Direct communication, aligned processes, and integrated workflows.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
    },
    {
      title: 'Rapid Deployment',
      description: 'Get pre-vetted AI specialists integrated into your team within days, not months. Hit the ground running.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ];

  const engagementModels = [
    {
      title: 'Dedicated Teams',
      description: 'A fully committed remote team that functions as an extension of your in-house team. Ideal for long-term product development and ongoing AI initiatives.',
      features: ['Long-term commitment', 'Full integration', 'Dedicated resources', 'Direct management'],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      title: 'Team Extension',
      description: 'Add specific AI specialists to your existing team to fill skill gaps. Perfect for projects requiring niche expertise.',
      features: ['Skill gap filling', 'Flexible duration', 'Specialized roles', 'Quick onboarding'],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
    },
    {
      title: 'Project-Based',
      description: 'Engage a team for specific deliverables with defined scope and timeline. Best for proof-of-concepts and discrete projects.',
      features: ['Defined scope', 'Fixed timeline', 'Deliverable-focused', 'Clear milestones'],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
  ];

  const specialists = [
    {
      role: 'AI Engineers',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 15.5m14.8-.2l.9 3.9a.75.75 0 01-.542.896A13.46 13.46 0 0112 21a13.46 13.46 0 01-8.158-1.404.75.75 0 01-.542-.896l.9-3.9" />
        </svg>
      ),
    },
    {
      role: 'ML Engineers',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      role: 'Data Scientists',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      role: 'MLOps Engineers',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      role: 'NLP Specialists',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
    },
    {
      role: 'Computer Vision',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[auto] md:min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?auto=format&fit=crop&w=1920&q=80)' }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Network pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="networkPatternStaff" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#22c55e" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#networkPatternStaff)" />
          </svg>
        </div>

        <AnimatedBackground />
        <NetworkBackground nodeCount={50} maxDistance={120} />

        <div className="relative container-max pt-36 pb-4 md:py-36">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                AI Staff{' '}
                <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  Augmentation
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-white mb-6 md:mb-8 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Scale your AI capabilities with pre-vetted specialists who integrate seamlessly into your existing teams
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <Link
                  href="/build-scale-ai"
                  className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  Get Started
                </Link>
                <Link
                  href="/how-we-vet"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-900 transition-all duration-300 text-base md:text-lg"
                >
                  Our Vetting Process
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-green-400">80K+</div>
                  <div className="text-white/80 text-xs md:text-sm">AI Specialists</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-green-400">Top 1%</div>
                  <div className="text-white/80 text-xs md:text-sm">Vetted Talent</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-green-400 whitespace-nowrap">3 weeks</div>
                  <div className="text-white/80 text-xs md:text-sm">Deployment</div>
                </div>
              </div>
            </div>

            {/* Hero Visual - scaled on mobile */}
            <div className="mt-2 lg:mt-0 transform scale-[0.75] md:scale-100 origin-top -mb-16 md:mb-0">
              <HeroStaffVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section-sm" style={{ background: 'var(--cream)', borderTop: '1px solid var(--neutral-200)', borderBottom: '1px solid var(--neutral-200)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">80K+</p>
              <p className="text-dark-500 mt-2">AI Specialists</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">98%</p>
              <p className="text-dark-500 mt-2">Client Retention</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">3 weeks</p>
              <p className="text-dark-500 mt-2">Average Deployment</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">Top 1%</p>
              <p className="text-dark-500 mt-2">Vetted Talent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Specialists */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              AI Specialists Ready to Join Your Team
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              From machine learning engineers to MLOps specialists, find the exact expertise your project needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialists.map((spec, index) => (
              <div
                key={index}
                className="group rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ background: 'var(--cream)', border: '1px solid var(--gray-100)' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: '#00A651' }}
                >
                  {spec.icon}
                </div>
                <p className="font-semibold text-base group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>{spec.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Benefits of FSIT Staff Augmentation</h2>
          </div>

          {/* Flowing line animation with branches - hidden on mobile */}
          <div className="relative mb-8 hidden md:block">
            <style jsx>{`
              @keyframes flowBenefitDown1 {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -200; }
              }
            `}</style>
            <svg className="w-full h-32 pointer-events-none" viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet">
              {/* Main horizontal line - gray only */}
              <line x1="50" y1="20" x2="950" y2="20" stroke="#d1d5db" strokeWidth="2" />

              {/* Vertical branch 1 */}
              <line x1="125" y1="20" x2="125" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="125" y1="20" x2="125" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowBenefitDown1 2s ease-in-out infinite' }} />

              {/* Vertical branch 2 */}
              <line x1="375" y1="20" x2="375" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="375" y1="20" x2="375" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowBenefitDown1 2s ease-in-out infinite', animationDelay: '0.3s' }} />

              {/* Vertical branch 3 */}
              <line x1="625" y1="20" x2="625" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="625" y1="20" x2="625" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowBenefitDown1 2s ease-in-out infinite', animationDelay: '0.6s' }} />

              {/* Vertical branch 4 */}
              <line x1="875" y1="20" x2="875" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="875" y1="20" x2="875" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowBenefitDown1 2s ease-in-out infinite', animationDelay: '0.9s' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:-mt-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ background: 'var(--white)', border: '1px solid var(--gray-100)' }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(0, 166, 81, 0.1)' }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {benefit.title}
                </h3>
                <p className="text-base text-center" style={{ color: 'var(--gray-600)' }}>{benefit.description}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(0, 166, 81, 0.03) 0%, transparent 50%)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              Engagement Models
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Choose the engagement model that best fits your project requirements and organizational needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="group relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center md:text-left"
                style={{ background: 'var(--cream)', border: '1px solid var(--gray-100)' }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 mx-auto md:mx-0"
                  style={{ background: 'rgba(0, 166, 81, 0.1)' }}
                >
                  {model.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {model.title}
                </h3>
                <p className="text-base mb-6" style={{ color: 'var(--gray-600)' }}>{model.description}</p>

                <div className="space-y-2 inline-block text-left">
                  {model.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--green)' }} />
                      <span className="text-base" style={{ color: 'var(--gray-700)' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(0, 166, 81, 0.05) 0%, transparent 50%)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>How Staff Augmentation Works</h2>
          </div>

          {/* Flowing line animation with branches - hidden on mobile */}
          <div className="relative mb-8 hidden md:block">
            <style jsx>{`
              @keyframes flowHowDown {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -200; }
              }
            `}</style>
            <svg className="w-full h-32 pointer-events-none" viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet">
              {/* Main horizontal line */}
              <line x1="50" y1="20" x2="950" y2="20" stroke="#d1d5db" strokeWidth="2" />

              {/* Vertical branches */}
              <line x1="125" y1="20" x2="125" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="125" y1="20" x2="125" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowHowDown 2s ease-in-out infinite' }} />

              <line x1="375" y1="20" x2="375" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="375" y1="20" x2="375" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowHowDown 2s ease-in-out infinite', animationDelay: '0.3s' }} />

              <line x1="625" y1="20" x2="625" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="625" y1="20" x2="625" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowHowDown 2s ease-in-out infinite', animationDelay: '0.6s' }} />

              <line x1="875" y1="20" x2="875" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="875" y1="20" x2="875" y2="110" stroke="#00A651" strokeWidth="2"
                strokeDasharray="30 170"
                style={{ animation: 'flowHowDown 2s ease-in-out infinite', animationDelay: '0.9s' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:-mt-4">
            {[
              {
                title: 'Define Requirements',
                description: 'Share your project needs, required skills, and team dynamics',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                ),
              },
              {
                title: 'Match Specialists',
                description: 'We identify pre-vetted AI professionals that fit your needs',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
              {
                title: 'Interview & Select',
                description: 'Review candidates and select the best fit for your team',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
              },
              {
                title: 'Seamless Integration',
                description: 'Specialists integrate into your team and start contributing',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#00A651" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ background: 'var(--white)', border: '1px solid var(--gray-100)' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(0, 166, 81, 0.1)' }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {item.title}
                </h3>
                <p className="text-base text-center" style={{ color: 'var(--gray-600)' }}>{item.description}</p>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(0, 166, 81, 0.03) 0%, transparent 50%)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-b from-cream-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
            Ready to scale your AI team?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            Get access to pre-vetted AI specialists who can start contributing from day one
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/build-scale-ai"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
            >
              Start Hiring
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/how-we-vet"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-500/50 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all duration-300"
            >
              Learn About Our Vetting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
