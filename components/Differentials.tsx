export default function Differentials() {
  const items = [
    {
      icon: "⚡",
      title: "Agilidade",
      description:
        "Agilidade durante todo o processo para entregar o serviço com a velocidade que o mercado exige.",
    },
    {
      icon: "🏆",
      title: "Excelência na entrega",
      description:
        "Entregamos serviços de alta qualidade, respaldados pela expertise do nosso time.",
    },
    {
      icon: "🎯",
      title: "Foco no resultado",
      description:
        "Nosso foco é entregar o que realmente importa: resultados que fazem seu negócio crescer.",
    },
  ];

  return (
    <section
      style={{
        background: "#0D0D0D",
        padding: "50px 100px 70px 100px",
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: -1,
          color: "#F2F2F2",
          marginBottom: 0,
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
          color: "#D95032",
          paddingBottom: "3%",
        }}
      >
        Por que o que oferecemos é único?
      </h2>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
        className="flex-col md:grid-cols-3 grid-cols-1"
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#0D0D0D",
              padding: "30px 30px 30px 30px",
              border: "1px solid #D95032",
              borderRadius: 10,
              boxShadow: "0 0 8px 0 #D95032",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                background: "#D95032",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              {item.icon}
            </div>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 23,
                fontWeight: 400,
                color: "#F0F0F0",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.5,
                color: "#F0F0F0",
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
