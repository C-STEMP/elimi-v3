import Image from "next/image";
import Link from "next/link";
import { heroImg1, heroImg2, heroImg3, heroImg4 } from "@/assets";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#540C1D] text-white pt-10 pb-20 lg:pt-14 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center rounded-full border border-[#f9a825]/40 bg-[#f9a825]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#f9a825] uppercase">
          NIGERIA&apos;S FIRST NATIONWIDE TVET SYSTEM PLATFORM
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Nigeria&apos;s platform for getting{" "}
          <span className="text-[#f9a825]">trained</span>,{" "}
          <span className="text-white">certified</span>, and{" "}
          <span className="text-[#f9a825]">hired</span> in the skilled trades,
          all in one place.
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mt-6 max-w-3xl text-base text-white/80 sm:text-lg">
          One-stop platform for non-formal TVET (Technical &amp; Vocational
          Education &amp; Training), NBTE TVET National Qualifications
          Framework, and NABTEB Modular Certifications (under 100 million
          tradesmen)
        </p>

        {/* Hero CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/get-started"
            className="rounded-md bg-[#f9a825] px-7 py-3 text-sm font-bold text-[#1e1e1e] transition-all hover:bg-[#e0931b]"
          >
            Get Started
          </Link>
          <Link
            href="#about"
            className="rounded-md border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            Learn More
          </Link>
        </div>

        {/* Hero Image Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-2xl bg-[#75152b] h-64 sm:h-72 lg:h-80 shadow-xl group">
            <Image
              src={heroImg1}
              alt="Artisan apprentice in workshop"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#f9a825] p-3 text-center text-[#1e1e1e] shadow-lg">
              <span className="block text-xl font-extrabold leading-none">99%</span>
              <span className="text-xs font-semibold">Placement Rate</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-2xl bg-[#75152b] h-64 sm:h-72 lg:h-80 shadow-xl group">
            <Image
              src={heroImg2}
              alt="Technical builder outdoors"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-2xl bg-[#75152b] h-64 sm:h-72 lg:h-80 shadow-xl group">
            <Image
              src={heroImg3}
              alt="Technician working on electronics"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute top-4 left-4 right-4 rounded-xl bg-white/95 backdrop-blur p-3 text-center text-[#1e1e1e] shadow-lg">
              <span className="block text-xl font-extrabold leading-none">80%</span>
              <span className="text-xs font-semibold text-gray-700">Faster Certification Time</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden rounded-2xl bg-[#75152b] h-64 sm:h-72 lg:h-80 shadow-xl group">
            <Image
              src={heroImg4}
              alt="Verified tradesman with equipment"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
