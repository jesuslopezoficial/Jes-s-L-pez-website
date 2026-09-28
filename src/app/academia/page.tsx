import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AcademiaPage() {
  return (
    <>
      <Header />

      <main className="pt-20">

        {/* HERO */}
        <section className="py-24 bg-grid relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <p className="text-[#C9A227] font-semibold tracking-[0.25em] text-sm mb-5">
              101 BARBER ACADEMY
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Aprende barbería.
              <br />
              <span className="text-gold-gradient">
                Construye tu técnica.
              </span>
            </h1>

            <p className="text-[#a3a3a3] text-lg sm:text-xl max-w-3xl mx-auto mb-4">
              Clases de barbería en vivo con Jesús López para quienes quieren
              comenzar desde cero o llevar su técnica al siguiente nivel.
            </p>

            <p className="text-white font-semibold tracking-wide mb-10">
              TÉCNICA • DISCIPLINA • PROFESIÓN
            </p>

            <a
              href="#registro"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A227] text-black font-bold hover:opacity-90 transition"
            >
              RESERVAR CLASE GRATIS
            </a>

            <p className="text-[#737373] text-sm mt-4">
              Masterclass en vivo • 20 de octubre de 2026 • Cupo limitado
            </p>
          </div>
        </section>

        {/* MASTERCLASS GRATIS */}
        <section className="py-20 border-t border-[#222]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <p className="text-[#C9A227] font-semibold tracking-widest text-sm mb-4">
                  MASTERCLASS GRATUITA
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Tu primer paso en
                  <span className="text-gold-gradient"> la barbería</span>
                </h2>

                <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
                  Antes de aprender un fade, necesitas entender tus
                  herramientas, la higiene y por qué haces cada movimiento.
                  En esta clase te voy a enseñar las bases que todo barbero
                  necesita conocer.
                </p>

                <a
                  href="#registro"
                  className="inline-flex px-7 py-4 bg-[#C9A227] text-black font-bold"
                >
                  QUIERO MI LUGAR GRATIS
                </a>
              </div>

              <div className="border border-[#2a2a2a] bg-[#111] p-8">
                <p className="text-[#C9A227] font-bold mb-6">
                  EN ESTA CLASE APRENDERÁS:
                </p>

                <div className="space-y-4 text-[#d4d4d4]">
                  <p>✓ Higiene y preparación correcta de tu estación</p>
                  <p>✓ Cómo conocer y cuidar tus herramientas</p>
                  <p>✓ Máquinas, guardas y niveles de corte</p>
                  <p>✓ Control, dirección y presión de la máquina</p>
                  <p>✓ Fundamentos antes de realizar tu primer corte</p>
                </div>

                <div className="border-t border-[#2a2a2a] mt-8 pt-6">
                  <p className="text-white font-bold">20 DE OCTUBRE DE 2026</p>
                  <p className="text-[#a3a3a3]">Clase online en vivo</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROGRAMAS */}
        <section className="py-20 bg-[#0d0d0d] border-y border-[#222]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-[#C9A227] font-semibold tracking-widest text-sm mb-4">
                ELIGE TU NIVEL
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
                Dos caminos.
                <span className="text-gold-gradient"> Una profesión.</span>
              </h2>

              <p className="text-[#a3a3a3] text-lg">
                No importa si nunca has tomado una máquina o si ya tienes
                experiencia. Hay un programa diseñado para tu nivel.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">

              {/* PRINCIPIANTES */}
              <div className="border border-[#C9A227]/40 bg-[#111] p-8 sm:p-10">
                <p className="text-[#C9A227] font-bold tracking-widest text-sm mb-3">
                  101 FOUNDATION
                </p>

                <h3 className="text-3xl font-bold text-white mb-2">
                  Barbería desde Cero
                </h3>

                <p className="text-[#a3a3a3] mb-7">
                  Para principiantes que quieren aprender correctamente desde
                  las bases.
                </p>

                <div className="space-y-3 text-[#d4d4d4] mb-8">
                  <p>✓ 5 semanas de entrenamiento</p>
                  <p>✓ Lunes, martes y miércoles</p>
                  <p>✓ 15 clases en vivo</p>
                  <p>✓ Higiene y herramientas</p>
                  <p>✓ Manejo de máquina y guardas</p>
                  <p>✓ Líneas guía y fundamentos del fade</p>
                  <p>✓ Práctica y correcciones en vivo</p>
                  <p>✓ Corte completo paso a paso</p>
                </div>

                <a
                  href="#registro"
                  className="inline-flex px-7 py-4 bg-[#C9A227] text-black font-bold"
                >
                  ME INTERESA PRINCIPIANTES
                </a>
              </div>

              {/* INTERMEDIO / AVANZADO */}
              <div className="border border-[#2a2a2a] bg-[#111] p-8 sm:p-10">
                <p className="text-[#C9A227] font-bold tracking-widest text-sm mb-3">
                  101 PRO
                </p>

                <h3 className="text-3xl font-bold text-white mb-2">
                  Intermedio / Avanzado
                </h3>

                <p className="text-[#a3a3a3] mb-7">
                  Para barberos que ya cortan y quieren entender mejor su
                  técnica y producir resultados más limpios.
                </p>

                <div className="space-y-3 text-[#d4d4d4] mb-8">
                  <p>✓ 5 semanas</p>
                  <p>✓ Una masterclass cada jueves</p>
                  <p>✓ Uso correcto de shaver</p>
                  <p>✓ Taper y transiciones</p>
                  <p>✓ Fade y eliminación de líneas</p>
                  <p>✓ Textura y terminación</p>
                  <p>✓ Corrección de errores</p>
                  <p>✓ Corte completo explicado</p>
                </div>

                <a
                  href="#registro"
                  className="inline-flex px-7 py-4 border border-[#C9A227] text-[#C9A227] font-bold"
                >
                  ME INTERESA 101 PRO
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* MÉTODO */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-14">
              <p className="text-[#C9A227] font-semibold tracking-widest text-sm mb-4">
                EL MÉTODO
              </p>

              <h2 className="text-4xl font-bold text-white">
                No se trata solamente de mirar.
                <br />
                <span className="text-gold-gradient">
                  Se trata de practicar.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">

              <div className="border border-[#222] p-8">
                <p className="text-[#C9A227] text-4xl font-bold mb-4">01</p>
                <h3 className="text-white text-xl font-bold mb-3">APRENDE</h3>
                <p className="text-[#a3a3a3]">
                  Entiende la herramienta y la técnica antes de ejecutarla.
                </p>
              </div>

              <div className="border border-[#222] p-8">
                <p className="text-[#C9A227] text-4xl font-bold mb-4">02</p>
                <h3 className="text-white text-xl font-bold mb-3">PRACTICA</h3>
                <p className="text-[#a3a3a3]">
                  Ejecuta cada técnica con práctica guiada y trabajo real.
                </p>
              </div>

              <div className="border border-[#222] p-8">
                <p className="text-[#C9A227] text-4xl font-bold mb-4">03</p>
                <h3 className="text-white text-xl font-bold mb-3">CORRIGE</h3>
                <p className="text-[#a3a3a3]">
                  Identifica tus errores y aprende cómo corregirlos.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* INSTRUCTOR */}
        <section className="py-20 bg-[#0d0d0d] border-y border-[#222]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <p className="text-[#C9A227] font-semibold tracking-widest text-sm mb-4">
              TU INSTRUCTOR
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Jesús López
            </h2>

            <p className="text-[#a3a3a3] text-lg leading-relaxed max-w-3xl mx-auto">
              Fundador de 101 Mobile Barber Shop. Mi camino en la barbería
              comenzó desde abajo, aprendiendo con práctica, errores,
              disciplina y constancia. Hoy quiero enseñarte no solamente a
              mover una máquina, sino a entender lo que estás haciendo y
              desarrollar una base que puedas seguir perfeccionando.
            </p>

          </div>
        </section>

        {/* REGISTRO */}
        <section id="registro" className="py-24 bg-grid">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <p className="text-[#C9A227] font-semibold tracking-widest text-sm mb-4">
              20 DE OCTUBRE DE 2026 • EN VIVO
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Reserva tu lugar
              <span className="text-gold-gradient"> gratis</span>
            </h2>

            <p className="text-[#a3a3a3] text-lg mb-8">
              Déjanos tus datos para recibir la información de acceso a la
              masterclass gratuita de 101 Barber Academy.
            </p>

            <form
  action="/api/academia"
  method="POST"
  className="border border-[#C9A227]/40 bg-[#111] p-8 text-left"
>
  <p className="text-white font-bold text-xl mb-6 text-center">
    REGISTRO A LA MASTERCLASS
  </p>

  <div className="grid sm:grid-cols-2 gap-4">
    <input
      type="text"
      name="nombre"
      placeholder="Nombre completo"
      required
      className="w-full bg-black border border-white/20 px-4 py-3 text-white"
    />

    <input
      type="tel"
      name="telefono"
      placeholder="Teléfono / WhatsApp"
      required
      className="w-full bg-black border border-white/20 px-4 py-3 text-white"
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="w-full bg-black border border-white/20 px-4 py-3 text-white"
    />

    <input
      type="text"
      name="ciudad"
      placeholder="Ciudad"
      required
      className="w-full bg-black border border-white/20 px-4 py-3 text-white"
    />
  </div>

  <select
    name="nivel"
    required
    className="w-full mt-4 bg-black border border-white/20 px-4 py-3 text-white"
    defaultValue=""
  >
    <option value="" disabled>
      Nivel de experiencia
    </option>
    <option value="Principiante">Principiante — quiero aprender desde cero</option>
    <option value="Barbero">Ya soy barbero — quiero mejorar mi técnica</option>
  </select>

  <textarea
    name="objetivo"
    placeholder="¿Qué te gustaría aprender o mejorar?"
    rows={4}
    className="w-full mt-4 bg-black border border-white/20 px-4 py-3 text-white"
  />

  <button
    type="submit"
    className="w-full mt-6 px-8 py-4 bg-[#C9A227] text-black font-bold hover:opacity-90"
  >
    RESERVAR MI LUGAR GRATIS
  </button>

  <p className="text-[#a3a3a3] text-sm text-center mt-4">
    Masterclass gratuita · 20 de octubre de 2026 · En vivo
  </p>
</form>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
