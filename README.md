# Northstar Design System

A reusable, accessible front-end component library and design system, built as a portfolio project for **Northstar Learning Collective**, a fictional educational organization.

This project was created as part of The Emerson Empire Global Internship Program's Independent Portfolio & Readiness Assessment Sprint (July 2026). All client details, branding, and data are fictional and created solely for demonstration purposes.

## Overview

This design system includes a set of design tokens (colors, typography, spacing, borders, shadows) and eight reusable, accessible React components, all shown together on a single style-guide page.

## Tech Stack

- React
- Vite
- Plain CSS with CSS custom properties (design tokens)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone or download this repository
2. Install dependencies: npm install
3. Start the development server: npm run dev
4. Open the local URL shown in your terminal (typically `http://localhost:5173`)

## Features

- **Design tokens** — colors, typography, spacing, radii, shadows, breakpoints
- **8 components** — Button, Navigation, Form Field, Alert, Card, Accordion, Modal, Footer
- **Full interaction states** — hover, focus, active, disabled, error, success
- **Responsive** — nav collapses to mobile menu below 1024px
- **Accessible by default** — semantic HTML, visible focus states, ARIA (see `docs/accessibility-review.md`)
- **Verified accessible** — automated Lighthouse accessibility audit scored 100/100 (see `docs/accessibility-audit-report.md`)

## Project Structure
src/
components/       - One folder per component (JSX + CSS)
styles/
tokens.css      - Design tokens
App.jsx           - Style-guide page showing all components
docs/
component-docs.md         - Purpose, usage, and variations per component
accessibility-review.md   - Accessibility audit and known limitations
technical-reflection.md   - Reflection on design system value

## Known Limitations

- This is a demonstration component library, not a production package - Components are not published as an installable npm package.
- Images used are AI-generated illustrations for demonstration purposes only.
- No automated test suite; testing was done manually (see `docs/accessibility-review.md` for testing notes).
- Testing was manual, supplemented by an automated Lighthouse accessibility audit; no full automated test suite

## Future Improvements

- Add automated accessibility testing (e.g. axe-core)
- Package components for npm distribution
- Add dark mode token set
- Expand component set (tabs, tooltips, pagination)

## Author

Shamrit Phagura — Web Development Intern, The Emerson Empire Global Internship Program