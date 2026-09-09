import { C, commonDefs, finishLayers, glow, grid, n, rand, rng, stars, vignetteDef } from "./art.mjs";

/**
 * Abstract editorial compositions in the brand palette. Each motif is a
 * different visual idea, so cards and article headers stay distinguishable
 * while still reading as one family.
 */

/** Stroke scale: motifs are authored at 800px wide. */
export const K = (w) => w / 800;

function frame(w, h, seed, glowColor, body, {
  gridOpacity = 0.055,
  starCount = 0,
  glowX = 0.74,
  glowY = 0.24,
  /**
   * Page heroes are cropped hard top and bottom and their left half sits
   * under the headline, so hero artwork is scaled down and pushed right into
   * the area that actually stays visible.
   */
  hero = false,
} = {}) {
  const r = rng(seed);
  const warm = glow(w * glowX, h * glowY, Math.max(w, h) * 0.5, glowColor, 0.3, "g1");
  const cool = glow(w * 0.12, h * 0.86, Math.max(w, h) * 0.45, C.emerald600, 0.22, "g2");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    ${commonDefs()}
    ${vignetteDef("vignette", 0.45)}
    ${warm.def}${cool.def}
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.navy950}"/>
      <stop offset="0.55" stop-color="${C.navy900}"/>
      <stop offset="1" stop-color="${C.navy800}"/>
    </linearGradient>
    <linearGradient id="fadeDown" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0.05"/>
    </linearGradient>
    <mask id="gridMask"><rect width="${w}" height="${h}" fill="url(#fadeDown)"/></mask>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  ${starCount ? stars(r, w, h, starCount, 0.7) : ""}
  ${cool.use}${warm.use}
  <g mask="url(#gridMask)">${grid(w, h, { opacity: gridOpacity })}</g>
  ${hero ? `<g transform="translate(${n(0.75 * w - 0.5 * w * 0.62)} ${n(0.5 * h - 0.5 * h * 0.62)}) scale(0.62)">${body(r)}</g>` : body(r)}
  ${finishLayers(w, h, 0.05)}
