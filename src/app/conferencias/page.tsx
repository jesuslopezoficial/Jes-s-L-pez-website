import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conferencias — Jesus López",
  description:
    "Contrata a Jesus López como conferencista para tu evento, empresa o taller. Especialista en transformación masculina, disciplina y mentalidad de éxito.",
  alternates: { canonical: "/conferencias" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿En qué temas habla Jesus López como conferencista?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jesus López habla sobre transformación masculina, disciplina personal, mentalidad de éxito, liderazgo, imagen profesional, responsabilidad y cómo eliminar excusas para alcanzar metas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo contratar a Jesus López para una conferencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactar a Jesus López a través del formulario de contacto en jesuslopez.com, por email a jesuslopezcruz3004@gmail.com o directamente por WhatsApp al +1 209 354 6316.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué tipo de eventos está disponible Jesus López?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jesus López está disponible para conferencias empresariales, eventos de desarrollo personal, talleres presenciales, convenciones, universidades y eventos privados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dura una conferencia de Jesus López?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las conferencias estándar tienen una duración de 45 a 90 minutos. Los talleres intensivos pueden ser de 4 horas o día completo. La duración se adapta a las necesidades del evento.",
      },
    },
  ],
};

const talks = [
  {
    icon: "🎯",
    title: "Responsabilidad: El Primer Paso al Éxito",
    description: "La charla que cambia perspectivas desde el primer minuto. Por qué la responsabilidad, no el talento, es lo que determina tu destino.",
    duration: "60-90 min",
    ideal: "Equipos, emprendedores, hombres en transición",
  },
  {
    icon: "⚡",
    title: "Disciplina Masculina en el Siglo XXI",
    description: "Cómo construir hábitos de alto rendimiento en un mundo lleno de distracciones. Práctico, directo y sin excusas.",
    duration: "45-60 min",
    ideal: "Empresas, deportistas, jóvenes",
  },
  {
    icon: "🪞",
    title: "Imagen, Presencia y Autoridad",
    description: "Tu imagen comunica antes de que hables. Cómo proyectar confianza, liderazgo y presencia en cualquier entorno.",
    duration: "45 min",
    ideal: "Profesionales, vendedores, líderes",
  },
  {
    icon: "🧠",
    title: "Elimina las Excusas, Activa la Grandeza",
    description: "Un recorrido honesto por los patrones mentales que frenan a los hombres y las herramientas para eliminarlos de raíz.",
    duration: "60 min",
    ideal: "Cualquier audiencia masculina",
  },
];

export default function ConferenciasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-grid relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="flex items-center gap-2 text-sm text-[#6b7280] mb-8">
              <Link href="/" className="hover:text-[#C9A227]">Inicio</Link>
              <span>/</span>
              <span className="text-white">Conferencias</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-[#C9A227]" />
                Conferencista
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
                Una charla que <br />
                <span className="text-gold-gradient">activa el cambio</span>
              </h1>
              <p className="text-[#a3a3a3] text-lg leading-relaxed mb-8">
                No vengo a entretener — vengo a provocar una transformación real.
                Cada conferencia está diseñada para que los hombres salgan con
                una perspectiva nueva y la urgencia de actuar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/12093546316?text=Hola%20Jesus%2C%20me%20interesa%20contratarte%20para%20una%20conferencia`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all gold-glow"
                >
                  Contratar Ahora
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#2a2a2a] text-white rounded-full hover:border-[#C9A227]/50 transition-all"
                >
                  Solicitar Información
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Talks */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white">
                Temas <span className="text-gold-gradient">disponibles</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {talks.map((talk) => (
                <div key={talk.title} className="p-8 rounded-2xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/30 transition-all">
                  <span className="text-4xl block mb-4">{talk.icon}</span>
                  <h3 className="text-white font-bold text-xl mb-3">{talk.title}</h3>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6">{talk.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-[#6b7280]">
                      ⏱ {talk.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 text-xs text-[#C9A227]">
                      👥 {talk.ideal}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">
                Cómo <span className="text-gold-gradient">funciona</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Contáctame", desc: "Escríbeme con los detalles de tu evento: fecha, audiencia, duración y objetivo principal." },
                { step: "02", title: "Diseñamos juntos", desc: "Adaptamos el contenido a tu audiencia específica para maximizar el impacto y la transformación." },
                { step: "03", title: "La experiencia", desc: "Una charla honesta, directa y llena de herramientas prácticas que tu audiencia recordará." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 flex items-center justify-center text-[#C9A227] font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Preguntas <span className="text-gold-gradient">frecuentes</span>
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="p-6 rounded-xl bg-[#111] border border-[#2a2a2a]">
                  <h3 className="text-white font-semibold mb-3">{faq.name}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para llevar la transformación a tu <span className="text-gold-gradient">evento</span>?
            </h2>
            <p className="text-[#a3a3a3] mb-8">Disponibilidad limitada. Contáctame hoy.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all gold-glow"
              >
                Solicitar Cotización
              </Link>
              <a
                href="mailto:jesuslopezcruz3004@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#2a2a2a] text-white rounded-full hover:border-[#C9A227]/50 transition-all"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
