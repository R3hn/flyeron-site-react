import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Flyer On - Assessoria de Marketing Digital",
  description:
    "A Flyer On é uma assessoria de marketing digital que oferece soluções completas para potencializar negócios no digital e multiplicar resultados.",
  icons: {
    icon: "/favicon.ico",
  },
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
    <html lang="pt-BR" className={poppins.variable}>
      <body className="font-poppins bg-[#0E296B] text-[#F2F2F2]">{children}</body>
    </html>
  );
}
