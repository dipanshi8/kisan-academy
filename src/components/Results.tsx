"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

const TESTIMONIAL_IMAGES = Array.from(
  { length: 10 },
  (_, i) => `/testimonials/t${i + 1}.jpeg`
);

const MARQUEE_DURATION = 20;
const HOVER_SPEED = 0.08;

function TestimonialMarquee() {
  const stripRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speed = useRef(1);
  const targetSpeed = useRef(1);
  const halfWidth = useRef(0);
  const images = [...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES];

  useEffect(() => {
    const measure = () => {
      if (stripRef.current) {
        halfWidth.current = stripRef.current.scrollWidth / 2;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (halfWidth.current <= 0) return;

    const easeFactor = 1 - Math.exp(-delta / 180);
    speed.current += (targetSpeed.current - speed.current) * easeFactor;

    const pixelsPerMs = halfWidth.current / (MARQUEE_DURATION * 1000);
    let next = x.get() - pixelsPerMs * delta * speed.current;
    if (next <= -halfWidth.current) next += halfWidth.current;
    x.set(next);
  });

  return (
    <div
      className="mt-12 overflow-hidden py-2 min-h-[396px] sm:min-h-[456px]"
      onMouseEnter={() => {
        targetSpeed.current = HOVER_SPEED;
      }}
      onMouseLeave={() => {
        targetSpeed.current = 1;
      }}
    >
      <motion.div
        ref={stripRef}
        className="flex w-max gap-4 sm:gap-6"
        style={{ x }}
      >
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="shrink-0 w-[min(280px,85vw)] sm:w-[320px] rounded-xl overflow-hidden border-2 border-mustard-400/70 bg-cream shadow-lg shadow-mustard-500/25 [@media(hover:hover)]:hover:border-mustard-400 [@media(hover:hover)]:hover:shadow-mustard-500/40 transition-shadow duration-300"
          >
            <div className="relative w-full h-[380px] sm:h-[440px] bg-cream">
              <Image
                src={src}
                alt={`Student testimonial ${(i % 10) + 1}`}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-contain p-3"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Results() {
  return (
    <section
      id="results"
      className="bg-green-900 py-20 lg:py-28 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.2]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212,160,23,0.55) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-mustard-400 font-semibold text-sm uppercase tracking-widest">
            Proven Results
          </span>
          <div
            className="mt-3 h-1 w-16 rounded-full bg-mustard-500"
            aria-hidden="true"
          />
          <h2 className="mt-4 font-display font-bold text-white text-3xl sm:text-4xl">
            Student Results
          </h2>
          <p className="mt-4 text-green-100/80 text-base sm:text-lg">
            Real selections, real feedback — from students who put in the
            work with the right guidance.
          </p>
        </div>

        <TestimonialMarquee />
      </div>
    </section>
  );
}
