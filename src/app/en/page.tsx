import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jesus López — Male Transformation Specialist",
  description:
    "Jesus López helps men improve their image, discipline, and mindset to become the best version of themselves. Author of 'Responsibility Before Success'.",
  alternates: {
    canonical: "/en",
    languages: { "es-MX": "/", "en-US": "/en" },
  },
};

export default function EnglishHomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="min-h-screen flex items-center bg-grid relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A227]/5 blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Link href="/" className="text-xs text-[#6b7280] hover:text-[#C9A227] transition-colors">ES</Link>
                <span className="text-[#3a3a3a]">/</span>
                <span className="text-xs text-[#C9A227] font-medium">EN</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
                <span className="text-xs font-medium text-[#C9A227] uppercase tracking-widest">
                  Male Transformation
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">Become the</span>
                <br />
                <span className="text-gold-gradient">best version</span>
                <br />
                <span className="text-white">of yourself</span>
              </h1>

              <p className="text-lg text-[#a3a3a3] leading-relaxed mb-8 max-w-lg">
                I&apos;m Jesus López — male transformation specialist, author of{" "}
                <em>&quot;Responsibility Before Success&quot;</em>, and founder of a mobile barbershop.
                I help men transform their{" "}
                <strong className="text-white">image, discipline, and mindset.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all gold-glow"
                >
                  Start Your Transformation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/libros"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#2a2a2a] text-white font-medium rounded-full hover:border-[#C9A227]/50 hover:bg-[#111] transition-all"
                >
                  My Book
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              The <span className="text-gold-gradient">3 Pillars</span> of Male Transformation
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: "🪞", title: "Image", desc: "Your presence speaks before you open your mouth. Project the most powerful version of yourself." },
                { icon: "⚡", title: "Discipline", desc: "Discipline is not punishment — it's freedom. We build habits that take you where you want to be." },
                { icon: "🧠", title: "Mindset", desc: "Eliminate excuses, fear and escape. Install a mindset of greatness, faith and constant action." },
              ].map((p) => (
                <div key={p.title} className="p-8 rounded-2xl bg-[#111] border border-[#2a2a2a] hover:border-[#C9A227]/30 transition-all">
                  <span className="text-4xl block mb-4">{p.icon}</span>
                  <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to <span className="text-gold-gradient">transform</span>?
            </h2>
            <p className="text-[#a3a3a3] mb-8">
              The first step is the most important. Write to me today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A227] text-black font-bold rounded-full hover:bg-[#F5D16A] transition-all gold-glow"
              >
                Contact Jesus
              </Link>
              <a
                href="https://wa.me/12093546316?text=Hello%20Jesus%2C%20I%20want%20to%20start%20my%20transformation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#2a2a2a] text-white font-medium rounded-full hover:border-[#C9A227]/50 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
