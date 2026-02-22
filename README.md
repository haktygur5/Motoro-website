# Motoro-website

## Motoro Automotive Group – Custom Map Section

Premium dark-mode map section for the Motoro Automotive Group WordPress site (DealerCenter theme).

### Files

| File | Description |
|------|-------------|
| `footer-complete.html` | **Complete footer** — map section + footer bar with quick links, social icons, logo, and copyright. Ready to paste into Footer Script |
| `footer-map-section.html` | Map section only (without footer bar) |

### How to Install

1. Open the WordPress **Customizer** (`Appearance > Customize`)
2. Navigate to **Theme Scripts > Footer Script**
3. Copy the entire contents of [`footer-complete.html`](footer-complete.html) (recommended) or [`footer-map-section.html`](footer-map-section.html)
4. Paste it into the **Footer Script** text area
5. Click **Publish**

### What It Includes

- **Premium dark-mode design** — near-black background (`#060910`) with subtle orange radial glow
- **Embedded Google Map** showing the dealership at 810 Lee Rd, Orlando, FL 32810
- **Info card** with branded header (MOTORO / AUTOMOTIVE GROUP), address, phone, and hours
- **Footer bar** with logo, quick links (Inventory, Financing, Test Drive, About, Contact), social icons (Facebook, Instagram, TikTok), and copyright
- **Hover effects** on info items (subtle border glow) and phone link (orange highlight)
- **Animated "Get Directions →" button** with pulsing orange glow (`motoro-glow-pulse`)
- **Animated accent line** under the section title (`motoro-line-grow`)
- **Top/bottom edge glow lines** — subtle orange gradient separators
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