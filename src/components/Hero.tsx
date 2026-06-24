import Image from "next/image";
import { BookOpenCheck, MonitorPlay, Users2, ArrowRight, PlayCircle } from "lucide-react";

const FEATURES = [
  { icon: BookOpenCheck, label: "TGT / PGT Preparation" },
  { icon: MonitorPlay, label: "Online Classes" },
  { icon: Users2, label: "Expert Guidance" },
];

const SCORE_STRIP = [
  { value: "14+", label: "Years Teaching" },
  { value: "50,000+", label: "Students Trained" },
  { value: "5500+", label: "Selections" },
  { value: "4.9/5", label: "Student Rating" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          <div className="animate-fade-up">
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

          <div className="animate-fade-up [animation-delay:100ms] mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full max-w-xs sm:max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-border-light shadow-xl shadow-navy-900/10">
              <Image
                src="/hero/students-studying.jpeg"
                alt="Kisan Academy students studying together"
                fill
                sizes="(max-width: 1024px) 320px, 360px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms] mx-auto w-full max-w-md">
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

            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 rounded-xl bg-card px-4 py-3 shadow-xl border-2 border-gold-500">
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
    </section>
  );
}
