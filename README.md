# Ohemaa’s Time With Kids — Official Website

A responsive after-school childcare website built with **Angular 22**, **TypeScript**, **Signals**, and **SCSS**, matching the design reference with high visual fidelity, accessible contrast, responsive layouts, and locally hosted assets.

---

## 🌟 Brand & Mission

- **Brand:** Ohemaa’s Time With Kids
- **Audience:** Parents and guardians in Accra, especially working parents seeking reliable after-school childcare and engaging activities.
- **Location:** Accra, Ghana
- **Phone:** `0550794321` (`tel:+233550794321`)
- **Email:** `ohemaastimewithkids@gmail.com` (`mailto:ohemaastimewithkids@gmail.com`)
- **About Copy:** *“Ohemaa’s Time With Kids provides safe, engaging, and nurturing after-school childcare support for children while helping parents manage their daily responsibilities. Our activities encourage learning, creativity, good character, and positive social development in a caring environment.”*

---

## 🚀 Quick Start & Local Execution

### Prerequisites
- **Node.js**: v20.x or v22.x+ (Tested on Node.js v24)
- **npm**: v10+ (Tested on npm v12.0.2)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm start
# or: ng serve
```
Open [http://localhost:4200/](http://localhost:4200/) in your browser.

### 3. Run Unit Tests (Vitest)
```bash
npm test -- --watch=false
```

### 4. Run Full Quality Check (TypeCheck + Tests + Build)
```bash
npm run check
```

### 5. Production Build
```bash
npm run build
```
Optimized static bundles will be generated in `dist/ohemaas-time-with-kids/browser/`.

---

## 📂 Architecture & Component Structure

Organized cleanly under `src/app/` following Angular best practices (standalone components, signals, OnPush change detection, strict typing):

```
src/
├── app/
│   ├── components/
│   │   ├── site-header/         # Sticky navigation, logo badge, accessible mobile drawer
│   │   ├── hero-section/        # Garden hero with character framing, fluid typography & CTAs
│   │   ├── benefits-strip/      # Frosted glass floating strip with inline SVG badges
│   │   ├── activity-card/       # Reusable card component (Mint/Lilac/Peach themes)
│   │   ├── activities-section/  # 3-column responsive activity cards grid
│   │   ├── about-section/       # Two-column banner with leaf badge and core mission copy
│   │   ├── contact-section/     # Direct info cards, clipboard email copy, and Enquiry composer
│   │   └── site-footer/         # Forest-green footer with branding, anchors, & contact details
│   ├── core/
│   │   └── site-data.ts         # Typed configuration object for all brand copy & assets
│   ├── services/
│   │   └── enquiry.service.ts   # Signal-based enquiry state and mailto draft generator
│   ├── app.ts                   # Root container component with skip link & semantic regions
│   ├── app.html
│   ├── app.scss
│   └── app.spec.ts
├── styles.scss                  # Design tokens, CSS variables, Lexend @font-face, resets
└── index.html                   # Preload directives, OpenGraph meta, and Schema.org JSON-LD
```

---

## 🎨 Asset Map & Optimization

All assets are stored locally under `public/` and served directly with optimized WebP/AVIF variants alongside original formats:

| Asset Purpose | Original File | Optimized Formats | Notes |
|---|---|---|---|
| **Brand Logo** | `ohemaa-logo.jpg` | `.webp`, `.avif` | Displayed on a white circular badge without stretching |
| **Hero Garden** | `hero-garden.png` | `.webp`, `.avif`, `-800.webp`, `-1200.webp` | Positioned background with left dark gradient overlay |
| **Activity 1 (Learn)** | `activity-learn.png` | `.webp`, `.avif` | Boy building with blocks on mint background |
| **Activity 2 (Create)** | `activity-create.png` | `.webp`, `.avif` | Girl painting on lilac background |
| **Activity 3 (Play)** | `activity-play.png` | `.webp`, `.avif` | Children playing on peach/cream background |
| **Brand Illustration** | `brand-illustration.jpg` | `.webp`, `.avif` | Reference artwork |
| **Design Reference** | `design-reference.png` | `.webp` | Approved desktop visual reference |

### Asset Processing Script
To re-generate optimized WebP/AVIF images and update local fonts, run:
```bash
npm run assets
```

---

## 🔤 Typography & Fonts

- **Font Family:** `Lexend`, with rounded system fallbacks (`system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`).
- **Hosting:** Locally hosted variable WOFF2 fonts located in `public/fonts/lexend-variable.woff2` and `public/fonts/lexend-ext.woff2`.
- **Loading Strategy:** Preloaded in `<head>` via `<link rel="preload">` and configured with `font-display: swap` to prevent FOIT (Flash of Invisible Text).

---

## ♿ Accessibility (a11y) & Responsiveness

- **Keyboard Navigation:** Full tab order navigation, visible high-contrast focus rings (`:focus-visible`), and accessible skip link (`#main-content`).
- **Screen Reader Support:** Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`), live announcements (`aria-live="polite"`) for clipboard feedback, and descriptive `aria-label`s on all action buttons.
- **Mobile Menu Dialog:** Native button trigger with `aria-expanded` and `aria-controls="mobile-nav-dialog"`, closes automatically on Escape key or link selection.
- **Enquiry Composer:** Reactive form with validation, field trimming, and descriptive error messages linked via `aria-describedby` and `aria-invalid`. No fake submission alerts; opens visitor's default email client via formatted `mailto:` scheme.
- **Reduced Motion:** Fully respects `prefers-reduced-motion: reduce`, disabling smooth animations and transitions for sensitive users.
- **Breakpoints Tested:** 360px, 390px, 768px, 1024px, and 1440px+ (fluid padding, no horizontal overflow, legible typography).

---

## 🌿 Sylva / Three.js Source Handling & Fallback Report

- **Source Preservation:** The original `skills/sylva-source.html` file is preserved byte-for-byte in the repository.
- **Scene Evaluation:** Inspection of `sylva-source.html` revealed that it represents an independent botanical root demo ("Sylva") with hardcoded remote Supabase fonts, external shaders, and unrelated text/controls.
- **Integration Rationale:** In accordance with prompt guidelines prioritizing the approved childcare composition, the childcare homepage uses the rich illustrated hero artwork (`hero-garden.png` / `.webp`) with smooth CSS layer blending and gradient contrast overlays. This ensures zero WebGL blocking, instant First Contentful Paint (FCP), zero battery drain on mobile devices, and full accessibility compliance without embedding unrelated 3D geometries.

---

## 📄 License & Ownership

Copyright © 2026 Ohemaa’s Time With Kids. All rights reserved.
