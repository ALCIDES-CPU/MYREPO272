import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AppointmentForm } from "@/components/appointment-form"

export default function AgendarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Formulario de Agendamento
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Agendar Atendimento
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Preencha o formulario abaixo com os seus dados e documentos necessarios para o agendamento.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <AppointmentForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
