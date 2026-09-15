import Link from "next/link";
import { Sun } from "lucide-react";

const serviceLinks = [
  { href: "/services#residential", label: "Residential Solar" },
  { href: "/services#commercial", label: "Commercial Solar" },
  { href: "/services#industrial", label: "Industrial Solar" },
  { href: "/services#maintenance", label: "Maintenance" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

const resourceLinks = [
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <Sun className="h-6 w-6 text-solar" />
              <span className="text-solar">Solaris</span>
              <span className="text-white">Energy</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-navy-400">
              Powering Bangladesh with clean, affordable solar energy. Residential,
              commercial, and industrial solar solutions.
            </p>
            <p className="mt-4 text-xs text-navy-500">
              Dhaka, Bangladesh — Nationwide Service
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors hover:text-solar"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors hover:text-solar"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors hover:text-solar"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-navy-500">
          &copy; {new Date().getFullYear()} Solaris Energy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
