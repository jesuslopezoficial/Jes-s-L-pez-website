import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, getCategoryColor } from "@/app/blog/page";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — Blog Jesus López`,
    description: article.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: ["Jesus López"],
    },
  };
}

const articleContent: Record<string, string> = {
  "responsabilidad-clave-del-exito-masculino": `
## El Principio que Nadie te Enseña

Desde que somos niños nos dicen que trabajemos duro, que seamos inteligentes, que tengamos las conexiones correctas. Nos hablan de habilidades, de networking, de suerte. Pero casi nadie habla de lo que verdaderamente separa a los hombres que construyen una vida extraordinaria de los que se quedan atrapados en la mediocridad.

Ese ingrediente es la **responsabilidad**.

No responsabilidad como concepto vago. Sino responsabilidad total, radical y honesta sobre cada aspecto de tu vida.

## ¿Qué Significa Responsabilidad Total?

Responsabilidad total significa esto: *todo lo que está en tu vida, tú lo pusiste ahí.* Tu situación actual — financiera, relacional, física, mental — es el resultado acumulado de tus decisiones y tus no-decisiones.

Eso puede sonar duro. A algunos incluso les suena injusto. ¿Y qué pasa con las circunstancias? ¿Con la familia de donde veniste? ¿Con las oportunidades que no tuviste?

Las circunstancias son reales. Las injusticias existen. Pero convertirlas en excusa es lo más costoso que puedes hacer con tu vida.

Yo lo sé porque lo viví.

## Mi Historia con la Responsabilidad

Empecé trabajando en el campo. Sin dirección, sin plan, sin mucho que perder porque no tenía mucho que proteger tampoco. El alcohol era el escape fácil al final del día. Las excusas fluían naturales: *no tuve las oportunidades correctas, el sistema está en contra, hay que sobrevivir primero.*

Todo eso era verdad. Y todo eso me mantenía exactamente donde estaba.

El día que cambió todo no fue dramático. No fue un momento de revelación cinematográfica. Fue una pregunta silenciosa que me hice: *¿De qué sirve culpar a todo si mi vida sigue igual?*

Esa pregunta rompió algo en mí.

Decidí que, desde ese momento, yo era el único responsable de mi historia. No el sistema. No la familia. No las circunstancias. **Yo.**

## Por Qué la Responsabilidad Activa el Éxito

Cuando asumes responsabilidad total, algo extraño y poderoso pasa: recuperas el poder.

El hombre que culpa al sistema no puede cambiarlo porque cree que el sistema tiene el control. El hombre que asume responsabilidad sabe que él tiene el control — y eso cambia cómo actúa, cómo decide y cómo responde.

La responsabilidad activa:

1. **Claridad**: Ya no gastas energía buscando culpables. Esa energía va hacia soluciones.
2. **Acción**: El hombre responsable actúa porque sabe que nadie lo va a salvar.
3. **Crecimiento**: Cada error se convierte en lección, no en evidencia de que "no se puede."
4. **Respeto propio**: Hay una dignidad profunda en hacerse cargo de tu propia vida.

## Cómo Empezar Hoy

No necesitas un evento transformador para empezar. Solo necesitas una decisión.

Esta noche, antes de dormir, escribe esto en un papel: *"Soy el único responsable de mi vida. A partir de mañana, mis resultados son mis decisiones."*

Léelo en voz alta. Créelo.

Eso es el primer paso. El resto viene después, pero sin ese paso, nada funciona.

La responsabilidad no es el destino — es el punto de partida de todo lo que quieras construir.
  `,
  "dejar-el-alcohol-transformacion": `
## La Verdad que Tardé en Admitir

El alcohol no era diversión para mí. Era escape.

Escape del cansancio, de la frustración, de la sensación de que la vida iba por un carril que yo no había elegido. Al final del día de trabajo en el campo, la cerveza era el "merecido" por el esfuerzo. Al fin de semana, era la forma de "desconectarse."

Tardé años en llamarle por su nombre: dependencia. No la dependencia clínica que aparece en los documentales. La dependencia silenciosa, funcional, que te deja levantarte cada mañana pero que apaga tu potencial gota a gota.

## Cómo el Alcohol Frena al Hombre que Quiere Crecer

El alcohol hace algo muy específico que muy pocos hablan: **te desconecta de ti mismo.**

