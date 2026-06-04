"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: "trafego",
    label: "Tráfego Pago",
    title: "Assessoria de Tráfego Pago",
    description:
      "A nossa assessoria oferece uma gestão completa e estratégica das suas campanhas, focada em alcançar os melhores resultados para o seu negócio. Entregamos uma solução que combina estratégia e execução, garantindo que sua marca atinja o público certo, no momento certo, para obter os melhores resultados.",
    image:
      "https://flyeron-site.vercel.app/wp-content/uploads/2024/09/campanhas-de-trafego-pago-em-campinas-1-1024x1024-1.png",
  },
  {
    id: "ai",
    label: "Agente AI",
    title: "Agente AI Pro",
    description:
      "Otimize seu atendimento e aumente suas conversões com um agente de inteligência artificial personificado, treinado para vender e atender com eficiência máxima. Tenha um assistente ativo 24/7 que vai atender os seus clientes de forma humanizada, com interações instantâneas, personalizadas e alinhadas à identidade da sua marca. Reduza custos com equipe, escale seu atendimento e maximize suas vendas com uma IA que aprende, se adapta e evolui a cada interação, garantindo mais conversões e uma experiência impecável para seus clientes. Ganhe tempo, tranquilidade e liberdade enquanto sua IA cuida do atendimento por você.",
    image:
      "https://flyeron-site.vercel.app/wp-content/uploads/2025/02/robo-inteligencia-artificial-chat-ai-10740395-8715206.webp",
  },
  {
    id: "liveshop",
    label: "Live Shop",
    title: "Live Shop Pro",
    description:
      "A Live Shop Pro vai muito além de uma live comum. Com o nosso método exclusivo, potencializamos sua Live Shop usando estratégias avançadas de marketing digital e lançamentos, capazes de atrair um grande público e gerar picos de vendas impressionantes. Imagine vender em um dia o que normalmente venderia em um mês! Ideal para e-commerces com estrutura pronta, essa solução é perfeita para promoções, queima de estoque e lançamentos de novas campanhas, maximizando o impacto e os resultados do seu negócio.",
    image:
      "https://flyeron-site.vercel.app/wp-content/uploads/2024/09/campanhas-de-trafego-pago-em-campinas-1024x1024.png",
  },
  {
    id: "social",
    label: "Social Media",
    title: "Assessoria de Social Media",
    description:
      "Cuidamos da gestão do seu Instagram, desde a criação até a execução dos conteúdos com o objetivo de fortalecer a presença digital do seu negócio. Utilizamos as melhores estratégias e ferramentas para garantir que sua marca esteja sempre atualizada, relevante e pronta para engajar.",
    image:
      "https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Elementos-WordPress-9-1024x1024.png",
  },
  {
    id: "landing",
    label: "Landing Page",
    title: "Landing Pages de Alta Conversão",
    description:
      "Criamos landing pages projetadas exclusivamente para maximizar suas conversões. Cada página segue uma estrutura estratégica baseada em neuromarketing, guiando seus potenciais clientes através de níveis de consciência e gatilhos mentais que os preparam para a compra. Desenvolvemos seções pensadas para despertar interesse e desejo, levando o usuário a uma decisão irresistível no final da página.",
    image:
      "https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Elementos-WordPress-11-1024x1024.png",
  },
  {
    id: "vitrine",
    label: "Vitrine Online",
    title: "Vitrine Online Pro",
    description:
      "O Vitrine Online Pro é ideal para empresas que precisam estruturar sua presença digital antes de investir em estratégias de tráfego pago. Organizamos e otimizamos os canais de vendas e as redes sociais da sua empresa, preparando seu negócio para crescer. Ajustamos Instagram, Facebook, WhatsApp Business, Google Meu Negócio, garantindo que tudo esteja em ordem e atraente para receber visitantes e gerar conversões.",
    image:
      "https://flyeron-site.vercel.app/wp-content/uploads/2024/09/Elementos-WordPress-10-1-1024x1024.png",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("trafego");
  const active = services.find((s) => s.id === activeTab)!;

  return (
    <section
      id="servicos"
      style={{
        background: "#0E296B",
        padding: "0 0",
      }}
    >
      {/* Header */}
      <div style={{ padding: "clamp(40px, 8vw, 50px) clamp(20px, 5vw, 100px) 0 clamp(20px, 5vw, 100px)" }}>
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
        Nossos serviços
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
            paddingBottom: "3%",
          }}
        >
          O que oferecemos?
        </h2>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
          padding: "0 clamp(20px, 5vw, 40px) 30px clamp(20px, 5vw, 40px)",
        }}
      >
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(s.id)}
            style={{
              background: "#0E296B",
              border: "2px solid #C1D9E0",
              borderRadius: 10,
              padding: "10px 20px",
              color: "#F2F2F2",
              fontFamily: "'Poppins', sans-serif",
              fontSize: 17,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow:
                activeTab === s.id
                  ? "0 0 10px 0 rgba(0,0,0,0.5)"
                  : "0 0 5px 0 #C1D9E0",
              textDecoration: activeTab === s.id ? "underline" : "none",
              transition: "all 0.2s",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div
        style={{
          background: "#0E296B",
          padding: "clamp(30px, 5vw, 40px) clamp(20px, 5vw, 80px)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 60,
          flexWrap: "wrap",
        }}
      >
        {/* Text */}
        <div style={{ flex: "1 1 280px" }}>
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(22px, 2.5vw, 38px)",
              fontWeight: 500,
              letterSpacing: -1,
              color: "#FFFFFF",
              marginBottom: 20,
            }}
          >
            {active.title}
          </h3>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.5,
              color: "#F2F2F2",
              marginBottom: 30,
            }}
          >
            {active.description}
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=558193257368"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Preciso desse serviço
          </a>
        </div>

        {/* Image */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            key={active.id}
            src={active.image}
            alt={active.title}
            width={380}
            height={380}
            unoptimized
            style={{ objectFit: "contain", borderRadius: 10, maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
