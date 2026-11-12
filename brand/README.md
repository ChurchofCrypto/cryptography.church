# Emblem

The Church's emblem is the winged eye and crossed keys from the 40C3 challenge coin. The vector version is
`public/emblem.svg`.

| File | What it is |
|---|---|
| `github-org-avatar.png` | The GitHub organization's profile picture (1024×1024, from `from-aarto/emblem-up2pct.webp`). |
| `from-aarto/` | Raster exports of the emblem made by aarto (Alessio Artoni), 2048×2048. |

Thank you, aarto, for exporting the emblem and for noticing that it looked off-centre.

## Why the "up" versions

The emblem looks too low when it's centred mathematically, because the lightning bolts at the top are light and the keys
at the bottom are heavy. aarto made versions moved up 1% to 5% of the image height; `comparison.png` shows all six side
by side. At avatar size, +2% looks centred, so the avatar uses that one.

## Site icons

The favicons and app icons in `public/` (`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`,
`apple-touch-icon.png`, `android-chrome-*.png`) are made from these files:

- The Android icons are the GitHub avatar, resized.
- The favicons are cropped closer around the emblem, so it's still recognizable at 16 and 32 pixels.
- The Apple touch icon is cropped with a little more room around the emblem.
- Every crop moves the emblem up 2%, the same as the avatar.
