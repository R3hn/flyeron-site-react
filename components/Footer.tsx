import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0E296B",
        borderTop: "1px solid #085CF0",
        padding: "clamp(30px, 5vw, 40px) clamp(15px, 5vw, 8%)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo Flyer On"
          width={120}
          height={34}
          unoptimized
          style={{ objectFit: "contain" }}
        />
      </Link>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 14,
          fontWeight: 300,
          color: "#C1D9E0",
          textAlign: "center",
        }}
      >
        Conectando pessoas a soluções que transformam.
      </p>

      {/* Social links */}
      <div style={{ display: "flex", gap: 20 }}>
        {[
          {
            href: "https://www.instagram.com/flyer_on/",
            label: "Instagram",
            icon: <img src="https://cdn.simpleicons.org/instagram/F2F2F2" width={18} height={18} alt="Instagram" />,
          },
          {
            href: "https://youtube.com/@flyer_on",
            label: "Youtube",
            icon: <img src="https://cdn.simpleicons.org/youtube/F2F2F2" width={18} height={18} alt="Youtube" />,
          },
          {
            href: "https://g.co/kgs/D2rWiKg",
            label: "Google",
            icon: <img src="https://cdn.simpleicons.org/google/F2F2F2" width={18} height={18} alt="Google" />,
          },
          {
            href: "mailto:contato@flyeron.com.br",
            label: "Email",
            icon: <Mail size={18} />,
          },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              color: "#F2F2F2",
              fontSize: 14,
              fontWeight: 400,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
            title={s.label}
          >
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</span>
            <span>{s.label}</span>
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 13,
          fontWeight: 300,
          color: "#C1D9E0",
          textAlign: "center",
        }}
      >
        Copyright © 2025 — Todos os direitos reservados.
      </p>
    </footer>
  );
}
