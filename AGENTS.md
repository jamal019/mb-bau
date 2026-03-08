# AGENTS.md

## Project Overview

This repository contains the website for **MB Bauausführungen GmbH**, a professional construction company based in Berlin.

The website is a **modern, SEO-focused, static marketing website** built with:

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- App Router
- Static generation where possible
- Content stored directly in the repository

There is **no traditional backend** and no CMS at the moment.
The site is maintained by developers through code changes in this repository.

The primary goals are:

1. **Professional appearance**
2. **Strong SEO performance**
3. **Fast loading times**
4. **Easy content maintenance**
5. **Simple deployment and low hosting cost**

---

## Business Context

Company name: **MB Bauausführungen GmbH**  
Managing Director: **Mahmut Ruhi Bayrak**  
Address: **Bessemerstraße 82, 12103 Berlin, Germany**  
Phone: **01523 8204702**

This is a real-world company website for a construction business.
The tone, structure, and content should reflect a trustworthy, established, local German business.

---

## General Working Rules

When making changes in this repository, always follow these rules:

### 1. Preserve the architecture
Do not introduce unnecessary complexity.

- Do not add a database unless explicitly requested
- Do not add a CMS unless explicitly requested
- Do not add a separate backend unless explicitly requested
- Prefer static generation and simple content-driven architecture
- Keep dependencies minimal

### 2. Prioritize maintainability
This project should remain easy to maintain by a developer without heavy operational overhead.

- Prefer simple, readable code
- Avoid overengineering
- Avoid deep abstraction unless it provides real reuse
- Keep components understandable and modular

### 3. Protect SEO at all times
SEO is a core requirement.

Any change must preserve or improve:

- semantic HTML structure
- page metadata
- internal linking
- crawlability
- performance
- structured data
- sitemap / robots behavior
- canonical URLs where applicable

Do not replace SEO-friendly static content with client-only rendering unless explicitly required.

### 4. Preserve performance
This is a marketing website, not a web app.

- Minimize client-side JavaScript
- Prefer Server Components by default
- Only use Client Components when necessary
- Use optimized images
- Avoid heavy animation libraries
- Avoid unnecessary third-party scripts

### 5. Keep content easy to edit
Content should stay easy to update in code.

- Services and projects should remain content-driven
- New entries should be easy to add
- Placeholder content must be easy to replace later
- Do not scatter business-critical text across many unrelated files if avoidable

---

## Tech Standards

## Stack
- Next.js (latest stable)
- TypeScript
- Tailwind CSS
- App Router
- Static generation where appropriate

## Preferred patterns
- Server Components by default
- `generateMetadata` for SEO metadata
- Content sourced from local markdown or structured content files
- Reusable layout primitives for sections, containers, buttons, and cards
- Strong typing for all content models

## Avoid
- Redux or heavy global state unless explicitly needed
- Large UI frameworks unless explicitly requested
- Unnecessary runtime fetching for static marketing content
- Client-side only page rendering for SEO-relevant pages

---

## Design Principles

The design should feel:

- modern
- premium
- clean
- structured
- trustworthy
- local-business appropriate

Reference style direction:
- professional consulting websites
- modern service-company websites
- clear hierarchy, strong spacing, strong typography

### Visual expectations
- generous whitespace
- responsive layout
- clear CTAs
- readable sections
- professional color usage
- accessible contrast
- polished mobile layout

### Avoid
- overly playful design
- trendy but distracting effects
- clutter
- excessive motion
- visually noisy layouts

---

## Content Principles

All copy should be written in **German** unless explicitly requested otherwise.

The content should sound:

- professional
- trustworthy
- clear
- conversion-oriented
- locally relevant for Berlin / surrounding area

### Services
Typical service pages should be informative and SEO-friendly.
They should include:
- clear heading
- short intro
- scope of work
- benefits
- process or approach
- CTA

### Projects / References
Project data may initially use placeholders.
These placeholders must remain easy to swap out later.

When working on project/reference content:
- keep the structure reusable
- make image replacement simple
- support future addition of real descriptions and gallery assets

### Legal pages
Impressum and Datenschutz should remain clearly separated and easy to update.

Do not invent legal claims or certifications unless they are explicitly provided.

---

## SEO Standards

SEO is one of the most important priorities in this repository.

