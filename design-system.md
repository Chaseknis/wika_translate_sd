# WIKA TRANSLATE — Design System
Generated: 2026-05-30  
Source file: `src/styles/variables.css`

---

## Colours

| Token | Value | Usage |
|---|---|---|
| `--color-gold` | `#ffca7a` | Primary accent, headings on dark, nav links, borders |
| `--color-gold-dim` | `#d2c79f` | Body text on dark backgrounds, footer text |
| `--color-gold-hover` | `#e8b55c` | Gold hover state (subscribe button) |
| `--color-red` | `#b7312a` | HR underlines, CTA buttons, card accents, section badges |
| `--color-red-hover` | `#9e2722` | Red button hover |
| `--color-green-dark` | `#1a3c34` | Section headings on light backgrounds, button hover text |
| `--color-dark-1` | `rgb(37, 31, 10)` | Gradient dark stop — footer, header, mobile nav |
| `--color-dark-2` | `rgb(53, 44, 20)` | Gradient light stop |
| `--color-white` | `#ffffff` | — |
| `--color-black-soft` | `#1f1f1f` | Text on light backgrounds |

## Gradients

| Token | Value | Usage |
|---|---|---|
| `--gradient-dark` | `linear-gradient(-25deg, rgb(53,44,20) 0%, rgb(37,31,10) 100%)` | Header, footer, mobile nav, hero |
| `--gradient-overlay` | `linear-gradient(-25deg, rgba(53,44,20,0.7) 0%, rgba(37,31,10,0.9) 100%)` | Hero overlay, badge background |
| `--gradient-about-overlay` | `linear-gradient(-25deg, rgba(53,44,20,0.65) 0%, rgba(26,60,52,0.88) 100%)` | Inner page hero overlays |

---

## Typography

Font: **Poppins** (loaded via Google Fonts in index.html)

| Token | Value | Usage |
|---|---|---|
| `--text-xs` | `0.65rem` (~10.4px) | Fine print, labels, badges |
| `--text-sm` | `0.70rem` (~11.2px) | Footer text, captions, links |
| `--text-base` | `0.80rem` (~12.8px) | Body copy, paragraphs |
| `--text-md` | `0.90rem` (~14.4px) | Card body text |
| `--text-lg` | `1.00rem` (~16px) | Sub-headings, blog titles |
| `--text-xl` | `1.20rem` (~19.2px) | Section titles (mobile) |
| `--text-2xl` | `1.60rem` (~25.6px) | H1 (mobile) |
| `--text-3xl` | `2.00rem` (~32px) | H1 (tablet) |
| `--text-4xl` | `2.50rem` (~40px) | H1 (desktop) |

| Token | Value |
|---|---|
| `--font-weight-normal` | 400 |
| `--font-weight-semibold` | 600 |
| `--font-weight-bold` | 700 |
| `--font-weight-black` | 900 |
| `--line-height-tight` | 1.3 |
| `--line-height-normal` | 1.7 |
| `--line-height-body` | 1.75 |

---

## Spacing Scale

| Token | Value | px equiv |
|---|---|---|
| `--space-1` | `0.25rem` | 4px |
| `--space-2` | `0.50rem` | 8px |
| `--space-3` | `0.75rem` | 12px |
| `--space-4` | `1.00rem` | 16px |
| `--space-5` | `1.25rem` | 20px |
| `--space-6` | `1.50rem` | 24px |
| `--space-8` | `2.00rem` | 32px |
| `--space-10` | `2.50rem` | 40px |
| `--space-12` | `3.00rem` | 48px |
| `--space-16` | `4.00rem` | 64px |
| `--space-20` | `5.00rem` | 80px |

Section horizontal padding: `--section-px: 5%`

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `3px` | Buttons, badges |
| `--radius-base` | `4px` | Cards, images |
| `--radius-md` | `8px` | Larger cards |
| `--radius-lg` | `16px` | Mobile nav drawer |

---

## Shadows

| Token | Usage |
|---|---|
| `--shadow-card` | Card default state |
| `--shadow-card-hover` | Card hover state |
| `--shadow-header` | Sticky header and footer |

---

## Transitions

| Token | Value | Usage |
|---|---|---|
| `--transition-fast` | `0.2s ease` | Hover state colour changes |
| `--transition-base` | `0.3s ease` | Transform, opacity animations |
| `--transition-slow` | `0.5s cubic-bezier(0.22, 1, 0.36, 1)` | Section entry animations |

---

## Breakpoints

| Name | Value | Usage |
|---|---|---|
| sm | 576px | Small phones landscape |
| md | 768px | Tablets |
| lg | 992px | Desktop (layout changes: side-by-side) |
| xl | 1200px | Large desktop |

---

## Buttons

Minimum tap target: `--btn-min-height: 48px` (WCAG 2.5.5)

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| Primary (gold outline) | Transparent → gold on hover | `#ffca7a` → `#1a3c34` | 1px solid `#ffca7a` | Hero CTA, main actions |
| Secondary (red solid) | `#b7312a` | `#ffffff` | none | Contact CTAs, footer CTA |
| Subscribe | `#ffca7a` | `#1a3c34` | none | Newsletter |
| WhatsApp | `#25d366` | `#ffffff` | none | Footer WhatsApp CTA |
