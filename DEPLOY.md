Deployment checklist & actions performed

Summary of changes I made:
- Removed incorrect claims from the Music Popularity project and updated Skills (already done).
- Replaced remaining `Nuxt.js` mentions with `Vue.js` in the CampusFlow card.
- Fixed malformed HTML in project details (missing closing > on `.project-full` divs).
- Added `meta description`, `theme-color`, and Open Graph tags to the `<head>` for SEO/social sharing.
- Added `<link rel="preconnect">` for Google Fonts.
- Added `loading="lazy" decoding="async"` to project and profile images to improve load performance.
- Added `rel="noopener noreferrer"` to external links that opened in new tabs.
- Added `robots.txt` and a starter `sitemap.xml` (please replace the placeholder domain with your real site URL).
- Added a note about EmailJS public key in the HTML to encourage moving sensitive config away from public HTML.
- Set `script.js` to load with `defer`.

Recommended remaining steps (optional, but highly recommended):
1. Optimize images: compress `images/*` (use TinyPNG, ImageOptim, or similar). This will drastically improve performance.
2. Run Lighthouse (Chrome DevTools) and act on the high priority accessibility/performance suggestions.
3. Add width/height attributes to images if you know the image intrinsic dimensions to avoid layout shift.
4. Replace the placeholder URL in `sitemap.xml` and `robots.txt` with your real site URL.
5. Consider moving EmailJS usage to a serverless function or hiding identifiers in environment variables for production.
6. Add analytics (optional) and/or a small monitoring snippet if you want usage metrics.

Deployment options:
- GitHub Pages (simple): push to `main` or a `gh-pages` branch and enable Pages in repo Settings.
- Netlify: connect the GitHub repo and set build/publish directory to repo root for a static HTML site.
- Vercel: connect the repo and automatic deployments will work for static sites.

If you want, I can:
- Replace the placeholder domain in `sitemap.xml` and `robots.txt` for you.
- Compress the images and replace the originals (I will create separate compressed versions so originals are preserved).
- Run a Lighthouse audit and apply the top recommendations.

Tell me which of the optional follow-ups you want me to do next.