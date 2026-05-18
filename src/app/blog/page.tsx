import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Jesus López",
  description:
    "Artículos sobre transformación masculina, disciplina, mentalidad y desarrollo personal por Jesus López. Contenido para hombres que quieren crecer.",
  alternates: { canonical: "/blog" },
};

export const articles = [
  {
    slug: "responsabilidad-clave-del-exito-masculino",
    title: "Por qué la Responsabilidad es la Clave del Éxito Masculino",
    excerpt: "El hombre que no asume responsabilidad sobre su vida, no puede construir nada duradero. Descubre cómo este principio lo cambia todo.",
    date: "18 mayo 2026",
    readTime: "5 min",
    category: "Mentalidad",
    featured: true,
  },
  {
    slug: "dejar-el-alcohol-transformacion",
    title: "Cómo Dejar el Alcohol Transformó Mi Vida Completamente",
    excerpt: "Mi historia personal de cómo eliminar el alcohol fue el primer gran acto de responsabilidad que cambió todo en mi vida.",
    date: "15 mayo 2026",
    readTime: "7 min",
    category: "Historia Personal",
    featured: true,
  },
  {
    slug: "disciplina-masculina-habitos-diarios",
    title: "5 Hábitos Diarios que Todo Hombre Disciplinado Practica",
    excerpt: "La disciplina no es un talento, es un sistema. Estos 5 hábitos son el fundamento de cualquier transformación real.",
    date: "12 mayo 2026",
    readTime: "4 min",
    category: "Disciplina",
    featured: true,
  },
  {
    slug: "imagen-masculina-como-proyectar-autoridad",
    title: "Imagen Masculina: Cómo Proyectar Autoridad y Confianza",
    excerpt: "Tu imagen habla antes de que abras la boca. Guía práctica para que tu presencia comunique liderazgo desde el primer momento.",
    date: "10 mayo 2026",
    readTime: "6 min",
    category: "Imagen",
  },
  {
    slug: "eliminar-excusas-hombre-moderno",
    title: "Cómo Eliminar las Excusas de Tu Vida Para Siempre",
    excerpt: "Las excusas son el mayor enemigo del hombre con potencial. Aprende a identificarlas y eliminarlas de raíz.",
    date: "8 mayo 2026",
    readTime: "5 min",
    category: "Mentalidad",
  },
  {
    slug: "emprendimiento-desde-cero-sin-capital",
    title: "Cómo Construir un Negocio desde Cero sin Capital Inicial",
    excerpt: "Mi historia con la barbería mobile: cómo construí un negocio real sin dinero, solo con disciplina y servicio.",
    date: "5 mayo 2026",
    readTime: "8 min",
    category: "Emprendimiento",
  },
  {
    slug: "fe-vision-accion-tridente-del-hombre",
    title: "Fe, Visión y Acción: El Tridente del Hombre que Construye",
    excerpt: "Sin fe no hay dirección. Sin visión no hay destino. Sin acción no hay resultados. Los tres son inseparables.",
    date: "3 mayo 2026",
    readTime: "5 min",
    category: "Espiritualidad",
  },
  {
    slug: "salud-masculina-construir-cuerpo-fuerte",
    title: "Por qué Construir tu Cuerpo es tu Primer Negocio",
    excerpt: "El cuerpo es el primer activo que debes administrar. Cómo empezar con ejercicio y alimentación cuando no sabes por dónde empezar.",
    date: "1 mayo 2026",
    readTime: "6 min",
    category: "Salud",
  },
  {
    slug: "liderazgo-masculino-hogar-empresa",
    title: "Liderazgo Masculino: Cómo Liderar en el Hogar y en el Trabajo",
    excerpt: "El liderazgo no es un cargo, es una forma de ser. Principios prácticos para liderar con autoridad y amor.",
    date: "28 abril 2026",
    readTime: "6 min",
    category: "Liderazgo",
  },
  {
    slug: "mentalidad-abundancia-vs-escasez",
    title: "Mentalidad de Abundancia vs Escasez: La Diferencia que Cambia Todo",
    excerpt: "La mentalidad con la que ves el mundo determina lo que obtienes de él. Cómo cambiar de escasez a abundancia.",
    date: "25 abril 2026",
    readTime: "5 min",
    category: "Mentalidad",
  },
  {
    slug: "proposito-de-vida-como-encontrarlo",
    title: "Cómo Encontrar Tu Propósito de Vida Cuando Todo Parece Sin Sentido",
    excerpt: "El propósito no se encuentra, se construye. Un proceso práctico para descubrir qué mueve tu vida.",
    date: "22 abril 2026",
    readTime: "7 min",
    category: "Propósito",
  },
  {
    slug: "barberia-negocio-arte-masculino",
    title: "Por qué la Barbería es Mucho Más que un Negocio",
    excerpt: "La barbería mobile que construí me enseñó más sobre negocios, liderazgo y servicio que cualquier libro.",
    date: "20 abril 2026",
    readTime: "5 min",
    category: "Emprendimiento",
  },
  {
    slug: "relaciones-hombre-maduro",
    title: "El Hombre Maduro y sus Relaciones: Cómo Relacionarte Desde la Fortaleza",
    excerpt: "Las relaciones de un hombre que se trabaja a sí mismo son radicalmente distintas. Aprende a relacionarte desde la plenitud.",
    date: "18 abril 2026",
    readTime: "6 min",
    category: "Relaciones",
  },
  {
    slug: "finanzas-personales-hombre-responsable",
    title: "Finanzas Personales: La Guía del Hombre Responsable con su Dinero",
    excerpt: "No necesitas ser rico para tener finanzas ordenadas. Principios básicos para que el dinero trabaje para ti.",
    date: "15 abril 2026",
    readTime: "7 min",
    category: "Finanzas",
  },
  {
    slug: "rutina-manana-hombre-exitoso",
    title: "La Rutina de Mañana que Cambiará tu Día (y tu Vida)",
    excerpt: "Las primeras horas del día definen el resto. Mi rutina personal y cómo construir la tuya paso a paso.",
    date: "12 abril 2026",
    readTime: "4 min",
    category: "Disciplina",
  },
];

