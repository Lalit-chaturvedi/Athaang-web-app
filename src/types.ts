export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialType {
  quote: string;
  author: string;
  title?: string;
}

export interface ResourceType {
  title: string;
  description: string;
  cta: string;
  link: string;
}