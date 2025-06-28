# Portfolio Website - AIML Developer

## Overview

This is a modern, interactive portfolio website for an 18-year-old B.Tech AIML student at Thapar University. The application features a stunning dark theme with animated UI elements, creative effects, and a focus on showcasing AI/ML projects and skills. Built as a full-stack application with a React frontend and Express backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom dark theme and gradient effects
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and scroll-triggered effects
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints for contact form submission
- **Validation**: Zod schemas for type-safe data validation
- **Database**: PostgreSQL with Drizzle ORM (configured for Neon Database)
- **Session Management**: Built-in session handling with connect-pg-simple

### Development Environment
- **Bundler**: Vite with React plugin and runtime error overlay
- **Type Checking**: TypeScript with strict mode enabled
- **Code Quality**: ESLint configuration (implicit)
- **Hot Reload**: Vite dev server with HMR support

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated introduction with typewriter effects and counter animations
2. **Featured Projects**: Showcase of AI/ML projects with interactive cards
3. **About Section**: Personal information and achievements with hover effects
4. **Skills Section**: Categorized skill display with progress indicators
5. **Contact Section**: Functional contact form with server-side validation

### UI Features
- **Particle Background**: Dynamic particle system with parallax scrolling
- **Smooth Scrolling**: Intersection Observer-based scroll animations
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Dark Theme**: Custom color palette with purple, blue, and emerald accents
- **Interactive Elements**: Hover effects, scale animations, and transitions

### Backend Features
- **Contact API**: POST endpoint for contact form submissions
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request monitoring
- **Static Serving**: Vite integration for serving built frontend assets

## Data Flow

1. **Client Rendering**: React components render with initial state
2. **Animation Triggers**: Intersection Observer detects scroll positions
3. **Form Submission**: Contact form data validated and sent to API
4. **Server Processing**: Express handles API requests with Zod validation
5. **Response Handling**: TanStack Query manages server responses and updates UI
6. **Toast Notifications**: User feedback through toast system

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **zod**: Schema validation library

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **drizzle-kit**: Database schema management
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle pushes schema changes to PostgreSQL

### Production Setup
- **Environment Variables**: `DATABASE_URL` for PostgreSQL connection
- **Static Assets**: Served by Express in production mode
- **Process Management**: Single Node.js process serving both API and frontend

### Development Workflow
- **Development**: `npm run dev` starts tsx with auto-reload
- **Type Checking**: `npm run check` validates TypeScript
- **Database**: `npm run db:push` applies schema changes

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```