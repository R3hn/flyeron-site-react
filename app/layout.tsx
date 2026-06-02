import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flyer On - Assessoria de Marketing Digital",
  description:
    "A Flyer On é uma assessoria de marketing digital que oferece soluções completas para potencializar negócios no digital e multiplicar resultados.",
  openGraph: {
    title: "Flyer On - Assessoria de Marketing Digital",
    description:
      "A Flyer On é uma assessoria de marketing digital que oferece soluções completas para potencializar negócios no digital e multiplicar resultados.",
    url: "https://flyeron.com.br",
    siteName: "Flyer On",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
