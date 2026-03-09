import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Centro de Contacto",
    details: ["+351 217 115 000", "Disponivel das 08:00 as 20:00"],
    color: "bg-[#C74B8E]",
  },
  {
    icon: Mail,
    title: "E-mail Geral",
    details: ["info@aimagovpt.com", "Para questoes e informacoes gerais"],
    color: "bg-[#7B4B94]",
  },
  {
    icon: Globe,
    title: "Portal AIMA",
    details: ["aimagovpt.com", "Agendamentos e servicos online"],
    color: "bg-[#4A1D6A]",
  },
  {
    icon: Clock,
    title: "Horario Geral",
    details: ["Dias uteis: 09:00 - 16:30", "Agendamento previo obrigatorio"],
    color: "bg-[#C74B8E]",
  },
]

const offices = [
  {
    city: "Lisboa (Sede)",
    address: "Avenida Casal Ribeiro, 18",
    postalCode: "1000-092 Lisboa",
    phone: "+351 217 115 000",
  },
  {
    city: "Porto",
    address: "Avenida de Franca, 316",
    postalCode: "4050-279 Porto",
    phone: "+351 217 115 000",
  },
  {
    city: "Coimbra",
    address: "Rua do Brasil, 436",
    postalCode: "3030-175 Coimbra",
    phone: "+351 217 115 000",
  },
  {
    city: "Faro",
    address: "Loja do Cidadao - Mercado Municipal",
    postalCode: "8000-151 Faro",
    phone: "+351 217 115 000",
  },
]

export default function ContactosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-[#4A1D6A] to-[#7B4B94] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C74B8E]/20 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-[#C74B8E] uppercase tracking-widest mb-4">
                Fale Connosco
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Contactos
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Entre em contacto connosco atraves dos seguintes canais. Estamos disponiveis para ajudar com as suas questoes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center mb-4`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                    {contact.title}
                  </h3>
                  <p className="text-lg font-medium text-foreground mb-1">
                    {contact.details[0]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {contact.details[1]}
                  </p>
                </div>
              ))}
            </div>

            {/* Offices Section */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Centros de Atendimento
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {office.city}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-1">
                          {office.address}
                        </p>
                        <p className="text-muted-foreground text-sm mb-3">
                          {office.postalCode}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {office.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-16 bg-gradient-to-br from-[#4A1D6A] to-[#7B4B94] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C74B8E]/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="w-14 h-14 bg-[#C74B8E] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-xl mb-2">
                    Informacao Importante
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Para atendimento presencial, e obrigatorio agendamento previo atraves desta plataforma. Chegue com 15 minutos de antecedencia e traga todos os documentos originais.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-[#C74B8E] text-white hover:bg-[#C74B8E]/90 rounded-full px-6 h-11 text-sm font-medium shadow-lg shadow-[#C74B8E]/30"
                >
                  <Link href="/agendar" className="flex items-center gap-2">
                    Agendar
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
