# Automated Accessibility Audit

Tool used: Lighthouse (Chrome DevTools)
Date: July 19, 2026

## Score
100/100 (Accessibility)

## Issues Found
Initial run flagged one issue: "Document does not have a main landmark."

## Corrections Made
Wrapped the primary page content in a semantic `<main>` element (previously a generic `<div>`), giving screen reader users a clear landmark for the page's main content, separate from the navigation and footer.

## Known Remaining Limitations
No screen reader software (NVDA/VoiceOver) testing was performed. Manual keyboard testing and this automated Lighthouse audit were used instead.