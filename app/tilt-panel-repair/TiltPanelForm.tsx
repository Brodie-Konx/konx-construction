"use client";

import { useState } from "react";

export default function TiltPanelForm() {
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
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      formSource: "tilt-panel-repair",
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
        <h3 style={{ marginBottom: "12px" }}>Request Received</h3>
        <p style={{ color: "#A0A0A0" }}>
          Thanks for reaching out. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="lp-form" onSubmit={handleSubmit}>
      <h3>Request a Free Site Assessment</h3>
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
        <label htmlFor="service">Type of Repair</label>
        <select id="service" name="service">
          <option value="Crack Repair / Epoxy Injection">Crack Repair / Epoxy Injection</option>
          <option value="Spalling / Concrete Cancer">Spalling / Concrete Cancer</option>
          <option value="Structural Damage">Structural Damage</option>
          <option value="Not Sure — Need Assessment">Not Sure — Need Assessment</option>
        </select>
      </div>
      <div className="lp-form-group">
        <label htmlFor="message">Tell Us About the Damage</label>
        <textarea id="message" name="message" placeholder="Describe what you're seeing — cracks, spalling, water coming in, etc."></textarea>
      </div>
      {error && (
        <p style={{ color: "#ef4444", fontSize: "14px", textAlign: "center" }}>{error}</p>
      )}
      <button type="submit" className="lp-btn-submit" disabled={loading}>
        {loading ? "Sending..." : "Request Free Assessment"}
      </button>
    </form>
  );
}
