import { Youtube, FileDown, ScrollText, ArrowUpRight } from "lucide-react";

const RESOURCES = [
  {
    icon: Youtube,
    title: "YouTube Videos",
    desc: "Free concept lectures and exam-strategy sessions, updated weekly.",
    action: "Watch Now",
    accent: "bg-mustard-500",
    iconClass: "text-green-900",
    hoverIconAccent: "group-hover:bg-green-900 group-hover:text-mustard-400",
  },
  {
    icon: FileDown,
    title: "PDF Notes",
    desc: "Chapter-wise summary notes you can revise anytime, anywhere.",
    action: "Download Notes",
    accent: "bg-mustard-500",
    iconClass: "text-green-900",
    hoverIconAccent: "group-hover:bg-green-900 group-hover:text-mustard-400",
  },
  {
    icon: ScrollText,
    title: "PYQ Downloads",
    desc: "Compiled previous year question papers with detailed solutions.",
    action: "Get PYQs",
    accent: "bg-mustard-500",
    iconClass: "text-green-900",
    hoverIconAccent: "group-hover:bg-green-900 group-hover:text-mustard-400",
  },
];

export default function FreeResources() {
  return (
    <section id="resources" className="bg-mustard-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-mustard-600 font-semibold text-sm uppercase tracking-widest">
            No Cost, No Catch
          </span>
          <h2 className="mt-3 font-display font-bold text-green-900 text-3xl sm:text-4xl">
            Free Resources
          </h2>
          <p className="mt-4 text-green-800/80 text-base sm:text-lg">
            Start preparing today with study material we make freely
            available to every aspirant.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group rounded-xl bg-white p-7 shadow-sm border border-green-100 border-t-4 border-t-mustard-500 hover:bg-mustard-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-mustard-400 transition-all duration-300"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${r.accent} ${r.iconClass} ${r.hoverIconAccent} transition-colors duration-300`}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display font-bold text-green-900 group-hover:text-green-950 text-lg transition-colors duration-300">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-green-800/80 group-hover:text-green-900 leading-relaxed transition-colors duration-300">
                  {r.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-mustard-600 group-hover:text-green-900 transition-colors duration-300"
                >
                  {r.action}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
