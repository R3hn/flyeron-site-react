export default function Contact() {
  return (
    <section
      id="contato"
      style={{
        background: "#0D0D0D",
        padding: "6% 0",
      }}
    >
      <div
        style={{
          border: "1px solid #D95032",
          borderRadius: 50,
          boxShadow: "0 0 5px 0 #D95032",
          padding: "60px 0",
          background: "#0D0D0D",
          backgroundImage:
            "url('https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Design-sem-nome.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          overflow: "hidden",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(13,13,13,0.9)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: "0 40px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(24px, 3vw, 48px)",
              fontWeight: 500,
              fontStyle: "normal",
              lineHeight: "74px",
              letterSpacing: -1,
              color: "#D95032",
              marginTop: "-3%",
              marginBottom: "-2%",
            }}
          >
            Contato
          </h2>

          {/* Divider */}
          <div
            style={{
              width: "7%",
              height: 2,
              background: "#D95032",
              margin: "0 auto",
            }}
          />

          <p
            style={{
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              fontSize: 16,
              fontWeight: 300,
              letterSpacing: 0,
              color: "#F2F2F2",
              maxWidth: 600,
              padding: "0 115px",
            }}
            className="contact-text"
          >
            Oferecemos serviços adaptados às necessidades do seu negócio,
            garantindo estratégias eficazes e resultados reais. Entre em contato
            e descubra como podemos potencializar a sua marca no digital.
          </p>

          <a
            href="https://wa.me/message/FLOCK2MGFGFCO1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded"
          >
            Fale com um especialista
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-text {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
