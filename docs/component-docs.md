# Component Documentation

Purpose, props, and accessibility notes for each component in the Northstar Design System.

## Button
Clickable action element for triggering events (submit, open modal, navigate).

| | |
|---|---|
| **Props** | `variant` (primary/secondary/ghost), `size` (sm/md/lg), `disabled`, `type` |
| **Accessibility** | Native `<button>`, keyboard-operable by default. Visible focus ring on `:focus-visible` only. Disabled state removes from tab order. |

## Navigation
Site nav bar with logo and links; collapses to a mobile menu below 1024px.

| | |
|---|---|
| **Props** | `logoText`, `links` (array of `{label, href}`), `activeHref` |
| **Accessibility** | `<nav>` landmark with `aria-label`. Toggle button uses `aria-expanded`/`aria-controls`. Active link marked with `aria-current="page"`, not color alone. |

## Form Field
Labeled input with helper text, error state, and required indicator.

| | |
|---|---|
| **Props** | `label`, `type`, `error`, `helperText`, `required`, `disabled` |
| **Accessibility** | `useId()` links label to input. `aria-invalid` + `aria-describedby` on error. Error text uses `role="alert"`. |

## Alert
Dismissible message banner for success, error, or info feedback.

| | |
|---|---|
| **Props** | `variant` (success/error/info), `title`, `onDismiss` |
| **Accessibility** | Errors use `role="alert"` (interrupts); success/info use `role="status"` (polite). Dismiss button has `aria-label`. |

## Card
Container for an image, title, description, and optional footer — static or clickable.

| | |
|---|---|
| **Props** | `imageUrl`/`imageAlt`, `title`, `description`, `footer`, `onClick` |
| **Accessibility** | Interactive cards get `role="button"`, `tabIndex`, and Enter/Space support. Static cards stay non-focusable. |

## Accordion
Expandable/collapsible stacked sections (FAQ-style).

| | |
|---|---|
| **Props** | `items` (array of `{title, content}`) |
| **Accessibility** | Real `<button>` triggers with `aria-expanded`. `aria-controls`/`aria-labelledby` link trigger to panel. Closed panels use native `hidden`. |

## Modal
Overlay dialog for confirmations, blocking background interaction.

| | |
|---|---|
| **Props** | `isOpen`, `onClose`, `title`, `footer` |
| **Accessibility** | `role="dialog"`, `aria-modal`, `aria-labelledby`. Focus trapped inside while open. Closes on Escape or backdrop click. Focus returns to trigger element on close. |

## Footer
Site-wide footer with org name, links, and copyright.

| | |
|---|---|
| **Props** | `orgName`, `links`, `year` |
| **Accessibility** | Semantic `<footer>` landmark. Links have visible focus states and sufficient contrast on the navy background. |