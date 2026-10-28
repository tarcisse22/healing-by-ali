import { Icon } from "./ui";

const credentials = [
  {
    title: "Associate Degree in Kinesiology & Health",
    school: "Georgia State University",
    icon: "graduation" as const,
  },
  {
    title: "Personal Training Certification",
    school: "Georgia State University",
    icon: "badge" as const,
  },
  {
    title: "CPR / Basic Life Support (BLS)",
    school: "Georgia State University",
    icon: "badge" as const,
  },
  {
    title: "Entrepreneurship Certificate",
    school: "Georgia State University",
    icon: "badge" as const,
  },
  {
    title: "Exercise Science & Athlete Program Development",
    school: "Wittenberg University",
    icon: "graduation" as const,
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-center">
        {/* Arch visual */}
        <div className="relative max-w-md mx-auto w-full">
          <div className="arch aspect-[4/5] bg-gradient-to-br from-moss via-forest-light to-forest flex flex-col items-center justify-center text-ivory p-10 text-center">
            <span className="font-display text-[7rem] leading-none font-medium tracking-tight">
              AD
            </span>
            <span className="mt-4 text-xs tracking-[0.35em] uppercase text-ivory/70">
              Ali Diakite
            </span>
          </div>
          <div className="absolute -bottom-8 -right-4 sm:-right-10 bg-ivory shadow-xl shadow-forest/10 rounded-2xl px-7 py-6 max-w-[16rem]">
            <p className="font-display text-xl italic text-forest leading-snug">
              &ldquo;Help you move better, feel better, and perform at your
              best.&rdquo;
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="eyebrow">Meet Your Coach</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-medium text-forest">
              Passionate about your performance &amp; recovery
            </h2>
          </div>
          <div className="space-y-4 text-stone text-lg leading-relaxed">
            <p>
              Hi, I&apos;m Ali Diakite &mdash; a Strength &amp; Conditioning
              Specialist dedicated to helping athletes and everyday clients
              improve performance, prevent injuries, and recover smarter.
            </p>
            <p>
              Currently studying Kinesiology and Health at Georgia State
              University, I bring hands-on experience from Wittenberg
              University, where I studied Exercise Science and interned in
              athlete-specific program development.
            </p>
            <p>
              My focus is on building strength, stamina, and mobility through
              personalized training plans, while also offering recovery
              treatments like Muscle Stimulation Therapy (EMS), cupping, and
              targeted stretching to relieve pain, soreness, and tightness.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-xs tracking-[0.25em] uppercase text-clay-dark font-medium mb-5">
              Education &amp; Certifications
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {credentials.map((c) => (
                <li key={c.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-sand text-clay-dark flex items-center justify-center">
                    <Icon name={c.icon} />
                  </span>
                  <div>
                    <p className="font-medium text-forest leading-snug">
                      {c.title}
                    </p>
                    <p className="text-sm text-stone mt-0.5">{c.school}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
