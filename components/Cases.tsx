import React from "react";
import Image from "next/image";

const casesData = [
  {
    client: "XPE CONSULTORIA",
    instagram: "@xpeconsultoria",
    niche: "ENGENHARIA ELÉTRICA",
    result: "Investiu R$17.899,33 e faturou R$142.600,00",
    logo: "/xpe.jpg",
  },
  {
    client: "ATT",
    instagram: "@academiaatt",
    niche: "ASSESSORIA ESPORTIVA",
    result: "2x mais alunos e consequentemente o dobro de faturamento",
    logo: "/att.png",
  },
  {
    client: "CARMO CHOCOLATES",
    instagram: "@carmochocolatesoficial",
    niche: "DOCERIA",
    result: "Investiu R$1.877,57 e faturou R$11.566,18",
    logo: "https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Elementos-WordPress-2.png",
  },
  {
    client: "FOOD ACADEMY",
    instagram: "@foodacademybr",
    niche: "EVENTOS",
    result: "Ingressos 100% esgotados no maior evento de food service do nordeste",
    logo: "/foodacademy.png",
  },
  {
    client: "CENTRO FITNESS ARAÇATUBA",
    instagram: "@crossfitaracatuba",
    niche: "CROSSFIT",
    result: "Investiu R$987,68 e faturou R$6.799,00 em 30 dias",
    logo: "/cfa.png",
  },
  {
    client: "SAGRAMA",
    instagram: "@sagrama.oficial",
    niche: "SHOWS",
    result: "Investiu R$1.654,92 e faturou R$18.507,50 em 43 dias",
    logo: "/sagrama.png",
  },
  {
    client: "ROBERTO MONTANHA",
    instagram: "@robertomontanhaoficial",
    niche: "PALESTRAS E WORKSHOPS",
    result: "+50 cidades com os eventos lotados e 70% do público pelo tráfego",
    logo: "/roberto.png",
  },
  {
    client: "CARLA NAVARRO",
    instagram: "@carlinhanavarro",
    niche: "PRODUÇÃO CULTURAL",
    result: "Investiu R$3.002,56 e faturou R$10.524,38 em 25 dias",
    logo: "/carlinha.png",
  },
  {
    client: "SOUL MARCAS",
    instagram: "@soul.marca",
    niche: "MARCAS E PATENTES",
    result: "Investiu R$4.586,13 e faturou R$12.150,00 em 60 dias",
    logo: "/soul.png",
  },
];

export default function Cases() {
  return (
    <section id="cases" style={{ background: "#0E296B", padding: "clamp(50px, 10vw, 80px) 5%" }}>
      <div style={{ width: "100%", maxWidth: "100%", margin: "0 auto" }}>
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
        Cases de Sucesso
      </p>
      <h2 style={{ textAlign: "center", color: "#FFFFFF", fontSize: "clamp(24px, 3vw, 48px)", fontWeight: 500, fontFamily: "Poppins, sans-serif", letterSpacing: -1, marginBottom: 50 }}>
          Resultados que justificam cada investimento.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {casesData.map((c, i) => (
            <div key={i} style={{ background: "rgba(193, 217, 224, 0.05)", padding: "clamp(20px, 5vw, 32px)", borderRadius: "12px", border: "1px solid rgba(193, 217, 224, 0.05)", transition: "transform 0.2s ease, box-shadow 0.2s ease" }} className="hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(193, 217, 224,0.15)]">
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                {c.logo && (
                  <div style={{ width: 48, height: 48, position: "relative", borderRadius: "50%", overflow: "hidden", background: "rgba(193, 217, 224, 0.05)", flexShrink: 0 }}>
                    <Image src={c.logo} alt={c.client} fill style={{ objectFit: "cover" }} unoptimized />
                  </div>
                )}
                <div>
                  <h3 style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "600", fontFamily: "Poppins, sans-serif", marginBottom: "2px" }}>
                    {c.client}
                  </h3>
                  <p style={{ color: "#C1D9E0", fontSize: "12px", fontFamily: "Poppins, sans-serif", textTransform: "uppercase", letterSpacing: 0.5 }}>
                    {c.instagram} <span style={{ margin: "0 4px" }}>•</span> {c.niche}
                  </p>
                </div>
              </div>
              <p style={{ color: "#F2F2F2", fontSize: "16px", fontFamily: "Poppins, sans-serif", fontWeight: 300, lineHeight: 1.6 }}>
                {c.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
