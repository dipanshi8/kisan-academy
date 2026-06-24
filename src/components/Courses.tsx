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
      "Latest Pattern Based Preparation",
      "Live + Recorded Classes",
      "Mentorship & Doubt Support",
      "Full Length Test Series",
    ],
    link: "https://cgjcc.on-app.in/app/oc/860991/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: GraduationCap,
    title: "PGT Geography",
    duration: "8 Months",
    features: [
      "Exam Oriented Complete Preparation",
      "Live + Recorded Learning",
      "Expert Guidance",
      "Mock Tests & Practice",
    ],
    link: "https://cgjcc.on-app.in/app/oc/860998/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: Globe2,
    title: "Geography",
    duration: "5 Months",
    features: [
      "Basic to Advanced Concepts",
      "Interactive Live Classes",
      "Exam Oriented Mapping Practice",
      "PDFs & Notes Support",
    ],
    link: "https://cgjcc.on-app.in/app/oc/675932/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: Scale,
    title: "Polity",
    duration: "4 Months",
    features: [
      "Concept Based Learning",
      "Interactive Classes",
      "MCQ Practice",
      "Notes & Revision Support",
    ],
    link: "https://cgjcc.on-app.in/app/oc/679022/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: Landmark,
    title: "UPPCS",
    duration: "6 Months",
    features: [
      "Focused Exam Preparation",
      "Concept + MCQ Practice",
      "Strategy Based Learning",
      "Notes & Test Series",
    ],
    link: "https://cgjcc.on-app.in/app/oc/504167/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: Briefcase,
    title: "RO/ARO",
    duration: "4 Months",
    features: [
      "Complete Prelims Preparation",
      "Interactive Classes",
      "Latest Pattern MCQs",
      "Notes & Mock Tests",
    ],
    link: "https://cgjcc.on-app.in/app/oc/504571/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
  {
    icon: FileText,
    title: "Test Series",
    duration: "3 Months",
    features: [
      "Full Length Mock Tests",
      "Topic Wise Practice",
      "Performance Analysis",
      "Improve Speed & Accuracy",
    ],
    link: "https://cgjcc.on-app.in/app/oc/297161/cgjcc?utm_source=whatsapp&utm_medium=student-course-referral&utm_campaign=course-overview-app",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest">
            Our Programs
          </span>
          <h2 className="mt-3 font-display font-bold text-navy-900 text-3xl sm:text-4xl">
            Courses Built Around the Real Exam
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
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
                className="group flex flex-col rounded-xl border border-border-light border-t-4 border-t-gold-500 bg-card p-6 shadow-sm [@media(hover:hover)]:hover:bg-gold-500 [@media(hover:hover)]:hover:shadow-xl [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:scale-[1.02] [@media(hover:hover)]:hover:border-gold-400 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500 text-navy-900 [@media(hover:hover)]:group-hover:bg-navy-900 [@media(hover:hover)]:group-hover:text-gold-400 transition-colors duration-300">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <h3 className="mt-5 font-display font-bold text-navy-900 [@media(hover:hover)]:group-hover:text-ink text-xl transition-colors duration-300">
                  {course.title}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-sm text-gold-600 [@media(hover:hover)]:group-hover:text-navy-900 transition-colors duration-300">
                  <Clock size={15} />
                  <span>{course.duration}</span>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {course.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-muted [@media(hover:hover)]:group-hover:text-navy-900 transition-colors duration-300"
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
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-gold-500 hover:bg-gold-600 [@media(hover:hover)]:group-hover:bg-navy-900 px-4 py-2.5 text-sm font-bold text-navy-900 [@media(hover:hover)]:group-hover:text-gold-400 transition-colors duration-300"
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
