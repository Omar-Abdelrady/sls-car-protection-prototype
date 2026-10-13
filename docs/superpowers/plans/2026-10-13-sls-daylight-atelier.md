# SLS Daylight Atelier Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a second bilingual SLS landing-page concept at `/atelier` with a warm daylight editorial identity that is structurally and visually independent from the dark root route.

**Architecture:** Keep the existing root route untouched. Add a client-rendered `/atelier` route because it consumes the existing locale context, and compose it from route-specific components in `components/atelier/` with colocated CSS Modules. New daylight campaign assets live under `public/images/atelier/`; all interactive state remains inside the header and FAQ components.

**Tech Stack:** Next.js 16.4 App Router, React 19.3, TypeScript 6, CSS Modules, `next/image`, lucide-react, existing Lenis wrapper, Vitest, Testing Library.

## Global Constraints

- The approved design specification is `docs/superpowers/specs/2026-10-13-sls-daylight-atelier-design.md` and governs visual and interaction decisions.
- The existing `/` route, its components, and `app/globals.css` must remain visually and functionally unchanged.
- The new route is exactly `/atelier`; section IDs are `home`, `services`, `protection`, `process`, `faq`, and `contact`.
- Arabic is the default locale; English uses the existing `LocaleProvider` and `useLocale` API.
- Use only verified contact details already present in the project: WhatsApp/phone `+201100666717` and the existing SLS Google Maps search URL.
- Do not add unverified ratings, guarantees, prices, product brands, durability figures, or performance claims.
- New production files use lowercase kebab-case names and CSS Modules; no production change is made before its failing test is observed.
- Motion uses transform and opacity, respects `prefers-reduced-motion`, and does not add a new animation dependency.
- All new raster images use `next/image` with meaningful alt text, responsive `sizes`, and hero-only priority.

---

## File Map

### New route and components

- `app/atelier/page.tsx` — client route assembly and page-level bilingual content.
- `app/atelier/page.module.css` — route canvas, shared width/grid primitives, contact block, and responsive layout.
- `components/atelier/atelier-header.tsx` — light desktop navigation, mobile menu, locale switch, CTA.
- `components/atelier/atelier-header.module.css` — header and mobile menu styling.
- `components/atelier/atelier-hero.tsx` — split editorial hero and proof strip.
- `components/atelier/atelier-hero.module.css` — hero composition and reveal motion.
- `components/atelier/atelier-services.tsx` — three numbered service rows.
- `components/atelier/atelier-services.module.css` — ruled service-list styling.
- `components/atelier/atelier-protection.tsx` — PPF craft image and three-layer explanation.
- `components/atelier/atelier-protection.module.css` — image panel and code-native layer diagram.
- `components/atelier/atelier-process.tsx` — four-step process grid.
- `components/atelier/atelier-process.module.css` — process card layout and connectors.
- `components/atelier/atelier-faq.tsx` — accessible accordion plus conversion links.
- `components/atelier/atelier-faq.module.css` — FAQ and final contact styling.

### New assets

- `public/images/atelier/hero-daylight.png` — wide pearl-white/silver car in bright architectural studio.
- `public/images/atelier/ppf-craft.png` — close-up of believable PPF application.
- `public/images/atelier/protected-finish.png` — daylight protected-paint detail.
- `public/images/atelier/inspection.png` — paint inspection/preparation editorial crop.

### New tests

- `tests/atelier-page.test.tsx` — route identity, section architecture, Arabic and English copy.
- `tests/atelier-header.test.tsx` — accessible navigation, locale action, mobile menu.
- `tests/atelier-faq.test.tsx` — accordion state and conversion links.

---

### Task 1: Define the New Route Contract with Failing Tests

**Files:**
- Create: `tests/atelier-page.test.tsx`
- Create: `tests/atelier-header.test.tsx`
- Create: `tests/atelier-faq.test.tsx`

**Interfaces:**
- Consumes: `LocaleProvider` from `@/components/locale-toggle`.
- Produces: executable expectations for `AtelierPage`, `AtelierHeader`, and `AtelierFaq`.

