import Image from "next/image";
import { GraduationCap, Award, Users } from "lucide-react";

export default function Faculty() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-mustard-600 font-semibold text-sm uppercase tracking-widest">
            Our Mentors
          </span>
          <h2 className="mt-3 font-display font-bold text-green-900 text-3xl sm:text-4xl">
            Meet Our Faculty
          </h2>
          <p className="mt-4 text-green-800/80 text-base sm:text-lg">
            Learn directly from a mentor who has guided hundreds of
            successful TGT and PGT aspirants.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-white border-2 border-mustard-500 border-t-4 border-t-mustard-500 shadow-sm overflow-hidden hover:border-mustard-600 transition-colors">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 p-8 lg:p-10 items-start">
            {/* Photo — left on desktop, top on mobile */}
            <div className="flex justify-center md:justify-start">
              <div className="h-64 w-64 shrink-0 overflow-hidden rounded-xl border-4 border-mustard-500">
                <Image
                  src="/faculty/nirankar-sir.jpeg"
                  alt="Nirankar Sir - Faculty"
                  width={320}
                  height={320}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Details — right on desktop */}
            <div className="space-y-6">
              <h3 className="font-display font-bold text-green-900 text-2xl sm:text-3xl">
                Nirankar Sir
              </h3>

              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mustard-500 text-green-900">
                    <GraduationCap size={14} strokeWidth={2.5} />
                  </span>
                  <h4 className="font-display font-semibold text-mustard-600 text-sm uppercase tracking-wide">
                    Academic Qualification
                  </h4>
                </div>
                <ul className="mt-2 ml-9 space-y-1 text-sm text-green-800/90 leading-relaxed">
                  <li>Master&apos;s Degree (M.A.) in Geography</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mustard-500 text-green-900">
                    <Award size={14} strokeWidth={2.5} />
                  </span>
                  <h4 className="font-display font-semibold text-mustard-600 text-sm uppercase tracking-wide">
                    Achievements
                  </h4>
                </div>
                <ul className="mt-2 ml-9 space-y-1 text-sm text-green-800/90 leading-relaxed">
                  <li>Qualified UPPSC twice (2014 &amp; 2016)</li>
                  <li>Qualified JRF (Junior Research Fellowship)</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mustard-500 text-green-900">
                    <Users size={14} strokeWidth={2.5} />
                  </span>
                  <h4 className="font-display font-semibold text-mustard-600 text-sm uppercase tracking-wide">
                    Teaching Experience
                  </h4>
                </div>
                <ul className="mt-2 ml-9 space-y-1 text-sm text-green-800/90 leading-relaxed">
                  <li>14+ years of teaching experience</li>
                  <li>
                    Guided and mentored 500+ students who have successfully
                    qualified in various competitive examinations
                  </li>
                </ul>
              </div>

              <blockquote className="mt-4 rounded-xl border-l-4 border-mustard-500 bg-mustard-100 px-5 py-4">
                <p className="font-display font-semibold text-green-900 text-base sm:text-lg italic leading-snug">
                  &ldquo;Experience, Excellence &amp; Success – The Journey of Nirankar Sir&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
