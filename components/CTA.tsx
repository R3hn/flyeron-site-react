export default function CTA() {
  return (
    <section
      id="cta"
      style={{
        background: "#0E296B",
        padding: "clamp(60px, 10vw, 100px) 20px",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
        }}
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
        Pronto para começar?
      </p>
      <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 500,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: -1,
          }}
        >
          Vamos transformar
          <br />
          seu tráfego em <span style={{ fontStyle: "italic", color: "#C1D9E0", fontWeight: 400 }}>receita.</span>
        </h2>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 300,
            color: "#F2F2F2",
            textAlign: "center",
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          Converse com um especialista e descubra como a Flyer On pode elevar os
          resultados do seu negócio em 90 dias.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 20,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=558193257368"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded"
          >
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
