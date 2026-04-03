"use client";

import { useState } from "react";

const services = [
  "Tilt Panel Repair",
  "Commercial Fit Out",
  "Concrete Works",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire up to your backend or form service
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#111] border border-[#1e1e1e] p-10 text-center">
        <div className="w-12 h-12 bg-[#0066ff]/20 border border-[#0066ff]/30 flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-[#0066ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-2">Message Received</h3>
        <p className="text-[#777] text-sm">
          Thanks for reaching out. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111] border border-[#1e1e1e] p-8 space-y-5"
    >
      <h2 className="text-xl font-bold text-white mb-6 tracking-tight">Send Us a Message</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#888] text-xs tracking-widest uppercase mb-2" htmlFor="name">
            Full Name <span className="text-[#0066ff]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="w-full bg-[#0a0a0a] border border-[#222] text-white placeholder-[#444] px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[#888] text-xs tracking-widest uppercase mb-2" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your Company Pty Ltd"
            className="w-full bg-[#0a0a0a] border border-[#222] text-white placeholder-[#444] px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#888] text-xs tracking-widest uppercase mb-2" htmlFor="phone">
            Phone <span className="text-[#0066ff]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="04XX XXX XXX"
            className="w-full bg-[#0a0a0a] border border-[#222] text-white placeholder-[#444] px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[#888] text-xs tracking-widest uppercase mb-2" htmlFor="email">
            Email <span className="text-[#0066ff]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com.au"
            className="w-full bg-[#0a0a0a] border border-[#222] text-white placeholder-[#444] px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[#888] text-xs tracking-widest uppercase mb-2" htmlFor="service">
          Service Needed <span className="text-[#0066ff]">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full bg-[#0a0a0a] border border-[#222] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-colors appearance-none cursor-pointer"
        >
          <option value="" disabled className="text-[#444]">
            Select a service...
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-[#111]">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[#888] text-xs tracking-widest uppercase mb-2" htmlFor="message">
          Message <span className="text-[#0066ff]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your project or what you need help with..."
          className="w-full bg-[#0a0a0a] border border-[#222] text-white placeholder-[#444] px-4 py-3 text-sm focus:outline-none focus:border-[#0066ff] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#0066ff] hover:bg-[#0052cc] disabled:bg-[#0066ff]/50 text-white font-semibold py-4 tracking-wide transition-all duration-200 hover:scale-[1.01] active:scale-100 text-sm flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-[#444] text-xs text-center">
        We respond within one business day · Perth, WA
      </p>
    </form>
  );
}
