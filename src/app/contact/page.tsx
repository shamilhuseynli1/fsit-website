'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactOptions = [
    {
      title: 'Talk to an AI delivery lead',
      description: 'Discuss your objectives, constraints, and opportunities with practitioners who build and operate AI systems',
      cta: 'Connect',
      href: '#contact-form',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Start with a pilot',
      description: 'Define a focused, production-oriented AI use case with a clear path to scale',
      cta: 'Pilot portal',
      href: '/build-scale-ai',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Enterprise & government enquiries',
      description: 'Engage FSIT for long-term AI delivery, deployment, and operational support',
      cta: 'Get help',
      href: '#contact-form',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const contactInfo = [
    {
      title: 'Address',
      content: 'Aknaz Building, Office 26 Tahliya St, Al Olaya District Riyadh 7843-12222, KSA',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'AI Inquiries',
      content: 'ai@fsitksa.com',
      href: 'mailto:ai@fsitksa.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Business Development',
      content: 'bd@fsitksa.com',
      href: 'mailto:bd@fsitksa.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'BD Direct Line',
      content: '+966 50 123 4567',
      href: 'tel:+966501234567',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1694018359679-49465b4c0d61?auto=format&fit=crop&w=1920&q=80"
          alt="Riyadh Skyline"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container-max py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-green-400 font-bold text-lg tracking-wide uppercase mb-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Contact Us</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Let&apos;s build AI that{' '}
              <span className="text-green-400">actually runs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Whether you are exploring your first AI initiative or scaling existing systems, FSIT works with organisations ready to move from intent to execution
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'var(--black)' }}>How can we help?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <div key={index} className="group flex flex-col h-full bg-neutral-50 border border-green-500/20 rounded-2xl p-8 hover:border-green-500 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  {option.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-dark-900 mb-3">{option.title}</h3>
                <p className="text-dark-500 text-base md:text-lg mb-6 flex-grow">{option.description}</p>
                <Link href={option.href} className="inline-flex items-center gap-2 text-green-600 font-medium text-base md:text-lg hover:gap-3 transition-all mt-auto">
                  {option.cta}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16" style={{ background: 'var(--cream)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white border border-green-500/20 rounded-2xl p-5 md:p-6 text-center hover:border-green-500 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-dark-900 mb-2 text-base md:text-lg">{info.title}</h3>
                {info.href ? (
                  <a href={info.href} className="text-dark-500 text-sm md:text-base hover:text-green-600 transition-colors block">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-dark-500 text-sm md:text-base">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="py-20 md:py-28 bg-white" id="contact-form">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--black)' }}>Get in Touch</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll personalize the right experience for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-neutral-50 border border-green-500/20 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-base font-medium text-dark-700 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-base border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-base font-medium text-dark-700 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-base border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-base font-medium text-dark-700 mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-base border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-dark-700 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-base border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-base font-medium text-dark-700 mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 text-base border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-lg px-8 py-4">
                  Submit
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-neutral-50 border border-green-500/20 rounded-2xl p-8 overflow-hidden">
              <h3 className="text-xl md:text-2xl font-semibold text-dark-900 mb-6">Find Us On The Map</h3>
              <div className="h-80 lg:h-[calc(100%-4rem)] bg-neutral-100 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.674368867583!2d46.6821!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnNTUuNiJF!5e0!3m2!1sen!2ssa!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FSIT Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--black)' }}>
            Ready to start your <span className="text-green-600">AI transformation</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Talk to our AI delivery team today
          </p>
          <Link href="/build-scale-ai" className="btn-primary text-lg px-8 py-4">
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
