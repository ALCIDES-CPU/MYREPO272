import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, FileText, CreditCard, CheckCircle, Clock, Shield, ArrowRight, Users, MapPin, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#4A1D6A] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] sm:min-h-[520px] lg:min-h-[600px]">
              {/* Left - Text Content */}
              <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-8">
                  <span className="inline-block h-[3px] w-10 bg-[#C74B8E] rounded-full" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
                    Plataforma Oficial
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-5 sm:mb-6 text-white leading-[1.1] tracking-tight text-balance">
                  Agende o seu atendimento na AIMA
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/65 mb-8 sm:mb-10 leading-relaxed max-w-lg">
                  Processo de legalizacao simplificado. Agende, submeta documentos e acompanhe tudo online.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="text-sm font-semibold bg-[#C74B8E] text-white hover:bg-[#B03A7D] shadow-lg shadow-[#C74B8E]/20 rounded-full px-6 sm:px-8 h-11 sm:h-12">
                    <Link href="/agendar" className="flex items-center gap-2">
                      Agendar Agora
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-sm bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-full px-6 sm:px-8 h-11 sm:h-12"
                  >
                    <Link href="/servicos">Ver Servicos</Link>
                  </Button>
                </div>
              </div>

              {/* Right - Banner Image */}
              <div className="relative order-1 lg:order-2 h-[200px] sm:h-[280px] lg:h-auto">
                <Image
                  src="/images/banner.jpeg"
                  alt="Banner AIMA - Agencia para a Integracao, Migracoes e Asilo"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A1D6A] via-[#4A1D6A]/40 to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A1D6A] to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 -mt-6 sm:-mt-8 md:-mt-10 relative z-10 gap-3 sm:gap-0">
              {[
                { icon: Shield, label: "Seguro", desc: "Dados encriptados", color: "#4A1D6A" },
                { icon: Clock, label: "Rapido", desc: "Sem filas de espera", color: "#C74B8E" },
                { icon: CheckCircle, label: "Online", desc: "Disponivel 24/7", color: "#9B5BA5" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-card shadow-xl p-5 sm:p-6 md:p-7 flex items-center gap-4 border border-border ${
                    i === 0 ? "rounded-2xl sm:rounded-r-none sm:rounded-l-2xl" : ""
                  } ${i === 2 ? "rounded-2xl sm:rounded-l-none sm:rounded-r-2xl" : ""} ${
                    i === 1 ? "rounded-2xl sm:rounded-none sm:border-x-0" : ""
                  }`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}10` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 sm:py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-10 sm:mb-16">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                Processo Simples
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Como funciona
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-px md:bg-border rounded-2xl overflow-hidden">
              {[
                {
                  step: "01",
                  icon: Calendar,
                  title: "Agende",
                  description: "Escolha o servico, data, hora e local do seu atendimento.",
                },
                {
                  step: "02",
                  icon: FileText,
                  title: "Submeta Documentos",
                  description: "Faca upload dos documentos necessarios de forma segura.",
                },
                {
                  step: "03",
                  icon: CreditCard,
                  title: "Confirme",
                  description: "Efetue o pagamento e receba a confirmacao por e-mail.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-card p-6 sm:p-8 md:p-10 group hover:bg-muted/30 transition-colors rounded-2xl md:rounded-none border border-border md:border-0"
                >
                  <span className="text-5xl font-black text-border block mb-8 group-hover:text-[#C74B8E]/20 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#4A1D6A]/8 flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-[#4A1D6A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-24 md:py-32 bg-muted/40">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  Servicos Disponiveis
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  Tipos de servicos
                </h2>
              </div>
              <Button asChild variant="ghost" className="w-fit text-sm text-muted-foreground hover:text-foreground -mb-1">
                <Link href="/servicos" className="flex items-center gap-2">
                  Ver todos
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { icon: FileText, title: "Agendamento Geral", desc: "Servicos gerais da AIMA" },
                { icon: FileText, title: "Renovacao de AR", desc: "Autorizacao de residencia" },
                { icon: Users, title: "Reagrupamento Familiar", desc: "Reunificacao familiar" },
                { icon: Calendar, title: "CPLP / Manifestacao", desc: "Interesse e emissao CPLP" },
              ].map((service, i) => (
                <Link key={i} href="/agendar" className="group">
                  <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 h-full hover:border-[#4A1D6A]/25 hover:shadow-lg transition-all duration-300">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#4A1D6A]/8 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-[#4A1D6A]/12 transition-colors">
                      <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#4A1D6A]" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-xs sm:text-sm">{service.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3 sm:mb-4 hidden sm:block">{service.desc}</p>
                    <span className="text-xs font-medium text-[#C74B8E] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Agendar <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-24 md:py-32 bg-[#4A1D6A] relative overflow-hidden">
          {/* Subtle decorative element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C74B8E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 block mb-3">
                  Porque escolher-nos
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-5 sm:mb-6">
                  Plataforma oficial da AIMA
                </h2>
                <p className="text-white/55 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
                  Destinada a agilizacao do processo de legalizacao em Portugal. Agende o seu atendimento de forma comoda e segura.
                </p>
                <Button asChild size="lg" className="text-sm font-semibold bg-[#C74B8E] text-white hover:bg-[#B03A7D] rounded-full px-6 sm:px-8 h-11 sm:h-12">
                  <Link href="/agendar" className="flex items-center gap-2">
                    Comecar agora
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  {
                    icon: CheckCircle,
                    title: "Rapido e Conveniente",
                    description: "Agende a qualquer hora, sem filas e sem complicacoes.",
                  },
                  {
                    icon: MapPin,
                    title: "Multiplos Centros",
                    description: "Escolha entre diversos centros de atendimento em todo o pais.",
                  },
                  {
                    icon: Shield,
                    title: "Seguro e Confiavel",
                    description: "Dados e documentos protegidos com encriptacao avancada.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/[0.08] hover:bg-white/[0.10] transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#C74B8E]/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-5 h-5 text-[#C74B8E]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 md:py-32 bg-background">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-4">
              Comece Agora
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight text-balance">
              Pronto para agendar o seu atendimento?
            </h2>
            <p className="text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-lg mx-auto text-sm sm:text-base">
              Processo simples, rapido e seguro. Em poucos minutos garanta o seu lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="text-sm font-semibold shadow-lg bg-[#4A1D6A] hover:bg-[#3A0D5A] text-white rounded-full px-8 sm:px-10 h-11 sm:h-12">
                <Link href="/agendar" className="flex items-center gap-2">
                  Agendar Atendimento
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-sm bg-transparent rounded-full px-8 sm:px-10 h-11 sm:h-12">
                <Link href="/faq">Perguntas Frequentes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
