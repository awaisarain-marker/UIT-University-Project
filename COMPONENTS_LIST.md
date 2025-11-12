# Components List - UIT University Project

## Overview
This document provides a comprehensive list of all components, libraries, and technologies used in the UIT University Project.

---

## 🎨 UI Components (components/ui/)

### Core UI Components
1. **aceternity-timeline.tsx** - Animated timeline component for displaying chronological events
2. **badge.tsx** - Badge component for labels and status indicators
3. **button.tsx** - Reusable button component with variants
4. **card.tsx** - Card component for content containers
5. **carousel.tsx** - Image/content carousel with Embla Carousel
6. **chatbot.tsx** - AI chatbot interface component
7. **input.tsx** - Form input component
8. **logo.tsx** - University logo component
9. **page-banner.tsx** - Page header banner component
10. **skeleton.tsx** - Loading skeleton component

---

## 🎓 Admin Dashboard Components (components/admin/)

### Admin Components
1. **AdminDashboardLayout.tsx** - Main layout wrapper for admin dashboard
2. **AdminHeader.tsx** - Admin dashboard header with navigation
3. **AdminSidebar.tsx** - Sidebar navigation for admin panel
4. **FacultyOverview.tsx** - Faculty statistics and overview
5. **RecentActivities.tsx** - Recent activities feed
6. **StudentEnrollmentChart.tsx** - Student enrollment visualization (ApexCharts)
7. **TopCourses.tsx** - Top performing courses display
8. **UniversityStatsCards.tsx** - University statistics cards

---

## 🔬 MERL Components (components/merl/)

### MERL Page Components
1. **MerlHeader.tsx** - Sticky header with top bar and mobile navigation
2. **MerlHero.tsx** - Hero section with eyebrow, title, and CTAs
3. **MerlIntro.tsx** - Welcome/introduction section
4. **WhatWeOffer.tsx** - Grid of offerings with checkmark icons
5. **Achievements.tsx** - Achievement carousel with Embla
6. **TeamAndPartners.tsx** - Partner organizations grid
7. **MerlCTA.tsx** - Call-to-action section for course registration
8. **MerlFooter.tsx** - Footer with contact info and quick links
9. **ImageCarouselWithLightbox.tsx** - Image carousel with lightbox functionality

---

## 📝 CMS Components (components/cms/)

### Content Management System Components
1. **CMSIntegrationExample.tsx** - Example of CMS integration
2. **CMSStatus.tsx** - CMS connection status indicator
3. **CoursesFromCMS.tsx** - Courses fetched from Sanity CMS
4. **FacultyFromCMS.tsx** - Faculty data from Sanity CMS
5. **TestimonialsFromCMS.tsx** - Testimonials from Sanity CMS

---

## 📊 Dashboard Components (components/dashboard/)

1. **ModernDashboard.tsx** - Modern dashboard layout and components

---

## 🧪 Example Components (components/examples/)

1. **SupabaseCoursesList.tsx** - Example of Supabase integration for courses

---

## 🏗️ Layout Components (components/layout/)

1. **Footer.tsx** - Site footer component
2. **Header.tsx** - Site header component

---

## 👥 Section Components (components/sections/)

1. **FacultySection.tsx** - Faculty section for homepage

---

## 🌐 Shared Components (components/)

1. **Navbar.tsx** - Main navigation bar
2. **Timeline.tsx** - Timeline component for events

---

## 📄 Pages (app/)

### Main Pages
1. **page.tsx** - Homepage
2. **layout.tsx** - Root layout

### About Section
- **about/page.tsx** - About university page

