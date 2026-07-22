import Link from "next/link";

const STEPS = [
  {
    number: "01",
    tag: "Get Trained",
    title: "Skilled trades training for modern industry requirements",
    bullets: [
      "Standardized curriculum across 25+ skilled trades",
      "Practical hands-on training from certified instructors",
      "Flexible schedule for working learners & apprentices",
    ],
    ctaText: "Learn More",
    ctaLink: "#trained",
    btnStyle: "bg-[#aa1d3f] text-white hover:bg-[#8f1532]",
    tagStyle: "text-[#aa1d3f]",
  },
  {
    number: "02",
    tag: "Get Certified",
    title: "Recognized certifications from national TVET bodies",
    bullets: [
      "National Vocational Qualification Framework (NVQF) aligned",
      "NABTEB Modular and NBTE recognized credentials",
      "Verification portal for employers and institutions",
    ],
    ctaText: "Get Started",
    ctaLink: "#certified",
    btnStyle: "bg-[#f9a825] text-[#1e1e1e] hover:bg-[#e0931b]",
    tagStyle: "text-[#f9a825]",
  },
  {
    number: "03",
    tag: "Get Hired",
    title: "Direct job placement with verified employers",
    bullets: [
      "Verified talent pool accessible to corporate & public employers",
      "Direct job matching based on skill competency & location",
      "Ongoing support for career progression & upskilling",
    ],
    ctaText: "Explore Portal",
    ctaLink: "#hired",
    btnStyle: "bg-[#1e1e1e] text-white hover:bg-black",
    tagStyle: "text-[#1e1e1e]",
  },
];

export function PipelineSection() {
  return (
    <section className="bg-slate-50/60 py-16 lg:py-24" id="pipeline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1e1e1e] sm:text-4xl">
            The <span className="text-[#aa1d3f]">Unified</span> Interactive Pipeline
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            Streamlined workforce development from intake to job placement through three connected steps.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold uppercase tracking-wider ${step.tagStyle}`}>
                    {step.tag}
                  </span>
                  <span className="text-2xl font-black text-gray-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-[#1e1e1e]">
                  {step.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {step.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="mt-1 flex h-1.5 w-1.5 rounded-full bg-[#aa1d3f] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href={step.ctaLink}
                  className={`inline-block w-full rounded-md py-3 text-center text-sm font-bold transition-all ${step.btnStyle}`}
                >
                  {step.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
