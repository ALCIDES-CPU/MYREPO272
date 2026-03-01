import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Globe, Info } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Linha de Apoio",
    details: ["+351 808 202 763", "Chamada para rede fixa nacional"],
    color: "#4A1D6A",
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["info@servicosaima.com", "Resposta em 48 horas uteis"],
    color: "#C74B8E",
  },
  {
    icon: Globe,
    title: "Website Oficial",
    details: ["www.aimagov.com", "Informacoes e servicos oficiais"],
    color: "#9B5BA5",
  },
  {
    icon: Clock,
    title: "Horario de Atendimento",
    details: ["Segunda a Sexta: 09:00 - 17:00", "Sabados, Domingos e Feriados: Encerrado"],
    color: "#4A1D6A",
  },
]

const offices = [
  {
    city: "Lisboa",
    address: "Avenida Antonio Augusto de Aguiar, 20",
    postalCode: "1069-119 Lisboa",
    phone: "+351 21 810 6500",
  },
  {
    city: "Porto",
    address: "Praca Mouzinho de Albuquerque, 113",
    postalCode: "4100-359 Porto",
    phone: "+351 22 339 5500",
  },
  {
    city: "Coimbra",
    address: "Rua Antero de Quental, 119",
    postalCode: "3000-032 Coimbra",
    phone: "+351 239 497 100",
  },
  {
    city: "Faro",
    address: "Rua Dr. Jose de Matos, 14",
    postalCode: "8000-503 Faro",
    phone: "+351 289 899 100",
  },
]

export default function ContactosPage() {
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
                Fale Connosco
              </span>
              <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white text-balance">Contactos</h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Entre em contacto connosco atraves dos seguintes canais. Estamos disponiveis para ajudar com as suas
              questoes.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border border-border hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${contact.color}12` }}
                    >
                      <contact.icon className="w-5 h-5" style={{ color: contact.color }} />
                    </div>
                    <CardTitle className="text-base">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-0.5">
                      {contact.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className={detailIndex === 0 ? "font-semibold text-sm text-foreground" : "text-xs text-muted-foreground"}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Offices */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
                <h2 className="text-2xl font-bold text-foreground">Centros de Atendimento</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {offices.map((office, index) => (
                  <Card key={index} className="border border-border hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#4A1D6A]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MapPin className="w-5 h-5 text-[#4A1D6A]" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{office.city}</CardTitle>
                          <CardDescription className="mt-1 leading-relaxed text-sm">
                            {office.address}
                            <br />
                            {office.postalCode}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm ml-[52px]">
                        <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="font-medium text-foreground">{office.phone}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="mt-12 bg-muted/40 border border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C74B8E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-5 h-5 text-[#C74B8E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Informacao Importante</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Para atendimento presencial, e obrigatorio agendamento previo atraves desta plataforma. Pedidos de
                      informacao podem ser feitos por telefone ou e-mail. Para questoes urgentes, utilize a linha de
                      apoio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
