# Component Documentation

Purpose, props, and accessibility notes for each component in the Northstar Design System.

## Button
Clickable action element for triggering events (submit, open modal, navigate).

**Usage**
```jsx
<Button variant="primary" onClick={handleClick}>Label</Button>
```

| | |
|---|---|
| **Props** | `variant` (primary/secondary/ghost), `size` (sm/md/lg), `disabled`, `type` |
| **Accessibility** | Native `<button>`, keyboard-operable by default. Visible focus ring on `:focus-visible` only. Disabled state removes from tab order. |

## Navigation
Site nav bar with logo and links; collapses to a mobile menu below 1024px.

**Usage**
```jsx
<Navigation logoText="Northstar" links={[{ label: 'Home', href: '#home' }]} activeHref="#home" />
```

| | |
|---|---|
| **Props** | `logoText`, `links` (array of `{label, href}`), `activeHref` |
| **Accessibility** | `<nav>` landmark with `aria-label`. Toggle button uses `aria-expanded`/`aria-controls`. Active link marked with `aria-current="page"`, not color alone. |

## Form Field
Labeled input with helper text, error state, and required indicator.

**Usage**
```jsx
<FormField label="Email address" type="email" value={email} onChange={handleChange} required />
```

| | |
|---|---|
| **Props** | `label`, `type`, `error`, `helperText`, `required`, `disabled` |
| **Accessibility** | `useId()` links label to input. `aria-invalid` + `aria-describedby` on error. Error text uses `role="alert"`. |

## Alert
Dismissible message banner for success, error, or info feedback.

**Usage**
```jsx
<Alert variant="success" title="Success" onDismiss={handleDismiss}>Your changes have been saved.</Alert>
```

| | |
|---|---|
| **Props** | `variant` (success/error/info), `title`, `onDismiss` |
| **Accessibility** | Errors use `role="alert"` (interrupts); success/info use `role="status"` (polite). Dismiss button has `aria-label`. |

## Card
Container for an image, title, description, and optional footer, static or clickable.

**Usage**
```jsx
<Card title="Course Title" description="Short description." imageUrl="/image.png" onClick={handleClick} />
```

| | |
|---|---|
| **Props** | `imageUrl`/`imageAlt`, `title`, `description`, `footer`, `onClick` |
| **Accessibility** | Interactive cards get `role="button"`, `tabIndex`, and Enter/Space support. Static cards stay non-focusable. |

## Accordion
Expandable/collapsible stacked sections (FAQ-style).

**Usage**
```jsx
<Accordion items={[{ title: 'Question?', content: 'Answer.' }]} />
```

| | |
|---|---|
| **Props** | `items` (array of `{title, content}`) |
| **Accessibility** | Real `<button>` triggers with `aria-expanded`. `aria-controls`/`aria-labelledby` link trigger to panel. Closed panels use native `hidden`. |

## Modal
Overlay dialog for confirmations, blocking background interaction.

**Usage**
```jsx
<Modal isOpen={isOpen} onClose={handleClose} title="Confirm" footer={<Button>OK</Button>}>
  Message content.
</Modal>
```

| | |
|---|---|
| **Props** | `isOpen`, `onClose`, `title`, `footer` |
| **Accessibility** | `role="dialog"`, `aria-modal`, `aria-labelledby`. Focus moves to the first focusable element on open and is trapped inside while open, cycling correctly with both Tab and Shift+Tab. Closes on Escape or backdrop click. Focus returns to the trigger element on close. |

## Footer
Site-wide footer with org name, links, and copyright.

**Usage**
```jsx
<Footer orgName="Northstar Learning Collective" links={[{ label: 'Privacy Policy', href: '#privacy' }]} />
```

| | |
|---|---|
| **Props** | `orgName`, `links`, `year` |
| **Accessibility** | Semantic `<footer>` landmark. Links and copyright text meet WCAG AA contrast against the navy background. |