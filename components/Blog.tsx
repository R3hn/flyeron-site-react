import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Live Shop de Sucesso: Como Aumentar Suas Vendas",
    excerpt:
      "Nos últimos tempos, as lives se tornaram uma das ferramentas mais poderosas para vender no ambiente digital. Empresas de todos os tamanhos têm percebido que…",
    image:
      "https://flyeron-site.vercel.app/wp-content/uploads/2025/02/LiveShop-1.png",
    href: "https://flyeron-site.vercel.app/live-shop-de-sucesso-como-aumentar-suas-vendas/",
  },
  {
    title: "Tráfego Pago e Como Ele Pode Impulsionar Seu Negócio",
    excerpt:
      "No cenário digital atual, ter presença online não é mais um diferencial — é uma exigência para qualquer empresa que deseja crescer e conquistar novos…",
    image:
      "https://flyeron-site.vercel.app/wp-content/uploads/2025/02/Trafego2.png",
    href: "https://flyeron-site.vercel.app/trafego-pago-e-como-ele-pode-impulsionar-seu-negocio/",
  },
  {
    title: "Como Estruturar os Canais Digitais do Seu Negócio",
    excerpt:
      "A presença digital de uma empresa é um dos pilares mais importantes para garantir visibilidade, engajamento e conversões. Com a ascensão do marketing digital e…",
    image:
      "https://flyeron-site.vercel.app/wp-content/uploads/2025/02/Canais-Digitais-2.png",
    href: "https://flyeron-site.vercel.app/como-estruturar-os-canais-digitais-do-seu-negocio/",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        background: "#0D0D0D",
        padding: "4% 8% 6% 8%",
      }}
    >
      {/* Header */}
      <p
        style={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: -1,
          color: "#F2F2F2",
          marginBottom: -30,
        }}
      >
        Blog
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
          paddingBottom: "4%",
          marginTop: 40,
        }}
      >
        Conteúdos & Notícias
      </h2>

      {/* Posts grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
        }}
        className="blog-grid"
      >
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={240}
              unoptimized
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 17,
                fontWeight: 600,
                color: "#F2F2F2",
                lineHeight: 1.4,
              }}
            >
              {post.title}
            </h4>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.5,
                color: "#aaa",
              }}
            >
              {post.excerpt}
            </p>
            <span style={{ color: "#D95032", fontSize: 14, fontWeight: 500 }}>
              Leia mais →
            </span>
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
