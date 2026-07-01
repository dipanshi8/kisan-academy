"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { BookOpenCheck, MonitorPlay, Users2, ArrowRight, PlayCircle } from "lucide-react";

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

const FEATURES = [
  { icon: BookOpenCheck, label: "UPSC/IAS" },
  { icon: MonitorPlay,   label: "PCS" },
  { icon: Users2,        label: "RO/ARO" },
  { icon: BookOpenCheck, label: "UP TGT/PGT" },
  { icon: MonitorPlay,   label: "DSSSB" },
  { icon: Users2,        label: "KVS/NVS" },
  { icon: Users2,        label: "LT Grade" },
];

const SCORE_STRIP = [
  { end: 14,    suffix: "+",   decimals: 0, label: "Years Teaching"    },
  { end: 50000, suffix: "+",   decimals: 0, label: "Students Trained",  thousands: true },
  { end: 5500,  suffix: "+",   decimals: 0, label: "Selections"         },
  { end: 4.9,   suffix: "/5",  decimals: 1, label: "Student Rating"     },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const leftContainerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const ribbonVariants: Variants = {
  hidden:  { opacity: 0, x: -22 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 22 } },
};

const wordVariants: Variants = {
  hidden:  { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 1.0 },
  },
};

const headingVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 22 } },
};

