import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Globe, ArrowUpRight } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Centro de Contacto",
    details: ["+351 217 115 000", "Disponivel das 08:00 as 20:00"],
  },
  {
    icon: Mail,
    title: "E-mail Geral",
    details: ["info@aimagovpt.com", "Para questoes e informacoes gerais"],
  },
  {
    icon: Globe,
    title: "Portal AIMA",
    details: ["aimagovpt.com", "Agendamentos e servicos online"],
  },
  {
    icon: Clock,
    title: "Horario Geral",
    details: ["Dias uteis: 09:00 - 16:30", "Agendamento previo obrigatorio"],
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
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Fale Connosco
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Contactos
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entre em contacto connosco atraves dos seguintes canais. Estamos disponiveis para ajudar com as suas questoes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <contact.icon className="w-5 h-5 text-muted-foreground" />
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                      {contact.title}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-foreground">
                      {contact.details[0]}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {contact.details[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Offices Section */}
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
                Centros de Atendimento
              </p>
              
              <div className="space-y-0">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="group border-b border-border py-8 first:border-t"
                  >
                    <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                      <div className="md:col-span-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {office.city}
                        </h3>
                      </div>
                      <div className="md:col-span-5">
                        <p className="text-muted-foreground">
                          {office.address}
                          <br />
                          {office.postalCode}
                        </p>
                      </div>
                      <div className="md:col-span-4 md:text-right">
                        <p className="text-foreground font-medium">
                          {office.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-16 bg-muted/50 border border-border rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Informacao Importante
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Para atendimento presencial, e obrigatorio agendamento previo atraves desta plataforma. Chegue com 15 minutos de antecedencia e traga todos os documentos originais.
                  </p>
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
