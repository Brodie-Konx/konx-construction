import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Konx Construction Group PTY LTD. Get a free site assessment or quote for commercial construction in Perth, WA.",
};

const contactDetails = [
  {
    label: "Phone",
    value: "0478 530 664",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "Info@konxconstructiongroup.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Perth, Western Australia",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Operating Hours",
    value: "Mon–Fri 7:00am – 5:00pm AWST",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-40 pb-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-[#777] text-lg max-w-xl">
              Ready to discuss your project? Reach out for a free site assessment or to get a quote.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-16 pb-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Details */}
            <div className="lg:col-span-2">
              <AnimateOnScroll direction="left">
                <h2 className="text-xl font-bold text-white mb-8 tracking-tight">
                  Contact Details
                </h2>
                <div className="space-y-6 mb-10">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-[#111] border border-[#1e1e1e] flex items-center justify-center text-[#999] flex-shrink-0">
                        {detail.icon}
                      </div>
                      <div>
                        <p className="text-[#555] text-xs tracking-widest uppercase mb-1">
                          {detail.label}
                        </p>
                        <p className="text-white text-sm">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#111] border border-[#1e1e1e] p-6">
                  <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-2">
                    Free Site Assessment
                  </p>
                  <p className="text-[#777] text-sm leading-relaxed">
                    We offer free, no-obligation site assessments across the Perth metro area. Fill out the form and we&apos;ll be in touch within one business day.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll direction="right">
                <ContactForm />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
