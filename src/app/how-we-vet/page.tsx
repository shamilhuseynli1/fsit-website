import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'How We Vet Elite AI Talent | FSIT AI',
  description: 'At FSIT, our vetting process ensures only top-tier AI professionals become part of our augmented intelligence network.',
};

export default function HowWeVet() {
  const vettingSteps = [
    {
      number: '1',
      title: 'Comprehensive Technical Evaluation',
      description: 'Candidates are assessed across:',
      items: [
        'Machine Learning & Deep Learning fundamentals',
        'Hands-on experience with Large Language Models (LLMs)',
        'MLOps and production AI deployment',
        'Programming expertise (Python, TensorFlow, PyTorch, etc.)',
        'Secure and scalable AI infrastructure',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'AI Delivery & Product Experience',
      description: 'We evaluate:',
      items: [
        'Proven delivery of production-grade AI systems',
        'Experience working with enterprise or government stakeholders',
        'Ability to translate AI into business impact',
        'Understanding of governance, security, and compliance',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Behavioral & Cultural Fit',
      description: 'We assess:',
      items: [
        'Communication and collaboration skills',
        'Adaptability within enterprise environments',
        'Structured problem-solving',
        'Client-centric mindset',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: '4',
      title: 'Practical Test Assignments',
      description: 'Senior candidates complete scenario-based exercises to validate:',
      items: [
        'AI solution design for real use cases',
        'Scalable and maintainable architectures',
        'Decision-making in complex data environments',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: '5',
      title: 'Continuous Performance Monitoring',
      description: 'Once deployed, we maintain quality through:',
      items: [
        'Engagement feedback',
        'Ongoing skills validation',
        'Outcome-based assessments',
        'Continuous technical upskilling',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-dark bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        <NetworkBackground nodeCount={60} />
        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-6">Quality Assurance</p>
            <h1 className="hero-title text-white">
              How We Vet{' '}
              <span className="text-primary-500">Elite AI Talent</span>
            </h1>
            <p className="hero-subtitle">
              At FSIT, our vetting process ensures only top-tier AI professionals become part of our augmented intelligence network
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Vetting Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Our Process</p>
            <h2 className="section-title">5-Step Vetting Framework</h2>
          </div>
          <div className="space-y-6">
            {vettingSteps.map((step, index) => (
              <div key={index} className="card card-hover">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white">
                      <span className="font-bold text-2xl">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-primary-500">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-dark-900">{step.title}</h3>
                    </div>
                    <p className="text-dark-500 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-dark-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cutting Edge Note */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-white font-medium">
            This ensures that the professionals you work with remain at the<br />
            <span className="font-bold">cutting edge of AI delivery</span>
          </p>
        </div>
      </section>

      {/* Why Our Vetting Matters */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">The Result</p>
            <h2 className="section-title">Why Our Vetting Matters</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="card-dark text-center">
              <p className="text-6xl md:text-7xl font-bold text-primary-500 mb-4">99%</p>
              <p className="text-xl text-white mb-4">
                We filter out up to 99% of applicants
              </p>
              <p className="text-dark-300">
                ensuring organizations gain access to trusted AI capacity capable of delivering real, scalable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <p className="text-xl text-dark-500 mb-4">With FSIT, you don&apos;t just access talent —</p>
          <h2 className="section-title">
            you gain augmented intelligence{' '}
            <span className="text-primary-500">engineered for results.</span>
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900">
        <div className="container-max text-center">
          <h2 className="section-title !text-white mb-4">
            Ready to access elite AI talent?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Start your AI transformation with vetted experts
          </p>
          <Link href="/build-scale-ai" className="btn-primary">
            Build & Scale AI
          </Link>
        </div>
      </section>
    </>
  );
}
