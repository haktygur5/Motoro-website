# Motoro-website

## Repository Contents

| File | Description |
|------|-------------|
| `Home page - main code` | WordPress Gutenberg blocks for the main homepage layout (hero, shop-by-make, quick actions, featured vehicles, about section) |
| `Home page - embed redirect solution` | **Lovable site embed/redirect** — drop-in HTML for the `/home` page that displays the Lovable-built site |
| `Footer (before </` | Directory containing the custom footer HTML and header CSS overrides |
| `Page Custom Script` | CSS to hide the default DealerCenter footer |
| `car.json` | Vehicle inventory data |

---

## Lovable Embed / Redirect Solution

### Problem

The Lovable-built site at `https://auto-luxury-guide.lovable.app` cannot be embedded via a standard iframe in DealerCenter because Lovable's server sends `X-Frame-Options` headers that block iframe embedding.

### Solution

The file **`Home page - embed redirect solution`** provides a definitive, multi-layered approach:

1. **Hides DealerCenter chrome** — All default header, navigation, footer, and sidebar elements are hidden via CSS so only the embedded content is visible.
2. **Full-viewport iframe** — Attempts to load the Lovable site in a seamless, borderless, full-screen iframe.
3. **Automatic redirect fallback** — If the iframe fails to load (due to `X-Frame-Options`), JavaScript automatically redirects the visitor to the Lovable URL within 5 seconds.
4. **Loading indicator** — While the page is loading/checking, a branded spinner and loading message are shown.
5. **Manual fallback link** — A "click here" link is always available if automatic methods fail.
6. **No-JavaScript fallback** — A `<noscript>` meta-refresh redirect handles users with JavaScript disabled.

### How to Use in DealerCenter

1. Log in to your DealerCenter / WordPress admin panel
2. Navigate to **Pages** and create or edit the `/home` page
3. Add a **Custom HTML** block (or switch to the HTML/Code editor)
4. Copy the **entire contents** of `Home page - embed redirect solution` and paste it in
5. **Save** and **Publish** the page

The page at `motoroautomotivegroup.com/home` will now seamlessly display your Lovable site. Visitors will either see it embedded directly or be transparently redirected — the experience is seamless either way.

### Alternative: GHL Funnel Approach

If you prefer using GoHighLevel (GHL) funnels instead:

1. Create a new funnel in GHL
2. Use the same HTML code from `Home page - embed redirect solution` in a custom code element
3. Point your domain (`motoroautomotivegroup.com/home`) to the GHL funnel page

The same embed/redirect logic works in any platform that supports custom HTML.