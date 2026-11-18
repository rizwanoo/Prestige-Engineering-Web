export const BRAND_INFO = {
  name: 'Prestige Engineering',
  shortName: 'PE',
  instagramHandle: '@pres.tigeengineering',
  instagramUrl: 'https://www.instagram.com/pres.tigeengineering/',
  instagramBioLines: [
    'Phoenix arizona 📍',
    'looking for epoxy flooring?',
    'dm for details',
  ],
  location: 'Phoenix, Arizona, USA',
  primaryCategory: 'Epoxy Flooring',
  primaryContactMethod: 'Instagram Direct Message',
  monogramSvg: '/assets/images/prestige-engineering/brand-identity/prestige-pe-monogram.svg',
  officialProfileAvatar: '/assets/images/prestige-engineering/brand-identity/profile-avatar.jpg',
} as const;

export interface EditorialPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  isIllustrative: true;
}

export const SUPPORTING_PHOTOS: Record<string, EditorialPhoto> = {
  selfLevelingHero: {
    id: 'self-leveling-hero',
    src: '/assets/images/prestige-engineering/supporting-editorial/self-leveling-resin.jpg',
    alt: 'Seamless high-gloss self-leveling resin floor reflecting architectural interior lighting',
    caption: 'Illustrative Finish Reference — Seamless High-Gloss Resin Surface',
    category: 'Glossy Resin Finishes',
    isIllustrative: true,
  },
  glossyInterior: {
    id: 'glossy-interior',
    src: '/assets/images/prestige-engineering/supporting-editorial/glossy-resin-interior.jpg',
    alt: 'Smooth white reflective resin flooring across an open modern residential interior',
    caption: 'Illustrative Finish Reference — Reflective Residential Resin Floor',
    category: 'Residential Spaces',
    isIllustrative: true,
  },
  flakeSurface: {
    id: 'flake-surface',
    src: '/assets/images/prestige-engineering/supporting-editorial/flake-epoxy-surface.jpg',
    alt: 'Close-up detail of speckled decorative flake epoxy flooring texture',
    caption: 'Illustrative Surface Texture — Decorative Multi-Tone Flake Broadcast',
    category: 'Epoxy Flake Textures',
    isIllustrative: true,
  },
  commercialCoat: {
    id: 'commercial-coat',
    src: '/assets/images/prestige-engineering/supporting-editorial/commercial-epoxy-coat.jpg',
    alt: 'Commercial concrete floor receiving protective grey epoxy resin coating',
    caption: 'Illustrative Application Reference — Multi-Bay Concrete Epoxy Coating',
    category: 'Commercial Coatings',
    isIllustrative: true,
  },
  polishedConcrete: {
    id: 'polished-concrete',
    src: '/assets/images/prestige-engineering/supporting-editorial/polished-concrete-surface.jpg',
    alt: 'High-sheen commercial showroom concrete floor reflecting overhead fixtures',
    caption: 'Illustrative Finish Reference — Commercial High-Reflectance Floor',
    category: 'Commercial Spaces',
    isIllustrative: true,
  },
  concreteGrinding: {
    id: 'concrete-grinding',
    src: '/assets/images/prestige-engineering/supporting-editorial/concrete-prep-grinding.jpg',
    alt: 'Overhead architectural view of concrete floor surface preparation and grinding',
    caption: 'Illustrative Reference — Concrete Surface Preparation',
    category: 'Surface Preparation',
    isIllustrative: true,
  },
  terrazzoHall: {
    id: 'terrazzo-hall',
    src: '/assets/images/prestige-engineering/supporting-editorial/architectural-terrazzo-hall.jpg',
    alt: 'Wide modern architectural gallery hall with polished seamless flooring',
    caption: 'Illustrative Finish Reference — Wide-Span Architectural Flooring',
    category: 'Large-Scale Interiors',
    isIllustrative: true,
  },
  densifierCoat: {
    id: 'densifier-coat',
    src: '/assets/images/prestige-engineering/supporting-editorial/densifier-surface-coat.jpg',
    alt: 'Even surface treatment application across a prepared concrete floor slab',
    caption: 'Illustrative Application Reference — Slab Treatment & Coating',
    category: 'Slab Treatment',
    isIllustrative: true,
  },
};

