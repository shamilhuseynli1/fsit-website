'use client';

import { useState } from 'react';
import Link from 'next/link';

type ChatStep = 'welcome' | 'options' | 'lead-capture' | 'thank-you';
type Language = 'en' | 'ar';

const translations = {
  en: {
    welcome: "Hi! I'm FSIT's AI assistant. What brings you here today?",
    hiretalent: 'Hire AI Talent',
    buildsystem: 'Build AI System',
    learnmore: 'Learn About FSIT',
    leadcapture: "Great choice! Let me connect you with the right team. Please share your details:",
    name: 'Your Name',
    company: 'Company',
    role: 'Your Role',
    phone: 'Phone Number',
    requirement: 'Brief Requirement',
    submit: 'Submit',
    thankyou: 'Thank you! Our team will contact you within 24 hours.',
    close: 'Close',
    startover: 'Start Over',
    back: 'Back',
    switchlang: 'عربي',
  },
  ar: {
    welcome: 'مرحبا! أنا مساعد FSIT الذكي. كيف يمكنني مساعدتك اليوم؟',
    hiretalent: 'توظيف خبراء الذكاء الاصطناعي',
    buildsystem: 'بناء نظام ذكاء اصطناعي',
    learnmore: 'معرفة المزيد عن FSIT',
    leadcapture: 'اختيار رائع! دعني أوصلك بالفريق المناسب. يرجى مشاركة بياناتك:',
    name: 'الاسم',
    company: 'الشركة',
    role: 'المسمى الوظيفي',
    phone: 'رقم الهاتف',
    requirement: 'متطلباتك باختصار',
    submit: 'إرسال',
    thankyou: 'شكراً لك! سيتواصل معك فريقنا خلال 24 ساعة.',
    close: 'إغلاق',
    startover: 'البدء من جديد',
    back: 'رجوع',
    switchlang: 'English',
  },
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>('welcome');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>('en');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    phone: '',
    requirement: '',
  });

  const t = translations[lang];
  const isRtl = lang === 'ar';

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === 'learnmore') {
      // Direct navigation
      window.location.href = '/about';
    } else {
      setStep('lead-capture');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Chatbot lead:', { option: selectedOption, ...formData });
    setStep('thank-you');
  };

  const resetChat = () => {
    setStep('welcome');
    setSelectedOption(null);
    setFormData({ name: '', company: '', role: '', phone: '', requirement: '' });
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-16 h-16 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${!isOpen ? 'animate-float' : ''}`}
        style={{ background: 'var(--green)' }}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-7 h-7 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-20 md:bottom-24 right-2 left-2 md:left-auto md:right-6 z-50 w-auto md:w-96 rounded-2xl shadow-2xl overflow-hidden animate-fade-in max-h-[80vh] md:max-h-none"
          style={{ background: 'var(--white)', border: '1px solid var(--gray-100)' }}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {/* Header */}
          <div className="p-4 flex items-center justify-between" style={{ background: 'var(--green)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">FSIT AI Assistant</p>
                <p className="text-white/70 text-xs">Online</p>
              </div>
            </div>
            <button
              onClick={toggleLanguage}
              className="text-white/80 hover:text-white text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors"
            >
              {t.switchlang}
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-3 md:p-4 min-h-[240px] md:min-h-[280px] max-h-[50vh] md:max-h-[400px] overflow-y-auto">
            {step === 'welcome' && (
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[85%]">
                  <p className="text-sm" style={{ color: 'var(--black)' }}>{t.welcome}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleOptionClick('hiretalent')}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                    style={{ background: 'var(--cream)', color: 'var(--green)', border: '1px solid var(--green)' }}
                  >
                    {t.hiretalent}
                  </button>
                  <button
                    onClick={() => handleOptionClick('buildsystem')}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                    style={{ background: 'var(--cream)', color: 'var(--green)', border: '1px solid var(--green)' }}
                  >
                    {t.buildsystem}
                  </button>
                  <button
                    onClick={() => handleOptionClick('learnmore')}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                    style={{ background: 'var(--cream)', color: 'var(--green)', border: '1px solid var(--green)' }}
                  >
                    {t.learnmore}
                  </button>
                </div>
              </div>
            )}

            {step === 'lead-capture' && (
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[85%]">
                  <p className="text-sm" style={{ color: 'var(--black)' }}>{t.leadcapture}</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder={t.name}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    placeholder={t.company}
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    placeholder={t.role}
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="tel"
                    placeholder={t.phone}
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <textarea
                    placeholder={t.requirement}
                    rows={2}
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep('welcome')}
                      className="flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80"
                      style={{ background: 'var(--cream)', color: 'var(--green)', border: '1px solid var(--green)' }}
                    >
                      {t.back}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                      style={{ background: 'var(--green)' }}
                    >
                      {t.submit}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 'thank-you' && (
              <div className="space-y-4 text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ background: 'var(--green)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm" style={{ color: 'var(--black)' }}>{t.thankyou}</p>
                <button
                  onClick={resetChat}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ background: 'var(--cream)', color: 'var(--green)' }}
                >
                  {t.startover}
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t" style={{ borderColor: 'var(--gray-100)' }}>
            <p className="text-xs text-center" style={{ color: 'var(--gray-400)' }}>
              Powered by FSIT AI
            </p>
          </div>
        </div>
      )}
    </>
  );
}
