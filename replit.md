# Bennett Thrasher CPA Website

## Overview

A professional accounting firm website for Bennett Thrasher, built as a full-stack TypeScript application. The project showcases the firm's services, team experts, client testimonials, and industry awards. It features a modern React frontend with animations and a Node.js/Express backend serving data from a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with custom CSS variables for theming (Navy Blue/Gold color scheme)
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for entrance animations and interactions
- **Carousel**: Embla Carousel for testimonials and experts sections
- **Fonts**: Poppins (display/headers), Nunito (body text) via Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx
- **API Design**: RESTful endpoints defined in shared routes file
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Build Tool**: esbuild for production server bundling, Vite for client

### Data Layer
- **Database**: PostgreSQL
- **Schema Location**: `shared/schema.ts` - defines tables for services, experts, testimonials, and awards
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Migrations**: Drizzle Kit with `db:push` command

### Project Structure
```
client/           # React frontend application
  src/
    components/   # UI components and shared components
    hooks/        # Custom React hooks for data fetching
    pages/        # Page components (Home, NotFound)
    lib/          # Utilities and query client
server/           # Express backend
  db.ts           # Database connection
  routes.ts       # API route definitions with auto-seeding
  storage.ts      # Data access layer
  static.ts       # Static file serving for production
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema
  routes.ts       # API route type definitions
```

### Development vs Production
- **Development**: Vite dev server with HMR, tsx for server
- **Production**: Static build served by Express, esbuild-bundled server

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available but not currently implemented)

### Third-Party UI Libraries
- **Radix UI**: Full suite of accessible component primitives
- **Lucide React**: Icon library
- **class-variance-authority**: Variant styling for components
- **cmdk**: Command menu component

### Build & Development Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **Drizzle Kit**: Database schema management
- **PostCSS/Autoprefixer**: CSS processing

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment indicator