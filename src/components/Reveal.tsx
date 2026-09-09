"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Seconds. Use small values to stagger cards. */
  delay?: number;
  /** Render as a different element (defaults to div). */
  as?: "div" | "section" | "li" | "article";
}

/**
 * Slow, subtle fade-up on scroll. Plays once. Honors prefers-reduced-motion.
 * A <noscript> rule in the root layout makes content visible without JS.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      data-reveal=""
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
