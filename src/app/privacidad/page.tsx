import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — Jesus López",
  description:
    "Aviso de privacidad de Jesus López: qué datos personales recopilamos, para qué los usamos y cómo ejercer tus derechos.",
  alternates: { canonical: "/privacidad" },
};

const sections = [
  {
    title: "1. Responsable del tratamiento de datos",
    body: "Jesus López, a través de este sitio web y sus formularios de contacto y registro, es responsable del uso y protección de tus datos personales. Puedes contactarnos en jesuslopezcruz3004@gmail.com.",
  },
  {
    title: "2. Datos que recopilamos",
    body: "Cuando llenas un formulario en este sitio (contacto, registro a la Masterclass de 101 Barber Academy, etc.) podemos recopilar: nombre, correo electrónico, número de teléfono/WhatsApp, ciudad y la información adicional que decidas compartir en el mensaje o campo de objetivo.",
  },
  {
    title: "3. Para qué usamos tus datos",
    body: "Usamos tus datos para responder tu mensaje, contactarte sobre el servicio, conferencia, libro o clase que solicitaste, gestionar tu registro a eventos como la Masterclass de 101 Barber Academy, y, solo si lo autorizas expresamente, enviarte información y contenido adicional por correo o WhatsApp.",
  },
  {
    title: "4. Con quién compartimos tus datos",
    body: "No vendemos ni compartimos tus datos personales con terceros para fines publicitarios ajenos. Utilizamos proveedores de servicio (como plataformas de envío de correo) únicamente para poder entregarte la comunicación que solicitaste.",
  },
  {
    title: "5. Tus derechos",
    body: "Puedes solicitar en cualquier momento el acceso, corrección o eliminación de tus datos personales, así como retirar tu consentimiento para recibir comunicaciones de marketing, escribiendo a jesuslopezcruz3004@gmail.com.",
  },
  {
    title: "6. Cambios a este aviso",
    body: "Este aviso de privacidad puede actualizarse periódicamente. Cualquier cambio será publicado en esta misma página.",
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="bg-[#080808] text-white pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Aviso de Privacidad
          </h1>
          <p className="text-[#6b7280] text-sm mb-12">
            Última actualización: septiembre 2026
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-[#a3a3a3] leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
