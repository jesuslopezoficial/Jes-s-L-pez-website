import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Responsabilidad antes del Éxito — Libro de Jesus López",
  description:
    "Lee 'Responsabilidad antes del Éxito' de Jesus López. El libro que enseña por qué asumir responsabilidad total es el fundamento de cualquier transformación masculina real.",
  alternates: { canonical: "/libros/responsabilidad-antes-del-exito" },
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://jesuslopez.com/libros/responsabilidad-antes-del-exito#book",
  name: "Responsabilidad antes del Éxito",
  author: {
    "@type": "Person",
    "@id": "https://jesuslopez.com/#person",
    name: "Jesus López",
  },
  inLanguage: "es",
  genre: ["Self-help", "Personal Development", "Masculinity"],
  description:
    "El libro que todo hombre debe leer antes de buscar el éxito. Jesus López destila su transformación personal en un manual práctico de responsabilidad, disciplina y mentalidad masculina.",
  url: "https://jesuslopez.com/libros/responsabilidad-antes-del-exito",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jesuslopez.com" },
    { "@type": "ListItem", position: 2, name: "Libros", item: "https://jesuslopez.com/libros" },
    { "@type": "ListItem", position: 3, name: "Responsabilidad antes del Éxito", item: "https://jesuslopez.com/libros/responsabilidad-antes-del-exito" },
  ],
};

const chapters = [
  { num: "01", title: "El Problema con la Excusa", preview: "Por qué las excusas son el mayor enemigo de cualquier hombre con potencial." },
  { num: "02", title: "Responsabilidad: La Decisión que lo Cambia Todo", preview: "Qué significa realmente asumir responsabilidad y cómo hacerlo desde hoy." },
  { num: "03", title: "Construyendo desde Cero", preview: "Mi historia personal: de campo a barbería, de alcohol a disciplina." },
  { num: "04", title: "La Disciplina como Liberación", preview: "Por qué la disciplina no es un castigo sino la mayor libertad que puede tener un hombre." },
  { num: "05", title: "Imagen: Tu Presencia Habla Primero", preview: "Cómo tu imagen impacta todas las áreas de tu vida antes de abrir la boca." },
  { num: "06", title: "Mentalidad de Grandeza", preview: "Los patrones mentales que separan al hombre promedio del hombre extraordinario." },
  { num: "07", title: "Fe, Visión y Acción", preview: "El tridente que te lleva desde donde estás hasta donde quieres estar." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿De qué trata el libro 'Responsabilidad antes del Éxito'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un libro de desarrollo personal masculino que explica por qué asumir responsabilidad total sobre tu vida es el fundamento necesario antes de buscar cualquier forma de éxito. Combina la historia personal de Jesus López con principios prácticos de transformación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para quién es este libro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para hombres que sienten que tienen potencial pero no están donde quieren estar. Para hombres que han caído en excusas, adicciones o falta de dirección. Para cualquier hombre que quiera transformar su imagen, disciplina y mentalidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde puedo conseguir el libro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactar directamente a Jesus López a través del formulario de contacto en su sitio web o por WhatsApp para obtener información actualizada sobre disponibilidad.",
      },
    },
  ],
};

export default function LibroPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-grid relative overflow-hidden">
          <div className="absolute inset-0 bg-[#C9A227]/3 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="flex items-center gap-2 text-sm text-[#6b7280] mb-8">
              <Link href="/" className="hover:text-[#C9A227]">Inicio</Link>
              <span>/</span>
              <Link href="/libros" className="hover:text-[#C9A227]">Libros</Link>
              <span>/</span>
              <span className="text-white">Responsabilidad antes del Éxito</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Book */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-72 h-[440px] rounded-2xl bg-gradient-to-br from-[#C9A227] via-[#D4B54A] to-[#9A7A1A] shadow-2xl flex flex-col items-center justify-center p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
                    <div className="absolute top-4 left-4 right-4 bottom-4 border border-black/10 rounded-xl" />
                    <div className="text-black font-bold text-3xl leading-tight mb-6 relative z-10">
                      Responsabilidad
                      <br />
                      antes del
                      <br />
                      Éxito
                    </div>
                    <div className="w-16 h-px bg-black/20 mb-6" />
                    <div className="text-black/60 font-medium text-sm relative z-10">Jesus López</div>
                  </div>
                  <div className="absolute -inset-3 rounded-3xl bg-[#C9A227]/15 blur-2xl -z-10" />
                </div>
              </div>

              <div className="space-y-6">
                <span className="text-xs text-[#C9A227] font-medium uppercase tracking-wider">Libro de Desarrollo Personal</span>
                <h1 className="text-5xl font-bold text-white leading-tight">
                  Responsabilidad <br /><span className="text-gold-gradient">antes del Éxito</span>
                </h1>
                <p className="text-[#6b7280]">Por Jesus López</p>

                <p className="text-[#a3a3a3] leading-relaxed">
                  El libro que todo hombre debe leer antes de buscar el éxito. Sin responsabilidad,
                  todo lo demás son castillos en el aire. Con responsabilidad, todo se vuelve posible.
                </p>

                <div className="flex gap-4 pt-2">
                  <a
                    href={`https://wa.me/12093546316?text=Hola%20Jesus%2C%20quiero%20conseguir%20tu%20libro%20%22Responsabilidad%20antes%20del%20%C3%89xito%22`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all gold-glow text-sm"
                  >
                    Obtener el Libro
                  </a>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] text-white font-medium rounded-full hover:border-[#C9A227]/50 transition-all text-sm"
                  >
                    Contactar a Jesus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapters */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Contenido del <span className="text-gold-gradient">libro</span>
              </h2>
            </div>
            <div className="space-y-3">
              {chapters.map((ch) => (
                <div key={ch.num} className="flex items-start gap-6 p-6 rounded-xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/30 transition-all group">
                  <span className="text-3xl font-bold text-[#2a2a2a] group-hover:text-[#C9A227]/30 transition-colors w-10 flex-shrink-0">
                    {ch.num}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-[#C9A227] transition-colors">{ch.title}</h3>
                    <p className="text-[#6b7280] text-sm">{ch.preview}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#0a0a0a]">
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
      </main>
      <Footer />
    </>
  );
}
