import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jesus López — Especialista en Transformación Masculina",
  description:
    "Ayudo a hombres a mejorar su imagen, disciplina y mentalidad para convertirse en la mejor versión de sí mismos. Autor de 'Responsabilidad antes del Éxito'.",
};

const stats = [
  { value: "1,300+", label: "Seguidores en Instagram" },
  { value: "1", label: "Libro Publicado" },
  { value: "100%", label: "Transformación Real" },
  { value: "∞", label: "Compromiso Contigo" },
];

const transformationSteps = [
  {
    icon: "🪞",
    title: "Imagen",
    description:
      "Tu presencia dice todo antes de que abras la boca. Te ayudo a proyectar la versión más poderosa de ti mismo.",
  },
  {
    icon: "⚡",
    title: "Disciplina",
    description:
      "La disciplina no es castigo, es libertad. Construimos hábitos que te llevan a donde quieres estar.",
  },
  {
    icon: "🧠",
    title: "Mentalidad",
    description:
      "Elimina las excusas, el miedo y el alcohol. Instala una mentalidad de grandeza, fe y acción constante.",
  },
];

const testimonials = [
  {
    quote:
      "Jesus me enseñó que la responsabilidad es el primer paso hacia cualquier éxito. Cambié mi vida en 90 días.",
    name: "Carlos M.",
    role: "Emprendedor",
  },
  {
    quote:
      "Dejé el alcohol, mejoré mi imagen y empecé a construir mi negocio. Jesus es el coach que todo hombre necesita.",
    name: "Roberto D.",
    role: "Barbero Profesional",
  },
  {
    quote:
      "Su libro 'Responsabilidad antes del Éxito' me cambió la mentalidad completamente. Un antes y un después.",
    name: "Miguel A.",
    role: "Padre de familia",
  },
];

