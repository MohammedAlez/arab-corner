import React, { useState } from 'react';
import { Menu, X, Phone, Globe, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  const navLinks = [
    { href: '#home', label: isAr ? 'الرئيسية' : 'Home' },
    { href: '#about', label: isAr ? 'من نحن' : 'About' },
    { href: '#services', label: isAr ? 'خدماتنا' : 'Services' },
    { href: '#projects', label: isAr ? 'مشاريعنا' : 'Projects' },
    { href: '#contact', label: isAr ? 'اتصل بنا' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 h-16 sm:h-20">
          
          {/* Zone 1: Brand Zone - Compact on mobile to avoid overflow */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group shrink-0 max-w-[210px] sm:max-w-none">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 shrink-0">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Arab Corner Logo"
                referrerPolicy="no-referrer"
                className="w-7 h-7 sm:w-9 sm:h-9 object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 font-heading leading-tight truncate">
                {isAr ? 'ركن العرب' : 'Arab Corner'}
              </span>
              <span className="text-[10px] sm:text-xs text-cyan-700 font-medium leading-none truncate mt-0.5">
                {isAr ? 'للتجارة والمقاولات' : 'Trading & Contracting'}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-600 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions - Adaptive for mobile */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="flex items-center gap-1 px-2 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 hover:text-slate-950 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0"
              title={isAr ? 'Switch to English' : 'التحويل للعربية'}
              aria-label="Language switch"
            >
              <Globe className="w-3 h-3 text-slate-500" />
              <span>{isAr ? 'EN' : 'عربي'}</span>
            </button>

            {/* Direct Phone Call Button (desktop/tablet) */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span dir="ltr">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            {/* Primary Action Button (visible on md+, on mobile available in menu and sticky bar) */}
            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:flex px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg shadow-sm transition-all items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>{isAr ? 'طلب تسعير' : 'Get Quote'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span dir="ltr">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg text-center"
            >
              {isAr ? 'طلب تسعير مشروعك' : 'Request Project Quotation'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
