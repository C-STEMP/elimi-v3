const PILLARS = [
  {
    num: "01",
    title: "Structured TVET Curricula",
    desc: "Industry-aligned syllabus designed for practical skill mastery across all trades.",
  },
  {
    num: "02",
    title: "Standard Interoperability",
    desc: "Seamless integration across TVET centers, NBTE, and NABTEB databases for frictionless record transfer.",
  },
  {
    num: "03",
    title: "Multi-Tenant By Design",
    desc: "Separate management portals for administrators, centers, trainers, and students.",
  },
  {
    num: "04",
    title: "Evidence-Based Assessment",
    desc: "Continuous evaluation with photo/video upload capability to prove practical skills.",
  },
  {
    num: "05",
    title: "Institutional Reporting",
    desc: "Real-time compliance monitoring and analytics for government bodies and regulatory agencies.",
  },
  {
    num: "06",
    title: "Flexible Access & Commercials",
    desc: "Custom access levels for institutions, training providers, and corporate partners.",
  },
  {
    num: "07",
    title: "White-Label Ready",
    desc: "Deployable as an institutional solution for state government and federal training programs.",
  },
  {
    num: "08",
    title: "Mobile-First & Accessible",
    desc: "Optimized for low-bandwidth mobile environments so learners can access anywhere.",
  },
  {
    num: "09",
    title: "AI-Ready & Scalable",
    desc: "Built on modern cloud infrastructure that grows with your state or institutional footprint.",
  },
];

export function PillarsSection() {
  return (
    <section className="bg-slate-50/70 py-16 lg:py-24" id="pillars">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1e1e1e] sm:text-4xl">
            Built On <span className="text-[#aa1d3f]">Nine Product</span> Pillars
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            A comprehensive solution designed to handle every aspect of technical and vocational education management.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="group rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all hover:border-[#aa1d3f]/40 hover:shadow-md"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-xs font-extrabold text-[#aa1d3f] group-hover:bg-[#aa1d3f] group-hover:text-white transition-colors">
                {pillar.num}
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#1e1e1e]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