- [ ] **Step 1: Write the route test**

Create `tests/atelier-page.test.tsx` with tests that render `AtelierPage` inside `LocaleProvider` and assert:

```tsx
expect(screen.getByRole("main")).toHaveAttribute("data-concept", "daylight-atelier");
expect(screen.getByRole("heading", { level: 1, name: "حماية هادية. حضور يفضل واضح." })).toBeVisible();
for (const id of ["services", "protection", "process", "faq", "contact"]) {
  expect(document.getElementById(id)).not.toBeNull();
}
expect(document.querySelector(".hero-cinematic")).toBeNull();
```

Then switch locale using the visible English control and assert the level-one heading becomes `Quiet protection. Lasting presence.`.

- [ ] **Step 2: Write the header interaction test**

Create `tests/atelier-header.test.tsx`; render `AtelierHeader` inside `LocaleProvider`, then assert the banner exposes `data-variant="atelier"`, desktop navigation contains links to `#services`, `#protection`, `#process`, and `#faq`, the booking link contains `wa.me`, and clicking the Arabic-labelled mobile-menu trigger changes `aria-expanded` from `false` to `true` and exposes the mobile links.

- [ ] **Step 3: Write the FAQ behavior test**

Create `tests/atelier-faq.test.tsx`; render `AtelierFaq` inside `LocaleProvider`, assert all FAQ triggers begin collapsed, click `أبدأ إزاي؟`, and assert its button is expanded and the answer mentioning the car model is visible. Assert links for WhatsApp, `tel:+201100666717`, and the SLS Maps search are present.

- [ ] **Step 4: Verify RED**

Run:

```bash
npm test -- tests/atelier-page.test.tsx tests/atelier-header.test.tsx tests/atelier-faq.test.tsx
```

Expected: FAIL because the `/atelier` route and atelier components do not exist yet.

- [ ] **Step 5: Commit the test contract**

```bash
git add projects/sls-car-protection/tests/atelier-*.test.tsx
git commit -m "test: define daylight atelier experience"
```

---

### Task 2: Generate and Validate the Daylight Image Set

**Files:**
- Create: `public/images/atelier/hero-daylight.png`
- Create: `public/images/atelier/ppf-craft.png`
- Create: `public/images/atelier/protected-finish.png`
- Create: `public/images/atelier/inspection.png`

**Interfaces:**
- Produces: four warm-neutral campaign images with stable filenames consumed by Tasks 3–5.

- [ ] **Step 1: Generate the hero asset**

Generate a 16:10 landscape premium automotive photograph: pearl-white or silver unbranded performance sedan at a three-quarter front angle in a bright architectural detailing studio, natural side light, warm ivory limestone and pale sage-grey accents, realistic paint reflections and tires, clean open space toward the copy side, no people, no text, no logos, no watermark, no dark cinematic garage, no exaggerated CGI bloom.

- [ ] **Step 2: Generate the craft asset**

Generate a 4:3 editorial close-up of skilled hands applying transparent PPF to a silver hood in the same bright workshop, physically plausible film tension and squeegee placement, clean tools, realistic skin and reflections, no faces, text, logos, watermark, floating plastic, or impossible geometry.

- [ ] **Step 3: Generate the finish asset**

Generate a 3:2 macro/editorial photograph of a protected silver body panel in natural daylight, crisp architectural reflections, subtle water beads and realistic clear-coat texture, no logos, text, watermark, neon lighting, or artificial mirror finish.

- [ ] **Step 4: Generate the inspection asset**

Generate a 4:3 editorial photograph of a technician’s gloved hand inspecting a silver body panel under a slim daylight inspection lamp in the same studio, believable workshop tools and finish, no face, text, logos, watermark, or dark background.

- [ ] **Step 5: Inspect and normalize assets**

Open each output, reject visible text/logo artifacts or implausible film/reflection geometry, then place the selected outputs at the exact paths above. Record intrinsic dimensions and keep each final file below 3 MB where image quality permits.