Te desconecta de tu insatisfacción — que es exactamente la señal que necesitas para cambiar. Te desconecta del miedo — que bien procesado es combustible para actuar. Te desconecta de la claridad mental que necesitas para construir cualquier cosa real.

Yo no era alcohólico según el criterio popular. Pero era suficientemente dependiente como para que el alcohol definiera mis rituales, mis relaciones y mi nivel de productividad.

Cuando decidí parar, no fue porque alguien me lo pidiera. Fue porque me harté de ser menos de lo que sabía que podía ser.

## El Proceso Real

No fue fácil. No te voy a mentir con eso.

Los primeros días son aburridos de una forma extraña. El silencio que deja el alcohol lo tienes que llenar con algo real. Yo lo llené con ejercicio, con la barbería, con lectura.

Lo más importante fue esto: *sin alcohol, podía ver mis problemas con claridad.* Y cuando los veía claros, podía atacarlos.

## Lo que Cambió

Después de dejar el alcohol, en orden de aparición:

- Dormí mejor. Más profundo, más reparador.
- Mi mente estuvo más clara en las mañanas.
- Mi productividad en la barbería mejoró notablemente.
- Mis relaciones se volvieron más auténticas.
- Empecé a ahorrar dinero — el que antes se iba en tragos.
- Escribí mi libro.

No estoy diciendo que dejar el alcohol sea la solución a todos tus problemas. Estoy diciendo que mientras el alcohol sea parte de tu rutina de escape, esos problemas nunca los vas a resolver de verdad.

## Si Estás en Esa Posición

No hay juicio en estas palabras. Solo reconocimiento de algo que muchos hombres viven pero pocos dicen en voz alta.

Si el alcohol es tu válvula de escape, la pregunta real es: *¿de qué estás escapando?*

Eso que te responda — eso es lo que hay que trabajar.

La vida al otro lado de esa dependencia es más difícil en algunos sentidos. Y mucho más rica en todos los que importan.
  `,
  "disciplina-masculina-habitos-diarios": `
## La Mentira sobre la Motivación

Todos hemos escuchado lo mismo: "cuando te motives, empiezas." La motivación como prerequisito del cambio.

Es una mentira costosa.

La motivación es una emoción. Las emociones son temporales, fluctuantes y poco confiables para construir cualquier cosa duradera. El hombre que espera sentirse motivado para entrenar, construir su negocio o trabajar en sí mismo — ese hombre espera para siempre.

Lo que separa al hombre que transforma su vida del que habla de transformarla es una sola palabra: **disciplina**.

Y la disciplina no es fuerza de voluntad heroica. Es un sistema de hábitos pequeños, repetidos con consistencia.

## Los 5 Hábitos que Todo Hombre Disciplinado Practica

### 1. Se levanta antes que el mundo

No te estoy diciendo que despiertes a las 4 AM si tu cuerpo no lo pide. Te estoy diciendo que te levantes antes de que el día te arrastre.

El hombre disciplinado tiene mañanas que le pertenecen. Una hora — o treinta minutos — donde decide cómo va a empezar el día antes de que el teléfono, las redes y las exigencias externas tomen el control.

Lo que hagas en esa ventana define el tono del resto del día.

### 2. Mueve su cuerpo todos los días

Sin excepción. Sin "no tuve tiempo." Sin "mañana lo compenso."

El ejercicio diario no es solo físico. Es una declaración de que eres capaz de hacer cosas difíciles aunque no tengas ganas. Es entrenamiento mental disfrazado de ejercicio.

No tiene que ser una hora en el gimnasio. Puede ser 20 minutos de caminata, de calistenia, de lo que sea. Lo que importa es la consistencia.

### 3. Tiene una tarea más importante que hace primero

El hombre sin disciplina empieza el día respondiendo mensajes, revisando redes, reaccionando. El hombre disciplinado empieza el día atacando la tarea más importante.

¿Por qué? Porque la energía mental es finita. Usas tu mejor energía en lo que más importa — no en lo que más llama tu atención.

### 4. Limita lo que entra a su mente

La basura mental es tan real como la basura física. El hombre disciplinado es selectivo con lo que consume: noticias, redes sociales, conversaciones, entretenimiento.

No se trata de vivir en una burbuja. Se trata de reconocer que todo lo que consumes te forma.

### 5. Revisa su día antes de dormir

Cinco minutos. ¿Qué salió bien? ¿Qué faltó? ¿Qué hago diferente mañana?

