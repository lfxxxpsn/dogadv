# dogadv

A pure front-end ADV game for GitHub Pages.

## What it includes

- Static HTML, CSS, and JavaScript
- Auto-generated art assets from the photos in `aki/`
- A short branching story that plays in about five minutes

## Generate assets

Run the PowerShell script after cloning or whenever the source photos change:

```powershell
./scripts/generate-assets.ps1
```

## Run locally

Use any static server, for example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173/`.

## GitHub Pages

Deploy the repository root as-is. There is no build step.
