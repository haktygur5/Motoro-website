# Motoro-website

## Motoro Automotive Group – Custom Map Section

This repository contains the custom **map section** code for the Motoro Automotive Group website.

### Files

| File | Description |
|------|-------------|
| `footer-map-section.html` | Dark/elegant map section with info card, to be added via the WordPress Customizer Footer Script |

### How to Install

1. Open the WordPress **Customizer** (`Appearance > Customize`)
2. Navigate to **Theme Scripts > Footer Script**
3. Copy the entire contents of [`footer-map-section.html`](footer-map-section.html)
4. Paste it into the **Footer Script** text area
5. Click **Publish**

### What It Includes

- **Dark/elegant design** with gradient background (`#0d1117` / `#1a1a2e`)
- **Embedded Google Map** showing the dealership at 5501 S Orange Blossom Trail, Orlando, FL 32839
- **Info card** with address, phone number, and business hours
- **"Get Directions" button** (orange `#ff6d00`) linking to Google Maps
- **Responsive layout** — stacks vertically on mobile (≤768px)

### Design Constraints

The code follows these rules to avoid breaking the DealerCenter theme:

- Uses `data-motoro-*` attributes instead of generic CSS classes to avoid conflicts
- Uses only inline styles (no additional CSS classes on the main elements)
- Does **not** use `:root` CSS variables
- Does **not** use CSS `filter` on the iframe
- Does **not** use `backdrop-filter`
- Responsive media queries target only elements inside `#motoro-map-section-wrapper`

### Business Info

- **Address:** 5501 S Orange Blossom Trail, Orlando, FL 32839
- **Phone:** +1 (689) 320-9498
- **Hours:** Mon–Sat: 9AM – 7PM | Sun: Closed
- **Google Maps:** https://maps.app.goo.gl/T4eyLmafuVhcGFW37