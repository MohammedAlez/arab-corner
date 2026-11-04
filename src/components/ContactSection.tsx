import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  lang: 'ar' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'construction',
    city: 'الرياض',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = isAr
      ? `السلام عليكم، استفسار من موقع ركن العرب:\n- الاسم: ${formData.name || 'عميل كريم'}\n- الجوال: ${formData.phone || 'غير محدد'}\n- الخدمة المطلوبة: ${formData.service}\n- المدينة: ${formData.city}\n- التفاصيل: ${formData.message || 'أرجو التواصل لمناقشة تفاصيل المشروع'}`
      : `Hello Arab Corner team,\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Service: ${formData.service}\n- City: ${formData.city}\n- Message: ${formData.message}`;

    const url = `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider mb-2">
            <span>{isAr ? 'تواصل معنا والمقر الميداني' : 'CONTACT & HEADQUARTERS'}</span>
            <span aria-hidden="true">·</span>
            <span>{isAr ? 'استجابة هندسية مباشرة' : 'Rapid Response'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading">
            {isAr ? 'نسعد بخدمتكم وتلقي استفساراتكم ومشاريعكم' : 'Ready to Bring Your Next Milestone to Reality'}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {isAr
              ? 'فريقنا الهندسي والإداري جاهز لدراسة متطلبات مشروعك، تقديم عروض الأسعار، وتزويدك بكافة الاستشارات الفنية اللازمة.'
              : 'Our engineering and estimation directors are on hand to assess your site plans, prepare comprehensive BOQs, and schedule site inspections.'}
          </p>
        </div>

        {/* 3 Quick Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          
          {/* Phone Card */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/60 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] text-slate-400 block mb-0.5">
                {isAr ? 'الاتصال المباشر' : 'Direct Line'}
              </span>
              <span className="text-sm font-bold font-mono text-white group-hover:text-cyan-300 transition-colors block truncate" dir="ltr">
                {COMPANY_INFO.phoneDisplay}
              </span>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/60 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] text-slate-400 block mb-0.5">
                {isAr ? 'البريد الرسمي للعروض' : 'Official RFQ Email'}
              </span>
              <span className="text-xs sm:text-sm font-medium font-mono text-white group-hover:text-cyan-300 transition-colors block truncate" dir="ltr">
                {COMPANY_INFO.email}
              </span>
            </div>
          </a>

          {/* Address / WhatsApp Quick Link */}
          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500 transition-colors group sm:col-span-2 lg:col-span-1"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] text-emerald-400 font-semibold block mb-0.5">
                {isAr ? 'محادثة واتساب فورية' : 'Live WhatsApp Chat'}
              </span>
              <span className="text-xs text-slate-300 block truncate">
                {isAr ? 'مشاركة المخططات والاستفسارات' : 'Share plans & blueprints directly'}
              </span>
            </div>
          </a>

        </div>

        {/* 50 / 50 Grid on Laptop View: Form takes half, Map takes half */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Half 1: Quotation Request Form */}
          <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 text-center space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  {isAr ? 'تم استلام طلبكم بنجاح' : 'Inquiry Received Successfully'}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {isAr
                    ? 'شكراً لتواصلكم مع ركن العرب. سيقوم مهندس التسعير والمشاريع بمراجعة التفاصيل والتواصل معكم خلال 24 ساعة عمل.'
                    : 'Thank you for reaching out to Arab Corner. Our engineering estimating team will review your specifications and contact you within 24 hours.'}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendWhatsApp}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                  >
                    {isAr ? 'إرسال نسخة فورية عبر واتساب' : 'Forward Details to WhatsApp'}
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white"
                  >
                    {isAr ? 'إرسال طلب آخر' : 'Send Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading mb-1">
                    {isAr ? 'طلب عرض سعر واستشارة هندسية' : 'Request Quotation & Consultation'}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    {isAr
                      ? 'املأ البيانات التالية وسيقوم مهندسو التسعير بالتواصل معك لتقديم أفضل الحلول المناسبة لمشروعك.'
                      : 'Please provide project details and our team will follow up promptly with actionable recommendations.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {isAr ? 'الاسم الكريم / الجهة *' : 'Full Name / Company *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isAr ? 'مثال: م. فهد العتيبي' : 'e.g. Fahad Al-Otaibi'}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {isAr ? 'رقم الجوال (السعودية) *' : 'Phone Number (KSA) *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XXXXXXXX"
                      dir="ltr"
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {isAr ? 'الخدمة المطلوبة *' : 'Requested Service *'}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-hidden focus:border-cyan-400"
                    >
                      <option value="construction">{isAr ? 'أعمال البناء والتشييد والتسليح' : 'General Construction & Shell'}</option>
                      <option value="mep">{isAr ? 'الأعمال الكهروميكانيكية والتكييف والسمارت' : 'MEP, HVAC & Smart Systems'}</option>
                      <option value="design">{isAr ? 'التصميم الداخلي والخارجي والتشطيبات' : 'Interior & Exterior Architecture'}</option>
                      <option value="trading">{isAr ? 'الأنشطة التجارية والتوريدات العامة' : 'Commercial Trading & Sourcing'}</option>
                      <option value="turnkey">{isAr ? 'تسليم مفتاح متكامل للمشروع' : 'Full Turnkey Project'}</option>
                      <option value="consultation">{isAr ? 'استشارة هندسية ودراسة مخططات' : 'Engineering Consultation'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {isAr ? 'موقع المشروع (المدينة / الحي)' : 'Project City / Location'}
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder={isAr ? 'مثال: الرياض - حي الملقا' : 'e.g. Riyadh'}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    dir="ltr"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {isAr ? 'تفاصيل المشروع والمواصفات المطلوبة' : 'Project Details & Specifications'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isAr ? 'المساحة، رخصة البناء، أو أي متطلبات فنية خاصة...' : 'Provide built-up area, permit status, special requests...'}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'إرسال طلب التسعير' : 'Submit RFQ'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="py-2.5 px-4 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{isAr ? 'إرسال عبر واتساب' : 'Via WhatsApp'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Half 2: Interactive Google Maps taking the other half on laptop view */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between">
            {/* Map Top Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white font-heading truncate">
                    {isAr ? 'موقعنا على الخريطة' : 'Our Office on Map'}
                  </h3>
                  <p className="text-[11px] text-slate-400 truncate">
                    {isAr ? 'ركن العرب للتشغيل والصيانة - الرياض' : 'Arab Corner for O&M - Riyadh'}
                  </p>
                </div>
              </div>

              <a
                href={COMPANY_INFO.googleMapsDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1 shrink-0 shadow-xs"
              >
                <span>{isAr ? 'فتح في خرائط Google' : 'Google Maps'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Map iFrame taking balanced half-screen height */}
            <div className="relative w-full flex-1 min-h-[320px] sm:min-h-[380px] bg-slate-900">
              <iframe
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={isAr ? 'موقع ركن العرب على خريطة جوجل' : 'Arab Corner Google Map Location'}
                className="w-full h-full filter saturate-[0.95]"
              />
            </div>

            {/* Map Bottom Information Strip */}
            <div className="p-3.5 sm:px-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{isAr ? 'الأحد - الخميس (8:00 ص - 6:00 م)' : 'Sun - Thu (8:00 AM - 6:00 PM)'}</span>
              </div>
              <span className="font-mono text-slate-500 text-[10px]" dir="ltr">
                {COMPANY_INFO.locationCoordinates}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
