# Jonathan Bridges — Tabernacle Contribution Highlights

> Resume reference document derived from git history (`Jonathan Bridges` / `jbridges-olioapps`).
> Generated: June 2026 · Source: ~1,345 commits across all branches (May 2025 – June 2026)

---

## At a Glance

| Metric               | Value                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------- |
| **Tenure on repo**   | May 8, 2025 → present                                                                    |
| **Total commits**    | ~1,345                                                                                   |
| **Lines changed**    | ~294k added / ~118k deleted                                                              |
| **Primary surfaces** | Backend, web frontend, DevOps/CI, Bible platform, mobile (2026)                          |
| **Repo role**        | Founding engineer — initialized the monorepo and built most core platform infrastructure |

**Product context:** Tabernacle is a faith-community platform for organizing Bible-study groups, scheduling recurring sessions, assigning scripture readings, running live presentation mode, streaming Bible Project videos, and managing RSVPs/notifications — deployed on **Google Cloud** (Cloud Run, Cloud SQL, GCS, Cloud CDN, Terraform).

---

## Resume-Ready Summary Bullets

_Copy/paste and trim as needed. Each bullet follows: action + what + how/impact._

### Founding / Platform Architecture

- **Architected and bootstrapped** a pnpm monorepo (`apps/web`, `apps/backend`, `packages/types`, `packages/messages`) with Next.js 15+ and Express.js, establishing shared TypeScript types, API response conventions, and entity-based backend structure from day one
- **Designed the backend entity pattern** (controller / model / routes / migrations per domain) and built foundational services: auth, organizations, groups, memberships, invitations, and join-request workflows
- **Established shared API contracts** — discriminated `ApiResponse<T>` types, TanStack Query pagination helpers, Zod validation, and react-hook-form patterns used across web and mobile

### Authentication & User Management

- Built **JWT auth backend** (middleware, refresh-token flow, registration) and integrated **NextAuth.js** on the frontend
- Implemented OTP/email verification flows, case-insensitive email handling, and contact-change APIs
- Added **super-admin** role model, org/group membership abstractions (`MembershipService`, `InvitationService`, `ListableEntityService`, `UpdateableEntityService`)

### Bible Reading & Assignment Engine

- **Authored the Bible reading assignment algorithm** — agenda generation, scripture rebalancing across sessions, psalm bookend logic, custom starting points, and reading-time estimation endpoints
- Built **USX scripture rendering pipeline** — USX 2.0/3.0 JSON endpoints, verse-level share links, synchronized audio verse highlighting, table-of-contents navigation, font scaling, and dark-mode styling
- Implemented **audio playback queue system** (backend + frontend) with verse-seek, auto-advance, fade transitions, and presentation-mode integration
- Added **Bible timing data schema** and API endpoints for chapter/verse audio sync

### Sessions, Schedules & Live Presentation

