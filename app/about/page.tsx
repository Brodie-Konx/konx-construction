import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Konx Construction Group PTY LTD — Perth's trusted commercial construction company. Quality workmanship, reliable timelines, honest communication.",
};

const values = [
  {
    title: "Quality Workmanship",
    description:
      "Every job is executed to a standard we're proud to put our name on. We don't cut corners, and we don't hand over work that isn't right.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Reliable Timelines",
    description:
      "We know that delays on your construction project cost your business money. We plan carefully, communicate proactively, and deliver on schedule.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Honest Communication",
    description:
      "We tell you what we find, what needs to be done, and what it will cost — upfront. No hidden charges, no scope creep without sign-off.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80"
            alt="Konx Construction Group Perth"
            fill
            priority
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a] to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
              Who We Are
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              About Konx
            </h1>
            <p className="text-[#777] text-lg max-w-xl">
              A Perth-based commercial construction company built on the belief that quality and reliability should be the baseline, not the exception.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/concrete-works.jpg"
                  alt="Konx Construction Group team Perth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
                {/* Stat callout */}
                <div className="absolute top-6 right-6 border border-[#999]/30 bg-[#0a0a0a]/90 backdrop-blur p-5">
                  <p className="text-[#999] font-bold text-3xl">Perth</p>
                  <p className="text-[#888] text-xs tracking-widest uppercase mt-1">Based & Operated</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-6">
                Konx Construction<br />Group PTY LTD
              </h2>
              <div className="space-y-4 text-[#888] leading-relaxed">
                <p>
                  Konx Construction Group is a Perth-based commercial construction company specialising in tilt panel repair, commercial fit out, and concrete works. We operate across the Perth metropolitan area and regional WA, working directly with property owners, facility managers, developers, and commercial tenants.
                </p>
                <p>
                  We built this company on a simple principle: commercial clients deserve contractors who are accountable. Too often, building owners deal with contractors who overpromise, underdeliver, and disappear when problems arise. We operate differently.
                </p>
                <p>
                  Every project is managed by an experienced team with the expertise to handle complex commercial construction — and the discipline to deliver on what was agreed.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#1a1a1a] pt-8">
                {[
                  { stat: "10+", label: "Years Experience" },
                  { stat: "100%", label: "Perth-Based Team" },
                ].map((item) => (
                  <div key={item.stat}>
                    <p className="text-white font-bold text-3xl">{item.stat}</p>
                    <p className="text-[#666] text-xs tracking-wide mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-[#080808] border-t border-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
              How We Operate
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">
              Our Values
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.12}>
                <div className="bg-[#111] border border-[#1e1e1e] p-8 h-full">
                  <div className="text-[#999] mb-5">{value.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-[#777] text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to work with us?</h2>
            <p className="text-[#777] mb-8">Get in touch for a free site assessment and honest quote.</p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#999] hover:bg-[#777] text-white font-semibold px-8 py-4 tracking-wide transition-all duration-200 hover:scale-105 text-sm"
            >
              Contact the Team
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
