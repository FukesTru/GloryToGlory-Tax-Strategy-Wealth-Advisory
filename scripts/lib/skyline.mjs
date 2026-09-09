import { C, commonDefs, finishLayers, glow, grid, n, rand, randInt, rng, stars, vignetteDef } from "./art.mjs";

/* ---------------------------------------------------------------
   Landmark silhouettes — stylised, not literal reproductions.
---------------------------------------------------------------- */

const landmarks = {
  /** Transamerica-style pyramid with a spire. */
  pyramid(x, baseY, h, w) {
    const half = w / 2;
    const shoulder = baseY - h * 0.72;
    return `M${n(x - half)} ${n(baseY)}L${n(x - half * 0.42)} ${n(shoulder)}L${n(x)} ${n(baseY - h)}L${n(x + half * 0.42)} ${n(shoulder)}L${n(x + half)} ${n(baseY)}Z`;
  },
  /** Tapered tower with a rounded crown. */
  taperTower(x, baseY, h, w) {
    const half = w / 2;
    const topW = half * 0.58;
    const capY = baseY - h * 0.94;
    return `M${n(x - half)} ${n(baseY)}L${n(x - topW)} ${n(capY)}Q${n(x)} ${n(baseY - h)} ${n(x + topW)} ${n(capY)}L${n(x + half)} ${n(baseY)}Z`;
  },
  /** Observation tower: shaft, saucer, spire. */
  needle(x, baseY, h, w) {
    const shaft = w * 0.16;
    const saucerY = baseY - h * 0.74;
    const saucerW = w * 0.62;
    return [
      `M${n(x - w * 0.34)} ${n(baseY)}L${n(x - shaft)} ${n(saucerY + h * 0.08)}L${n(x + shaft)} ${n(saucerY + h * 0.08)}L${n(x + w * 0.34)} ${n(baseY)}Z`,
      `M${n(x - saucerW)} ${n(saucerY)}Q${n(x)} ${n(saucerY - h * 0.13)} ${n(x + saucerW)} ${n(saucerY)}Q${n(x)} ${n(saucerY + h * 0.08)} ${n(x - saucerW)} ${n(saucerY)}Z`,
      `M${n(x - w * 0.035)} ${n(saucerY - h * 0.05)}L${n(x)} ${n(baseY - h)}L${n(x + w * 0.035)} ${n(saucerY - h * 0.05)}Z`,
    ].join("");
  },
  /** Stepped crown with twin finials. */
  crownTower(x, baseY, h, w) {
    const half = w / 2;
    const crownY = baseY - h * 0.86;
    return [
      `M${n(x - half)} ${n(baseY)}V${n(crownY)}H${n(x + half)}V${n(baseY)}Z`,
      `M${n(x - half * 0.72)} ${n(crownY)}L${n(x - half * 0.5)} ${n(baseY - h)}L${n(x - half * 0.2)} ${n(crownY)}Z`,
      `M${n(x + half * 0.2)} ${n(crownY)}L${n(x + half * 0.5)} ${n(baseY - h)}L${n(x + half * 0.72)} ${n(crownY)}Z`,
    ].join("");
  },
  /** Slim tower topped by a mast. */
  spireTower(x, baseY, h, w) {
    const half = w / 2;
    const topY = baseY - h * 0.82;
    return [
      `M${n(x - half)} ${n(baseY)}V${n(topY + h * 0.06)}L${n(x - half * 0.68)} ${n(topY)}H${n(x + half * 0.68)}L${n(x + half)} ${n(topY + h * 0.06)}V${n(baseY)}Z`,
      `M${n(x - w * 0.03)} ${n(topY)}L${n(x)} ${n(baseY - h)}L${n(x + w * 0.03)} ${n(topY)}Z`,
    ].join("");
  },
};

/** Palm tree silhouette (Southern California). */
function palm(x, baseY, h, r) {
  const lean = rand(r, -h * 0.06, h * 0.06);
  const topX = x + lean;
  const topY = baseY - h;
  const trunk = `M${n(x - h * 0.016)} ${n(baseY)}Q${n(x + lean * 0.4)} ${n(baseY - h * 0.55)} ${n(topX - h * 0.012)} ${n(topY)}L${n(topX + h * 0.012)} ${n(topY)}Q${n(x + lean * 0.4 + h * 0.02)} ${n(baseY - h * 0.55)} ${n(x + h * 0.016)} ${n(baseY)}Z`;
  let fronds = "";
  const count = randInt(r, 6, 8);
  for (let i = 0; i < count; i++) {
    const a = (Math.PI / (count - 1)) * i + Math.PI;
    const len = h * rand(r, 0.2, 0.32);
    const ex = topX + Math.cos(a) * len;
    const ey = topY + Math.sin(a) * len * 0.62 + len * 0.28;
    const cx = topX + Math.cos(a) * len * 0.5;
    const cy = topY + Math.sin(a) * len * 0.5 - len * 0.16;
    fronds += `M${n(topX)} ${n(topY)}Q${n(cx)} ${n(cy)} ${n(ex)} ${n(ey)}Q${n(cx)} ${n(cy + len * 0.1)} ${n(topX)} ${n(topY)}Z`;
  }
  return trunk + fronds;
}

