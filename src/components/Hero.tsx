import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  lang: 'ar' | 'en';
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuoteModal }) => {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity pointer-events-none">
        <img
          src={COMPANY_INFO.heroImage}
          alt="Arab Corner Infrastructure Construction"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Copy & Action Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* National Vision Kicker */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-cyan-400 font-medium text-xs sm:text-sm tracking-wide">
              <span className="font-semibold text-white/90">المملكة العربية السعودية</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>{isAr ? COMPANY_INFO.sloganAr : COMPANY_INFO.sloganEn}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-400">{isAr ? 'خبرة 25 عاماً' : '25 Years Experience'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl/tight font-bold tracking-tight text-white font-heading text-balance">
              {isAr ? (
                <>
                  من قلب المملكة، نُشيد <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 via-sky-300 to-white">البُنى التحتية</span> ونقود مقاولات المستقبل
                </>
              ) : (
                <>
                  From the Kingdom’s Heart, We Construct <span className="text-cyan-400">Pioneering Landmarks</span> & Commercial Infrastructure
                </>
              )}
            </h1>

            {/* Subtitle with high-converting value proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty font-light">
              {isAr ? (
                <>
                  شريككم الهندسي المعتمد لأكثر من ربع قرن في تشييد المباني الحكومية والتجارية، أعمال المقاولات المتكاملة، الأعمال الكهروميكانيكية (MEP)، التصميم الداخلي، والتوريدات التجارية بأعلى معايير كود البناء السعودي.
                </>
              ) : (
                <>
                  Your trusted engineering partner for over 25 years in turnkey commercial, governmental, and healthcare construction, MEP engineering, interior architecture, and strategic commercial supply across Saudi Arabia.
                </>
              )}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 group whitespace-nowrap shrink-0"
              >
                <span>{isAr ? 'طلب عرض سعر تفصيلي' : 'Request Detailed RFQ'}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-[-3px]" />
              </button>

              <a
                href="#projects"
                className="px-6 py-3.5 text-sm sm:text-base font-medium text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800/80 rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>{isAr ? 'استعراض المشاريع المنجزة' : 'Explore Projects'}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{isAr ? 'كود البناء السعودي (SBC)' : 'Saudi Building Code'}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{isAr ? 'ضمان شامل ومتابعة دورية' : 'Comprehensive Warranty'}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span>{isAr ? 'مشاريع كبرى مع روشن وبودل' : 'Tier-1 Projects (ROSHN)'}</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-xs">
              <div className="aspect-[4/3] w-full relative overflow-hidden group">
                <img
                  src={COMPANY_INFO.heroImage}
                  alt="Saudi Construction Engineering"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs backdrop-blur-md">
                  <div className="flex items-center justify-between font-medium text-white mb-1">
                    <span className="font-heading">{isAr ? 'أحدث الإنجازات الميدانية' : 'Marquee Highlights'}</span>
                    <span className="text-cyan-400 font-mono">2024-2025</span>
                  </div>
                  <p className="text-slate-300 line-clamp-2">
                    {isAr 
                      ? 'مشاريع الأبراج في وادي سدرة (روشن) ومجمع بودل التجاري والمراكز الصحية في الرياض والقويعية والرين.' 
                      : 'Sedra Valley Towers (ROSHN), Boudl Commercial Complex, and specialized medical clinics in Riyadh & Al Rayn.'}
                  </p>
                </div>
              </div>

              {/* Quick Contact Ribbon */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">{isAr ? 'للتواصل المباشر مع الإدارة الهندسية:' : 'Direct Engineering Line:'}</span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                  dir="ltr"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
