"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const consultTypes = [
  "Conferencia / Keynote",
  "Evento Corporativo",
  "Mentoría Personal",
  "Colaboración",
  "Medios / Entrevista",
  "Obtener el Libro",
  "Otro",
];

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    empresa: "",
    tipo: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nombre: "", email: "", whatsapp: "", empresa: "", tipo: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-grid min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-[#6b7280] mb-8">
              <Link href="/" className="hover:text-[#C9A227]">Inicio</Link>
              <span>/</span>
              <span className="text-white">Contacto</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left: Info */}
              <div>
                <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-6">
                  <span className="w-8 h-px bg-[#C9A227]" />
                  Contacto
                </div>
                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Hablemos de tu <br />
                  <span className="text-gold-gradient">transformación</span>
                </h1>
                <p className="text-[#a3a3a3] leading-relaxed mb-10">
                  El primer paso es el más importante. Escríbeme, cuéntame tu
                  situación y empecemos a construir la mejor versión de ti.
                </p>

                {/* Contact methods */}
                <div className="space-y-4">
                  <a
                    href="https://wa.me/12093546316?text=Hola%20Jesus%2C%20quiero%20hablar%20contigo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl bg-[#111] border border-[#2a2a2a] hover:border-green-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">WhatsApp Directo</div>
                      <div className="text-[#6b7280] text-sm">+1 (209) 354-6316</div>
                    </div>
                    <svg className="w-4 h-4 text-[#6b7280] ml-auto group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  <a
                    href="mailto:jesuslopezcruz3004@gmail.com"
                    className="flex items-center gap-4 p-5 rounded-xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Email</div>
                      <div className="text-[#6b7280] text-sm">jesuslopezcruz3004@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/jesuslopezoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl bg-[#111] border border-[#2a2a2a] hover:border-pink-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Instagram</div>
                      <div className="text-[#6b7280] text-sm">@jesuslopezoficial</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="p-8 rounded-2xl bg-[#111] border border-[#2a2a2a]">
                {status === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-[#C9A227]/20 flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-3">¡Mensaje enviado!</h3>
                    <p className="text-[#a3a3a3]">
                      Jesus te responderá pronto. Mientras tanto, puedes seguirle en redes sociales.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-white font-bold text-xl mb-6">Enviar Mensaje</h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-[#6b7280] mb-2">Nombre *</label>
                        <input
                          type="text"
                          required
                          value={form.nombre}
                          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#3a3a3a] focus:outline-none focus:border-[#C9A227]/50 transition-colors text-sm"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#6b7280] mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#3a3a3a] focus:outline-none focus:border-[#C9A227]/50 transition-colors text-sm"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-[#6b7280] mb-2">WhatsApp</label>
                        <input
                          type="tel"
                          value={form.whatsapp}
                          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#3a3a3a] focus:outline-none focus:border-[#C9A227]/50 transition-colors text-sm"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#6b7280] mb-2">Empresa / Organización</label>
                        <input
                          type="text"
                          value={form.empresa}
                          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#3a3a3a] focus:outline-none focus:border-[#C9A227]/50 transition-colors text-sm"
                          placeholder="Opcional"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#6b7280] mb-2">Tipo de consulta *</label>
                      <select
                        required
                        value={form.tipo}
                        onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white focus:outline-none focus:border-[#C9A227]/50 transition-colors text-sm"
                      >
                        <option value="">Selecciona una opción</option>
                        {consultTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-[#6b7280] mb-2">Mensaje *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.mensaje}
                        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] text-white placeholder-[#3a3a3a] focus:outline-none focus:border-[#C9A227]/50 transition-colors text-sm resize-none"
                        placeholder="Cuéntame sobre tu situación o lo que necesitas..."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">
                        Hubo un error al enviar. Por favor escríbeme directamente por WhatsApp.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 bg-[#C9A227] text-black font-bold rounded-xl hover:bg-[#F5D16A] transition-all disabled:opacity-50 disabled:cursor-not-allowed gold-glow"
                    >
                      {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
