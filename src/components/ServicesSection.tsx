import React, { useState } from 'react';
import { Building2, Cpu, Palette, Briefcase, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, X } from 'lucide-react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  lang: 'ar' | 'en';
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectServiceForQuote }) => {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-7 h-7 text-cyan-600" />,
    Cpu: <Cpu className="w-7 h-7 text-cyan-600" />,
    Palette: <Palette className="w-7 h-7 text-cyan-600" />,
    Briefcase: <Briefcase className="w-7 h-7 text-cyan-600" />
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wider mb-2">
              <span>{isAr ? 'قطاعات الأعمال' : 'CORE CAPABILITIES'}</span>
              <span aria-hidden="true">·</span>
              <span>{isAr ? 'حلول هندسية وتجارية متكاملة' : 'Integrated Contracting & Trading'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
              {isAr ? 'خدماتنا المتخصصة بأعلى معايير الاتقان والجودة' : 'Specialized Services Delivered with Engineering Precision'}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-light">
              {isAr
                ? 'نُقدم منظومة خدمات شاملة تغطي كافة مراحل البناء والتأسيس والأعمال الكهروميكانيكية والتصاميم والتوريدات التجارية.'
                : 'A comprehensive suite of capabilities covering all phases of construction, MEP engineering, smart building automation, interior architecture, and commercial supply chain.'}
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              {isAr ? 'كافة الأعمال تخضع لإشراف هندسي وضمان معتمد' : 'All works backed by certified warranty & supervision'}
            </span>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const isMarquee = index === 0 || index === 1;

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-8 border transition-all flex flex-col justify-between group ${
                  isMarquee
                    ? 'bg-gradient-to-br from-slate-50 via-white to-slate-50/50 border-slate-200 shadow-xs hover:border-cyan-400 hover:shadow-lg'
                    : 'bg-white border-slate-200 shadow-xs hover:border-cyan-400 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-colors">
                      {iconMap[service.icon]}
                    </div>
                    
                    <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-100">
                      {isAr ? service.badge : service.badgeEn}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading group-hover:text-cyan-700 transition-colors">
                    {isAr ? service.title : service.titleEn}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 mt-1 mb-4">
                    {isAr ? service.tagline : service.taglineEn}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {isAr ? service.description : service.descriptionEn}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-8 border-t border-slate-100 pt-5">
                    {(isAr ? service.features : service.featuresEn).slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-4">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {isAr ? 'عرض التفاصيل والمواصفات' : 'View Full Specifications'}
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(isAr ? service.title : service.titleEn)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span>{isAr ? 'طلب تسعير' : 'Inquire Now'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consultation Callout */}
        <div className="mt-12 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 font-heading">
                {isAr ? 'هل لديك مشروع خاص بمواصفات محددة أو رغبة في استشارة ميدانية؟' : 'Need custom technical specifications or an onsite engineering consult?'}
              </p>
              <p className="text-xs text-slate-500">
                {isAr ? 'فريقنا الهندسي جاهز لمراجعة المخططات وتقديم أفضل التوصيات الفنية والاقتصادية.' : 'Our engineers are ready to review your blueprints and provide optimal value engineering.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectServiceForQuote(isAr ? 'استشارة هندسية عامة' : 'General Engineering Consultation')}
            className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white border border-slate-300 hover:border-slate-400 rounded-lg shadow-2xs whitespace-nowrap shrink-0 transition-colors"
          >
            {isAr ? 'طلب استشارة هندسية' : 'Request Consultation'}
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                {iconMap[activeModalService.icon]}
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-700">
                  {isAr ? activeModalService.badge : activeModalService.badgeEn}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {isAr ? activeModalService.title : activeModalService.titleEn}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {isAr ? activeModalService.description : activeModalService.descriptionEn}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {isAr ? 'المخرجات ونطاق العمل التفصيلي:' : 'Key Deliverables & Scope:'}
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {(isAr ? activeModalService.features : activeModalService.featuresEn).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
              <button
                onClick={() => {
                  const sTitle = isAr ? activeModalService.title : activeModalService.titleEn;
                  setActiveModalService(null);
                  onSelectServiceForQuote(sTitle);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>{isAr ? 'طلب عرض سعر لهذه الخدمة' : 'Request Quote for This Service'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
