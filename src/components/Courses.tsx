import {
  Clock,
  CheckCircle2,
  Map,
  GraduationCap,
  FileText,
  Globe2,
  Scale,
  Landmark,
  Briefcase,
} from "lucide-react";

const COURSES = [
  {
    icon: Map,
    title: "TGT Geography",
    duration: "6 Months",
    features: [
      "Complete NCERT + reference coverage",
      "Concept-wise PYQ practice",
      "Weekly topic tests",
    ],
    link: "https://cgjcc.on-app.in/app/oc/860991/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: GraduationCap,
    title: "PGT Geography",
    duration: "8 Months",
    features: [
      "Advanced & Masters-level depth",
      "Answer-writing practice",
      "Interview & subject viva prep",
    ],
    link: "https://cgjcc.on-app.in/app/oc/860998/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: Globe2,
    title: "Geography",
    duration: "5 Months",
    features: [
      "Complete syllabus coverage",
      "PYQ-based topic practice",
      "Regular mock assessments",
    ],
    link: "https://cgjcc.on-app.in/app/oc/675932/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: Scale,
    title: "Polity",
    duration: "4 Months",
    features: [
      "Indian Constitution & governance",
      "Current affairs integration",
      "Prelims & mains PYQ drills",
    ],
    link: "https://cgjcc.on-app.in/app/oc/679022/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: Landmark,
    title: "UPPCS",
    duration: "6 Months",
    features: [
      "UPPCS prelims & mains strategy",
      "State-focused GS modules",
      "Full-length mock tests",
    ],
    link: "https://cgjcc.on-app.in/app/oc/504167/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: Briefcase,
    title: "RO/ARO",
    duration: "4 Months",
    features: [
      "RO/ARO syllabus mapping",
      "Reasoning & Hindi practice",
      "Timed sectional mocks",
    ],
    link: "https://cgjcc.on-app.in/app/oc/504571/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: FileText,
    title: "Test Series",
    duration: "3 Months",
    features: [
      "Full-length mock exams",
      "All-India performance rank",
      "Detailed solution analysis",
    ],
    link: "https://cgjcc.on-app.in/app/oc/297161/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-mustard-600 font-semibold text-sm uppercase tracking-widest">
            Our Programs
          </span>
          <h2 className="mt-3 font-display font-bold text-green-900 text-3xl sm:text-4xl">
            Courses Built Around the Real Exam
          </h2>
          <p className="mt-4 text-green-800/80 text-base sm:text-lg">
            Every course is mapped against the latest syllabus and previous
            year question patterns — no generic content, only what gets
            tested.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.title}
                className="group flex flex-col rounded-xl border border-green-100 border-t-4 border-t-mustard-500 bg-white p-6 shadow-sm hover:bg-mustard-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-mustard-400 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mustard-500 text-green-900 group-hover:bg-green-900 group-hover:text-mustard-400 transition-colors duration-300">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <h3 className="mt-5 font-display font-bold text-green-900 group-hover:text-green-950 text-xl transition-colors duration-300">
                  {course.title}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-sm text-mustard-600 group-hover:text-green-900 transition-colors duration-300">
                  <Clock size={15} />
                  <span>{course.duration}</span>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {course.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-green-800/90 group-hover:text-green-900 transition-colors duration-300"
                    >
                      <CheckCircle2 size={16} className="text-success mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-mustard-500 hover:bg-mustard-600 group-hover:bg-green-900 px-4 py-2.5 text-sm font-bold text-white group-hover:text-mustard-400 transition-colors duration-300"
                >
                  Enroll Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