Always ensure:

### Metadata
- every page has a meaningful title
- every page has a meaningful meta description
- dynamic pages generate SEO metadata correctly
- Open Graph data is set appropriately

### Structure
- exactly one meaningful `h1` per page
- heading hierarchy should be logical
- links should use descriptive anchor text where useful

### Local SEO
- company information must stay consistent across the site
- structured data should reflect the real business details
- location relevance for Berlin should be preserved where appropriate

### Technical SEO
- sitemap must remain valid
- robots rules must remain valid
- canonical handling must remain correct
- pages should remain indexable unless explicitly intended otherwise

### Performance SEO
- optimize Core Web Vitals where possible
- avoid unnecessary client bundles
- optimize images and layout stability

---

## File and Code Change Rules

### Before changing code
First understand:
- whether the page is static or dynamic
- whether the content comes from local content files
- whether the change could impact SEO
- whether the change affects multiple shared components

### When editing
Prefer minimal, targeted changes.

Do not:
- rewrite unrelated files
- reformat the whole codebase unnecessarily
- move files around without reason
- rename content structures unless needed

### When creating new components
- keep them reusable
- keep props typed
- avoid premature abstraction
- place them in a logical folder structure

### When editing content models
- preserve backwards compatibility where possible
- document required fields clearly
- do not make content management harder

---

## Routing and Page Rules

The site includes pages such as:

- `/`
- `/leistungen`
- `/leistungen/[slug]`
- `/referenzen`
- `/referenzen/[slug]`
- `/ueber-uns`
- `/kontakt`
- `/impressum`
- `/datenschutz`

When changing route behavior:
- preserve clean URL structure
- preserve internal linking consistency
- preserve metadata generation
- preserve static generation where possible

Do not introduce query-parameter-heavy navigation for core marketing pages unless explicitly requested.

---

## Placeholder Content Rules

This repository intentionally contains placeholder content for references/projects and potentially some images.

When working with placeholders:
- keep them clearly structured
- make replacement easy
- do not hardcode placeholder logic in many places
- prefer central content definitions

Placeholder assets should be swappable with minimal effort.

---

## Accessibility Standards

All changes should meet solid baseline accessibility.

Ensure:
- semantic elements are used properly
- buttons and links are distinguishable
- interactive elements are keyboard accessible
- images have meaningful alt text or empty alt text when decorative
- forms have labels
- contrast remains readable

Accessibility should not be treated as optional polish.

---

## Deployment and Hosting Assumptions

The site is intended to be deployed cost-effectively, typically on platforms such as:

- Vercel
- Netlify
- similar static-friendly hosting

Assume:
- low operational complexity is preferred
- no persistent server runtime is required for core functionality
- the project should remain deployable with a straightforward CI/CD workflow

Do not introduce infrastructure requirements that significantly increase hosting complexity or cost unless explicitly requested.

---

## Communication and Change Behavior for Agents

When acting as an AI coding agent in this repository:

### Always do:
- make the smallest effective change
- explain major architectural changes clearly
- preserve SEO and performance
- keep business information consistent
- keep the project production-oriented

### Never do:
- add random dependencies without good reason
- replace simple solutions with complex systems
- break static generation unnecessarily
- remove structured data or metadata
- invent business facts
- add placeholder legal content that sounds definitive if it is uncertain

### If information is missing:
- use clearly marked placeholders
- keep them easy to replace later
- do not fabricate detailed factual claims

---

## Preferred Development Mindset

This is not an experimental playground.
Treat it like a professional business website.

Good decisions are:
- practical
- stable
- SEO-safe
- maintainable
- cost-efficient
- visually polished

Whenever there are multiple possible implementations, prefer the one that is:

1. simpler
2. more maintainable
3. better for SEO
4. better for performance
5. easier to host cheaply

---

## If New Features Are Requested Later

Possible future features may include:
- real contact form handling
- gallery improvements
- project filtering
- CMS integration
- multilingual support
- analytics
- cookie consent

Until explicitly requested, do not preemptively build heavy systems for these.

Build for extensibility, but keep the current implementation lean.

---

## Summary

This repository should remain a:

- high-quality
- modern
- SEO-optimized
- static-first
- professional company website

for **MB Bauausführungen GmbH**.

All changes should support that goal.
