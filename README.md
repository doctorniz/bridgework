# Bridgework

Static learning site on addiction medicine, addiction psychology and social work interventions. Plain HTML, CSS and JS: no build step, no dependencies.

## Publish on GitHub Pages
1. Create a repo and push this folder to its root (`main` branch).
2. Settings, Pages, Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Visit `https://<user>.github.io/<repo>/`. All links are relative, so project sites work.

## Run locally
```
python -m http.server 8000
```
Then open http://localhost:8000.

## Edit
- Interventions: add an object in `assets/interventions.js`.
- Hotline numbers and nav: `CONFIG` and `nav` in `assets/site.js`, plus `support.html`.
- New page: copy any page, set `data-root` (`""` at the root, `"../"` one folder down) and `data-section`.
- Colours: CSS variables at the top of `assets/style.css`.

## Before going public

See `SITEMAP.md` for the planned structure and what's still to build.
