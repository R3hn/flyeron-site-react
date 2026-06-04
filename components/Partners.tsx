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
        background: "#0E296B",
        padding: "clamp(30px, 5vw, 40px) clamp(20px, 5vw, 100px)",
        borderTop: "1px solid rgba(193, 217, 224, 0.2)",
        borderBottom: "1px solid rgba(193, 217, 224, 0.2)",
      }}
      className="max-md:px-5"
    >
      <p
        style={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#C1D9E0",
          marginBottom: "10px",
        }}
      >
        Marcas que confiam na Flyer On
      </p>

      {/* Logos */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 30,
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {clients.map((c, i) => (
          <a
            key={i}
            href={c.src}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
            style={{ display: "block", opacity: 0.6 }}
          >
            <Image
              src={c.src}
              alt={c.alt}
              width={100}
              height={40}
              unoptimized
              style={{ objectFit: "contain", filter: "grayscale(100%)", opacity: 0.8 }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
