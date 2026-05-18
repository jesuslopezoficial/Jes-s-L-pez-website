import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre Mí — Jesus López",
  description:
    "Conoce la historia de Jesus López: de trabajo de campo a especialista en transformación masculina, autor y barbero. Una historia de responsabilidad, disciplina y fe.",
  alternates: { canonical: "/sobre-mi" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quién es Jesus López?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jesus López es un especialista en transformación masculina, autor del libro 'Responsabilidad antes del Éxito' y fundador de una barbería mobile. Su historia personal de superación lo convirtió en referente del desarrollo personal masculino.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué hace Jesus López?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jesus López ayuda a hombres a mejorar su imagen, disciplina y mentalidad para convertirse en la mejor versión de sí mismos. Lo hace a través de coaching personal, conferencias, libros y contenido digital.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la historia de Jesus López?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jesus López empezó trabajando en el campo, luego estudió barbería y construyó su propia barbería mobile desde cero. Durante su proceso personal dejó el alcohol, construyó disciplina física, encontró su fe y escribió su primer libro.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jesuslopez.com" },
    { "@type": "ListItem", position: 2, name: "Sobre Mí", item: "https://jesuslopez.com/sobre-mi" },
  ],
};

const timeline = [
  {
    year: "El Inicio",
    title: "Trabajo de campo",
    description:
      "Empecé como muchos hombres — sin dirección clara, en trabajos duros, sin ver más allá de lo inmediato. El alcohol era el escape fácil.",
    icon: "🌱",
  },
  {
    year: "El Giro",
    title: "Decidí cambiar",
    description:
      "Un momento de claridad. Me di cuenta que mis excusas eran la única barrera real. Decidí asumir responsabilidad total sobre mi vida.",
    icon: "💡",
  },
  {
    year: "El Estudio",
    title: "Barbería profesional",
    description:
      "Estudié barbería con dedicación total. No como hobbie — como profesión y como escuela de disciplina. Cada corte era práctica de excelencia.",
    icon: "✂️",
  },
  {
    year: "El Negocio",
    title: "Barbería Mobile desde cero",
    description:
      "Construí mi propia barbería mobile sin capital inicial. Solo con disciplina, servicio de calidad y el compromiso de crecer todos los días.",
    icon: "🚀",
  },
  {
    year: "La Transformación",
    title: "Dejé el alcohol",
    description:
      "Eliminar el alcohol fue el mayor acto de responsabilidad. Con esa claridad mental, todo mejoró: el negocio, las relaciones, la salud.",
    icon: "⚡",
  },
  {
    year: "El Cuerpo",
    title: "Disciplina física",
    description:
      "Empecé a construir mi cuerpo con ejercicio y alimentación saludable. El cuerpo es el primer negocio que debes administrar bien.",
    icon: "💪",
  },
  {
    year: "La Fe",
    title: "Fe, visión y acción",
    description:
      "Encontré la fe como ancla y norte. La combinación de fe + visión + acción es el tridente que mueve montañas.",
    icon: "🙏",
  },
  {
    year: "El Libro",
    title: "Autor publicado",
    description:
      "Escribí y publiqué 'Responsabilidad antes del Éxito' — el libro que destila todo lo aprendido y lo convierte en un mapa para otros hombres.",
    icon: "📖",
  },
  {
    year: "Hoy",
    title: "Transformando a otros hombres",
    description:
      "Hoy ayudo a hombres como yo a recorrer este camino. Imagen, disciplina y mentalidad — los tres pilares de la transformación masculina.",
    icon: "🏆",
  },
];