/* ---------------------------------------------------------------
   Building layers
---------------------------------------------------------------- */

/**
 * Height envelope across the frame: a soft bell so the skyline rises into a
 * downtown cluster and falls away at the edges, instead of a flat comb.
 */
function profile(t, peak, spread, floorV) {
  const g = Math.exp(-Math.pow((t - peak) / spread, 2));
  return floorV + (1 - floorV) * g;
}

function buildingLayer(r, opts) {
  const {
    w, baseY, minH, maxH, minW, maxW, gap,
    windows = 0, windowOpacity = 0.5, marks = [],
    peak = 0.56, spread = 0.34, floorV = 0.38,
  } = opts;
  const shapes = [];
  const lights = [];
  const markQueue = [...marks];
  let x = -rand(r, 20, 90);

  while (x < w + 40) {
    const t = (x + minW / 2) / w;
    const env = profile(t, peak, spread, floorV);
    const bw = rand(r, minW, maxW);
    const bh = rand(r, minH, maxH) * env;

    // Place a landmark roughly where it was requested along the skyline.
    const nextMark = markQueue[0];
    if (nextMark && x / w >= nextMark.at) {
      markQueue.shift();
      const mh = maxH * nextMark.scale * Math.max(0.82, profile(x / w, peak, spread, floorV));
      const mw = bw * (nextMark.width ?? 1.15);
      shapes.push(landmarks[nextMark.kind](x + mw / 2, baseY, mh, mw));
      x += mw + gap;
      continue;
    }

    // Occasional setback tower rather than a plain box.
    if (r() < 0.22) {
      const inset = bw * rand(r, 0.16, 0.3);
      const stepY = baseY - bh * rand(r, 0.55, 0.75);
      shapes.push(
        `M${n(x)} ${n(baseY)}V${n(stepY)}H${n(x + inset)}V${n(baseY - bh)}H${n(x + bw - inset)}V${n(stepY)}H${n(x + bw)}V${n(baseY)}Z`,
      );
    } else {
      shapes.push(`M${n(x)} ${n(baseY)}V${n(baseY - bh)}H${n(x + bw)}V${n(baseY)}Z`);
      if (r() < 0.3) {
        const ax = x + bw / 2;
        shapes.push(`M${n(ax - 1.5)} ${n(baseY - bh)}L${n(ax)} ${n(baseY - bh - rand(r, 14, 46))}L${n(ax + 1.5)} ${n(baseY - bh)}Z`);
      }
    }

    // Window lights on the nearest layer.
    if (windows > 0) {
      const cols = Math.max(1, Math.floor(bw / 13));
      const rows = Math.max(1, Math.floor(bh / 17));
      for (let cI = 0; cI < cols; cI++) {
        for (let rI = 0; rI < rows; rI++) {
          if (r() > windows * (0.55 + env * 0.85)) continue;
          const wx = x + 6 + cI * 13;
          const wy = baseY - bh + 12 + rI * 17;
          if (wy > baseY - 6) continue;
          lights.push(
            `<rect x="${n(wx)}" y="${n(wy)}" width="3.4" height="4.6" fill="${r() < 0.78 ? C.gold300 : C.cream}" opacity="${n(rand(r, 0.18, windowOpacity))}"/>`,
          );
        }
      }
    }
    x += bw + gap;
  }
  return { path: shapes.join(""), lights: lights.join("") };
}

/* ---------------------------------------------------------------
   Full skyline scene
---------------------------------------------------------------- */

