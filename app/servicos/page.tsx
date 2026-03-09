import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Users, Home, Info, Clock, ArrowUpRight, Plus } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Agendamento Geral AIMA",
    description: "Marcacao de atendimento para servicos gerais da AIMA",
    duration: "30-45 minutos",
    documents: ["Documento de identificacao"],
  },
  {
    icon: FileText,
    title: "Renovacao de Autorizacao de Residencia",
    description: "Renovacao de autorizacao de residencia temporaria ou permanente",
    duration: "45-60 minutos",
    documents: ["Passaporte/CC", "Autorizacao anterior"],
  },
  {
    icon: Home,
    title: "Primeira Autorizacao de Residencia",
    description: "Pedido de primeira autorizacao de residencia em Portugal",
    duration: "60-90 minutos",
    documents: ["Passaporte", "Visto", "Contrato de trabalho/estudos", "Seguro de saude"],
  },
  {
    icon: Users,
    title: "Reagrupamento Familiar",
    description: "Pedido de reagrupamento familiar para residentes em Portugal",
    duration: "45-60 minutos",
    documents: ["Documentos de identificacao", "Autorizacao do requerente", "Prova de parentesco"],
  },
  {
    icon: Info,
    title: "Manifestacao de Interesse / CPLP",
    description: "Esclarecimento de duvidas sobre processos e servicos AIMA e Emissao da CPLP",
    duration: "15-30 minutos",
    documents: ["Documento de identificacao"],
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Servicos Disponiveis
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Tipos de Servicos
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conheca os servicos disponiveis para agendamento online. Cada servico tem requisitos especificos de documentacao.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group border-b border-border py-8 lg:py-10 first:border-t"
                >
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Service Number & Icon */}
                    <div className="lg:col-span-1 flex items-center gap-4 lg:flex-col lg:items-start">
                      <span className="text-sm font-medium text-muted-foreground">
                        0{index + 1}
                      </span>
                      <service.icon className="w-5 h-5 text-muted-foreground lg:mt-2" />
                    </div>

                    {/* Service Title & Description */}
                    <div className="lg:col-span-5">
                      <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2 group-hover:text-muted-foreground transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="lg:col-span-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                        Duracao
                      </p>
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>

                    {/* Documents */}
                    <div className="lg:col-span-4">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                        Documentos
                      </p>
                      <ul className="space-y-1.5">
                        {service.documents.map((doc, docIndex) => (
                          <li
                            key={docIndex}
                            className="text-sm text-foreground flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-foreground/40 flex-shrink-0" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 lg:mt-28">
              <div className="bg-foreground text-background rounded-2xl p-10 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
                      Pronto para agendar?
                    </h3>
                    <p className="text-background/60 leading-relaxed">
                      Escolha o servico que necessita e complete o agendamento online de forma rapida e segura.
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <Button
                      asChild
                      size="lg"
                      className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 h-12 text-sm font-medium"
                    >
                      <Link href="/agendar" className="flex items-center gap-2">
                        Agendar Atendimento
                        <ArrowUpRight className="w-4 h-4" />
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
