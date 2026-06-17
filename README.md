# identIA Landing Page

Landing page for **identIA** — a biometric identity verification platform. Built with Next.js 15, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix primitives)
- **Icons**: Lucide React
- **Shaders**: @paper-design/shaders-react
- **Internationalization**: Custom i18n context (EN/PT)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
├── app/              # Next.js App Router pages & layout
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/       # React components
│   ├── ui/           # shadcn/ui primitives
│   ├── landing-page.tsx
│   ├── language-switcher.tsx
│   ├── pulsing-border-shader.tsx
│   └── theme-provider.tsx
├── lib/              # Utilities & i18n
│   ├── i18n.tsx      # Internationalization (EN/PT)
│   └── utils.ts
└── public/           # Static assets
```

## Internationalization

The site supports English and Portuguese. Translations are managed in `lib/i18n.tsx` using React Context. The default locale is Portuguese (`pt`).

## Status

identIA is in active development (alpha). APIs and SDKs are not yet available.
