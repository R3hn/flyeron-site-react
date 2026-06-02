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
        background: "#0D0D0D",
        padding: "3% 8%",
        display: "flex",
        flexDirection: "column",
        gap: 50,
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
            marginBottom: -50,
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
            color: "#D95032",
            paddingTop: 60,
          }}
        >
          Veja o que nossos clientes dizem
        </h2>
      </div>

      {/* Testimonials row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 60,
          flexWrap: "wrap",
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            style={{
              flex: "1 1 280px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Stars */}
            <div style={{ color: "#D95032", fontSize: 20, letterSpacing: 2 }}>
              ★★★★★
            </div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.5,
                color: "#F2F2F2",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "#F2F2F2",
                  lineHeight: 1.3,
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 36,
                  fontWeight: 600,
                  color: "#F3F5F8",
                  lineHeight: 1.1,
                }}
              >
                {t.company}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="https://flyeron-site.vercel.app/depoimentos/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ color: "#D95032", borderColor: "#D95032" }}
        >
          Ver mais
        </a>
      </div>
    </section>
  );
}
