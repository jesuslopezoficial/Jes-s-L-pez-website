import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jesus López — Especialista en Transformación Masculina",
    template: "%s | Jesus López",
  },
  description:
    "Jesus López ayuda a hombres a mejorar su imagen, disciplina y mentalidad para convertirse en la mejor versión de sí mismos. Autor de 'Responsabilidad antes del Éxito'.",
  keywords: [
    "transformación masculina",
    "coach masculino",
    "disciplina hombres",
    "mentalidad masculina",
    "desarrollo personal hombres",
    "Jesus López",
    "responsabilidad antes del exito",
  ],
  authors: [{ name: "Jesus López", url: "https://jesuslopezoficial.com" }],
  creator: "Jesus López",
  publisher: "Jesus López",
  metadataBase: new URL("https://jesuslopezoficial.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    url: "https://jesuslopezoficial.com",
    siteName: "Jesus López",
    title: "Jesus López — Especialista en Transformación Masculina",
    description:
      "Ayudo a hombres a mejorar su imagen, disciplina y mentalidad para convertirse en la mejor versión de sí mismos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jesus López — Transformación Masculina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus López — Especialista en Transformación Masculina",
    description:
      "Ayudo a hombres a mejorar su imagen, disciplina y mentalidad para convertirse en la mejor versión de sí mismos.",
    images: ["/og-image.jpg"],
    creator: "@jesuslopezoficial",
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
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://jesuslopezoficial.com/#person",
  name: "Jesus López",
  alternateName: ["Jesus Lopez", "Jesus López Oficial"],
  jobTitle: "Especialista en Transformación Masculina",
  description:
    "Jesus López es especialista en transformación masculina, autor del libro 'Responsabilidad antes del Éxito' y coach que ayuda a hombres a mejorar su imagen, disciplina y mentalidad.",
  url: "https://jesuslopezoficial.com",
  image: "https://jesuslopezoficial.com/jesus-lopez.jpg",
  sameAs: [
    "https://www.instagram.com/101mobilebarbershop",
    "https://www.tiktok.com/@101mobilebarbershop",
    "https://www.facebook.com/jesuslopezoficial",
  ],
  knowsAbout: [
    "Transformación masculina",
    "Disciplina personal",
    "Mentalidad de éxito",
    "Imagen masculina",
    "Desarrollo personal",
    "Liderazgo masculino",
    "Barbería profesional",
    "Emprendimiento",
    "Fe y propósito",
  ],
  knowsLanguage: ["es", "en"],
  nationality: {
    "@type": "Country",
    name: "México",
  },
  worksFor: {
    "@type": "Organization",
    name: "Jesus López — Transformación Masculina",
    url: "https://jesuslopezoficial.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jesuslopezoficial.com",
  },
  interactionStatistic: [
    {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/FollowAction",
      userInteractionCount: 1300,
      name: "Instagram followers",
    },
    {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/FollowAction",
      userInteractionCount: 699,
      name: "TikTok followers",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://jesuslopezoficial.com/#website",
  name: "Jesus López",
  url: "https://jesuslopezoficial.com",
  description: "Sitio oficial de Jesus López — Especialista en Transformación Masculina",
  inLanguage: ["es", "en"],
  author: { "@id": "https://jesuslopezoficial.com/#person" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://jesuslopezoficial.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full bg-[#080808] text-[#f5f5f5] antialiased">
        {children}
      </body>
    </html>
  );
}
