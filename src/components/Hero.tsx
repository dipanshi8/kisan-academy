import { BookOpenCheck, MonitorPlay, Users2, ArrowRight, PlayCircle } from "lucide-react";

const FEATURES = [
  { icon: BookOpenCheck, label: "TGT / PGT Preparation" },
  { icon: MonitorPlay, label: "Online Classes" },
  { icon: Users2, label: "Expert Guidance" },
];

const SCORE_STRIP = [
  { value: "12+", label: "Years Teaching" },
  { value: "5,000+", label: "Students Trained" },
  { value: "480+", label: "Selections" },
  { value: "4.9/5", label: "Student Rating" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-green-900 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-mustard-500/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="ribbon-tag inline-flex items-center bg-mustard-500 text-green-900 text-xs font-bold px-4 py-1.5 pr-6 tracking-wide uppercase shadow-md shadow-mustard-500/30">
              Admissions Open — 2026 Batch
            </span>

            <h1 className="mt-6 font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Kisan Academy
            </h1>
            <p className="mt-3 font-display text-mustard-400 text-xl sm:text-2xl font-semibold">
              Creator of Future
            </p>
            <p className="mt-5 text-green-100/90 text-base sm:text-lg max-w-lg leading-relaxed">
              Structured TGT &amp; PGT Geography coaching built on previous
              year papers, expert mentorship, and disciplined test practice —
              designed for serious aspirants.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {FEATURES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-full bg-white/10 border border-mustard-500 px-4 py-2 text-sm font-medium text-white"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mustard-500 text-green-900 shrink-0">
                    <Icon size={14} strokeWidth={2.5} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-md bg-mustard-500 px-7 py-3.5 text-base font-bold text-green-900 hover:bg-mustard-600 transition-colors shadow-lg shadow-mustard-500/40 ring-2 ring-mustard-400"
              >
                Join Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://youtube.com/@kisanacademy-u2n?si=GY7r28DrdE26ITTO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border-2 border-mustard-500 bg-transparent px-7 py-3.5 text-base font-semibold text-white hover:bg-mustard-500/20 transition-colors"
              >
                <PlayCircle size={20} className="text-mustard-400" />
                Free Demo
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms] mx-auto w-full max-w-md">
            <div className="relative rounded-2xl bg-cream text-ink shadow-2xl shadow-green-950/40 overflow-hidden ring-2 ring-mustard-500 before:absolute before:right-0 before:top-0 before:bottom-0 before:w-2 before:bg-mustard-500 before:z-10">
              <div className="perforated relative bg-mustard-500 px-6 py-4 border-b-4 border-mustard-600">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-900/70 text-[11px] font-bold uppercase tracking-widest">
                      Kisan Academy
                    </p>
                    <p className="text-green-900 font-display font-bold text-lg">
                      Result Card
                    </p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-900 text-mustard-400 font-display font-bold text-sm border-4 border-mustard-100">
                    KA
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-mustard-100">
                {SCORE_STRIP.map((s) => (
                  <div key={s.label} className="bg-cream px-5 py-6">
                    <p className="font-display font-extrabold text-mustard-600 text-2xl sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="text-xs sm:text-sm text-green-800 font-medium mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 bg-mustard-100 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-mustard-500 ring-2 ring-mustard-600/30" />
                <p className="text-xs font-medium text-green-800">
                  Verified track record, updated June 2026
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-xl border-2 border-mustard-500">
              <span className="h-9 w-9 rounded-full bg-mustard-500 flex items-center justify-center text-green-900 font-display font-bold text-sm">
                ★
              </span>
              <div>
                <p className="text-xs font-bold text-mustard-600 leading-tight">
                  Top Rated
                </p>
                <p className="text-[11px] text-green-700 leading-tight">
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