</svg>`;
}

/** Three diverging paths from a common origin: comparing grant types. */
export function paths(w, h, seed, glowColor = C.gold, opts = {}) {
  return frame(w, h, seed, glowColor, (r) => {
    const k = K(w);
    const ox = w * 0.1;
    const oy = h * 0.62;
    const colors = [C.gold, C.emerald600, C.cream];
    let out = `<circle cx="${n(ox)}" cy="${n(oy)}" r="${n(7 * k)}" fill="${C.gold}" opacity="0.9"/>
      <circle cx="${n(ox)}" cy="${n(oy)}" r="${n(18 * k)}" fill="none" stroke="${C.gold}" stroke-opacity="0.35" stroke-width="${n(1.5 * k)}"/>`;
    for (let i = 0; i < 3; i++) {
      const endY = h * (0.2 + i * 0.28) + rand(r, -12, 12);
      const c1x = ox + w * 0.3;
      const c1y = oy + (endY - oy) * rand(r, 0.1, 0.35);
      const c2x = ox + w * 0.6;
      const c2y = endY + rand(r, -20, 20);
      const ex = w * 0.93;
      out += `<path d="M${n(ox)} ${n(oy)}C${n(c1x)} ${n(c1y)} ${n(c2x)} ${n(c2y)} ${n(ex)} ${n(endY)}"
        fill="none" stroke="${colors[i]}" stroke-opacity="${i === 0 ? 0.55 : 0.3}" stroke-width="${i === 0 ? 2.4 : 1.6}"/>
        <circle cx="${n(ex)}" cy="${n(endY)}" r="${n((i === 0 ? 6 : 4.5) * k)}" fill="${colors[i]}" opacity="${i === 0 ? 0.85 : 0.5}"/>`;
    }
    return out;
  }, opts);
}

/** Step columns with one highlighted gap: a shortfall. */
export function steps(w, h, seed, glowColor = C.gold, opts = {}) {
  return frame(w, h, seed, glowColor, (r) => {
    const k = K(w);
    const count = 9;
    const pad = w * 0.1;
    const span = w - pad * 2;
    const bw = (span / count) * 0.56;
    const baseY = h * 0.8;
    let out = `<path d="M${n(pad - 20)} ${n(baseY)}H${n(w - pad + 20)}" stroke="${C.cream}" stroke-opacity="0.18" stroke-width="${n(1.2 * k)}"/>`;
    const gapIndex = 6;
    for (let i = 0; i < count; i++) {
      const x = pad + (span / count) * i + (span / count - bw) / 2;
      const grow = 0.16 + (i / count) * 0.52;
      const bh = h * grow * rand(r, 0.9, 1.08);
      const isGap = i === gapIndex;
      out += `<rect x="${n(x)}" y="${n(baseY - bh)}" width="${n(bw)}" height="${n(bh)}" rx="${n(3 * k)}"
        fill="${isGap ? C.gold : C.navy600}" fill-opacity="${isGap ? 0.5 : 0.55}"/>`;
      if (isGap) {
        const withheld = bh * 0.58;
        out += `<rect x="${n(x)}" y="${n(baseY - bh)}" width="${n(bw)}" height="${n(bh - withheld)}" rx="${n(3 * k)}" fill="${C.gold}" fill-opacity="0.85"/>
          <path d="M${n(x - 10)} ${n(baseY - bh)}h${n(bw + 20)}" stroke="${C.gold300}" stroke-opacity="0.7" stroke-width="${n(1.4 * k)}" stroke-dasharray="${n(5 * k)} ${n(5 * k)}"/>`;
      }
    }
    return out;
  }, opts);
}

/** Arcs linking nodes across a horizon: distance, movement, remote work. */
export function arcs(w, h, seed, glowColor = C.emerald600, opts = {}) {
  return frame(w, h, seed, glowColor, () => {
    const k = K(w);
    const baseY = h * 0.78;
    const nodes = [0.08, 0.3, 0.5, 0.72, 0.94].map((t) => ({ x: w * t, y: baseY }));
    let out = `<path d="M0 ${n(baseY)}H${w}" stroke="${C.cream}" stroke-opacity="0.14" stroke-width="${n(1.2 * k)}"/>`;

    // Long-haul arcs spanning the whole frame, faint and high.
    out += `<path d="M${n(nodes[0].x)} ${n(baseY)}Q${n(w * 0.5)} ${n(h * -0.12)} ${n(nodes[4].x)} ${n(baseY)}"
      fill="none" stroke="${C.cream}" stroke-opacity="0.12" stroke-width="${n(1.2 * k)}"/>`;
    out += `<path d="M${n(nodes[1].x)} ${n(baseY)}Q${n(w * 0.55)} ${n(h * 0.04)} ${n(nodes[4].x)} ${n(baseY)}"
      fill="none" stroke="${C.emerald600}" stroke-opacity="0.26" stroke-width="${n(1.4 * k)}"/>`;

    // Primary route, drawn with a gold weight.
    out += `<path d="M${n(nodes[0].x)} ${n(baseY)}Q${n(w * 0.3)} ${n(h * 0.16)} ${n(nodes[2].x)} ${n(baseY)}"
      fill="none" stroke="${C.gold}" stroke-opacity="0.55" stroke-width="${n(2.2 * k)}"/>`;
    out += `<path d="M${n(nodes[2].x)} ${n(baseY)}Q${n(w * 0.72)} ${n(h * 0.2)} ${n(nodes[4].x)} ${n(baseY)}"
      fill="none" stroke="${C.gold}" stroke-opacity="0.35" stroke-width="${n(1.6 * k)}" stroke-dasharray="${n(8 * k)} ${n(7 * k)}"/>`;

    for (const [i, p] of nodes.entries()) {
      const big = i === 0 || i === 2 || i === 4;
      out += `<circle cx="${n(p.x)}" cy="${n(p.y)}" r="${n((big ? 6 : 3.5) * k)}" fill="${big ? C.gold : C.cream}" opacity="${big ? 0.9 : 0.4}"/>
        ${big ? `<circle cx="${n(p.x)}" cy="${n(p.y)}" r="${n(16 * k)}" fill="none" stroke="${C.gold}" stroke-opacity="0.3" stroke-width="${n(1.2 * k)}"/>` : ""}`;
    }
    return out;
  }, { starCount: 80, ...opts });
}

/** Stacked translucent bands growing over time: compounding, funding a goal. */
export function layers(w, h, seed, glowColor = C.emerald600, opts = {}) {
  return frame(w, h, seed, glowColor, () => {
    const k = K(w);
    const baseY = h * 0.86;
    const topY = h * 0.22;
    const bands = 4;
    const colors = [C.navy600, C.emerald, C.emerald600, C.gold];
    const steps = 16;

    // Cumulative growth curves; each band is the ribbon between two curves,
    // so the stack reads as contributions compounding over time.
    const curves = [];
    for (let b = 0; b <= bands; b++) {
      const share = b / bands;
      const pts = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const growth = Math.pow(t, 1.65);
        pts.push([n(w * (t * 1.12 - 0.06)), n(baseY - growth * (baseY - topY) * share)]);
      }
      curves.push(pts);
    }

    const toPath = (pts, reverse) =>
      (reverse ? [...pts].reverse() : pts).map((p, i) => `${i === 0 ? "L" : "L"}${p[0]} ${p[1]}`).join("");

    let out = `<path d="M0 ${n(baseY)}H${w}" stroke="${C.cream}" stroke-opacity="0.14" stroke-width="${n(1.2 * k)}"/>`;
    for (let b = 0; b < bands; b++) {
      const lower = curves[b];
      const upper = curves[b + 1];
      const d = `M${lower[0][0]} ${lower[0][1]}${toPath(lower)}${toPath(upper, true)}Z`;
      out += `<path d="${d}" fill="${colors[b]}" fill-opacity="${0.16 + b * 0.06}"/>`;
      const line = upper.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`).join("");
      const lead = b === bands - 1;
      out += `<path d="${line}" fill="none" stroke="${colors[b]}" stroke-opacity="${lead ? 0.8 : 0.4}" stroke-width="${n((lead ? 2.4 : 1.3) * k)}"/>`;
      if (lead) {
        for (const i of [8, 12, 16]) {
          out += `<circle cx="${upper[i][0]}" cy="${upper[i][1]}" r="${n(4.5 * k)}" fill="${C.gold300}" opacity="0.85"/>`;
        }
      }
    }
    return out;
  }, opts);
}