export function skyline({
  width: w,
  height: h,
  seed,
  glowX = 0.72,
  glowColor = C.gold,
  glowOpacity = 0.3,
  water = false,
  palms = 0,
  marks = [],
  horizon = 0.78,
  peak = 0.56,
  spread = 0.34,
  floorV = 0.36,
}) {
  const r = rng(seed);
  const baseY = h * horizon;

  const warm = glow(w * glowX, baseY - h * 0.16, h * 0.62, glowColor, glowOpacity, "warmGlow");
  const cool = glow(w * 0.14, h * 0.2, h * 0.55, C.emerald600, 0.2, "coolGlow");

  const far = buildingLayer(r, {
    w, baseY: baseY + 2, minH: h * 0.07, maxH: h * 0.26, minW: 26, maxW: 62, gap: 7,
    peak: peak + 0.08, spread: 0.42, floorV: 0.5,
  });
  const mid = buildingLayer(r, {
    w,
    baseY: baseY + 2,
    minH: h * 0.12,
    maxH: h * 0.42,
    minW: 30, maxW: 74, gap: 9,
    peak: peak + 0.03, spread: 0.36, floorV: 0.4,
    marks: marks.filter((m) => m.layer === "mid"),
  });
  const near = buildingLayer(r, {
    w,
    baseY: baseY + 2,
    minH: h * 0.14,
    maxH: h * 0.66,
    minW: 38, maxW: 92, gap: 12,
    windows: 0.2,
    peak, spread, floorV,
    marks: marks.filter((m) => m.layer !== "mid"),
  });

  let palmArt = "";
  for (let i = 0; i < palms; i++) {
    const px = w * (0.06 + i * 0.11) + rand(r, -20, 20);
    palmArt += palm(px, baseY + h * (water ? 0.02 : 0.05), h * rand(r, 0.32, 0.5), r);
  }

  const waterArt = water
    ? `
      <rect x="0" y="${n(baseY)}" width="${w}" height="${n(h - baseY)}" fill="url(#waterGrad)"/>
      <g transform="translate(0 ${n(baseY * 2)}) scale(1 -1)" opacity="0.2" filter="url(#soft)">
        <path d="${near.path}" fill="${C.navy950}"/>
      </g>
      <rect x="0" y="${n(baseY)}" width="${w}" height="${n(h - baseY)}" fill="url(#waterFade)"/>
      <path d="M0 ${n(baseY)}H${w}" stroke="${glowColor}" stroke-opacity="0.22" stroke-width="1.4"/>
      <g>${Array.from({ length: 34 }, () => {
        const y = n(rand(r, baseY + 8, h));
        const x0 = n(rand(r, -40, w * 0.85));
        const len = n(rand(r, 60, 320));
        const warmLine = r() < 0.3;
        return `<path d="M${x0} ${y}h${len}" stroke="${warmLine ? C.gold300 : C.cream}" stroke-opacity="${n(rand(r, 0.025, warmLine ? 0.1 : 0.07))}" stroke-width="${n(rand(r, 1, 2.4))}"/>`;
      }).join("")}</g>`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    ${commonDefs()}
    ${vignetteDef("vignette", 0.55)}
    ${warm.def}${cool.def}
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.navy950}"/>
      <stop offset="0.55" stop-color="${C.navy900}"/>
      <stop offset="1" stop-color="${C.navy800}"/>
    </linearGradient>
    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.navy900}"/>
      <stop offset="1" stop-color="${C.navy950}"/>
    </linearGradient>
    <linearGradient id="horizonGlow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${glowColor}" stop-opacity="0"/>
      <stop offset="0.72" stop-color="${glowColor}" stop-opacity="0.26"/>
      <stop offset="1" stop-color="${glowColor}" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="waterFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.navy950}" stop-opacity="0.25"/>
      <stop offset="1" stop-color="${C.navy950}" stop-opacity="0.92"/>
    </linearGradient>
    <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
      <stop offset="0.7" stop-color="#ffffff" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <mask id="gridMask"><rect width="${w}" height="${h}" fill="url(#gridFade)"/></mask>
    <linearGradient id="groundGlow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${glowColor}" stop-opacity="0.14"/>
      <stop offset="1" stop-color="${glowColor}" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.navy900}" stop-opacity="0"/>
      <stop offset="1" stop-color="${C.navy950}" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#sky)"/>
  ${stars(r, w, h, 120, horizon * 0.82)}
  ${cool.use}
  ${warm.use}
  <g mask="url(#gridMask)">${grid(w, h, { opacity: 0.05 })}</g>

  <g opacity="0.42"><path d="${far.path}" fill="${C.navy700}"/></g>
  <rect x="0" y="${n(baseY - h * 0.3)}" width="${w}" height="${n(h * 0.32)}" fill="url(#horizonGlow)" opacity="0.75"/>
  <g opacity="0.72"><path d="${mid.path}" fill="${C.navy800}"/></g>
  <path d="${near.path}" fill="${C.navy950}"/>
  ${near.lights}
  ${palmArt ? `<path d="${palmArt}" fill="${C.navy950}" opacity="0.96"/>` : ""}
  ${waterArt}
  ${water ? "" : `<rect x="0" y="${n(baseY - 2)}" width="${w}" height="${n(h - baseY + 2)}" fill="${C.navy950}"/>
    <rect x="0" y="${n(baseY - h * 0.06)}" width="${w}" height="${n(h * 0.1)}" fill="url(#groundGlow)"/>`}
  ${finishLayers(w, h, 0.05)}
</svg>`;
}
