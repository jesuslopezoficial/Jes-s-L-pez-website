"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/academia", label: "Academia" },
  { href: "/libros", label: "Libros" },
  { href: "/conferencias", label: "Conferencias" },
  { href: "/blog", label: "Blog" },
  { href: "/prensa", label: "Prensa" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gold-gradient">Jesus</span>
              <span className="text-white"> López</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#C9A227] ${
                  pathname === link.href
                    ? "text-[#C9A227]"
                    : "text-[#a3a3a3]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Language */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/en"
              className="text-xs text-[#6b7280] hover:text-[#C9A227] transition-colors font-medium"
            >
              EN
            </Link>
            <Link
              href="/contacto"
              className="px-5 py-2.5 bg-[#C9A227] text-black text-sm font-semibold rounded-full hover:bg-[#F5D16A] transition-colors gold-glow"
            >
              Trabajemos Juntos
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#a3a3a3] hover:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#2a2a2a] bg-[#080808]/98 backdrop-blur-md">
            <nav className="py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium transition-colors hover:text-[#C9A227] hover:bg-[#111111] rounded-lg ${
                    pathname === link.href ? "text-[#C9A227]" : "text-[#a3a3a3]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2 flex items-center gap-3">
                <Link
                  href="/en"
                  onClick={() => setMenuOpen(false)}
                  className="text-xs text-[#6b7280] hover:text-[#C9A227]"
                >
                  EN
                </Link>
                <Link
                  href="/contacto"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center px-5 py-2.5 bg-[#C9A227] text-black text-sm font-semibold rounded-full hover:bg-[#F5D16A] transition-colors"
                >
                  Trabajemos Juntos
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
