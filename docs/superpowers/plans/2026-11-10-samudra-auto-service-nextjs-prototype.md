# Samudra Auto Service Next.js Prototype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a responsive, full business-like Next.js homepage prototype for Samudra Auto Service that presents workshop and home-service offerings and routes enquiries to a safe WhatsApp placeholder.

**Architecture:** A single Next.js App Router page renders focused section components fed by a local typed content module. Interactivity is isolated in a client-side consultation form; the rest remains server-rendered static content. Styling uses Tailwind CSS and inline SVG icons, avoiding UI libraries and backend services.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, Node.js/npm, GitHub CLI, Vercel Git integration.

**Spec:** `docs/superpowers/specs/2026-11-10-samudra-auto-service-website-design.md`

## Global Constraints

- Use `D:/Project/samudra-auto-service/` as the project root.
- Use Next.js with TypeScript and Tailwind CSS; do not add a UI component library.
- UI must contain no emoji; use inline SVG for every functional icon.
- Contact phone/WhatsApp remains literal placeholder `XXXXX`; do not invent a real number.
- Google Maps target remains `https://share.google/29rgZE1OSy1frcsZY`.
- No backend, database, authentication, payment, or actual booking system in this prototype.
- Responsive UI must work at mobile and desktop widths.
- All new project documentation is kept under `docs/`, except `README.md` at root.

## Review Focus

- Small viewport: header navigation must not overflow; navigation links may hide while the contact CTA remains reachable.
- Home-service toggle: selecting it must expose the area field; switching back must hide it.
- Invalid/missing vehicle detail: form feedback must tell the user what is required instead of pretending an enquiry was sent.
- Placeholder contact: every generated WhatsApp URL must retain `XXXXX`; no external action should fake a completed booking.
- External map: the Google Maps link must open in a new tab with secure `rel="noreferrer"`.

---

## File Structure

```text
samudra-auto-service/
├── app/
│   ├── globals.css                   # Tailwind base and project tokens
│   ├── layout.tsx                    # Metadata and base layout
│   └── page.tsx                      # Homepage composition
├── components/
│   ├── icons.tsx                     # Reusable typed inline SVG icons
│   ├── header.tsx                    # Topbar and responsive sticky navigation
│   ├── hero.tsx                      # Value proposition, CTAs, proof points
│   ├── consultation-form.tsx         # Client component for home-service toggle/form feedback
│   ├── services.tsx                  # Service-card collection and home-service banner
│   ├── location.tsx                  # Workshop and Maps CTA
│   └── footer.tsx                    # Footer links and business summary
├── lib/
│   └── content.ts                    # Typed business copy, services, links and placeholders
├── public/
│   └── .gitkeep                      # Public asset location reserved for approved photos
├── README.md                         # Setup/run/deploy entrypoint
├── .env.example                      # Placeholder-only contact configuration
└── docs/
    ├── PRD.md
    ├── ARCHITECTURE.md
    ├── PLAN.md
    ├── PROGRES_SamudraAutoService.md
    └── superpowers/
        ├── specs/2026-11-10-samudra-auto-service-website-design.md
        └── plans/2026-11-10-samudra-auto-service-nextjs-prototype.md
```

### Task 1: Initialize Next.js Foundation and Project Documents

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Create: `README.md`, `.env.example`, `docs/ARCHITECTURE.md`, `docs/PLAN.md`, `docs/PROGRES_SamudraAutoService.md`
- Modify: `.gitignore`

**Interfaces:**
- Produces: working App Router development and production-build commands.
- Produces: root layout that accepts `children: React.ReactNode`.

- [ ] **Step 1: Scaffold an App Router project without an extra UI library**

Run:
```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir false --use-npm --import-alias '@/*' --yes
```
Expected: `package.json`, `app/`, TypeScript, Tailwind, and ESLint configuration exist in project root.

- [ ] **Step 2: Confirm the generated toolchain is available**

Run:
```bash
npm run lint && npm run build
```
Expected: both commands exit `0` before custom code is added.

- [ ] **Step 3: Write project documentation**

Create `docs/ARCHITECTURE.md` documenting static section composition, typed local content, the single client component boundary, and placeholder configuration. Create `docs/PLAN.md` with Waves 0–3. Create `docs/PROGRES_SamudraAutoService.md` with completed foundation and the next Wave.

- [ ] **Step 4: Add safe environment template**

