import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { PROJECT_LIBRARY, ProjectLibraryItem } from '../data/companyData';

interface ProjectsLibraryProps {
  lang: 'ar' | 'en';
  onOpenQuoteModal: () => void;
}

export const ProjectsLibrary: React.FC<ProjectsLibraryProps> = ({ lang, onOpenQuoteModal }) => {
  const isAr = lang === 'ar';
  const items = PROJECT_LIBRARY;

  // Lightbox Modal state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (isAr ? (prev - 1 + items.length) % items.length : (prev + 1) % items.length) : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (isAr ? (prev + 1) % items.length : (prev - 1 + items.length) % items.length) : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, items.length, isAr]);

  return (
    <section id="library" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            {isAr ? 'معرض صور المشاريع والأعمال الميدانية' : 'Field Execution & Project Photography'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            {isAr
              ? 'توثيق حي ومباشر لمواقع العمل، الأعمال الإنشائية، التمديدات الكهروميكانيكية، والتشطيبات المعمارية الراقية المنفذة في مختلف مناطق المملكة.'
              : 'Photographic documentation of our ongoing and completed structural sites, MEP engineering plants, and architectural facade deliveries across KSA.'}
          </p>
        </div>

        {/* Pure Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="break-inside-avoid mb-5 group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs hover:border-cyan-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={isAr ? item.titleAr : item.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Scrim on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white" />

                {/* Information Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 text-white flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold text-cyan-300 block mb-0.5">
                      {isAr ? item.categoryAr : item.categoryEn}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold font-heading truncate drop-shadow-xs">
                      {isAr ? item.titleAr : item.titleEn}
                    </h4>
                    <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">{isAr ? item.locationAr : item.locationEn}</span>
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Image Index Tag */}
                <span className="absolute top-3 start-3 px-2 py-0.5 rounded-md bg-slate-900/70 backdrop-blur-xs text-[10px] font-mono text-white/90">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 font-heading">
                {isAr ? 'ترغب في زيارة أحد مواقع مشاريعنا الجارية لمعاينة جودة التنفيذ؟' : 'Interested in visiting an ongoing construction site to inspect build quality?'}
              </p>
              <p className="text-xs text-slate-500">
                {isAr ? 'نرحب بزيارات الملاك والشركاء الميدانية للاطلاع على مستوى الاحترافية ودقة العمل.' : 'We welcome clients and partners to schedule escorted site walkthroughs with our project managers.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg shadow-2xs whitespace-nowrap shrink-0 transition-colors"
          >
            {isAr ? 'حجز موعد زيارة ميدانية' : 'Book Site Visit'}
          </button>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200">
          
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 end-4 z-50 p-2.5 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full border border-slate-700 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : 0))}
            className="absolute start-4 sm:start-8 z-50 p-3 text-white bg-slate-900/80 hover:bg-slate-800 rounded-full border border-slate-700 transition-colors shadow-xl"
            aria-label="Previous photo"
          >
            {isAr ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % items.length : 0))}
            className="absolute end-4 sm:end-8 z-50 p-3 text-white bg-slate-900/80 hover:bg-slate-800 rounded-full border border-slate-700 transition-colors shadow-xl"
            aria-label="Next photo"
          >
            {isAr ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>

          {/* Main Slide Container */}
          <div className="max-w-5xl w-full mx-auto px-4 flex flex-col items-center">
            <div className="relative max-h-[75vh] w-full flex items-center justify-center">
              <img
                src={items[lightboxIndex].image}
                alt={isAr ? items[lightboxIndex].titleAr : items[lightboxIndex].titleEn}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-slate-800"
              />
            </div>

            {/* Slide Metadata */}
            <div className="mt-4 text-center text-white space-y-1">
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <span className="text-cyan-400 font-semibold">
                  {isAr ? items[lightboxIndex].categoryAr : items[lightboxIndex].categoryEn}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">
                  {isAr ? `صورة ${lightboxIndex + 1} من ${items.length}` : `Photo ${lightboxIndex + 1} of ${items.length}`}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading">
                {isAr ? items[lightboxIndex].titleAr : items[lightboxIndex].titleEn}
              </h3>
              <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isAr ? items[lightboxIndex].locationAr : items[lightboxIndex].locationEn}</span>
              </p>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="mt-5 flex items-center gap-2 overflow-x-auto max-w-full py-2 px-2">
              {items.map((thumb, tIdx) => (
                <button
                  key={thumb.id}
                  onClick={() => setLightboxIndex(tIdx)}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    tIdx === lightboxIndex ? 'border-cyan-400 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb.image}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
