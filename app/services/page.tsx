import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tilt panel repair, commercial fit out, and concrete works in Perth, WA. Konx Construction Group delivers quality commercial construction services.",
};

const tiltPanelProblems = [
  "Surface cracking and concrete spalling",
  "Joint seal failure and water ingress",
  "Panel movement and structural displacement",
  "Reinforcement corrosion and rust staining",
  "Impact damage from forklifts and vehicles",
  "Pre-existing or latent construction defects",
];

const fitOutSpaces = [
  "Office and corporate environments",
  "Warehouses and logistics facilities",
  "Retail and hospitality fit outs",
  "Medical and healthcare spaces",
  "Industrial and manufacturing facilities",
  "Showrooms and display centres",
];

const fitOutProcess = [
  { step: "01", label: "Consultation", detail: "We walk the space with you and understand the brief." },
  { step: "02", label: "Design & Quote", detail: "Detailed scope and fixed-price quote — no surprises." },
  { step: "03", label: "Construction", detail: "Trade-managed build with weekly updates." },
  { step: "04", label: "Handover", detail: "Defects inspection and clean handover on time." },
];

const concreteTypes = [
  "Reinforced concrete ground slabs",
  "Grey concrete finishes",
  "Structural footings and pads",
  "Hardstand and carpark slabs",
  "Concrete pathways and kerbing",
  "Structural repairs and underpinning",
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
            alt="Commercial construction services Perth"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a] to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-[#0066ff] text-xs font-semibold tracking-widest uppercase mb-3">
              What We Offer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Our Services
            </h1>
            <p className="text-[#777] text-lg max-w-xl">
              Three specialist services. One accountable team. Delivering commercial construction results across Perth, WA.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* TILT PANEL REPAIR */}
      <section id="tilt-panel-repair" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1679530988140-d6844f4e2ee8?w=1000&q=80"
                  alt="Tilt panel repair Perth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <p className="text-[#0066ff] text-xs font-semibold tracking-widest uppercase mb-2">
                Service 01
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-2">
                Tilt Panel Repair
              </h2>
              <p className="text-[#666] text-sm tracking-wide mb-6 italic">
                Restore structural integrity. Protect your asset.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Tilt panel construction is the backbone of Perth&apos;s commercial and industrial buildings.
                Over time, exposure to weather, ground movement, and age causes cracking, spalling, and joint
                deterioration. Left untreated, these issues escalate — threatening structural integrity and
                triggering costly compliance problems.
              </p>

              <h3 className="text-white font-semibold text-sm tracking-wide mb-4">
                Common Problems We Fix
              </h3>
              <ul className="space-y-3 mb-8">
                {tiltPanelProblems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[#777] text-sm">
                    <svg className="w-4 h-4 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="bg-[#111] border border-[#1e1e1e] p-5 mb-8">
                <p className="text-[#777] text-sm leading-relaxed">
                  Early intervention is always cheaper than delayed repair. Our team assesses the full extent
                  of damage, develops a targeted repair plan, and executes with minimal disruption to your operations.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center bg-[#0066ff] hover:bg-[#0052cc] text-white font-semibold px-7 py-3.5 tracking-wide transition-all duration-200 hover:scale-105 text-sm"
              >
                Get a Free Assessment
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <div className="border-t border-[#111]" />

      {/* COMMERCIAL FIT OUT */}
      <section id="commercial-fit-out" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll direction="left" className="lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80"
                  alt="Commercial fit out Perth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" className="lg:order-1">
              <p className="text-[#0066ff] text-xs font-semibold tracking-widest uppercase mb-2">
                Service 02
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-2">
                Commercial Fit Out
              </h2>
              <p className="text-[#666] text-sm tracking-wide mb-6 italic">
                From shell to operational. On time, on budget.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Whether you&apos;re fitting out a new tenancy or reconfiguring an existing space, Konx Construction
                Group manages the full build — from initial strip-out through to handover. We work across offices,
                warehouses, retail, medical, and industrial facilities throughout Perth.
              </p>

              <h3 className="text-white font-semibold text-sm tracking-wide mb-4">
                Types of Spaces We Fit Out
              </h3>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {fitOutSpaces.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[#777] text-sm">
                    <svg className="w-4 h-4 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="text-white font-semibold text-sm tracking-wide mb-4">Our Process</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {fitOutProcess.map((p) => (
                  <div key={p.step} className="bg-[#111] border border-[#1e1e1e] p-4">
                    <p className="text-[#0066ff] text-xs font-bold tracking-widest mb-1">{p.step}</p>
                    <p className="text-white font-semibold text-sm mb-1">{p.label}</p>
                    <p className="text-[#666] text-xs leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center bg-[#0066ff] hover:bg-[#0052cc] text-white font-semibold px-7 py-3.5 tracking-wide transition-all duration-200 hover:scale-105 text-sm"
              >
                Discuss Your Fit Out
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <div className="border-t border-[#111]" />

      {/* CONCRETE WORKS */}
      <section id="concrete-works" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80"
                  alt="Concrete works Perth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <p className="text-[#0066ff] text-xs font-semibold tracking-widest uppercase mb-2">
                Service 03
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-2">
                Concrete Works
              </h2>
              <p className="text-[#666] text-sm tracking-wide mb-6 italic">
                Precision poured. Built to specification.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Concrete is the foundation of every serious commercial project. Konx Construction Group provides
                concrete works across the full range of commercial applications — from ground slabs to structural
                elements. We work to engineer specifications and deliver finishes that stand up to commercial use.
              </p>

              <h3 className="text-white font-semibold text-sm tracking-wide mb-4">
                Types of Concrete Work
              </h3>
              <ul className="space-y-3 mb-8">
                {concreteTypes.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[#777] text-sm">
                    <svg className="w-4 h-4 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center bg-[#0066ff] hover:bg-[#0052cc] text-white font-semibold px-7 py-3.5 tracking-wide transition-all duration-200 hover:scale-105 text-sm"
              >
                Get a Concrete Quote
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl font-bold text-white mb-4">Not sure which service you need?</h2>
            <p className="text-[#777] mb-8">
              Contact us and we&apos;ll come out and assess your site — free of charge.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#0066ff] hover:bg-[#0052cc] text-white font-semibold px-8 py-4 tracking-wide transition-all duration-200 hover:scale-105 text-sm"
            >
              Book a Free Site Assessment
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
