# Accessibility Review

Manual audit of the Northstar Design System (keyboard-only navigation + visual inspection, no automated tools).

## Keyboard Navigation
All interactive elements (buttons, links, fields, accordion, modal) are reachable and operable via Tab/Enter/Space in a logical order. The interactive Card behaves like a native button. The Modal traps focus while open, closes on Escape, and returns focus to its trigger button on close.

## Focus Visibility
All interactive elements show a visible lavender focus ring via `:focus-visible` — visible for keyboard users only, suppressed on mouse click.

## Form Labeling
Labels are programmatically linked to inputs (`htmlFor`/`id`). Required fields show a visible asterisk. Errors use `aria-describedby` + `role="alert"` for immediate screen reader announcement.

## Contrast
Checked against WCAG AA (4.5:1 body text) — navy text on white, white on navy, lavender links on navy, and error text all pass. Pale yellow is used only as a decorative accent (icons, underlines), never as body text, since it wouldn't pass contrast alone.

## Known Limitations
- No automated testing (e.g. axe-core, Lighthouse) was run.
- No screen reader testing was performed; ARIA was implemented per best practice but not verified with NVDA/VoiceOver.
- Contrast was checked visually, not with a contrast-ratio tool.