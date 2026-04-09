import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Tilt Panel Repair Perth | Expert Precast Panel Repairs",
  description:
    "Perth's tilt panel repair specialists. We fix cracking, spalling, joint failure & structural damage in commercial and industrial buildings. Free site assessment — call 0478 530 664.",
  keywords: [
    "tilt panel repair Perth",
    "precast panel repair Perth",
    "concrete panel repair Perth",
    "tilt panel crack repair",
    "tilt up panel repair WA",
    "commercial concrete repair Perth",
    "warehouse panel repair Perth",
    "spalling repair Perth",
  ],
  alternates: {
    canonical: "https://www.konxconstructiongroup.com/services/tilt-panel-repair-perth",
  },
};

const problems = [
  {
    title: "Cracking & Spalling",
    description:
      "Surface cracks widen over time. Concrete spalls and breaks away, exposing reinforcement to moisture and accelerating deterioration.",
  },
  {
    title: "Joint Seal Failure",
    description:
      "Panel joints dry out and crack, allowing water ingress into the building envelope. This damages goods, equipment, and internal fit outs.",
  },
  {
    title: "Structural Movement",
    description:
      "Ground settlement, thermal expansion, and vibration cause panels to shift. Left unchecked, this creates serious structural and safety risks.",
  },
  {
    title: "Reinforcement Corrosion",
    description:
      "Once moisture penetrates the concrete, steel reinforcement begins to rust. Rust expansion fractures the concrete from the inside out.",
  },
  {
    title: "Impact Damage",
    description:
      "Forklift strikes, vehicle impacts, and loading dock collisions are common in industrial buildings. Panels need fast, structural repair.",
  },
  {
    title: "Water Ingress",
    description:
      "Failed joints and surface cracks let water into your building. This leads to mould, structural damage, and costly tenant disputes.",
  },
];

const process = [
  {
    step: "01",
    title: "Free Site Assessment",
    description:
      "We come to your site, inspect the damage, and assess the full extent of the issue — no charge, no obligation.",
  },
  {
    step: "02",
    title: "Detailed Quote",
    description:
      "You get a clear, fixed-price quote covering the scope of work, materials, timeline, and any access requirements.",
  },
  {
    step: "03",
    title: "Targeted Repair",
    description:
      "Our team executes the repair with minimal disruption to your operations. We work around your tenants and schedule.",
  },
  {
    step: "04",
    title: "Quality Handover",
    description:
      "Defects inspection, clean-up, and photographic documentation of completed work. Your building is protected.",
  },
];

const areas = [
  "Welshpool",
  "Malaga",
  "Canning Vale",
  "Bibra Lake",
  "Kewdale",
  "Forrestfield",
  "Osborne Park",
  "Balcatta",
  "Wangara",
  "Jandakot",
  "Henderson",
  "Rockingham",
  "Midland",
  "Bayswater",
  "Joondalup",
  "All Perth Metro",
];

const faqs = [
  {
    q: "How much does tilt panel repair cost in Perth?",
    a: "Costs depend on the extent of damage, panel size, and access requirements. Minor crack repairs can start from a few hundred dollars, while major structural repairs on multiple panels are quoted individually. We provide free, no-obligation site assessments so you know exactly what you're dealing with before committing.",
  },
  {
    q: "How long does tilt panel repair take?",
    a: "Most single-panel repairs are completed within one to two days. Larger jobs involving multiple panels or structural work may take a week or more. We always provide a clear timeline upfront and work to minimise disruption to your business operations.",
  },
  {
    q: "Can you repair tilt panels while the building is occupied?",
    a: "Yes. The majority of our tilt panel repairs are carried out on occupied commercial and industrial buildings. We coordinate with tenants and property managers to schedule work around business operations.",
  },
  {
    q: "Do you handle insurance claims for panel damage?",
    a: "We work with insurance companies regularly. We can provide detailed damage reports, photographic evidence, and scope-of-work documentation to support your claim.",
  },
  {
    q: "What causes tilt panels to crack?",
    a: "Common causes include ground settlement, thermal expansion and contraction, impact damage from forklifts or vehicles, age-related concrete deterioration, and poor original construction. Perth's climate — hot summers and wet winters — accelerates these issues.",
  },
  {
    q: "Is it urgent to repair cracked tilt panels?",
    a: "Yes. Cracks allow moisture in, which corrodes the internal steel reinforcement. This corrosion causes the concrete to fracture further from the inside. Early repair is always cheaper and less disruptive than delayed repair.",
  },
];

