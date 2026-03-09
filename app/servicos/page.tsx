import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Users, Home, Clock, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Agendamento Geral AIMA",
    description: "Marcacao de atendimento para servicos gerais da AIMA",
    duration: "30-45 min",
    documents: ["Documento de identificacao"],
    color: "bg-[#C74B8E]",
  },
  {
    icon: FileText,
    title: "Renovacao de Autorizacao de Residencia",
    description: "Renovacao de autorizacao de residencia temporaria ou permanente",
    duration: "45-60 min",
    documents: ["Passaporte/CC", "Autorizacao anterior"],
    color: "bg-[#7B4B94]",
  },
  {
    icon: Home,
    title: "Primeira Autorizacao de Residencia",
    description: "Pedido de primeira autorizacao de residencia em Portugal",
    duration: "60-90 min",
    documents: ["Passaporte", "Visto", "Contrato de trabalho/estudos", "Seguro de saude"],
    color: "bg-[#4A1D6A]",
  },
  {
    icon: Users,
    title: "Reagrupamento Familiar",
    description: "Pedido de reagrupamento familiar para residentes em Portugal",
    duration: "45-60 min",
    documents: ["Documentos de identificacao", "Autorizacao do requerente", "Prova de parentesco"],
    color: "bg-[#C74B8E]",
  },
  {
    icon: FileText,
    title: "Manifestacao de Interesse / CPLP",
    description: "Esclarecimento de duvidas sobre processos e servicos AIMA e Emissao da CPLP",
    duration: "15-30 min",
    documents: ["Documento de identificacao"],
    color: "bg-[#7B4B94]",
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-[#4A1D6A] to-[#7B4B94] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C74B8E]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-[#C74B8E] uppercase tracking-widest mb-4">
                Servicos Disponiveis
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Tipos de Servicos
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Conheca os servicos disponiveis para agendamento online. Cada servico tem requisitos especificos de documentacao.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Icon & Title */}
                    <div className="lg:col-span-5 flex items-start gap-4">
                      <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-2 text-muted-foreground lg:justify-center">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{service.duration}</span>
                      </div>
                    </div>

                    {/* Documents */}
                    <div className="lg:col-span-5">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                        Documentos necessarios
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.documents.map((doc, docIndex) => (
                          <span
                            key={docIndex}
                            className="inline-flex items-center gap-1.5 text-sm text-foreground bg-muted px-3 py-1.5 rounded-full"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-primary" />
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 lg:mt-20">
              <div className="bg-gradient-to-br from-[#4A1D6A] to-[#7B4B94] rounded-3xl p-10 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C74B8E]/20 rounded-full blur-3xl" />
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-4">
                      Pronto para agendar?
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Escolha o servico que necessita e complete o agendamento online de forma rapida e segura.
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#C74B8E] text-white hover:bg-[#C74B8E]/90 rounded-full px-8 h-12 text-sm font-medium shadow-xl shadow-[#C74B8E]/30"
                    >
                      <Link href="/agendar" className="flex items-center gap-2">
                        Agendar Atendimento
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
