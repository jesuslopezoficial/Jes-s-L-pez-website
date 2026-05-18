import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prensa — Jesus López",
  description:
    "Sala de prensa de Jesus López. Recursos para periodistas y medios: bio, fotos, kit de prensa y temas disponibles para entrevistas.",
  alternates: { canonical: "/prensa" },
};

export default function PrensaPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-[#6b7280] mb-8">
              <Link href="/" className="hover:text-[#C9A227]">Inicio</Link>
              <span>/</span>
              <span className="text-white">Prensa</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#C9A227]" />
              Sala de Prensa
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Recursos para <span className="text-gold-gradient">medios</span>
            </h1>
          </div>
        </section>

        {/* Press Kit */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Bio corta */}
              <div className="p-8 rounded-2xl bg-[#111] border border-[#2a2a2a]">
                <h2 className="text-white font-bold text-xl mb-4">Biografía Corta</h2>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">
                  Jesus López es especialista en transformación masculina, autor del libro
                  &ldquo;Responsabilidad antes del Éxito&rdquo; y fundador de una barbería mobile.
                  Su historia personal — de trabajo de campo a emprendedor, autor y coach —
                  lo convierte en una voz auténtica del desarrollo personal masculino.
                  Ayuda a hombres a transformar su imagen, disciplina y mentalidad para
                  convertirse en la mejor versión de sí mismos.
                </p>
              </div>

              {/* Bio larga */}
              <div className="p-8 rounded-2xl bg-[#111] border border-[#2a2a2a]">
                <h2 className="text-white font-bold text-xl mb-4">Datos Clave</h2>
                <ul className="space-y-3">
                  {[
                    { label: "Especialidad", value: "Transformación Masculina" },
                    { label: "Libro publicado", value: "Responsabilidad antes del Éxito" },
                    { label: "Instagram", value: "1,300+ seguidores" },
                    { label: "TikTok", value: "@101mobilebarbershop — 699 seg." },
                    { label: "Empresa fundada", value: "Barbería Mobile" },
                    { label: "Email", value: "jesuslopezcruz3004@gmail.com" },
                    { label: "WhatsApp", value: "+1 209 354 6316" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3 text-sm">
                      <span className="text-[#6b7280] w-32 flex-shrink-0">{item.label}:</span>
                      <span className="text-white">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Topics */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">
                Temas de <span className="text-gold-gradient">entrevista</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Transformación masculina en el siglo XXI",
                  "Por qué la responsabilidad es clave del éxito",
                  "Cómo salir de la mediocridad y construir disciplina",
                  "El rol del hombre moderno en familia y sociedad",
                  "Eliminar el alcohol y recuperar el control",
                  "Imagen masculina y presencia profesional",
                  "Emprendimiento desde cero sin capital",
                  "Fe y propósito como motores del cambio",
                  "Mentalidad de grandeza: de excusas a acción",
                ].map((topic) => (
                  <div key={topic} className="flex items-start gap-3 p-4 rounded-xl bg-[#111] border border-[#2a2a2a]">
                    <span className="w-5 h-5 rounded-full bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[#a3a3a3] text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Menciones futuras */}
            <div className="p-8 rounded-2xl bg-[#111] border border-dashed border-[#2a2a2a] text-center">
              <span className="text-4xl block mb-4">📰</span>
              <h3 className="text-white font-bold text-xl mb-2">Cobertura de Medios</h3>
              <p className="text-[#6b7280] text-sm max-w-md mx-auto mb-6">
                Artículos y menciones en medios serán publicados aquí conforme se vayan consiguiendo.
                Para entrevistas o colaboraciones:
              </p>
              <a
                href="mailto:jesuslopezcruz3004@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all text-sm"
              >
                Solicitar Entrevista
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
