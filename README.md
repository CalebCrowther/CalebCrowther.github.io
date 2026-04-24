# Caleb Crowther — Personal Website

A multi-page Progressive Web App (PWA) personal site.

## Files

| File | Purpose |
|---|---|
| `index.html` | All pages (Home, Projects, Teaching, Contact) |
| `style.css` | Styles & layout |
| `app.js` | Navigation logic + PWA service worker registration |
| `sw.js` | Service worker (offline caching) |
| `manifest.json` | PWA manifest |
| `favicon.svg` | Browser tab icon |
| `mephoto.png` | **Your photo — add this file to the root folder** |

## Setup

1. **Add your photo**: Place `mephoto.png` in the root folder (same level as `index.html`).

2. **Deploy to GitHub Pages**:
   - Create a new repository on GitHub (e.g. `caleb-crowther.github.io` or any repo name)
   - Push all files to the `main` branch
   - Go to **Settings → Pages** → Source: `main` branch, `/ (root)` folder → Save
   - Your site will be live at `https://<username>.github.io/<repo-name>`

3. **For a custom domain** (e.g. `calebcrowther.com`):
   - Add a `CNAME` file containing your domain name
   - Configure DNS with your registrar

## Local preview

```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080
```

The site works fully offline after the first visit (PWA).
