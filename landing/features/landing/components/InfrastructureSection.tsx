import Image from "next/image";
import { landingImg1 } from "@/assets";

const STATS = [
  { value: "14,800+", label: "Learners Enrolled" },
  { value: "280+", label: "Training Centers" },
  { value: "45+", label: "Accredited Trades" },
  { value: "100%", label: "Verifiable Credentials" },
];

export function InfrastructureSection() {
  return (
    <section className="bg-white py-16 lg:py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column Image */}
          <div className="relative h-[380px] sm:h-[480px] lg:col-span-5 lg:h-[520px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={landingImg1}
              alt="Craftsman artisan working"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 lg:pl-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1e1e1e] sm:text-4xl">
              One <span className="text-[#f9a825]">Unified</span> Infrastructure
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              An end-to-end ecosystem that connects students, trainers, assessment centers, and employers seamlessly. We streamline everything from initial enrollment to final job matching, creating a transparent, verifiable path for technical career advancement.
            </p>

            {/* 2x2 Metric Cards Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-100 bg-slate-50/80 p-5 text-center transition-all hover:bg-slate-100/80"
                >
                  <span className="block text-2xl font-black text-[#1e1e1e] sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
