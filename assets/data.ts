import type { Program, Instructor, Testimonial, FaqItem, Feature, Blog } from '../types';
import React from 'react';

const logoClasses = "h-6 md:h-8 mx-12 object-contain grayscale flex-shrink-0";

export const partnerLogos: React.ReactNode[] = [
    // Apple
    React.createElement('svg', { 'aria-label': 'Apple logo', className: logoClasses, fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M15.59,1.05C15.27,1.04,14.29,1.41,13.37,2.04C12.51,2.64,11.8,3.5,11.31,4.5C10.67,5.75,10.38,7,10.38,7S10.42,7.1,10.56,7.18C10.69,7.26,10.76,7.28,10.76,7.28S11.17,7.1,11.58,6.92C11.98,6.74,12.44,6.56,12.92,6.56C13.42,6.56,14.07,6.77,14.75,7.21C15.35,7.6,15.78,8.16,16,8.84C16.18,9.41,16.14,10.07,15.89,10.78C15.67,11.39,15.26,11.96,14.71,12.4C14.2,12.8,13.6,13.1,12.93,13.25C12.32,13.39,11.72,13.29,11.23,13.03C11.13,12.98,11.03,12.93,10.93,12.88C10.83,12.83,10.73,12.78,10.63,12.73C10.49,12.65,10.35,12.59,10.21,12.55C10.07,12.51,9.93,12.49,9.78,12.49C9.28,12.49,8.65,12.69,8.03,13.08C7.41,13.47,6.89,13.98,6.53,14.58C5.88,15.68,5.51,16.9,5.51,18.16C5.51,19.56,5.89,20.86,6.64,21.98C7.36,23.06,8.32,23.91,9.46,24.43C10.01,24.68,10.61,24.81,11.21,24.81C11.61,24.81,12.01,24.73,12.41,24.59C12.81,24.45,13.19,24.26,13.56,24.04C13.93,23.82,14.24,23.59,14.47,23.39C14.7,23.19,14.85,23.06,14.89,23.03C14.93,23,14.98,22.96,15.04,22.91C15.1,22.86,15.16,22.83,15.19,22.83C15.19,22.83,15.18,22.84,15.18,22.84L15.17,22.83C14.99,22.69,14.81,22.51,14.62,22.3C14.44,22.08,14.26,21.85,14.09,21.6C13.91,21.35,13.75,21.1,13.61,20.85C13.46,20.6,13.37,20.37,13.28,20.15C13.19,19.93,13.13,19.72,13.1,19.52C13.07,19.32,13.06,19.14,13.06,18.97C13.06,18.87,13.07,18.77,13.09,18.67C13.11,18.57,13.14,18.47,13.18,18.37C13.28,18.19,13.46,18.07,13.71,18.01C13.96,17.95,14.21,17.95,14.46,18C14.76,18.06,15.06,18.18,15.36,18.36C15.66,18.54,15.94,18.74,16.18,18.95C16.43,19.15,16.66,19.35,16.86,19.54C17.06,19.72,17.24,19.89,17.39,20.03C17.53,20.17,17.67,20.28,17.78,20.36C17.88,20.44,17.96,20.5,18,20.54C18.05,20.58,18.09,20.62,18.11,20.65C18.43,20.9,18.79,21.1,19.19,21.24C19.59,21.38,19.99,21.45,20.39,21.45C20.94,21.45,21.52,21.32,22.09,21.07C22.64,20.82,23.12,20.48,23.52,20C23.92,19.52,24.22,18.95,24.4,18.32C24.58,17.69,24.62,17.04,24.51,16.41C24.41,15.76,24.15,15.16,23.76,14.63C23.36,14.1,22.81,13.6,22.06,13.26C21.26,12.92,20.36,12.92,19.46,13.25C19.36,13.29,19.26,13.33,19.16,13.37L18.86,13.49C18.76,13.54,18.66,13.57,18.56,13.62C18.36,13.67,18.16,13.67,17.96,13.62C17.76,13.58,17.56,13.48,17.36,13.34C17.2,13.2,17.04,12.9,16.9,12.72C16.76,12.54,16.65,12.34,16.56,12.13C16.47,11.91,16.42,11.68,16.42,11.45C16.42,10.95,16.63,10.45,17.05,9.97C17.45,9.49,17.95,9.18,18.53,9.03C19.11,8.88,19.71,8.92,20.28,9.14C20.38,9.18,20.48,9.22,20.58,9.26C20.68,9.3,20.78,9.34,20.88,9.36L21.03,9.42C21.13,9.46,21.23,9.48,21.33,9.48C21.43,9.48,21.53,9.46,21.63,9.42C21.73,9.38,21.83,9.3,21.93,9.22C22.03,9.17,22.13,9.11,22.23,9.06C22.73,8.76,23.13,8.31,23.36,7.72C23.58,7.14,23.58,6.47,23.35,5.74C23.13,5.01,22.69,4.39,22.1,3.91C21.55,3.46,20.9,3.19,20.22,3.16z' })),
    // Nike
    React.createElement('svg', { 'aria-label': 'Nike logo', className: logoClasses, fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M23.424,7.824C20.64,5.376,17.28,4.32,12.96,4.32c-4.32,0-7.488,2.052-11.88,6.048c-2.7,2.484-4.428,4.644-4.536,4.752c-0.432,0.324-0.432,0.54,0,0.864c0.108,0.108,1.728-2.052,4.536-4.752C9.504,7.236,12.672,5.184,17.016,5.184c2.808,0,5.832,1.404,8.424,3.456c0.432,0.324,0.864,0.108,0.864-0.432V8.208C24.3,7.668,23.856,7.5,23.424,7.824z' })),
    // Microsoft
    React.createElement('svg', { 'aria-label': 'Microsoft logo', className: logoClasses, fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M11.5,11.5V2H2V11.5H11.5M11.5,22V12.5H2V22H11.5M22,11.5V2H12.5V11.5H22M22,22V12.5H12.5V22H22Z' })),
    // X (Twitter)
    React.createElement('svg', { 'aria-label': 'X logo', className: logoClasses, fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' })),
    // Airbnb
    React.createElement('svg', { 'aria-label': 'Airbnb logo', className: logoClasses, fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M12,0A9,9,0,0,0,3,9c0,5.63,8.19,14.22,8.41,14.43a1,1,0,0,0,1.18,0C12.81,23.22,21,14.63,21,9A9,9,0,0,0,12,0Zm0,12a3,3,0,1,1,3-3A3,3,0,0,1,12,12Z' })),
    // Mastercard
    React.createElement('svg', { 'aria-label': 'Mastercard logo', className: logoClasses, fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M10,4.2C13.2,4.2,16,7.1,16,10.2c0,1-0.3,1.9-0.8,2.7c0.6,0.6,1,1.3,1.3,2.1c1.9-0.9,3.3-2.7,3.3-4.8c0-3.4-2.6-6-5.8-6H10z M14,19.8c-3.2,0-6-2.9-6-6c0-1,0.3-1.9,0.8-2.7c-0.6-0.6-1-1.3-1.3-2.1c-1.9,0.9-3.3,2.7-3.3,4.8c0,3.4,2.6,6,5.8,6H14z' })),
    // Spotify
    React.createElement('svg', { 'aria-label': 'Spotify logo', className: logoClasses, fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M16.36,16.12c-0.22,0.36-0.68,0.48-1.04,0.26 c-2.92-1.78-6.55-2.17-10.99-1.2c-0.42,0.09-0.84-0.15-0.93-0.57c-0.09-0.42,0.15-0.84,0.57-0.93c4.8-1.05,8.78-0.61,11.95,1.3 C16.28,15.44,16.58,15.76,16.36,16.12z M17.46,13.58c-0.28,0.45-0.85,0.6-1.3,0.32c-3.23-1.98-8.15-2.59-11.91-1.42 c-0.51,0.12-1.02-0.15-1.14-0.65c-0.12-0.51,0.15-1.02,0.65-1.14c4.2-1.28,9.57-0.62,13.25,1.62 C17.46,12.73,17.74,13.13,17.46,13.58z M18.66,10.88c-0.33,0.53-1,0.69-1.53,0.36C13.46,9,7.45,8.33,3.22,9.64 C2.63,9.82,2,10.1,1.82,10.69c-0.18,0.59,0.1,1.22,0.69,1.4c4.7,1.43,11.23,0.7,15.38-1.83C18.42,10.19,18.99,9.85,18.66,10.88z' })),
    // Android
    React.createElement('svg', { 'aria-label': 'Android logo', className: logoClasses, fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M19.9,13.67a1,1,0,0,0-1,1V16a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14.67a1,1,0,0,0-2,0V16a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V14.67A1,1,0,0,0,19.9,13.67Z M7.44,6.25l-.23.19a.48.48,0,0,0-.16.34.46.46,0,0,0,.46.46.45.45,0,0,0,.33-.16l.19-.23a.46.46,0,0,0,.15-.33.47.47,0,0,0-.47-.47A.48.48,0,0,0,7.44,6.25Z M16,7.25a.46.46,0,0,0,.46-.46.45.45,0,0,0-.16-.33l-.19-.23a.48.48,0,0,0-.34-.16.47.47,0,0,0-.47.47.46.46,0,0,0,.16.33l.23.19A.45.45,0,0,0,16,7.25Z M18,9v3.3a1,1,0,0,0,2,0V9a1,1,0,0,0-2,0Z M4,9v3.3a1,1,0,1,0,2,0V9A1,1,0,0,0,4,9Z M15,4.32l1.22-1.83a1,1,0,1,0-1.66-1.1L13.7,3A8.44,8.44,0,0,0,12,2.83,8.44,8.44,0,0,0,10.3,3L9.44,1.39a1,1,0,1,0-1.66,1.1L9,4.32A7.07,7.07,0,0,0,5.1,8H18.9A7.07,7.07,0,0,0,15,4.32Z' })),
];


export const featuresData: Feature[] = [
    {
        // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement('i', { className: "fa-solid fa-graduation-cap text-3xl text-sky-500" }),
        title: 'AI Guided Programs',
        description: 'Experience a highly personalized growth journey with our new AI-powered curriculum.'
    },
    {
        // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement('i', { className: "fa-solid fa-users text-3xl text-sky-500" }),
        title: 'Live Classes',
        description: 'Join live classes with the world\'s best teachers, every single day.'
    },
    {
        // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement('i', { className: "fa-solid fa-network-wired text-3xl text-sky-500" }),
        title: 'Global Community',
        description: 'Connect with a global community of like-minded individuals.'
    },
    {
        // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement('i', { className: "fa-solid fa-lightbulb text-3xl text-sky-500" }),
        title: 'Meditations',
        description: 'Access a library of powerful meditations for every need.'
    }
];


export const programsData: Program[] = [
  {
    image: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=800&auto=format&fit=crop',
    title: 'Superbrain',
    author: 'Jim Kwik',
    description: 'Unlock your brain’s potential and learn faster than ever before.',
  },
  {
    image: 'https://images.unsplash.com/photo-1509305717900-84f40e786d82?q=80&w=800&auto=format&fit=crop',
    title: 'Uncompromised Life',
    author: 'Marisa Peer',
    description: 'Harness the power of your mind to create the life you truly want.',
  },
  {
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    title: 'The M Word',
    author: 'Emily Fletcher',
    description: 'A meditation program for the modern, busy individual.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
    title: 'The Quest for Personal Mastery',
    author: 'Srikumar Rao',
    description: 'Build resilience and find profound joy in your work and life.',
  },
];

export const instructorsData: Instructor[] = [
  { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop', name: 'Vishen Lakhiani' },
  { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop', name: 'Jim Kwik' },
  { image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop', name: 'Marisa Peer' },
  { image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop', name: 'Srikumar Rao' },
  { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop', name: 'Lisa Nichols' },
  { image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop', name: 'Ben Greenfield' },
  { image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop', name: 'Emily Fletcher' },
];

export const testimonialsData: Testimonial[] = [
  {
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=200&auto=format&fit=crop',
    name: 'Sarah L.',
    location: 'New York, USA',
    quote: 'Growth Sphere has completely transformed my perspective on life. The programs are world-class and the community is incredibly supportive.',
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    name: 'Michael B.',
    location: 'London, UK',
    quote: 'I was skeptical at first, a program genuinely improved my memory and focus. Highly recommended for anyone looking to level up.',
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    name: 'Priya K.',
    location: 'Mumbai, India',
    quote: 'The sense of connection I feel with the global community is something I never expected. It\'s more than just courses; it\'s a movement.',
  },
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    name: 'Carlos G.',
    location: 'Mexico City, Mexico',
    quote: 'A life-changing program was a game-changer for my confidence. I\'ve achieved goals I once thought were impossible.',
  },
];

export const faqData: FaqItem[] = [
  {
    question: 'What is Growth Sphere?',
    answer: 'Growth Sphere is a leading online personal growth platform that offers a wide range of programs, courses, and live classes on topics such as mindset, career, relationships, and well-being. We bring together the world\'s best teachers to create transformative learning experiences.',
  },
  {
    question: 'How does the Growth Sphere membership work?',
    answer: 'A Growth Sphere membership gives you full access to our entire library of 100+ programs, daily live classes, guided meditations, and our private social network. You can learn at your own pace, on any device, and connect with a global community of like-minded individuals.',
  },
  {
    question: 'Can I try Growth Sphere before committing?',
    answer: 'Yes! We offer a 7-day free trial for new members, giving you a chance to explore our platform and experience our programs. We also have a 15-day money-back guarantee on our annual membership for your peace of mind.',
  },
  {
    question: 'Is Growth Sphere suitable for beginners in personal growth?',
    answer: 'Absolutely. Growth Sphere is designed for everyone, regardless of where you are on your personal growth journey. Our programs are structured to be accessible for beginners while still offering profound insights for more experienced learners.',
  },
];

export const galleryImagesData: string[] = [
    'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=1200&auto=format&fit=crop',
];

export const blogPostsData: Blog[] = [
  {
    image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=800&auto=format&fit=crop',
    category: 'Mindfulness',
    title: 'The Art of Being Present: A Guide for Beginners',
    excerpt: 'Discover simple techniques to anchor yourself in the present moment and reduce daily stress.'
  },
  {
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=800&auto=format&fit=crop',
    category: 'Productivity',
    title: '5 Habits That Will 10x Your Daily Output',
    excerpt: 'Stop procrastinating and start achieving. Learn the habits that separate the doers from the dreamers.'
  },
  {
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    category: 'Relationships',
    title: 'Building Deeper Connections in a Digital World',
    excerpt: 'Learn how to foster genuine relationships both online and offline with these powerful strategies.'
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    category: 'Career Growth',
    title: 'Navigating Your Career Path with Confidence',
    excerpt: 'Unlock strategies to find clarity and purpose in your professional life.'
  },
  {
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    category: 'Health & Wellness',
    title: 'The Mind-Body Connection: Fueling Your Success',
    excerpt: 'Explore how physical wellness can dramatically impact your mental performance and overall happiness.'
  },
  {
    image: 'https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?q=80&w=800&auto=format&fit=crop',
    category: 'Mindset',
    title: 'Overcoming Limiting Beliefs for Good',
    excerpt: 'A step-by-step guide to identifying and dismantling the beliefs that hold you back.'
  },
];