const categories = [...new Set(articles.map((a) => a.category))];

const categoryColors: Record<string, string> = {
  Mentalidad: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Disciplina: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Imagen: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Emprendimiento: "bg-green-500/10 text-green-400 border-green-500/20",
  Salud: "bg-red-500/10 text-red-400 border-red-500/20",
  Liderazgo: "bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/20",
  Espiritualidad: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Historia Personal": "bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/20",
  Propósito: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  Relaciones: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Finanzas: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export function getCategoryColor(cat: string) {
  return categoryColors[cat] || "bg-[#2a2a2a] text-[#6b7280] border-[#3a3a3a]";
}

export default function BlogPage() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-[#6b7280] mb-8">
              <Link href="/" className="hover:text-[#C9A227]">Inicio</Link>
              <span>/</span>
              <span className="text-white">Blog</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#C9A227]" />
              Blog
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Para hombres que <span className="text-gold-gradient">crecen</span>
            </h1>
            <p className="text-[#a3a3a3] text-lg max-w-xl">
              Artículos sobre transformación masculina, disciplina, mentalidad y desarrollo personal.
            </p>
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mt-8">
              {categories.map((cat) => (
                <span key={cat} className={`px-3 py-1 rounded-full border text-xs font-medium ${getCategoryColor(cat)}`}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-white mb-8">
              Artículos Destacados
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 rounded-2xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-[#6b7280]">{post.readTime}</span>
                  </div>
                  <h3 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-[#C9A227] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#6b7280]">{post.date}</span>
                    <span className="text-[#C9A227] text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* All articles */}
            <h2 className="text-xl font-semibold text-white mb-8">Todos los Artículos</h2>
            <div className="space-y-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-center gap-6 p-5 rounded-xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/30 transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`px-2 py-0.5 rounded-full border text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-[#6b7280]">{post.date}</span>
                    </div>
                    <h3 className="text-white text-sm font-medium group-hover:text-[#C9A227] transition-colors truncate">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-[#6b7280] hidden sm:block">{post.readTime}</span>
                    <svg className="w-4 h-4 text-[#3a3a3a] group-hover:text-[#C9A227] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
