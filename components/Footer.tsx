import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-sm tracking-wider uppercase">
                  Konx Construction Group
                </span>
                <span className="text-[10px] text-[#666] tracking-widest uppercase">
                  PTY LTD
                </span>
              </div>
            </div>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
              Perth&apos;s trusted commercial construction specialists. Tilt panel repair,
              commercial fit out, and concrete works — delivered on time and built to last.
            </p>
            <p className="text-[#444] text-xs mt-6 tracking-wide">
              Perth, Western Australia
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#777] text-sm hover:text-[#0066ff] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Tilt Panel Repair",
                "Commercial Fit Out",
                "Concrete Works",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[#777] text-sm hover:text-[#0066ff] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#151515] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-xs tracking-wide">
            © {new Date().getFullYear()} Konx Construction Group PTY LTD. All rights reserved.
          </p>
          <p className="text-[#333] text-xs tracking-wide">
            ABN: XX XXX XXX XXX
          </p>
        </div>
      </div>
    </footer>
  );
}
