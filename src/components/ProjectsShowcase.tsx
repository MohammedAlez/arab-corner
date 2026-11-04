import React, { useState } from 'react';
import { MapPin, Calendar, Building, CheckCircle2, ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/companyData';
import { ProjectItem } from '../types';

interface ProjectsShowcaseProps {
  lang: 'ar' | 'en';
  onOpenQuoteModal: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ lang, onOpenQuoteModal }) => {
  const isAr = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', labelAr: 'كافة المشاريع', labelEn: 'All Projects' },
    { id: 'mep', labelAr: 'أعمال كهروميكانيكية (روشن)', labelEn: 'MEP (ROSHN)' },
    { id: 'commercial', labelAr: 'مجمعات تجارية (بودل)', labelEn: 'Commercial (Boudl)' },
    { id: 'residential', labelAr: 'فلل سكنية فاخرة', labelEn: 'Luxury Residential' },
    { id: 'healthcare', labelAr: 'مستوصفات ومرافق صحية', labelEn: 'Healthcare Facilities' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wider mb-2">
            <span>{isAr ? 'سابقة الأعمال' : 'TRACK RECORD'}</span>
            <span aria-hidden="true">·</span>
            <span>{isAr ? 'شواهد ميدانية على الجودة' : 'Verified Field Deliverables'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            {isAr ? 'من أحدث مشاريعنا المنجزة على أرض الواقع' : 'Featured Marquee Projects Delivered Across Saudi Arabia'}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-light">
            {isAr
              ? 'نفخر بوضع بصمتنا الهندسية في كبرى المشاريع الوطنية، بدءاً من أبراج روشن السكنية ومجمعات بودل التجارية، وحتى شبكة المرافق الصحية في القويعية والرين.'
              : 'Proud contributors to Saudi transformative developments, spanning ROSHN high-rise towers, Boudl retail hubs, and critical public healthcare clinics in Riyadh province.'}
          </p>
        </div>

        {/* Functional Interactive Filter Controls (Allowed buttons for tab state) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200/80">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:border-cyan-400 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image container */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Subtle Unboxed Category text */}
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold text-cyan-300 drop-shadow-xs">
                      {isAr ? project.categoryLabel : project.categoryLabelEn}
                    </span>
                    {project.year && (
                      <span className="font-mono text-white/80 drop-shadow-xs">
                        {project.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Unboxed metadata with typographic separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                      <span>{isAr ? project.location : project.locationEn}</span>
                    </span>
                    {project.client && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{isAr ? project.client : project.clientEn}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-cyan-700 transition-colors line-clamp-2 mb-3">
                    {isAr ? project.title : project.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {isAr ? project.scope : project.scopeEn}
                  </p>

                  {/* Highlights list snippet */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {(isAr ? project.highlights : project.highlightsEn).slice(0, 2).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors">
                <span>{isAr ? 'استعراض تفاصيل المشروع' : 'View Project Case'}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Callout (From current website: "والقادم اكثر ان شاء الله") */}
        <div className="mt-16 text-center max-w-xl mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <p className="text-lg font-bold text-slate-900 font-heading mb-2">
            {isAr ? '«والقادم أكثر بإذن الله»' : '"And far greater milestones ahead, God willing"'}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed font-light">
            {isAr
              ? 'مستمرون في توسيع شراكاتنا الإنشائية والتجارية مع مختلف القطاعات بالمملكة لنكون جزءاً فاعلاً في صياغة المستقبل المعماري والتنموي.'
              : 'Actively expanding our construction footprint with public and private sector partners to help build the Kingdom’s visionary landscape.'}
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg shadow-xs transition-colors"
          >
            {isAr ? 'دعنا نبدأ مشروعك القادم معاً' : 'Partner with Us on Your Next Project'}
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
            
            {/* Modal Image Header */}
            <div className="aspect-[16/9] w-full relative bg-slate-900 shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 left-4 p-2 bg-slate-950/70 text-white hover:bg-slate-950 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 right-4 left-4 flex items-center justify-between text-xs text-white">
                <span className="bg-slate-950/70 px-2.5 py-1 rounded-md text-cyan-300 font-semibold">
                  {isAr ? selectedProject.categoryLabel : selectedProject.categoryLabelEn}
                </span>
                {selectedProject.year && (
                  <span className="bg-slate-950/70 px-2.5 py-1 rounded-md font-mono text-white/90">
                    {selectedProject.year}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Content Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                  <span className="flex items-center gap-1 font-medium text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{isAr ? selectedProject.location : selectedProject.locationEn}</span>
                  </span>
                  {selectedProject.client && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        <Building className="w-3.5 h-3.5 text-slate-500" />
                        <span>{isAr ? selectedProject.client : selectedProject.clientEn}</span>
                      </span>
                    </>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  {isAr ? selectedProject.title : selectedProject.titleEn}
                </h3>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {isAr ? 'نطاق العمل ومسؤولية التنفيذ:' : 'Scope of Execution:'}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed p-4 rounded-xl bg-slate-50 border border-slate-100">
                  {isAr ? selectedProject.scope : selectedProject.scopeEn}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {isAr ? 'أبرز الإنجازات والمواصفات الفنية:' : 'Key Engineering Highlights:'}
                </h4>
                <div className="space-y-2">
                  {(isAr ? selectedProject.highlights : selectedProject.highlightsEn).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 sm:px-8 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4 shrink-0">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenQuoteModal();
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg shadow-xs transition-colors flex items-center gap-2"
              >
                <span>{isAr ? 'طلب تنفيذ مشروع مشابه' : 'Inquire for Similar Project'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
