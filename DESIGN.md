# Design System & Aesthetic Blueprint: Centro Multisensorial RD

> **Purpose:** This document is the single source of truth for AI agents (Antigravity, Cursor, Stitch, Claude, Codex) generating or modifying web pages and interfaces for **Centro Multisensorial RD**. It encodes the complete visual atmosphere, color tokens, typography rules, component behaviors, responsive principles, and strict anti-patterns.

---

## 1. Visual Atmosphere & Aesthetic Philosophy

### The Identity: "Playful Clinical Neo-Brutalism"
Centro Multisensorial RD is the premier pediatric neurodevelopment and Tomatis® Level 4 clinical center in the Dominican Republic. Its design style is **warm, vibrant, tactile, and retro-modern**, completely breaking away from sterile hospital templates and generic AI SaaS minimalism.

* **Density:** `4 / 10` — Generous, breathable layout with ample section breathing room and clear visual landmarks.
* **Variance:** `8 / 10` — Highly rhythmic and asymmetric. Strict ban on cloned card grids. Combines editorial storytelling, tactile sticker badges, and real human photography.
* **Motion:** `6 / 10` — Snappy spring physics (`stiffness: 300, damping: 15`), tactile push-down button feedback, continuous marquee ribbons, and sound toggles.

### Core Visual Pillars
1. **Hard Offset Shadows & Bold Borders:** Every primary UI component features a thick `2.5px` to `4px` solid border (`#2347EF` or `#16255C`) paired with a sharp, non-blurred offset drop shadow (`4px 4px 0px` to `8px 8px 0px`). Blurry modern drop shadows are strictly forbidden.
2. **Tactile Stationery & Paper Grid Textures:** The canvas is grounded by warm cream surfaces (`#FAF9DC`) overlaid with subtle mathematical gridlines (`with-grid`, 40px × 40px) or paper texture overlays.
3. **Organic Decorative Doodles & Stamps:** Playful geometric accents (`dec-wiggle`, `dec-star-4`, `dec-circle`) act as editorial punctuation across headings and photo stages.
4. **Real Photography & Embedded Media:** Every clinical concept is proven by authentic media (children with official Tomatis® headsets, sensory lighting tubes, verified specialists, un-muted video snippets). Generic AI icons alone are strictly banned.

---

## 2. Color Palette & Functional Roles

| Token | Hex Value | Name | Functional Role |
| :--- | :--- | :--- | :--- |
| `--color-bg` | `#FAF9DC` | **Canvas Cream** | Primary warm background for pages and hero sections. |
| `--color-primary-dark` | `#16255C` / `#2347EF` | **Royal Navy Ink** | Bold outlines (3–4px), text headings, hard drop shadows, and dark insight callouts. |
| `--color-accent` | `#2347EF` | **Electric Royal Blue** | Primary action trigger: CTA buttons, highlighted words, active tab states. |
| `--color-secondary` | `#FDD072` / `#FEE75C` | **Sunshine Gold** | High-energy backgrounds (`bg-yellow`), gold star ratings, secondary badges. |
| `--color-primary-light` | `#A6DFFD` / `#D0EEFF` | **Sky Pastel** | Accent containers, blue alternating sections (`bg-blue`), video frames. |
| `--color-coral` | `#FF8651` / `#FF5A5F` | **Warm Coral** | High-alert badges, sensory signals, urgent action indicators. |
| `--color-pink` | `#FFB7D5` / `#FFD6DF` | **Blush Rose** | Team stage backgrounds, emotional regulation accents. |
| `--color-green` | `#059669` / `#12B37A` | **Clinical Emerald** | Success checks, verification seals, live status dots (`.badge-dot`). |
| `--color-surface` | `#FFFFFF` | **Pure White** | Clean content stages, interactive calendar cards, FAQ disclosures. |

### Color Rules for AI
* **Zero Pure Black:** Never use `#000000` for text or borders. Always use Deep Royal Navy (`#16255C` or `#2347EF`).
* **High Contrast Hard Shadows:** Shadows MUST use solid colors without blur: `box-shadow: 5px 5px 0px var(--color-primary-dark)`.
* **Alternating Section Rhythm:** Alternate section backgrounds down the page: `bg-cream with-grid` ➔ `bg-blue` ➔ `bg-yellow` ➔ `bg-cream with-grid` ➔ `bg-white`.

---

## 3. Typography Architecture

