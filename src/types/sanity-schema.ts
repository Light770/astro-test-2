// TypeScript type definitions

interface SanitySlug {
  _type: 'slug';
  current: string;
}

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface SanityReference {
  _type: 'reference';
  _ref: string;
}

interface SanityBlock {
  _type: 'block';
  style: string;
  children: {
    _type: 'span';
    text: string;
    marks?: string[];
  }[];
  markDefs?: any[];
}

interface Seo {
  _type: 'seo';
  title?: string;
  description?: string;
  image?: SanityImage;
}

interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: SanitySlug;
  seo?: Seo;
  body?: (TextImage | BasicForm | ContactCards | FeatureCards | FeatureList | FeatureSticky | HomeCTA | HightlightRows | SignUp | PricingColumns | Accordion | Testimonial)[];
}

interface BlogPost {
  _id: string;
  _type: 'blogPost';
  title: string;
  slug: SanitySlug;
  publishedAt: string;
  author: SanityReference;
  mainImage?: SanityImage;
  categories?: SanityReference[];
  tags?: SanityReference[];
  body: (SanityBlock | SanityImage | CodeBlock)[];
  seo?: Seo;
}

interface Author {
  _id: string;
  _type: 'author';
  name: string;
  slug: SanitySlug;
  image?: SanityImage;
  bio?: string;
}

interface Category {
  _id: string;
  _type: 'category';
  title: string;
  slug: SanitySlug;
  description?: string;
}

interface Tag {
  _id: string;
  _type: 'tag';
  title: string;
  slug: SanitySlug;
  description?: string;
}

interface TextImage {
  _type: 'textImage';
  heading?: string;
  text?: string;
  image?: SanityImage;
  imagePosition?: 'left' | 'right';
}

interface BasicForm {
  _type: 'basicForm';
  title?: string;
  description?: string;
}

interface ContactCards {
  _type: 'contactCards';
  title?: string;
  cards?: ContactCard[];
}

interface ContactCard {
  _type: 'contactCard';
  title?: string;
  description?: string;
  icon?: SanityImage;
}

interface FeatureCards {
  _type: 'featureCards';
  title?: string;
  cards?: FeatureCard[];
}

interface FeatureCard {
  _type: 'featureCard';
  title?: string;
  description?: string;
  image?: SanityImage;
}

interface FeatureList {
  _type: 'featureList';
  title?: string;
  features?: Feature[];
}

interface Feature {
  _type: 'feature';
  title?: string;
  description?: string;
  icon?: SanityImage;
}

interface FeatureSticky {
  _type: 'featureSticky';
  title?: string;
  description?: string;
  image?: SanityImage;
}

interface HomeCTA {
  _type: 'homeCTA';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HightlightRows {
  _type: 'hightlightRows';
  title?: string;
  rows?: Highlight[];
}

interface Highlight {
  _type: 'highlight';
  title?: string;
  description?: string;
  image?: SanityImage;
}

interface SignUp {
  _type: 'signUp';
  title?: string;
  description?: string;
}

interface PricingColumns {
  _type: 'pricingColumns';
  title?: string;
  plans?: PricingTable[];
}

interface PricingTable {
  _type: 'pricingTable';
  title?: string;
  price?: number;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
}

interface Accordion {
  _type: 'accordion';
  title?: string;
  items?: AccordionItem[];
}

interface AccordionItem {
  _type: 'accordionItem';
  title?: string;
  content?: string;
}

interface Testimonial {
  _type: 'testimonial';
  quote?: string;
  author?: string;
  authorTitle?: string;
  image?: SanityImage;
}

interface CodeBlock {
  _type: 'code';
  code?: string;
  language?: string;
}
