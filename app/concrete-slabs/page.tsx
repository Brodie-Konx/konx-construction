import type { Metadata } from 'next'
import ConcreteSlabsForm from './ConcreteSlabsForm'

export const metadata: Metadata = {
  title: 'Shed Slabs & Small Concrete Jobs Perth | Konx Construction Group',
  description: 'Shed slabs, patios, driveways and paths up to 25m2. Fixed pricing from $1,750. Grey concrete specialists serving all Perth suburbs. Free quotes — call 0478 530 664.',
  keywords: 'shed slab Perth, small concrete slab Perth, concrete patio Perth, driveway slab Perth, concrete path Perth, grey concrete Perth',
  openGraph: {
    title: 'Shed Slabs & Small Concrete Jobs Perth | Konx Construction Group',
    description: 'Fixed pricing from $1,750. Shed slabs, patios, driveways and paths up to 25m2. Serving all Perth suburbs.',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function ConcreteSlabsPage() {
  return (
    <>
      <style>{`
        .lp-wrap { font-family: var(--font-geist-sans, 'Geist', system-ui, sans-serif); color: #fff; line-height: 1.6; background: #0A0A0A; }
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

        /* Pricing */
        .lp-pricing { background: #141414; }
        .lp-pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 700px; }
        .lp-pricing-card { background: #1A1A1A; border: 1px solid #2A2A2A; padding: 36px 32px; }
        .lp-pricing-card.featured { border-color: #999; }
        .lp-pricing-label { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #999; margin-bottom: 8px; }
        .lp-pricing-size { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
        .lp-pricing-price { font-size: 40px; font-weight: 800; line-height: 1.1; margin-bottom: 4px; }
        .lp-pricing-price span { font-size: 18px; font-weight: 500; color: #A0A0A0; }
        .lp-pricing-note { font-size: 13px; color: #A0A0A0; margin-top: 16px; padding-top: 16px; border-top: 1px solid #2A2A2A; line-height: 1.5; }
        .lp-pricing-disclaimer { font-size: 13px; color: #A0A0A0; margin-top: 24px; font-style: italic; }

        /* Services */
        .lp-services { background: #0A0A0A; }
        .lp-service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        .lp-service-card { background: #1A1A1A; padding: 32px; border: 1px solid #2A2A2A; border-left: 4px solid #999; }
        .lp-service-card.featured { border-left-color: #fff; }
        .lp-service-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
        .lp-service-card p { font-size: 15px; color: #A0A0A0; line-height: 1.7; }

        /* Callout */
        .lp-callout { background: #141414; }
        .lp-callout-box { background: #1A1A1A; border: 1px solid #3B3B3B; border-left: 4px solid #999; padding: 28px 32px; max-width: 720px; }
        .lp-callout-box h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
        .lp-callout-box p { font-size: 15px; color: #A0A0A0; line-height: 1.7; }

        /* Why Us */
        .lp-why { background: #141414; }
        .lp-why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px; }
        .lp-why-card { text-align: center; padding: 20px; }
        .lp-why-number { font-size: 40px; font-weight: 800; color: #999; margin-bottom: 8px; }
        .lp-why-card h3 { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
        .lp-why-card p { font-size: 14px; color: #A0A0A0; line-height: 1.6; }

        /* Process */
        .lp-process { background: #0A0A0A; }
        .lp-process-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; }
        .lp-process-step { padding: 24px; background: #1A1A1A; border: 1px solid #2A2A2A; }
        .lp-step-number { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #999; color: #0A0A0A; font-weight: 700; font-size: 16px; margin-bottom: 16px; }
        .lp-process-step h3 { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
        .lp-process-step p { font-size: 14px; color: #A0A0A0; line-height: 1.6; }

        /* Social Proof */
        .lp-reviews { background: #141414; }
        .lp-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        .lp-review-card { background: #1A1A1A; border: 1px solid #2A2A2A; padding: 28px; }
        .lp-review-stars { color: #f0c040; font-size: 18px; margin-bottom: 12px; letter-spacing: 2px; }
        .lp-review-text { font-size: 15px; color: #A0A0A0; line-height: 1.7; margin-bottom: 16px; font-style: italic; }
        .lp-review-author { font-size: 14px; font-weight: 600; }
        .lp-review-location { font-size: 13px; color: #A0A0A0; }

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
        .lp-btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        /* Footer */
        .lp-footer { background: #050505; color: #A0A0A0; padding: 40px 0; font-size: 14px; text-align: center; border-top: 1px solid #2A2A2A; }
        .lp-footer a { color: #A0A0A0; text-decoration: none; }
        .lp-footer a:hover { color: #fff; }

        /* Sticky mobile call button */
        .lp-sticky-call { display: none; position: fixed; bottom: 0; left: 0; right: 0; z-index: 999; background: #999; color: #0A0A0A; text-align: center; padding: 16px; font-size: 17px; font-weight: 700; text-decoration: none; }

        @media (max-width: 768px) {
          .lp-contact-layout { grid-template-columns: 1fr; }
          .lp-hero { padding: 48px 0 40px; }
          .lp-section { padding: 48px 0; }
          .lp-trust-items { flex-direction: column; align-items: flex-start; gap: 12px; padding-left: 24px; }
          .lp-sticky-call { display: block; }
          .lp-wrap { padding-bottom: 60px; }
        }
      `}</style>

      <div className="lp-wrap">

        {/* HERO */}
        <section className="lp-hero lp-section">
          <div className="lp-container">
            <h1>Shed Slabs &amp; Small Concrete Jobs <span>Perth</span></h1>
            <p>Need a slab poured before your shed goes up? We specialise in shed slabs, patios, driveways and paths up to 25m2. Grey concrete, fixed pricing, fast turnaround.</p>
            <div className="lp-ctas">
              <a href="tel:0478530664" className="lp-btn lp-btn-primary">Call 0478 530 664</a>
              <a href="#contact" className="lp-btn lp-btn-secondary">Make a Booking</a>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <div className="lp-trust">
          <div className="lp-container">
            <div className="lp-trust-items">
              <div className="lp-trust-item"><div className="lp-trust-icon">✓</div>Jobs Up To 25m2</div>
              <div className="lp-trust-item"><div className="lp-trust-icon">✓</div>Fixed Upfront Pricing</div>
              <div className="lp-trust-item"><div className="lp-trust-icon">✓</div>Perth-Based Team</div>
              <div className="lp-trust-item"><div className="lp-trust-icon">✓</div>Licensed WA Builder</div>
              <div className="lp-trust-item"><div className="lp-trust-icon">✓</div>All Perth Suburbs</div>
            </div>
          </div>
        </div>

        {/* PRICING */}
        <section className="lp-pricing lp-section">
          <div className="lp-container">
            <h2>Simple, Fixed Pricing</h2>
            <p className="lp-subtitle">Know what you&apos;re paying before we start. No hidden costs, no surprises on invoice day.</p>
            <div className="lp-pricing-grid">
              <div className="lp-pricing-card">
                <div className="lp-pricing-label">Small Pour</div>
                <div className="lp-pricing-size">1 – 10m2</div>
                <div className="lp-pricing-price">$1,750 <span>+ GST</span></div>
                <div className="lp-pricing-note">Minimum charge covers all small pours. Includes site prep, formwork, concrete and finishing.</div>
              </div>
              <div className="lp-pricing-card featured">
                <div className="lp-pricing-label">Standard Pour</div>
                <div className="lp-pricing-size">10 – 25m2</div>
                <div className="lp-pricing-price">$2,650 <span>+ GST</span></div>
                <div className="lp-pricing-note">For mid-size slabs. Same fixed pricing — quote confirmed before work begins.</div>
              </div>
            </div>
            <p className="lp-pricing-disclaimer">Final price confirmed on-site. Starting rates may vary based on access, depth, and ground conditions.</p>
          </div>
        </section>

        {/* WHAT WE POUR */}
        <section className="lp-services lp-section">
          <div className="lp-container">
            <h2>What We Can Pour For You</h2>
            <p className="lp-subtitle">Small jobs are our bread and butter. If it&apos;s grey concrete, we can handle it.</p>
            <div className="lp-service-grid">
              <div className="lp-service-card featured">
                <h3>Shed &amp; Garage Slabs — Our Specialty</h3>
                <p>Getting a new shed or garage delivered? We pour the slab before it goes up. We work fast so you&apos;re not holding up your delivery date — and we know exactly what depth and finish shed builders need.</p>
              </div>
              <div className="lp-service-card">
                <h3>Patios &amp; Entertaining Areas</h3>
                <p>Small outdoor slabs for entertaining areas, alfresco setups and backyard patios. Clean, flat and properly finished — ready for furniture, paving or decking on top.</p>
              </div>
              <div className="lp-service-card">
                <h3>Driveways &amp; Crossovers</h3>
                <p>Short driveway sections, carport entries and vehicle crossovers. Poured to the right depth for vehicle loads and finished neatly to match your property.</p>
              </div>
              <div className="lp-service-card">
                <h3>Paths &amp; Walkways</h3>
                <p>Front entry paths, side access, garden walkways and step approaches. Practical, durable and tidy — no cracking footpaths or dodgy joins.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GREY CONCRETE CALLOUT */}
        <section className="lp-callout lp-section">
          <div className="lp-container">
            <div className="lp-callout-box">
              <h3>We Pour Grey Concrete Only</h3>
              <p>We specialise in standard grey concrete — no coloured concrete, exposed aggregate, stencil or decorative finishes. That focus means we do what we do exceptionally well. If you need a decorative finish, we&apos;re not your team. If you need a solid, quality grey slab done right and on time, we are.</p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="lp-why lp-section">
          <div className="lp-container">
            <h2 style={{ textAlign: 'center' }}>Why Choose Konx for Your Concrete?</h2>
            <p className="lp-subtitle" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>We&apos;re not a concreting franchise. We&apos;re a licensed Perth builder who does small concrete jobs — the right way.</p>
            <div className="lp-why-grid">
              <div className="lp-why-card">
                <div className="lp-why-number">Fixed</div>
                <h3>Upfront Pricing</h3>
                <p>The price we quote is the price you pay. No hidden costs, no surprises when the invoice arrives.</p>
              </div>
              <div className="lp-why-card">
                <div className="lp-why-number">9yr+</div>
                <h3>Industry Experience</h3>
                <p>Licensed WA builder with 9+ years in construction — not just a weekend concreter.</p>
              </div>
              <div className="lp-why-card">
                <div className="lp-why-number">100%</div>
                <h3>Perth Based &amp; Operated</h3>
                <p>We work across all Perth suburbs. We know the soils, the climate, and what a quality pour looks like in WA conditions.</p>
              </div>
              <div className="lp-why-card">
                <div className="lp-why-number">Fast</div>
                <h3>Quick Turnaround</h3>
                <p>Small concrete jobs get booked and done fast. Call us, get a price, and we&apos;ll have it locked in.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="lp-process lp-section">
          <div className="lp-container">
            <h2>How It Works</h2>
            <p className="lp-subtitle">From first call to finished slab — here&apos;s what to expect.</p>
            <div className="lp-process-steps">
              <div className="lp-process-step">
                <div className="lp-step-number">1</div>
                <h3>Call or Get a Quote</h3>
                <p>Tell us what you need poured and roughly how big. A quick call or form submission gets the ball rolling.</p>
              </div>
              <div className="lp-process-step">
                <div className="lp-step-number">2</div>
                <h3>We Confirm the Price</h3>
                <p>We&apos;ll either quote over the phone or do a quick site check. You&apos;ll know the fixed price before we start — no obligation.</p>
              </div>
              <div className="lp-process-step">
                <div className="lp-step-number">3</div>
                <h3>We Book You In</h3>
                <p>Once you&apos;re happy with the quote, we lock in a date that works for you and get it in the calendar.</p>
              </div>
              <div className="lp-process-step">
                <div className="lp-step-number">4</div>
                <h3>Job Done, Site Clean</h3>
                <p>We prep, pour, finish and clean up. You get a solid grey slab that&apos;s done right and built to last.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="lp-reviews lp-section">
          <div className="lp-container">
            <h2 style={{ textAlign: 'center' }}>What Perth Homeowners Say</h2>
            <p className="lp-subtitle" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '40px' }}>Real jobs, real feedback from across Perth.</p>
            <div className="lp-reviews-grid">
              <div className="lp-review-card">
                <div className="lp-review-stars">★★★★★</div>
                <p className="lp-review-text">&ldquo;Got the shed slab poured within a week of calling. Turned up on time, clean finish, exactly what the shed company needed. No dramas at all.&rdquo;</p>
                <div className="lp-review-author">Mark T.</div>
                <div className="lp-review-location">Baldivis, Perth</div>
              </div>
              <div className="lp-review-card">
                <div className="lp-review-stars">★★★★★</div>
                <p className="lp-review-text">&ldquo;Fixed price quote, turned up when they said they would, and the patio slab came out perfectly flat. Happy to recommend.&rdquo;</p>
                <div className="lp-review-author">Sarah K.</div>
                <div className="lp-review-location">Joondalup, Perth</div>
              </div>
              <div className="lp-review-card">
                <div className="lp-review-stars">★★★★★</div>
                <p className="lp-review-text">&ldquo;Needed a small driveway section poured before a gate install. Quoted fast, booked us in quickly, job done properly. Will use again.&rdquo;</p>
                <div className="lp-review-author">Dave R.</div>
                <div className="lp-review-location">Canning Vale, Perth</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="lp-cta-banner">
          <div className="lp-container">
            <h2>Shed Going Up? Get the Slab Sorted First.</h2>
            <p>Fixed pricing, fast turnaround, all Perth suburbs. Make a booking today — most jobs completed within the week.</p>
            <div className="lp-ctas">
              <a href="tel:0478530664" className="lp-btn lp-btn-primary">Call 0478 530 664</a>
              <a href="#contact" className="lp-btn lp-btn-secondary">Make a Booking</a>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="lp-contact lp-section" id="contact">
          <div className="lp-container">
            <div className="lp-contact-layout">
              <div className="lp-contact-info">
                <h2>Make a Booking</h2>
                <p>Fill in your details below and we&apos;ll lock in a date. Fixed pricing, no surprises — just tell us what you need and where you are.</p>
                <div className="lp-contact-detail">
                  <strong>Phone:</strong> <a href="tel:0478530664">0478 530 664</a>
                </div>
                <div className="lp-contact-detail">
                  <strong>Email:</strong> <a href="mailto:Info@konxconstructiongroup.com">Info@konxconstructiongroup.com</a>
                </div>
                <div className="lp-contact-detail">
                  <strong>Hours:</strong> Mon–Sat, 7:00am – 5:00pm AWST
                </div>
                <div className="lp-contact-detail">
                  <strong>Location:</strong> Perth, Western Australia
                </div>
              </div>
              <ConcreteSlabsForm />
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

        {/* STICKY MOBILE CALL */}
        <a href="tel:0478530664" className="lp-sticky-call">📞 Call Now — 0478 530 664</a>

      </div>
    </>
  )
}
