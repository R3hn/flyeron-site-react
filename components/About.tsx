export default function About() {
  return (
    <section
      id="sobre"
      style={{
        background: "#0D0D0D",
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
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: -1,
            color: "#F2F2F2",
            marginBottom: -40,
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
            color: "#D95032",
            padding: "0 0 1%",
            marginTop: 50,
          }}
        >
          Quem somos
        </h2>
      </div>

      {/* Video placeholder */}
      <div style={{ padding: "0 250px" }} className="video-wrapper">
        <div
          style={{
            background: "#111",
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
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1"
            title="Flyer On - Quem somos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .video-wrapper {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
