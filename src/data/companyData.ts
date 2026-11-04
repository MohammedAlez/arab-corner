import { ServiceItem, ProjectItem, CorePillar } from '../types';

export const COMPANY_INFO = {
  nameAr: 'ركن العرب للتجارة والمقاولات',
  nameEn: 'Arab Corner Trading & Contracting',
  shortNameAr: 'ركن العرب',
  shortNameEn: 'Arab Corner',
  sloganAr: 'طموحنا عنان السماء',
  sloganEn: 'Our Ambition Reaches the Sky',
  heroSubtitleAr: 'من قلب المملكة، نُشيد البُنى ونُدير التجارة برؤية وطنية وطموح عالمي',
  heroSubtitleEn: 'From the heart of the Kingdom, we build infrastructure and lead commercial contracting with national vision and global ambition.',
  experienceYears: 25,
  phone: '+966 55 418 1114',
  phoneDisplay: '+966 55 418 1114',
  whatsappLink: 'https://wa.me/966554181114',
  email: 'arabcorner@arabcorner.sa',
  addressAr: 'الرياض، المملكة العربية السعودية',
  addressEn: 'Riyadh, Kingdom of Saudi Arabia',
  locationCoordinates: '24.8408365, 46.8012763',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.525603318066!2d46.80127628003667!3d24.840836521067146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f194dcfc9874d%3A0x466c717fdf1a0999!2z2LHZg9mGINin2YTYudix2Kgg2YTZhNiq2LTYutmK2YQg2YjYp9mE2LXZitin2YbYqQ!5e1!3m2!1sen!2sdz!4v1793807989127!5m2!1sen!2sdz',
  googleMapsDirectUrl: 'https://www.google.com/maps/place/24%C2%B050\'27.0%22N+46%C2%B048\'04.6%22E/@24.8408365,46.8012763,17z',
  logoUrl: '/assets/aistudio/image_257b0d26.png',
  heroImage: '/src/assets/images/hero_construction_saudi_1793696509918.jpg'
};

