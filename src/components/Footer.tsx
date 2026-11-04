import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUp, X, Shield, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  lang: 'ar' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [legalModal, setLegalModal] = useState<'terms' | 'privacy' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 p-1 flex items-center justify-center">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Arab Corner Logo"
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white font-heading">
                {isAr ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              {isAr
                ? 'شركة وطنية سعودية متخصصة في مقاولات البناء، الأعمال الكهروميكانيكية، التصميم الداخلي، والتوريدات التجارية بخبرة تزيد عن 25 عاماً في مختلف أنحاء المملكة.'
                : 'A premier Saudi contracting entity delivering general civil construction, MEP engineering, interior design, and strategic trading with over 25 years of proven excellence in KSA.'}
            </p>

            <div className="pt-2 text-cyan-400 font-medium">
              «{isAr ? COMPANY_INFO.sloganAr : COMPANY_INFO.sloganEn}»
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              {isAr ? 'روابط سريعة' : 'Quick Navigation'}
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  {isAr ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  {isAr ? 'من نحن ورؤيتنا' : 'About & Vision'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {isAr ? 'خدماتنا الإنشائية' : 'Our Services'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  {isAr ? 'سابقة المشاريع' : 'Projects Portfolio'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  {isAr ? 'تواصل معنا' : 'Contact Us'}
                </a>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              {isAr ? 'القطاعات والأنشطة' : 'Capabilities'}
            </span>
            <ul className="space-y-2">
              <li>{isAr ? 'أعمال البناء والتشييد والتسليح' : 'General Construction & Skeleton'}</li>
              <li>{isAr ? 'الأعمال الكهروميكانيكية والأنظمة الذكية' : 'MEP, HVAC & Smart Automation'}</li>
              <li>{isAr ? 'التصميم المعماري والديكور الداخلي' : 'Interior & Exterior Architecture'}</li>
              <li>{isAr ? 'الأنشطة التجارية والتوريدات العامة' : 'Commercial Trading & Logistics'}</li>
              <li>{isAr ? 'تأسيس وتشيد المرافق الصحية' : 'Healthcare Facility Baseline'}</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              {isAr ? 'معلومات الاتصال' : 'Direct Contact'}
            </span>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{isAr ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-mono" dir="ltr">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white font-mono" dir="ltr">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} {isAr ? 'ركن العرب للتجارة والمقاولات' : 'Arab Corner Trading & Contracting'}. {isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              {isAr ? 'الأحكام والشروط' : 'Terms & Conditions'}
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Terms / Privacy Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 left-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
                {legalModal === 'terms' ? <FileText className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {legalModal === 'terms' 
                  ? (isAr ? 'الأحكام والشروط' : 'Terms & Conditions')
                  : (isAr ? 'سياسة الخصوصية وسرية المعلومات' : 'Privacy & Data Protection')}
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed mb-6 max-h-60 overflow-y-auto p-1">
              {legalModal === 'terms' ? (
                <>
                  <p>تخضع جميع عروض الأسعار والاتفاقيات الإنشائية والهندسية المقدمة من شركة ركن العرب للتجارة والمقاولات لكود البناء السعودي (SBC) والأنظمة المعمول بها في المملكة العربية السعودية.</p>
                  <p>يتم توثيق نطاق العمل وجداول الكميات والالتزامات التعاقدية عبر عقود رسمية موثقة ومعتمدة من الغرفة التجارية والجهات المختصة لضمان حقوق كافة الأطراف.</p>
                </>
              ) : (
                <>
                  <p>نلتزم في ركن العرب بحماية سرية وخصوصية كافة بيانات عملائنا وشركائنا. تُستخدم البيانات والمخططات الهندسية المرفوعة فقط لأغراض دراسة المشروع وتقديم عروض الأسعار الرسمية.</p>
                  <p>لا تتم مشاركة أي بيانات أو وثائق مع أي أطراف ثالثة دون إذن خطي مسبق من العميل.</p>
                </>
              )}
            </div>

            <button
              onClick={() => setLegalModal(null)}
              className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg"
            >
              {isAr ? 'فهمت وموافق' : 'I Understand'}
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
