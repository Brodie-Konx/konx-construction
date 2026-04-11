import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tilt Panel Repair Perth | Konx Construction Group',
  description: 'Perth specialists in tilt panel crack repair, epoxy injection, and spalling remediation for commercial and industrial buildings. Free site assessment. Call 0478 530 664.',
  keywords: 'tilt panel repair Perth, concrete crack repair Perth, epoxy injection Perth, spalling repair Perth, concrete cancer repair Perth, tilt panel crack repair',
  openGraph: {
    title: 'Tilt Panel Repair Perth | Konx Construction Group',
    description: 'Perth specialists in tilt panel crack repair, epoxy injection, and spalling remediation. Free site assessment.',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function TiltPanelRepairPage() {
  return (
    <>
      <style>{`
        .lp-wrap { font-family: var(--font-geist-sans, 'Geist', system-ui, sans-serif); color: #fff; line-height: 1.6; }
        .lp-wrap *, .lp-wrap *::before, .lp-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .lp-container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        /* Hero */
        .lp-hero { background: #0A0A0A; padding: 80px 0 60px; }
        .lp-hero h1 { font-size: clamp(28px, 5vw, 48px); font-weight: 800; line-height: 1.1; margin-bottom: 20px; max-width: 700px; }
        .lp-hero h1 span { color: #999; }
        .lp-hero p { font-size: 18px; color: #A0A0A0; max-width: 600px; margin-bottom: 32px; line-height: 1.7; }
        .lp-ctas { display: flex; gap: 16px; flex-wrap: wrap; }

        /* Buttons */
        .lp-btn { display: inline-flex; align-items: center; gap: 8px; padding: 16px 32px; border-radius: 0; font-size: 16px; font-weight: 600; text-decoration: none; border: none; cursor: pointer; transition: all 0.2s; }
        .lp-btn-primary { background: #999; color: #0A0A0A; }
        .lp-btn-primary:hover { background: #b3b3b3; }
        .lp-btn-secondary { background: transparent; color: #fff; border: 1px solid #3B3B3B; }
        .lp-btn-secondary:hover { background: #141414; border-color: #999; }

        /* Trust Bar */
        .lp-trust { background: #141414; border-top: 1px solid #2A2A2A; border-bottom: 1px solid #2A2A2A; padding: 24px 0; }
        .lp-trust-items { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
        .lp-trust-item { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 500; }
        .lp-trust-icon { width: 24px; height: 24px; background: #999; display: flex; align-items: center; justify-content: center; color: #0A0A0A; font-size: 14px; flex-shrink: 0; }

        /* Sections */
        .lp-section { padding: 64px 0; }
        .lp-section h2 { font-size: 32px; font-weight: 700; margin-bottom: 16px; }
        .lp-subtitle { font-size: 18px; color: #A0A0A0; max-width: 600px; margin-bottom: 40px; }

        /* Problems */
        .lp-problems { background: #0A0A0A; }
        .lp-problem-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .lp-problem-card { background: #1A1A1A; padding: 28px; border-left: 4px solid #999; }
        .lp-problem-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .lp-problem-card p { font-size: 15px; color: #A0A0A0; line-height: 1.6; }

        /* Services */
        .lp-services { background: #141414; }
        .lp-service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .lp-service-card { background: #1A1A1A; padding: 32px; border: 1px solid #2A2A2A; transition: border-color 0.2s; }
        .lp-service-card:hover { border-color: #999; }
        .lp-service-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
        .lp-service-card p { font-size: 15px; color: #A0A0A0; line-height: 1.7; margin-bottom: 16px; }
        .lp-service-card ul { list-style: none; padding: 0; }
        .lp-service-card ul li { padding: 6px 0; font-size: 14px; display: flex; align-items: flex-start; gap: 8px; }
        .lp-service-card ul li::before { content: "✓"; color: #999; font-weight: 700; flex-shrink: 0; }

        /* Why Us */
        .lp-why { background: #0A0A0A; }
        .lp-why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px; }
        .lp-why-card { text-align: center; padding: 20px; }
        .lp-why-number { font-size: 40px; font-weight: 800; color: #999; margin-bottom: 8px; }
        .lp-why-card h3 { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
        .lp-why-card p { font-size: 14px; color: #A0A0A0; line-height: 1.6; }

        /* Process */
        .lp-process { background: #141414; }
        .lp-process-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; counter-reset: step; }
        .lp-process-step { position: relative; padding: 24px; background: #1A1A1A; border: 1px solid #2A2A2A; }
        .lp-step-number { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #999; color: #0A0A0A; font-weight: 700; font-size: 16px; margin-bottom: 16px; }
        .lp-process-step h3 { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
        .lp-process-step p { font-size: 14px; color: #A0A0A0; line-height: 1.6; }

        /* CTA Banner */
        .lp-cta-banner { background: #050505; padding: 64px 0; text-align: center; border-top: 1px solid #2A2A2A; border-bottom: 1px solid #2A2A2A; }
        .lp-cta-banner h2 { font-size: 32px; margin-bottom: 12px; }
        .lp-cta-banner p { font-size: 18px; color: #A0A0A0; margin-bottom: 32px; max-width: 500px; margin-left: auto; margin-right: auto; }
        .lp-cta-banner .lp-ctas { justify-content: center; }

        /* Contact */
        .lp-contact { background: #0A0A0A; }
        .lp-contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .lp-contact-info p { font-size: 16px; color: #A0A0A0; margin-bottom: 24px; line-height: 1.7; }
        .lp-contact-detail { display: flex; align-items: center; gap: 12px; padding: 12px 0; font-size: 16px; color: #A0A0A0; }
        .lp-contact-detail strong { color: #fff; }
        .lp-contact-detail a { color: #fff; text-decoration: none; }

        .lp-form { background: #1A1A1A; padding: 32px; border: 1px solid #2A2A2A; }
        .lp-form h3 { font-size: 20px; font-weight: 700; margin-bottom: 20px; }
        .lp-form-group { margin-bottom: 16px; }
        .lp-form-group label { display: block; font-size: 14px; font-weight: 600; margin-bottom: 6px; }
        .lp-form-group input, .lp-form-group textarea, .lp-form-group select { width: 100%; padding: 12px 16px; border: 1px solid #3B3B3B; border-radius: 0; font-size: 15px; font-family: inherit; background: #0A0A0A; color: #fff; }
        .lp-form-group textarea { resize: vertical; min-height: 100px; }
        .lp-form-group input:focus, .lp-form-group textarea:focus, .lp-form-group select:focus { outline: none; border-color: #999; box-shadow: 0 0 0 3px rgba(153,153,153,0.15); }
        .lp-form-group input::placeholder, .lp-form-group textarea::placeholder { color: #555; }
        .lp-form-group select option { background: #1A1A1A; color: #fff; }
        .lp-btn-submit { width: 100%; padding: 16px; background: #999; color: #0A0A0A; border: none; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
        .lp-btn-submit:hover { background: #b3b3b3; }

        /* Footer */
        .lp-footer { background: #050505; color: #A0A0A0; padding: 40px 0; font-size: 14px; text-align: center; border-top: 1px solid #2A2A2A; }
        .lp-footer a { color: #A0A0A0; text-decoration: none; }
        .lp-footer a:hover { color: #fff; }

        @media (max-width: 768px) {
          .lp-contact-layout { grid-template-columns: 1fr; }
          .lp-hero { padding: 48px 0 40px; }
          .lp-section { padding: 48px 0; }
          .lp-trust-items { flex-direction: column; align-items: flex-start; gap: 12px; padding-left: 24px; }
        }
      `}</style>

      <div className="lp-wrap">
        {/* HERO */}
        <section className="lp-hero lp-section">
          <div className="lp-container">
            <h1>Tilt Panel Crack Repair <span>Perth Specialists</span></h1>
            <p>Epoxy injection, spalling remediation, and structural crack repair for commercial and industrial buildings across Perth metro. Honest advice. Work that lasts.</p>
            <div className="lp-ctas">
              <a href="tel:0478530664" className="lp-btn lp-btn-primary">Call 0478 530 664</a>
              <a href="#contact" className="lp-btn lp-btn-secondary">Get a Free Site Assessment</a>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <div className="lp-trust">
          <div className="lp-container">
            <div className="lp-trust-items">
              <div className="lp-trust-item">
                <div className="lp-trust-icon">✓</div>
                Perth-Based Local Team
              </div>
              <div className="lp-trust-item">
                <div className="lp-trust-icon">✓</div>
                Licensed &amp; Fully Insured
              </div>
              <div className="lp-trust-item">
                <div className="lp-trust-icon">✓</div>
                Fixed-Price Quotes
              </div>
              <div className="lp-trust-item">
                <div className="lp-trust-icon">✓</div>
                Free Site Assessment
              </div>
            </div>
          </div>
        </div>

        {/* PROBLEMS WE FIX */}
        <section className="lp-problems lp-section">
          <div className="lp-container">
            <h2>Tilt Panel Damage Gets Worse — Not Better</h2>
            <p className="lp-subtitle">If you&apos;ve noticed any of these, it&apos;s time to act before a small problem becomes a major structural issue.</p>
            <div className="lp-problem-grid">
              <div className="lp-problem-card">
                <h3>Cracking</h3>
                <p>Shrinkage cracks, structural cracks, and hairline fractures that allow water into the panel — accelerating corrosion of the reinforcing steel inside.</p>
              </div>
              <div className="lp-problem-card">
                <h3>Spalling &amp; Concrete Cancer</h3>
                <p>Concrete breaking away from the surface, exposing rusted rebar underneath. Left untreated, this leads to structural failure and costly full-panel replacement.</p>
              </div>
              <div className="lp-problem-card">
                <h3>Impact Damage &amp; Defects</h3>
                <p>Forklift strikes, vehicle impact, panel movement, and original construction defects that compromise the panel&apos;s integrity and your building&apos;s safety.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="lp-services lp-section">
          <div className="lp-container">
            <h2>How We Fix It</h2>
            <p className="lp-subtitle">We don&apos;t just patch — we fix the root cause so the problem doesn&apos;t come back.</p>
            <div className="lp-service-grid">
              <div className="lp-service-card">
                <h3>Epoxy Injection</h3>
                <p>High-pressure epoxy injection that penetrates the full depth of the crack, restoring structural strength and sealing against water ingress.</p>
                <ul>
                  <li>Structural and cosmetic crack repair</li>
                  <li>Full-depth penetration</li>
                  <li>Restores original load capacity</li>
                  <li>Prevents further water damage</li>
                </ul>
              </div>
              <div className="lp-service-card">
                <h3>Spalling &amp; Concrete Cancer Repair</h3>
                <p>We remove the damaged concrete, treat the exposed rebar with rust inhibitors, and reinstate with high-strength repair mortar.</p>
                <ul>
                  <li>Delaminated concrete removal</li>
                  <li>Rebar treatment and protection</li>
                  <li>High-strength mortar reinstatement</li>
                  <li>Surface finishing and coating</li>
                </ul>
              </div>
              <div className="lp-service-card">
                <h3>Structural Remediation</h3>
                <p>For panels with significant damage, movement, or reinforcement corrosion — full structural assessment and remediation to bring your building back to code.</p>
                <ul>
                  <li>Full structural assessment</li>
                  <li>Reinforcement corrosion treatment</li>
                  <li>Panel stabilisation</li>
                  <li>Compliance sign-off</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="lp-why lp-section">
          <div className="lp-container">
            <h2 style={{ textAlign: 'center' }}>Why Perth Building Owners Choose Us</h2>
            <p className="lp-subtitle" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>We&apos;re not a national franchise. We&apos;re a local Perth team that knows the climate, the councils, and the buildings.</p>
            <div className="lp-why-grid">
              <div className="lp-why-card">
                <div className="lp-why-number">100%</div>
                <h3>Local Perth Team</h3>
                <p>We understand Perth&apos;s climate, regulations, and building standards inside out. No subcontractors from interstate.</p>
              </div>
              <div className="lp-why-card">
                <div className="lp-why-number">48hr</div>
                <h3>Fast Response</h3>
                <p>We know building issues don&apos;t wait. Contact us and we&apos;ll have someone on-site within 48 hours for a free assessment.</p>
              </div>
              <div className="lp-why-card">
                <div className="lp-why-number">$0</div>
                <h3>Free Site Assessment</h3>
                <p>We&apos;ll inspect the damage, tell you exactly what needs fixing, and give you a fixed-price quote with no obligation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="lp-process lp-section">
          <div className="lp-container">
            <h2>How It Works</h2>
            <p className="lp-subtitle">From first call to finished repair — here&apos;s what to expect.</p>
            <div className="lp-process-steps">
              <div className="lp-process-step">
                <div className="lp-step-number">1</div>
                <h3>Call or Enquire</h3>
                <p>Tell us about the damage. A quick phone call or form submission is all it takes to get started.</p>
              </div>
              <div className="lp-process-step">
                <div className="lp-step-number">2</div>
                <h3>Free Site Assessment</h3>
                <p>We come to you, inspect the panels, identify the root cause, and explain what needs to be done — in plain English.</p>
              </div>
              <div className="lp-process-step">
                <div className="lp-step-number">3</div>
                <h3>Fixed-Price Quote</h3>
                <p>You get a clear, written quote with the full scope of work. No surprises, no obligation. Take your time to decide.</p>
              </div>
              <div className="lp-process-step">
                <div className="lp-step-number">4</div>
                <h3>Repair &amp; Sign-Off</h3>
                <p>We complete the repair on time and on budget, clean up, and hand over documentation for your records.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="lp-cta-banner">
          <div className="lp-container">
            <h2>Don&apos;t Let a Crack Become a Catastrophe</h2>
            <p>The longer you wait, the worse it gets — and the more it costs. Get a free site assessment today.</p>
            <div className="lp-ctas">
              <a href="tel:0478530664" className="lp-btn lp-btn-primary">Call 0478 530 664</a>
              <a href="#contact" className="lp-btn lp-btn-secondary">Request a Free Assessment</a>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="lp-contact lp-section" id="contact">
          <div className="lp-container">
            <div className="lp-contact-layout">
              <div className="lp-contact-info">
                <h2>Get in Touch</h2>
                <p>Whether it&apos;s a single cracked panel or a full building remediation, we&apos;ll give you a straight answer and a fair price. No sales pitch — just honest advice from builders who know tilt panels.</p>
                <div className="lp-contact-detail">
                  <strong>Phone:</strong> <a href="tel:0478530664">0478 530 664</a>
                </div>
                <div className="lp-contact-detail">
                  <strong>Email:</strong> <a href="mailto:Info@konxconstructiongroup.com">Info@konxconstructiongroup.com</a>
                </div>
                <div className="lp-contact-detail">
                  <strong>Hours:</strong> Mon–Fri, 7:00am – 5:00pm AWST
                </div>
                <div className="lp-contact-detail">
                  <strong>Location:</strong> Perth, Western Australia
                </div>
              </div>

              <form className="lp-form" action="/contact" method="GET">
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
                    <option value="crack-repair">Crack Repair / Epoxy Injection</option>
                    <option value="spalling">Spalling / Concrete Cancer</option>
                    <option value="structural">Structural Damage</option>
                    <option value="other">Not Sure — Need Assessment</option>
                  </select>
                </div>
                <div className="lp-form-group">
                  <label htmlFor="message">Tell Us About the Damage</label>
                  <textarea id="message" name="message" placeholder="Describe what you're seeing — cracks, spalling, water coming in, etc."></textarea>
                </div>
                <button type="submit" className="lp-btn-submit">Request Free Assessment</button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="lp-footer">
          <div className="lp-container">
            <p>© 2026 Konx Construction Group PTY LTD. All rights reserved. | <a href="https://www.konxconstructiongroup.com">www.konxconstructiongroup.com</a></p>
            <p style={{ marginTop: '8px' }}>Perth, Western Australia | Licensed Builder | ABN/ACN registered</p>
          </div>
        </footer>
      </div>
    </>
  )
}