export default function TiltPanelRepairPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/concrete-works.jpg"
            alt="Tilt panel repair Perth - commercial construction"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a] to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimateOnScroll>
              <div className="inline-flex items-center gap-2 border border-[#999]/30 bg-[#999]/10 px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#999] animate-pulse" />
                <span className="text-[#999] text-xs font-medium tracking-widest uppercase">
                  Perth Tilt Panel Specialists
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white mb-6">
                Tilt Panel Repair
                <span className="block text-[#999]">Perth</span>
              </h1>

              <p className="text-lg md:text-xl text-[#aaa] max-w-xl leading-relaxed mb-4">
                Expert repair of cracked, spalled, and damaged tilt panel buildings
                across Perth. We restore structural integrity and protect your asset.
              </p>

              <p className="text-[#777] text-sm mb-10">
                Free site assessments · No obligation quotes · Fast turnaround
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0478530664"
                  className="inline-flex items-center justify-center bg-[#999] hover:bg-[#777] text-white font-semibold px-8 py-4 tracking-wide transition-all duration-200 hover:scale-105 active:scale-100 text-sm"
                >
                  Call 0478 530 664
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 tracking-wide transition-all duration-200 text-sm"
                >
                  Get a Free Quote
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 bg-[#080808] border-t border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "Free", label: "Site Assessments" },
              { value: "24hr", label: "Quote Turnaround" },
              { value: "100%", label: "Perth Based" },
              { value: "Mon–Fri", label: "7am – 5pm" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-white font-bold text-xl tracking-tight">{item.value}</p>
                <p className="text-[#666] text-xs tracking-widest uppercase mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS WE FIX */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="mb-16">
              <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
                Common Tilt Panel Issues
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Problems We Fix
              </h2>
              <p className="text-[#777] max-w-2xl">
                Perth&apos;s hot summers and wet winters take a toll on tilt panel buildings.
                These are the most common issues we see and repair across commercial and
                industrial properties.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, i) => (
              <AnimateOnScroll key={problem.title} delay={i * 0.08}>
                <div className="bg-[#111] border border-[#1e1e1e] p-7 hover:border-[#999]/30 transition-all duration-300 h-full">
                  <div className="w-8 h-8 bg-[#999]/15 border border-[#999]/25 flex items-center justify-center mb-4">
                    <svg className="w-4 h-4 text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 tracking-tight">
                    {problem.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ACT NOW */}
      <section className="py-20 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1679530988140-d6844f4e2ee8?w=1000&q=80"
                  alt="Tilt panel building Perth requiring repair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
                Don&apos;t Wait
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
                Early Repair Saves Money
              </h2>
              <p className="text-[#888] leading-relaxed mb-6">
                A small crack today becomes a major structural issue tomorrow. Once moisture
                gets in, it corrodes the steel reinforcement inside the panel. Rust expands
                and fractures the concrete from within — turning a simple repair into a
                panel replacement.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                The cost difference between early intervention and delayed repair is
                significant. We&apos;ve seen jobs that would have been a few thousand dollars
                become five-figure panel replacements because the owner waited too long.
              </p>

              <div className="bg-[#111] border border-[#1e1e1e] p-6">
                <p className="text-white font-semibold text-sm mb-2">Free, no-obligation assessment</p>
                <p className="text-[#666] text-sm leading-relaxed">
                  We&apos;ll come to your site, inspect the damage, and give you an honest
                  assessment of what needs to be done — and what can wait. No pressure,
                  no upselling.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="mb-16">
              <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
                How It Works
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Our Repair Process
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 0.1}>
                <div className="bg-[#111] border border-[#1e1e1e] p-7 h-full">
                  <p className="text-[#999] text-xs font-bold tracking-widest mb-3">
                    {step.step}
                  </p>
                  <h3 className="text-white font-bold text-sm mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="mb-12">
              <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
                Areas We Service
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
                Tilt Panel Repair Across Perth
              </h2>
              <p className="text-[#777] max-w-2xl">
                We service all commercial and industrial areas across the Perth
                metropolitan region. If your building has tilt panels, we can help.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="bg-[#111] border border-[#1e1e1e] px-4 py-3 text-sm text-[#888] hover:border-[#999]/30 hover:text-white transition-all duration-200"
                >
                  {area}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="mb-16">
              <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
                Common Questions
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.06}>
                <div className="bg-[#111] border border-[#1e1e1e] p-6">
                  <h3 className="text-white font-semibold text-sm mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-[#777] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Tilt Panel Repair Perth",
            description:
              "Expert tilt panel repair for commercial and industrial buildings in Perth, Western Australia. We fix cracking, spalling, joint failure, reinforcement corrosion, and impact damage.",
            provider: {
              "@type": "LocalBusiness",
              name: "Konx Construction Group PTY LTD",
              telephone: "0478 530 664",
              email: "Info@konxconstructiongroup.com",
              url: "https://www.konxconstructiongroup.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Perth",
                addressRegion: "WA",
                addressCountry: "AU",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Perth",
              containedInPlace: {
                "@type": "State",
                name: "Western Australia",
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Tilt Panel Repair Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tilt Panel Crack Repair" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Spalling Repair" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Panel Joint Resealing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Structural Panel Repair" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Impact Damage Repair" } },
              ],
            },
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* CTA */}
      <section className="py-24 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-4">
              Get Started Today
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Need Tilt Panel Repair in Perth?
            </h2>
            <p className="text-[#777] text-lg max-w-xl mx-auto mb-10">
              Call us or fill out the form for a free site assessment. We&apos;ll be on site
              within days — not weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0478530664"
                className="inline-flex items-center justify-center bg-[#999] hover:bg-[#777] text-white font-semibold px-10 py-4 tracking-wide transition-all duration-200 hover:scale-105 active:scale-100 text-sm"
              >
                Call 0478 530 664
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white font-medium px-10 py-4 tracking-wide transition-all duration-200 text-sm"
              >
                Request a Free Quote
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
