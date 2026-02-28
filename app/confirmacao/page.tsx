import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, Calendar, Mail, FileText, Home } from "lucide-react"

export default function ConfirmacaoPage() {
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
                Confirmacao
              </span>
              <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white text-balance">Agendamento Processado</h1>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border border-border shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-9 h-9 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-balance">Agendamento pendente a confirmacao de pagamento!</CardTitle>
                <CardDescription className="text-sm">O seu agendamento foi processado com sucesso, estamos aguardando a confirmacao do seu pagamento</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="bg-muted/40 p-5 rounded-xl flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#4A1D6A] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-0.5 text-sm text-foreground">Detalhes do Agendamento</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        O seu agendamento foi registado no sistema AIMA. Por favor, guarde o numero de referencia para
                        futuras consultas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#C74B8E] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-0.5 text-sm text-foreground">Confirmacao por E-mail</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Enviamos um e-mail de confirmacao com todos os detalhes do seu agendamento e instrucoes para o dia
                        do atendimento.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#9B5BA5] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-0.5 text-sm text-foreground">Documentos Necessarios</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Nao se esqueca de trazer todos os documentos originais no dia do seu atendimento. Consulte o
                        e-mail para a lista completa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-5">
                  <h3 className="font-semibold mb-3 text-sm text-foreground">Proximos Passos:</h3>
                  <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A1D6A] font-bold">1.</span>
                      <span>Verifique o e-mail de confirmacao (incluindo a pasta de spam)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A1D6A] font-bold">2.</span>
                      <span>Prepare todos os documentos originais solicitados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A1D6A] font-bold">3.</span>
                      <span>Chegue 15 minutos antes do horario agendado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A1D6A] font-bold">4.</span>
                      <span>Apresente o e-mail de confirmacao na rececao do centro AIMA</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild className="flex-1 bg-[#4A1D6A] hover:bg-[#3A0D5A] text-white rounded-full">
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Voltar a Pagina Inicial
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent rounded-full">
                    <Link href="/agendar">Fazer Novo Agendamento</Link>
                  </Button>
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
