import Image from "next/image";

const clients = [
  {
    src: "https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Elementos-WordPress.png",
    alt: "Cliente 1",
  },
  {
    src: "https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Elementos-WordPress-1.png",
    alt: "Cliente 2",
  },
  {
    src: "https://flyeron-site.vercel.app/wp-content/uploads/2025/01/Identidade-Visual-ATT-2.webp",
    alt: "ATT",
  },
  {
    src: "https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Elementos-WordPress-2.png",
    alt: "Cliente 4",
  },
  {
    src: "https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Elementos-WordPress-3.png",
    alt: "Cliente 5",
  },
];

export default function Partners() {
  return (
    <section
      style={{
        background: "#0D0D0D",
        padding: "5% 0",
        display: "flex",
        flexDirection: "column",
        gap: 30,
        alignItems: "stretch",
      }}
    >
      {/* Header */}
      <div>
        <p
          style={{
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: -1,
            color: "#F2F2F2",
            marginBottom: -40,
          }}
        >
          Parcerias e clientes
        </p>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(22px, 3vw, 48px)",
            fontWeight: 500,
            letterSpacing: -1,
            lineHeight: "1em",
            color: "#D95032",
            padding: "0 0 1%",
            marginTop: 50,
          }}
        >
          Clientes que se tornaram grandes parceiros
        </h2>
      </div>

      {/* Logos */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
          padding: "20px 60px",
          maxWidth: "60%",
          margin: "0 auto",
        }}
      >
        {clients.map((c) => (
          <a
            key={c.alt}
            href={c.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={c.src}
              alt={c.alt}
              width={120}
              height={120}
              unoptimized
              style={{ objectFit: "contain" }}
            />
          </a>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <a
          href="https://wa.me/message/FLOCK2MGFGFCO1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Quero iniciar uma parceria!
        </a>
      </div>
    </section>
  );
}
