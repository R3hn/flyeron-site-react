export default function About() {
  return (
    <section
      id="sobre"
      style={{
        background: "#0E296B",
        padding: "2% 0",
        display: "flex",
        flexDirection: "column",
        gap: 30,
        alignItems: "stretch",
      }}
    >
      {/* Header */}
      <div>
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
        Sobre a Flyer On
      </p>
      <h2
          style={{
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(22px, 3vw, 48px)",
            fontWeight: 500,
            letterSpacing: -1,
            lineHeight: "1em",
            color: "#FFFFFF",
            padding: "0 0 1%",
            marginTop: 50,
          }}
        >
          Quem somos
        </h2>
      </div>

      {/* Video placeholder */}
      <div className="w-full px-5 md:px-[100px] lg:px-[250px] mx-auto">
        <div
          style={{
            background: "rgba(193, 217, 224, 0.05)",
            borderRadius: 20,
            aspectRatio: "16/9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Embed YouTube or video */}
          <iframe
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: 20,
              position: "absolute",
              inset: 0,
            }}
            src="https://www.youtube.com/embed/eq9KkC1QBbc?controls=1"
            title="Flyer On - Quem somos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

    </section>
  );
}
