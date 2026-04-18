# BEC 2026 IT Responsible — Motivational Website

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Interactive motivational letter website for the IT Responsible position at BEST Engineering Competition 2026, organized by BEST Lviv.

---

## Table of Contents

- [How It Works](#how-it-works)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## How It Works

1. The site opens with a full-viewport hero section featuring animated floating orbs and a staggered letter-by-letter name reveal
2. Scrolling triggers entrance animations on each section using IntersectionObserver
3. The About section preserves all original content from the previous hackathon motivational site verbatim
4. The Skills section displays technical abilities in a two-column layout with interactive color-coded badges
5. Three project cards showcase production-grade work (StarostaBot, Family Tree Bot, previous application site)
6. The Why Me section presents structured arguments for the candidacy in alternating left-right blocks
7. A vertical timeline visualizes the candidate's journey with scroll-triggered reveal animations
8. The Contact footer provides links to GitHub, Telegram, and email for jury follow-up
9. All animations respect `prefers-reduced-motion` for accessibility
10. The site deploys automatically to Vercel upon pushing to the main branch

## Features

- **Staggered Hero Animation** -- each letter of the candidate's name animates in independently using Framer Motion spring physics
- **Floating Orbs Background** -- four blurred gradient orbs drift with CSS keyframe animations at 6% opacity for subtle depth
- **Scroll-Triggered Entrances** -- every section fades in from below when it enters the viewport, using IntersectionObserver with `triggerOnce`
- **Interactive Skill Badges** -- color-coded pills with JetBrains Mono font and hover fill transitions matching each technology's brand color
- **Expandable Project Cards** -- cards show a 4-line description by default with a toggle to reveal full details and skills demonstrated
- **Responsive Design** -- fully adaptive layout from 320px mobile to 4K desktop, tested on all breakpoints
- **Dark Engineering Theme** -- deep dark background palette with BEC electric orange-red primary color and cyan accents
- **Accessibility** -- focus-visible states on all interactive elements, reduced motion support, semantic HTML throughout
- **Automatic Deployment** -- Vercel automatically builds and deploys the site on every push to main

## Tech Stack

| Component       | Technology                    | Version |
|-----------------|-------------------------------|---------|
| Framework       | React                         | 19      |
| Build Tool      | Vite                          | 8       |
| Styling         | Tailwind CSS                  | 3       |
| Animation       | Framer Motion                 | 12      |
| Scroll Effects  | react-intersection-observer   | 10      |
| Icons           | Lucide React                  | 1.8     |
| Fonts           | Inter + JetBrains Mono        | --      |
| Deployment      | Vercel                        | --      |
| CI/CD           | Vercel                        | --      |

## Requirements

- Node.js v18 or higher
- npm v9 or higher

## Installation

1. Clone the repository

```bash
git clone https://github.com/Alkaness/bec-2026-ml.git
```

2. Navigate to the project directory

```bash
cd bec-2026-ml
```

3. Install dependencies

```bash
npm install
```

## Usage

Start the development server:

```bash
npm run dev
```

Open the browser at the URL shown in the terminal (usually `http://localhost:5173`). Vite provides instant HMR so changes appear immediately.

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
bec-2026-ml/

├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.jsx        # Full-viewport opening section
│   │   │   └── FloatingOrbs.jsx
│   │   ├── About/
│   │   │   └── About.jsx       # Preserved content from previous site
│   │   ├── Skills/
│   │   │   ├── Skills.jsx      # Two-column skill display
│   │   │   └── SkillBadge.jsx
│   │   ├── Projects/
│   │   │   ├── Projects.jsx    # Three project cards
│   │   │   └── ProjectCard.jsx
│   │   ├── WhyMe/
│   │   │   ├── WhyMe.jsx       # Motivational arguments
│   │   │   └── WhyBlock.jsx
│   │   ├── Timeline/
│   │   │   └── Timeline.jsx    # Vertical scroll timeline
│   │   ├── Contact/
│   │   │   └── Contact.jsx     # Footer with links
│   │   └── shared/
│   │       ├── AnimatedSection.jsx
│   │       ├── SectionLabel.jsx
│   │       └── TechBadge.jsx
│   ├── data/
│   │   ├── projects.js         # Project card data
│   │   └── skills.js           # Skills data with brand colors
│   ├── App.jsx                 # Root layout
│   ├── main.jsx                # React 18 entry point
│   └── index.css               # Design system + Tailwind
├── index.html
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

## Deployment

The site is designed to be deployed seamlessly using **Vercel**. 

1. Push your code to a GitHub repository.
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New** > **Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect that you are using Vite and configure the build settings `npm run build` and the output directory `dist/`.
5. Click **Deploy**.

Vercel will now automatically build and deploy your site on every push to the `main` branch.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b my-feature`)
3. Commit your changes
4. Open a Pull Request