export const CORE_PILLARS: CorePillar[] = [
  {
    title: 'الموثوقية',
    titleEn: 'Reliability',
    subtitle: 'التزام هندسي صارم',
    subtitleEn: 'Strict Engineering Commitment',
    description: 'تنفيذ دقيق وفق الجداول الزمنية المحددة وكود البناء السعودي مع توفير ضمانات معتمدة على كافة الأعمال الإنشائية والميكانيكية.',
    descriptionEn: 'Rigorous execution adhering to tight timelines and the Saudi Building Code with certified warranties on structural and MEP works.',
    icon: 'ShieldCheck'
  },
  {
    title: 'الربحية المستدامة',
    titleEn: 'Profitability',
    subtitle: 'تعظيم القيمة الاستثمارية',
    subtitleEn: 'Maximizing Investment Value',
    description: 'هندسة القيمة وحلول ترشيد التكاليف الذكية التي تضمن للعميل أعلى جودة تشطيبية بأفضل عائد اقتصادي مستدام على المدى البعيد.',
    descriptionEn: 'Value engineering and smart cost-optimization delivering premium finish quality with sustainable high-return on investment.',
    icon: 'TrendingUp'
  },
  {
    title: 'الثقة',
    titleEn: 'Confidence',
    subtitle: 'سجل حافل بالشراكات الناجحة',
    subtitleEn: 'Proven Track Record',
    description: 'ثقة ممتدة لأكثر من 25 عاماً لدى الجهات الحكومية وكبرى الشركات الوطنية مثل روشن وبودل والقطاعات الصحية.',
    descriptionEn: 'Over 25 years of earned trust with government entities and major national developers like ROSHN, Boudl, and healthcare clinics.',
    icon: 'Award'
  },
  {
    title: 'الكفاءة والاتقان',
    titleEn: 'Competence',
    subtitle: 'كوادر هندسية وخبرة ميدانية',
    subtitleEn: 'Engineering Excellence',
    description: 'فرق عمل متخصصة ومعدات حديثة تشرف على كل تفصيلة من تأسيس الأساسات وحتى التسليم النهائي بالمفتاح.',
    descriptionEn: 'Specialized engineering crews and advanced equipment managing every detail from deep foundations to turnkey delivery.',
    icon: 'CheckCircle2'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'construction',
    title: 'كافة خدمات وأعمال البناء والتشييد',
    titleEn: 'General Construction & Structural Works',
    tagline: 'تسليح، عظم، تشطيب، وتسليم مفتاح',
    taglineEn: 'Reinforced concrete, skeleton, finishing & turnkey',
    description: 'تنفيذ متكامل لجميع أعمال الإنشاءات والتسليح للمباني الحكومية والخاصة والتجارية. نقدم خيارات مرنة تشمل أعمال العظم بالمواد أو بدون مواد، التشطيبات الراقية، وتسليم المفتاح بأعلى معايير السلامة والجودة.',
    descriptionEn: 'Comprehensive construction and structural execution for government, private, and commercial developments. Flexible contracting models including structural works with/without materials, luxury finishing, and full turnkey delivery.',
    features: [
      'تنفيذ أعمال العظم والتسليح بكود البناء السعودي',
      'تشييد المباني الحكومية والخاصة والتجارية',
      'بناء الفلل والقصور السكنية الفاخرة',
      'أعمال التسليم بالمفتاح مع الضمان الإنشائي',
      'تجهيز وتأسيس المرافق والمستوصفات الطبية'
    ],
    featuresEn: [
      'Structural reinforced concrete according to Saudi Building Code',
      'Commercial, governmental, and private building construction',
      'Luxury residential villas and private compounds',
      'Complete turnkey execution with comprehensive structural warranty',
      'Healthcare and clinic foundational and civil engineering'
    ],
    icon: 'Building2',
    badge: 'الخدمة الإنشائية الأساسية',
    badgeEn: 'Core Contracting'
  },
  {
    id: 'mep',
    title: 'الأعمال الكهروميكانيكية والأنظمة الذكية',
    titleEn: 'MEP, HVAC & Smart Automation',
    tagline: 'تكييف، كهرباء، سباكة، وأنظمة تيار منخفض',
    taglineEn: 'HVAC, electrical, plumbing & low-current smart systems',
    description: 'خبرة تخصصية عميقة في التمديدات الكهربائية، تركيب وصيانة أنظمة التكييف المركزي والمخفي، شبكات السباكة المتطورة، وأنظمة التيار المنخفض (Low Current) مثل كاميرات المراقبة، الشبكات، وأجهزة المنازل الذكية.',
    descriptionEn: 'Specialized expertise in electrical infrastructure, central & split HVAC installations, high-efficiency plumbing networks, and low-current systems including CCTV security, structured cabling, and smart automation.',
    features: [
      'تمديدات الكهرباء الصناعية والسكنية واللوحات الرئيسية',
      'أنظمة التكييف المركزي والتبريد ومجاري الهواء (Ducting)',
      'شبكات السباكة المتطورة والعزل المائي والحراري',
      'أنظمة التيار المنخفض، كاميرات المراقبة المعتمدة، والشبكات',
      'حلول أتمتة المنازل والمباني الذكية (Smart Automation)'
    ],
    featuresEn: [
      'Industrial and residential electrical wiring & distribution panels',
      'Central HVAC installation, chiller plants and air ducting',
      'Modern plumbing networks and certified waterproofing/insulation',
      'Low-current networks, certified CCTV, and access control',
      'Smart home and building automation solutions'
    ],
    icon: 'Cpu',
    badge: 'أنظمة متطورة معتمدة',
    badgeEn: 'Certified MEP Systems'
  },
  {
    id: 'design',
    title: 'التصميم الداخلي والخارجي والتشطيبات',
    titleEn: 'Interior & Exterior Architectural Design',
    tagline: 'تصاميم مودرن وكلاسيك تلبي ذوق العميل الراقي',
    taglineEn: 'Modern & classic architectural solutions',
    description: 'حلول معمارية وديكورية متكاملة للمباني الجديدة وأعمال التجديد والتشطيب. نحول المساحات إلى بيئات مريحة واستثنائية تجمع بين الفخامة والعملية، بنمط كلاسيكي أو مودرن مبتكر يُميزك عن الآخرين.',
    descriptionEn: 'Comprehensive architectural and interior styling for new developments and renovations. We craft environments balancing luxury and functionality, whether classic or ultra-modern.',
    features: [
      'تصاميم معمارية ثلاثية الأبعاد (3D Renders) واقعية',
      'تصميم وتنفيذ الواجهات الحجرية والزجاجية الحديثة',
      'مخططات توزيع الإنارة والتأثيث المتناسق',
      'حلول تشطيبات داخلية راقية ومخصصة لمختلف المساحات',
      'إعادة تأهيل وترميم المباني والمجمعات القائمة'
    ],
    featuresEn: [
      'Photorealistic 3D architectural and interior renderings',
      'Modern glass curtain-walls and natural stone facade cladding',
      'Integrated lighting layouts and spatial space planning',
      'High-end interior finishings tailored to client preferences',
      'Full refurbishment and adaptive reuse of existing properties'
    ],
    icon: 'Palette',
    badge: 'لمسات إبداعية حصرية',
    badgeEn: 'Creative Architectural Finishes'
  },
  {
    id: 'trading',
    title: 'الأنشطة والخدمات التجارية والاستيراد',
    titleEn: 'Commercial Trading, Import & Export',
    tagline: 'توريد معتمد وسلاسل إمداد موثوقة',
    taglineEn: 'Certified supplies & robust logistics',
    description: 'شبكة واسعة من الأنشطة التجارية تشمل الاستيراد والتصدير وتوفير المواد والمعدات الإنشائية والتقنية. نؤمن بشراكات استراتيجية رابحة وطويلة الأجل تضمن توفر المواد بأعلى جودة وتنافسية سعرية.',
    descriptionEn: 'Extensive commercial operations encompassing import/export, construction material supply, and technical equipment sourcing. We build winning, long-term partnerships providing reliability and competitive procurement.',
    features: [
      'استيراد وتوريد مواد البناء والتجهيزات المعمارية',
      'توريد معدات التكييف والأنظمة الكهروميكانيكية',
      'توفير حلول سلاسل الإمداد اللوجستية للمشاريع الكبرى',
      'شراكات تجارية رابحة مع المصانع والشركات العالمية',
      'خدمات التجارة العامة والتوزيع في السوق السعودي'
    ],
    featuresEn: [
      'Direct import and distribution of premium building materials',
      'Sourcing of commercial HVAC and electrical hardware',
      'Supply chain and logistics fulfillment for large-scale projects',
      'Strategic partnerships with certified global manufacturers',
      'General commercial trading and wholesale distribution in KSA'
    ],
    icon: 'Briefcase',
    badge: 'شراكات رابحة ومستدامة',
    badgeEn: 'Strategic Sourcing'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sedra-roshn',
    title: 'أعمال الكهرباء في برجي وادي سدرة - مشروع روشن',
    titleEn: 'Electrical Works at Sedra Valley Towers - ROSHN',
    category: 'mep',
    categoryLabel: 'أعمال كهروميكانيكية',
    categoryLabelEn: 'MEP Engineering',
    location: 'الرياض - مشروع روشن',
    locationEn: 'Riyadh - ROSHN Sedra',
    scope: 'تنفيذ أعمال التمديدات والشبكات الكهربائية واللوحات الرئيسية في عدد 2 من أبراج وادي سدرة بمشروع روشن الرائد.',
    scopeEn: 'Execution of complete electrical distribution, wiring, and main panels in two signature towers at ROSHN Sedra Valley.',
    image: '/src/assets/images/project_roshn_towers_1793696510448.jpg',
    client: 'مشروع روشن (ROSHN)',
    clientEn: 'ROSHN Development',
    year: '2024 - 2025',
    highlights: [
      'تمديدات كهربائية متكاملة لبرجين متعددي الأدوار',
      'التزام بأعلى معايير الجودة المعتمدة من صندوق الاستثمارات العامة',
      'تسليم في المواعيد المقررة بكفاءة تامة'
    ],
    highlightsEn: [
      'Integrated electrical systems for two multi-story towers',
      'Compliance with PIF & ROSHN tier-one construction standards',
      'On-schedule handover with zero safety incidents'
    ]
  },
  {
    id: 'boudl-commercial',
    title: 'تشييد وبناء مجمع تجاري خاص بشركة بودل',
    titleEn: 'Construction of Commercial Complex for Boudl Co.',
    category: 'commercial',
    categoryLabel: 'مجمعات تجارية',
    categoryLabelEn: 'Commercial Complexes',
    location: 'الرياض - طريق الثمامة',
    locationEn: 'Riyadh - Thumama Road',
    scope: 'أعمال البناء والتشييد المتكاملة لمجمع تجاري حديث على طريق الثمامة الحيوي لخدمة مشاريع الضيافة والتجزئة لشركة بودل.',
    scopeEn: 'Comprehensive construction of a modern commercial complex on prime Thumama Road for Boudl hospitality & retail holdings.',
    image: '/src/assets/images/project_commercial_center_1793696511509.jpg',
    client: 'شركة بودل للفنادق والتجارة',
    clientEn: 'Boudl Hotels & Trading Co.',
    year: '2023 - 2024',
    highlights: [
      'تشييد كامل للأعمال الخرسانية والمعمارية',
      'واجهات عصرية ومساحات تجارية مرنة للمستأجرين',
      'تنفيذ بنية تحتية ومواقف سيارات متطورة'
    ],
    highlightsEn: [
      'Full concrete structural and architectural construction',
      'Modern facades and flexible retail leased areas',
      'Advanced parking infrastructure and utility connections'
    ]
  },
  {
    id: 'moshairqa-villas',
    title: 'تشييد وبناء فيلتين فاخرتين في مشروع مشيرقة',
    titleEn: 'Construction of 2 Luxury Villas at Moshairqa',
    category: 'residential',
    categoryLabel: 'فلل سكنية فاخرة',
    categoryLabelEn: 'Luxury Residential',
    location: 'الرياض - حي مشيرقة',
    locationEn: 'Riyadh - Moshairqa District',
    scope: 'بناء وتشييد عدد 2 فيلا سكنية فاخرة بتسليم مفتاح متضمنة الأعمال الإنشائية والتشطيبات المودرن والمسابح والحدائق.',
    scopeEn: 'Turnkey construction of 2 high-end private villas including structural shell, contemporary finishing, pools, and landscape.',
    image: '/src/assets/images/project_interior_modern_villa_1793696511188.jpg',
    client: 'ملاك خواص',
    clientEn: 'Private Clients',
    year: '2024',
    highlights: [
      'تنفيذ تشطيبات مودرن فاخرة بحجر الرياض والواجهات الزجاجية',
      'أنظمة تكييف وتدفئة وتجهيز سمارت هوم',
      'تسليم كامل بالمفتاح متضمناً المسطحات الخارجية'
    ],
    highlightsEn: [
      'Contemporary luxury finishes with Riyadh stone and curtain walls',
      'Smart home automation and integrated HVAC',
      'Complete turnkey handover with exterior hardscaping'
    ]
  },
  {
    id: 'mehairqa-clinic',
    title: 'تشييد وبناء مستوصف محيرقة في القويعية',
    titleEn: 'Construction of Mehairqa Health Clinic',
    category: 'healthcare',
    categoryLabel: 'مرافق صحية وحكومية',
    categoryLabelEn: 'Healthcare Facilities',
    location: 'القويعية - محيرقة',
    locationEn: 'Al Quway\'iyah - Mehairqa',
    scope: 'أعمال البناء والتشييد الكاملة لمستوصف محيرقة الصحي لخدمة المجتمع المحلي بأحدث المواصفات الصحية والإنشائية.',
    scopeEn: 'Turnkey civil and MEP construction of Mehairqa Primary Healthcare Clinic compliant with health authority standards.',
    image: '/src/assets/images/hero_construction_saudi_1793696509918.jpg',
    client: 'القطاع الصحي الحكومي',
    clientEn: 'Government Health Sector',
    year: '2023',
    highlights: [
      'مبنى رعاية صحية مجهز بمتطلبات السلامة والتعقيم',
      'تمديدات طبية وكهربائية متطورة للمختبرات والعيادات',
      'عوازل معتمدة وغرف كشف مجهزة بالكامل'
    ],
    highlightsEn: [
      'Healthcare facility built to strict sanitation and safety codes',
      'Specialized clinic & lab MEP piping and power feeds',
      'Certified insulation and medical room layouts'
    ]
  },
  {
    id: 'health-clinics-alrayn',
    title: 'تشييد وتأسيس 7 مستوصفات ومراكز صحية في الرين',
    titleEn: 'Foundation & Construction of 7 Healthcare Centers in Al Rayn',
    category: 'healthcare',
    categoryLabel: 'مرافق صحية وحكومية',
    categoryLabelEn: 'Healthcare Facilities',
    location: 'منطقة الرين - الرياض',
    locationEn: 'Al Rayn Region - Riyadh Province',
    scope: 'تشييد وتأسيس القواعد والأساسات الإنشائية المتكاملة لـ 7 مستوصفات صحية تشمل: حريملاء الحصاة، المثناة، الرين العليا، السحيمية، الرجع، السيح، والمجذم.',
    scopeEn: 'Foundational civil engineering and structural baseline construction for 7 health clinic centers across Al Rayn: Huraimila Al-Hasa, Al-Mothnah, Upper Al-Rayn, Al-Suhaimiyah, Al-Rajee, Al-Seeh, and Al-Majdham.',
    image: '/src/assets/images/project_mep_engineering_1793696510607.jpg',
    client: 'المشاريع التنموية الحكومية',
    clientEn: 'Government Infrastructure Projects',
    year: '2022 - 2024',
    highlights: [
      'مستوصف حريملاء الحصاة في الرين',
      'مستوصف المثناة ومستوصف الرين العليا',
      'مستوصفات السحيمية، الرجع، السيح، والمجذم',
      'تنفيذ هندسي موحد وفق اشتراطات البنية التحتية الدقيقة'
    ],
    highlightsEn: [
      'Huraimila Al-Hasa Clinic & Foundation',
      'Al-Mothnah & Upper Al-Rayn Clinics',
      'Al-Suhaimiyah, Al-Rajee, Al-Seeh & Al-Majdham Clinics',
      'Unified structural standards across multiple simultaneous sites'
    ]
  }
];

