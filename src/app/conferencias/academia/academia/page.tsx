import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AcademiaPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="py-20 bg-grid relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <div className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium mb-6">
              ACADEMIA DE BARBERÍA
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Aprende barbería con
              <br />
              <span className="text-gold-gradient">
                técnica, disciplina y práctica real
              </span>
            </h1>

            <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto mb-8">
              Aprende directamente con Jesús López y desarrolla las bases,
              técnicas y confianza necesarias para llevar tus cortes al
              siguiente nivel.
            </p>

            <div className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A227] text-black font-bold">
              PRÓXIMAMENTE
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