Create `.env.example`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=XXXXX
NEXT_PUBLIC_GOOGLE_MAPS_URL=https://share.google/29rgZE1OSy1frcsZY
```
Expected: no real contact credentials are committed.

- [ ] **Step 5: Commit foundation**

```bash
git add package.json package-lock.json next.config.ts tsconfig.json postcss.config.mjs app .gitignore README.md .env.example docs
git commit -m "chore: initialize Next.js website foundation"
```

### Task 2: Add Typed Business Content and Inline Icon System

**Files:**
- Create: `lib/content.ts`
- Create: `components/icons.tsx`
- Test: `lib/content.test.ts`

**Interfaces:**
- Produces `siteConfig` with `whatsappNumber: string` and `mapsUrl: string`.
- Produces `services: Array<{ id: string; title: string; description: string; points: string[]; icon: IconName }>`.
- Produces `Icon({ name: IconName, className?: string }): React.ReactElement`.

- [ ] **Step 1: Write a content validation test**

Create `lib/content.test.ts`:
```ts
import { siteConfig, services } from './content'

test('keeps the safe contact placeholder and five core services', () => {
  expect(siteConfig.whatsappNumber).toBe('XXXXX')
  expect(services).toHaveLength(5)
  expect(services.every((service) => service.points.length === 3)).toBe(true)
})
```

- [ ] **Step 2: Run the test and verify it fails**

Run:
```bash
npx jest lib/content.test.ts
```
Expected: FAIL because `lib/content.ts` does not exist. If Jest is not part of generated dependencies, use Node's built-in test runner after converting the test to `node:test`; do not add a test framework only for this static data check.

- [ ] **Step 3: Implement minimal typed content**

Create typed literal data containing the approved five services, Maps URL, `XXXXX`, area text, and home-service steps. Derive WhatsApp link with:
```ts
export const whatsappHref = `https://wa.me/62${siteConfig.whatsappNumber}`
```
Keep it an inert placeholder: do not claim it works until a real number replaces it.

- [ ] **Step 4: Implement SVG icon map**

Add icon paths as JSX in `components/icons.tsx`, e.g.:
```tsx
export type IconName = 'car' | 'phone' | 'mapPin' | 'clock' | 'wrench' | 'wheel' | 'oil' | 'transmission' | 'clutch' | 'shield'
export function Icon({ name, className }: { name: IconName; className?: string }) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">{/* selected path */}</svg>
}
```

- [ ] **Step 5: Verify forbidden UI glyphs are absent**

Run:
```bash
grep -rn -P "[\x{1F000}-\x{1FAFF}\x{2600}-\x{27BF}\x{2B00}-\x{2BFF}]" --include="*.tsx" --include="*.ts" app components lib
```
Expected: no matches.

- [ ] **Step 6: Commit content layer**

```bash
git add lib/content.ts lib/content.test.ts components/icons.tsx
git commit -m "feat: add typed service content and SVG icons"
```

### Task 3: Build Header, Hero, and Consultation Form

**Files:**
- Create: `components/header.tsx`
- Create: `components/hero.tsx`
- Create: `components/consultation-form.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- `Header(): React.ReactElement`
- `Hero(): React.ReactElement`
- `ConsultationForm(): React.ReactElement` is a `'use client'` component.

- [ ] **Step 1: Write the failing interaction check**

Create a small browser-independent testable helper in `components/consultation-form.tsx`:
```ts
export function requiresLocation(mode: 'workshop' | 'home'): boolean {
  return mode === 'home'
}
```
Add test:
```ts
import { requiresLocation } from './consultation-form'

test('requires area only for home service', () => {
  expect(requiresLocation('home')).toBe(true)
  expect(requiresLocation('workshop')).toBe(false)
})
```

- [ ] **Step 2: Run the check and verify it fails**

Run:
```bash
npx jest components/consultation-form.test.ts
```
Expected: FAIL until the helper exists.

- [ ] **Step 3: Implement the header and hero sections**

Use semantic `<header>`, `<nav>`, and `<main>` landmarks. Keep desktop links and hide only links on mobile, preserving visible contact CTA. The Maps anchor must use:
```tsx
<a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Petunjuk Arah Google Maps</a>
```

- [ ] **Step 4: Implement a local consultation simulation**

Keep all state in `ConsultationForm`. Require vehicle details before showing feedback; for home mode, require area too. Render status in `aria-live="polite"`. The submit action must say that the prototype will connect to WhatsApp after the official contact number is installed; it must not report a real booking success.

- [ ] **Step 5: Verify lint and build**

Run:
```bash
npm run lint && npm run build
```
Expected: exit `0`.

- [ ] **Step 6: Commit customer entry flow**

```bash
git add app/page.tsx components/header.tsx components/hero.tsx components/consultation-form.tsx components/consultation-form.test.ts
git commit -m "feat: add consultation entry flow"
```

### Task 4: Build Services, Home Service, Location, and Footer

