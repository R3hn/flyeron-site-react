import { ArrowUpRight, Megaphone, Target } from "lucide-react";

export default function Method() {
  const items = [
    {
      number: "01",
      icon: <ArrowUpRight color="#C1D9E0" size={24} />,
      title: "Vitrine Online Pro",
      description:
        "Sua marca posicionada e pronta para ser vista, desejada e escolhida.",
    },
    {
      number: "02",
      icon: <Megaphone color="#C1D9E0" size={24} />,
      title: "Anúncios Irresistíveis",
      description:
        "Criativos que atraem, conectam e convertem quem realmente tem potencial de comprar.",
    },
    {
      number: "03",
      icon: <Target color="#C1D9E0" size={24} />,
      title: "Tráfego Assertivo",
      description:
        "Alcance as pessoas certas, no momento certo, com a mensagem certa.",
    },
  ];

  return (
    <section
      style={{
        background: "#0E296B", // Keeping the exact background color to match Diff section if needed
        padding: "clamp(40px, 8vw, 70px) clamp(20px, 5vw, 100px)",
      }}
      className="max-md:px-5"
    >
      {/* Eyebrow */}
      <p
        style={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(16px, 2vw, 20px)",
          fontWeight: 400,
          letterSpacing: -1,
          color: "#C1D9E0",
          marginBottom: "10px",
        }}
      >
        Método
      </p>

      {/* Main Title */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(24px, 3vw, 48px)",
          fontWeight: 500,
          letterSpacing: -1,
          lineHeight: "1em",
          color: "#FFFFFF",
          paddingBottom: "40px",
        }}
      >
        Como construímos resultados
      </h2>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gap: 24,
        }}
        className="grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#0E296B",
              padding: "clamp(20px, 5vw, 40px) clamp(15px, 5vw, 30px)",
              border: "1px solid rgba(193, 217, 224, 0.2)",
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              gap: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background Number */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                fontSize: 120,
                fontWeight: 800,
                color: "rgba(255, 255, 255, 0.03)",
                lineHeight: 1,
                transform: "translate(10%, -10%)",
                fontFamily: "'Poppins', sans-serif",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {item.number}
            </div>

            {/* Icon Cover */}
            <div
              style={{
                width: 60,
                height: 60,
                background: "rgba(193, 217, 224, 0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(20px, 3vw, 26px)",
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(15px, 2vw, 18px)",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: "#F2F2F2",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
