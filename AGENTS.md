# BioVerify Project - AGENTS.md

## Build, Lint, and Test Commands

### Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint on all files

### Testing Commands
*This project currently doesn't have a test framework configured. When tests are added:*
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Code Style Guidelines

### TypeScript Guidelines
- Use TypeScript strict mode (enabled in tsconfig.json)
- Prefer interfaces over types for object shapes
- Use type aliases for union types, mapped types, and complex utility types
- Avoid `any` type; use `unknown` when type is uncertain and validate at runtime
- Use explicit return types for exported functions
- Use functional components with explicit props interfaces
- Enable `noImplicitReturns`, `noFallthroughCasesInSwitch`, and `noUncheckedIndexedAccess` for stricter type checking

### Import Guidelines
- Group imports in this order:
  1. Next.js imports (next/*)
  2. React imports (react, react-dom)
  3. Third-party libraries (alphabetical)
  4. Internal imports (components, hooks, lib, etc.)
  5. Type-only imports (using `import type`)
- Use path aliases: `@/*` for absolute imports
- Sort imports alphabetically within each group
- Avoid barrel exports; import from specific files
- Place React imports before other third-party libraries
- Import CSS files at the top of the file when needed

### Formatting Guidelines
- Use Prettier for code formatting (implicit via project setup)
- Max line length: 100 characters
- Use 2 spaces for indentation (not tabs)
- Trailing commas on multiline objects/arrays
- Semicolons required
- Single quotes for strings, except when escaping
- No unused variables or imports
- No console.log in production code (remove before commit)
- Empty lines: Maximum of 2 consecutive empty lines
- JSX elements should span multiple lines when they have more than one attribute or when children span multiple lines

### Component Guidelines
- Use functional components with React hooks
- Export default for page components, named exports for reusable components
- Use proper file naming: PascalCase for components (.tsx), camelCase for utilities (.ts)
- Group related components in folders under `/components`
- Use Tailwind CSS for styling with utility-first approach
- Apply responsive design with mobile-first breakpoints
- Accessibility: Include proper ARIA labels, semantic HTML, and focus management
- Handle loading and error states appropriately
- Use React.memo() for performance optimization when beneficial
- Use useCallback and useMemo for expensive computations
- Derive state from props when possible to reduce state synchronization issues

### Error Handling
- Use try/catch for async operations in event handlers
- Display user-friendly error messages with toast notifications (using sonner)
- Log errors to console in development only
- Implement error boundaries where appropriate
- Validate form inputs with react-hook-form and zod
- Use proper HTTP status codes in API responses
- Create custom error classes for domain-specific errors
- Use error boundaries for graceful degradation in UI components

### Tailwind CSS Guidelines
- Use Tailwind utility classes exclusively (no custom CSS unless absolutely necessary)
- Apply variants in logical order: base, layout, flex/grid, spacing, typography, colors, effects
- Extract repeated utility patterns to component variants using twmr or cva
- Use @apply sparingly and only in component CSS files
- Maintain consistent spacing using Tailwind's scale (4px base unit)
- Use dark mode variants appropriately: `dark:`
- Follow the project's color system from globals.css
- Use semantic class naming when extracting components
- Apply hover, focus, and other state variants consistently
- Use arbitrary values sparingly and prefer design system values

### Specific Technology Guidelines

#### Next.js
- Use App Router for new pages and layouts
- Prefer Server Components when possible for better performance
- Use Client Components only when necessary (state, effects, event handlers)
- Leverage streaming and Suspense for better loading experiences
- Use next/image for image optimization
- Use next/font for font optimization
- Implement proper metadata for SEO

#### Shadcn/UI Components
- Use the provided components from @/components/ui as base
- Extend components through composition rather than modification
- Follow the existing naming and props patterns
- Use the cn utility from '@/lib/utils' for class merging
- Customize variants using Tailwind's arbitrary values when needed

#### Paper Design Shaders
- Use the shader components for decorative backgrounds and effects
- Follow the existing patterns in components/pulsing-border-shader.tsx
- Pass uniform values as props according to the shader's interface
- Keep shader usage performant by avoiding unnecessary re-renders
- Use shader components sparingly to maintain good performance

#### Internationalization
- Use the useI18n hook from '@/lib/i18n' for translations
- Add new translations to both English and Portuguese objects
- Use meaningful keys that describe the content's purpose
- Keep translation strings concise and clear
- Use sprintf-style formatting for dynamic content when needed

### File Organization
```
/app - Next.js app router (pages, layouts, loading states)
/components - Reusable UI components
  /ui - Shadcn/ui components and custom UI primitives
/hooks - Custom React hooks
/lib - Utility functions, constants, API clients
/public - Static assets
/styles - Global CSS and Tailwind configuration
```

### Git Commit Guidelines
- Use conventional commits format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore
- Keep subject line under 50 characters
- Reference issues when applicable: `fix: resolve login issue #123`
- Include detailed explanation in body when needed
- Don't commit `.env` files or sensitive data
- Squash related commits before merging to main branch
- Write commit messages in present tense ("add feature" not "added feature")
- Reference pulling requests in commit messages when applicable

### Performance Guidelines
- Use Next.js Image component for optimized images
- Implement lazy loading for below-the-fold content
- Use React.Suspense for code splitting
- Minimize client-side JavaScript; prefer server components when possible
- Optimize bundle size by importing only what's needed
- Use useMemo and useCallback judiciously
- Avoid unnecessary re-renders with proper dependency arrays
- Implement pagination for large data sets
- Use request deduplication for API calls
- Leverage browser caching for static assets
- Optimize shader performance by limiting complexity
- Use the Next.js analytics script only in production

### Accessibility Guidelines
- Follow WCAG 2.1 AA standards
- Ensure proper color contrast ratios (minimum 4.5:1 for normal text)
- Provide keyboard navigation for all interactive elements
- Use semantic HTML elements appropriately
- Include alt text for all meaningful images
- Ensure focus visibility and proper focus ordering
- Label form elements properly with associated labels
- Use ARIA labels and roles when necessary
- Ensure touch targets are at least 44x44 pixels
- Provide skip navigation links for keyboard users
- Respect user preferences for reduced motion
- Ensure form validation errors are announced to screen readers