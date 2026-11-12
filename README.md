# cryptography.church

The Church of Cryptography's website. It is a static site: everything in `public/` is served as is.

| File | What it is |
|---|---|
| `public/index.html` | The home page: About, Teachings, Sacred Ciphers, and Sacred Gatherings (events). |
| `public/styles.css` | The home page's styles. Colours and type match `alberti.html`; light or dark follows the device. |
| `public/emblem.svg` | The coin's emblem (winged eye and crossed keys), used by the home page. |
| `public/og.png` | The preview image for links shared in chat and social media. |
| `public/favicon*`, `public/*-icon*.png`, `public/android-chrome-*.png` | Favicons and app icons, made from the emblem. |
| `brand/` | Emblem raster files, including the GitHub organization's avatar. Not deployed. See `brand/README.md`. |
| `public/alberti.html`, `public/paper/` | The Alberti disk page and paper cut-out PDFs. |
| `public/lean.html`, `public/lean-workshop.zip` | "Proving the Alberti disk" and the Lean workshop download. |

`alberti.html`, `lean.html`, the PDFs and the zip are generated from
[ChurchofCrypto/alberti-coin](https://github.com/ChurchofCrypto/alberti-coin) (`site/build.py --site` and
`site/build_lean.py --site`); edit them there, not here.

## Editing

Edit `public/index.html` directly. To add an event, copy an existing `<li>` in the 40C3 workshop list; past
events go in a `<details class="past">` block under "Previous gatherings".

## Preview

    ./scripts/build.sh
    python3 -m http.server -d build 8000     # then open http://localhost:8000

## Deploy

Pushing to `main` deploys (GitHub Actions, `.github/workflows/deploy.yml`): `scripts/deploy.sh` copies `public/` to
`build/`, syncs it to the S3 bucket, and `scripts/invalidate-distribution.sh` clears the CloudFront cache.
`main` is protected: changes go in by pull request, and commits must be signed.
