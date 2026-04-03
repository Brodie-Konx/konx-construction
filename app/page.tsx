import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Konx Construction Group PTY LTD | Perth Commercial Construction",
  description:
    "Perth's commercial construction specialists. Tilt panel repair, commercial fit out, and concrete works. Get a free quote today.",
};

const services = [
  {
    title: "Tilt Panel Repair",
    description:
      "Expert repair of cracked, spalled, and deteriorating tilt panel structures. We restore structural integrity and extend the life of your building.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Commercial Fit Out",
    description:
      "Full commercial interior fit outs from shell to finished space. Offices, warehouses, retail, and industrial facilities across Perth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Concrete Works",
    description:
      "Structural concrete — slabs, footings, hardstand, and more. Precision poured and finished to specification.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

const trustPoints = [
  {
    title: "Experienced Team",
    description: "Our tradespeople bring decades of commercial construction experience across Perth and WA.",
  },
  {
    title: "Perth-Based & Local",
    description: "100% local team. We understand Perth's climate, regulations, and building standards inside out.",
  },
  {
    title: "Fast Turnaround",
    description: "We minimise downtime on your site. Efficient project management keeps work on schedule.",
  },
  {
    title: "Free Site Assessments",
    description: "No obligation. We'll come to your site, assess the scope, and provide a clear, honest quote.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/concrete-works.jpg"
            alt="Commercial construction site Perth"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#999]/30 bg-[#999]/10 px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#999] animate-pulse" />
              <span className="text-[#999] text-xs font-medium tracking-widest uppercase">
                Perth, Western Australia
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white mb-6">
              Perth&apos;s Commercial
              <span className="block text-[#999]">Construction</span>
              <span className="block">Specialists</span>
            </h1>

            <p className="text-lg md:text-xl text-[#aaa] max-w-xl leading-relaxed mb-10">
              Tilt panel repair, commercial fit out, and precision concrete works.
              Built for businesses that demand quality and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#999] hover:bg-[#777] text-white font-semibold px-8 py-4 tracking-wide transition-all duration-200 hover:scale-105 active:scale-100 text-sm"
              >
                Get a Free Quote
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 tracking-wide transition-all duration-200 text-sm"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="mb-16">
              <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Core Services
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 0.1}>
                <div className="group bg-[#111] border border-[#1e1e1e] p-8 hover:border-[#999]/40 transition-all duration-300 hover:bg-[#111]/80">
                  <div className="text-[#999] mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#777] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="text-[#999] text-sm font-medium hover:underline inline-flex items-center gap-1 group/link"
                  >
                    Learn more
                    <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 lg:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimateOnScroll direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
                  alt="Commercial construction Perth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 to-transparent" />
              </div>
            </AnimateOnScroll>

            {/* Content */}
            <div>
              <AnimateOnScroll direction="right">
                <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
                  Why Choose Us
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                  Built on Trust,<br />Delivered on Time
                </h2>
                <p className="text-[#777] leading-relaxed mb-10">
                  When you&apos;re managing a commercial project, you need a contractor who shows up, communicates clearly, and delivers exactly what was agreed. That&apos;s how we operate — every job.
                </p>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {trustPoints.map((point, i) => (
                  <AnimateOnScroll key={point.title} delay={i * 0.1} direction="right">
                    <div className="flex gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#999]/20 border border-[#999]/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#999]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">{point.title}</h3>
                        <p className="text-[#666] text-sm leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-[#0a0a0a] border-t border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-4">
              Let&apos;s Work Together
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[#777] text-lg max-w-xl mx-auto mb-10">
              Contact us today for a free site assessment. No obligation — just an honest conversation about your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#999] hover:bg-[#777] text-white font-semibold px-10 py-4 tracking-wide transition-all duration-200 hover:scale-105 active:scale-100 text-sm"
            >
              Contact Us Today
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