/** A timeline with milestone markers and one decision fork. */
export function timeline(w, h, seed, glowColor = C.gold, opts = {}) {
  return frame(w, h, seed, glowColor, () => {
    const k = K(w);
    const y = h * 0.62;
    const x0 = w * 0.06;
    const x1 = w * 0.94;
    let out = `<path d="M${n(x0)} ${n(y)}H${n(x1)}" stroke="${C.cream}" stroke-opacity="0.22" stroke-width="${n(1.6 * k)}"/>`;
    const ticks = 8;
    for (let i = 0; i <= ticks; i++) {
      const x = x0 + ((x1 - x0) / ticks) * i;
      const tall = i % 2 === 0;
      out += `<path d="M${n(x)} ${n(y - (tall ? 12 : 7))}V${n(y + (tall ? 12 : 7))}" stroke="${C.cream}" stroke-opacity="${tall ? 0.3 : 0.16}" stroke-width="${n(1.2 * k)}"/>`;
    }
    const forkX = x0 + (x1 - x0) * 0.46;
    out += `<circle cx="${n(forkX)}" cy="${n(y)}" r="${n(7 * k)}" fill="${C.gold}" opacity="0.9"/>
      <circle cx="${n(forkX)}" cy="${n(y)}" r="${n(19 * k)}" fill="none" stroke="${C.gold}" stroke-opacity="0.35" stroke-width="${n(1.4 * k)}"/>
      <path d="M${n(forkX)} ${n(y)}C${n(forkX + w * 0.14)} ${n(y - h * 0.06)} ${n(forkX + w * 0.24)} ${n(y - h * 0.3)} ${n(x1)} ${n(y - h * 0.34)}"
        fill="none" stroke="${C.gold}" stroke-opacity="0.6" stroke-width="${n(2.2 * k)}"/>
      <path d="M${n(forkX)} ${n(y)}C${n(forkX + w * 0.14)} ${n(y + h * 0.06)} ${n(forkX + w * 0.24)} ${n(y + h * 0.2)} ${n(x1)} ${n(y + h * 0.24)}"
        fill="none" stroke="${C.emerald600}" stroke-opacity="0.4" stroke-width="${n(1.6 * k)}" stroke-dasharray="${n(7 * k)} ${n(6 * k)}"/>
      <circle cx="${n(x1)}" cy="${n(y - h * 0.34)}" r="${n(6 * k)}" fill="${C.gold}" opacity="0.85"/>
      <circle cx="${n(x1)}" cy="${n(y + h * 0.24)}" r="${n(5 * k)}" fill="${C.emerald600}" opacity="0.6"/>`;
    return out;
  }, opts);
}

