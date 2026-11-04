import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en';
  prefilledService?: string;
  prefilledNotes?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  lang,
  prefilledService,
  prefilledNotes
}) => {
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: prefilledService || 'أعمال البناء والتشييد والتسليح',
    location: 'الرياض',
    notes: prefilledNotes || ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
    if (prefilledNotes) {
      setFormData((prev) => ({ ...prev, notes: prefilledNotes }));
    }
  }, [prefilledService, prefilledNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = isAr
      ? `طلب عرض سعر رسمي من موقع ركن العرب:\n- الاسم: ${formData.name || 'عميل'}\n- الجوال: ${formData.phone || 'غير محدد'}\n- الخدمة: ${formData.service}\n- الموقع: ${formData.location}\n- التفاصيل: ${formData.notes || 'أرجو مراجعة الطلب والتواصل معي'}`
      : `Official Quotation Request - Arab Corner:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Service: ${formData.service}\n- Location: ${formData.location}\n- Details: ${formData.notes}`;

    const url = `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-lg font-bold font-heading">
              {isAr ? 'طلب عرض سعر واستشارة فنية' : 'Request Official RFQ & Consultation'}
            </h3>
            <p className="text-xs text-slate-300">
              {isAr ? 'دراسة هندسية متكاملة لمشروعك مع ركن العرب' : 'Comprehensive technical study by Arab Corner'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-heading text-slate-900">
                {isAr ? 'تم إرسال طلبكم بنجاح!' : 'Request Submitted Successfully!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                {isAr
                  ? 'تم تسجيل طلب التسعير بنجاح. سيقوم الفريق الهندسي بالاتصال بكم لمناقشة المواصفات وجدول الكميات.'
                  : 'Your request has been logged. Our estimating engineers will contact you shortly to review project specifications.'}
              </p>

              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isAr ? 'متابعة الطلب فوراً عبر واتساب' : 'Follow Up on WhatsApp'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  {isAr ? 'إغلاق النافذة' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isAr ? 'الاسم الكريم / اسم المنشأة *' : 'Name / Entity Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={isAr ? 'مثال: عبد العزيز الشمري' : 'e.g. Abdulaziz'}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-cyan-600 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isAr ? 'رقم الجوال *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-cyan-600 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    dir="ltr"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-cyan-600 text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isAr ? 'الخدمة المطلوبة' : 'Service Type'}
                  </label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-cyan-600 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isAr ? 'مدينة المشروع' : 'Project City'}
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-cyan-600 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isAr ? 'ملاحظات وتفاصيل المشروع' : 'Project Details & Remarks'}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={isAr ? 'المساحة، رخصة البناء، أو متطلبات خاصة...' : 'Built-up area, permit status, special requests...'}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-cyan-600 text-slate-800"
                />
              </div>

              <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>{isAr ? 'تتم معاملة كافة المخططات والبيانات بسرية هندسية تامة' : 'All blueprints treated with strict confidentiality'}</span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  {isAr ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isAr ? 'إرسال طلب التسعير' : 'Submit RFQ'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
