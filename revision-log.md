# Revision Log — Northstar Design System

## 1. Cleaned source package
Removed node_modules, .vs, dist, and unused Vite starter files (App.css, react.svg, vite.svg). Verified the cleaned project reinstalls and builds successfully from scratch via npm install and npm run build.

## 2. Fixed footer contrast
Footer copyright text color changed from navy-300 to lavender-300 in Footer.css, bringing it from a failing contrast ratio to a passing one against the navy background.

## 3. Repaired modal keyboard behavior
On open, focus now moves to the first focusable element inside the modal instead of the modal container itself. This fixed Shift+Tab immediately after opening, which now correctly wraps to the last focusable element instead of risking focus escaping to the page behind the modal.

## 4. Verified focus restoration
Confirmed and documented in testing-checklist.md that focus returns to the exact trigger button when the modal closes.

## 5. Added automated accessibility evidence
Ran a Lighthouse accessibility audit. Initial score flagged a missing `<main>` landmark. Fixed by wrapping the page's primary content in a semantic `<main>` element. Final score: 100/100. Full report at docs/accessibility-audit-report.md.

## 6. Added component usage examples
component-docs.md updated with a short import/usage code snippet for each of the 8 components.

## 7. Repackaged for portability
Cleaned project tested via fresh npm install and npm run build in isolation to confirm it installs and builds correctly without relying on the original local environment.

## Remaining Known Limitations
No screen reader software testing (NVDA/VoiceOver) was performed. Noted in docs/accessibility-audit-report.md.