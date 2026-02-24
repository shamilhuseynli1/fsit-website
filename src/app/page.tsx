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
      title: 'Build & Deploy AI Systems',
      desc: 'Production-ready AI from prototype to scale',
      // CEO: Robot arm + human shaking hands — human-machine collaboration
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Robot arm */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h2l2 3h3" />
          <rect x="2" y="6" width="3" height="4" rx="0.5" strokeWidth={1.5} />
          <circle cx="11" cy="11" r="1.5" strokeWidth={1.5} />
          {/* Human hand */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 16v-2a2 2 0 00-2-2h-1" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 12h3a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-1" />
          {/* Handshake connection */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 12.5l2.5 2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 14.5l-1 1.5" />
        </svg>
      )
    },
    {
      title: 'AI-Native Teams at Scale',
      desc: 'Dedicated experts embedded in your organization',
      // CEO: Diverse team icons / org chart with AI bot at center
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Center AI bot */}
          <rect x="9" y="8" width="6" height="6" rx="1" strokeWidth={1.5} />
          <circle cx="10.5" cy="10.5" r="0.5" fill="currentColor" />
          <circle cx="13.5" cy="10.5" r="0.5" fill="currentColor" />
          <path strokeLinecap="round" strokeWidth={1.5} d="M10.5 12.5h3" />
          {/* Antenna */}
          <path strokeLinecap="round" strokeWidth={1.5} d="M12 8V6" />
          <circle cx="12" cy="5" r="1" strokeWidth={1.5} />
          {/* Team members around */}
          <circle cx="4" cy="6" r="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M4 9v2" />
          <circle cx="20" cy="6" r="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M20 9v2" />
          <circle cx="4" cy="18" r="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M4 15v1" />
          <circle cx="20" cy="18" r="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M20 15v1" />
          {/* Connection lines */}
          <path strokeLinecap="round" strokeWidth={1} strokeDasharray="2 2" d="M6 7l3 3M18 7l-3 3M6 17l3-3M18 17l-3-3" />
        </svg>
      )
    },
    {
      title: 'Secure, Governed, Production-Ready',
      desc: 'Enterprise-grade compliance and security',
      // CEO: Shield / lock icon with server rack or data center
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Shield */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
          {/* Server rack lines inside shield */}
          <path strokeLinecap="round" strokeWidth={1} d="M8 7h2M8 9h1" />
          <circle cx="15" cy="7" r="0.5" fill="currentColor" />
          <circle cx="15" cy="9" r="0.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Human-in-the-Loop Where It Matters',
      desc: 'AI with appropriate human oversight',
      // CEO: Human silhouette reviewing data on screen — oversight visual
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Monitor/Screen */}
          <rect x="6" y="4" width="12" height="9" rx="1" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M9 17h6M12 13v4" />
          {/* Data on screen */}
          <path strokeLinecap="round" strokeWidth={1} d="M8 7h3M8 9h5M8 11h2" />
          <path strokeLinecap="round" strokeWidth={1} d="M14 7v4" />
          <path strokeLinecap="round" strokeWidth={1} d="M15 8l1 1.5-1 1.5" />
          {/* Human silhouette */}
          <circle cx="19" cy="15" r="1.5" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M19 17v2.5" />
          <path strokeLinecap="round" strokeWidth={1.5} d="M17.5 18.5l1.5 1M20.5 18.5l-1.5 1" />
          {/* Looking line */}
          <path strokeLinecap="round" strokeWidth={1} strokeDasharray="1 1" d="M17.5 15l-3.5-2" />
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
    { num: '01', title: 'Define', desc: 'Align on outcomes' },
    { num: '02', title: 'Embed', desc: 'Deploy AI teams' },
    { num: '03', title: 'Build', desc: 'Develop systems' },
    { num: '04', title: 'Operate', desc: 'Ensure reliability' },
    { num: '05', title: 'Scale', desc: 'Expand with governance' },
  ];

  const clients = [
    { name: 'Riyad Capital', logo: '/clients/Riyad-Capital-Logo.png', url: 'https://www.riyadcapital.com/en/', category: 'financial' },
    { name: 'Ministry of Health', logo: '/clients/Saudi-Ministry-of-Health-Logo.png', url: 'https://www.moh.gov.sa/en', category: 'government' },
    { name: 'Arab Bank', logo: '/clients/Arab-Bank-Logo.png', url: 'https://www.arabbank.com/', category: 'financial' },
    { name: 'Tadawul', logo: '/clients/Saudi-Tadawul-Logo.png', url: 'https://www.saudiexchange.sa/', category: 'financial' },
    { name: 'NCB Capital', logo: '/clients/NCB-Capital-Logo.png', url: 'https://www.alahlicapital.com/', category: 'financial' },
    { name: 'Vision 2030', logo: '/clients/Vision-2023-Logo.png', url: 'https://www.vision2030.gov.sa/', category: 'government' },
    { name: 'Jadwa Investment', logo: '/clients/Jadwa-Investment-Logo.png', url: 'https://www.jadwa.com/', category: 'pif' },
    { name: 'Public Pension Agency', logo: '/clients/Public-Pension-Agency-Logo-Wide.png', url: 'https://www.pension.gov.sa/', category: 'government' },
    { name: 'Emirates NBD', logo: '/clients/Emirates-NBD-Logo-Wide.png', url: 'https://www.emiratesnbd.com.sa/', category: 'financial' },
    { name: 'Elm', logo: '/clients/ELM-Logo-Wide.png', url: 'https://www.elm.sa/en', category: 'pif' },
    { name: 'Bank Al Jazira', logo: '/clients/Bank-Al-Jazira-Logo-Wide.png', url: 'https://www.bankaljazira.com/en-us', category: 'financial' },
    { name: 'Blom Bank', logo: '/clients/Blom-Bank-Logo.png', url: 'https://www.blombank.com/', category: 'financial' },
    { name: 'Herald Investment', logo: '/clients/Herald-Investment-Management-Logo.png', url: '#', category: 'financial' },
    { name: 'Multinational Consulting', logo: '/clients/Multinational-Consulting-Firms.png', url: '#', category: 'consulting' },
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
              <Link href="/contact" className="btn-primary text-base sm:text-lg px-5 sm:px-8 py-3 sm:py-4">
                Talk to our team
              </Link>
              <Link href="/build-scale-ai" className="px-5 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black">
                Start with a pilot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-16" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          {/* Title and description at top */}
          <div className="max-w-2xl mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>What is FSIT?</h2>
            <p className="text-xl md:text-2xl" style={{ color: 'var(--gray-600)' }}>
              Discover how FSIT transforms organizations with AI-native teams, production-ready systems, and a unique approach that bridges the gap between AI potential and real-world results.
            </p>
          </div>

          {/* Blocks and Video side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left side: blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {[
                  { text: 'AI-native delivery', icon: 'ai' },
                  { text: '80K+ experts', icon: 'users' },
                  { text: 'Weeks not months', icon: 'speed' },
                  { text: 'Vision 2030', icon: 'future' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative p-8 rounded-3xl cursor-pointer overflow-hidden transition-all duration-700 hover:-translate-y-2 flex flex-col justify-center"
                    style={{
                      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                      boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)'
                    }}
                  >
                    {/* Animated background glow */}
                    <div
                      className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
                      style={{ background: 'linear-gradient(135deg, rgba(0,166,81,0.3), rgba(16,185,129,0.2))' }}
                    />

                    {/* Morphing shape background */}
                    <div
                      className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-150"
                      style={{
                        background: 'radial-gradient(circle, var(--green) 0%, transparent 70%)',
                        filter: 'blur(20px)',
                        transform: 'translate(30%, -30%)'
                      }}
                    />

                    {/* Animated icon */}
                    <div className="relative z-10 mb-3 flex justify-center md:justify-start">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: 'linear-gradient(135deg, var(--green) 0%, #10b981 100%)',
                          boxShadow: '0 8px 20px -8px rgba(0,166,81,0.5)'
                        }}
                      >
                        {item.icon === 'ai' && (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {item.icon === 'users' && (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                        {item.icon === 'speed' && (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                        {item.icon === 'future' && (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Text with animated underline */}
                    <div className="relative z-10 text-center md:text-left">
                      <p className="text-lg font-bold transition-colors duration-300" style={{ color: 'var(--gray-900)' }}>
                        {item.text}
                      </p>
                      <div
                        className="h-0.5 mt-2 rounded-full transition-all duration-500 w-0 group-hover:w-full mx-auto md:mx-0"
                        style={{ background: 'linear-gradient(90deg, var(--green), #10b981)' }}
                      />
                    </div>
                  </div>
                ))}
            </div>
            {/* Right side: Image */}
            <div className="lg:-mr-8 xl:-mr-16 h-full min-h-[280px] md:min-h-[320px]">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
                <img
                  src="/hero-riyadh-day.jpg"
                  alt="FSIT AI Transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Button below */}
          <div className="mt-10 text-center md:text-left">
            <Link href="/about" className="btn-secondary text-lg">
              Learn more about us
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 border-y" style={{ background: '#F5F5F3', borderColor: 'var(--gray-100)' }}>
        <div className="container-lg mb-6">
          <p className="text-xl font-semibold text-center mb-6" style={{ color: 'var(--gray-600)' }}>Trusted by leading organizations</p>
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
        <div className="relative overflow-hidden">
          {filteredClients.length <= 5 ? (
            /* Static centered layout for few clients */
            <div className="flex justify-center flex-wrap gap-6 md:gap-14 px-4">
              {filteredClients.map((client, index) => (
                <a
                  key={index}
                  href={client.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center h-20 md:h-28 w-28 md:w-64 logo-item"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={256}
                    height={112}
                    className="object-contain max-h-16 md:max-h-24"
                  />
                </a>
              ))}
            </div>
          ) : (
            /* Scrolling animation for many clients - faster on mobile */
            <div
              className="flex"
              style={{
                animation: 'scroll 26s linear infinite',
                width: 'max-content'
              }}
            >
              {[...filteredClients, ...filteredClients].map((client, index) => (
                <a
                  key={index}
                  href={client.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mx-4 md:mx-14 flex items-center justify-center h-20 md:h-28 w-32 md:w-64 logo-item"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={256}
                    height={112}
                    className="object-contain max-h-16 md:max-h-24"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
        {/* Client Stats Counter */}
        <div className="container-lg mt-8">
          <div className="flex flex-row justify-center items-center gap-6 md:gap-12 text-center">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-2xl md:text-4xl font-bold" style={{ color: 'var(--green)' }}>50+</span>
              <span className="text-xs md:text-base" style={{ color: 'var(--gray-500)' }}>Clients</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block" />
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-2xl md:text-4xl font-bold" style={{ color: 'var(--green)' }}>10+</span>
              <span className="text-xs md:text-base" style={{ color: 'var(--gray-500)' }}>Gov Entities</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block" />
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-center">
              <span className="text-2xl md:text-4xl font-bold whitespace-nowrap" style={{ color: 'var(--green)' }}>SAR Billions</span>
              <span className="text-xs md:text-base" style={{ color: 'var(--gray-500)' }}>Projects</span>
            </div>
          </div>
        </div>

        {/* Featured Client Spotlight */}
        <div className="container-lg mt-12 pt-8 border-t" style={{ borderColor: 'var(--gray-200)' }}>
          <h3 className="text-center text-lg font-semibold mb-8" style={{ color: 'var(--gray-600)' }}>Featured Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* GOSI Spotlight */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                  <img
                    src="/clients/Public-Pension-Agency-Logo-Wide.png"
                    alt="GOSI"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: 'var(--black)' }}>GOSI</h4>
                  <p className="text-sm" style={{ color: 'var(--gray-500)' }}>General Organization for Social Insurance</p>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: 'var(--gray-600)' }}>
                "FSIT's AI-native approach transformed our claims processing with measurable outcomes."
              </p>
              <Link href="/case-studies" className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{ color: 'var(--green)' }}>
                View case study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* PIF Entities Spotlight */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                  <img
                    src="/clients/Vision-2023-Logo.png"
                    alt="PIF Vision 2030"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: 'var(--black)' }}>PIF Portfolio Companies</h4>
                  <p className="text-sm" style={{ color: 'var(--gray-500)' }}>Public Investment Fund Entities</p>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: 'var(--gray-600)' }}>
                "Delivering AI solutions aligned with Vision 2030 across multiple PIF portfolio companies."
              </p>
              <Link href="/case-studies" className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{ color: 'var(--green)' }}>
                View case study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16" style={{ background: 'rgba(0, 166, 81, 0.85)' }}>
        <div className="container-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-6xl font-bold text-white tracking-tight">{stat.number}</p>
                <p className="text-white/70 text-xs md:text-sm mt-1 md:mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Globally Recognized Technologies */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-8">
            <h2 className="h2 mb-4">Globally Recognized Technologies</h2>
          </div>

          {/* Animated horizontal line */}
          <div className="relative mb-10">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="techLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="techPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#techLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#techPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
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
                <div className="flex justify-center gap-2 md:gap-4">
                  {category.logos.map((logo, i) => (
                    <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-white flex items-center justify-center shadow-sm p-1 md:p-2" title={logo.name}>
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

      {/* Capabilities */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-6">
            <h2 className="h2 mb-6">
              Leverage the top 1% of AI talent, on-demand.
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              We combine elite AI talent with proven delivery frameworks to build production-grade AI systems.
            </p>
          </div>

          {/* Branching animation with cards */}
          <BranchingFromTitle
            items={capabilities.map(cap => ({ title: cap.title, desc: cap.desc }))}
          />

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link href="/solutions" className="btn-primary">
              Explore our services
            </Link>
          </div>

          {/* AI Concepts Simplified Video */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--black)' }}>What is Machine Learning?</h3>
              <p className="text-xl mb-6" style={{ color: 'var(--gray-600)' }}>
                New to AI? Watch this 30-second explainer to understand the basics of machine learning and how it can transform your business operations.
              </p>
              {/* Modern feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { text: 'Pattern recognition', icon: 'pattern' },
                  { text: 'Predictive decisions', icon: 'predict' },
                  { text: 'Automated insights', icon: 'insights' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-4 rounded-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer flex flex-col items-center sm:items-start"
                    style={{
                      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'var(--green)' }}
                    >
                      {item.icon === 'pattern' && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      )}
                      {item.icon === 'predict' && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {item.icon === 'insights' && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-base font-semibold text-center sm:text-left" style={{ color: 'var(--gray-800)' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/hero-neom.jpg"
                alt="AI Explained Simply"
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/solutions" className="btn-primary">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="h2">How FSIT Works</h2>
          </div>

          <div className="mb-12">
            <ProcessFlow steps={processSteps} />
          </div>

          <div className="text-center">
            <Link href="/how-we-work" className="btn-secondary">
              Learn more about our process
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-lg">
          <div className="text-center mb-8">
            <h2 className="h2 mb-4">Meet some of our experts</h2>
            <p className="text-body max-w-2xl mx-auto">
              A network of pre-vetted, technical experts ready to seamlessly integrate into your organisation.
            </p>
          </div>

          {/* Saudi Talent Filter - as CEO requested */}
          <div className="flex justify-center gap-2 mb-12">
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

          <div className="grid-4 mb-16">
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

      {/* Case Study */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col justify-between">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>AI Operations Copilot</h2>
              <p className="text-xl mb-8" style={{ color: 'var(--gray-600)' }}>
                Secure, Vision 2030–aligned AI that automates workflows, unlocks institutional knowledge, and accelerates decision-making for a Saudi Government Entity.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
                <span className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--green)' }}>-45%</span>
                <span className="text-base md:text-xl" style={{ color: 'var(--gray-600)' }}>manual processing time</span>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                {['Custom LLM', 'Arabic NLP', 'RAG System', 'On-premise'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-base font-medium border" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>{tag}</span>
                ))}
              </div>

              <Link href="/case-studies" className="btn-text text-lg">
                View all case studies
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

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-md text-center">
          <h2 className="h1 mb-6">
            Ready to build AI
            <br />
            <span style={{ color: 'var(--green)' }}>that actually runs?</span>
          </h2>
          <p className="text-large mb-10 max-w-xl mx-auto">
            Talk to our delivery team and start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book a consultation
            </Link>
            <Link href="/build-scale-ai" className="btn-secondary">
              Start a pilot project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