/** Overlapping panels: a set of coordinated services. */
export function panels(w, h, seed, glowColor = C.gold, opts = {}) {
  return frame(w, h, seed, glowColor, (r) => {
    const k = K(w);
    let out = "";
    const cards = 5;
    for (let i = 0; i < cards; i++) {
      const cw = w * rand(r, 0.19, 0.24);
      const ch = cw * rand(r, 0.66, 0.82);
      const x = w * (0.06 + i * 0.175) + rand(r, -8, 8);
      const y = h * (0.32 + (i % 2 === 0 ? -0.11 : 0.07)) + rand(r, -14, 14);
      const accent = i === 2;
      out += `<rect x="${n(x)}" y="${n(y)}" width="${n(cw)}" height="${n(ch)}" rx="${n(14 * k)}"
        fill="${C.navy800}" fill-opacity="0.5" stroke="${accent ? C.gold : C.cream}" stroke-opacity="${accent ? 0.5 : 0.16}" stroke-width="${n(1.3 * k)}"/>
        <path d="M${n(x + cw * 0.12)} ${n(y + ch * 0.72)}L${n(x + cw * 0.34)} ${n(y + ch * 0.5)}L${n(x + cw * 0.56)} ${n(y + ch * 0.6)}L${n(x + cw * 0.88)} ${n(y + ch * 0.28)}"
        fill="none" stroke="${accent ? C.gold : C.emerald600}" stroke-opacity="${accent ? 0.7 : 0.34}" stroke-width="${n(1.6 * k)}"/>`;
    }
    return out;
  }, opts);
}

/** Concentric orbits around a single point: one coordinated plan. */
export function orbit(w, h, seed, glowColor = C.gold, opts = {}) {
  return frame(w, h, seed, glowColor, (r) => {
    const k = K(w);
    const cx = w * 0.5;
    const cy = h * 0.56;
    let out = "";
    const rings = 5;
    for (let i = 1; i <= rings; i++) {
      const rad = (Math.min(w, h) * 0.09) * i;
      out += `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(rad)}" fill="none" stroke="${i === 3 ? C.gold : C.cream}" stroke-opacity="${i === 3 ? 0.35 : 0.13}" stroke-width="${i === 3 ? 1.6 : 1}"/>`;
      const a = rand(r, 0, Math.PI * 2);
      const px = cx + Math.cos(a) * rad;
      const py = cy + Math.sin(a) * rad;
      out += `<circle cx="${n(px)}" cy="${n(py)}" r="${n((i === 3 ? 6 : 4) * k)}" fill="${i === 3 ? C.gold : C.emerald600}" opacity="${i === 3 ? 0.9 : 0.5}"/>`;
    }
    out += `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(9 * k)}" fill="${C.gold}" opacity="0.9"/>`;
    return out;
  }, { glowX: 0.5, glowY: 0.5, ...opts });
}

/** A calm horizon with a rising line: long-term progress. */
export function horizonLine(w, h, seed, glowColor = C.gold, opts = {}) {
  return frame(w, h, seed, glowColor, (r) => {
    const k = K(w);
    const baseY = h * 0.76;
    const steps = 18;
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      pts.push([n(w * t), n(baseY - Math.pow(t, 1.35) * h * 0.42 + rand(r, -h * 0.02, h * 0.02))]);
    }
    const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`).join("");
    let out = `<path d="M0 ${n(baseY)}H${w}" stroke="${C.cream}" stroke-opacity="0.12" stroke-width="${n(1.2 * k)}"/>
      <path d="${line}L${w} ${n(baseY)}H0Z" fill="${C.gold}" fill-opacity="0.07"/>
      <path d="${line}" fill="none" stroke="${C.gold}" stroke-opacity="0.6" stroke-width="${n(2.2 * k)}"/>`;
    for (const i of [4, 9, 14, 18]) {
      out += `<circle cx="${pts[i][0]}" cy="${pts[i][1]}" r="${n(4.5 * k)}" fill="${C.gold300}" opacity="0.8"/>`;
    }
    return out;
  }, { starCount: 60, ...opts });
}

export const motifs = { paths, steps, arcs, layers, timeline, panels, orbit, horizonLine };