- Built end-to-end **session and schedule lifecycle** — creation, editing, cancellation cascade, timezone-aware calendars (FullCalendar), 30-minute session support, buffer-time configuration
- Delivered **session presentation mode** — slides, PDF viewer, video/YouTube embeds, agenda dropdown, QR-code join slides, language-matched slide rendering
- Implemented **inline agenda editing** — drag-and-drop reorder, add/delete/validate agenda items, selectable Bible Project videos, duration controls, animated edit mode (Framer Motion)
- Built **RSVP system** — member/admin RSVP flows, attendance modals, session reminder targeting (skip users who RSVP'd "no")

### Video Streaming (HLS)

- **Designed and shipped HLS video pipeline on GCP** — Terraform `video_pipeline` module (GCS buckets, Transcoder API job templates, Cloud CDN backend bucket, signed URL keys, IAM)
- Built **CDN signing service** and updated video controller to return signed HLS manifest URLs; migrated from react-player to a **custom HLS video player** (hls.js)
- Rolled out multi-language Bible Project video catalogs (English, Spanish, Korean, Mandarin) with poster images and transcoding scripts

### Notifications & Cron Jobs

- Built the **notification system** — email (SendGrid templates), SMS (Twilio Programmable Messaging), group bulk SMS endpoint
- Wired **Cloud Scheduler → Cloud Run → API cron endpoints** with OIDC authentication (replacing OAuth); session reminder jobs, email opt-in preferences, unsubscribe flows, notification preferences page
- Streamlined email templates (OTP, join requests, reschedule, session reminders) and join-request management emails

### Cloud Infrastructure & DevOps

- Extended GCP Terraform for video CDN, cron OIDC, load-balancer country-header locale detection, and production DB retention tuning
- **Optimized CI/CD pipeline** — Docker Bake multi-stage builds, parallelized GitHub Actions, path-based differential CI, Playwright/Chromium caching, Storybook test sharding, Vitest migration
- Added **Husky hooks** (pre-push branch naming, auto-format), Linear release-notes integration on production deploy, iOS TestFlight GitHub Actions workflow (EAS)
- Migrated monorepo to **pnpm v11**, upgraded **Next.js 16 + Turbopack**, **Expo 56**, supply-chain security policies, and Sentry error monitoring

### Internationalization

- Integrated **next-intl** with locale routing, automatic locale detection, and Lokalise CI workflows (push/pull automation, Slack notifications, PR generation)
- Enabled multi-language support (English, Spanish, Korean, Mandarin) across UI, slides, Bible translations, and static resources

### Frontend / Design System

- Introduced **Atomic Design component architecture** and Storybook component library (DaisyUI + Tailwind CSS)
- Built reusable primitives: `Button`, `PhoneInput`, `TabSwitcher`, `SelectDropdown`, `ActionMenu`, `ScheduleBooksSelector`, `ConfirmationModal`, entity action buttons
- Delivered major UX flows: org/group creation, schedule wizard (multi-step), group landing pages, settings pages, Bible reader, session edit sidebar

### Performance & Reliability

- Eliminated N+1 queries on group landing pages and session cards; consolidated API fan-out; added session caching and preconnect hints
- Optimized session reminder batch lookups (`findBySessionIds` + Set-based dedup), GCP auth overhead reduction, Next.js Image sizing/TTL tuning
- Fixed numerous Safari-specific rendering bugs (ToC, scrollbars, font artifacts, queue dropdowns)

### Mobile (2026)

- Polished **mobile login/registration and OTP screens** to match web design system
- Built **mobile CI pipeline** — differential linting, Android build verification, path-filter gates
- Shipped **iOS TestFlight automation** via GitHub Actions + EAS; upgraded Expo 56 with custom audio module patches
- Contributed to **mobile Bible page** — USX 2.0 rendering, audio Context API, book/chapter navigation

---

## Contribution Areas (Detailed)

### 1. Monorepo & Project Genesis (May 2025)

Jonathan created the repository and laid the foundation:

- `Initial commit` / `Initial monorepo setup with Next.js and Express` (May 8, 2025)
- Moved backend from packages to `apps/backend`; configured ESLint, Jest, Knex/PostgreSQL
- Set up `packages/types` and `packages/messages` shared packages
- Added first GitHub Actions lint workflow; wired shared package builds into Docker

**Technologies:** pnpm workspaces, TypeScript, Express, Next.js App Router, Knex.js, PostgreSQL, Jest

---

### 2. Authentication & Authorization (May–June 2025)

- Backend auth endpoints, JWT middleware, error middleware, refresh-token flow
- NextAuth integration, registration/verify/sign-in page flows
- react-hook-form + Zod validation with translated error messages
- Organization roles, super-user column, membership status queries
- Security hardening on `/me` endpoints; email case insensitivity

**Resume angle:** _Implemented full-stack auth (JWT + NextAuth) with OTP verification, role-based access, and localized form validation._

---

### 3. Organizations, Groups & Membership (May–July 2025)

- Organization CRUD, slug routing, pagination, infinite-query member lists
- Group schema, controller, routes, invite/join-request APIs
- Abstract membership services shared between orgs and groups
- Org approval workflows, private groups, group hero images
- GCS presigned URL image upload service (shared across org/group avatars)
- QR-code join flow, sessionless QR codes, group public landing pages

**Resume angle:** _Built multi-tenant org/group membership system with invitation workflows, approval gates, and GCS-backed image uploads._

---

### 4. Schedules, Sessions & Agenda Engine (July 2025 – ongoing)

Core domain logic Jonathan owns:

| Feature                              | Description                                                                                                      |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Schedule creation wizard**         | Multi-step UI, book selection, custom starting points, end-date support, timezone per group                      |
| **Session generator**                | Generates sessions from schedule goals with actual agenda items                                                  |
| **Bible reading assignment service** | Algorithm distributing OT/NT/psalm readings across sessions; rebalancing on edits; reading projection/estimation |
| **Agenda cascade**                   | Moving agenda forward on session cancel/uncancel                                                                 |
| **Session editing**                  | Inline agenda CRUD, drag-and-drop, BPV timing insertion, 30-min sessions, buffer time                            |
| **Presentation mode**                | Full-screen slides, queue playback, verse handlers, PDF/video resources                                          |
| **Reading progress**                 | Backend + frontend for individual/group reading goal tracking                                                    |

Key commits:

- `Update Agenda schema, Add Agenda model, Add Agenda migration, Add bible reading assignmint service`
- `Refactor bible reading assignment algorithm`
- `Fix issue wherein rebalancing pass in bible assignment service created multiple readings for same book`
- `Add reading estimation endpoint` / `Update calculateReadingProjections w special sauce`

**Resume angle:** _Designed scripture assignment algorithm that balances Old/New Testament and Psalm readings across recurring group sessions, with rebalancing, estimation, and live presentation sync._

---

### 5. Bible Platform & USX Rendering (Aug 2025 – ongoing)

Major surface area (~90+ commits):

- USX text parsing service (`GET text` HTML/JSON endpoints, caching)
- USX 3.0 styling system, verse click-to-share, bible page history cookies
- Synchronized audio: verse highlight on `timeupdate`, seek-to-verse, dynamic dark-mode highlight colors
- Audio queue: backend API, dropdown UI, presentation-mode read-only queue, auto-advance/pause-at-end
- Table of contents, font scaling utility, edge-to-edge scripture layout, glyph-based stable fonts
- Mobile Bible page (USX 2.0, audio player Context API, chapter navigation)

**Resume angle:** _Built interactive Bible reader with USX 3.0 rendering, verse-synced audio playback, and queued scripture presentation for live group sessions._

---

### 6. HLS Video Streaming Pipeline (Oct–Nov 2025)

End-to-end ownership of self-hosted Bible Project video delivery:

```
Upload → GCS → Transcoder API → HLS segments → Cloud CDN (signed URLs) → Custom player
```

Deliverables:

- Terraform `packages/infra/modules/video_pipeline/` module
- CDN signing service + `ReadingVideoController` manifest URL changes
- Database migration for HLS paths on video records
- Custom video player replacing react-player; YouTube fallback support
- Transcoding scripts for ES/KO/ZH video catalogs
- BPV poster images and selectable BPV toggles in schedule/session editing

**Resume angle:** _Architected GCP HLS streaming pipeline (Terraform, Transcoder API, Cloud CDN signed URLs) and custom web video player for multi-language Bible Project content._

---

### 7. Notifications, Email & SMS (July–Oct 2025)

- `Add notification system` — core notification infrastructure
- Twilio SMS integration, group bulk messaging endpoint
- SendGrid email templates (OTP, join, reschedule, reminders); template repo consolidation
- Session reminder cron: 24-hour reminders, RSVP-aware filtering, email opt-in at registration
- Notification preferences page + unsubscribe backend
- Cloud Scheduler cron architecture with OIDC-secured Cloud Run endpoints

**Resume angle:** _Implemented notification platform (SendGrid + Twilio) with Cloud Scheduler cron jobs, OIDC-secured endpoints, and user preference management._

---

### 8. DevOps, CI/CD & Infrastructure (ongoing)

Jonathan's infra contributions (building on initial Terraform by Hank Dorsey):

| Area               | Contributions                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| **Terraform**      | `video_pipeline` module, CDN IAM, cron OIDC, locale header on load balancer, DB retention                                |
| **Docker**         | Shared package build stages, Docker Bake, removed duplicate Next.js builds, pnpm v11 compat                              |
| **GitHub Actions** | Differential CI (path filters), parallel jobs, Playwright cache, SB sharding, mobile Android builds, TestFlight workflow |
| **Developer UX**   | Husky pre-push (branch naming, auto-prettier), Linear release integration, lint-staged                                   |
| **Upgrades**       | Next.js 16 + Turbopack, Expo 56, Storybook 10, Vitest migration, pnpm supply-chain policies                              |
| **Monitoring**     | Sentry integration, web vitals, user tracking                                                                            |

**Resume angle:** _Optimized monorepo CI/CD (Docker Bake, differential GitHub Actions, Storybook sharding) and extended GCP Terraform for video CDN and secured cron endpoints._

---

### 9. Internationalization (June 2025 – ongoing)

- next-intl setup with locale routing and auth redirects
- Lokalise GitHub Actions automation (push on EN changes, pull + PR for ES/KO/etc.)
- Language enum across locale/Bible translation metadata
- Slide language overrides matching session agenda translation
- Static resource backfill for all languages
- PhoneInput country detection via GCP load balancer geo header

---

### 10. UI/UX & Design System (June 2025 – ongoing)

- `Atomic redesign and add Storybook` — established component hierarchy still used today
- DaisyUI theme system, Tailwind HMR, global CSS tokens
- Major page builds: org landing, group landing, create group/schedule wizards, session page, settings, Bible page, auth screens
- Framer Motion animations (agenda edit, schedule forms)
- Accessibility plugin, aria translations, keyboard nav fixes
- Mobile auth screen polish (2026)

---

## Chronological Timeline

| Period           | Focus                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **May 2025**     | Repo init, auth, orgs, DB/Knex setup, NextAuth, i18n foundation                                                          |
| **Jun 2025**     | Groups/memberships, Lokalise CI, Atomic Design + Storybook, join/approval flows                                          |
| **Jul 2025**     | Schedules/sessions/agenda algorithm, Bible timings, SMS/notifications, timezone refactor, file uploads, session calendar |
| **Aug 2025**     | Session presentation mode, Bible page v1, queue system, reading progress, maps API, USX parsing                          |
| **Sep 2025**     | Agenda editing, session edit sidebar, verse handlers, performance (N+1 fixes), Sentry                                    |
| **Oct 2025**     | HLS video pipeline (Terraform + backend + player), QR join onboarding, selectable BPVs, email templates                  |
| **Nov 2025**     | Multi-language HLS transcoding, performance optimizations, notification prefs, contact change                            |
| **Dec 2025**     | USX 3.0, locale detection, Docker/CI optimization, pnpm v11, Vitest SB, Linear integration                               |
| **Jan–Feb 2026** | QR invite flow refactor, mobile Bible page, group creation mobile UX, sessionless QR codes                               |
| **Mar–Jun 2026** | Mobile CI, TestFlight GHA, auth screen polish, Expo 56 upgrade, Next.js 16, mobile devtools                              |

---

## Technical Skills Demonstrated

### Languages & Frameworks

TypeScript, JavaScript, SQL · React 19, Next.js 15/16, Express.js, React Native/Expo 56 · Node.js

### Data & API

PostgreSQL, Knex.js migrations · REST API design · Zod schemas · TanStack Query · JWT / NextAuth

### Cloud & Infrastructure

Google Cloud Platform (Cloud Run, Cloud SQL, GCS, Cloud CDN, Cloud Scheduler, Transcoder API, Secret Manager, Load Balancer, Cloud Armor) · Terraform · Docker / Docker Bake · GitHub Actions

### Integrations

SendGrid · Twilio · Lokalise · Sentry · Google Maps API · hls.js

### Frontend Tooling

Tailwind CSS, DaisyUI, Storybook, Framer Motion, FullCalendar, react-hook-form, lucide-react, Vitest, Playwright, Jest

### Architecture Patterns

pnpm monorepo · Entity-based backend · Atomic Design · Shared types package · OIDC service auth · Signed CDN URLs · Cron-as-HTTP-endpoint

---

## Impact Themes (for cover letters / interviews)

1. **Zero-to-one platform builder** — Took Tabernacle from empty repo to production GCP deployment with auth, scheduling, Bible rendering, video streaming, and notifications.

2. **Domain-specific algorithm work** — The Bible reading assignment engine is non-trivial scheduling logic (testament balance, psalm bookends, rebalancing, time estimation) — rare full-stack + algorithm hybrid.

3. **Media pipeline ownership** — Full HLS stack from Terraform through transcoding scripts to custom frontend player, multi-language rollout.

4. **DevOps multiplier** — CI/CD optimizations (Docker Bake, differential CI, caching) that benefit the whole team, not just personal features.

5. **Presentation-mode product** — Live session experience (slides, queue, verse sync, QR join) is a differentiated real-time group Bible study feature.

---

## Scope Notes (collaboration context)

For accurate resume framing — work Jonathan **started or led**, vs. **contributed to**:

| Area                                                         | Jonathan's role        | Others involved                                  |
| ------------------------------------------------------------ | ---------------------- | ------------------------------------------------ |
| Monorepo init, auth, orgs, groups, sessions, Bible algorithm | **Primary author**     | —                                                |
| Initial Docker compose                                       | Contributed            | Philip Brocoum (initial Dockerfile)              |
| Initial Terraform / ci.yml                                   | Extended significantly | Hank Dorsey (initial provisioning)               |
| Mobile app scaffold                                          | CI + auth + Bible page | Philip Brocoum (Expo app creation, SwiftUI port) |
| Cloud Armor / MCP read-only DB                               | —                      | Hank Dorsey                                      |
| Shared data hooks package                                    | Some types/integration | Team                                             |

---

## Selected Notable PRs / Tickets

| Ticket / PR theme     | What it shipped                            |
| --------------------- | ------------------------------------------ |
| TAB-1162 / TAB-1163   | HLS Terraform module + backend CDN signing |
| TAB-1164 / TAB-1165   | Custom HLS video player                    |
| TAB-1334–1336         | ES/KO/ZH video transcoding                 |
| TAB-1048 / TAB-1349   | QR code join + sessionless QR              |
| TAB-992               | Agenda inline editing refactor             |
| TAB-605 / TAB-815–817 | Session editing + agenda CRUD              |
| TAB-883               | Mobile Bible page                          |
| TAB-1014              | Email unsubscribe / notification prefs     |
| TAB-1404              | Docker/CI optimization                     |
| TAB-1508 / TAB-1517   | Mobile CI + iOS TestFlight GHA             |
| TAB-1516 / TAB-1499   | Mobile auth screen polish                  |
| TAB-1337              | USX 3.0 JSON + UI overhaul                 |
| cron-oidc             | Cloud Scheduler OIDC auth                  |
| notifications         | Core notification system                   |

---

## Suggested Resume Position Entry (Template)

**Senior Software Engineer / Founding Engineer — Tabernacle (Grace & Mercy)**  
_May 2025 – Present_

- Founded and architected a TypeScript monorepo (Next.js + Express + PostgreSQL) for a multi-tenant Bible study group platform deployed on Google Cloud
- Designed scripture reading assignment algorithm and session agenda engine powering recurring group schedules with OT/NT/psalm balancing and live presentation mode
- Built HLS video streaming pipeline on GCP (Terraform, Transcoder API, Cloud CDN, signed URLs) with custom web player; rolled out multi-language Bible Project catalogs
- Implemented notification platform (SendGrid, Twilio, Cloud Scheduler cron with OIDC) and full auth stack (JWT, NextAuth, OTP)
- Delivered interactive Bible reader with USX 3.0 rendering, verse-synced audio, and queued playback for live sessions
- Optimized CI/CD (Docker Bake, differential GitHub Actions, Storybook sharding) and established Atomic Design component system with Storybook

---

## Keyword Bank (for ATS / LinkedIn)

`TypeScript` · `React` · `Next.js` · `Node.js` · `Express.js` · `PostgreSQL` · `Knex.js` · `Terraform` · `Google Cloud Platform` · `Cloud Run` · `Cloud CDN` · `HLS` · `Docker` · `GitHub Actions` · `pnpm monorepo` · `REST API` · `JWT` · `NextAuth` · `TanStack Query` · `Zod` · `Storybook` · `Tailwind CSS` · `React Native` · `Expo` · `SendGrid` · `Twilio` · `i18n` · `Algorithm Design` · `Video Streaming` · `CI/CD` · `System Design`

---

_This document is a best-effort synthesis of commit messages and file history. For exact attribution on any specific line of code, refer to `git blame` or PR history._