**Files:**
- Create: `components/services.tsx`
- Create: `components/location.tsx`
- Create: `components/footer.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- `Services(): React.ReactElement` consumes `services` from `lib/content.ts`.
- `Location(): React.ReactElement` consumes `siteConfig.mapsUrl`.
- `Footer(): React.ReactElement` consumes site configuration and navigation ids.

- [ ] **Step 1: Build service cards from typed content**

Map the service list instead of duplicating card JSX:
```tsx
{services.map((service) => (
  <article key={service.id}>
    <Icon name={service.icon} />
    <h3>{service.title}</h3>
    <p>{service.description}</p>
    <ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul>
  </article>
))}
```
Add the separate transparency/commitment card as static copy.

- [ ] **Step 2: Build the three-step home-service section**

Use an ordered list for the sequence: send location/complaint, technician arrival, inspection/service. Include CTA but retain `XXXXX` placeholder.

- [ ] **Step 3: Build verified location section**

Include only verified facts: Pekanbaru, Maps listing, and link. Mark street address/hours as pending confirmation in a subtle presentational note rather than inventing details.

- [ ] **Step 4: Build footer and complete composition**

Add footer section links that correspond to valid section IDs. Compose all sections in `app/page.tsx` in the approved order.

- [ ] **Step 5: Run static and production verification**

Run:
```bash
npm run lint && npm run build
grep -rn -P "[\x{1F000}-\x{1FAFF}\x{2600}-\x{27BF}\x{2B00}-\x{2BFF}]" --include="*.tsx" --include="*.ts" app components lib
```
Expected: lint/build succeed and the glyph scan returns no matches.

- [ ] **Step 6: Commit homepage sections**

```bash
git add app/page.tsx components/services.tsx components/location.tsx components/footer.tsx
git commit -m "feat: add services location and home service sections"
```

### Task 5: Apply Responsive Visual System and Verify in Browser

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Test: local browser visual check at desktop and mobile viewports

**Interfaces:**
- Produces a responsive visual language built from CSS custom properties and Tailwind utility usage.

- [ ] **Step 1: Add metadata**

Set `metadata` in `app/layout.tsx`:
```ts
export const metadata = {
  title: 'Samudra Auto Service | Bengkel & Home Service Pekanbaru',
  description: 'Bengkel mobil fisik dan home service di Pekanbaru untuk service berkala, kaki-kaki, ganti oli, transmisi matic, dan kopling.',
}
```

- [ ] **Step 2: Establish visual tokens and accessibility foundations**

Use navy `#0f1c24`, steel `#2e4453`, soft background `#f5f7f9`, orange CTA `#e45b34`, white, and defined focus-visible styling. Respect `prefers-reduced-motion` and keep transitions limited to color/transform.

- [ ] **Step 3: Run local server and inspect desktop/mobile**

Run:
```bash
npm run dev
```
Verify at 1440px and 390px widths:
- hero content remains readable;
- service cards flow into one column on mobile;
- header CTA is reachable;
- consultation form shows/hides location field correctly;
- map link opens the configured Maps destination.

- [ ] **Step 4: Run final local build**

Run:
```bash
npm run lint && npm run build
```
Expected: both exit `0`.

- [ ] **Step 5: Commit visual finish**

```bash
git add app/globals.css app/layout.tsx
git commit -m "style: finish responsive trusted workshop design"
```

### Task 6: Initialize GitHub Repository and Publish Through Vercel

**Files:**
- Modify: `.gitignore`, `README.md`, `docs/PROGRES_SamudraAutoService.md`

**Interfaces:**
- Produces GitHub remote `https://github.com/kukuhalif19/samudra-auto-service.git`.
- Produces Vercel deployment URL emitted by the connected Git integration.

- [ ] **Step 1: Verify GitHub identity and clean status**

Run:
```bash
gh auth status
git status --short
```
Expected: account `kukuhalif19` is active and there are no uncommitted required source files before publish.

- [ ] **Step 2: Initialize Git and create GitHub repository**

Run:
```bash
git init -b main
git add .
git commit -m "feat: launch Samudra Auto Service prototype"
gh repo create samudra-auto-service --public --source . --remote origin --push
```
Expected: remote `origin` is created and `main` is pushed. If repository already exists, use `git remote add origin https://github.com/kukuhalif19/samudra-auto-service.git && git push -u origin main` instead.

- [ ] **Step 3: Verify remote state**

Run:
```bash
git remote -v
git log -1 --oneline
gh repo view kukuhalif19/samudra-auto-service --json url,defaultBranchRef
```
Expected: remote, latest commit, and repository URL match the new project.

- [ ] **Step 4: Verify Vercel deployment**

Open Vercel dashboard or use Vercel CLI only if present/authenticated. Confirm the Git-connected production deployment status and read the deployed URL. Do not claim deployment from a Git push alone.

- [ ] **Step 5: Check the live URL**

Run:
```bash
curl -I https://<vercel-deployment-url>
```
Expected: HTTP success response and site content title can be read.

- [ ] **Step 6: Update project status**

Patch `docs/PROGRES_SamudraAutoService.md` with repository URL, Vercel URL, exact build result, missing client data, and next action: replace placeholders and provide original workshop photos.

- [ ] **Step 7: Commit status documentation**

```bash
git add README.md docs/PROGRES_SamudraAutoService.md .gitignore
git commit -m "docs: record prototype deployment status"
git push
```
