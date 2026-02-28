import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, FileText, CreditCard, CheckCircle, Clock, Shield, ArrowRight, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section with Banner */}
        <section className="relative overflow-hidden">
          <div className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
            <Image
              src="/images/banner.jpeg"
              alt="Banner AIMA - Agencia para a Integracao, Migracoes e Asilo"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#4A1D6A]/40" />
          </div>

          {/* Content below banner */}
          <div className="bg-[#4A1D6A] pb-16 pt-10 md:pb-20 md:pt-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-block h-1 w-12 bg-[#C74B8E] rounded-full" />
                  <span className="text-sm font-medium tracking-wide uppercase text-white/70">
                    Plataforma Oficial AIMA
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 text-white leading-tight text-balance">
                  Agendamento de Servicos AIMA
                </h1>
                <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
                  Agende o seu atendimento de forma rapida e segura. Submita documentos, efetue pagamentos e acompanhe o
                  status do seu processo online.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="text-base font-semibold bg-[#C74B8E] text-white hover:bg-[#B03A7D] shadow-lg rounded-full px-8">
                    <Link href="/agendar" className="flex items-center gap-2">
                      Agendar Agora
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-base bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 rounded-full px-8"
                  >
                    <Link href="/servicos">Ver Servicos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 -mt-8 md:-mt-10">
              <div className="bg-card rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none shadow-xl p-6 md:p-8 border border-border flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4A1D6A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#4A1D6A]" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Seguro</p>
                  <p className="text-sm text-muted-foreground">Dados protegidos</p>
                </div>
              </div>
              <div className="bg-card shadow-xl p-6 md:p-8 border-y sm:border border-border flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C74B8E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#C74B8E]" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Rapido</p>
                  <p className="text-sm text-muted-foreground">Sem filas de espera</p>
                </div>
              </div>
              <div className="bg-card rounded-b-2xl sm:rounded-br-2xl sm:rounded-bl-none shadow-xl p-6 md:p-8 border border-border flex items-center gap-4">
                <div className="w-12 h-12 bg-[#9B5BA5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#9B5BA5]" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Online</p>
                  <p className="text-sm text-muted-foreground">Disponivel 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
                <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                  Processo Simplificado
                </span>
                <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Como Funciona</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  step: "01",
                  icon: Calendar,
                  title: "Agende o Atendimento",
                  description: "Escolha o tipo de servico, data e local de sua preferencia de forma simples e intuitiva.",
                  color: "#4A1D6A",
                },
                {
                  step: "02",
                  icon: FileText,
                  title: "Submeta Documentos",
                  description: "Faca upload dos documentos necessarios de forma segura e organizada.",
                  color: "#C74B8E",
                },
                {
                  step: "03",
                  icon: CreditCard,
                  title: "Efetue o Pagamento",
                  description: "Pagamento seguro online atraves da plataforma Stripe. Valor: 83,10 EUR.",
                  color: "#9B5BA5",
                },
              ].map((item) => (
                <Card
                  key={item.step}
                  className="group border border-border hover:border-[#4A1D6A]/20 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-6xl font-black text-muted/60 select-none">
                    {item.step}
                  </div>
                  <CardHeader className="pb-3 relative">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
                  <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                    Servicos Disponiveis
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                  Tipos de Servicos
                </h2>
              </div>
              <Button asChild variant="outline" className="bg-transparent w-fit rounded-full">
                <Link href="/servicos" className="flex items-center gap-2">
                  Ver todos os servicos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: FileText, title: "Agendamento Geral", color: "#4A1D6A" },
                { icon: FileText, title: "Renovacao de AR", color: "#C74B8E" },
                { icon: Users, title: "Reagrupamento Familiar", color: "#9B5BA5" },
                { icon: Calendar, title: "CPLP / Manifestacao", color: "#4A1D6A" },
              ].map((service, i) => (
                <Link key={i} href="/agendar">
                  <Card className="group border border-border hover:border-[#4A1D6A]/20 h-full shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="pt-6 pb-6 flex flex-col items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${service.color}12` }}
                      >
                        <service.icon className="w-6 h-6" style={{ color: service.color }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                        <p className="text-sm font-bold" style={{ color: service.color }}>
                          83,10 EUR
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-[#C74B8E] transition-colors">
                        Agendar agora <ArrowRight className="w-3 h-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-[#4A1D6A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Plataforma Oficial da AIMA
              </h2>
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                Destinada a agilizacao do processo de legalizacao em Portugal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: "Rapido e Conveniente",
                  description: "Agende o seu atendimento a qualquer hora, sem filas e sem complicacoes.",
                },
                {
                  icon: Clock,
                  title: "Acompanhamento em Tempo Real",
                  description: "Consulte o status do seu agendamento a qualquer momento atraves da plataforma.",
                },
                {
                  icon: Shield,
                  title: "Seguro e Confiavel",
                  description: "Seus dados e documentos protegidos com a mais alta tecnologia de criptografia.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-7 hover:bg-white/[0.12] transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-[#C74B8E]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-white/65 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-muted/60 border border-border rounded-3xl p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Pronto para Agendar?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                Comece agora e garanta o seu atendimento na AIMA. Processo simples, rapido e seguro.
              </p>
              <Button asChild size="lg" className="text-base shadow-lg bg-[#4A1D6A] hover:bg-[#3A0D5A] text-white rounded-full px-10">
                <Link href="/agendar" className="flex items-center gap-2">
                  Agendar Atendimento
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
