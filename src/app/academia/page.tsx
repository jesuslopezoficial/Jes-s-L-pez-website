"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MASTERCLASS_DATE } from "@/lib/academia";

export default function AcademiaPage() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEnviando(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/academia", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el registro");
      }

      setEnviado(true);
      form.reset();
    } catch {
      setError(
        "Hubo un problema al enviar tu registro. Inténtalo nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <>
      <Header />

      <main className="bg-[#050505] text-white pt-20">

        {/* HERO */}
        <section className="min-h-[90vh] flex items-center justify-center px-6 py-24 text-center">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#C9A227] text-sm tracking-[0.35em] font-bold mb-6">
              101 BARBER ACADEMY
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              APRENDE EL OFICIO.
              <br />
              <span className="text-[#C9A227]">DOMINA LA TÉCNICA.</span>
              <br />
              CONSTRUYE TU FUTURO.
            </h1>

            <p className="max-w-3xl mx-auto text-[#bdbdbd] text-lg md:text-xl leading-relaxed mb-8">
              Desde tu primera máquina hasta desarrollar una técnica
              profesional y aprender cómo convertir la barbería en una
              oportunidad real.
            </p>

            <p className="text-sm md:text-base tracking-[0.25em] font-bold mb-10">
              TÉCNICA • DISCIPLINA • PROFESIÓN
            </p>

            <div className="border border-[#C9A227]/40 bg-[#111] max-w-2xl mx-auto p-6 mb-8">
              <p className="text-[#C9A227] font-bold tracking-widest text-sm">
                MASTERCLASS GRATUITA EN VIVO
              </p>
              <p className="text-2xl md:text-3xl font-black mt-2">
                {MASTERCLASS_DATE.toUpperCase()}
              </p>
            </div>

            <a
              href="#registro"
              className="inline-block bg-[#C9A227] text-black font-black px-10 py-4 hover:opacity-90"
            >
              RESERVAR MI LUGAR GRATIS
            </a>

            <p className="text-[#777] text-sm mt-5">
              100% gratis • Sin tarjeta • Cupo limitado
            </p>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="px-6 py-24 border-t border-white/10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#C9A227] text-sm tracking-[0.3em] font-bold mb-5">
              TODO MAESTRO ALGUNA VEZ FUE ESTUDIANTE
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              NO NECESITAS EMPEZAR SIENDO BUENO.
              <br />
              <span className="text-[#C9A227]">
                NECESITAS APRENDER A EMPEZAR CORRECTAMENTE.
              </span>
            </h2>

            <div className="max-w-3xl mx-auto mt-10 space-y-5 text-[#bdbdbd] text-lg leading-relaxed">
              <p>
                Nadie nace sabiendo hacer un fade, manejar una máquina o
                realizar un corte profesional.
              </p>

              <p>
                Todo comienza aprendiendo los fundamentos.
              </p>

              <p>
                Muchos empiezan intentando copiar un corte completo sin
                entender primero las herramientas, los peines, los niveles,
                las líneas guía o el movimiento correcto de la máquina.
              </p>

              <p>
                Y cuando algo sale mal, no saben{" "}
                <strong className="text-white">
                  por qué salió mal ni cómo corregirlo.
                </strong>
              </p>

              <p>
                En <strong className="text-white">101 Barber Academy</strong>{" "}
                no quiero enseñarte solamente a copiar un corte. Quiero
                enseñarte a entender lo que estás haciendo para que puedas
                practicarlo, corregirlo y finalmente dominarlo.
              </p>
            </div>

            <p className="text-[#C9A227] font-black tracking-widest mt-10">
              APRENDE → PRACTICA → CORRIGE → DOMINA
            </p>
          </div>
        </section>

        {/* INSTRUCTOR */}
        <section className="px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#C9A227] text-sm tracking-[0.3em] font-bold">
              TU INSTRUCTOR
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-4">
              JESÚS LÓPEZ
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-[#C9A227] mt-4">
              DE EMPEZAR DESDE CERO A CONSTRUIR MI PROPIO CAMINO
            </h3>

            <div className="mt-8 space-y-5 text-[#bdbdbd] text-lg leading-relaxed">
              <p>
                Mi camino en la barbería no comenzó dentro de una gran
                barbería. Comenzó después de años trabajando en el campo.
              </p>

              <p>
                Cuando decidí aprender este oficio, también tuve que comenzar
                desde cero: aprender, practicar, equivocarme, completar mis
                horas, prepararme para obtener mi licencia y poco a poco
                construir una clientela.
              </p>

              <p>
                Después llegaron los servicios a domicilio y más adelante
                convertí una idea en{" "}
                <strong className="text-white">
                  101 Mobile Barber Shop
                </strong>.
              </p>

              <p>
                Por eso cuando enseño barbería no quiero enseñarte solamente a
                mover una máquina. Quiero ayudarte a comprender el oficio,
                evitar algunos de los errores que yo cometí y desarrollar una
                base que puedas seguir perfeccionando.
              </p>
            </div>

            <div className="border-l-4 border-[#C9A227] pl-6 mt-10">
              <p className="text-2xl font-black">
                UNA HABILIDAD PUEDE CONVERTIRSE EN UNA PROFESIÓN.
              </p>
              <p className="text-[#C9A227] text-xl font-black mt-2">
                Y UNA PROFESIÓN BIEN CONSTRUIDA PUEDE CONVERTIRSE EN ALGO
                MUCHO MÁS GRANDE.
              </p>
            </div>

            <p className="mt-8 font-bold">
              Jesús López
              <br />
              <span className="text-[#a3a3a3] font-normal">
                Fundador — 101 Mobile Barber Shop
                <br />
                Barbero profesional • Empresario • Instructor
              </span>
            </p>
          </div>
        </section>

        {/* MASTERCLASS */}
        <section className="px-6 py-24 bg-[#0b0b0b]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#C9A227] text-sm tracking-[0.3em] font-bold mb-4">
                TU PRIMER PASO PUEDE COMENZAR GRATIS
              </p>

              <h2 className="text-4xl md:text-6xl font-black">
                MASTERCLASS GRATUITA
                <br />
                <span className="text-[#C9A227]">EN VIVO</span>
              </h2>

              <p className="text-[#bdbdbd] text-lg mt-6 max-w-3xl mx-auto">
                Antes de decidir hasta dónde quieres llevar la barbería,
                comienza entendiendo algunas de las bases fundamentales del
                oficio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "Cómo preparar correctamente tu estación",
                "Herramientas esenciales y para qué sirven",
                "Cómo funciona una máquina de corte",
                "Peines/guardas y niveles de corte",
                "Control, dirección y presión de la máquina",
                "Qué son las líneas guía",
                "Fundamentos básicos de un fade",
                "Errores comunes cuando estás comenzando",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-black p-5 flex gap-3"
                >
                  <span className="text-[#C9A227] font-black">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="font-black text-xl">
                {MASTERCLASS_DATE.toUpperCase()} • EN VIVO
              </p>

              <a
                href="#registro"
                className="inline-block mt-7 bg-[#C9A227] text-black font-black px-10 py-4 hover:opacity-90"
              >
                QUIERO MI LUGAR GRATIS
              </a>
            </div>
          </div>
        </section>

        {/* NIVELES */}
        <section className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A227] text-sm tracking-[0.3em] font-bold mb-4">
                TU CAMINO
              </p>

              <h2 className="text-4xl md:text-6xl font-black">
                ¿DÓNDE ESTÁS HOY?
              </h2>

              <p className="text-[#bdbdbd] text-lg mt-5 max-w-2xl mx-auto">
                No todos llegan a 101 Barber Academy con la misma experiencia.
                Por eso puedes comenzar desde el nivel en el que te encuentras.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">

              {/* START */}
              <div className="border border-[#C9A227]/50 bg-[#0b0b0b] p-8 md:p-10">
                <p className="text-[#C9A227] text-sm tracking-[0.25em] font-bold">
                  01 — 101 START
                </p>

                <h3 className="text-3xl md:text-4xl font-black mt-3">
                  BARBERÍA DESDE CERO
                </h3>

                <p className="text-[#bdbdbd] mt-5 leading-relaxed">
                  Para quien nunca ha cortado cabello o está comenzando y
                  quiere aprender correctamente desde las bases.
                </p>

                <p className="font-bold mt-5">
                  Aquí no asumimos que ya sabes utilizar una máquina.{" "}
                  <span className="text-[#C9A227]">
                    Empezamos desde el principio.
                  </span>
                </p>

                <div className="grid grid-cols-2 gap-3 mt-7 text-sm">
                  <div className="border border-white/10 bg-black p-3">
                    <p className="text-[#777]">Duración</p>
                    <p className="font-bold">5 semanas</p>
                  </div>
                  <div className="border border-white/10 bg-black p-3">
                    <p className="text-[#777]">Clases</p>
                    <p className="font-bold">19 en vivo + 1 Skills Day</p>
                  </div>
                  <div className="border border-white/10 bg-black p-3 col-span-2">
                    <p className="text-[#777]">Cupo</p>
                    <p className="font-bold">Máximo 20 alumnos</p>
                  </div>
                </div>

                <p className="text-[#C9A227] text-sm font-bold mt-4">
                  🎁 Los primeros 10 en inscribirse reciben el 101 Founders Kit
                </p>

                <div className="mt-8 space-y-3 text-[#d4d4d4]">
                  {[
                    "Preparación de una estación limpia y profesional",
                    "Herramientas esenciales y función de cada una",
                    "Partes y funcionamiento de la máquina",
                    "Control y manejo correcto de la máquina",
                    "Peines/guardas numerados y niveles de corte",
                    "Uso de la palanca y cambios de longitud",
                    "Líneas guía y cómo trabajar entre niveles",
                    "Fundamentos de taper y fade",
                    "Cómo conectar y suavizar transiciones",
                    "Introducción a tijera y peine",
                    "Contornos y terminaciones",
                    "Higiene y preparación del cliente",
                    "Identificación y corrección de errores",
                    "Corte completo paso a paso",
                  ].map((item) => (
                    <p key={item}>
                      <span className="text-[#C9A227] font-black">✓</span>{" "}
                      {item}
                    </p>
                  ))}
                </div>

                <div className="border-t border-white/10 mt-8 pt-7">
                  <p className="font-black text-xl">
                    NO SOLO APRENDAS QUÉ HACER.
                    <br />
                    <span className="text-[#C9A227]">
                      ENTIENDE POR QUÉ LO ESTÁS HACIENDO.
                    </span>
                  </p>

                  <p className="mt-5 text-sm tracking-widest font-bold">
                    DE CERO → A CONSTRUIR TU BASE COMO BARBERO
                  </p>
                </div>
              </div>

              {/* PRO */}
              <div className="border border-white/15 bg-[#0b0b0b] p-8 md:p-10">
                <p className="text-[#C9A227] text-sm tracking-[0.25em] font-bold">
                  02 — 101 PRO
                </p>

                <h3 className="text-3xl md:text-4xl font-black mt-3">
                  PERFECCIONA TU TÉCNICA
                </h3>

                <p className="text-[#bdbdbd] mt-5 leading-relaxed">
                  Para el barbero que ya sabe cortar, pero quiere lograr
                  resultados más limpios, consistentes y profesionales.
                </p>

                <p className="font-bold mt-5">
                  Aquí trabajamos sobre lo que ya sabes para ayudarte a
                  identificar y corregir los detalles que están afectando tus
                  resultados.
                </p>

                <p className="text-[#a3a3a3] text-sm mt-3">
                  No necesitas haber tomado 101 START — si ya cortas, puedes
                  inscribirte directo a 101 PRO.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-7 text-sm">
                  <div className="border border-white/10 bg-black p-3">
                    <p className="text-[#777]">Duración</p>
                    <p className="font-bold">4 semanas</p>
                  </div>
                  <div className="border border-white/10 bg-black p-3">
                    <p className="text-[#777]">Clases</p>
                    <p className="font-bold">9 en vivo + 1 Skills Day</p>
                  </div>
                  <div className="border border-white/10 bg-black p-3 col-span-2">
                    <p className="text-[#777]">Cupo</p>
                    <p className="font-bold">Máximo 15 alumnos</p>
                  </div>
                </div>

                <p className="text-[#C9A227] text-sm font-bold mt-4">
                  🎁 Los primeros 5 en inscribirse reciben una Revisión
                  Privada de Corte
                </p>

                <div className="mt-8 space-y-3 text-[#d4d4d4]">
                  {[
                    "Fades más limpios",
                    "Tapers y transiciones",
                    "Eliminación de líneas y sombras",
                    "Control de palanca y peines",
                    "Conexión entre diferentes niveles",
                    "Textura y manejo de la parte superior",
                    "Tijera sobre peine",
                    "Detalles y terminaciones",
                    "Corrección de errores",
                    "Consistencia entre cortes",
                    "Organización del proceso",
                    "Eficiencia sin sacrificar calidad",
                  ].map((item) => (
                    <p key={item}>
                      <span className="text-[#C9A227] font-black">✓</span>{" "}
                      {item}
                    </p>
                  ))}
                </div>

                <div className="border-t border-white/10 mt-8 pt-7">
                  <p className="font-black text-xl">
                    YA SABES CORTAR.
                    <br />
                    <span className="text-[#C9A227]">
                      AHORA VAMOS A REFINAR CÓMO CORTAS.
                    </span>
                  </p>

                  <p className="mt-5 text-sm tracking-widest font-bold">
                    DE BARBERO → A UNA TÉCNICA MÁS PROFESIONAL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTODO */}
        <section className="px-6 py-24 bg-[#0b0b0b]">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#C9A227] text-sm tracking-[0.3em] font-bold">
              EL MÉTODO 101
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-4">
              APRENDE. PRACTICA.
              <br />
              <span className="text-[#C9A227]">CORRIGE. DOMINA.</span>
            </h2>

            <p className="text-[#bdbdbd] text-lg max-w-3xl mx-auto mt-6">
              No se trata solamente de mirar. Se trata de entender, ejecutar,
              identificar tus errores y repetir correctamente.
            </p>

            <div className="grid md:grid-cols-4 gap-5 mt-14 text-left">
              {[
                [
                  "01",
                  "APRENDE",
                  "Entiende la herramienta, el movimiento y el propósito de la técnica.",
                ],
                [
                  "02",
                  "PRACTICA",
                  "Lleva lo aprendido a ejercicios y cortes reales.",
                ],
                [
                  "03",
                  "CORRIGE",
                  "Identifica dónde estás fallando y aprende cómo solucionarlo.",
                ],
                [
                  "04",
                  "DOMINA",
                  "Repite correctamente hasta desarrollar control, confianza y consistencia.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="border border-white/10 bg-black p-7"
                >
                  <p className="text-[#C9A227] text-3xl font-black">
                    {number}
                  </p>
                  <h3 className="font-black text-xl mt-5">{title}</h3>
                  <p className="text-[#a3a3a3] mt-3 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISIÓN */}
        <section className="px-6 py-24 bg-[#0b0b0b]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#C9A227] text-sm tracking-[0.3em] font-bold">
              MÁS QUE UN CORTE
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-4">
              UNA HABILIDAD PUEDE
              <br />
              <span className="text-[#C9A227]">
                CAMBIAR TU DIRECCIÓN.
              </span>
            </h2>

            <p className="text-[#bdbdbd] text-lg max-w-3xl mx-auto mt-6">
              La barbería puede comenzar con una máquina y tu primer corte.
              Con conocimiento, práctica y disciplina puede convertirse en
              algo mucho más grande.
            </p>

            <div className="max-w-xl mx-auto mt-12 space-y-4">
              {[
                "UNA HABILIDAD",
                "UNA PROFESIÓN",
                "UNA CLIENTELA",
                "UNA MARCA",
                "UN NEGOCIO",
              ].map((item, index) => (
                <div key={item}>
                  <div className="border border-[#C9A227]/40 bg-black p-5 font-black text-xl">
                    {item}
                  </div>
                  {index < 4 && (
                    <p className="text-[#C9A227] text-2xl py-2">↓</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAMINO 101 */}
        <section className="px-6 py-24">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#C9A227] text-sm tracking-[0.3em] font-bold">
              TU CAMINO DENTRO DE 101
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-4">
              EMPIEZA CON LA BASE.
              <br />
              <span className="text-[#C9A227]">SIGUE CONSTRUYENDO.</span>
            </h2>

            <div className="max-w-3xl mx-auto mt-14 space-y-5">
              <div className="border border-[#C9A227]/50 p-7 bg-[#0b0b0b]">
                <p className="text-[#C9A227] font-black">101 START</p>
                <p className="text-2xl font-black mt-2">
                  CONSTRUYE TU BASE
                </p>
                <p className="text-[#a3a3a3] mt-2">
                  Aprende correctamente desde cero.
                </p>
              </div>

              <p className="text-[#C9A227] text-3xl">↓</p>

              <div className="border border-[#C9A227]/50 p-7 bg-[#0b0b0b]">
                <p className="text-[#C9A227] font-black">101 PRO</p>
                <p className="text-2xl font-black mt-2">
                  PERFECCIONA TU TÉCNICA
                </p>
                <p className="text-[#a3a3a3] mt-2">
                  Mejora calidad, control y consistencia.
                </p>
              </div>

              <p className="text-[#C9A227] text-3xl">↓</p>

              <div className="border border-white/10 p-7 bg-[#0b0b0b]">
                <p className="text-[#777] font-black">
                  101 BUSINESS / MASTER
                </p>
                <p className="text-2xl font-black mt-2">
                  CONSTRUYE ALREDEDOR DE TU HABILIDAD
                </p>
                <p className="text-[#a3a3a3] mt-2">
                  Clientes • Servicio • Marca • Sistemas • Negocio
                </p>
                <p className="text-[#C9A227] text-sm font-bold tracking-widest mt-4">
                  PRÓXIMAMENTE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS DAY */}
        <section className="px-6 py-24 bg-[#0b0b0b]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#C9A227] text-sm tracking-[0.3em] font-bold">
              CÓMO TERMINA CADA PROGRAMA
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              EL SKILLS DAY
            </h2>

            <p className="text-[#bdbdbd] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              101 START y 101 PRO cierran con un Skills Day: una evaluación en
              vivo de lo que aprendiste, con reconocimiento al terminar.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12 text-left max-w-2xl mx-auto">
              <div className="border border-white/10 bg-black p-6">
                <p className="text-[#C9A227] font-black text-sm tracking-widest">
                  SI PUEDES ASISTIR EN PERSONA
                </p>
                <p className="text-[#a3a3a3] mt-3 leading-relaxed">
                  El Skills Day se realiza de forma presencial.
                </p>
              </div>
              <div className="border border-white/10 bg-black p-6">
                <p className="text-[#C9A227] font-black text-sm tracking-widest">
                  SI NO PUEDES ASISTIR
                </p>
                <p className="text-[#a3a3a3] mt-3 leading-relaxed">
                  También está disponible en vivo online, y tu certificación
                  se envía por correo.
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-10 border border-white/15 bg-black p-6 text-left">
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                <strong className="text-white">Nota importante:</strong> 101
                Barber Academy ofrece capacitación educativa independiente.
                Los programas y certificados de finalización no otorgan una
                licencia de barbería de California ni sustituyen los
                requisitos u horas establecidos por el Estado.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-24 bg-[#0b0b0b]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#C9A227] text-sm tracking-[0.3em] font-bold">
                PREGUNTAS FRECUENTES
              </p>

              <h2 className="text-4xl md:text-5xl font-black mt-4">
                ANTES DE COMENZAR
              </h2>
            </div>

            <div className="space-y-4">
              {[
                [
                  "¿Necesito experiencia para participar?",
                  "No. Si nunca has utilizado una máquina, 101 START está diseñado para comenzar desde las bases.",
                ],
                [
                  "¿Y si ya soy barbero?",
                  "Puedes inscribirte directo a 101 PRO sin necesidad de tomar 101 START primero. PRO está pensado para quienes ya cortan y quieren perfeccionar técnica, fades, transiciones, terminaciones y consistencia.",
                ],
                [
                  "¿Qué es el Skills Day y obtengo una licencia de barbería?",
                  "El Skills Day es la evaluación final de cada programa, presencial o en vivo online según tu disponibilidad. Al terminar recibes tu certificación por correo, pero 101 Barber Academy es capacitación educativa independiente: no otorga una licencia de barbería de California ni sustituye los requisitos u horas establecidos por el Estado.",
                ],
                [
                  "¿Necesito tener mis propias herramientas?",
                  "Para la Masterclass puedes comenzar aprendiendo los fundamentos. Para los programas prácticos te indicaremos las herramientas necesarias.",
                ],
                [
                  "¿La Masterclass tiene costo?",
                  `No. La Masterclass del ${MASTERCLASS_DATE} es gratuita.`,
                ],
                [
                  "¿La Masterclass será presencial?",
                  "La Masterclass anunciada en esta página será en vivo online.",
                ],
                [
                  "¿Qué pasa después de registrarme?",
                  "Recibiremos tus datos y te enviaremos la información necesaria para acceder a la Masterclass.",
                ],
              ].map(([question, answer]) => (
                <div
                  key={question}
                  className="border border-white/10 bg-black p-6"
                >
                  <h3 className="font-black text-lg">{question}</h3>
                  <p className="text-[#a3a3a3] mt-3 leading-relaxed">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGISTRO */}
        <section id="registro" className="px-6 py-24">
          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-12">
              <p className="text-[#C9A227] text-sm tracking-[0.3em] font-bold">
                TU PRIMER PASO
              </p>

              <h2 className="text-4xl md:text-6xl font-black mt-4">
                TODO BARBERO PROFESIONAL
                <br />
                <span className="text-[#C9A227]">
                  ALGUNA VEZ HIZO SU PRIMER CORTE.
                </span>
              </h2>

              <p className="text-[#bdbdbd] text-lg mt-6 max-w-3xl mx-auto">
                No necesitas saberlo todo hoy. Necesitas decidir comenzar,
                aprender correctamente y seguir mejorando.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="border border-[#C9A227]/40 bg-[#0b0b0b] p-7 md:p-10 text-left"
            >
              <div className="text-center mb-8">
                <p className="text-[#C9A227] font-bold tracking-widest text-sm">
                  MASTERCLASS GRATUITA
                </p>

                <h3 className="text-3xl font-black mt-2">
                  RESERVA TU LUGAR
                </h3>

                <p className="text-[#a3a3a3] mt-2">
                  {MASTERCLASS_DATE} • En vivo
                </p>
              </div>

              <label className="block mb-5">
                <span className="block text-sm font-bold mb-2">
                  Nombre completo *
                </span>
                <input
                  name="nombre"
                  required
                  className="w-full bg-[#111] border border-white/20 px-4 py-3 text-white"
                  placeholder="Tu nombre y apellido"
                />
              </label>

              <label className="block mb-5">
                <span className="block text-sm font-bold mb-2">
                  Teléfono / WhatsApp *
                </span>
                <input
                  name="telefono"
                  type="tel"
                  required
                  className="w-full bg-[#111] border border-white/20 px-4 py-3 text-white"
                  placeholder="Tu número"
                />
              </label>

              <label className="block mb-5">
                <span className="block text-sm font-bold mb-2">
                  Email *
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-[#111] border border-white/20 px-4 py-3 text-white"
                  placeholder="tu@email.com"
                />
              </label>

              <label className="block mb-5">
                <span className="block text-sm font-bold mb-2">
                  Ciudad *
                </span>
                <input
                  name="ciudad"
                  required
                  className="w-full bg-[#111] border border-white/20 px-4 py-3 text-white"
                  placeholder="Ciudad donde vives"
                />
              </label>

              <label className="block mb-5">
                <span className="block text-sm font-bold mb-2">
                  ¿Cuál es tu nivel? *
                </span>

                <select
                  name="nivel"
                  required
                  defaultValue=""
                  className="w-full bg-[#111] border border-white/20 px-4 py-3 text-white"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="Principiante">
                    Principiante — quiero aprender desde cero
                  </option>
                  <option value="Barbero">
                    Barbero — quiero mejorar mi técnica
                  </option>
                </select>
              </label>

              <label className="block mb-6">
                <span className="block text-sm font-bold mb-2">
                  ¿Qué te gustaría aprender o mejorar?
                </span>

                <textarea
                  name="objetivo"
                  rows={4}
                  className="w-full bg-[#111] border border-white/20 px-4 py-3 text-white"
                  placeholder="Cuéntame un poco sobre tu objetivo..."
                />
              </label>

              {/* PRIVACIDAD OBLIGATORIA */}
              <label className="flex items-start gap-3 mb-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacidad"
                  required
                  className="mt-1 h-4 w-4"
                />

                <span className="text-sm text-[#bdbdbd] leading-relaxed">
                  He leído y acepto el{" "}
                  <a
                    href="/privacidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A227] underline"
                  >
                    Aviso de Privacidad
                  </a>{" "}
                  y autorizo el uso de mis datos para gestionar mi registro y
                  recibir información relacionada con esta Masterclass por
                  correo electrónico y WhatsApp. *
                </span>
              </label>

              {/* MARKETING OPCIONAL */}
              <label className="flex items-start gap-3 mb-6 cursor-pointer">
                <input
                  type="checkbox"
                  name="marketing"
                  className="mt-1 h-4 w-4"
                />

                <span className="text-sm text-[#888] leading-relaxed">
                  Quiero recibir noticias, próximas clases, programas y
                  contenido de 101 Barber Academy.
                </span>
              </label>

              <button
                type="submit"
                disabled={enviando}
                className="w-full px-8 py-4 bg-[#C9A227] text-black font-black hover:opacity-90 disabled:opacity-50"
              >
                {enviando
                  ? "ENVIANDO..."
                  : "¡SÍ, QUIERO MI LUGAR GRATIS! →"}
              </button>

              <div className="flex flex-wrap justify-center gap-4 text-xs text-[#888] mt-4">
                <span>✓ 100% Gratis</span>
                <span>✓ Sin tarjeta</span>
                <span>✓ Masterclass en vivo</span>
              </div>

              {enviado && (
                <div className="mt-7 border border-[#C9A227] bg-black p-6 text-center">
                  <p className="text-[#C9A227] text-2xl font-black">
                    🎓 ¡TU REGISTRO ESTÁ CONFIRMADO!
                  </p>

                  <p className="text-white mt-3">
                    Gracias por registrarte a la Masterclass de 101 Barber
                    Academy.
                  </p>

                  <p className="text-[#a3a3a3] mt-2">
                    Hemos recibido tu información. Te contactaremos con los
                    detalles de acceso.
                  </p>

                  <p className="font-bold mt-4">
                    {MASTERCLASS_DATE.toUpperCase()} • EN VIVO
                  </p>
                </div>
              )}

              {error && !enviado && (
                <p className="mt-5 text-center text-red-400">
                  {error}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
