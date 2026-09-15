"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-navy-900/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <Sun className="h-6 w-6 text-solar" />
          <span className="text-solar">Solaris</span>
          <span className="text-white">Energy</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-navy-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-solar px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all hover:bg-solar-dark hover:shadow-lg hover:shadow-solar/20"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-navy-300 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-navy-900/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-navy-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-solar px-5 py-3 text-center text-sm font-semibold text-navy-950"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