### Admin Section
- **admin/page.tsx** - Admin dashboard
- **admin/layout.tsx** - Admin layout
- **admin/supabase-test/** - Supabase testing page

### Admissions
- **admissions/page.tsx** - Admissions information

### Apply
- **apply/page.tsx** - Application form

### Chat
- **chat/page.tsx** - AI chatbot page

### CMS Demo
- **cms-demo/page.tsx** - CMS integration demo

### Contact
- **contact/page.tsx** - Contact form

### Courses
- **courses/page.tsx** - Courses listing
- **courses/[slug]/page.tsx** - Individual course details

### Faculty
- **faculty/page.tsx** - Faculty listing

### MERL (Monitoring, Evaluation, Research & Learning)
- **merl/page.tsx** - MERL dashboard

---

## 📚 Libraries & Dependencies

### Core Framework
- **Next.js 16.0.0** - React framework
- **React 19.2.0** - UI library
- **React DOM 19.2.0** - React DOM renderer
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 4.0.0** - Utility-first CSS framework
- **tailwindcss-animate 1.0.7** - Animation utilities
- **tailwind-merge 3.3.1** - Merge Tailwind classes
- **Bootstrap 5.3.8** - CSS framework
- **React Bootstrap 2.10.10** - Bootstrap React components
- **Styled Components 6.1.19** - CSS-in-JS
- **class-variance-authority 0.7.1** - Component variants
- **clsx 2.1.1** - Conditional classnames

### UI Libraries
- **Framer Motion 12.23.24** - Animation library
- **Embla Carousel React 8.6.0** - Carousel component
- **Lucide React 0.548.0** - Icon library
- **@iconify/react 6.0.2** - Icon framework
- **@phosphor-icons/react 2.1.10** - Phosphor icons

### Charts & Visualization
- **ApexCharts 5.3.6** - Modern charting library
- **React ApexCharts 1.8.0** - React wrapper for ApexCharts

### Backend & Database
- **Supabase JS 2.77.0** - Backend as a service
- **Sanity 4.13.0** - Headless CMS
- **@sanity/client 7.12.0** - Sanity client
- **@sanity/image-url 1.2.0** - Sanity image URLs
- **@sanity/vision 4.13.0** - Sanity query tool
- **@sanity/dashboard 5.0.0** - Sanity dashboard
- **@sanity/ui 3.1.11** - Sanity UI components
- **@sanity/icons 3.7.4** - Sanity icons

### UI Component Libraries
- **@radix-ui/react-slot 1.2.3** - Radix UI primitives

### Fonts
- **Geist 1.5.1** - Vercel's font family

---

## 🛠️ Development Tools

- **ESLint 9** - Code linting
- **eslint-config-next 16.0.0** - Next.js ESLint config
- **PostCSS 8.5.6** - CSS processing
- **@tailwindcss/postcss 4.1.16** - Tailwind PostCSS plugin

---

## 🎯 Key Features by Component

### Admin Dashboard
- University statistics cards
- Student enrollment charts
- Faculty overview
- Recent activities feed
- Top courses display
- Responsive sidebar navigation

### CMS Integration
- Sanity CMS for content management
- Dynamic course content
- Faculty profiles
- Testimonials management

### Database
- Supabase for backend
- Real-time data
- Authentication ready

### UI/UX
- Responsive design
- Dark/Light mode support
- Smooth animations (Framer Motion)
- Modern carousel
- Interactive charts
- AI chatbot interface

### Pages
- Homepage with hero section
- About page
- Courses listing and details
- Faculty directory
- Admissions information
- Application form
- Contact form
- Admin dashboard
- MERL dashboard
- CMS demo

---

## 📦 Total Component Count

- **UI Components**: 10
- **Admin Components**: 8
- **MERL Components**: 9
- **CMS Components**: 5
- **Dashboard Components**: 1
- **Example Components**: 1
- **Layout Components**: 2
- **Section Components**: 1
- **Shared Components**: 2
- **Pages**: 15+

**Total**: 54+ components

---

## 🚀 Technologies Stack Summary

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Bootstrap 5, Styled Components
- **Backend**: Supabase
- **CMS**: Sanity
- **Charts**: ApexCharts
- **Animations**: Framer Motion
- **Icons**: Lucide, Iconify, Phosphor
- **Carousel**: Embla Carousel

---

*Last Updated: November 8, 2025*
