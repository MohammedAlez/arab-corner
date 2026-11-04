import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface VisionSectionProps {
  lang: 'ar' | 'en';
}

export const VisionSection: React.FC<VisionSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const strategicGoals = [
    {
      titleAr: 'تحقيق أعلى مستويات الجودة والكفاءة',
      titleEn: 'Highest Quality & Engineering Efficiency',
      descAr: 'الالتزام بكود البناء السعودي الصارم وضمان سلامة واستدامة كل منشأة نشيدها.',
      descEn: 'Strict compliance with SBC guidelines guaranteeing safety and longevity.'
    },
    {
      titleAr: 'بناء علاقات استراتيجية طويلة الأمد',
      titleEn: 'Enduring Long-Term Client Relationships',
      descAr: 'العميل لدينا ليس مجرد صفقة عابرة، بل شريك نجاح نرافقه في جميع مراحل مشروعه.',
      descEn: 'Treating each client as a perpetual growth partner rather than a transactional customer.'
    },
    {
      titleAr: 'التوسع الذكي والنمو المستدام',
      titleEn: 'Intelligent Expansion & Sustainable Growth',
      descAr: 'تطوير أساليب التشييد واستقدام تقنيات المباني الذكية والطاقة المتجددة في مشاريعنا.',
      descEn: 'Adopting modern smart building methods and energy-efficient building systems.'
    },
    {
      titleAr: 'تعزيز رضا العميل وجذب الشركاء بثقة وشفافية',
      titleEn: 'Transparency & Trust-Driven Partnerships',
      descAr: 'الوضوح التام في العقود وجداول الكميات والالتزام بالمواعيد المحددة دون تأخير.',
      descEn: 'Absolute clarity in contractual BOQs and punctuality in project delivery milestones.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Vision Statement Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Compass className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase block mb-1">
                  {isAr ? 'رؤيتنا الاستراتيجية' : 'OUR STRATEGIC VISION'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {isAr ? 'ريادة الإنشاءات والتجارة في المملكة' : 'Pioneering Construction & Commerce in Saudi Arabia'}
                </h3>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-light border-r-2 border-cyan-400 pr-4">
                {isAr ? (
                  <>
                    «أن نكون من روّاد الإنشاءات والتجارة في المملكة، عبر تقديم حلول مبتكرة ومستدامة تُلبي تطلعات السوق وتُعزز مكانتنا محليًا وعالميًا، متناغمين مع مستهدفات رؤية المملكة 2030.»
                  </>
                ) : (
                  <>
                    "To be among the foremost pioneers in construction and commercial contracting in Saudi Arabia, delivering innovative, sustainable solutions that elevate our national and global standing in harmony with Saudi Vision 2030."
                  </>
                )}
              </blockquote>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                <span>{isAr ? 'طموح وطني لا يحده عنان السماء' : 'A national ambition that reaches the skies'}</span>
              </div>
            </div>
          </div>

          {/* Strategic Goals List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wider mb-2">
                <Target className="w-4 h-4 text-cyan-600" />
                <span>{isAr ? 'أهدافنا المؤسسية' : 'STRATEGIC OBJECTIVES'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-heading">
                {isAr ? 'ركائز ننطلق منها لنصنع الفرق في كل مشروع' : 'Pillars Guiding Every Single Square Meter We Construct'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strategicGoals.map((goal, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-cyan-400/60 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2 font-mono">
                    <span>0{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-heading mb-1.5">
                    {isAr ? goal.titleAr : goal.titleEn}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isAr ? goal.descAr : goal.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
