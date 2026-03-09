import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Calendar,
  FileText,
  CreditCard,
  ArrowUpRight,
  Plus,
  CheckCircle,
} from "lucide-react"

const processSteps = [
  {
    number: "1",
    title: "Escolha o Servico",
    description: "Selecione o tipo de atendimento que necessita e escolha a data e hora convenientes.",
  },
  {
    number: "2",
    title: "Submeta Documentos",
    description: "Faca upload dos documentos necessarios de forma segura atraves da nossa plataforma.",
  },
  {
    number: "3",
    title: "Confirmacao",
    description: "Efetue o pagamento das taxas e receba a confirmacao do seu agendamento.",
  },
]

const services = [
  {
    title: "Agendamento Geral",
    description: "Marcacao de atendimento para servicos gerais da AIMA.",
  },
  {
    title: "Renovacao de AR",
    description: "Renovacao de autorizacao de residencia temporaria ou permanente.",
  },
  {
    title: "Primeira AR",
    description: "Pedido de primeira autorizacao de residencia em Portugal.",
  },
  {
    title: "Reagrupamento Familiar",
    description: "Pedido de reagrupamento familiar para residentes.",
  },
  {
    title: "CPLP",
    description: "Emissao de documentos para cidadaos da CPLP.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/banner.jpeg"
              alt="AIMA Services"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
                Plataforma Oficial AIMA
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                Agende o seu atendimento de forma simples
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                Processo de legalizacao simplificado. Agende, submeta documentos e acompanhe o seu processo online, sem filas de espera.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base font-medium"
                >
                  <Link href="/agendar" className="flex items-center gap-3">
                    Agendar Agora
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-foreground hover:bg-primary/5 rounded-full px-8 h-14 text-base font-medium"
                >
                  <Link href="/servicos">
                    Ver Servicos
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-border" />
          </div>
        </section>

        {/* Services Accordion Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column */}
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                  Nossos Servicos
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
                  Facilitamos o seu processo de legalizacao em Portugal.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A AIMA disponibiliza diversos servicos para apoiar imigrantes no processo de legalizacao e integracao em Portugal. Escolha o servico que melhor se adequa a sua situacao.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6 h-11 text-sm font-medium transition-all"
                >
                  <Link href="/servicos" className="flex items-center gap-2">
                    Ver Todos os Servicos
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Right Column - Services List */}
              <div className="flex flex-col">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group flex items-start justify-between py-6 border-b border-border cursor-pointer hover:border-foreground/30 transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/80 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {service.description}
                      </p>
                    </div>
                    <Plus className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 lg:py-32 bg-muted/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Como Funciona
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                Processo simples em 3 passos
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card border border-border rounded-2xl p-8 h-full">
                    <span className="text-6xl lg:text-7xl font-bold text-border/60 block mb-6">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 lg:py-32 bg-[#274569] text-[#FCFEFD]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                  A sua confianca e a nossa prioridade
                </h2>
                <p className="text-[#B0C7E9] leading-relaxed mb-8">
                  Milhares de cidadaos ja utilizaram a nossa plataforma para agendar atendimentos de forma rapida e segura.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#B0C7E9]" />
                    <span className="text-sm">Dados encriptados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#B0C7E9]" />
                    <span className="text-sm">Disponivel 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#B0C7E9]" />
                    <span className="text-sm">Suporte dedicado</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-5xl lg:text-6xl font-bold mb-2">50k+</p>
                  <p className="text-[#8297AC] text-sm">Agendamentos realizados</p>
                </div>
                <div>
                  <p className="text-5xl lg:text-6xl font-bold mb-2">98%</p>
                  <p className="text-[#8297AC] text-sm">Satisfacao dos utilizadores</p>
                </div>
                <div>
                  <p className="text-5xl lg:text-6xl font-bold mb-2">24h</p>
                  <p className="text-[#8297AC] text-sm">Disponibilidade</p>
                </div>
                <div>
                  <p className="text-5xl lg:text-6xl font-bold mb-2">5min</p>
                  <p className="text-[#8297AC] text-sm">Tempo medio de agendamento</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Pronto para agendar?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Inicie o seu processo de forma rapida e segura. Estamos aqui para ajuda-lo.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-base font-medium"
            >
              <Link href="/agendar" className="flex items-center gap-3">
                Comecar Agora
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
