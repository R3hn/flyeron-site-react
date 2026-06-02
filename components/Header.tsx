"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ background: "#0D0D0D", borderBottom: "1px solid #1a1a1a" }}
      className="w-full sticky top-0 z-50"
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between"
        style={{ padding: "16px 40px" }}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://flyeron-site.vercel.app/wp-content/uploads/elementor/thumbs/Logo-Flyer-On-1-qtmjvywa9u0u02mds0of4k81q3e3wiq5t030fnmei0.png"
            alt="Logo Flyer On"
            width={140}
            height={40}
            unoptimized
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Início", href: "#hero" },
            { label: "Serviços", href: "#servicos" },
            { label: "Depoimentos", href: "#depoimentos" },
            { label: "Sobre", href: "#sobre" },
            { label: "FAQ", href: "#faq" },
            { label: "Blog", href: "#blog" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{ color: "#F2F2F2", fontSize: 15, fontWeight: 400 }}
              className="hover:text-red-400 transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/message/FLOCK2MGFGFCO1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #D95032",
              borderRadius: "0 100px 100px 100px",
              padding: "10px 28px",
              color: "#F2F2F2",
              fontSize: 14,
              fontWeight: 500,
              boxShadow: "0 0 4px 0 #D95032",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            className="hover:text-red-400 transition-colors"
          >
            Fale conosco
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            style={{
              width: 24,
              height: 2,
              background: "#F2F2F2",
              display: "block",
              transition: "all 0.2s",
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: "#F2F2F2",
              display: "block",
              transition: "all 0.2s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: "#F2F2F2",
              display: "block",
              transition: "all 0.2s",
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "#0D0D0D",
            borderTop: "1px solid #222",
            padding: "20px 40px",
          }}
          className="md:hidden flex flex-col gap-4"
        >
          {[
            { label: "Início", href: "#hero" },
            { label: "Serviços", href: "#servicos" },
            { label: "Depoimentos", href: "#depoimentos" },
            { label: "Sobre", href: "#sobre" },
            { label: "FAQ", href: "#faq" },
            { label: "Blog", href: "#blog" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{ color: "#F2F2F2", fontSize: 16 }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
