import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Calendar,
  FileText,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users,
} from "lucide-react"

const processSteps = [
  {
    icon: Calendar,
    number: "01",
    title: "Escolha o Servico",
    description: "Selecione o tipo de atendimento que necessita e escolha a data e hora convenientes.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Submeta Documentos",
    description: "Faca upload dos documentos necessarios de forma segura atraves da nossa plataforma.",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Confirmacao",
    description: "Efetue o pagamento das taxas e receba a confirmacao do seu agendamento.",
  },
]

const services = [
  {
    title: "Agendamento Geral",
    description: "Marcacao de atendimento para servicos gerais da AIMA.",
    icon: Calendar,
  },
  {
    title: "Renovacao de AR",
    description: "Renovacao de autorizacao de residencia temporaria ou permanente.",
    icon: FileText,
  },
  {
    title: "Primeira AR",
    description: "Pedido de primeira autorizacao de residencia em Portugal.",
    icon: Users,
  },
  {
    title: "Reagrupamento Familiar",
    description: "Pedido de reagrupamento familiar para residentes.",
    icon: Users,
  },
]

const stats = [
  { value: "50k+", label: "Agendamentos realizados" },
  { value: "98%", label: "Satisfacao dos utilizadores" },
  { value: "24/7", label: "Disponibilidade online" },
  { value: "5min", label: "Tempo medio de agendamento" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/banner.jpeg"
              alt="AIMA Services"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A1D6A]/95 via-[#4A1D6A]/80 to-[#4A1D6A]/60" />
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#C74B8E]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#7B4B94]/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-[#C74B8E] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">
                  Plataforma Oficial de Agendamento na AIMA
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Agende o seu atendimento{" "}
                <span className="text-[#C74B8E]">na AIMA</span>
              </h1>

              <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                Processo de legalizacao simplificado. Agende, submeta documentos e acompanhe o seu processo online, sem filas de espera.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C74B8E] text-white hover:bg-[#C74B8E]/90 rounded-full px-8 h-14 text-base font-medium shadow-xl shadow-[#C74B8E]/30"
                >
                  <Link href="/agendar" className="flex items-center gap-3">
                    Agendar Agora
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-14 text-base font-medium backdrop-blur-sm"
                >
                  <Link href="/servicos">
                    Ver Servicos
                  </Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-white/70">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm">Dados encriptados</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">Disponivel 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Suporte dedicado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Nossos Servicos
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                Facilitamos o seu processo de legalizacao
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A AIMA disponibiliza diversos servicos para apoiar imigrantes no processo de legalizacao e integracao em Portugal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 h-12 text-sm font-medium"
              >
                <Link href="/servicos" className="flex items-center gap-2">
                  Ver Todos os Servicos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-[#4A1D6A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-[#C74B8E] uppercase tracking-widest mb-4">
                Como Funciona
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
                Processo simples em 3 passos
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                O nosso sistema de agendamento foi desenhado para ser intuitivo e eficiente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-[#C74B8E] rounded-xl flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-5xl font-bold text-white/20">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-white/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#4A1D6A] to-[#7B4B94] rounded-3xl p-10 lg:p-16 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C74B8E]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
                  Pronto para agendar?
                </h2>
                <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                  Inicie o seu processo de forma rapida e segura. Estamos aqui para ajuda-lo em cada passo.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C74B8E] text-white hover:bg-[#C74B8E]/90 rounded-full px-10 h-14 text-base font-medium shadow-xl shadow-[#C74B8E]/30"
                >
                  <Link href="/agendar" className="flex items-center gap-3">
                    Comecar Agora
                    <ArrowRight className="w-5 h-5" />
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
