import Image from "next/image";
import { BookOpenCheck, MonitorPlay, Users2, ArrowRight, PlayCircle } from "lucide-react";

const FEATURES = [
  { icon: BookOpenCheck, label: "UPSC/IAS" },
  { icon: MonitorPlay, label: "PCS" },
  { icon: Users2, label: "RO/ARO" },
  { icon: BookOpenCheck, label: "UP TGT/PGT" },
  { icon: MonitorPlay, label: "DSSSB" },
  { icon: Users2, label: "KVS/NVS" },
  { icon: Users2, label: "LT Grade" },
];

const SCORE_STRIP = [
  { value: "14+", label: "Years Teaching" },
  { value: "50,000+", label: "Students Trained" },
  { value: "5500+", label: "Selections" },
  { value: "4.9/5", label: "Student Rating" },
];

function HeroWaveDivider({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Navy fill — gentler S-curve that stays left of the card column */}
      <path
        d="M 0 0
           C 38 2, 72 20, 58 38
           C 44 56, 32 74, 42 100
           L 100 100
           L 100 0
           Z"
        className="fill-navy-900"
      />
      {/* Gold stroke along the curve edge */}
      <path
        d="M 0 0
           C 38 2, 72 20, 58 38
           C 44 56, 32 74, 42 100"
        fill="none"
        className="stroke-gold-500"
        strokeWidth="2.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function HeroNavyDecorations() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 420 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path
        d="M -30 100 Q 160 40, 340 180 T 400 320"
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1.5"
      />
      <path
        d="M 20 380 Q 200 320, 380 460"
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1.2"
      />
      <path
        d="M -10 580 Q 150 520, 360 680"
        fill="none"
        stroke="rgba(247,201,40,0.1)"
        strokeWidth="1"
      />
      <circle
        cx="300"
        cy="140"
        r="110"
        fill="none"
        stroke="rgba(255,255,255,0.04)"
        strokeWidth="1"
      />
      <circle
        cx="80"
        cy="650"
        r="90"
        fill="none"
        stroke="rgba(255,255,255,0.035)"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pt-28 pb-10 sm:pb-14 lg:pt-36 lg:pb-16"
    >
      {/* Cream-side grid texture */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,27,58,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(7,27,58,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-6 lg:gap-x-8 gap-y-10 md:gap-y-8 items-center md:items-stretch md:min-h-[560px] lg:min-h-[600px] xl:min-h-[640px]">
          {/* Left — copy & CTAs */}
          <div className="animate-fade-up min-w-0 md:col-span-5 lg:col-span-5 md:flex md:flex-col md:justify-center">
            <span className="ribbon-tag inline-flex items-center bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1.5 pr-6 tracking-wide uppercase shadow-md shadow-gold-500/30">
              Admissions Open — 2026 Batch
            </span>

            <h1 className="mt-6 font-display font-extrabold text-navy-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Kisan Academy
            </h1>
            <p className="mt-3 font-display text-gold-600 text-xl sm:text-2xl font-semibold">
              Creator of Future
            </p>
            <p className="mt-5 text-muted text-base sm:text-lg max-w-lg leading-relaxed">
            Online Classes | Concept Based Learning | Structured Notes |
            Test Series | Doubt Support
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {FEATURES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-full bg-card border border-border-light px-4 py-2 text-sm font-medium text-navy-900 shadow-sm"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-navy-900 shrink-0">
                    <Icon size={14} strokeWidth={2.5} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-md bg-navy-900 px-7 py-3.5 text-base font-bold text-white hover:bg-navy-800 transition-colors shadow-lg shadow-navy-900/25"
              >
                Join Now/Contact us
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://drive.google.com/drive/folders/1Bw3aYtH8yXdiOOTrfOipNG6Qh_MScAt4?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border-2 border-navy-900 bg-card px-7 py-3.5 text-base font-semibold text-navy-900 hover:bg-gold-500/15 transition-colors"
              >
                <PlayCircle size={20} className="text-navy-900" />
                Free Demo
              </a>
            </div>
          </div>

          {/* Center — students photo (no card frame) */}
          <div className="animate-fade-up [animation-delay:100ms] relative z-[5] flex min-w-0 justify-center md:col-span-3 lg:col-span-3 md:items-center md:justify-center md:px-1 lg:px-2">
            <div className="hero-photo-frame relative aspect-[4/5] h-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-none md:h-full md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] md:aspect-auto">
              <Image
                src="/hero/students-studying.jpeg"
                alt="Kisan Academy students studying together"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                className="object-cover object-[28%_18%] scale-[1.04]"
                priority
              />
            </div>
          </div>

          {/* Right — Result Card on navy background */}
          <div className="relative isolate animate-fade-up [animation-delay:150ms] min-w-0 md:col-span-4 lg:col-span-4 md:col-start-9 flex justify-center md:justify-center md:items-center">
            {/* Full-bleed navy panel — anchored to this column, extends to viewport right */}
            <div
              className="pointer-events-none absolute inset-y-0 hidden md:block left-0 right-[calc(-50vw+50%)] bg-navy-900 z-0"
              aria-hidden="true"
            >
              <HeroNavyDecorations />
            </div>

            {/* Wave divider — full column height, sits behind card, left of navy panel */}
            <div
              className="pointer-events-none absolute inset-y-0 hidden md:block z-0 w-14 lg:w-[4.5rem] xl:w-20 -left-10 md:-left-12 lg:-left-14 xl:-left-16"
              aria-hidden="true"
            >
              <HeroWaveDivider className="h-full w-full" />
            </div>

            {/* Mobile-only straight navy backdrop (no wave) */}
            <div
              className="absolute inset-x-0 -inset-y-6 -mx-4 rounded-t-3xl bg-navy-900 md:hidden z-0"
              aria-hidden="true"
            >
              <HeroNavyDecorations />
            </div>

            <div className="relative z-20 w-full max-w-md md:max-w-sm lg:max-w-md py-6 md:py-10 lg:py-12">
              <div className="relative rounded-2xl bg-card text-ink shadow-2xl shadow-navy-900/15 overflow-hidden ring-2 ring-gold-500 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-2 before:bg-gold-500 before:z-10">
                <div className="perforated relative bg-navy-900 px-6 py-4 border-b-4 border-navy-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-[11px] font-bold uppercase tracking-widest">
                        Kisan Academy
                      </p>
                      <p className="text-white font-display font-bold text-lg">
                        Result Card
                      </p>
                    </div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-gold-400 font-display font-bold text-sm border-4 border-gold-500">
                      KA
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-px bg-border-light">
                  {SCORE_STRIP.map((s) => (
                    <div key={s.label} className="bg-card px-5 py-6">
                      <p className="font-display font-extrabold text-navy-900 text-2xl sm:text-3xl">
                        {s.value}
                      </p>
                      <p className="text-xs sm:text-sm text-muted font-medium mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-4 bg-gold-100 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold-500 ring-2 ring-gold-600/30" />
                  <p className="text-xs font-medium text-navy-900">
                    Verified track record, updated June 2026
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 rounded-xl bg-card px-4 py-3 shadow-xl border-2 border-gold-500 z-30">
                <span className="h-9 w-9 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-display font-bold text-sm">
                  ★
                </span>
                <div>
                  <p className="text-xs font-bold text-gold-600 leading-tight">
                    Top Rated
                  </p>
                  <p className="text-[11px] text-muted leading-tight">
                    Coaching Institute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
