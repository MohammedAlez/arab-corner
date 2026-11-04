import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { VisionSection } from './components/VisionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';
import { ProjectsLibrary } from './components/ProjectsLibrary';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledNotes, setPrefilledNotes] = useState('');

  // Synchronize HTML lang and direction
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleOpenQuoteModal = (service?: string, notes?: string) => {
    if (service) setPrefilledService(service);
    if (notes) setPrefilledNotes(notes);
    setIsQuoteOpen(true);
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledNotes(`طلب تسعير خاص بخدمة: ${serviceTitle}`);
    setIsQuoteOpen(true);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 pb-16 sm:pb-0 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* Top Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Quantitative Proof Strip */}
        <StatsBar lang={lang} />

        {/* About Us & Core Pillars */}
        <AboutSection lang={lang} />

        {/* Core Services Bento */}
        <ServicesSection
          lang={lang}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* Projects Showcase with filters */}
        <ProjectsShowcase
          lang={lang}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* New Projects Library with Masonry Grid & Random Slide Showcase */}
        <ProjectsLibrary
          lang={lang}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Saudi Vision 2030 & Strategic Goals */}
        <VisionSection lang={lang} />

        {/* Conversion Contact Form & Details with 50/50 Map */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => {
          setIsQuoteOpen(false);
          setPrefilledService('');
          setPrefilledNotes('');
        }}
        lang={lang}
        prefilledService={prefilledService}
        prefilledNotes={prefilledNotes}
      />

      {/* Floating WhatsApp Quick Contact Button (Bottom Left) */}
      <aside aria-label="تواصل سريع عبر واتساب" className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center gap-2.5">
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label={lang === 'ar' ? 'تواصل سريع عبر واتساب' : 'Quick WhatsApp Contact'}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

          {/* Official WhatsApp Silhouette SVG */}
          <svg
            className="w-8 h-8 fill-white drop-shadow-xs relative z-10 transition-transform group-hover:rotate-6"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>

          {/* Tooltip on Hover */}
          <span className="hidden sm:block absolute start-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            {lang === 'ar' ? 'تواصل معنا عبر واتساب' : 'Chat on WhatsApp'}
          </span>
        </a>
      </aside>

      {/* Mobile Floating Quick CTA Bar */}
      {/* <div className="fixed bottom-3 left-3 right-3 sm:hidden z-40 bg-slate-950/95 backdrop-blur-md rounded-xl p-2 border border-slate-800 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
          <span>{lang === 'ar' ? 'اتصال مباشر' : 'Call'}</span>
        </a>

        <button
          onClick={() => handleOpenQuoteModal()}
          className="py-2 px-3 bg-cyan-400 text-slate-950 rounded-lg text-xs font-bold"
        >
          {lang === 'ar' ? 'طلب تسعير' : 'Quote'}
        </button>
      </div> */}
    </div>
  );
}
