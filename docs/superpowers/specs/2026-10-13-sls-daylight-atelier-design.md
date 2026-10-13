# SLS Daylight Atelier — Design Specification

## Objective

Create a second, client-ready SLS Car Paint Protection Film website concept at `/atelier` inside the existing Next.js project. It must feel unmistakably different from the dark cinematic root route while preserving the same verified business information and bilingual Arabic/English experience.

The concept is called **Daylight Atelier**: a bright, craft-led automotive service experience that communicates precision through natural light, generous editorial composition, and restrained motion.

## Success Criteria

- `/` remains visually and functionally unchanged.
- `/atelier` uses an independent light visual system, page structure, imagery, component set, and motion language.
- Arabic is the default language and English is available through the existing locale context.
- The page works without horizontal overflow from 360px mobile through wide desktop layouts.
- Text, controls, focus states, and image overlays meet comfortable reading and accessibility expectations.
- Motion respects `prefers-reduced-motion` and never blocks content or navigation.
- WhatsApp, phone, and Google Maps actions use the verified details already present in the project.
- No unverified ratings, guarantees, product brands, prices, or performance claims are introduced.

## Route and Isolation

- New route: `/atelier`.
- New page entry: `app/atelier/page.tsx`.
- Route-specific components live in `components/atelier/`.
- Route-specific styles use CSS Modules. The existing dark route and `app/globals.css` should not be restyled for this work.
- New imagery lives in `public/images/atelier/` and must not reuse the current dark garage assets as primary visuals.
- The shared `LocaleProvider` and `SmoothScroll` from the root layout remain in use.

## Visual Direction

### Palette

- Canvas: warm ivory `#F7F4ED`.
- Elevated surface: soft white `#FFFDF8`.
- Primary ink: `#242724`.
- Secondary ink: `#62655F`.
- Muted bronze: `#86654A`.
- Pale sage: `#DCE3DC`.
- Hairline border: `#D8D4CB`.
- Dark CTA: `#252925` with ivory text.

Bronze is used as a precise accent, not as a large background. The page should remain bright and calm rather than becoming beige or sepia.

### Typography

- Arabic UI and display: IBM Plex Sans Arabic.
- Latin UI and display: Manrope.
- Headings use controlled weight contrast and open line-height; they must not use the oversized, tightly stacked treatment from the dark route.
- Minimum body size is 16px on mobile and 17–18px on desktop.
- Arabic headings receive enough line-height and padding to prevent dots, descenders, and diacritics from clipping.

### Composition

- Asymmetric editorial grid with broad margins and thin rules.
- Hero copy and image sit beside each other instead of overlaying one another.
- Sections alternate between open text layouts, ruled service rows, image-led editorial panels, and a light process grid.
- Corners are lightly rounded rather than pill-heavy.
- No dark full-screen sections, glowing 3D stages, oversized overlapping Arabic display type, or black glass navigation.

## Image Art Direction

The new image set should look like a premium daylight automotive campaign, not generic AI concept art.

Required subjects:

1. **Hero:** a pearl-white or silver premium car in a bright architectural detailing studio, photographed at a three-quarter angle with natural side light and believable reflections.
2. **Craft:** close-up of hands applying transparent PPF to a body panel in a clean bright workshop; tools and film tension should look plausible.
3. **Finish:** close-up of protected paint in daylight with clean reflections and realistic surface detail.
4. **Process/support:** one additional crop showing inspection or careful preparation, suitable for small editorial cards.

All images must share the same warm-neutral color grade, believable lens behavior, and workshop architecture. Avoid fantasy garages, impossible reflections, floating film, fake text, visible third-party logos, and excessive CGI gloss. Composition must leave intentional negative space for the page layout.

## Page Architecture

### 1. Header and Hero

- Slim, light header integrated with the page rather than a floating dark island.
- SLS identity at the start edge, compact section navigation, locale switch, and one clear booking CTA.
- Mobile header uses an accessible menu with smooth open/close motion and body-safe positioning.
- Hero has offset editorial copy on one side and a large daylight vehicle image on the other.
- Copy focuses on protecting the car’s finish through careful preparation and installation.
- Primary action: WhatsApp assessment. Secondary action: view location.
- A quiet proof strip below the hero identifies the location and core services without inventing metrics.

### 2. Services and Trust