export const PHILOSOPHY_QUOTES = [
  {
    quoteAr: 'في عالمنا، لا نبيع منتجًا فقط… بل نُقدّم تجربة، ونبني علاقة، ونرسم مستقبلًا. رؤيتنا تتجاوز الأرباح، فنحن نطمح إلى الريادة: نُخطط للغد، ونُطور اليوم.',
    quoteEn: 'In our world, we do not merely deliver a project; we build lasting relationships and shape the future. Our vision goes beyond transactions—we plan for tomorrow and innovate today.',
    authorAr: 'ركن العرب للمقاولات والتجارة',
    authorEn: 'Arab Corner Trading & Contracting'
  },
  {
    quoteAr: 'رضا العميل هو هدفنا وثقته هي رأس مالنا الحقيقي. نُصغي، نبتكر، ونُلبي... لأننا نؤمن أن العميل لا يبحث عن صفقة، بل عن شريك نجاح.',
    quoteEn: 'Client satisfaction is our primary goal and their trust is our true capital. We listen, innovate, and deliver because our clients seek a true success partner, not just a transaction.',
    authorAr: 'فلسفة العمل والريادة',
    authorEn: 'Our Operating Philosophy'
  },
  {
    quoteAr: 'نُتاجر بشغف، ونُرضي بثقة، وننمو برؤية. عميلنا هو شريكنا… ورضاه هو نجاحنا.',
    quoteEn: 'We trade with passion, deliver with confidence, and grow with vision. Our client is our partner, and their satisfaction is our success.',
    authorAr: 'مبدأ الشراكة الدائمة',
    authorEn: 'Partnership Principle'
  }
];
