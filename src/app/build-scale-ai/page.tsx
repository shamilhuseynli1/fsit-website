'use client';

import { useState } from 'react';
import Image from 'next/image';
import NetworkBackground from '@/components/NetworkBackground';

type FormStep = 1 | 2 | 3 | 4;

export default function BuildScaleAI() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState({
    role: '',
    projectType: '',
    companySize: '',
    country: '',
    expertsNeeded: '',
    duration: '',
    engagementDuration: '',
    commitment: '',
    engagementLocation: '',
    startDate: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const roles = [
    { category: 'Core AI Roles', options: ['AI Engineer', 'Machine Learning Engineer', 'Senior AI Engineer', 'Data Scientist', 'Applied AI Specialist', 'AI Research Engineer'] },
    { category: 'Generative AI & LLM Roles', options: ['Generative AI Engineer', 'LLM Engineer', 'AI Copilot / AI Agent Developer', 'Prompt Engineer', 'Conversational AI Specialist'] },
    { category: 'AI Product & Delivery', options: ['AI Product Manager', 'AI Product Owner', 'AI Technical Lead', 'AI Solutions Architect'] },
    { category: 'AI Operations & Infrastructure', options: ['MLOps Engineer', 'AI Platform Engineer', 'AI Infrastructure Engineer', 'Cloud AI Engineer'] },
    { category: 'Data & Analytics', options: ['Data Engineer', 'Analytics Engineer', 'Business Intelligence (BI) Specialist', 'AI Analytics Consultant'] },
    { category: 'Automation & Intelligent Systems', options: ['AI Automation Engineer', 'Intelligent Process Automation (IPA) Specialist', 'RPA & AI Engineer'] },
    { category: 'Governance, Risk & Enterprise AI', options: ['AI Governance & Compliance Specialist', 'Responsible AI Specialist', 'AI Security Engineer'] },
    { category: 'Other', options: ['Custom AI Roles (Upon Request)'] },
  ];

  const projectTypes = ['AI/ML Development', 'Data Platform', 'LLM/GenAI Implementation', 'MLOps/Infrastructure', 'AI Strategy Consulting', 'Full AI Transformation'];
  const companySizes = ['1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', '500+ employees'];
  const countries = ['Saudi Arabia', 'UAE', 'Qatar', 'Bahrain', 'Kuwait', 'Oman', 'Egypt', 'Jordan', 'Other'];
  const expertCounts = ['1', '2-3', '4-5', '6-10', '10+'];
  const durations = ['Less than 1 month', '1-3 months', '3-6 months', '6-12 months', '12+ months'];
  const commitments = ['Full-time', 'Part-time', 'Flexible'];
  const locations = ['On-site', 'Remote', 'Hybrid'];
  const startDates = ['Immediately', 'Within 2 weeks', 'Within 1 month', 'Within 3 months', 'Flexible'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as FormStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as FormStep);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission. Our team will contact you shortly!');
  };

  const stepLabels = ['Role & Project', 'Location', 'Requirements', 'Your Details'];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1738410775719-9f237adb266d?auto=format&fit=crop&w=1920&q=80"
          alt="Build Scale AI"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <NetworkBackground nodeCount={60} maxDistance={120} />
        <div className="relative container-max py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-green-400 font-semibold text-sm tracking-wider uppercase mb-4">Start Your AI Journey</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Build and Scale <span className="text-green-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Access elite AI talent to accelerate your AI transformation
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-neutral-150">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card !p-8 md:!p-12">
            <h2 className="text-2xl font-bold text-dark-900 text-center mb-2">
              Leverage Vetted Talent
            </h2>
            <p className="text-dark-500 text-center mb-8">
              Tell us about your AI needs
            </p>

            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-10">
              {stepLabels.map((label, index) => (
                <div key={index} className="flex-1 text-center">
                  <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-300 ${
                    currentStep > index + 1
                      ? 'bg-green-500 text-white'
                      : currentStep === index + 1
                        ? 'bg-primary-500 text-white'
                        : 'bg-neutral-200 text-dark-500'
                  }`}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentStep > index + 1 ? 'white' : currentStep === index + 1 ? 'white' : '#9CA3AF' }} />
                  </div>
                  <p className={`text-xs hidden md:block ${currentStep === index + 1 ? 'text-primary-500 font-semibold' : 'text-dark-500'}`}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Role & Project */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-semibold text-dark-900 mb-4">Role & Project Information</h3>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      What Role Would You Like to Hire?*
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a role</option>
                      {roles.map((category, catIndex) => (
                        <optgroup key={catIndex} label={category.category}>
                          {category.options.map((option, optIndex) => (
                            <option key={optIndex} value={option}>{option}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      What Type of Projects Are You Hiring For?*
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      How Many People Are Employed At Your Company?*
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Location */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-semibold text-dark-900 mb-4">Location</h3>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Which Country Are You Working In?*
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-semibold text-dark-900 mb-4">Job Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        How Many Experts Do You Need?*
                      </label>
                      <select
                        name="expertsNeeded"
                        value={formData.expertsNeeded}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select</option>
                        {expertCounts.map((count, index) => (
                          <option key={index} value={count}>{count}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        How Long Do You Need The Experts?*
                      </label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select</option>
                        {durations.map((duration, index) => (
                          <option key={index} value={duration}>{duration}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Engagement Duration*
                      </label>
                      <select
                        name="engagementDuration"
                        value={formData.engagementDuration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select</option>
                        {durations.map((duration, index) => (
                          <option key={index} value={duration}>{duration}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        What Commitment Will You Require?*
                      </label>
                      <select
                        name="commitment"
                        value={formData.commitment}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select</option>
                        {commitments.map((commitment, index) => (
                          <option key={index} value={commitment}>{commitment}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Engagement Location*
                      </label>
                      <select
                        name="engagementLocation"
                        value={formData.engagementLocation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select</option>
                        {locations.map((location, index) => (
                          <option key={index} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        When Do You Need The Experts To Start?*
                      </label>
                      <select
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select</option>
                        {startDates.map((date, index) => (
                          <option key={index} value={date}>{date}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Details */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-semibold text-dark-900 mb-4">Your Contact Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Business Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Previous
                  </button>
                ) : (
                  <div />
                )}
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Submit Request
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y" style={{ background: '#F5F5F3', borderColor: 'var(--gray-100)' }}>
        <div className="container-max">
          <p className="text-xl font-semibold text-center mb-8" style={{ color: 'var(--gray-600)' }}>Trusted by leading organizations</p>

          {/* Client Logos */}
          <div className="flex justify-center flex-wrap gap-12 mb-10">
            {[
              { name: 'Arab Bank', logo: '/clients/Arab-Bank-Logo.png' },
              { name: 'Tadawul', logo: '/clients/Saudi-Tadawul-Logo.png' },
              { name: 'NCB Capital', logo: '/clients/NCB-Capital-Logo.png' },
              { name: 'Vision 2030', logo: '/clients/Vision-2023-Logo.png' },
              { name: 'Jadwa Investment', logo: '/clients/Jadwa-Investment-Logo.png' },
              { name: 'Public Pension Agency', logo: '/clients/Public-Pension-Agency-Logo-Wide.png' },
              { name: 'Emirates NBD', logo: '/clients/Emirates-NBD-Logo-Wide.png' },
            ].map((client, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center h-20 w-48">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={192}
                  height={80}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center pt-8 border-t" style={{ borderColor: 'var(--gray-200)' }}>
            <div className="flex items-center gap-2">
              <span className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--green)' }}>80K+</span>
              <span className="text-base" style={{ color: 'var(--gray-500)' }}>AI Experts in Network</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--green)' }}>99%</span>
              <span className="text-base" style={{ color: 'var(--gray-500)' }}>Applicants vetted out</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--green)' }}>98%</span>
              <span className="text-base" style={{ color: 'var(--gray-500)' }}>Client Retention Rate</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
