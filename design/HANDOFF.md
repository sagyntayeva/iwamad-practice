# Week 5 — Handoff notes (SIS 2 starter design)
Routes (from the prototype):  `/` → posts-desktop (Flow 1 start, posts list) · `/posts/:id` → post-desktop (PostCard "Read more") · `*` → 404-desktop (third card's "Read more"; "← All posts" / "Back to all posts" → `/`). Header nav: Home · Contact · Posts
Components → React files:     PostCard → `src/components/ui/Card.tsx`   Button → `src/components/ui/Button.tsx`   Tag → `src/components/ui/Tag.tsx`
Button variants → prop:       variant = `"primary"` | `"secondary"` (Figma: variant=Primary / variant=Secondary, default Secondary)
PostCard layout:              direction vertical  gap 12px  padding 16px (space/4)  radius 8px (radius/md)
Breakpoint change:            phone 1 column(s), desktop 3 columns; header stacks vertically and centered on phone (logo / title / vertical nav), one horizontal row on desktop
Tokens (all ten):             color/primary = #1d4ed8  color/on-primary = #ffffff  color/text = #1f2937  color/text-muted = #9ca3af (fixed in code → #6b7280)  color/surface = #ffffff  color/border = #d1d5db  space/2 = 8  space/4 = 16  space/6 = 24  radius/md = 8

---

## Source

Figma file "IWaMAD · SIS 2 Blog - Starter Design" (duplicated to drafts). Pages: **Design System** (logo, Tag, Button, PostCard, Header) and **Screens** (posts-desktop 1440, post-desktop 1440, 404-desktop 1440, posts-phone 390). One variable collection, **SIS 2**, one mode, 10 variables. No paint/text styles.

## Tokens → CSS (`src/styles/tokens.css`)

| Figma variable     | Type  | Figma value | CSS custom property  | Value in code |
| ------------------ | ----- | ----------- | -------------------- | ------------- |
| color/primary      | color | #1d4ed8     | --color-primary      | #1d4ed8       |
| color/on-primary   | color | #ffffff     | --color-on-primary   | #ffffff       |
| color/text         | color | #1f2937     | --color-text         | #1f2937       |
| color/text-muted   | color | #9ca3af     | --color-text-muted   | **#6b7280**   |
| color/surface      | color | #ffffff     | --color-surface      | #ffffff       |
| color/border       | color | #d1d5db     | --color-border       | #d1d5db       |
| space/2            | float | 8           | --space-2            | 8px           |
| space/4            | float | 16          | --space-4            | 16px          |
| space/6            | float | 24          | --space-6            | 24px          |
| radius/md          | float | 8           | --radius-md          | 8px           |

## Components

**Button** (component set, property `variant`: Primary | Secondary, default Secondary)
- Auto layout horizontal, centered, padding top/bottom space/4 (16), left/right space/2 (8), radius radius/md
- Primary: fill color/primary, label color/on-primary
- Secondary: fill color/surface, 1px stroke color/primary, label color/primary
- Label: Inter Regular 12
- Used in PostCard ("Read more", Primary) → in this app: `LikeButton` uses `<Button variant="primary">`

**PostCard → Card**
- Auto layout vertical, gap 12, padding space/4 (16), radius radius/md (8), fill color/surface, 1px stroke color/border
- Content: image placeholder 288×162 (fill color/border), title Inter 20 color/text, date Inter 14 color/text-muted, Tag row (gap space/2), Button Primary
- Width 320 on desktop, 358 (fill) on phone
- In this app: `ProfileCard`, `Skills`, `Contact`, `NotFound` render inside `<Card>`

**Tag**
- Auto layout horizontal, padding top/bottom space/2 (8), left/right 2 (not bound to a variable), radius 999 (pill), 1px stroke color/border
- Label Inter Regular 12 (#000000 in Figma, not a variable → `--color-text` in code)
- In this app: `SkillBadge` renders `<Tag>`

**Header**
- Desktop: horizontal, gap space/6 (24), padding space/6 × space/4 (24 / 16), fill white, bottom border 1px color/border
- Items: logo 32×32, "My Dev Blog" Inter 16 color/text, nav (gap space/4, padding space/2) with links Inter 16 color/primary
- Phone (posts-phone): same items stacked vertically and centered, nav vertical

**Logo**: 32×32 rounded square (color/primary) with white `< >` stroke 2.5 → exported as `src/assets/logo.svg`

## Screens

- Page title: Inter Bold 28
- Footer: "© 2026 My Dev Blog", Inter Bold 14, color/text-muted
- Desktop posts list: 3 PostCards in a horizontal row, gap space/6 (24) → 3×320 + 2×24 = 1008px
- Phone posts list: PostCards stacked in 1 column, gap space/4 (16), padding space/4

## Breakpoint

Figma only defines two frame widths: phone 390 and desktop 1440. No explicit breakpoint value. Code is mobile-first with one `@media (min-width: 1024px)` switch: the smallest common desktop width that fits the 1008px three-card row.

## Accessibility fix

`color/text-muted` (#9ca3af) is used for text (post date, footer) on color/surface (#ffffff):

| Color   | Contrast on #ffffff | WCAG AA (4.5:1) |
| ------- | ------------------- | --------------- |
| #9ca3af | 2.54:1              | fail            |
| #6b7280 | 4.83:1              | pass            |

Only the `--color-text-muted` token changed; #6b7280 is the next step of the same cool-gray scale. The other text pairs pass: color/text on surface 14.68:1, color/primary on surface 6.70:1, color/on-primary on color/primary 6.70:1.

Contrast ratios computed with the WCAG 2.x relative luminance formula.
