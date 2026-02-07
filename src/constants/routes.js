// Route paths - single source of truth
export const ROUTES = {
    HOME: '/',
    PACKAGES: '/packages',
    PACKAGES_BOOKING: (packageName) => `/packages/${packageName}/booking`,
    PACKAGES_CONFIRMATION: (packageName) => `/packages/${packageName}/confirmation`,
    PAYMENT: '/payment',
    TEAM: '/team',
    INSTRUCTORS: '/instructors',
    TESTIMONIALS: '/testimonials',
    CONTACT: '/contact',
    BREASTSTROKE: '/breaststroke',
    MEMBERSHIP: '/membership',
};

// Navigation menu items
export const NAV_LINKS = [
    { path: ROUTES.PACKAGES, label: 'Program' },
    { path: ROUTES.TEAM, label: 'About us' },
    { path: ROUTES.INSTRUCTORS, label: 'Instructors' },
];

// API configuration (for future API integration)
export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_URL || 'https://api.example.com',
    TIMEOUT: 10000,
};

// App metadata
export const APP_CONFIG = {
    NAME: 'SWA - Swim School',
    TAGLINE: 'Learn to swim in just 4 days',
};
