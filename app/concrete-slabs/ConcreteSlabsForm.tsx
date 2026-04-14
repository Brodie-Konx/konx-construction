"use client";

import { useState } from "react";

export default function ConcreteSlabsForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      suburb: (form.elements.namedItem("suburb") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      jobType: (form.elements.namedItem("jobType") as HTMLSelectElement).value,
      size: (form.elements.namedItem("size") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      formSource: "concrete-slabs",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please call us instead.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="lp-form" style={{ textAlign: "center", padding: "40px 24px" }}>
        <h3 style={{ marginBottom: "12px" }}>Booking Received</h3>
        <p style={{ color: "#A0A0A0" }}>
          Thanks — we&apos;ll confirm your booking same day. If it&apos;s urgent, call us on{" "}
          <a href="tel:0478530664" style={{ color: "#fff" }}>0478 530 664</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="lp-form" onSubmit={handleSubmit}>
      <h3>Make a Booking</h3>
      <div className="lp-form-group">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Full name" required />
      </div>
      <div className="lp-form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="0400 000 000" required />
      </div>
      <div className="lp-form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="you@example.com" />
      </div>
      <div className="lp-form-group">
        <label htmlFor="suburb">Suburb</label>
        <input type="text" id="suburb" name="suburb" placeholder="e.g. Baldivis, Joondalup, Canning Vale" required />
      </div>
      <div className="lp-form-group">
        <label htmlFor="address">Job Address</label>
        <input type="text" id="address" name="address" placeholder="Street address where the work is needed" required />
      </div>
      <div className="lp-form-group">
        <label htmlFor="jobType">Type of Job</label>
        <select id="jobType" name="jobType">
          <option value="Shed or Garage Slab">Shed or Garage Slab</option>
          <option value="Patio / Entertaining Area">Patio / Entertaining Area</option>
          <option value="Driveway / Crossover">Driveway / Crossover</option>
          <option value="Path or Walkway">Path or Walkway</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="lp-form-group">
        <label htmlFor="size">Approximate Size</label>
        <select id="size" name="size">
          <option value="Under 5m2">Under 5m2</option>
          <option value="5 – 10m2">5 – 10m2</option>
          <option value="10 – 15m2">10 – 15m2</option>
          <option value="15 – 25m2">15 – 25m2</option>
          <option value="Not sure">Not sure</option>
        </select>
      </div>
      <div className="lp-form-group">
        <label htmlFor="message">Anything Else We Should Know?</label>
        <textarea id="message" name="message" placeholder="Access, ground conditions, timing — anything helpful." />
      </div>
      {error && (
        <p style={{ color: "#ef4444", fontSize: "14px", textAlign: "center", marginBottom: "12px" }}>{error}</p>
      )}
      <button type="submit" className="lp-btn-submit" disabled={loading}>
        {loading ? "Sending..." : "Book My Job"}
      </button>
      <p style={{ textAlign: "center", fontSize: "13px", color: "#A0A0A0", marginTop: "12px" }}>
        We confirm same day — usually within a few hours.
      </p>
    </form>
  );
}
