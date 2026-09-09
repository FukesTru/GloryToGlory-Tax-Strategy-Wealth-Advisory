/**
 * Shared drawing helpers for the artwork generator.
 * Everything is deterministic: the same seed always produces the same image.
 */

export const C = {
  navy950: "#071429",
  navy900: "#0B1E3D",
  navy800: "#12294F",
  navy700: "#1B3763",
  navy600: "#274A7F",
  gold: "#C9A253",
  gold300: "#E6CF94",
  gold600: "#A98439",
  emerald: "#2F6F5E",
  emerald600: "#3A8672",
  cream: "#FAFAF7",
};

/** Deterministic PRNG (mulberry32). */
export function rng(seed) {
  let a = seed >>> 0;
  return function next() {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const rand = (r, min, max) => min + r() * (max - min);
export const randInt = (r, min, max) => Math.floor(rand(r, min, max + 1));
export const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
export const n = (v) => Math.round(v * 100) / 100;

/** Shared <defs>: film grain and blurs. */
export function commonDefs() {
  return `
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="7" result="noise"/>
      <feColorMatrix in="noise" type="saturate" values="0"/>
    </filter>
    <filter id="soft"><feGaussianBlur stdDeviation="9"/></filter>
    <filter id="softer"><feGaussianBlur stdDeviation="26"/></filter>
    <filter id="hazeBlur"><feGaussianBlur stdDeviation="60"/></filter>`;
}

export function vignetteDef(id = "vignette", strength = 0.5) {
  return `
    <radialGradient id="${id}" cx="50%" cy="45%" r="78%">
      <stop offset="55%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000814" stop-opacity="${strength}"/>
    </radialGradient>`;
}

/** Grain + vignette overlay, drawn last. */
export function finishLayers(w, h, grainOpacity = 0.055) {
  return `
    <rect width="${w}" height="${h}" filter="url(#grain)" opacity="${grainOpacity}"/>
    <rect width="${w}" height="${h}" fill="url(#vignette)"/>`;
}

/** Faint grid, matching the site's hero-grid CSS motif. */
export function grid(w, h, { size = 56, opacity = 0.05, color = "#FFFFFF" } = {}) {
  const lines = [];
  for (let x = 0; x <= w; x += size) lines.push(`M${x} 0V${h}`);
  for (let y = 0; y <= h; y += size) lines.push(`M0 ${y}H${w}`);
  return `<path d="${lines.join("")}" stroke="${color}" stroke-opacity="${opacity}" stroke-width="1" fill="none"/>`;
}

/** Scattered stars in the upper band of a night sky. */
export function stars(r, w, h, count = 90, maxY = 0.55) {
  let out = "";
  for (let i = 0; i < count; i++) {
    const x = n(rand(r, 0, w));
    const y = n(rand(r, 0, h * maxY));
    const rad = n(rand(r, 0.6, 1.9));
    const o = n(rand(r, 0.12, 0.5) * (1 - y / (h * maxY)));
    out += `<circle cx="${x}" cy="${y}" r="${rad}" fill="${C.cream}" opacity="${o}"/>`;
  }
  return out;
}

/** A polyline that reads as a rising market chart. */
export function chartLine(r, { x0, x1, yBase, amplitude, steps = 14, rise = 0.55 }) {
  const pts = [];
  const dx = (x1 - x0) / steps;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const drift = -rise * amplitude * t;
    const jitter = rand(r, -amplitude * 0.42, amplitude * 0.42);
    pts.push([n(x0 + i * dx), n(yBase + drift + jitter)]);
  }
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`).join("");
  return { path, points: pts };
}

/** Radial glow: returns the gradient def and the circle that uses it. */
export function glow(cx, cy, rad, color, opacity, id) {
  return {
    def: `<radialGradient id="${id}" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="${color}" stop-opacity="${opacity}"/>
        <stop offset="1" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>`,
    use: `<circle cx="${cx}" cy="${cy}" r="${rad}" fill="url(#${id})"/>`,
  };
}
