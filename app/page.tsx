import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Calendar,
  FileText,
  CreditCard,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  Users,
  MapPin,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative bg-[#4A1D6A] overflow-hidden">
          <div className="relative max-w-7xl mx-auto min-h-[520px] lg:min-h-[620px] flex items-center">

            {/* LEFT CONTENT */}
            <div className="relative z-10 w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block h-[3px] w-10 bg-[#C74B8E] rounded-full" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
                  Plataforma Oficial
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-white leading-[1.1] tracking-tight">
                Agende o seu atendimento na AIMA
              </h1>

              <p className="text-base md:text-lg text-white/65 mb-10 leading-relaxed max-w-lg">
                Processo de legalizacao simplificado. Agende, submeta documentos e acompanhe tudo online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="text-sm font-semibold bg-[#C74B8E] text-white hover:bg-[#B03A7D] shadow-lg shadow-[#C74B8E]/20 rounded-full px-8 h-12"
                >
                  <Link href="/agendar" className="flex items-center gap-2">
                    Agendar Agora
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-sm bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-full px-8 h-12"
                >
                  <Link href="/servicos">Ver Servicos</Link>
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
              <Image
                src="/images/banner.jpeg"
                alt="Banner AIMA - Agencia para a Integracao, Migracoes e Asilo"
                fill
                priority
                className="object-cover object-right"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A1D6A] via-[#4A1D6A]/60 to-transparent" />
            </div>
          </div>
        </section>

        {/* ================= TRUST INDICATORS ================= */}
        <section className="bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 -mt-10 relative z-10 gap-3 sm:gap-0">
              {[
                { icon: Shield, label: "Seguro", desc: "Dados encriptados", color: "#4A1D6A" },
                { icon: Clock, label: "Rapido", desc: "Sem filas de espera", color: "#C74B8E" },
                { icon: CheckCircle, label: "Online", desc: "Disponivel 24/7", color: "#9B5BA5" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-card shadow-xl p-6 flex items-center gap-4 border border-border ${i === 0 ? "rounded-2xl sm:rounded-r-none" : ""
                    } ${i === 2 ? "rounded-2xl sm:rounded-l-none" : ""}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
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

        {/* ================= HOW IT WORKS ================= */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-xl mb-16">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                Processo Simples
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Como funciona
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
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
                <div key={item.step} className="bg-card p-8 rounded-2xl border border-border">
                  <span className="text-5xl font-black text-border block mb-6">
                    {item.step}
                  </span>
                  <item.icon className="w-6 h-6 text-[#4A1D6A] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-4">
              Comece Agora
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para agendar o seu atendimento?
            </h2>
            <p className="text-muted-foreground mb-10">
              Processo simples, rapido e seguro. Em poucos minutos garanta o seu lugar.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#4A1D6A] hover:bg-[#3A0D5A] text-white rounded-full px-10 h-12"
            >
              <Link href="/agendar" className="flex items-center gap-2">
                Agendar Atendimento
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}