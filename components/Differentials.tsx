import { Zap, Lightbulb, BarChart2 } from "lucide-react";

export default function Differentials() {
  const items = [
    {
      icon: <Zap color="#C1D9E0" size={40} className="fill-[#C1D9E0]" />,
      title: "Agilidade",
      description:
        "Agilidade durante todo o processo para entregar o serviço com a velocidade que o mercado exige.",
    },
    {
      icon: <Lightbulb color="#C1D9E0" size={40} />,
      title: "Excelência na entrega",
      description:
        "Entregamos serviços de alta qualidade, respaldados pela expertise do nosso time.",
    },
    {
      icon: <BarChart2 color="#C1D9E0" size={40} />,
      title: "Foco no resultado",
      description:
        "Nosso foco é entregar o que realmente importa: resultados que fazem seu negócio crescer.",
    },
  ];

  return (
    <section
      style={{
        background: "#0E296B",
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
          color: "#F2F2F2",
          marginBottom: "10px",
        }}
      >
        Nosso diferencial
      </p>

      {/* Title */}
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
        Por que o que oferecemos é único?
      </h2>

      {/* Cards grid */}
      <div
        
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", width: "100%", maxWidth: "1152px", margin: "0 auto", justifyContent: "center" }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#0E296B",
              padding: "clamp(20px, 5vw, 40px) clamp(15px, 5vw, 30px)",
              border: "1px solid rgba(193, 217, 224, 0.2)",
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {item.icon}
            </div>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 500,
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
        ))}
      </div>
    </section>
  );
}
