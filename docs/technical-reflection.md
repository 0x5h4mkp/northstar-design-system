# Technical Reflection

## Why build a design system instead of one-off pages?

Building pages one at a time means re-solving the same problems over and over, like what shade of blue counts as "primary" or how much padding a button needs. A design system fixes this by defining those choices once, so every component pulls from the same source instead of guessing each time.

## Consistency

Every component references the same token file, so a brand color change is a one-line edit instead of hunting through every file for hardcoded hex codes. Interaction states like hover and error work the same everywhere because they're the same component, not separate copies.

## Scalability

New pages don't need new decisions about what a button or alert looks like. They just use what already exists. That means the system gets easier to build with over time instead of harder.

## Onboarding

A new developer can look at the style guide and docs instead of needing someone to explain every component out loud. They can see all the states and variations in one place and start building right away.

## Development Efficiency

Reusing components means fewer duplicated bugs. Fixing something in the Modal fixes it everywhere the Modal is used, instead of tracking down five different copy-pasted versions. Testing is easier too, since testing one Button covers every Button in the product.

## Takeaway

Building a design system takes more time upfront, but it pays off fast once there's more than a few screens. You trade a bigger initial investment for consistency and faster development down the line.