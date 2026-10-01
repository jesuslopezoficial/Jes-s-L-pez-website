import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Libros — Jesus López",
  description:
    "Descubre 'Responsabilidad antes del Éxito' de Jesus López. El libro que todo hombre debe leer para transformar su mentalidad y construir el éxito desde sus fundamentos.",
  alternates: { canonical: "/libros" },
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://jesuslopezoficial.com/libros/responsabilidad-antes-del-exito#book",
  name: "Responsabilidad antes del Éxito",
  author: {
    "@type": "Person",
    "@id": "https://jesuslopezoficial.com/#person",
    name: "Jesus López",
  },
  inLanguage: "es",
  genre: "Self-help / Personal Development",
  description:
    "El libro que destila la filosofía de transformación masculina de Jesus López: por qué la responsabilidad debe ser el primer paso antes de buscar cualquier forma de éxito.",
  url: "https://jesuslopezoficial.com/libros/responsabilidad-antes-del-exito",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jesuslopezoficial.com" },
    { "@type": "ListItem", position: 2, name: "Libros", item: "https://jesuslopezoficial.com/libros" },
  ],
};

export default function LibrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-[#6b7280] mb-8">
              <Link href="/" className="hover:text-[#C9A227] transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-white">Libros</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#C9A227]" />
              Publicaciones
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Mis <span className="text-gold-gradient">Libros</span>
            </h1>
            <p className="text-[#a3a3a3] text-lg max-w-xl">
              Ideas que transforman. Cada libro es el resultado de vivir, fallar, aprender y aplicar.
            </p>
          </div>
        </section>

        {/* Book Card */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-4xl mx-auto">
              {/* Cover */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="w-64 h-96 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#9A7A1A] shadow-2xl group-hover:shadow-[0_0_60px_rgba(201,162,39,0.3)] transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-2xl" />
                    <div className="text-black font-bold text-2xl leading-tight mb-6">
                      Responsabilidad
                      <br />
                      antes del
                      <br />
                      Éxito
                    </div>
                    <div className="w-12 h-px bg-black/30 mb-6" />
                    <div className="text-black/70 font-medium">Jesus López</div>
                    <div className="absolute bottom-4 right-4 text-black/20 text-4xl font-serif">&ldquo;</div>
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-[#C9A227]/20 blur-xl -z-10" />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs text-[#C9A227] font-medium uppercase tracking-wider">Libro #1</span>
                  <h2 className="text-4xl font-bold text-white mt-2 leading-tight">
                    Responsabilidad antes del Éxito
                  </h2>
                  <p className="text-[#6b7280] mt-2">por Jesus López</p>
                </div>

                <p className="text-[#a3a3a3] leading-relaxed">
                  Antes de buscar el éxito, el dinero, el reconocimiento o la pareja ideal,
                  hay una pregunta que todo hombre debe responder: ¿Estás tomando
                  responsabilidad total sobre tu vida?
                </p>
                <p className="text-[#a3a3a3] leading-relaxed">
                  Este libro no es teoría. Es el destilado de una transformación real —
                  la historia de alguien que salió del campo, dejó el alcohol, construyó
                  un negocio y encontró su propósito. Todo gracias a un principio simple
                  pero poderoso: <strong className="text-white">la responsabilidad primero.</strong>
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Género", value: "Desarrollo Personal" },
                    { label: "Idioma", value: "Español" },
                    { label: "Audiencia", value: "Hombres 20-50" },
                    { label: "Tema Central", value: "Transformación Masculina" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-[#111] border border-[#2a2a2a]">
                      <div className="text-xs text-[#6b7280] mb-1">{item.label}</div>
                      <div className="text-white text-sm font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/libros/responsabilidad-antes-del-exito"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all text-sm gold-glow"
                >
                  Ver Detalles Completos
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Próximos libros */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Próximos <span className="text-gold-gradient">proyectos</span>
            </h2>
            <p className="text-[#6b7280] mb-12">
              Nuevos libros en proceso. Sígueme para ser el primero en saberlo.
            </p>
            <div className="p-8 rounded-2xl bg-[#111] border border-dashed border-[#2a2a2a] text-center">
              <span className="text-4xl block mb-4">✍️</span>
              <p className="text-[#6b7280]">En proceso de escritura...</p>
              <a
                href="https://www.instagram.com/101mobilebarbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[#C9A227] text-sm font-medium hover:text-[#F5D16A] transition-colors"
              >
                Seguir en Instagram para novedades
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