### Font Stack
```css
--font-display: 'Orange Squash', 'Jost', 'Futura', sans-serif;
--font-heading: 'Jost', 'Outfit', 'Futura', sans-serif;
--font-body: 'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### Hierarchy & Scales
* **H1 (Hero Headlines):** `clamp(2.8rem, 5.5vw, 4.4rem)` — Weight `900`. Tight line-height (`1.08`). Emphasize crucial emotional terms with `<span style="color: var(--color-accent)">` or gold.
* **H2 (Section Titles):** `clamp(2.1rem, 4vw, 3.2rem)` — Weight `900`. Tracking `-0.5px`. Line-height (`1.15`).
* **H3 / H4 (Card & Item Titles):** `1.15rem – 1.4rem` — Weight `800` or `900`. Bold and conversational.
* **Section Tag Badges (`.badge-modern`):** `0.75rem – 0.82rem` — Uppercase, letter-spacing `1.5px`, weight `900`. Enclosed in a pill border with hard drop shadow.
* **Body Copy:** `1rem – 1.12rem` — Weight `600` or `700`. Line-height `1.55`. Max-width `65ch` for comfortable parental reading.

### Typography Anti-Patterns
* **BANNED:** Generic corporate fonts (`Inter`, `Arial` defaults, `Times New Roman`).
* **BANNED:** Faint gray body text (opacity < 0.8). Parents reading on mobile need high-contrast readability (`#16255C` or `#334155`).
* **BANNED:** 6-line wrapped headlines. Keep headlines punchy and editorial.

---

## 4. Layout Architecture & Structural Flow

### 1. Header & Navigation (`.jornada-nav` / `.navbar`)
* Fixed or sticky at top, height `64px – 72px`.
* White or cream surface with a solid bottom border (`2.5px solid var(--color-primary-dark)`).
* Company logo on left + Event or Service tag pill.
* Primary WhatsApp CTA button on right ("Apartar Cupo" or "Agendar Cita").

### 2. The Hero Stage
* **Split Layout:**
  * **Left:** `.badge-modern` ➔ H1 ➔ Conversational subtitle ➔ Feature pills row ➔ Direct Primary WhatsApp Button.
  * **Right:** Large vertical media stage (`aspect-ratio: 4/5` or `4/4.6`). Thick `6px – 7px` colored border, `8px 8px 0px` hard shadow, rounded corners (`32px`), containing an autoplaying looping `.mp4` video or high-res photo, with a sound toggle button (`Volume2` / `VolumeX`) and official badge.
* **Directly Below Hero (Social Proof Bar):**
  1. **Quotes Marquee (`.hero-quotes-marquee`):** Full-width navy ribbon with animated scrolling testimonials, 5 yellow stars, and authentic parent quotes.
  2. **Media Logo Strip (`.hero-media-static bg-blue`):** Clean, static, non-cluttered logo row with label `PRESENCIA EN MEDIOS NACIONALES:` displaying: Azul Podcast, Color Visión, Esto No Es Radio, La Mirada, RNN.

### 3. Anti-Cloned Cards & Varied Visual Rhythm (CRITICAL USER RULE)
* **NEVER** place 3 or 4 identical cards with thick borders and drop shadows stacked one directly above the other or in a uniform cookie-cutter row.
* **Visual Signals Layout (e.g. Symptoms / Challenges):**
  * Use a 4-part visual grid where **every single item has a real photograph or visual asset**, a floating colored category stamp (`01 • LENGUAJE`, `02 • ATENCIÓN`, etc.), and clear narrative typography.
  * Anchor the bottom with a high-contrast dark insight bar (`.jornada-signals-insight-bar`) featuring gold sparkles and the clinical rule of thumb.

### 4. Interactive Venue Showcase ("¿Dónde y Cuándo?")
* Dedicated section for provincial/local events featuring:
  * **Two large photo frames:** Real exterior building photo + Real interior waiting/sensory room photo.
  * **Details Bento Grid:** 4 distinct cards (Dates/When, Location/Where, Parking/Security, Family Comfort) with colored icon circles.

### 5. Interactive Calendar & Time Slot Selector
* Single-click date selector chips (`.jornada-day-btn`) with weekday, day number, and month.
* Time slot buttons (`.jornada-slot-btn`) showing hours and remaining spots badge (`X cupos libres`).
* Real-time selection summary bar updating a dynamic pre-filled WhatsApp link URL.

### 6. Video Testimonials & Authority
* Real vertical video cards with direct native player (`rev1.mp4`, `review_2.mp4`, `rev4.mov`).
* Media interview video cards moved to the bottom authority section right before FAQ.

---

## 5. Component Specifications & Tokens

### Primary CTA Button (`.btn-primary`)
```css
.btn-primary {
  background: var(--color-accent); /* #2347EF */
  color: #ffffff;
  border: 3px solid var(--color-primary-dark);
  border-radius: 100px;
  padding: 14px 28px;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 5px 5px 0px var(--color-primary-dark);
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.btn-primary:hover {
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0px var(--color-primary-dark);
}

.btn-primary:active {
  transform: translate(5px, 5px);
  box-shadow: 0px 0px 0px var(--color-primary-dark);
}
```

