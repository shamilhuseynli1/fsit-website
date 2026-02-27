'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BranchingList from '@/components/BranchingList';
import BranchingFromTitle from '@/components/BranchingFromTitle';
import ProcessFlow from '@/components/ProcessFlow';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expertFilter, setExpertFilter] = useState('saudi');
  const [heroImage, setHeroImage] = useState('/hero-riyadh.jpg');
  const [isNight, setIsNight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Automatic day/night image switching based on local time
  useEffect(() => {
    const updateHeroImage = () => {
      const hour = new Date().getHours();
      // Night: 6 PM (18:00) to 6 AM (05:59)
      const isNightTime = hour >= 18 || hour < 6;
      setIsNight(isNightTime);
      if (isNightTime) {
        setHeroImage('https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?auto=format&fit=crop&w=1920&q=80');
      } else {
        setHeroImage('/hero-riyadh.jpg');
      }
    };

    updateHeroImage();
    // Update every minute to catch day/night transition
    const interval = setInterval(updateHeroImage, 60000);
    return () => clearInterval(interval);
  }, []);

  const capabilities = [
    {
      title: 'Cut Costs by 40%+',
      desc: 'Automate repetitive tasks and reduce manual processing time',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Deploy in Weeks, Not Months',
      desc: 'Get AI into production faster with our proven frameworks',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Scale Without Hiring',
      desc: 'Access 80K+ pre-vetted AI experts on demand',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Enterprise-Grade Security',
      desc: 'Meet compliance requirements with built-in governance',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
  ];

  const stats = [
    { number: '80K+', label: 'Elite talent in network' },
    { number: '50+', label: 'Businesses served' },
    { number: '100%', label: 'Vetted experts' },
    { number: '98%', label: 'Client retention' },
  ];

  const processSteps = [
    { num: 'Week 1', title: 'Discover & Plan', desc: 'We assess your needs, define success metrics, and create a roadmap' },
    { num: 'Week 2', title: 'Build & Deploy', desc: 'Our team builds your AI solution and integrates it with your systems' },
    { num: 'Week 3', title: 'Launch & Optimize', desc: 'Go live with support, monitoring, and continuous improvement' },
  ];

  const clients = [
    { name: 'Riyad Capital', logo: '/clients/riyad capital.png', url: 'https://www.riyadcapital.com/en/', category: 'financial' },
    { name: 'Ministry of Health', logo: '/clients/Ministry-of-Health-Saudi-Arabia-Vertical-Logo-Vector.svg-.png', url: 'https://www.moh.gov.sa/en', category: 'government' },
    { name: 'Arab Bank', logo: '/clients/Arab_Bank.svg.png', url: 'https://www.arabbank.com/', category: 'financial' },
    { name: 'Tadawul', logo: '/clients/logo-tadawul-saudi-stock-market-transparent-PNG.png', url: 'https://www.saudiexchange.sa/', category: 'financial' },
    { name: 'NCB Capital', logo: '/clients/ncb capital.png', url: 'https://www.alahlicapital.com/', category: 'financial' },
    { name: 'Vision 2030', logo: '/clients/Logo-saudi-vision-2030-download-free-PNG.png', url: 'https://www.vision2030.gov.sa/', category: 'government' },
    { name: 'Jadwa Investment', logo: '/clients/jadwa.png', url: 'https://www.jadwa.com/', category: 'pif' },
    { name: 'GOSI', logo: '/clients/Saudi_GOSI_Logo.svg.png', url: 'https://www.gosi.gov.sa/', category: 'government' },
    { name: 'Emirates NBD', logo: '/clients/Emirates_NBD_logo_arabic.png', url: 'https://www.emiratesnbd.com.sa/', category: 'financial' },
    { name: 'Elm', logo: '/clients/elm.png', url: 'https://www.elm.sa/en', category: 'pif' },
    { name: 'Bank Al Jazira', logo: '/clients/Aljazira_Bank_Logo.svg.png', url: 'https://www.bankaljazira.com/en-us', category: 'financial' },
    { name: 'Blom Bank', logo: '/clients/BLOM-Bank-logo.png', url: 'https://www.blombank.com/', category: 'financial' },
    { name: 'Ministry of Finance', logo: '/clients/Ministry_of_finance_new_logo.svg.png', url: 'https://www.mof.gov.sa/', category: 'government' },
    { name: 'Ministry of Transport', logo: '/clients/MOT-2.png', url: 'https://www.mot.gov.sa/', category: 'government' },
    { name: 'Ministry of Culture', logo: '/clients/Saudi_Ministry_of_Culture_Logo.svg', url: 'https://www.moc.gov.sa/', category: 'government' },
    { name: 'PwC', logo: '/clients/PwC_Company_Logo.svg.png', url: 'https://www.pwc.com/', category: 'consulting' },
  ];

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'government', label: 'Government' },
    { id: 'financial', label: 'Financial' },
    { id: 'pif', label: 'PIF Companies' },
  ];

  const filteredClients = activeFilter === 'all'
    ? clients
    : clients.filter(c => c.category === activeFilter);

  const experts = [
    // Saudi Experts
    { name: 'Mohammed Al-Anazi', nameAr: 'محمد العنزي', role: 'AI Strategy Lead', location: 'Riyadh', specialty: 'NLP & Machine Learning', image: '/experts/amir.jpg', isSaudi: true },
    { name: 'Sarah Haddad', nameAr: 'سارة حداد', role: 'Data Science Manager', location: 'Jeddah', specialty: 'Predictive Analytics', image: '/experts/sarah.jpg', isSaudi: true },
    { name: 'Khalid Rahman', nameAr: 'خالد رحمان', role: 'ML Solutions Architect', location: 'Riyadh', specialty: 'Python, PyTorch', image: '/experts/james.jpg', isSaudi: true },
    { name: 'Nora Al-Shehri', nameAr: 'نورة الشهري', role: 'AI Product Lead', location: 'KAUST', specialty: 'Computer Vision', image: '/experts/leila.jpg', isSaudi: true },
    // International Experts
    { name: 'Daniel Kim', nameAr: '', role: 'Principal AI Research Scientist', location: 'Singapore', specialty: 'Deep Learning, NLP', image: '/experts/daniel.jpg', isSaudi: false },
    { name: 'Sofia Petrović', nameAr: '', role: 'Senior AI UX Designer', location: 'Berlin', specialty: 'AI/ML Design, UX', image: '/experts/sofia.jpg', isSaudi: false },
    { name: 'Hannah Nguyen', nameAr: '', role: 'AI Infrastructure & MLOps Director', location: 'London', specialty: 'MLOps, Cloud', image: '/experts/hannah.jpg', isSaudi: false },
    { name: 'Mateo Rossi', nameAr: '', role: 'Computer Vision Lead', location: 'Milan', specialty: 'Computer Vision, PyTorch', image: '/experts/mateo.jpg', isSaudi: false },
  ];

  const whyFsit = [
    'AI-first augmented intelligence model',
    'Proven delivery in enterprise and government',
    'Hybrid approach with embedded talent',
    'Faster execution than consulting firms',
    'Focus on measurable outcomes',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt={isNight ? "Riyadh Skyline at Night - Saudi Arabia" : "Riyadh Skyline - Saudi Arabia"}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />
        {/* Overlay for text contrast - darker on mobile for readability */}
        <div className={`absolute inset-0 transition-colors duration-1000 ${isNight ? 'bg-black/60 md:bg-black/60' : 'bg-black/65 md:bg-black/50'}`} />

        <div className="container-lg relative py-32 lg:py-40">
          <div className="max-w-5xl">
            {/* Small tagline */}
            <p className="text-sm md:text-base font-bold tracking-widest uppercase mb-6" style={{ color: 'var(--green)' }}>
              AI Transformation Partner
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-10 leading-[1.05] tracking-tight text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)' }}>
              Augmented Intelligence
              <br />
              <span style={{ color: 'var(--green)', textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)' }}>Human + Machine</span>
            </h1>

            <div className="mb-14 max-w-4xl">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)' }}>Pioneering AI transformation across Saudi Arabia and the Middle East</p>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 3px 8px rgba(0,0,0,0.3)' }}>AI-native teams delivering production-ready systems across government and enterprise since 2012</p>
            </div>

            <div className="flex flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start">
              <Link href="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is FSIT - Strong Sales Narrative */}
      <section id="what-is-fsit" className="py-10 md:py-14" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          {/* Hero headline with proof */}
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--black)' }}>
              Get AI Into Production,<br />
              <span style={{ color: 'var(--green)' }}>Not Stuck in Pilots</span>
            </h2>
            <p className="text-lg md:text-xl" style={{ color: 'var(--gray-600)' }}>
              We build, scale, and operate AI systems that deliver measurable business results—backed by <strong>50+ successful deployments</strong> across Saudi Arabia and the Middle East.
            </p>
          </div>

          {/* 3 Core Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'AI Systems & Solutions',
                outcome: 'Go from idea to production in weeks',
                desc: 'Custom AI applications, ML models, and intelligent automation that integrate with your existing systems.',
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Consulting & Talent',
                outcome: 'Scale your team without hiring delays',
                desc: 'Pre-vetted AI engineers, data scientists, and ML specialists ready to embed in your organization.',
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: 'AI Operations',
                outcome: 'Keep AI running reliably 24/7',
                desc: 'Managed services, monitoring, and optimization to ensure your AI delivers continuous value.',
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((service, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 border"
                style={{
                  background: 'var(--white)',
                  borderColor: 'var(--gray-200)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'var(--green)' }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--black)' }}>{service.title}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--green)' }}>{service.outcome}</p>
                <p className="text-sm" style={{ color: 'var(--gray-600)' }}>{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center">
            <Link href="/solutions" className="btn-primary">
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      {/* Why FSIT */}
      <section className="py-10 md:py-14" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: 'var(--black)' }}>
              Why FSIT?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyFsit.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#00A651]/20 hover:border-[#00A651] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--green)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base font-medium" style={{ color: 'var(--black)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-8 border-y" style={{ background: '#F5F5F3', borderColor: 'var(--gray-100)' }}>
        <div className="container-lg mb-4">
          <p className="text-lg font-semibold text-center mb-4" style={{ color: 'var(--gray-600)' }}>Trusted by leading organizations</p>
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
                style={{
                  background: activeFilter === tab.id ? 'var(--green)' : 'white',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="logo-marquee-wrapper">
          {filteredClients.length <= 5 ? (
            /* Static centered layout for few clients */
            <div className="flex justify-center flex-wrap gap-8 md:gap-12 px-6">
              {filteredClients.map((client, index) => (
                <a
                  key={index}
                  href={client.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 w-24 md:w-36"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={144}
                    height={80}
                    className="object-contain max-h-14 md:max-h-16"
                  />
                </a>
              ))}
            </div>
          ) : (
            <>
              {/* Mobile: Manual scroll with fade edges */}
              <div className="md:hidden relative overflow-hidden">
                {/* Scrollable content */}
                <div
                  className="overflow-x-auto scrollbar-hide"
                  onScroll={(e) => {
                    const arrow = e.currentTarget.parentElement?.querySelector('.scroll-arrow');
                    if (arrow) {
                      if (e.currentTarget.scrollLeft > 10) {
                        arrow.classList.add('opacity-0');
                      } else {
                        arrow.classList.remove('opacity-0');
                      }
                    }
                  }}
                >
                  <div className="flex flex-row flex-nowrap gap-8 px-6" style={{ width: 'max-content' }}>
                    {filteredClients.map((client, index) => (
                      <a
                        key={index}
                        href={client.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{ width: '100px', height: '50px' }}
                      >
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={100}
                          height={50}
                          className="object-contain"
                          style={{ maxWidth: '100px', maxHeight: '50px' }}
                        />
                      </a>
                    ))}
                  </div>
                </div>
                {/* Right fade */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none"
                  style={{ background: 'linear-gradient(to left, rgba(245,245,243,1) 0%, rgba(245,245,243,0) 100%)' }}
                />
                {/* Scroll arrow indicator */}
                <div className="scroll-arrow absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300">
                  <div className="animate-bounce-x flex items-center gap-1 text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Desktop: Auto scroll */}
              <div className="hidden md:block overflow-hidden w-full">
                <div className="flex gap-12 w-fit animate-marquee">
                  {[...filteredClients, ...filteredClients].map((client, index) => (
                    <a
                      key={index}
                      href={client.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-36 h-14 flex items-center justify-center"
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={144}
                        height={56}
                        className="object-contain w-full h-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        {/* Client Stats Counter */}
        <div className="container-lg mt-6">
          <div className="flex flex-row justify-center items-center gap-6 md:gap-12 text-center">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-2xl md:text-4xl font-bold" style={{ color: 'var(--green)' }}>50+</span>
              <span className="text-xs md:text-base" style={{ color: 'var(--gray-500)' }}>Clients</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block" />
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-2xl md:text-4xl font-bold" style={{ color: 'var(--green)' }}>50+</span>
              <span className="text-xs md:text-base" style={{ color: 'var(--gray-500)' }}>PIF Entities</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block" />
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-center">
              <span className="text-2xl md:text-4xl font-bold whitespace-nowrap" style={{ color: 'var(--green)' }}>5B+ SAR</span>
              <span className="text-xs md:text-base" style={{ color: 'var(--gray-500)' }}>Project Value</span>
            </div>
          </div>
        </div>
      </section>

      {/* Globally Recognized Technologies */}
      <section className="py-10 md:py-12" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--black)' }}>Technologies We Use</h2>
          </div>

          {/* Technology Categories */}
          <div className="flex flex-wrap justify-center gap-3 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4">
            {[
              {
                title: 'Cloud & AI Platforms',
                logos: [
                  { name: 'AWS', src: '/tools/Amazon_Web_Services_Logo.svg.png' },
                  { name: 'Azure', src: '/tools/Microsoft_Azure.svg.png' },
                  { name: 'Google Cloud', src: '/tools/gcp.svg' }
                ]
              },
              {
                title: 'LLMs',
                titleFull: 'Large Language Models',
                logos: [
                  { name: 'OpenAI', src: '/tools/openai.svg' },
                  { name: 'Anthropic', src: '/tools/anthropic-icon-tdvkiqisswbrmtkiygb0ia.webp' },
                  { name: 'Meta', src: '/tools/meta-logo-facebook.svg' }
                ]
              },
              {
                title: 'Data & BI Platforms',
                logos: [
                  { name: 'Tableau', src: '/tools/tableau-software.svg' },
                  { name: 'Databricks', src: '/tools/Databricks-Emblem.png' },
                  { name: 'Power BI', src: '/tools/New_Power_BI_Logo.svg.png' }
                ]
              },
              {
                title: 'AI Deployment',
                logos: [
                  { name: 'MLflow', src: '/tools/mlflow.png' },
                  { name: 'Kubernetes', src: '/tools/Kubernetes_logo_without_workmark.svg.png' },
                  { name: 'Docker', src: '/tools/Docker-svgrepo-com.svg.png' }
                ]
              },
              {
                title: 'Enterprise Security',
                logos: [
                  { name: 'Okta', src: '/tools/Okta_logo.svg.png' },
                  { name: 'Auth0', src: '/tools/auth0-logo-png-transparent.png' },
                  { name: 'Vault', src: '/tools/vault-icon.svg' }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-xl p-3 md:p-5 hover:border-[#00A651] hover:shadow-lg transition-all duration-300 flex flex-col items-center w-[calc(50%-6px)] md:w-auto min-h-[100px] md:min-h-0">
                <h3 className="text-xs md:text-base font-semibold text-dark-900 mb-2 md:mb-4 text-center">
                  <span className="md:hidden">{category.title}</span>
                  <span className="hidden md:inline whitespace-nowrap">{category.titleFull || category.title}</span>
                </h3>
                <div className="flex justify-center gap-3 md:gap-4">
                  {category.logos.map((logo, i) => (
                    <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white flex items-center justify-center shadow-sm p-1.5 md:p-2" title={logo.name}>
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={36}
                        height={36}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-10 md:py-14" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--black)' }}>
              Real Results for Your Business
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Our clients see measurable impact within the first quarter.
            </p>
          </div>

          {/* Branching animation with cards */}
          <BranchingFromTitle
            items={capabilities.map(cap => ({ title: cap.title, desc: cap.desc }))}
          />

          {/* CTA Button */}
          <div className="text-center mt-8">
            <Link href="/solutions" className="btn-primary">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      {/* Your Journey - Client-Focused 3-Week Process */}
      <section className="py-10 md:py-14" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--black)' }}>Your AI Journey</h2>
            <p className="text-lg" style={{ color: 'var(--gray-600)' }}>From first call to production in 3 weeks</p>
          </div>

          <div className="mb-8">
            <ProcessFlow steps={processSteps} />
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              Get Your AI Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="py-10 md:py-14" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--black)' }}>Your Future Team</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Access senior AI talent immediately—no lengthy hiring process, no training required.
            </p>
          </div>

          {/* Saudi Talent Filter */}
          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setExpertFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                expertFilter === 'all' ? 'text-white' : ''
              }`}
              style={{
                background: expertFilter === 'all' ? 'var(--green)' : 'white',
                color: expertFilter === 'all' ? 'white' : 'var(--gray-500)',
                border: expertFilter === 'all' ? 'none' : '1px solid var(--gray-200)'
              }}
            >
              All
            </button>
            <button
              onClick={() => setExpertFilter('saudi')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                expertFilter === 'saudi' ? 'text-white' : ''
              }`}
              style={{
                background: expertFilter === 'saudi' ? 'var(--green)' : 'white',
                color: expertFilter === 'saudi' ? 'white' : 'var(--gray-500)',
                border: expertFilter === 'saudi' ? 'none' : '1px solid var(--gray-200)'
              }}
            >
              Saudi Talent
            </button>
          </div>

          <div className="grid-4 mb-8">
            {experts.filter(e => expertFilter === 'all' || e.isSaudi).map((expert, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden img-zoom" style={{ border: expert.isSaudi ? '4px solid var(--green)' : '4px solid var(--gray-200)' }}>
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-semibold mb-0.5" style={{ color: 'var(--black)' }}>{expert.name}</h3>
                {expert.nameAr && <p className="text-sm mb-1 font-medium" style={{ color: 'var(--green)', direction: 'rtl' }}>{expert.nameAr}</p>}
                <p className="text-sm font-medium" style={{ color: 'var(--gray-600)' }}>{expert.role}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--gray-500)' }}>{expert.location}</p>
                {/* Specialty Tags */}
                <div className="mt-3 flex flex-wrap justify-center gap-1">
                  {expert.specialty.split(', ').map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100" style={{ color: 'var(--gray-600)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/staff-augmentation" className="btn-primary">
              View all experts
            </Link>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-10 md:py-14" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="flex flex-col justify-between">
              <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--green)' }}>Success Story</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--black)' }}>45% Faster Processing</h2>
              <p className="text-lg mb-6" style={{ color: 'var(--gray-600)' }}>
                A Saudi government entity cut manual processing time by 45% using our AI Operations Copilot—deployed in just 6 weeks.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="text-center md:text-left">
                  <span className="text-3xl md:text-4xl font-bold block" style={{ color: 'var(--green)' }}>45%</span>
                  <span className="text-sm" style={{ color: 'var(--gray-500)' }}>Time saved</span>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center md:text-left">
                  <span className="text-3xl md:text-4xl font-bold block" style={{ color: 'var(--green)' }}>6 weeks</span>
                  <span className="text-sm" style={{ color: 'var(--gray-500)' }}>To production</span>
                </div>
              </div>

              <Link href="/case-studies" className="btn-text text-lg">
                See more success stories
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl lg:-mr-12 xl:-mr-20">
              <img
                src="https://images.unsplash.com/photo-1733757361453-5f493624a734?auto=format&fit=crop&w=1200&q=80"
                alt="GOSI Case Study"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consulting & Talent Outsourcing Section */}
      <section className="py-10 md:py-14" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--green)' }}>Consulting & Talent Outsourcing</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--black)' }}>
              Scale Your AI Capabilities Fast
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Whether you need strategic guidance, embedded teams, or on-demand experts—we deliver talent that ships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* AI Strategy Consulting */}
            <div className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-2xl p-6 hover:border-[#00A651] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--green)', color: 'white' }}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--black)' }}>AI Strategy Consulting</h3>
              <p className="text-base mb-4 flex-1" style={{ color: 'var(--gray-600)' }}>
                Expert guidance to define your AI roadmap, prioritize use cases, and align technology with business goals.
              </p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--gray-600)' }}>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--green)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  AI readiness assessments
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--green)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Use case prioritization
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--green)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Technology architecture planning
                </li>
              </ul>
            </div>

            {/* Embedded AI Teams */}
            <div className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-2xl p-6 hover:border-[#00A651] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--green)', color: 'white' }}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--black)' }}>Embedded AI Teams</h3>
              <p className="text-base mb-4 flex-1" style={{ color: 'var(--gray-600)' }}>
                Full-stack AI teams that integrate with your organization and deliver production-ready systems.
              </p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--gray-600)' }}>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--green)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Data scientists & ML engineers
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--green)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  MLOps & infrastructure experts
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--green)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  AI product managers
                </li>
              </ul>
            </div>

            {/* On-Demand Talent */}
            <div className="bg-[#F5F3F0] border border-[#00A651]/20 rounded-2xl p-6 hover:border-[#00A651] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--green)', color: 'white' }}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--black)' }}>On-Demand Talent</h3>
              <p className="text-base mb-4 flex-1" style={{ color: 'var(--gray-600)' }}>
                Access 80K+ pre-vetted AI specialists for project-based or fractional engagements.
              </p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--gray-600)' }}>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--green)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Flexible engagement models
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--green)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  48-hour talent matching
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="var(--green)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Saudi & global specialists
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="/staff-augmentation" className="btn-primary">
              Explore Talent Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Primary Call to Action */}
      <section className="py-12 md:py-16" style={{ background: 'var(--green)' }}>
        <div className="container-md text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to build AI that actually runs?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-white/80">
            Talk to our delivery team and start your transformation today.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-white hover:bg-gray-100"
            style={{ color: 'var(--green)' }}
          >
            Get Your AI Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
