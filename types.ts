export interface Program {
  image: string;
  title: string;
  author: string;
  description: string;
}

export interface Instructor {
  image: string;
  name: string;
}

export interface Testimonial {
  image: string;
  name: string;
  location: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface Blog {
    image: string;
    category: string;
    title: string;
    excerpt: string;
}