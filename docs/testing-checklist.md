# Testing Checklist

Manual testing done on the Northstar Design System before submission, plus one automated accessibility audit.

## Browser
- [x] Tested in Microsoft Edge

## Responsive
- [x] Desktop (1280px), Tablet (768px), Mobile (375px)
- [x] Nav collapses to hamburger menu below 1024px and opens/closes correctly

## Components
- [x] Button: variants, sizes, disabled state all render correctly
- [x] Form Field: error, helper text, disabled, and required states all work
- [x] Alert: success/error/info trigger and dismiss correctly
- [x] Card: static and interactive versions work; interactive card responds to click and keyboard
- [x] Accordion: opens/closes correctly, only one section open at a time
- [x] Modal: opens, closes via X/backdrop/Escape. Focus moves to the first focusable element on open. Tab and Shift+Tab both verified to cycle correctly within the dialog without escaping to the page behind it. Focus returns to the trigger button on close.
- [x] Footer: links and copyright render correctly; text contrast verified against WCAG AA

## Interaction States
- [x] Hover, focus ring, active, and disabled states all visible and correct

## Keyboard Navigation
- [x] Entire page navigable via Tab, Shift+Tab, Enter, and Space (no mouse), in logical order

## Automated Accessibility Audit
- [x] Lighthouse accessibility audit run, scored 100/100 after fixing a missing `<main>` landmark (see docs/accessibility-audit-report.md)

## Portability
- [x] Cleaned project (node_modules, .vs, and unused starter files removed) reinstalled and rebuilt successfully via `npm install` and `npm run build`

## Known Issues
- None identified.