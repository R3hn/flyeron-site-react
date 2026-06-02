import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "#0D0D0D",
        minHeight: "70vh",
        padding: "3% 10% 8% 10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
        gap: 30,
        flexWrap: "wrap",
        backgroundImage:
          "url('https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Design-sem-nome-1.jpg')",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(13,13,13,0.8)",
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
          flex: "1 1 320px",
          maxWidth: 600,
        }}
      >
        {/* Logo */}
        <div style={{ margin: "10px 0 20px -25px" }}>
          <Image
            src="https://flyeron-site.vercel.app/wp-content/uploads/elementor/thumbs/Logo-Flyer-On-1-qtmjvywa9u0u02mds0of4k81q3e3wiq5t030fnmei0.png"
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
            color: "#D95032",
          }}
        >
          Potencialize o seu negócio no online e multiplique os seus resultados.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 20,
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
          <a href="#contato" className="btn-outline">
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 80,
        }}
        className="hidden md:flex"
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
