'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import ModelCardEnhanced from '@/components/ModelCardEnhanced';
import { ModelIcons } from '@/components/ModelCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import { OpenAILogo, AnthropicLogo, GoogleLogo, MetaLogo, MistralLogo } from '@/components/ModelLogos';
import HeroModelStack from '@/components/HeroModelStack';

type ModelProvider = 'openai' | 'anthropic' | 'google' | 'meta' | 'mistral' | 'huggingface' | 'aws' | 'xgboost' | 'pytorch' | 'tensorflow';

interface ModelSolution {
  title: string;
  description: string;
  inputLabel: string;
  inputIcon: React.ReactNode;
  outputLabel: string;
  outputIcon: React.ReactNode;
  models: ModelProvider[];
  metric: string;
  metricValue: string;
}

interface Category {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  solutions: ModelSolution[];
}

const categories: Category[] = [
  {
    id: 'finance',
    name: 'Finance',
    tagline: 'Secure. Compliant. Intelligent.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Fraud Detection',
        description: 'Real-time transaction monitoring using ensemble ML models to detect anomalies, suspicious patterns, and potential fraud before it impacts your business.',
        inputLabel: 'Transactions',
        inputIcon: ModelIcons.transaction,
        outputLabel: 'Alerts',
        outputIcon: ModelIcons.shield,
        models: ['xgboost', 'openai'],
        metric: 'Detection Accuracy',
        metricValue: '99.2%',
      },
      {
        title: 'Credit Risk Assessment',
        description: 'Predictive models that analyze creditworthiness using alternative data sources, improving lending decisions while significantly reducing default rates.',
        inputLabel: 'Applications',
        inputIcon: ModelIcons.document,
        outputLabel: 'Risk Score',
        outputIcon: ModelIcons.score,
        models: ['xgboost', 'anthropic'],
        metric: 'Default Reduction',
        metricValue: '35%',
      },
      {
        title: 'Algorithmic Trading',
        description: 'ML-powered trading strategies that analyze market patterns, sentiment, and macroeconomic indicators to optimize portfolio performance.',
        inputLabel: 'Market Data',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Signals',
        outputIcon: ModelIcons.trending,
        models: ['pytorch', 'openai'],
        metric: 'Return Improvement',
        metricValue: '+23%',
      },
      {
        title: 'AML/KYC Compliance',
        description: 'Automated compliance monitoring with intelligent document processing for KYC verification and real-time transaction screening for AML requirements.',
        inputLabel: 'Documents',
        inputIcon: ModelIcons.document,
        outputLabel: 'Verified',
        outputIcon: ModelIcons.check,
        models: ['anthropic', 'google'],
        metric: 'Processing Speed',
        metricValue: '70%↑',
      },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    tagline: 'Optimize. Automate. Deliver.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    solutions: [
      {
        title: 'Route Optimization',
        description: 'Dynamic routing algorithms that consider real-time traffic, weather, and delivery constraints to minimize costs and maximize fleet efficiency.',
        inputLabel: 'Locations',
        inputIcon: ModelIcons.location,
        outputLabel: 'Routes',
        outputIcon: ModelIcons.route,
        models: ['google', 'pytorch'],
        metric: 'Fuel Savings',
        metricValue: '18%',
      },
      {
        title: 'Demand Forecasting',
        description: 'Predictive models that analyze historical sales, seasonality, and market trends to accurately forecast inventory requirements.',
        inputLabel: 'Sales Data',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Forecast',
        outputIcon: ModelIcons.prediction,
        models: ['pytorch', 'openai'],
        metric: 'Forecast Accuracy',
        metricValue: '30%↑',
      },
      {
        title: 'Warehouse Automation',
        description: 'Intelligent picking, packing, and inventory management systems that optimize warehouse operations and eliminate manual errors.',
        inputLabel: 'Inventory',
        inputIcon: ModelIcons.inventory,
        outputLabel: 'Actions',
        outputIcon: ModelIcons.check,
        models: ['tensorflow', 'anthropic'],
        metric: 'Fulfillment Speed',
        metricValue: '40%↑',
      },
      {
        title: 'Fleet Management',
        description: 'Predictive maintenance and utilization optimization for vehicle fleets, reducing downtime and extending asset lifespan.',
        inputLabel: 'Telemetry',
        inputIcon: ModelIcons.truck,
        outputLabel: 'Maintenance',
        outputIcon: ModelIcons.alert,
        models: ['xgboost', 'openai'],
        metric: 'Downtime Reduction',
        metricValue: '25%',
      },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Predict. Engage. Grow.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Churn Prediction',
        description: 'ML models that identify at-risk customers before they leave, enabling proactive retention strategies and personalized engagement campaigns.',
        inputLabel: 'User Data',
        inputIcon: ModelIcons.user,
        outputLabel: 'Risk Score',
        outputIcon: ModelIcons.alert,
        models: ['xgboost', 'anthropic'],
        metric: 'Churn Reduction',
        metricValue: '45%',
      },
      {
        title: 'Sales Forecasting',
        description: 'Accurate revenue predictions using historical data, market signals, and pipeline analysis to improve planning and resource allocation.',
        inputLabel: 'Pipeline',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Forecast',
        outputIcon: ModelIcons.prediction,
        models: ['pytorch', 'openai'],
        metric: 'Forecast Accuracy',
        metricValue: '92%',
      },
      {
        title: 'Process Automation',
        description: 'Intelligent automation combining RPA with Gen AI to handle complex business processes requiring judgment and decision-making.',
        inputLabel: 'Workflows',
        inputIcon: ModelIcons.document,
        outputLabel: 'Automated',
        outputIcon: ModelIcons.check,
        models: ['anthropic', 'openai'],
        metric: 'Cost Reduction',
        metricValue: '60%',
      },
      {
        title: 'Customer Segmentation',
        description: 'Advanced clustering and classification models that identify high-value customer segments for targeted marketing and personalization.',
        inputLabel: 'Behavior',
        inputIcon: ModelIcons.database,
        outputLabel: 'Segments',
        outputIcon: ModelIcons.insight,
        models: ['xgboost', 'google'],
        metric: 'Conversion Lift',
        metricValue: '35%↑',
      },
    ],
  },
  {
    id: 'management',
    name: 'Management',
    tagline: 'Plan. Optimize. Lead.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Workforce Planning',
        description: 'Predictive models for talent acquisition, capacity planning, and skills gap analysis to optimize human resource allocation.',
        inputLabel: 'HR Data',
        inputIcon: ModelIcons.user,
        outputLabel: 'Plans',
        outputIcon: ModelIcons.report,
        models: ['xgboost', 'anthropic'],
        metric: 'Retention Improvement',
        metricValue: '28%',
      },
      {
        title: 'Performance Analytics',
        description: 'ML-powered performance measurement systems that identify top performers, predict outcomes, and recommend development paths.',
        inputLabel: 'Metrics',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Insights',
        outputIcon: ModelIcons.insight,
        models: ['openai', 'pytorch'],
        metric: 'Productivity Gain',
        metricValue: '40%',
      },
      {
        title: 'Resource Allocation',
        description: 'Optimization algorithms that balance workloads, project assignments, and budget allocation across teams and initiatives.',
        inputLabel: 'Projects',
        inputIcon: ModelIcons.inventory,
        outputLabel: 'Optimal Mix',
        outputIcon: ModelIcons.check,
        models: ['google', 'xgboost'],
        metric: 'Efficiency Increase',
        metricValue: '25%',
      },
      {
        title: 'Risk Management',
        description: 'Enterprise risk assessment models that identify, quantify, and prioritize operational, financial, and strategic risks.',
        inputLabel: 'Indicators',
        inputIcon: ModelIcons.database,
        outputLabel: 'Risk Map',
        outputIcon: ModelIcons.shield,
        models: ['anthropic', 'openai'],
        metric: 'Response Time',
        metricValue: '50%↓',
      },
    ],
  },
  {
    id: 'consulting',
    name: 'Consulting',
    tagline: 'Analyze. Advise. Accelerate.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Market Intelligence',
        description: 'Automated market research and competitive analysis using NLP to process vast amounts of unstructured data from multiple sources.',
        inputLabel: 'Sources',
        inputIcon: ModelIcons.globe,
        outputLabel: 'Insights',
        outputIcon: ModelIcons.insight,
        models: ['anthropic', 'openai'],
        metric: 'Insight Speed',
        metricValue: '80%↑',
      },
      {
        title: 'Due Diligence',
        description: 'ML-powered document analysis for M&A due diligence, contract review, and compliance verification at unprecedented speed.',
        inputLabel: 'Documents',
        inputIcon: ModelIcons.document,
        outputLabel: 'Report',
        outputIcon: ModelIcons.report,
        models: ['anthropic', 'google'],
        metric: 'Time Savings',
        metricValue: '65%',
      },
      {
        title: 'Strategy Analysis',
        description: 'Data-driven strategic recommendations powered by ML models that analyze industry trends, benchmarks, and success patterns.',
        inputLabel: 'Data',
        inputIcon: ModelIcons.database,
        outputLabel: 'Strategy',
        outputIcon: ModelIcons.trending,
        models: ['openai', 'anthropic'],
        metric: 'Delivery Speed',
        metricValue: '3x',
      },
      {
        title: 'Client Analytics',
        description: 'Predictive models for client health scoring, opportunity identification, and relationship management optimization.',
        inputLabel: 'Interactions',
        inputIcon: ModelIcons.user,
        outputLabel: 'Scores',
        outputIcon: ModelIcons.score,
        models: ['xgboost', 'openai'],
        metric: 'Revenue Growth',
        metricValue: '42%',
      },
    ],
  },
  {
    id: 'data-governance',
    name: 'Data Governance',
    tagline: 'Secure. Compliant. Trusted.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Data Quality',
        description: 'ML models that automatically detect data anomalies, inconsistencies, and quality issues across enterprise data assets in real-time.',
        inputLabel: 'Raw Data',
        inputIcon: ModelIcons.database,
        outputLabel: 'Clean Data',
        outputIcon: ModelIcons.check,
        models: ['xgboost', 'anthropic'],
        metric: 'Data Accuracy',
        metricValue: '95%',
      },
      {
        title: 'Privacy Compliance',
        description: 'Automated PII detection, data classification, and compliance monitoring for GDPR, CCPA, and industry-specific regulations.',
        inputLabel: 'Records',
        inputIcon: ModelIcons.document,
        outputLabel: 'Compliant',
        outputIcon: ModelIcons.shield,
        models: ['anthropic', 'google'],
        metric: 'Compliance Rate',
        metricValue: '100%',
      },
      {
        title: 'Master Data Mgmt',
        description: 'Intelligent entity resolution and data matching algorithms that create unified, trusted views of critical business entities.',
        inputLabel: 'Entities',
        inputIcon: ModelIcons.database,
        outputLabel: 'Unified',
        outputIcon: ModelIcons.check,
        models: ['xgboost', 'openai'],
        metric: 'Deduplication',
        metricValue: '60%',
      },
      {
        title: 'Data Lineage',
        description: 'Automated metadata discovery and lineage tracking that maps data flows and dependencies across the enterprise.',
        inputLabel: 'Metadata',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Lineage Map',
        outputIcon: ModelIcons.route,
        models: ['openai', 'anthropic'],
        metric: 'Audit Speed',
        metricValue: '70%↑',
      },
    ],
  },
  {
    id: 'sports-entertainment',
    name: 'Sports & Entertainment',
    tagline: 'Engage. Perform. Thrive.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Fan Analytics',
        description: 'AI-powered fan engagement analytics that track behavior, preferences, and sentiment to personalize experiences and maximize lifetime value.',
        inputLabel: 'Fan Data',
        inputIcon: ModelIcons.user,
        outputLabel: 'Insights',
        outputIcon: ModelIcons.insight,
        models: ['openai', 'xgboost'],
        metric: 'Engagement',
        metricValue: '+45%',
      },
      {
        title: 'Dynamic Pricing',
        description: 'ML models that optimize ticket and merchandise pricing in real-time based on demand, events, and market conditions.',
        inputLabel: 'Market Data',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Optimal Price',
        outputIcon: ModelIcons.trending,
        models: ['xgboost', 'pytorch'],
        metric: 'Revenue Lift',
        metricValue: '+28%',
      },
      {
        title: 'Player Performance',
        description: 'Advanced analytics for athlete performance tracking, injury prediction, and training optimization using computer vision and sensor data.',
        inputLabel: 'Performance',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Predictions',
        outputIcon: ModelIcons.prediction,
        models: ['pytorch', 'tensorflow'],
        metric: 'Injury Prevention',
        metricValue: '35%↓',
      },
      {
        title: 'Content Personalization',
        description: 'AI-driven content recommendations for streaming, highlights, and broadcasts tailored to individual viewer preferences.',
        inputLabel: 'Content',
        inputIcon: ModelIcons.document,
        outputLabel: 'Personalized',
        outputIcon: ModelIcons.user,
        models: ['openai', 'anthropic'],
        metric: 'Watch Time',
        metricValue: '+52%',
      },
    ],
  },
];

