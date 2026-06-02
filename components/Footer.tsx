import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid #1a1a1a",
        padding: "40px 8%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <a href="/">
        <Image
          src="https://flyeron-site.vercel.app/wp-content/uploads/elementor/thumbs/Logo-Flyer-On-1-qtmjvywc3m7hf2uzedz6aohla3pjw5jqmoyrnrc8jo.png"
          alt="Logo Flyer On"
          width={160}
          height={46}
          unoptimized
          style={{ objectFit: "contain" }}
        />
      </a>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 14,
          fontWeight: 300,
          color: "#888",
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
            icon: "📷",
          },
          {
            href: "https://youtube.com/@flyer_on",
            label: "Youtube",
            icon: "▶️",
          },
          {
            href: "https://g.co/kgs/D2rWiKg",
            label: "Google",
            icon: "🔍",
          },
          {
            href: "mailto:contato@flyeron.com.br",
            label: "Email",
            icon: "✉️",
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
            <span style={{ fontSize: 18 }}>{s.icon}</span>
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
          color: "#555",
          textAlign: "center",
        }}
      >
        Copyright © 2025 — Todos os direitos reservados.
      </p>
    </footer>
  );
}
