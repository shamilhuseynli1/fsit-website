'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

const industriesData: Record<string, {
  name: string;
  icon: string;
  headline: string;
  description: string;
  heroImage: string;
  sectionImage: string;
  imageAlt: string;
  challenges: string[];
  solutions: { title: string; desc: string }[];
  useCases: { title: string; desc: string; results: string }[];
  stats: { value: string; label: string }[];
  compliance: string[];
  featuredClients?: { name: string; description: string }[];
}> = {
  'financial-services': {
    name: 'Financial Services',
    icon: '🏦',
    headline: 'AI for Banking, Insurance & Fintech',
    description: 'Deploy AI systems that meet the strictest regulatory requirements while delivering measurable business impact. From fraud detection to algorithmic trading, we build AI that financial institutions can trust.',
    heroImage: 'https://images.unsplash.com/photo-1511883040705-6011fad9edfc?auto=format&fit=crop&w=800&q=80',
    sectionImage: 'https://images.unsplash.com/photo-1511883040705-6011fad9edfc?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Saudi Arabia Financial District Riyadh',
    challenges: [
      'Regulatory compliance (SOC2, PCI-DSS, GDPR)',
      'Real-time transaction processing at scale',
      'Explainable AI for audit requirements',
      'Legacy system integration',
      'Data security and privacy',
    ],
    solutions: [
      { title: 'Fraud Detection', desc: 'Real-time ML models that catch sophisticated fraud while minimizing false positives' },
      { title: 'Risk Assessment', desc: 'Credit scoring and risk models that are both accurate and explainable' },
      { title: 'Process Automation', desc: 'Intelligent document processing for KYC, AML, and claims' },
      { title: 'Customer Intelligence', desc: 'Personalization and next-best-action recommendations' },
    ],
    useCases: [
      { title: 'Fraud Detection System', desc: 'Deployed real-time fraud detection for a major digital bank', results: '99.2% detection rate, 60% fewer false positives' },
      { title: 'Claims Processing', desc: 'Automated insurance claims processing with intelligent document extraction', results: '70% cost reduction, 4-hour processing vs 5 days' },
      { title: 'Credit Risk Model', desc: 'Built explainable credit scoring model for regulatory compliance', results: '23% improvement in default prediction' },
    ],
    stats: [
      { value: '50+', label: 'Financial services projects' },
      { value: '99.2%', label: 'Fraud detection accuracy' },
      { value: '$100M+', label: 'Fraud prevented annually' },
      { value: '3 weeks', label: 'Average deployment time' },
    ],
    compliance: ['SOC2 Type II', 'PCI-DSS', 'GDPR', 'CCPA', 'GLBA'],
  },
  'healthcare': {
    name: 'Healthcare & Life Sciences',
    icon: '🏥',
    headline: 'HIPAA-Compliant AI for Healthcare',
    description: 'Build AI systems that improve patient outcomes while maintaining the highest standards of privacy and compliance. From diagnostic support to operational efficiency, we help healthcare organizations harness AI responsibly.',
    heroImage: 'https://images.unsplash.com/photo-1485848395967-65dff62dc35b?auto=format&fit=crop&w=800&q=80',
    sectionImage: 'https://images.unsplash.com/photo-1485848395967-65dff62dc35b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern Healthcare Facility Saudi Arabia',
    challenges: [
      'HIPAA compliance and patient privacy',
      'Integration with EHR systems',
      'Clinical validation requirements',
      'Bias detection and fairness',
      'Explainability for clinical decisions',
    ],
    solutions: [
      { title: 'Medical Imaging AI', desc: 'Computer vision for radiology, pathology, and diagnostic support' },
      { title: 'Clinical Decision Support', desc: 'AI-powered insights for treatment planning and risk assessment' },
      { title: 'Operational Efficiency', desc: 'Scheduling optimization, resource allocation, and workflow automation' },
      { title: 'Drug Discovery', desc: 'ML models for compound screening and clinical trial optimization' },
    ],
    useCases: [
      { title: 'Radiology AI', desc: 'AI pre-screening for chest X-rays and CT scans', results: '98.5% accuracy, 4-hour turnaround vs 48 hours' },
      { title: 'Patient Risk Prediction', desc: 'Early warning system for patient deterioration', results: '35% reduction in adverse events' },
      { title: 'Clinical Documentation', desc: 'Automated clinical note generation and coding', results: '60% reduction in documentation time' },
    ],
    stats: [
      { value: '35+', label: 'Healthcare projects' },
      { value: '98.5%', label: 'Diagnostic accuracy' },
      { value: '23%', label: 'More early detections' },
      { value: '100%', label: 'HIPAA compliant' },
    ],
    compliance: ['HIPAA', 'HITECH', 'FDA 21 CFR Part 11', 'SOC2'],
  },
  'retail': {
    name: 'Retail & E-Commerce',
    icon: '🛒',
    headline: 'AI-Powered Retail Experiences',
    description: 'Transform customer experiences and optimize operations with AI. From hyper-personalization to demand forecasting, we help retailers compete in the age of AI-first commerce.',
    heroImage: 'https://images.unsplash.com/photo-1669003152226-b37b58281b84?auto=format&fit=crop&w=800&q=80',
    sectionImage: 'https://images.unsplash.com/photo-1669003152226-b37b58281b84?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern Retail Shopping Mall Saudi Arabia',
    challenges: [
      'Real-time personalization at scale',
      'Inventory optimization across channels',
      'Customer data integration',
      'Seasonal demand variability',
      'Omnichannel consistency',
    ],
    solutions: [
      { title: 'Personalization Engine', desc: 'Real-time product recommendations and dynamic pricing' },
      { title: 'Demand Forecasting', desc: 'ML-powered inventory optimization and demand prediction' },
      { title: 'Visual Search', desc: 'Image-based product discovery and visual similarity' },
      { title: 'Customer Intelligence', desc: 'Churn prediction, lifetime value, and segmentation' },
    ],
    useCases: [
      { title: 'Recommendation Engine', desc: 'Built personalization system for 5M+ user e-commerce platform', results: '47% increase in conversion, 32% higher AOV' },
      { title: 'Inventory Optimization', desc: 'Demand forecasting across 500+ retail locations', results: '35% reduction in stockouts, $22M annual savings' },
      { title: 'Visual Search', desc: 'Image-based product search for fashion retailer', results: '3x engagement vs text search' },
    ],
    stats: [
      { value: '45+', label: 'Retail projects' },
      { value: '47%', label: 'Conversion lift' },
      { value: '$50M+', label: 'Revenue generated' },
      { value: '4 weeks', label: 'Average deployment' },
    ],
    compliance: ['GDPR', 'CCPA', 'PCI-DSS', 'SOC2'],
  },
  'manufacturing': {
    name: 'Manufacturing & Industrial',
    icon: '🏭',
    headline: 'Smart Factory AI Solutions',
    description: 'Bring intelligence to your manufacturing operations. From predictive maintenance to quality control, we help manufacturers reduce downtime, improve quality, and optimize production.',
    heroImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    sectionImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Industrial Manufacturing Facility Saudi Arabia',
    challenges: [
      'Legacy equipment integration',
      'Real-time sensor data processing',
      'Quality consistency at scale',
      'Supply chain complexity',
      'Safety and compliance requirements',
    ],
    solutions: [
      { title: 'Predictive Maintenance', desc: 'ML models that predict equipment failures before they happen' },
      { title: 'Quality Inspection', desc: 'Computer vision for automated quality control' },
      { title: 'Production Optimization', desc: 'AI-driven scheduling and resource allocation' },
      { title: 'Supply Chain Intelligence', desc: 'Demand forecasting and supplier risk assessment' },
    ],
    useCases: [
      { title: 'Predictive Maintenance', desc: 'IoT + ML system for automotive supplier', results: '85% reduction in unplanned downtime, $18M savings' },
      { title: 'Visual Quality Inspection', desc: 'Automated defect detection on production line', results: '99.5% accuracy, 10x faster than manual' },
      { title: 'Production Scheduling', desc: 'AI-optimized scheduling for multi-product facility', results: '15% throughput improvement' },
    ],
    stats: [
      { value: '30+', label: 'Manufacturing projects' },
      { value: '85%', label: 'Downtime reduction' },
      { value: '99.5%', label: 'Inspection accuracy' },
      { value: '$50M+', label: 'Cost savings delivered' },
    ],
    compliance: ['ISO 9001', 'ISO 27001', 'IATF 16949', 'SOC2'],
  },
  'technology': {
    name: 'Technology & SaaS',
    icon: '💻',
    headline: 'AI for Software Companies',
    description: 'Embed AI into your products and operations. From intelligent features to automated development workflows, we help technology companies build and operate AI-powered products.',
    heroImage: 'https://images.unsplash.com/photo-1659241869140-3cb7cdff42fd?auto=format&fit=crop&w=800&q=80',
    sectionImage: 'https://images.unsplash.com/photo-1659241869140-3cb7cdff42fd?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern Technology Office Saudi Arabia',
    challenges: [
      'Rapid iteration and deployment',
      'Scaling ML infrastructure',
      'User data privacy',
      'Model performance monitoring',
      'Integration with existing products',
    ],
    solutions: [
      { title: 'Product AI Features', desc: 'Embed intelligent capabilities into your software products' },
      { title: 'Code Intelligence', desc: 'AI-powered code review, testing, and documentation' },
      { title: 'User Analytics', desc: 'Behavioral prediction and personalization' },
      { title: 'MLOps Infrastructure', desc: 'Build scalable ML platforms and pipelines' },
    ],
    useCases: [
      { title: 'Code Review Automation', desc: 'AI-powered code review for enterprise software company', results: '60% faster reviews, 85% security issues caught pre-merge' },
      { title: 'Customer Support AI', desc: 'Conversational AI handling 70% of support tickets', results: '2-min response time, 94% CSAT' },
      { title: 'Product Recommendations', desc: 'ML-powered feature recommendations in SaaS product', results: '40% increase in feature adoption' },
    ],
    stats: [
      { value: '60+', label: 'Technology projects' },
      { value: '70%', label: 'Automation rate' },
      { value: '3x', label: 'Faster releases' },
      { value: '2 weeks', label: 'MVP deployment' },
    ],
    compliance: ['SOC2 Type II', 'GDPR', 'ISO 27001', 'CCPA'],
  },
  'energy': {
    name: 'Energy & Utilities',
    icon: '⚡',
    headline: 'AI for the Energy Transition',
    description: 'Optimize grid operations, predict demand, and accelerate the transition to sustainable energy. We help energy companies harness AI for efficiency, reliability, and sustainability.',
    heroImage: 'https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80',
    sectionImage: 'https://images.unsplash.com/photo-1733757361453-5f493624a734?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Energy Infrastructure Saudi Arabia',
    challenges: [
      'Grid stability with renewable integration',
      'Demand forecasting accuracy',
      'Asset management at scale',
      'Regulatory compliance',
      'Legacy infrastructure integration',
    ],
    solutions: [
      { title: 'Load Forecasting', desc: 'ML models for accurate demand prediction' },
      { title: 'Grid Optimization', desc: 'Real-time optimization of power distribution' },
      { title: 'Asset Monitoring', desc: 'Predictive maintenance for energy infrastructure' },
      { title: 'Renewable Integration', desc: 'AI for solar/wind forecasting and integration' },
    ],
    useCases: [
      { title: 'Demand Forecasting', desc: 'ML-powered load prediction for utility company', results: '15% improvement in forecast accuracy' },
      { title: 'Wind Farm Optimization', desc: 'Predictive maintenance for wind turbines', results: '25% reduction in maintenance costs' },
      { title: 'Grid Balancing', desc: 'Real-time optimization with renewable sources', results: '20% reduction in curtailment' },
    ],
    stats: [
      { value: '25+', label: 'Energy projects' },
      { value: '15%', label: 'Forecast improvement' },
      { value: '25%', label: 'Maintenance cost reduction' },
      { value: '98.1%', label: 'System accuracy' },
    ],
    compliance: ['NERC CIP', 'ISO 27001', 'SOC2', 'IEC 62351'],
  },
  'logistics': {
    name: 'Logistics & Transportation',
    icon: '🚚',
    headline: 'AI-Powered Supply Chain',
    description: 'End-to-end supply chain visibility with AI. From route optimization to demand prediction, we help logistics companies move faster, smarter, and more efficiently.',
    heroImage: 'https://images.unsplash.com/photo-1733757361453-5f493624a734?auto=format&fit=crop&w=1920&q=80',
    sectionImage: 'https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Modern Port and Logistics Hub Saudi Arabia',
    challenges: [
      'Real-time visibility across networks',
      'Dynamic route optimization',
      'Demand variability',
      'Last-mile efficiency',
      'Multi-modal coordination',
    ],
    solutions: [
      { title: 'Route Optimization', desc: 'Dynamic routing with real-time traffic and constraints' },
      { title: 'Demand Forecasting', desc: 'Predict shipment volumes and capacity needs' },
      { title: 'Fleet Management', desc: 'Predictive maintenance and utilization optimization' },
      { title: 'Warehouse Automation', desc: 'Intelligent picking, packing, and inventory management' },
    ],
    useCases: [
      { title: 'Route Optimization', desc: 'Dynamic routing for delivery fleet', results: '18% reduction in fuel costs, 25% more deliveries' },
      { title: 'Demand Prediction', desc: 'Shipment volume forecasting for 3PL', results: '30% improvement in capacity planning' },
      { title: 'Warehouse Optimization', desc: 'AI-powered picking optimization', results: '40% improvement in pick rate' },
    ],
    stats: [
      { value: '40+', label: 'Logistics projects' },
      { value: '18%', label: 'Fuel cost reduction' },
      { value: '25%', label: 'More deliveries per day' },
      { value: '97.9%', label: 'System accuracy' },
    ],
    compliance: ['ISO 28000', 'C-TPAT', 'AEO', 'SOC2'],
  },
  'government': {
    name: 'Government & Public Sector',
    icon: '🏛️',
    headline: 'Secure AI for Public Service',
    description: 'Deploy AI systems that serve citizens while meeting the strictest security and compliance requirements. From document processing to fraud detection, we help government agencies modernize with AI.',
    heroImage: 'https://images.unsplash.com/photo-1672257694085-3a5c603cda1a?auto=format&fit=crop&w=1920&q=80',
    sectionImage: 'https://images.unsplash.com/photo-1733757361453-5f493624a734?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Government Buildings Saudi Arabia Riyadh',
    challenges: [
      'FedRAMP and security requirements',
      'Legacy system modernization',
      'Transparency and explainability',
      'Bias prevention and fairness',
      'Public accountability',
    ],
    solutions: [
      { title: 'Document Processing', desc: 'Intelligent automation for forms, applications, and records' },
      { title: 'Fraud Detection', desc: 'ML models for benefits fraud and tax compliance' },
      { title: 'Citizen Services', desc: 'Conversational AI for public-facing services' },
      { title: 'Policy Analytics', desc: 'Data-driven insights for policy development' },
    ],
    useCases: [
      { title: 'Benefits Processing', desc: 'Automated eligibility determination for state agency', results: '80% reduction in processing time' },
      { title: 'Fraud Detection', desc: 'ML-based fraud detection for benefits program', results: '$50M in fraud prevented annually' },
      { title: 'Citizen Chatbot', desc: 'AI assistant for public services', results: '60% reduction in call center volume' },
    ],
    stats: [
      { value: '20+', label: 'Government projects' },
      { value: '80%', label: 'Processing time reduction' },
      { value: '$50M+', label: 'Fraud prevented' },
      { value: '99%', label: 'Accuracy rate' },
    ],
    compliance: ['FedRAMP', 'StateRAMP', 'FISMA', 'SOC2', 'Section 508'],
  },
  'sports-entertainment': {
    name: 'Sports & Entertainment',
    icon: '🏟️',
    headline: 'AI for Sports, Events & Entertainment',
    description: 'Power the future of sports and entertainment with AI. From fan analytics to player performance, we help organizations in Saudi Arabia\'s rapidly growing $38B+ sports economy leverage AI for competitive advantage.',
    heroImage: 'https://images.unsplash.com/photo-1707669778142-3e7715a2b85b?auto=format&fit=crop&w=1920&q=80',
    sectionImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Modern Sports Stadium Saudi Arabia',
    featuredClients: [
      { name: 'Qiddiya', description: 'Saudi Arabia\'s entertainment mega-destination' },
      { name: 'SEVEN', description: 'Entertainment destinations across KSA' },
    ],
    challenges: [
      'Real-time fan engagement at scale',
      'Dynamic pricing optimization',
      'Player performance analytics',
      'Stadium operations efficiency',
      'Broadcast and content personalization',
    ],
    solutions: [
      { title: 'Fan Analytics', desc: 'Deep insights into fan behavior, preferences, and engagement patterns' },
      { title: 'Dynamic Pricing', desc: 'AI-powered ticket pricing that maximizes revenue and attendance' },
      { title: 'Performance AI', desc: 'Player analytics, injury prediction, and training optimization' },
      { title: 'Stadium Operations', desc: 'Crowd management, security, and operations automation' },
      { title: 'Broadcast AI', desc: 'Automated highlights, personalized content delivery, and real-time production' },
    ],
    useCases: [
      { title: 'Fan Engagement Platform', desc: 'AI-powered personalization for major sports league', results: '45% increase in fan engagement, 30% higher merchandise sales' },
      { title: 'Dynamic Ticket Pricing', desc: 'Real-time pricing optimization for entertainment venue', results: '22% revenue increase, 95% seat utilization' },
      { title: 'Player Performance System', desc: 'ML-based performance and injury prediction for football club', results: '35% reduction in injuries, 18% performance improvement' },
      { title: 'Broadcast Automation', desc: 'AI-driven content production for live sports events', results: '60% faster highlight generation, 40% cost reduction' },
    ],
    stats: [
      { value: '$38B+', label: 'Saudi sports investment' },
      { value: '45%', label: 'Fan engagement increase' },
      { value: '22%', label: 'Revenue optimization' },
      { value: '35%', label: 'Injury reduction' },
    ],
    compliance: ['GDPR', 'Data Privacy', 'SOC2', 'ISO 27001'],
  },
};

