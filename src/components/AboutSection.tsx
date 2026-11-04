import React from 'react';
import { ShieldCheck, TrendingUp, Award, CheckCircle2, Building, Compass, Quote } from 'lucide-react';
import { CORE_PILLARS, PHILOSOPHY_QUOTES } from '../data/companyData';

interface AboutSectionProps {
  lang: 'ar' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-cyan-600" />,
    Award: <Award className="w-6 h-6 text-cyan-600" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6 text-cyan-600" />
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wider mb-2">
            <span>{isAr ? 'عن ركن العرب' : 'ABOUT ARAB CORNER'}</span>
            <span aria-hidden="true">·</span>
            <span>{isAr ? 'مسيرة ربع قرن' : 'Quarter Century Journey'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            {isAr ? 'ريادة وطنية وشراكات راسخة في مسيرة التنمية والتطوير' : 'National Leadership & Enduring Partnerships in Saudi Growth'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            {isAr ? (
              <>
                يشرفنا بأننا نعمل في السوق السعودي لقرابة <strong>25 سنة</strong> من العطاء المستمر. وبفضل الله ثم دعم قيادتنا الرشيدة، واصلنا النمو والتطور لتقديم حلول إنشائية وتجارية متكاملة تُلبي تطلعات القطاعات الحكومية والتجارية والخاصة، مع المساهمة الفاعلة في مشاريع البنية التحتية من طرق وتمديدات ومرافق خدمية حيوية.
              </>
            ) : (
              <>
                Proudly operating in the Saudi market for nearly <strong>25 years</strong>. Guided by the Kingdom’s visionary leadership, we have grown into an integrated engineering and commercial entity executing government, commercial, and private infrastructure projects, civil services, and supply solutions across Saudi Arabia.
              </>
            )}
          </p>
        </div>

        {/* The 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:border-cyan-500/50 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {iconMap[pillar.icon]}
              </div>

              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {isAr ? pillar.title : pillar.titleEn}
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  0{idx + 1}
                </span>
              </div>

              <p className="text-xs font-semibold text-cyan-700 mb-3">
                {isAr ? pillar.subtitle : pillar.subtitleEn}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {isAr ? pillar.description : pillar.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Philosophy Card with Quote */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                <Quote className="w-5 h-5 text-cyan-400" />
                <span>{isAr ? 'فلسفتنا في العمل والشراكة' : 'Our Guiding Philosophy'}</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium text-white/95 leading-relaxed font-heading">
                "{isAr ? PHILOSOPHY_QUOTES[0].quoteAr : PHILOSOPHY_QUOTES[0].quoteEn}"
              </blockquote>
              <p className="text-sm text-slate-300 font-light">
                {isAr ? PHILOSOPHY_QUOTES[1].quoteAr : PHILOSOPHY_QUOTES[1].quoteEn}
              </p>
            </div>

            <div className="lg:col-span-4 lg:border-r lg:border-slate-800 lg:pr-8 space-y-4">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-300 font-heading">
                  <Building className="w-4 h-4" />
                  <span>{isAr ? 'عميلنا هو شريكنا' : 'Client as Partner'}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isAr 
                    ? 'نُصغي، نبتكر، ونُلبي... لأننا نؤمن أن العميل لا يبحث عن صفقة، بل عن شريك نجاح موثوق يرافقه خطوة بخطوة.'
                    : 'We listen, innovate, and fulfill because we believe our clients seek a trusted success partner, not a quick deal.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-300 font-heading">
                  <Compass className="w-4 h-4" />
                  <span>{isAr ? 'نُخطط للمستقبل، ونُقدم الأفضل اليوم' : 'Planning for Tomorrow'}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isAr
                    ? 'رؤيتنا تتجاوز الأرباح؛ نطمح إلى الريادة المستمرة وتعزيز ثقة شركائنا في مختلف أنحاء المملكة.'
                    : 'Our vision transcends short-term gain; we pursue enduring leadership and deep stakeholder trust across KSA.'}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
