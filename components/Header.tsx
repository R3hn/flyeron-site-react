"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ background: "#0E296B", borderBottom: "1px solid #085CF0" }}
      className="w-full sticky top-0 z-50"
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between"
        style={{ padding: "16px clamp(15px, 5vw, 40px)" }}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
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
            { label: "FAQ", href: "#faq" },
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
            href="https://api.whatsapp.com/send?phone=558193257368"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #C1D9E0",
              borderRadius: "0 100px 100px 100px",
              padding: "10px 28px",
              color: "#F2F2F2",
              fontSize: 14,
              fontWeight: 500,
              boxShadow: "0 0 4px 0 #C1D9E0",
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
            background: "#0E296B",
            borderTop: "1px solid rgba(193, 217, 224, 0.2)",
            padding: "20px clamp(15px, 5vw, 40px)",
          }}
          className="md:hidden flex flex-col gap-4"
        >
          {[
            { label: "Início", href: "#hero" },
            { label: "Serviços", href: "#servicos" },
            { label: "Depoimentos", href: "#depoimentos" },
            { label: "FAQ", href: "#faq" },
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
