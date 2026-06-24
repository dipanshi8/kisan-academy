import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy-900 py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display font-bold text-white text-3xl sm:text-4xl">
            Start Your Preparation Today
          </h2>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            Have a question about a course or batch timing? Reach out — our
            team responds within a day.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-xl bg-white/[0.04] border border-gold-500/50 p-5 hover:border-gold-500 transition-colors">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-navy-900 shadow-md shadow-gold-500/25">
                <Phone size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-wide">
                  Phone
                </p>
                <a
                  href="tel:+919569954032"
                  className="mt-1 block text-white font-medium hover:text-gold-400 transition-colors"
                >
                  +91 95699 54032
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white/[0.04] border border-gold-500/50 p-5 hover:border-gold-500 transition-colors">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-navy-900 shadow-md shadow-gold-500/25">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:iicsallahabaad@gmail.com"
                  className="mt-1 block text-white font-medium hover:text-gold-400 transition-colors break-all"
                >
                  iicsallahabaad@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-gold-500/15 border-2 border-gold-500 p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-navy-900 shadow-lg shadow-gold-500/30">
              <MessageCircle size={28} />
            </div>
            <h3 className="mt-4 font-display font-bold text-white text-xl">
              Chat with Us on WhatsApp
            </h3>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              Get instant answers about courses, batches, and enrollment — message us directly.
            </p>
            <a
              href="https://wa.me/919569954032"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:brightness-95 text-white font-bold py-4 px-6 transition-all shadow-lg shadow-black/20"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
