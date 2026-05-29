# BrittanyLudwig.com — Redux

A modern refactor of my personal portfolio site, originally built in 2020. This version rebuilds the site from the ground up using a current React + TypeScript + Vite stack, with an updated component architecture, Tailwind CSS v4 for styling, and a leaner, more maintainable codebase.

> 🔎 **Compare with the original:** [github.com/brittbludwig/bbl](https://github.com/brittbludwig/bbl)
>
> The original 2020 site is preserved as-is for reference. This `bbl-redux` repo is a side-by-side modernization of the same concept — same playful, scroll-driven storytelling, but with updated tooling, patterns, and accessibility.

## What's new vs. the 2020 version

| Area | 2020 (`bbl`) | 2026 (`bbl-redux`) |
| --- | --- | --- |
| Build tool | Create React App | Vite |
| Language | JavaScript | TypeScript |
| Styling | SCSS modules | Tailwind CSS v4 |
| State / context | Class components + ad-hoc state | Hooks + typed React Context |
| Component model | Monolithic section components | Composable `Container.Inner` / `Column` / `Panel` primitives |
| Animation | CSS + manual scroll math | Reusable `useParallax`, `useSection` hooks + Tailwind keyframes |
| Imports | Relative paths | Path aliases (`$hooks`, `$images`, `$types`, etc.) |

## Tech Stack

- **Vite** — fast dev server + build
- **React 18 + TypeScript**
- **Tailwind CSS v4** (with `@theme` custom animations)
- **React Router** for routing
- Custom hooks for parallax and active-section tracking

## Project Structure

```
bbl-redux
├── src
│   ├── main.tsx                # Entry point
│   ├── App.tsx                 # Root component
│   ├── components
│   │   ├── sections/           # Section1–Section7 page sections
│   │   ├── elements/           # Reusable UI (Container, ContentBox, FieldBox, Contact…)
│   │   └── art/                # Decorative / animated illustrations (Rocket, Moon, Stars…)
│   ├── hooks/                  # useParallax, useSection, etc.
│   ├── providers/              # SectionProvider, FormProvider
│   ├── images/                 # Site imagery
│   └── types/                  # Shared TypeScript types
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

Clone and install:

```bash
git clone <repository-url>
cd bbl-redux
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with HMR.

### Production build

```bash
npm run build
```

Outputs an optimized build to `dist/`.

### Preview the production build

```bash
npm run preview
```

## License

MIT