- [ ] **Step 6: Commit the image set**

```bash
git add projects/sls-car-protection/public/images/atelier
git commit -m "feat: add daylight atelier campaign imagery"
```

---

### Task 3: Build the Atelier Header and Editorial Hero

**Files:**
- Create: `components/atelier/atelier-header.tsx`
- Create: `components/atelier/atelier-header.module.css`
- Create: `components/atelier/atelier-hero.tsx`
- Create: `components/atelier/atelier-hero.module.css`

**Interfaces:**
- Consumes: `useLocale` and `LocaleToggle` from `@/components/locale-toggle`; `/images/sls-logo.png`; `/images/atelier/hero-daylight.png`.
- Produces: `AtelierHeader` and `AtelierHero` named exports with no required props.

- [ ] **Step 1: Implement `AtelierHeader`**

Use a client component with a local `isOpen` boolean. Render a semantic `header` with `data-variant="atelier"`, desktop links to the agreed section IDs, the shared locale toggle, WhatsApp CTA, and a mobile menu button whose Arabic labels are `فتح القائمة` and `إغلاق القائمة`. Close the menu when a link is selected and use `aria-expanded` plus `aria-controls`.

- [ ] **Step 2: Style the header**

Create a slim ivory/soft-white header with a hairline bottom border, readable logo treatment, compact type, visible focus rings, and an off-canvas/dropdown mobile panel. Keep buttons at least 44px high. Use a 220–300ms eased open/close transition and disable non-essential movement under reduced motion.

- [ ] **Step 3: Implement `AtelierHero`**

Render `section#home` with the Arabic heading `حماية هادية. حضور يفضل واضح.` and English heading `Quiet protection. Lasting presence.`. Include concise copy, WhatsApp and Maps actions, the daylight hero image with `priority`, and a proof strip containing The View Promenade, PPF, Detailing, and Sheikh Zayed without ratings or guarantees.

- [ ] **Step 4: Style the hero**

Use a wide asymmetric split grid, warm canvas, headline and body outside the image, a restrained image-mask entrance, and a lower proof strip separated by fine rules. At mobile sizes, place copy before image and keep actions full-width or wrap safely.

- [ ] **Step 5: Run focused tests**

```bash
npm test -- tests/atelier-header.test.tsx tests/atelier-page.test.tsx
```

Expected: the header test passes; the page test still fails because route assembly and remaining sections are not implemented.

---

### Task 4: Build Services, Protection Story, and Process

**Files:**
- Create: `components/atelier/atelier-services.tsx`
- Create: `components/atelier/atelier-services.module.css`
- Create: `components/atelier/atelier-protection.tsx`
- Create: `components/atelier/atelier-protection.module.css`
- Create: `components/atelier/atelier-process.tsx`
- Create: `components/atelier/atelier-process.module.css`

**Interfaces:**
- Consumes: `useLocale`; `/images/atelier/ppf-craft.png`, `/images/atelier/protected-finish.png`, and `/images/atelier/inspection.png`.
- Produces: `AtelierServices`, `AtelierProtection`, and `AtelierProcess` named exports with section IDs `services`, `protection`, and `process`.

- [ ] **Step 1: Implement services**

Create three bilingual ruled rows for PPF, Detailing, and Tailored Care. Each row contains a two-digit index, name, one-sentence verified description, and a small lucide icon. Avoid cards that visually repeat the dark route.

- [ ] **Step 2: Implement the protection story**

Pair `ppf-craft.png` with a CSS/SVG three-layer diagram labelled in the active locale: prepared paint, transparent film, finished surface. Add `protected-finish.png` as a secondary editorial crop. Explain preparation and fit without durability figures.

- [ ] **Step 3: Implement process**

Create four bilingual steps: inspect, prepare, install, review and hand over. Use `inspection.png` as a supporting image and maintain semantic ordered reading order.

- [ ] **Step 4: Style all three sections**

Use open ivory/white surfaces, editorial rules, sage accents, restrained bronze indices, and responsive grids. Mobile must become a single-column sequence without horizontal scrolling. Add only soft opacity/transform reveals and a reduced-motion override.

