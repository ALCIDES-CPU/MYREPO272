import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AppointmentForm } from "@/components/appointment-form"

export default function AgendarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#4A1D6A] py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
              <span className="text-sm font-medium tracking-wide uppercase text-white/60">
                Formulario de Agendamento
              </span>
              <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white text-balance">Agendar Atendimento</h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Preencha o formulario abaixo com os seus dados e documentos necessarios para o agendamento.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