const values = [
  { title: "Responsabilidad", description: "Antes de buscar el éxito, debes asumir la responsabilidad total de tu vida.", icon: "🎯" },
  { title: "Disciplina", description: "La disciplina construida día a día es lo que separa al hombre que quiere del que logra.", icon: "⚡" },
  { title: "Fe", description: "La fe te da dirección cuando la mente dice que no es posible.", icon: "🙏" },
  { title: "Acción", description: "El conocimiento sin acción es entretenimiento. El cambio vive en el hacer.", icon: "🚀" },
];

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-grid relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-[#6b7280] mb-8">
              <Link href="/" className="hover:text-[#C9A227] transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-white">Sobre Mí</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-6">
                  <span className="w-8 h-px bg-[#C9A227]" />
                  Mi Historia
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
                  Jesus López
                  <br />
                  <span className="text-gold-gradient">mi camino</span>
                </h1>
                <p className="text-[#a3a3a3] text-lg leading-relaxed">
                  Especialista en transformación masculina, autor y barbero.
                  Una historia de responsabilidad, disciplina y fe que hoy
                  inspira a hombres a construir su mejor versión.
                </p>
              </div>

              {/* Photo placeholder */}
              <div className="relative">
                <div className="w-full max-w-sm mx-auto aspect-square rounded-2xl bg-[#111] border border-[#2a2a2a] flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A227] to-[#9A7A1A] flex items-center justify-center text-2xl font-bold text-black">
                    JL
                  </div>
                  <p className="text-[#6b7280] text-xs text-center px-8">
                    📸 Foto profesional — reemplazar con public/jesus-sobre-mi.jpg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
                Hay hombres que nacen con todo y hacen poco con eso. Y hay hombres que
                empiezan con muy poco y construyen todo. Yo soy del segundo tipo — y no
                lo digo para que te impresiones, sino para que sepas que tu punto de
                partida no define tu destino.
              </p>
              <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
                Empecé trabajando en el campo. Nada glamoroso, nada de lo que muchos
                coaches hablan. Trabajo duro, sol, y la mentalidad de que así era la vida.
                El alcohol era la válvula de escape. Las excusas eran mi religión.
              </p>
              <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
                Un día algo cambió. No fue un evento dramático. Fue una decisión silenciosa:
                <em className="text-white"> &ldquo;Voy a ser responsable de mi vida.&rdquo;</em> Esa decisión lo cambió todo.
              </p>
              <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
                Estudié barbería. Construí una barbería mobile desde cero — sin capital,
                sin contactos, solo con el compromiso de servir bien. Dejé el alcohol
                y descubrí que la claridad mental es el recurso más poderoso que tienes.
                Empecé a ejercitar mi cuerpo y a comer mejor. Encontré la fe como brújula
                y la visión como motor.
              </p>
              <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
                Y escribí <strong className="text-white">&ldquo;Responsabilidad antes del Éxito&rdquo;</strong> —
                porque esa es la verdad más importante que nadie te dice. Antes de buscar
                el éxito, debes asumir responsabilidad total. Sin ese paso, todo lo demás
                es edificar en arena.
              </p>
              <p className="text-[#a3a3a3] text-lg leading-relaxed">
                Hoy mi misión es clara: ayudar a hombres como yo — hombres con potencial
                enorme pero quizás sin la dirección correcta — a transformar su imagen,
                su disciplina y su mentalidad. A convertirse en la mejor versión de sí mismos.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-[#C9A227]" />
                Mis Valores
                <span className="w-8 h-px bg-[#C9A227]" />
              </div>
              <h2 className="text-4xl font-bold text-white">
                Lo que me <span className="text-gold-gradient">guía</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="p-6 rounded-2xl bg-[#111] border border-[#2a2a2a] text-center hover:border-[#C9A227]/30 transition-all">
                  <span className="text-4xl block mb-4">{v.icon}</span>
                  <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-[#C9A227]" />
                Mi Camino
                <span className="w-8 h-px bg-[#C9A227]" />
              </div>
              <h2 className="text-4xl font-bold text-white">
                Cada paso <span className="text-gold-gradient">importó</span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-[#2a2a2a]" />
              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={item.title} className="relative flex gap-8 pl-20">
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-[#111] border-2 border-[#2a2a2a] flex items-center justify-center text-2xl hover:border-[#C9A227] transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1 pb-2">
                      <span className="text-xs text-[#C9A227] font-medium uppercase tracking-wider">
                        {item.year}
                      </span>
                      <h3 className="text-white font-semibold text-lg mt-1 mb-2">{item.title}</h3>
                      <p className="text-[#6b7280] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Preguntas <span className="text-gold-gradient">frecuentes</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="p-6 rounded-xl bg-[#111] border border-[#2a2a2a]">
                  <h3 className="text-white font-semibold mb-3">{faq.name}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Quieres que te <span className="text-gold-gradient">acompañe</span>?
            </h2>
            <p className="text-[#a3a3a3] mb-8">
              Si mi historia resuena contigo, escribeme. Empecemos a construir la tuya.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all gold-glow"
            >
              Hablemos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
