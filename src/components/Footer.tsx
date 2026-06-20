import { Facebook, Instagram, Youtube, Linkedin, GraduationCap } from "lucide-react";

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About Us", href: "#about" },
  { label: "Test Series", href: "#resources" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-mustard-500 text-green-900 shadow-md shadow-mustard-500/25">
                <GraduationCap size={18} strokeWidth={2.4} />
              </span>
              <span className="font-display font-bold text-white text-lg">
                Kisan Academy
              </span>
            </div>
            <p className="mt-4 text-sm text-green-100/70 leading-relaxed">
              आपकी सफलता की सही दिशा — trusted TGT &amp; PGT Geography coaching
              built on discipline, depth, and real exam patterns.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-mustard-400 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-green-100/70 hover:text-mustard-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-mustard-400 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-green-100/70">
              <li>
                <a href="tel:+919569954032" className="hover:text-mustard-400 transition-colors">
                  +91 95699 54032
                </a>
              </li>
              <li>
                <a href="mailto:info@kisanacademy.in" className="hover:text-mustard-400 transition-colors">
                  info@kisanacademy.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-mustard-400 text-sm uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-mustard-500 text-green-900 hover:bg-mustard-400 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-mustard-500/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-green-100/60">
            © {new Date().getFullYear()} Kisan Academy. All rights reserved.
          </p>
          <p className="text-xs text-mustard-400">
            Designed for serious aspirants, built on results.
          </p>
        </div>
      </div>
    </footer>
  );
}