### Modern Pill Badge (`.badge-modern`)
```css
.badge-modern {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-secondary); /* #FEE75C */
  color: var(--color-primary-dark);
  border: 2px solid var(--color-primary-dark);
  border-radius: 100px;
  padding: 6px 16px;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 2px 2px 0px var(--color-primary-dark);
  margin-bottom: 12px;
}
```

### Visual Photo Frame
```css
.photo-frame {
  position: relative;
  width: 100%;
  border-radius: 24px;
  border: 4px solid var(--color-primary-dark);
  box-shadow: 6px 6px 0px var(--color-primary-dark);
  overflow: hidden;
  background: #000;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.photo-frame:hover img {
  transform: scale(1.03);
}
```

### Insight Strip / Anchor Callout (`.jornada-signals-insight-bar`)
```css
.insight-bar {
  background: #16255C;
  color: #FAF9DC;
  border: 3px solid var(--color-primary-dark);
  border-radius: 20px;
  padding: 20px 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 6px 6px 0px var(--color-secondary);
}
```

---

## 6. Motion & Micro-Interactions

1. **Spring Physics Default:** For interactive cards and modals:
   ```javascript
   transition: { type: "spring", stiffness: 300, damping: 15 }
   ```
2. **Tactile Push Feedback:** All clickable surfaces translate `+2px, +2px` with proportional shadow reduction on hover/active.
3. **Continuous Marquee Animation:** Infinite linear translate on ribbons:
   ```css
   @keyframes scroll {
     0% { transform: translateX(0%); }
     100% { transform: translateX(-50%); }
   }
   ```
4. **Hardware Acceleration:** Animations are restricted strictly to `transform` and `opacity`. Never animate `width`, `height`, `top`, or `left`.

---

## 7. Responsive Rules (Mobile-First Polish)

* **Breakpoint `< 768px`:**
  * Multi-column grids (`hero-grid`, `venue-gallery`, `signals-grid`) collapse to a single column (`1fr`).
  * Hero video frame remains visible and placed directly under or alongside the headline.
  * Section padding reduces to `clamp(40px, 8vw, 80px)`.
* **Sticky Mobile Booking Bar:**
  * Bottom floating bar on mobile screens with remaining spots counter and instant WhatsApp CTA button (`z-index: 99`).
* **Zero Horizontal Scroll:** All wrappers must have `overflow-x: hidden` and max-width bounds (`max-width: 1200px; margin: 0 auto;`).

---

## 8. Anti-Patterns & Banned AI Practices (STRICT)

When writing code or designing for Centro Multisensorial RD, **NEVER DO ANY OF THE FOLLOWING**:

| Banned Pattern | Why It Is Banned | Correct Multisensorial Approach |
| :--- | :--- | :--- |
| **Identical Stacked Cards** | Causes repetitive "AI template" slop. | Varied visual rhythm: combine direct typography, photo stages, and bento rows. |
| **Isolated Lucide Icons as Content** | Looks empty, cheap, and robotic. | Pair every signal or benefit with real photographs, video, or data stamps. |
| **Blurry Gaussian Shadows** | Violates brand neo-brutalism. | Use sharp, solid hard offset shadows (`4px 4px 0px #16255C`). |
| **Neon AI Gradients / Glowing Blobs** | Looks like a generic crypto/AI site. | Solid cream/yellow/blue palette with tactile paper grid backgrounds. |
| **Multi-Step Contact Forms** | High friction, Dominican parents prefer WhatsApp. | Direct WhatsApp deep-links (`https://wa.me/18093065040`) with dynamic pre-filled text. |
| **Stock AI Emojis in Headings** | Cheapens clinical authority. | Custom SVGs, Lucide icons in colored stamp circles, or `.badge-modern`. |
| **Pure Black (`#000000`)** | Too harsh against pastel creams. | Deep Royal Navy Ink (`#16255C`). |
| **Generic Placeholder Names / Photos** | Destroys local credibility. | Use authentic staff (Carlos Pérez Díaz, Carlos Eduardo Pérez, Mery Torrealba) and real patient reviews. |

---

## 9. Quick Copywriting Guidelines (Dominican Pediatric Audience)

* **Voice:** Empathetic, direct, reassuring, yet clinically authoritative. Speak directly to "Mamá y Papá".
* **Language:** Natural Dominican Spanish ("berrinches difíciles de calmar", "parece que no escucha pero atiende al celular", "se tapa los oídos con la licuadora", "construir sin cimientos").
* **Key Concept to Protect:** *"La regla de la base: Si el procesamiento sensorial y auditivo está descalibrado, forzar el habla arriba es construir sin cimientos. Estimulamos la base para que el lenguaje despierte."*
* **Scarcity & Exclusivity:** Always emphasize small groups ("Máximo 6 niños por tanda para atención 1 a 1").
