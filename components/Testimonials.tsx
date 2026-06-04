export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Contratamos a Flyer On num momento que precisávamos dar um up nas vendas. Foi quando decidimos investir no tráfego pago. E a Flyer respondeu muito bem! A gente conseguiu reverter o quadro muito rápido dentro do mesmo mês de contratação da empresa. O tráfego pago foi muito bem executado, trazendo uma resposta rápida e um sucesso de vendas muito satisfatório.",
      name: "Natália Maciel",
      company: "F4 Auto Prime",
    },
    {
      quote:
        "A live shop valeu muito a pena. Uma audiência muito bacana, bem trabalhada durante todo o processo. Muita interação na live. E, antes de finalizar a live, já tinhamos conseguido a quantidade de conversões que normalmente a gente consegue em um mês. E detalhe, o processo ainda vai refletir por uma semana. Então, esperamos converter pelo menos mais um mesmo tanto que foi convertido só hoje. Então, não tem o que dizer. Valeu muito a pena!",
      name: "Carlos Alexandria",
      company: "ATT",
    },
    {
      quote:
        "O trabalho desenvolvido pela Flyer On no nosso site superou as nossas expectativas! O site ficou com o visual mais leve, um design clean e oferecendo uma experiência incrível para os usuários. Além disso, foi sempre muito atencioso e soube equilibrar bem o atendimento dos nossos desejos com a sua visão de especialista!",
      name: "Athena Fernandes",
      company: "Due RH",
    },
  ];

  return (
    <section
      id="depoimentos"
      style={{
        background: "#0E296B",
        padding: "clamp(40px, 8vw, 70px) clamp(20px, 5vw, 100px)",
      }}
      className="max-md:px-5"
    >
      {/* Header */}
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
        Depoimentos
      </p>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(24px, 3vw, 48px)",
          fontWeight: 500,
          letterSpacing: -1,
          lineHeight: "1em",
          color: "#FFFFFF",
          paddingBottom: "50px",
        }}
      >
        A confiança construída em cada resultado.
      </h2>

      {/* Testimonials row */}
      <div
        style={{
          display: "grid",
          gap: 24,
        }}
        className="grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"
      >
        {testimonials.map((t) => {
          const initial = t.name.charAt(0).toUpperCase();

          return (
            <div
              key={t.name}
              style={{
                background: "#0E296B",
                padding: "clamp(20px, 5vw, 40px)",
                border: "1px solid rgba(193, 217, 224, 0.2)",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 30,
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "#F2F2F2",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    background: "rgba(193, 217, 224, 0.2)",
                    color: "#C1D9E0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(15px, 2vw, 18px)",
                    fontWeight: 500,
                    flexShrink: 0,
                  }}
                >
                  {initial}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: 1.2,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 400,
                      color: "#C1D9E0",
                      marginTop: 4,
                      lineHeight: 1.2,
                    }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <a
          href="https://api.whatsapp.com/send?phone=558193257368"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ color: "#C1D9E0", borderColor: "#C1D9E0" }}
        >
          Ver mais
        </a>
      </div>
    </section>
  );
}
