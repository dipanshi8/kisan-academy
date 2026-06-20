import { UserCheck, BookText, Target, ClipboardList, MessageCircleQuestion } from "lucide-react";

const REASONS = [
  {
    icon: UserCheck,
    title: "Experienced Faculty",
    desc: "Subject experts with over a decade of classroom and exam-coaching experience.",
  },
  {
    icon: BookText,
    title: "Quality Notes",
    desc: "Concise, exam-focused study material updated every academic session.",
  },
  {
    icon: Target,
    title: "PYQ Based Preparation",
    desc: "Every topic is taught alongside its previous year question pattern.",
  },
  {
    icon: ClipboardList,
    title: "Regular Test Series",
    desc: "Weekly and full-length mock tests with All-India rank comparison.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Doubt Support",
    desc: "Dedicated doubt-clearing sessions so no concept is left half understood.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-green-900 py-20 lg:py-28 relative overflow-hidden">
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
            Why Kisan Academy
          </span>
          <h2 className="mt-3 font-display font-bold text-white text-3xl sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-green-100/80 text-base sm:text-lg">
            We built our teaching method around one question: what actually
            helps a student clear the exam.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`group rounded-xl bg-white/[0.04] border border-white/10 border-l-4 border-l-mustard-500 p-6 hover:bg-mustard-500/10 hover:border-mustard-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-mustard-500/20 transition-all duration-300 ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mustard-500 text-green-900 shadow-md shadow-mustard-500/40 group-hover:bg-mustard-600 transition-colors duration-300">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-white text-lg group-hover:text-mustard-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-green-100/75 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
