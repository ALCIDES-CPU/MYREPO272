import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Users, Home, Info, Clock, Euro, ArrowRight } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Agendamento Geral AIMA",
    description: "Marcacao de atendimento para servicos gerais da AIMA",
    duration: "30-45 minutos",
    cost: "83,10 EUR",
    documents: ["Documento de identificacao"],
    color: "#4A1D6A",
  },
  {
    icon: FileText,
    title: "Renovacao de Autorizacao de Residencia",
    description: "Renovacao de autorizacao de residencia temporaria ou permanente",
    duration: "45-60 minutos",
    cost: "83,10 EUR",
    documents: ["Passaporte/CC", "Autorizacao anterior"],
    color: "#C74B8E",
  },
  {
    icon: Home,
    title: "Primeira Autorizacao de Residencia",
    description: "Pedido de primeira autorizacao de residencia em Portugal",
    duration: "60-90 minutos",
    cost: "83,10 EUR",
    documents: ["Passaporte", "Visto", "Contrato de trabalho/estudos", "Seguro de saude"],
    color: "#9B5BA5",
  },
  {
    icon: Users,
    title: "Reagrupamento Familiar",
    description: "Pedido de reagrupamento familiar para residentes em Portugal",
    duration: "45-60 minutos",
    cost: "83,10 EUR",
    documents: ["Documentos de identificacao", "Autorizacao do requerente", "Prova de parentesco"],
    color: "#4A1D6A",
  },
  {
    icon: Info,
    title: "Manifestacao de Interesse / CPLP",
    description: "Esclarecimento de duvidas sobre processos e servicos AIMA e Emissao da CPLP",
    duration: "15-30 minutos",
    cost: "83,10 EUR",
    documents: ["Documento de identificacao"],
    color: "#C74B8E",
  },
]

export default function ServicosPage() {
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
                Servicos Disponiveis
              </span>
              <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white text-balance">Tipos de Servicos</h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Conheca os servicos disponiveis para agendamento online. Cada servico tem requisitos especificos de
              documentacao.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group border border-border hover:border-[#4A1D6A]/20 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${service.color}12` }}
                      >
                        <service.icon className="w-6 h-6" style={{ color: service.color }} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-xs">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-bold text-base" style={{ color: service.color }}>
                        <Euro className="w-4 h-4" />
                        <span>{service.cost}</span>
                      </div>
                    </div>

                    <div className="bg-muted/40 rounded-xl p-4">
                      <h4 className="font-semibold text-xs mb-2 text-foreground uppercase tracking-wider">Documentos Necessarios:</h4>
                      <ul className="flex flex-col gap-1.5">
                        {service.documents.map((doc, docIndex) => (
                          <li key={docIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }} />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-14">
              <div className="bg-muted/60 border border-border rounded-3xl p-10 md:p-14 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground text-balance">Pronto para Agendar?</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  Escolha o servico que necessita e complete o agendamento online de forma rapida e segura.
                </p>
                <Button asChild size="lg" className="shadow-lg bg-[#4A1D6A] hover:bg-[#3A0D5A] text-white rounded-full px-10">
                  <Link href="/agendar" className="flex items-center gap-2">
                    Agendar Atendimento
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
