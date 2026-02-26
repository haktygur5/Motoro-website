# Motoro-website

## Motoro Automotive Group – Custom Map Section

Premium dark-mode map section for the Motoro Automotive Group WordPress site (DealerCenter theme).

### Files

| File | Description |
|------|-------------|
| ⭐ `all-in-one-header.html` | **ALL-IN-ONE** — Single compact `<style>` block with ALL CSS overrides. **Use this instead of separate files.** Paste into Header Script |
| `footer-complete.html` | **Complete footer** — map section + footer bar with quick links, social icons, logo, and copyright. Paste into Footer Script |
| `chat-widget.html` | **LeadConnector chat widget** — floating chat bubble on all pages. Paste into Footer Script (after footer-complete) |
| `footer-map-section.html` | Map section only (without footer bar) — standalone alternative |
| `global-color-overrides.html` | _(Included in all-in-one)_ Global font/color overrides |
| `inventory-page-fixes.html` | _(Included in all-in-one)_ Inventory page gray text fixes |
| `header-navbar-fix.html` | _(Included in all-in-one)_ Header navbar + filter bar fixes |
| `hide-default-footer.html` | _(Included in all-in-one)_ CSS to hide default footer |

### How to Install (Only 3 Steps!)

**Step 1 — Header Script (ALL CSS overrides):**
1. Open the WordPress **Customizer** (`Appearance > Customize`)
2. Navigate to **Theme Scripts > Header Script**
3. **Clear any existing CSS code** from previous attempts
4. Copy the entire contents of [`all-in-one-header.html`](all-in-one-header.html)
5. Paste it into the **Header Script** text area
6. ⚠️ **Do NOT paste the separate files** — this single file replaces them all

**Step 2 — Footer Script (custom footer):**
1. Navigate to **Theme Scripts > Footer Script**
2. Copy the entire contents of [`footer-complete.html`](footer-complete.html)
3. Paste it into the **Footer Script** text area

**Step 3 — Chat widget (same Footer Script):**
1. Copy the contents of [`chat-widget.html`](chat-widget.html)
2. Paste it **after** the footer-complete code in the same **Footer Script** text area
3. Click **Publish**

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