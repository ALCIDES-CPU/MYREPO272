import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AppointmentForm } from "@/components/appointment-form"
import { Shield, Clock, CheckCircle } from "lucide-react"

export default function AgendarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-[#4A1D6A] to-[#7B4B94] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C74B8E]/20 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-[#C74B8E] uppercase tracking-widest mb-4">
                Formulario de Agendamento
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Agendar Atendimento
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Preencha o formulario abaixo com os seus dados e documentos necessarios para o agendamento.
              </p>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white/70">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Dados seguros</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">5 min para completar</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Confirmacao imediata</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
