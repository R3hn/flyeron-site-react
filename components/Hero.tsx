import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "#0E296B",
        minHeight: "70vh",
        padding: "clamp(40px, 5vw, 60px) clamp(20px, 8vw, 10%)",
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
        gap: 30,
        flexWrap: "wrap",
        backgroundImage:
          "url('https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Design-sem-nome-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(14, 41, 107, 0.9)",
          zIndex: 0,
        }}
      />

      {/* Content column */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 25,
          flex: "1 1 280px",
          maxWidth: 600,
        }}
      >
        {/* Logo */}
        <div style={{ margin: "10px 0 20px 0px" }}>
          <Image
            src="/logo.png"
            alt="Logo Flyer On"
            width={180}
            height={52}
            unoptimized
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(28px, 3vw, 50px)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: -1,
            color: "#FFFFFF",
          }}
        >
          Potencialize o seu negócio no online e multiplique os seus resultados.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 300,
            lineHeight: 1.4,
            color: "#F2F2F2",
          }}
        >
          Soluções completas de marketing digital testadas e validadas para
          impulsionar o seu negócio, atrair mais clientes e aumentar seu lucro.
        </p>

        {/* CTA button */}
        <div style={{ marginTop: "4%" }}>
          <a href="https://api.whatsapp.com/send?phone=558193257368" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Saiba mais!
          </a>
        </div>
      </div>

      {/* Image column */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: "0 0 55%",
          maxWidth: "55%",
          paddingTop: 80,
        }}
        className="hidden md:flex items-center justify-center"
      >
        <Image
          src="https://flyeron-site.vercel.app/wp-content/uploads/elementor/thumbs/Elementos-WordPress-7-qtm9pfq2qwu5fp379rkdvilxoxdzma255e5x6kri04.png"
          alt="Elementos decorativos"
          width={480}
          height={480}
          unoptimized
          style={{ objectFit: "contain", width: "80%" }}
        />
      </div>
    </section>
  );
}