const ruleVariants: Variants = {
  hidden:  { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const pillsContainerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const pillVariants: Variants = {
  hidden:  { opacity: 0, y: 10, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const cardVariants: Variants = {
  hidden:  { opacity: 0, x: 64, scale: 0.96 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { type: "spring", stiffness: 75, damping: 18, delay: 0.15 },
  },
};

const badgeVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.65, y: 12 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring", stiffness: 200, damping: 16, delay: 0.55 },
  },
};

// ---------------------------------------------------------------------------
// Count-up hook
// ---------------------------------------------------------------------------

function useCountUp(
  end: number,
  decimals: number,
  thousands: boolean,
  triggered: boolean,
) {
  const countRef = useRef<HTMLSpanElement>(null);
  const rafRef   = useRef<number | null>(null);
  const DURATION = 2000;

  useEffect(() => {
    if (!triggered || !countRef.current) return;
    const el        = countRef.current;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      const current  = ease * end;

      let display: string;
      if (decimals > 0)       display = current.toFixed(decimals);
      else if (thousands)     display = Math.round(current).toLocaleString("en-IN");
      else                    display = String(Math.round(current));
      el.textContent = display;

      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggered]);

  return countRef;
}

// ---------------------------------------------------------------------------
// StatCell
// ---------------------------------------------------------------------------

function StatCell({ end, suffix, decimals, label, thousands, inView }: {
  end: number; suffix: string; decimals: number;
  label: string; thousands?: boolean; inView: boolean;
}) {
  const countRef = useCountUp(end, decimals, thousands ?? false, inView);
  return (
    <div className="bg-card px-5 py-7 relative overflow-hidden group/stat">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover/stat:from-gold-500/[0.04] group-hover/stat:to-transparent transition-all duration-300" />
      <p className="relative font-display font-extrabold text-navy-900 text-[1.45rem] sm:text-[1.6rem] lg:text-[1.75rem] leading-none tracking-tight">
        <span ref={countRef}>{decimals > 0 ? (0).toFixed(decimals) : "0"}</span>
        <span>{suffix}</span>
      </p>
      <p className="relative text-[11px] sm:text-xs text-muted font-semibold mt-1.5 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Wave Divider — refined: reduced outer glow by ~25%, smoother curve
// ---------------------------------------------------------------------------

function HeroWaveDivider({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <filter id="gold-glow" x="-30%" y="-10%" width="160%" height="120%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" /><feMergeNode in="blur2" /><feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="dash-glow" x="-30%" y="-10%" width="160%" height="120%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Layer 1 — Navy fill */}
      <path d="M 0 0 C 55 3, 88 22, 65 45 C 42 68, 28 78, 44 100 L 100 100 L 100 0 Z" fill="#071B3A" />
      {/* Layer 2 — Soft gold halo (reduced from 0.12 → 0.09) */}
      <path d="M 0 0 C 55 3, 88 22, 65 45 C 42 68, 28 78, 44 100"
        fill="none" stroke="#F7C928" strokeWidth="5" opacity="0.09" vectorEffect="non-scaling-stroke" />
      {/* Layer 3 — Crisp gold stroke */}
      <path d="M 0 0 C 55 3, 88 22, 65 45 C 42 68, 28 78, 44 100"
        fill="none" stroke="#F7C928" strokeWidth="1.8" vectorEffect="non-scaling-stroke" filter="url(#gold-glow)" />
      {/* Layer 4 — Dashed companion */}
      <path d="M -4 0 C 48 4, 80 25, 57 48 C 34 71, 20 81, 36 100"
        fill="none" stroke="#F7C928" strokeWidth="1" strokeDasharray="5 6" opacity="0.28"
        vectorEffect="non-scaling-stroke" filter="url(#dash-glow)" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Navy decorations SVG — reduced opacity for cleaner backdrop
// ---------------------------------------------------------------------------

function HeroNavyDecorations() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 560 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Quieter dots — reduced from 0.06 to 0.04 */}
        <pattern id="navy-dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.85" fill="rgba(255,255,255,0.04)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#navy-dots)" />

      {/* Decorative arcs — reduced opacity */}
      <path d="M -30 80 Q 200 15, 430 190 T 540 370"
        fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.2" />
      <path d="M 20 380 Q 250 310, 500 470"
        fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <path d="M -10 590 Q 190 520, 450 690"
        fill="none" stroke="rgba(247,201,40,0.07)" strokeWidth="1" />

      {/* Orbit ellipses — reduced */}
      <ellipse cx="390" cy="155" rx="140" ry="105"
        fill="none" stroke="rgba(255,255,255,0.028)" strokeWidth="1" />
      <ellipse cx="390" cy="155" rx="80" ry="60"
        fill="none" stroke="rgba(247,201,40,0.045)" strokeWidth="0.7" strokeDasharray="4 5" />

      {/* Particle dots — kept, they add life without noise */}
      <circle cx="310" cy="60"  r="1.5" fill="rgba(247,201,40,0.22)" />
      <circle cx="460" cy="230" r="1.2" fill="rgba(255,255,255,0.16)" />
      <circle cx="80"  cy="320" r="1"   fill="rgba(247,201,40,0.15)" />
      <circle cx="500" cy="500" r="1.5" fill="rgba(255,255,255,0.12)" />
      <circle cx="200" cy="700" r="1.2" fill="rgba(247,201,40,0.17)" />

      {/* Subtle glow blobs — kept at low opacity */}
      <circle cx="470" cy="95"  r="80" fill="rgba(247,201,40,0.035)" />
      <circle cx="420" cy="710" r="70" fill="rgba(247,201,40,0.025)" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Hero Section
//
// Architecture: same as every other section on this page.
//   <section>              — owns background, height, overflow, stacking context
//     decorative layers    — absolute, behind everything (z-0)
//     <container div>      — mx-auto max-w-7xl px-4 sm:px-6 lg:px-8, z-10
//       <grid>             — arranges content only, no min-height
//         left column      — copy & CTAs
//         right column     — Result Card (plain div, no positioning or isolate)
//       </grid>
//     </container>
//   </section>
//
// The split background (cream left / navy right) is owned by the <section>:
//   • bg-cream on <section> covers the full width baseline
//   • A navy absolute panel covers right-[50%..viewport-edge], inset-y-0
//     → height always equals the section height, not the grid height
//   • The wave divider is absolute on the section, at the split boundary
//     → height always equals the section height
// ---------------------------------------------------------------------------

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const cardRef    = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-80px" });

  const leftRef    = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });

  const initial = shouldReduceMotion ? "visible" : "hidden";
  const animate = (inView: boolean) => (shouldReduceMotion || inView ? "visible" : "hidden");

  return (
    <section
      id="home"
      className="
        relative isolate overflow-hidden
        bg-cream
        pt-28 pb-16 sm:pt-28 sm:pb-20
        lg:pt-40 lg:pb-28
        min-h-screen lg:min-h-[calc(100vh-72px)]
      "
    >

      {/* ── Cream-side: subtle grid texture (softer than before) ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,27,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(7,27,58,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* ── Cream-side: warm gold radial glow (very soft) ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 12% 50%, rgba(247,201,40,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* ── Cream-side: top-right gold accent blob ── */}
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-[22rem] w-[22rem] rounded-full bg-gold-500/[0.11] blur-[80px] z-0"
        aria-hidden="true"
      />

      {/* ── Navy panel — right half of section, full section height ──
          Starts at the optical column boundary.
          left-[calc(50%+1rem)] shifts slightly right of viewport center
          to account for the gap-x-8 (2rem) between the two columns,
          so the divider lands visually at the column gap rather than at 50vw.
      ── */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 bg-navy-900 z-0 hidden md:block"
        style={{ left: "calc(50% + 1rem)" }}
        aria-hidden="true"
      >
        {/* Navy depth gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 90% 70% at 65% 42%, #0D2D55 0%, #071B3A 50%, #051428 100%)",
              "radial-gradient(ellipse 55% 35% at 15% 88%, #0B2347 0%, transparent 60%)",
            ].join(", "),
          }}
        />
        {/* Focused ambient glow — tighter, directly behind card position */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 220px at 44% 50%, rgba(247,201,40,0.08) 0%, transparent 60%)",
          }}
        />
        <HeroNavyDecorations />
      </div>

      {/* ── Wave divider — section-level, full section height ──
          Width changes per breakpoint; left position is calculated as
          (50% + gap-half - width) so the RIGHT edge always meets the navy panel.
          md:  width=7rem,  gap-half≈1rem  → left = 50% - 6rem
          lg:  width=9rem,  gap-half=1rem  → left = 50% - 8rem
          xl:  width=11rem, gap-half=1rem  → left = 50% - 10rem
      ── */}
      <div
        className="
          pointer-events-none absolute inset-y-0 z-[1] hidden md:block
          w-[7rem] lg:w-[9rem] xl:w-[11rem]
          left-[calc(50%-6rem)] lg:left-[calc(50%-8rem)] xl:left-[calc(50%-10rem)]
        "
        aria-hidden="true"
      >
        <HeroWaveDivider className="h-full w-full" />
      </div>

      {/* ── Mobile: navy backdrop ──
          Uses a gradient that fades from transparent cream to navy,
          creating a smooth transition instead of a hard cut.
          Covers the card area on mobile without visually jarring the layout.
      ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 md:hidden z-0"
        style={{ top: "52%", background: "linear-gradient(to bottom, transparent 0%, #071B3A 12%, #071B3A 100%)" }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% 15%, #0D2D55 0%, transparent 70%)",
          }}
        />
        <HeroNavyDecorations />
      </div>

      {/* ================================================================
          CONTENT — z-10, sits above all background layers.
          Container matches every other section exactly:
            mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
      ================================================================ */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Grid — content arrangement only. No min-height.
            6/6 column split gives equal visual weight to both sides.
            items-center vertically centers both columns. */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-6 lg:gap-x-8 items-center">

          {/* ── LEFT — Copy & CTAs ──────────────────────────────────── */}
          <motion.div
            ref={leftRef}
            variants={leftContainerVariants}
            initial={initial}
            animate={animate(leftInView)}
            className="
              md:col-span-6
              md:flex md:flex-col md:justify-center
              md:pr-6 lg:pr-10
              pt-8 pb-12 md:py-16 lg:py-20
            "
          >
            {/* Ribbon */}
            <motion.span
              variants={ribbonVariants}
              className="ribbon-tag inline-flex items-center gap-2 bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1.5 pr-6 tracking-wide uppercase shadow-lg shadow-gold-500/35 transition-transform duration-200 hover:scale-[1.02] w-fit"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-navy-900/60 animate-pulse" />
              Admissions Open — 2026 Batch
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={headingVariants}
              className="mt-7 font-display font-extrabold text-navy-900 text-4xl sm:text-5xl md:text-[2.75rem] lg:text-[3.5rem] xl:text-[3.75rem] tracking-[-0.02em] leading-[1.0] flex flex-wrap gap-x-[0.25em]"
              aria-label="Kisan Academy"
            >
              {["Kisan", "Academy"].map((word) => (
                <motion.span key={word} variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-3 font-display text-gold-600 text-xl sm:text-2xl font-semibold tracking-wide"
            >
              Creator of Future
            </motion.p>

            {/* Tapering gold rule — single element, cleaner reveal */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-3 overflow-hidden"
            >
              <motion.div
                variants={ruleVariants}
                className="flex items-center gap-1.5 origin-left"
              >
                <span className="h-[2px] w-10 rounded-full bg-gold-500 block" />
                <span className="h-[2px] w-4  rounded-full bg-gold-500/40 block" />
                <span className="h-[2px] w-2  rounded-full bg-gold-500/20 block" />
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-5 text-muted text-base sm:text-[1.05rem] leading-relaxed tracking-[0.01em]"
            >
              Online Classes | Concept Based Learning | Structured Notes |
              Test Series | Doubt Support
            </motion.p>

            {/* Category pills — consistent sizing, tighter gap */}
            <motion.ul variants={pillsContainerVariants} className="mt-8 flex flex-wrap gap-2">
              {FEATURES.map(({ icon: Icon, label }) => (
                <motion.li
                  key={label}
                  variants={pillVariants}
                  whileHover={{ y: -2, scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                  className="group flex items-center gap-2 rounded-full bg-card border border-border-light px-3.5 py-1.5 text-[13px] font-semibold text-navy-900 shadow-sm cursor-pointer select-none transition-all duration-200 hover:bg-gold-500/10 hover:shadow-md hover:shadow-gold-500/10 hover:border-gold-500/40 hover:text-navy-800"
                >
                  <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gold-500 text-navy-900 shrink-0 transition-transform duration-300 group-hover:rotate-[15deg]">
                    <Icon size={12} strokeWidth={2.5} />
                  </span>
                  {label}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA buttons — premium tactile feel */}
            <motion.div variants={fadeUpVariants} className="mt-8 flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -3, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                whileTap={{ scale: 0.97, y: 0 }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-navy-900 px-7 py-[14px] text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(7,27,58,0.3)] hover:bg-navy-800 hover:shadow-[0_8px_24px_rgba(7,27,58,0.4)] transition-all duration-200 w-full sm:w-auto"
              >
                Join Now / Contact us
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </motion.a>

              <motion.a
                href="https://drive.google.com/drive/folders/1Bw3aYtH8yXdiOOTrfOipNG6Qh_MScAt4?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-navy-900/80 bg-card px-7 py-[13px] text-[15px] font-semibold text-navy-900 hover:bg-gold-500/15 hover:border-gold-500 hover:shadow-md hover:shadow-gold-500/20 transition-all duration-200 w-full sm:w-auto"
              >
                <PlayCircle size={18} className="text-navy-900 transition-transform duration-300 group-hover:rotate-[15deg]" />
                Free Demo
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Result Card ──────────────────────────────────────
              Plain grid column — no positioning, no isolate.
              Navy background comes from section-level panel.
              md:pl-4/lg:pl-6 pulls card slightly toward divider for visual flow.
          ─────────────────────────────────────────────────────────────── */}
          <div className="md:col-span-6 md:col-start-7 flex justify-center md:justify-start items-center md:pl-4 lg:pl-6">

            {/* Result Card wrapper — ~10% larger than previous, left-aligned on md+ */}
            <motion.div
              ref={cardRef}
              variants={cardVariants}
              initial={initial}
              animate={animate(cardInView)}
              className="
                relative w-full
                max-w-[360px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[420px]
                pt-8 pb-16 sm:pb-14
                md:py-14 md:pb-16
                lg:py-16 lg:pb-20
              "
            >
              {/* Ambient glow — stronger, centered behind card */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: "0 0 80px 20px rgba(247,201,40,0.1), 0 0 160px 50px rgba(247,201,40,0.04)",
                  zIndex: -1,
                }}
                aria-hidden="true"
              />

              {/* Card — premium shadow, ring, hover */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6, rotate: 0.7, transition: { type: "spring", stiffness: 280, damping: 20 } }}
                className="relative rounded-2xl bg-card text-ink overflow-hidden ring-2 ring-gold-500 ring-offset-[3px] ring-offset-navy-900 shadow-[0_28px_70px_rgba(7,27,58,0.45),0_10px_28px_rgba(7,27,58,0.28),0_0_0_1px_rgba(247,201,40,0.14)] before:absolute before:right-0 before:top-0 before:bottom-0 before:w-[7px] before:bg-gradient-to-b before:from-gold-400 before:via-gold-500 before:to-gold-600 before:z-10 hover:shadow-[0_36px_88px_rgba(7,27,58,0.55),0_14px_36px_rgba(7,27,58,0.32),0_4px_20px_rgba(247,201,40,0.2)] transition-shadow duration-300"
              >
                {/* Card header */}
                <div className="perforated relative bg-navy-900 px-6 py-5 border-b-[3px] border-navy-800">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Kisan Academy</p>
                      <p className="text-white font-display font-bold text-[1.1rem] mt-0.5">Result Card</p>
                    </div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-gold-400 font-display font-bold text-sm border-[3px] border-gold-500 shadow-[0_0_12px_rgba(247,201,40,0.3)]">
                      KA
                    </span>
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 divide-x divide-y divide-border-light">
                  {SCORE_STRIP.map((s) => (
                    <StatCell
                      key={s.label}
                      end={s.end}
                      suffix={s.suffix}
                      decimals={s.decimals}
                      label={s.label}
                      thousands={s.thousands}
                      inView={cardInView}
                    />
                  ))}
                </div>

                {/* Card footer */}
                <div className="px-6 py-4 bg-gold-100 border-t border-gold-500/20 flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-500 ring-2 ring-gold-600/30" />
                  </span>
                  <p className="text-[11px] font-semibold text-navy-900 tracking-wide">
                    Verified track record · Updated June 2026
                  </p>
                </div>
              </motion.div>

              {/* Top Rated badge */}
              <motion.div
                variants={badgeVariants}
                initial={initial}
                animate={animate(cardInView)}
                className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2.5 rounded-xl bg-card px-4 py-3 shadow-[0_8px_32px_rgba(7,27,58,0.2),0_2px_8px_rgba(247,201,40,0.15)] border-2 border-gold-500 z-30"
              >
                <motion.span
                  whileHover={shouldReduceMotion ? {} : { scale: 1.15, rotate: 10, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                  className="h-9 w-9 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-display font-bold text-base shadow-md shadow-gold-500/30 cursor-default"
                >
                  ★
                </motion.span>
                <div>
                  <p className="text-[12px] font-bold text-gold-600 leading-tight">Top Rated</p>
                  <p className="text-[10px] text-muted leading-tight font-medium">Coaching Institute</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
