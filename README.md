# BIRD — GitHub Pages Website

This is a static website for **BIRD — Bioinformatics, Research & Data / Bioinformatique, Recherche & Données**.

## Files

- `index.html` — main website page
- `styles.css` — visual design and responsive layout
- `script.js` — mobile menu and footer year
- `assets/bird_logo.png` — logo
- `assets/BIRD_pamphlet.pdf` — downloadable pamphlet
- `.nojekyll` — tells GitHub Pages not to process the site with Jekyll
- `CNAME` — optional custom domain file for `bird-bioinfo.com`

## How to publish on GitHub Pages

1. Create a GitHub repository.
   - For a personal/organization site, name it like: `YOURUSERNAME.github.io`.
   - For a project site, any repository name works.
2. Upload all files in this folder to the root of the repository.
3. Commit the files to the `main` branch.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save.

## Custom domain

This package includes a `CNAME` file with:

```text
bird-bioinfo.com
```

You still need to configure the custom domain in GitHub Pages settings and set the required DNS records with your domain provider.

## Editing content

Most text is in `index.html`. Colors and layout are in `styles.css`.

Brand colors used:

- Dark blue: `#0B2545`
- Green: `#00BF5F`
- Gray: `#AEB0B3`
