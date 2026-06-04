export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico e Imersão",
      description:
        "Analisamos histórico de campanhas, posicionamento da marca, público-alvo e concorrência. Entendemos o negócio antes de tocar na conta de mídia.",
    },
    {
      number: "02",
      title: "Planejamento Estratégico",
      description:
        "Desenhamos a arquitetura de campanhas, definimos orçamento por canal, mapeamos a jornada de compra e estabelecemos metas claras e mensuráveis.",
    },
    {
      number: "03",
      title: "Ativação e Estruturação",
      description:
        "Implementamos a estrutura de campanhas com rastreamento completo, pixels configurados, audiências segmentadas e criativos aprovados.",
    },
    {
      number: "04",
      title: "Otimização Contínua",
      description:
        "Monitoramento diário com ajustes semanais. Testes A/B permanentes. Escalamos o que funciona, pausamos o que não converte.",
    },
    {
      number: "05",
      title: "Relatório e Evolução",
      description:
        "Reuniões mensais de alinhamento, relatórios transparentes e planejamento do próximo ciclo com base nos aprendizados do período anterior.",
    },
  ];

  return (
    <section
      id="processo"
      style={{
        background: "#0E296B",
        padding: "clamp(50px, 10vw, 80px) clamp(20px, 5vw, 100px)",
        borderTop: "1px solid rgba(193, 217, 224, 0.2)",
      }}
      className="max-md:px-5"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        {/* Left Column - Sticky */}
        <div
          className="md:w-1/2 md:sticky md:top-32"
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
        Como trabalhamos
      </p>
            <div style={{ width: 40, height: 1, background: "#C1D9E0" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 500,
              letterSpacing: -1,
              lineHeight: 1.1,
              color: "#FFFFFF",
              marginTop: 10,
            }}
          >
            Um processo que elimina desperdício.
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.6,
              color: "#C1D9E0",
              marginTop: 10,
            }}
          >
            Cada campanha começa com diagnóstico aprofundado. Nenhuma estratégia
            é replicada de outro cliente. Cada decisão é baseada em dados, não em
            suposições.
          </p>
        </div>

        {/* Right Column - Steps */}
        <div className="md:w-1/2 w-full flex flex-col">
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: 24,
                padding: "32px 0",
                borderTop: index !== 0 ? "1px solid rgba(193, 217, 224, 0.2)" : "none",
              }}
              className="flex-col sm:flex-row"
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#C1D9E0",
                  paddingTop: 6,
                  flexShrink: 0,
                  width: 30,
                }}
              >
                {step.number}
              </span>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "#C1D9E0",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