El hombre que no revisa su día se repite a sí mismo sin saberlo. La reflexión convierte la experiencia en aprendizaje.

## Cómo Construir estos Hábitos

No intentes los cinco a la vez. Eso es una receta para el fracaso.

Empieza con uno. El que más resistencia te genere — ese es generalmente el más importante.

Practícalo por 21 días hasta que sea automático. Luego agrega otro.

La disciplina no se construye con un gran gesto heroico. Se construye con pequeñas acciones repetidas hasta que dejan de costar esfuerzo.

Eso es la transformación real.
  `,
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = articleContent[slug];
  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      "@id": "https://jesuslopezoficial.com/#person",
      name: "Jesus López",
    },
    publisher: {
      "@type": "Person",
      name: "Jesus López",
      url: "https://jesuslopezoficial.com",
    },
    datePublished: article.date,
    url: `https://jesuslopezoficial.com/blog/${slug}`,
    inLanguage: "es",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jesuslopezoficial.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://jesuslopezoficial.com/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://jesuslopezoficial.com/blog/${slug}` },
    ],
  };

  // Convert markdown-like content to HTML paragraphs
  const renderContent = (text: string) => {
    if (!text) return null;
    return text.trim().split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith("## ")) {
        return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith("### ")) {
        return <h3 key={i} className="text-xl font-semibold text-white mt-8 mb-3">{trimmed.slice(4)}</h3>;
      }
      if (trimmed.startsWith("- ")) {
        return <li key={i} className="text-[#a3a3a3] leading-relaxed ml-4">{trimmed.slice(2)}</li>;
      }
      // Handle **bold**
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-[#a3a3a3] leading-relaxed mb-4">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**")
              ? <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
              : part.startsWith("*") && part.endsWith("*")
              ? <em key={j} className="text-white italic">{part.slice(1, -1)}</em>
              : part
          )}
        </p>
      );
    });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-grid">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-[#6b7280] mb-8">
              <Link href="/" className="hover:text-[#C9A227]">Inicio</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#C9A227]">Blog</Link>
              <span>/</span>
              <span className="text-white truncate max-w-xs">{article.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full border text-xs font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <span className="text-[#6b7280] text-sm">{article.date}</span>
              <span className="text-[#6b7280] text-sm">· {article.readTime} lectura</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              {article.title}
            </h1>
            <p className="text-[#a3a3a3] text-lg leading-relaxed">{article.excerpt}</p>

            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-[#2a2a2a]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A227] to-[#9A7A1A] flex items-center justify-center text-black font-bold text-sm">
                JL
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Jesus López</div>
                <div className="text-[#6b7280] text-xs">Especialista en Transformación Masculina</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {content ? (
              <div className="space-y-1">{renderContent(content)}</div>
            ) : (
              <div className="space-y-4">
                <p className="text-[#a3a3a3] leading-relaxed">{article.excerpt}</p>
                <p className="text-[#6b7280] text-sm italic">
                  Artículo completo próximamente. Sigue a Jesus López en Instagram para el contenido más reciente.
                </p>
              </div>
            )}

            {/* Author box */}
            <div className="mt-16 p-8 rounded-2xl bg-[#111] border border-[#2a2a2a]">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A227] to-[#9A7A1A] flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                  JL
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Jesus López</div>
                  <div className="text-[#C9A227] text-sm mb-3">Especialista en Transformación Masculina</div>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    Autor de &ldquo;Responsabilidad antes del Éxito&rdquo;. Ayuda a hombres a mejorar
                    su imagen, disciplina y mentalidad para convertirse en la mejor versión de sí mismos.
                  </p>
                  <Link
                    href="/sobre-mi"
                    className="inline-flex items-center gap-1 mt-3 text-[#C9A227] text-sm font-medium hover:text-[#F5D16A] transition-colors"
                  >
                    Conocer a Jesus →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-8">Artículos relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group p-6 rounded-xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/30 transition-all"
                  >
                    <span className={`inline-block px-2 py-1 rounded-full border text-xs font-medium mb-3 ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-[#C9A227] transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Quieres dar el siguiente paso?
            </h2>
            <p className="text-[#a3a3a3] mb-6 text-sm">
              Lee el libro, asiste a una conferencia o contáctame directamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/libros"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all text-sm gold-glow"
              >
                Ver mi Libro
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#2a2a2a] text-white rounded-full hover:border-[#C9A227]/50 transition-all text-sm"
              >
                Contactar a Jesus
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
