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

        {/* ================= HERO FULL WIDTH ================= */}
        <section className="relative h-[600px] lg:h-[700px] overflow-hidden">

          {/* IMAGEM FULL WIDTH */}
          <Image
            src="/images/banner.jpeg"
            alt="Banner AIMA"
            fill
            priority
            className="object-cover object-right"
          />

          {/* OVERLAY GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A1D6A] via-[#4A1D6A]/85 to-transparent" />

          {/* CONTEÚDO */}
          <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 sm:px-10 lg:px-16">
            <div className="max-w-xl">

              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block h-[3px] w-10 bg-[#C74B8E] rounded-full" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
                  Plataforma Oficial
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-6 text-white leading-[1.1] tracking-tight">
                Agende o seu atendimento na AIMA
              </h1>

              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Processo de legalizacao simplificado. Agende, submeta documentos e acompanhe tudo online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C74B8E] hover:bg-[#B03A7D] text-white rounded-full px-8 h-12"
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
                  className="border border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-12"
                >
                  <Link href="/servicos">Ver Servicos</Link>
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* ================= TRUST ================= */}
        <section className="bg-background -mt-16 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-4">

              {[
                { icon: Shield, label: "Seguro", desc: "Dados encriptados", color: "#4A1D6A" },
                { icon: Clock, label: "Rapido", desc: "Sem filas de espera", color: "#C74B8E" },
                { icon: CheckCircle, label: "Online", desc: "Disponivel 24/7", color: "#9B5BA5" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card shadow-xl p-6 flex items-center gap-4 border border-border rounded-2xl"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= COMO FUNCIONA ================= */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {[
                {
                  step: "01",
                  icon: Calendar,
                  title: "Agende",
                  description: "Escolha o servico, data, hora e local.",
                },
                {
                  step: "02",
                  icon: FileText,
                  title: "Submeta Documentos",
                  description: "Faca upload dos documentos necessarios.",
                },
                {
                  step: "03",
                  icon: CreditCard,
                  title: "Confirme",
                  description: "Efetue o pagamento e receba confirmacao.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-card p-8 rounded-2xl border border-border">
                  <span className="text-5xl font-black text-border block mb-6">
                    {item.step}
                  </span>
                  <item.icon className="w-6 h-6 text-[#4A1D6A] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para agendar o seu atendimento?
            </h2>
            <p className="text-muted-foreground mb-10">
              Processo simples, rapido e seguro.
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