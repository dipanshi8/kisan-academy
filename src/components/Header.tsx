"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About Us", href: "#about" },
  { label: "Test Series", href: "#resources" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-sm shadow-lg shadow-navy-950/20"
          : "bg-navy-900"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo/logo.jpeg"
              alt="Kisan Academy Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg object-cover ring-2 ring-gold-500"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Kisan Academy
              </span>
              <span className="text-[11px] text-gold-400 font-medium tracking-wide">
                Creator Of Future
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold-400 rounded-md hover:bg-gold-500/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 hover:bg-gold-600 transition-colors shadow-md shadow-gold-500/50 ring-2 ring-gold-400"
            >
              Join Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gold-400 hover:bg-gold-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-navy-900 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3.5 text-base font-medium text-white/80 hover:text-gold-400 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-gold-500 px-5 py-3.5 text-base font-bold text-navy-900 hover:bg-gold-600 transition-colors shadow-md shadow-gold-500/50 ring-2 ring-gold-400"
          >
            Join Now
          </a>
        </nav>
      </div>
    </header>
  );
}
