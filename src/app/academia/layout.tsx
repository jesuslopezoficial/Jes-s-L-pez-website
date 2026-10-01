import type { Metadata } from "next";
import { MASTERCLASS_DATE } from "@/lib/academia";

export const metadata: Metadata = {
  title: "101 Barber Academy — Masterclass Gratuita",
  description: `Aprende barbería desde cero o perfecciona tu técnica. Masterclass gratuita en vivo el ${MASTERCLASS_DATE} con Jesus López.`,
  openGraph: {
    title: "101 Barber Academy — Masterclass Gratuita",
    description: `Masterclass gratuita en vivo el ${MASTERCLASS_DATE}. Aprende el oficio, domina la técnica, construye tu futuro.`,
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "101 Barber Academy — Masterclass Gratuita",
    description: `Masterclass gratuita en vivo el ${MASTERCLASS_DATE}.`,
    images: ["/og-image.jpg"],
  },
};

export default function AcademiaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
