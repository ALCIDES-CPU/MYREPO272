export const metadata: Metadata = {
  title: {
    default: "AIMA - Agendamento de Serviços e Apoio ao Imigrante",
    template: "%s | AIMA"
  },
  description: "Portal oficial da Agência para a Integração, Migrações e Asilo (AIMA). Realize agendamentos, consulte processos e obtenha informações sobre residência em Portugal.",
  keywords: ["AIMA", "Agendamento AIMA", "Residência Portugal", "Imigração", "Vistos Portugal", "Integração Migrantes"],
  authors: [{ name: "AIMA" }],
  creator: "AIMA",
  publisher: "AIMA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.aimapt.com/"), 
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/pt",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "AIMA - Agendamento de Serviços",
    description: "Plataforma oficial para agendamentos e serviços da Agência para a Integração, Migrações e Asilo.",
    url: "https://www.aimapt.com/",
    siteName: "AIMA",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "AIMA Portal de Serviços",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