export default function IndustryPage() {
  const params = useParams();
  const id = params.id as string;
  const industry = industriesData[id];

  if (!industry) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark-900 mb-4">Industry Not Found</h1>
          <p className="text-dark-500 mb-8">The industry page you're looking for doesn't exist.</p>
          <Link href="/industries" className="btn-primary">
            View All Industries
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-neutral-50 overflow-hidden">
        {/* Saudi Industry Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${industry.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)' }}>
              {industry.headline}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industry.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: 'var(--green)' }}>{stat.value}</div>
                <div className="text-lg md:text-xl font-medium" style={{ color: 'var(--gray-700)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients - Only for industries with clients */}
      {industry.featuredClients && industry.featuredClients.length > 0 && (
        <section className="py-16" style={{ background: 'var(--cream)' }}>
          <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-base font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--green)' }}>Trusted By</p>
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--black)' }}>Our Clients in This Sector</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {industry.featuredClients.map((client: { name: string; description: string }, index: number) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 min-w-[280px] text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center" style={{ background: 'var(--green)' }}>
                    <span className="text-3xl text-white font-bold">{client.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--black)' }}>{client.name}</h4>
                  <p className="text-base md:text-lg" style={{ color: 'var(--gray-600)' }}>{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenges Section */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Industry Challenges We Solve</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              We understand the unique challenges facing {industry.name.toLowerCase()}. Our solutions are built specifically for your regulatory environment, data requirements, and operational constraints.
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="industryChalLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="industryChalPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#industryChalLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#industryChalPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          {/* Grid with dividing lines - 5 columns for 5 challenges */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-[#00A651]/20 rounded-2xl overflow-hidden mb-16">
            {industry.challenges.map((challenge, index) => (
              <div key={index} className="group text-center p-8 bg-white hover:bg-[#F5F3F0] transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {challenge}
                </h3>
              </div>
            ))}
          </div>

          {/* Compliance Section */}
          <div className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-3xl p-10 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">Compliance & Security</h3>
            <p className="text-lg md:text-xl text-dark-600 mb-8">
              All our {industry.name.toLowerCase()} solutions are built with compliance in mind from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {industry.compliance.map((cert, index) => (
                <span key={index} className="px-6 py-3 bg-white rounded-xl text-dark-700 font-semibold text-lg shadow-sm">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>Our {industry.name} Solutions</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Purpose-built AI solutions for the specific needs of {industry.name.toLowerCase()}.
            </p>
          </div>

          {/* Simple horizontal line animation */}
          <div className="relative mb-8">
            <svg className="w-full h-8 pointer-events-none" viewBox="0 0 1000 32" preserveAspectRatio="none">
              <defs>
                <linearGradient id="industrySolLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--green)" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="var(--green)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="industrySolPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
                  <stop offset="45%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="55%" stopColor="var(--green)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="16" x2="1000" y2="16" stroke="var(--gray-200)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#industrySolLineGradient)" strokeWidth="2" />
              <line x1="0" y1="16" x2="1000" y2="16" stroke="url(#industrySolPulseGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: '150 850', animation: 'flowHorizontal 3s linear infinite' }} />
            </svg>
          </div>

          {/* Grid with dividing lines - 4 columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#00A651]/20 rounded-2xl overflow-hidden">
            {industry.solutions.map((solution, index) => (
              <div key={index} className="group text-center p-8 md:p-10 bg-white hover:bg-[#F5F3F0] transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors" style={{ color: 'var(--black)' }}>
                  {solution.title}
                </h3>
                <p className="text-base md:text-lg" style={{ color: 'var(--gray-600)' }}>{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Arabia Focus Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Saudi Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${industry.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-400 text-base font-semibold mb-4 uppercase tracking-wider">Regional Excellence</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                {industry.name} AI in Saudi Arabia
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                FSIT delivers specialized AI solutions for {industry.name.toLowerCase()} organizations across Saudi Arabia and the Middle East. Our solutions are aligned with Vision 2030 and designed for regional requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">Vision 2030</div>
                  <div className="text-white/80 text-base">Aligned</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">Local</div>
                  <div className="text-white/80 text-base">Expertise</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={industry.sectionImage}
                alt={industry.imageAlt}
                className="rounded-2xl shadow-2xl w-full h-80 object-cover border-2 border-white/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
                <p className="font-bold text-lg">{industry.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              {industry.name} Success Stories
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
              Real results from real projects in {industry.name.toLowerCase()}.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {industry.useCases.map((useCase, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl overflow-hidden flex flex-col">
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{useCase.title}</h3>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-lg text-dark-600 mb-6 min-h-[60px]">{useCase.desc}</p>
                  <div className="bg-primary-50 rounded-xl p-6 mt-auto">
                    <div className="text-base text-primary-600 font-semibold mb-2">Results</div>
                    <div className="text-lg md:text-xl text-dark-900 font-bold min-h-[48px]">{useCase.results}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Saudi Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${industry.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Ready to Transform Your {industry.name} Operations?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Let's discuss how AI can solve your specific challenges. Our team includes specialists with deep {industry.name.toLowerCase()} experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/build-scale-ai" className="btn-primary text-lg px-8 py-4">
              Schedule a Consultation
            </Link>
            <Link href="/industries" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-900 transition-all text-lg">
              Explore Other Industries
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