- [ ] **Step 5: Run type checking**

```bash
npm run typecheck
```

Expected: PASS for these isolated components.

---

### Task 5: Build FAQ, Contact, and Route Assembly

**Files:**
- Create: `components/atelier/atelier-faq.tsx`
- Create: `components/atelier/atelier-faq.module.css`
- Create: `app/atelier/page.tsx`
- Create: `app/atelier/page.module.css`

**Interfaces:**
- Consumes: all named atelier component exports from Tasks 3–4 and the shared locale context.
- Produces: default `AtelierPage` route export; `AtelierFaq` named export; complete `/atelier` page.

- [ ] **Step 1: Implement the accessible FAQ**

Use a client component with one nullable open index. Each question is a `button` with `aria-expanded` and `aria-controls`; each answer has a stable ID. Keep closed answer nodes mounted for smooth CSS grid expansion, mark their container inert to interaction while collapsed, and ensure assistive-technology state follows the trigger.

Use these Arabic questions: `أبدأ إزاي؟`, `المكان فين؟`, and `أحجز إزاي؟`. The first answer must tell the visitor to send the car model and a photo. Provide natural English equivalents.

- [ ] **Step 2: Add final conversion actions**

Inside `section#contact`, render WhatsApp, phone, and Maps links. Use `https://wa.me/201100666717`, `tel:+201100666717`, and the existing Google Maps search URL. Keep labels conversational in Arabic and natural in English.

- [ ] **Step 3: Assemble the route**

Create a client page that renders a skip link, `AtelierHeader`, semantic `main` with `data-concept="daylight-atelier"`, all sections in the approved order, and a minimal light footer. Apply the route-level module to cover the dark global body surface for the full document height.

- [ ] **Step 4: Style route and FAQ**

Implement the approved warm-ivory tokens as CSS custom properties scoped to the route shell. Add a two-column desktop FAQ and single-column mobile layout, visible keyboard focus, comfortable 16px minimum text, and a dark-ink final CTA block that is compact rather than a full dark section.

- [ ] **Step 5: Verify GREEN**

```bash
npm test -- tests/atelier-page.test.tsx tests/atelier-header.test.tsx tests/atelier-faq.test.tsx
```

Expected: all three new test files pass.

---

### Task 6: Integration, Visual QA, and Regression Verification

**Files:**
- Modify only if a verified issue requires it: files introduced in Tasks 1–5.

**Interfaces:**
- Consumes: completed `/atelier` route and existing root route.
- Produces: client-ready second prototype without regressions.

- [ ] **Step 1: Run automated verification**

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

Expected: every command exits 0 with no failing tests or build errors.

- [ ] **Step 2: Audit desktop and mobile**

Inspect `/atelier` at 360×800, 390×844, 768×1024, 1440×900, and a wide desktop viewport. Verify no horizontal overflow, clipped Arabic glyphs, hidden navigation, overlapping content, poor image crops, or unreadable muted text.

- [ ] **Step 3: Audit interaction and accessibility**

Test mobile-menu open/close, FAQ animation, locale switching, anchor navigation, keyboard focus, and reduced-motion behavior. Confirm WhatsApp, phone, and Maps URLs.

- [ ] **Step 4: Compare both concepts**

Open `/` and `/atelier` side by side and verify they differ in palette, hero composition, imagery, section hierarchy, service presentation, protection explanation, process layout, FAQ treatment, and motion language.

- [ ] **Step 5: Fix only verified defects and rerun checks**

For every discovered defect, add or update a focused test where practical, observe the failure, implement the smallest correction, and rerun the full verification commands.

- [ ] **Step 6: Commit the integrated route**

```bash
git add projects/sls-car-protection/app/atelier projects/sls-car-protection/components/atelier projects/sls-car-protection/tests/atelier-*.test.tsx projects/sls-car-protection/public/images/atelier
git commit -m "feat: add SLS daylight atelier concept"
```