export interface FlooringEnquiryScope {
  id: string;
  number: string;
  slug: string;
  title: string;
  enquiryFocus: string;
  summary: string;
  verificationNote: string;
  applications: string[];
  photo: EditorialPhoto;
  bgVariant: 'warm-white' | 'concrete' | 'royal-blue' | 'steel-blue';
}

export const FLOORING_ENQUIRY_SCOPES: FlooringEnquiryScope[] = [
  {
    id: 'residential-epoxy',
    number: '01',
    slug: 'residential-epoxy',
    title: 'Epoxy Flooring for Residential & Garage Spaces',
    enquiryFocus: 'Primary Enquiry Category · Phoenix, AZ',
    summary:
      'Prestige Engineering focuses on epoxy flooring enquiries across Phoenix, Arizona. Whether you are planning a clean garage floor upgrade or a seamless interior resin surface, reach out directly to discuss your floor dimensions, slab condition, and preferred look.',
    verificationNote:
      'Specific coating formulations, color options, and project pricing are confirmed directly with Prestige Engineering via Instagram Direct Message.',
    applications: [
      'Private residential garages and workshops',
      'Open-plan living areas seeking seamless finishes',
      'Utility rooms and indoor-outdoor transitions',
    ],
    photo: SUPPORTING_PHOTOS.glossyInterior,
    bgVariant: 'warm-white',
  },
  {
    id: 'decorative-resin',
    number: '02',
    slug: 'decorative-resin',
    title: 'High-Gloss & Decorative Epoxy Finishes',
    enquiryFocus: 'Finish Consultation · Phoenix, AZ',
    summary:
      'Epoxy floors stand out through depth, clarity, and seamless continuity across a room. Discuss solid gloss, tonal depth, or textured flake aesthetics directly with Prestige Engineering to align the surface finish with your space.',
    verificationNote:
      'Available finish styles and sample references are shared directly upon project enquiry.',
    applications: [
      'High-gloss seamless resin looks',
      'Decorative speckled flake textures',
      'Custom tonal preferences discussed per project',
    ],
    photo: SUPPORTING_PHOTOS.flakeSurface,
    bgVariant: 'concrete',
  },
  {
    id: 'commercial-coatings',
    number: '03',
    slug: 'commercial-coatings',
    title: 'Commercial & Showroom Floor Enquiries',
    enquiryFocus: 'Commercial Scope Discussion · Phoenix, AZ',
    summary:
      'For retail spaces, showrooms, bays, or commercial interiors in the Phoenix area looking for an epoxy floor finish, Prestige Engineering handles direct project enquiries to review square footage, scheduling, and site requirements.',
    verificationNote:
      'Commercial project availability and site-specific coating recommendations are discussed directly by message.',
    applications: [
      'Showrooms and client-facing commercial floors',
      'Studio, bay, and workspace concrete slabs',
      'Cleanable, cohesive floor surfaces',
    ],
    photo: SUPPORTING_PHOTOS.polishedConcrete,
    bgVariant: 'royal-blue',
  },
  {
    id: 'surface-consultation',
    number: '04',
    slug: 'surface-consultation',
    title: 'Project Assessment & Surface Consultation',
    enquiryFocus: 'Direct DM Assessment · Phoenix, AZ',
    summary:
      'Every floor begins with the condition of the concrete beneath it. Share photos of your current Phoenix space and approximate dimensions via Instagram Direct Message so Prestige Engineering can advise on the next steps for your project.',
    verificationNote:
      'No generic fixed quotes or unverified technical specs — every enquiry receives a tailored project conversation.',
    applications: [
      'Existing concrete slab evaluation via project details',
      'Square footage & layout discussion',
      'Direct coordination with @pres.tigeengineering',
    ],
    photo: SUPPORTING_PHOTOS.concreteGrinding,
    bgVariant: 'steel-blue',
  },
];
