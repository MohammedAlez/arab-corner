export interface ServiceItem {
  id: string;
  title: string;
  titleEn: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  icon: string;
  badge: string;
  badgeEn: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleEn: string;
  category: 'commercial' | 'residential' | 'healthcare' | 'mep';
  categoryLabel: string;
  categoryLabelEn: string;
  location: string;
  locationEn: string;
  scope: string;
  scopeEn: string;
  image: string;
  client?: string;
  clientEn?: string;
  year?: string;
  highlights: string[];
  highlightsEn: string[];
}

export interface CorePillar {
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}
