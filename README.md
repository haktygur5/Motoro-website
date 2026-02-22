# Motoro-website

## Motoro Automotive Group – Custom Map Section

Premium dark-mode map section for the Motoro Automotive Group WordPress site (DealerCenter theme).

### Files

| File | Description |
|------|-------------|
| `footer-map-section.html` | Premium dark-mode map section with info card, to be pasted into the WordPress Customizer Footer Script |

### How to Install

1. Open the WordPress **Customizer** (`Appearance > Customize`)
2. Navigate to **Theme Scripts > Footer Script**
3. Copy the entire contents of [`footer-map-section.html`](footer-map-section.html)
4. Paste it into the **Footer Script** text area
5. Click **Publish**

### What It Includes

- **Premium dark-mode design** — near-black background (`#060910`) with subtle orange radial glow
- **Embedded Google Map** showing the dealership at 5501 S Orange Blossom Trail, Orlando, FL 32839
- **Info card** with branded header (MOTORO / AUTOMOTIVE GROUP), address, phone, and hours
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

- **Address:** 5501 S Orange Blossom Trail, Orlando, FL 32839
- **Phone:** +1 (689) 320-9498
- **Hours:** Mon–Sat: 9AM – 7PM | Sun: Closed
- **Google Maps:** https://maps.app.goo.gl/T4eyLmafuVhcGFW37