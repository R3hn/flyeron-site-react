"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Como funciona o trabalho da Flyer On?",
    answer:
      "Na Flyer On, oferecemos soluções completas de marketing digital para negócios que querem crescer no digital. Não acreditamos em fórmulas mágicas ou estratégias genéricas. Por isso, nossas soluções são personalizadas, focadas no que realmente gera resultado.\n\nAnalisamos seu negócio a fundo e criamos um plano sob medida para atrair mais clientes, aumentar suas vendas e fortalecer sua marca no digital. Se você quer parar de perder tempo com estratégias que não funcionam e começar a ver resultados reais, fale com a gente e descubra a estratégia ideal para levar seu negócio ao próximo nível.",
  },
  {
    question: "Quanto preciso investir para ter resultado?",
    answer:
      "O valor ideal de investimento depende da estrutura do seu negócio, do mercado e dos seus objetivos. Quanto maior o investimento, maior a capacidade de testar, otimizar e escalar campanhas, o que acelera os resultados. Além disso, um orçamento maior permite integrar mais serviços, aperfeiçoando todas as áreas e etapas do funil para aumentar as taxas de conversão e gerar um alto retorno sobre o investimento.\n\nAlém do valor financeiro, ter a mentalidade certa é fundamental para alcançar bons resultados. Investir com visão de longo prazo, paciência e confiança no processo é essencial para o crescimento sustentável. O marketing digital é um processo contínuo e estratégico, e não um atalho para ganhos imediatos. Empresas que enxergam o marketing como um investimento – e não como um custo – colhem os melhores retornos no longo prazo.\n\nEntre em contato para entendermos melhor a sua situação e traçarmos um plano de ação personalizado para potencializar o seu negócio no digital.",
  },
  {
    question: "Vocês também oferecem produção de vídeos?",
    answer:
      "Sim, a criação de vídeos pode ser incluída nos nossos pacotes, dependendo da demanda do cliente. Todas as nossas soluções envolvem vídeos em alguma etapa do processo, pois acreditamos que o audiovisual é essencial para potencializar qualquer estratégia de marketing digital.\n\nNo entanto, não vendemos esse serviço separadamente. Caso precise exclusivamente da produção audiovisual, temos uma parceria com a Cine Filmes, um dos principais estúdios da região. Clientes da Flyer On têm acesso a um cupom especial de desconto para projetos realizados com eles.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "#0E296B",
        padding: "1% 0 8% 0",
        display: "flex",
        flexDirection: "column",
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
        Perguntas frequentes
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
            padding: "0 0 2%",
            marginTop: 50,
          }}
        >
          Veja as principais dúvidas
        </h2>
      </div>

      {/* FAQ list */}
      <div
        style={{
          maxWidth: 800,
          width: "100%",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 40px)",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{
              borderBottom: "1px solid #2a2a2a",
            }}
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                color: "#F2F2F2",
                fontFamily: "'Poppins', sans-serif",
                fontSize: 17,
                fontWeight: 500,
                textAlign: "left",
                padding: "22px 0",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span>{faq.question}</span>
              <span
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  color: "#C1D9E0",
                  transition: "transform 0.2s",
                  transform: open === idx ? "rotate(180deg)" : "rotate(0deg)",
                  flexShrink: 0,
                }}
              >
                ▾
              </span>
            </button>
            {open === idx && (
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "#C1D9E0",
                  paddingBottom: 22,
                  whiteSpace: "pre-line",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <a
          href="https://api.whatsapp.com/send?phone=558193257368"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Quero escalar meu negócio!
        </a>
      </div>
    </section>
  );
}
