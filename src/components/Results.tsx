"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

const TESTIMONIAL_IMAGES = Array.from(
  { length: 10 },
  (_, i) => `/testimonials/t${i + 1}.jpeg`
);

const MARQUEE_DURATION = 20;

function TestimonialMarquee() {
  const controls = useAnimationControls();
  const [paused, setPaused] = useState(false);
  const images = [...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES];

  useEffect(() => {
    if (!paused) {
      controls.start({
        x: "-50%",
        transition: {
          duration: MARQUEE_DURATION,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [paused, controls]);

  return (
    <div
      className="mt-12 overflow-hidden"
      onMouseEnter={() => {
        setPaused(true);
        controls.stop();
      }}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex w-max gap-5"
        animate={controls}
        initial={{ x: 0 }}
      >
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="shrink-0 w-[260px] rounded-xl overflow-hidden border-2 border-mustard-500 shadow-md shadow-mustard-500/20 hover:border-mustard-600 hover:shadow-mustard-500/30 transition-shadow"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={src}
                alt={`Student testimonial ${(i % 10) + 1}`}
                fill
                sizes="260px"
                className="object-cover"
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
    <section id="results" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-mustard-600 font-semibold text-sm uppercase tracking-widest">
            Proven Results
          </span>
          <h2 className="mt-3 font-display font-bold text-green-900 text-3xl sm:text-4xl">
            Student Results
          </h2>
          <p className="mt-4 text-green-800/80 text-base sm:text-lg">
            Real selections, real feedback — from students who put in the
            work with the right guidance.
          </p>
        </div>

        <TestimonialMarquee />
      </div>
    </section>
  );
}
