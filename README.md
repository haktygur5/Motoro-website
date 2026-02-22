# Motoro-website

## Motoro Automotive Group – Custom Map Section

Premium dark-mode map section for the Motoro Automotive Group WordPress site (DealerCenter theme).

### Files

| File | Description |
|------|-------------|
| `footer-complete.html` | **Complete footer** — map section + footer bar with quick links, social icons, logo, and copyright. Paste into Footer Script |
| `footer-map-section.html` | Map section only (without footer bar) |
| `hide-default-footer.html` | **CSS to hide** the built-in DealerCenter theme footer. Paste into Header Script |
| `global-color-overrides.html` | **Global font/color overrides** — removes grays, enforces white/black/red palette. Paste into Header Script |

### How to Install

**Step 1 — Global color overrides (Header Script):**
1. Open the WordPress **Customizer** (`Appearance > Customize`)
2. Navigate to **Theme Scripts > Header Script**
3. Copy the contents of [`global-color-overrides.html`](global-color-overrides.html)
4. Paste it into the **Header Script** text area

**Step 2 — Hide the default theme footer (same Header Script):**
1. Copy the contents of [`hide-default-footer.html`](hide-default-footer.html)
2. Paste it **after** the global color overrides in the same **Header Script** text area

**Step 3 — Add the custom Motoro footer (Footer Script):**
1. Navigate to **Theme Scripts > Footer Script**
2. Copy the entire contents of [`footer-complete.html`](footer-complete.html)
3. Paste it into the **Footer Script** text area
4. Click **Publish**

### What It Includes

- **Premium dark-mode design** — pure black background (`#000000`) with subtle red radial glow
- **Dark Google Maps** — CSS filter for dark map appearance
- **Embedded Google Map** showing the dealership at 810 Lee Rd, Orlando, FL 32810
- **Info card** with logo, address, phone, and hours
- **Footer bar** with logo, quick links (Inventory, Financing, Test Drive, About, Contact), social icons (Facebook, Instagram, TikTok), and copyright
- **Hover effects** on info items (subtle border glow) and phone link (red highlight)
- **Animated "Get Directions →" button** with pulsing red glow (`motoro-glow-pulse`)
- **Animated accent line** under the section title (`motoro-line-grow`)
- **Top/bottom edge glow lines** — subtle red gradient separators
- **Responsive layout** — stacks vertically on mobile (≤768px)

### Design Constraints

The code follows these rules to avoid breaking the DealerCenter theme:

- Uses `data-motoro-*` attributes instead of generic CSS classes to avoid conflicts
- Uses only inline styles on elements (no custom CSS class names)
- Does **not** use `:root` CSS variables
- Does **not** use CSS `filter` on the iframe
- Does **not** use `backdrop-filter`
- All CSS selectors scoped to `#motoro-map-section-wrapper`
- Keyframe animations use `motoro-` prefix to avoid collisions

### Business Info

- **Address:** 810 Lee Rd, Orlando, FL 32810
- **Phone:** (407) 922-2215
- **Hours:** Mon–Sat: 9AM – 7PM | Sun: Closed
- **Google Maps:** https://maps.app.goo.gl/XxbsgPgVzZmqHBex9