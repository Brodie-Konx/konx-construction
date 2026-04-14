import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message, company, formSource, suburb, jobType, size } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const isLandingPage = formSource === "tilt-panel-repair";
    const isConcreteSlabs = formSource === "concrete-slabs";

    const subject = isConcreteSlabs
      ? `Concrete Quote Request — ${jobType || "Slab"} in ${suburb || "Perth"} — ${name}`
      : isLandingPage
      ? `Tilt Panel Assessment Request — ${name}`
      : `Website Enquiry — ${name}`;

    const htmlBody = isConcreteSlabs ? `
      <h2>New Concrete Quote Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Name</td><td style="padding:8px;border-bottom:1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Phone</td><td style="padding:8px;border-bottom:1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
        ${email ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Email</td><td style="padding:8px;border-bottom:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>` : ""}
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Suburb</td><td style="padding:8px;border-bottom:1px solid #ddd;">${suburb || "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Job Type</td><td style="padding:8px;border-bottom:1px solid #ddd;">${jobType || "Not specified"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Approximate Size</td><td style="padding:8px;border-bottom:1px solid #ddd;">${size || "Not specified"}</td></tr>
        ${message ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Notes</td><td style="padding:8px;border-bottom:1px solid #ddd;">${message}</td></tr>` : ""}
      </table>
      <p style="color:#888;font-size:12px;margin-top:20px;">Sent from konxconstructiongroup.com (Concrete Slabs Landing Page)</p>
    ` : `
      <h2>${isLandingPage ? "Tilt Panel Assessment Request" : "New Website Enquiry"}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Name</td><td style="padding:8px;border-bottom:1px solid #ddd;">${name}</td></tr>
        ${company ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Company</td><td style="padding:8px;border-bottom:1px solid #ddd;">${company}</td></tr>` : ""}
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Phone</td><td style="padding:8px;border-bottom:1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
        ${email ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Email</td><td style="padding:8px;border-bottom:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>` : ""}
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Service</td><td style="padding:8px;border-bottom:1px solid #ddd;">${service || "Not specified"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Message</td><td style="padding:8px;border-bottom:1px solid #ddd;">${message}</td></tr>
      </table>
      <p style="color:#888;font-size:12px;margin-top:20px;">Sent from konxconstructiongroup.com ${isLandingPage ? "(Tilt Panel Landing Page)" : "(Contact Page)"}</p>
    `;

    await transporter.sendMail({
      from: `"Konx Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email || undefined,
      subject,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
