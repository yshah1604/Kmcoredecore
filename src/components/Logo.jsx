// ────────────────────────────────────────────────────────────
// KM CORE & DECOR — Logo Component (image-based)
//
// Uses two versions of your logo:
//   - logo-dark.png  → dark teal logo on light backgrounds (nav scrolled)
//   - logo-white.png → white logo on dark backgrounds (hero, footer)
//
// SETUP: Place these two files in your assets folder:
//   /assets/logo-dark.png   (your logo with transparent background)
//   /assets/logo-white.png  (all-white version of your logo)
//
// Adjust the import paths below to match your project structure.
// ────────────────────────────────────────────────────────────

import logoDark from './logo-web.png'
import logoWhite from './logo-web-white.png'

export default function Logo({ className = '', invert = false }) {
  return (
    <img
      src={invert ? logoWhite : logoDark}
      alt="KM Core & Decor logo"
      className={className}
      style={{
        objectFit: 'contain',
        display: 'block',
      }}
    />
  )
}
