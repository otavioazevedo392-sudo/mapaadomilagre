# Mapa da Bíblia - Landing Page

## Overview

A sales landing page for "Mapa da Bíblia" - a digital Catholic Bible study guide that helps users understand all 73 books of the Bible through visual maps, summaries, and organized content. The landing page is designed for high conversion on mobile devices, featuring social proof, product details, bonuses, and a limited-time offer with countdown timer.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)
- Single-page application architecture with all content on the landing page route

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design system
- Component variants using class-variance-authority (CVA) for consistent styling patterns
- Custom theme configuration with light/dark mode support and Catholic-inspired color palette

**Design System**
- Mobile-first responsive design optimized for vertical scrolling and conversion
- Typography: Playfair Display (serif) for headings to evoke tradition, Inter (sans-serif) for body text and readability
- Color palette: Deep navy blue primary (#35 65% 25%), vibrant gold accent (#45 85% 55%), warm off-white backgrounds
- Spacing system based on Tailwind's 4px grid with consistent vertical rhythm
- Custom elevation system using rgba overlays for hover/active states

**State Management**
- React Query (TanStack Query) for server state management and caching
- React hooks for local component state
- No complex global state - static landing page with minimal interactivity

**Key Features**
- Sticky CTA button that appears after scrolling past hero section (mobile only)
- Carousel/slider for testimonials with navigation controls
- Countdown timer in offer section to create urgency
- Smooth scroll navigation to offer section from multiple CTA buttons
- Accordion component for FAQ section

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- TypeScript for type safety across the stack
- Custom middleware for request logging and JSON parsing with raw body capture

**Development Environment**
- Vite middleware mode for hot module replacement during development
- SSR template rendering for initial HTML delivery
- Separate build process for client (Vite) and server (esbuild)

**Data Layer**
- Currently static data stored in shared schema file (no database persistence)
- Testimonials and FAQs defined as in-memory arrays
- Zod schemas for runtime validation of testimonial and FAQ data types
- Drizzle ORM configured for future PostgreSQL integration if needed

**Server Structure**
- Minimal API surface - primarily serves static landing page
- No authentication or user management required
- Storage interface defined but not implemented (MemStorage class as placeholder)

### External Dependencies

**UI Component Libraries**
- Radix UI: Comprehensive set of unstyled, accessible component primitives (accordion, dialog, dropdown, popover, toast, etc.)
- Embla Carousel: Touch-enabled carousel library for testimonial slider
- Lucide React: Icon library for consistent iconography

**Styling & Utilities**
- Tailwind CSS: Utility-first CSS framework
- clsx & tailwind-merge: Utility for conditional classNames
- PostCSS with Autoprefixer for CSS processing

**Forms & Validation**
- React Hook Form: Performant form management
- @hookform/resolvers: Integration layer for validation libraries
- Zod: TypeScript-first schema validation
- drizzle-zod: Integration between Drizzle ORM and Zod

**Date & Time**
- date-fns: Modern date utility library for countdown timer

**Database & ORM** (configured but not actively used)
- Drizzle ORM: TypeScript ORM for SQL databases
- @neondatabase/serverless: Neon PostgreSQL serverless driver
- drizzle-kit: CLI for database migrations and schema management
- PostgreSQL configured via DATABASE_URL environment variable

**Development Tools**
- @replit/vite-plugin-runtime-error-modal: Development error overlay
- @replit/vite-plugin-cartographer: Replit-specific development tooling
- @replit/vite-plugin-dev-banner: Development environment indicator

**Build & Bundling**
- Vite: Frontend build tool
- esbuild: Server-side bundling
- tsx: TypeScript execution for development server

**Key Configuration Notes**
- All components aliased via @ prefix pointing to client/src
- Shared code aliased via @shared prefix
- Asset files accessible via @assets alias
- Path resolution configured in both tsconfig.json and vite.config.ts
- Module system: ESM throughout (type: "module" in package.json)