- Introductory statement followed by three generous ruled rows: Paint Protection Film, Detailing, and Tailored Care.
- Each row includes a number, concise description, and small visual or line icon.
- Rows reveal gently as they enter the viewport; hover feedback is subtle and optional on pointer devices.

### 3. Protection Story

- Replace the dark route’s before/after scroll wipe with a clear material story.
- Pair a bright application photograph with a three-stage explanation: prepared paint, transparent protection layer, finished surface.
- Use a simple CSS/SVG layer illustration and short captions rather than simulated scientific measurements.
- The section must explain that preparation and fit determine finish quality without making unsupported durability claims.

### 4. Process

- Four steps: inspect, prepare, install, review and hand over.
- Open editorial grid with numbered cards, thin connector rules, and one or two supporting image crops.
- On mobile the steps become a single vertical sequence with clear reading order.

### 5. FAQ and Contact

- FAQ uses a light two-column layout with a compact introduction and accessible accordion.
- Questions cover how to start, where SLS is located, and how to book.
- Accordion animation uses opacity and grid-row/transform techniques with a reduced-motion fallback; open content remains available to assistive technology.
- Final contact block is visually warm and direct, with WhatsApp, phone, and Maps actions.

## Content and Localization

- Arabic is conversational Egyptian Arabic, concise, and professional.
- English is natural marketing copy, not a literal word-for-word translation.
- Direction follows the selected locale at the document level through the existing locale provider.
- Visual order and alignment must remain intentional in both RTL and LTR layouts.
- Service names may retain familiar English terms such as PPF where that improves recognition.

## Motion Language

- Lenis remains the smooth-scroll engine already provided by the shared layout.
- Motion is based on soft reveals, image masks, and small vertical or horizontal offsets.
- Use transform and opacity only for animated effects where practical.
- UI transitions target 180–300ms; larger section reveals stay under roughly 650ms.
- Animate at most one or two primary elements per viewport.
- No continuous decorative loops, heavy parallax, pinned sections, cursor effects, or scroll-jacking.
- `prefers-reduced-motion: reduce` disables non-essential transitions and reveals content immediately.

## Component Boundaries

- `app/atelier/page.tsx`: route assembly and localized page copy.
- `components/atelier/atelier-header.tsx`: desktop/mobile navigation and locale controls.
- `components/atelier/atelier-hero.tsx`: hero composition and primary actions.
- `components/atelier/atelier-services.tsx`: trust introduction and service rows.
- `components/atelier/atelier-protection.tsx`: PPF material story and layer illustration.
- `components/atelier/atelier-process.tsx`: four-step service process.
- `components/atelier/atelier-faq.tsx`: accessible accordion and final contact actions.
- Each component owns a matching CSS Module or a deliberately shared route module with non-overlapping class contracts.

## Responsive Behavior

- Desktop: asymmetric 12-column editorial grid with generous whitespace.
- Tablet: simplified two-column layouts with reduced gaps and image heights.
- Mobile: single-column reading order, full-width actions, compact navigation, and cropped images that preserve the subject.
- No section depends on hover, pointer position, or a desktop-only scroll distance.
- Touch targets are at least 44px high.

## Accessibility and Performance

- Semantic landmarks, one page-level `h1`, ordered heading hierarchy, and descriptive image alt text.
- Visible keyboard focus on links, buttons, menu controls, and accordion controls.
- Minimum 4.5:1 contrast for body text and action labels.
- All images use `next/image`, explicit sizing, responsive `sizes`, and sensible priority only for the hero.
- No new animation dependency is required; React and CSS are sufficient alongside existing Lenis.
- The page must remain usable with JavaScript-delayed images and reduced motion.

## Verification

- Component tests for route sections, locale copy, header menu, and FAQ behavior.
- Run `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build`.
- Visual QA at 360×800, 390×844, 768×1024, 1440×900, and a wide desktop viewport.
- Test Arabic and English at mobile and desktop sizes.
- Verify keyboard navigation, focus visibility, reduced motion, anchor links, WhatsApp, phone, and Maps links.
- Compare `/` and `/atelier` side by side to confirm different imagery, composition, palette, hierarchy, and interaction language.

## Explicit Non-Goals

- Replacing or redesigning the current dark root route.
- Adding a CMS, booking backend, pricing system, or lead form.
- Publishing or pushing the new route during this implementation phase.
- Making medical, legal, warranty, longevity, or product-brand claims not supported by the collected business data.