const blogPreviews = [
  {
    slug: "responsabilidad-clave-del-exito-masculino",
    title: "Por qué la Responsabilidad es la Clave del Éxito Masculino",
    excerpt:
      "El hombre que no asume responsabilidad sobre su vida, no puede construir nada duradero. Descubre cómo este principio lo cambia todo.",
    date: "Mayo 2026",
    readTime: "5 min",
  },
  {
    slug: "dejar-el-alcohol-transformacion",
    title: "Cómo Dejar el Alcohol Transformó Mi Vida Completamente",
    excerpt:
      "Mi historia personal de cómo eliminar el alcohol fue el primer gran acto de responsabilidad que cambió todo.",
    date: "Abril 2026",
    readTime: "7 min",
  },
  {
    slug: "disciplina-masculina-habitos-diarios",
    title: "5 Hábitos Diarios que Todo Hombre Disciplinado Practica",
    excerpt:
      "La disciplina no es un talento, es un sistema. Estos 5 hábitos son el fundamento de cualquier transformación real.",
    date: "Abril 2026",
    readTime: "4 min",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
          {/* Gold radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A227]/5 blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/3 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                {/* Badge */}
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/5 mb-6">
  <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
  <span className="text-xs font-medium text-[#C9A227] uppercase tracking-widest">
    Crecimiento Personal · Disciplina · Liderazgo
  </span>
</div>

<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
  <span className="text-white">Construye al hombre</span>
  <br />
  <span className="text-gold-gradient">que quieres llegar a ser.</span>
</h1>

<p className="text-lg text-[#a3a3a3] leading-relaxed mb-8 max-w-lg">
  Soy Jesús López. Mi historia comenzó trabajando en el campo y me llevó a
  construir mi propio negocio, convertirme en autor y transformar mi vida a
  través de la disciplina. Hoy comparto las herramientas y principios que me
  ayudaron a cambiar mi camino para ayudar a otros a construir el suyo.
</p>
                <div className="flex flex-col sm:flex-row gap-4">
  <Link
    href="/sobre-mi"
    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A227] text-black font-bold rounded-lg hover:bg-[#d8b43a] transition-all"
  >
    Conoce mi Historia
    <span aria-hidden="true">→</span>
  </Link>

  <Link
    href="/libros"
    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#C9A227] text-[#C9A227] font-bold rounded-lg hover:bg-[#C9A227]/10 transition-all"
  >
    Responsabilidad Antes del Éxito
    <span aria-hidden="true">→</span>
  </Link>
</div>
                <div className="flex items-center gap-4 mt-10">
                  <div className="flex -space-x-2">
                    {["H", "R", "M", "J"].map((letter, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A227] to-[#9A7A1A] border-2 border-[#080808] flex items-center justify-center text-xs font-bold text-black"
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#6b7280]">
                    +100 hombres ya en transformación
                  </p>
                </div>
              </div>

              {/* Hero image placeholder */}
              <div className="relative">
                <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A227]/20 to-transparent border border-[#C9A227]/20" />
                  <div className="absolute inset-0 rounded-2xl bg-[#111] flex flex-col items-center justify-center gap-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C9A227] to-[#9A7A1A] flex items-center justify-center text-3xl font-bold text-black">
                      JL
                    </div>
                    <p className="text-[#6b7280] text-sm text-center px-8">
                      📸 Agrega tu foto profesional aquí
                    </p>
                    <p className="text-xs text-[#2a2a2a] text-center px-8">
                      Reemplaza con: public/jesus-lopez.jpg
                    </p>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/20 flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                    <span className="text-xl">✊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 border-y border-[#2a2a2a] bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-gold-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#6b7280]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest">
                  <span className="w-8 h-px bg-[#C9A227]" />
                  Mi Historia
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  De campo a <span className="text-gold-gradient">construir</span> mi propio camino
                </h2>
                <p className="text-[#a3a3a3] leading-relaxed">
                  Empecé trabajando en el campo. Sin dirección, con excusas, con el alcohol
                  como escape. Un día decidí que eso no era lo que merecía.
                </p>
                <p className="text-[#a3a3a3] leading-relaxed">
                  Estudié barbería, construí una barbería mobile desde cero, dejé el alcohol,
                  construí mi cuerpo, encontré la fe y escribí mi primer libro. Cada paso fue
                  un acto de <strong className="text-white">responsabilidad</strong>.
                </p>
                <p className="text-[#a3a3a3] leading-relaxed">
                  Hoy ayudo a otros hombres a hacer lo mismo: eliminar excusas, tomar
                  responsabilidad y construir la vida que realmente merecen.
                </p>
                <Link
                  href="/sobre-mi"
                  className="inline-flex items-center gap-2 text-[#C9A227] font-medium hover:gap-3 transition-all"
                >
                  Conoce mi historia completa
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {transformationSteps.map((step) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-4 p-6 rounded-xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/30 transition-all group"
                  >
                    <span className="text-3xl">{step.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold mb-1 group-hover:text-[#C9A227] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#6b7280] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BOOK SECTION */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Book cover placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-56 h-80 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#9A7A1A] shadow-2xl gold-glow flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-black font-bold text-lg leading-tight mb-4">
                      Responsabilidad
                      <br />
                      antes del
                      <br />
                      Éxito
                    </div>
                    <div className="w-8 h-px bg-black/30 mb-4" />
                    <div className="text-black/70 text-sm font-medium">
                      Jesus López
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#C9A227]/20 blur-xl" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest">
                  <span className="w-8 h-px bg-[#C9A227]" />
                  Mi Libro
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Responsabilidad{" "}
                  <span className="text-gold-gradient">antes del Éxito</span>
                </h2>
                <p className="text-[#a3a3a3] leading-relaxed">
                  El libro que todo hombre debe leer antes de buscar el éxito.
                  La responsabilidad no es opcional — es el fundamento de todo
                  lo que quieras construir.
                </p>
                <ul className="space-y-3">
                  {[
                    "Por qué la responsabilidad es la base del éxito real",
                    "Cómo eliminar las excusas de tu vida para siempre",
                    "El poder de asumir control total de tu historia",
                    "Estrategias prácticas para transformar tu mentalidad",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#a3a3a3]">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/libros/responsabilidad-antes-del-exito"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all text-sm"
                  >
                    Ver el Libro
                  </Link>
                  <Link
                    href="/libros"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#2a2a2a] text-white font-medium rounded-full hover:border-[#C9A227]/50 transition-all text-sm"
                  >
                    Todos mis Libros
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPEAKING / CONFERENCIAS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-[#C9A227]" />
              Conferencias
              <span className="w-8 h-px bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Lleva la transformación a tu{" "}
              <span className="text-gold-gradient">evento o empresa</span>
            </h2>
            <p className="text-[#a3a3a3] max-w-2xl mx-auto mb-12 leading-relaxed">
              Conferencista disponible para eventos, talleres corporativos y programas
              de desarrollo personal. Una charla que cambia perspectivas y activa acción.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: "🎤",
                  title: "Conferencias",
                  desc: "Charlas de 45-90 min sobre transformación masculina, disciplina y mentalidad de éxito.",
                },
                {
                  icon: "🏢",
                  title: "Eventos Corporativos",
                  desc: "Sesiones para equipos de trabajo enfocadas en liderazgo, responsabilidad y rendimiento.",
                },
                {
                  icon: "👥",
                  title: "Talleres",
                  desc: "Experiencias profundas de 1 día para grupos pequeños que quieren transformación real.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/30 transition-all"
                >
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/conferencias"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all gold-glow"
            >
              Contratar Conferencia
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-[#C9A227]" />
                Testimonios
                <span className="w-8 h-px bg-[#C9A227]" />
              </div>
              <h2 className="text-4xl font-bold text-white">
                Hombres que ya <span className="text-gold-gradient">transformaron</span> su vida
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="p-8 rounded-2xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/20 transition-all"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-[#6b7280] text-xs">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

              {/* 101 BARBER ACADEMY */}
      <section className="relative py-24 overflow-hidden border-y border-[#C9A227]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-[#C9A227]" />
                101 Barber Academy
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Aprende el oficio que
                <span className="text-gold-gradient"> cambió mi vida.</span>
              </h2>

              <p className="text-lg text-[#a3a3a3] leading-relaxed mb-8 max-w-xl">
                No necesitas empezar siendo bueno. Necesitas empezar correctamente.
                Aprende barbería desde cero, domina los fundamentos y construye una
                técnica profesional paso a paso.
              </p>

              <Link
                href="/academia"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A227] text-black font-bold rounded-lg hover:bg-[#d8b43a] transition-all"
              >
                Conoce 101 Barber Academy
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid gap-4">
              <div className="p-6 rounded-2xl bg-[#111] border border-[#2a2a2a]">
                <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-wider mb-2">
                  01 · Fundamentos
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  Empieza correctamente
                </h3>
                <p className="text-[#8a8a8a]">
                  Herramientas, higiene, manejo de máquina, palanca, guardas y
                  numeración.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111] border border-[#2a2a2a]">
                <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-wider mb-2">
                  02 · Técnica
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  Aprende a construir un corte
                </h3>
                <p className="text-[#8a8a8a]">
                  Guías, transiciones, blending, fades y cortes completos explicados
                  paso a paso.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111] border border-[#C9A227]/40">
                <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-wider mb-2">
                  Tu objetivo
                </p>
                <h3 className="text-2xl font-bold text-white">
                  De cero → a tus primeros cortes.
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>
        {/* BLOG PREVIEW */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-4">
                  <span className="w-8 h-px bg-[#C9A227]" />
                  Blog
                </div>
                <h2 className="text-4xl font-bold text-white">
                  Artículos para <span className="text-gold-gradient">hombres que crecen</span>
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium hover:gap-3 transition-all"
              >
                Ver todos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {blogPreviews.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 rounded-2xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/30 transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-[#6b7280] mb-4">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} lectura</span>
                  </div>
                  <h3 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-[#C9A227] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-[#C9A227] text-xs font-medium">
                    Leer artículo
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-[#C9A227]/10 to-transparent border border-[#C9A227]/20 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#C9A227]/5 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  ¿Listo para tu{" "}
                  <span className="text-gold-gradient">transformación</span>?
                </h2>
                <p className="text-[#a3a3a3] text-lg max-w-xl mx-auto mb-8">
                  El primer paso es el más importante. Escríbeme hoy y empecemos
                  a construir la mejor versión de ti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all gold-glow"
                  >
                    Enviar Mensaje
                  </Link>
                  <a
                    href="https://wa.me/12093546316?text=Hola%20Jesus%2C%20quiero%20empezar%20mi%20transformaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#2a2a2a] text-white font-medium rounded-full hover:border-[#C9A227]/50 hover:bg-[#111] transition-all"
                  >
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp Directo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
