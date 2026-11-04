import React from 'react';

interface StatsBarProps {
  lang: 'ar' | 'en';
}

export const StatsBar: React.FC<StatsBarProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const stats = [
    {
      value: '25+',
      labelAr: 'عاماً من الخبرة والريادة',
      labelEn: 'Years in Saudi Market',
      descAr: 'تطور مستمر منذ عقود في قطاع الإنشاءات',
      descEn: 'Decades of continuous growth in KSA'
    },
    {
      value: '15+',
      labelAr: 'مشروعاً كبيراً ومعلماً منجزاً',
      labelEn: 'Marquee Projects Delivered',
      descAr: 'تشمل أبراج وادي سدرة ومجمعات بودل',
      descEn: 'Including ROSHN Sedra & Boudl complex'
    },
    {
      value: '8+',
      labelAr: 'مستوصفات ومرافق صحية',
      labelEn: 'Healthcare Facilities Built',
      descAr: 'تأسيس وبناء في القويعية ومناطق الرين',
      descEn: 'Across Al Quway\'iyah and Al Rayn'
    },
    {
      value: '100%',
      labelAr: 'مطابقة للكود السعودي (SBC)',
      labelEn: 'Saudi Building Code Match',
      descAr: 'تنفيذ مرخص ومطابق لأعلى اشتراطات السلامة',
      descEn: 'Certified safety & structural standards'
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-r-0 lg:border-l-0 border-slate-100 last:border-none">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-heading tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-semibold text-cyan-700 mt-1">
                {isAr ? stat.labelAr : stat.labelEn}
              </span>
              <span className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                {isAr ? stat.descAr : stat.descEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
