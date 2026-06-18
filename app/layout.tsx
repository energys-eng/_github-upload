import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Energys",
  title: "Energys | Energia Solar, Gestão de Energia e Engenharia Elétrica",
  description:
    "Soluções de energia solar, gestão energética e engenharia elétrica para residências, empresas, indústrias e propriedades rurais. Solicite uma análise energética com a Energys.",
  keywords: [
    "energia solar",
    "gestão de energia",
    "engenharia elétrica",
    "eficiência energética",
    "diagnóstico energético",
    "Energys"
  ],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Energys | Energia sob controle. Decisão com dados.",
    description:
      "Engenharia elétrica, energia solar e gestão energética para ajudar residências, empresas, indústrias e propriedades rurais a tomar decisões energéticas com mais segurança.",
    type: "website",
    locale: "pt_BR",
    siteName: "Energys"
  },
  twitter: {
    card: "summary",
    title: "Energys | Energia sob controle. Decisão com dados.",
    description:
      "Engenharia elétrica, energia solar e gestão energética para ajudar residências, empresas, indústrias e propriedades rurais a tomar decisões energéticas com mais segurança."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