export default function MLModelsPage() {
  const [activeCategory, setActiveCategory] = useState('finance');
  const activeData = categories.find((c) => c.id === activeCategory);

  // Add custom styles
  const customStyles = `
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes float-up-down {
      0%, 100% { transform: translateY(0px) rotate(45deg); }
      50% { transform: translateY(-20px) rotate(45deg); }
    }
    @keyframes glow-pulse {
      0%, 100% { opacity: 0.3; box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
      50% { opacity: 0.6; box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
    .animate-float-up-down {
      animation: float-up-down 4s ease-in-out infinite;
    }
    .animate-glow-pulse {
      animation: glow-pulse 3s ease-in-out infinite;
    }
    .animate-shimmer {
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }
  `;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && categories.find((c) => c.id === hash)) {
        setActiveCategory(hash);
        setTimeout(() => {
          document.getElementById('models-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Custom animations */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Hero Section */}
      <section className="relative min-h-[auto] md:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1629667051607-e412f1c493c0?auto=format&fit=crop&w=1920&q=80"
          alt="NEOM - Vision 2030 Saudi Arabia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/60" />

        <div className="relative z-10 container-max pt-36 pb-4 md:py-36">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                AI Models That{' '}
                <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  Deliver Results
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-white leading-relaxed mb-8 md:mb-12" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Production-ready ML solutions powered by leading AI platforms.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div>
                  <div className="text-2xl md:text-5xl font-bold text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>6</div>
                  <div className="text-white/80 text-xs md:text-base" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Industry Verticals</div>
                </div>
                <div>
                  <div className="text-2xl md:text-5xl font-bold text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>24+</div>
                  <div className="text-white/80 text-xs md:text-base" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>ML Solutions</div>
                </div>
                <div>
                  <div className="text-2xl md:text-5xl font-bold text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>99%</div>
                  <div className="text-white/80 text-xs md:text-base" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Accuracy</div>
                </div>
              </div>
            </div>

            {/* Right - 3D Isometric Stack Visual */}
            <div className="mt-4 lg:mt-0 transform scale-[0.65] md:scale-100 origin-top -mb-24 md:mb-0">
              <HeroModelStack />
            </div>
          </div>
        </div>
      </section>

      {/* Category Selector */}
      <section id="models-section" className="bg-cream-50 border-y border-neutral-200 sticky top-16 z-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex justify-start md:justify-center flex-nowrap md:flex-wrap gap-2 md:gap-3 py-4 md:py-5 min-w-max md:min-w-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-dark-700 hover:bg-neutral-100 border border-neutral-200 hover:border-primary-500/30'
                }`}
              >
                <span className={`relative [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5 ${activeCategory === category.id ? 'text-white' : 'text-dark-500 group-hover:text-primary-500'} transition-colors`}>
                  {category.icon}
                </span>
                <span className="relative">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Category Models */}
      {activeData && (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
          <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Category Header */}
            <div className="text-center mb-10 md:mb-16 relative">
              <div className="relative inline-block mb-4 md:mb-6">
                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8">
                    {activeData.icon}
                  </div>
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4" style={{ color: 'var(--black)' }}>
                {activeData.name}
              </h2>
              <p className="text-xl md:text-3xl text-primary-500 font-semibold">
                {activeData.tagline}
              </p>
            </div>

            {/* Model Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {activeData.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-500"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <ModelCardEnhanced
                    title={solution.title}
                    description={solution.description}
                    inputLabel={solution.inputLabel}
                    inputIcon={solution.inputIcon}
                    outputLabel={solution.outputLabel}
                    outputIcon={solution.outputIcon}
                    models={solution.models}
                    metric={solution.metric}
                    metricValue={solution.metricValue}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Powered By Section */}
      <section className="py-12 md:py-20 bg-white border-t border-neutral-200">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm md:text-base mb-8 md:mb-12 uppercase tracking-wider font-semibold" style={{ color: 'var(--gray-600)' }}>Powered by leading AI platforms</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <div className="group flex flex-col md:flex-row items-center gap-2 md:gap-4 px-3 md:px-5 py-3 rounded-xl hover:bg-cream-50 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <OpenAILogo className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-sm md:text-lg font-semibold group-hover:text-dark-900 transition-colors" style={{ color: 'var(--gray-700)' }}>OpenAI</span>
            </div>
            <div className="group flex flex-col md:flex-row items-center gap-2 md:gap-4 px-3 md:px-5 py-3 rounded-xl hover:bg-cream-50 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-[#D4A27F] flex items-center justify-center group-hover:scale-110 transition-transform">
                <AnthropicLogo className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-sm md:text-lg font-semibold group-hover:text-dark-900 transition-colors" style={{ color: 'var(--gray-700)' }}>Anthropic</span>
            </div>
            <div className="group flex flex-col md:flex-row items-center gap-2 md:gap-4 px-3 md:px-5 py-3 rounded-xl hover:bg-cream-50 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden border border-neutral-200">
                <img src="/logos/google-gemini-icon.webp" alt="Gemini" className="w-6 h-6 md:w-9 md:h-9 object-contain" />
              </div>
              <span className="text-sm md:text-lg font-semibold group-hover:text-dark-900 transition-colors" style={{ color: 'var(--gray-700)' }}>Google AI</span>
            </div>
            <div className="group flex flex-col md:flex-row items-center gap-2 md:gap-4 px-3 md:px-5 py-3 rounded-xl hover:bg-cream-50 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl overflow-hidden group-hover:scale-110 transition-transform">
                <img src="/logos/Meta-ai-logo.webp" alt="Meta AI" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm md:text-lg font-semibold group-hover:text-dark-900 transition-colors" style={{ color: 'var(--gray-700)' }}>Meta AI</span>
            </div>
            <div className="group flex flex-col md:flex-row items-center gap-2 md:gap-4 px-3 md:px-5 py-3 rounded-xl hover:bg-cream-50 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-black p-1.5 md:p-2 overflow-hidden group-hover:scale-110 transition-transform">
                <img src="/logos/Mistral_AI_logo_(2025–).svg.png" alt="Mistral" className="w-full h-full object-contain" />
              </div>
              <span className="text-sm md:text-lg font-semibold group-hover:text-dark-900 transition-colors" style={{ color: 'var(--gray-700)' }}>Mistral</span>
            </div>
            <div className="group flex flex-col md:flex-row items-center gap-2 md:gap-4 px-3 md:px-5 py-3 rounded-xl hover:bg-cream-50 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl overflow-hidden group-hover:scale-110 transition-transform">
                <img src="/logos/hf-logo.png" alt="Hugging Face" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm md:text-lg font-semibold group-hover:text-dark-900 transition-colors" style={{ color: 'var(--gray-700)' }}>Hugging Face</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 relative overflow-hidden" style={{ background: 'var(--cream)' }}>
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" style={{ color: 'var(--black)' }}>
            Ready to Deploy{' '}
            <span className="text-gradient">
              ML Solutions
            </span>
            ?
          </h2>
          <p className="text-lg md:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            Our team delivers production-ready models tailored to your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              Schedule Consultation
            </Link>
            <Link
              href="/case-studies"
              className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
