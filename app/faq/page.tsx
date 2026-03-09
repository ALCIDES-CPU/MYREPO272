import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const faqs = [
  {
    question: "Como posso agendar um atendimento na AIMA?",
    answer:
      'Pode agendar o seu atendimento atraves desta plataforma online. Clique em "Agendar Atendimento" no menu, preencha o formulario com os seus dados, faca upload dos documentos necessarios e proceda ao pagamento. Recebera uma confirmacao por e-mail.',
  },
  {
    question: "Que documentos preciso de apresentar?",
    answer:
      "Os documentos necessarios variam conforme o tipo de servico. Geralmente inclui documento de identificacao (passaporte ou cartao de cidadao), comprovante de residencia (caso tiver), e documentos especificos ao servico solicitado (visto, autorizacao anterior, NIF/NISS, etc.). Consulte a pagina de Servicos para detalhes especificos.",
  },
  {
    question: "Posso cancelar ou reagendar o meu atendimento?",
    answer:
      "Sim, pode cancelar ou reagendar o seu atendimento com pelo menos 48 horas de antecedencia. Entre em contacto atraves do e-mail ou telefone indicado na confirmacao do agendamento. Cancelamentos com menos de 48 horas podem nao ser reembolsados.",
  },
  {
    question: "Quanto tempo demora o atendimento?",
    answer:
      "A duracao do atendimento varia conforme o tipo de servico, entre 15 e 90 minutos. O tempo estimado para cada servico esta indicado na pagina de Servicos. Recomendamos que chegue 15 minutos antes do horario marcado.",
  },
  {
    question: "Vou receber uma confirmacao do agendamento?",
    answer:
      "Sim, apos o pagamento bem-sucedido, recebera um e-mail de confirmacao com todos os detalhes do agendamento, incluindo data, hora, local, numero de referencia e lista de documentos a trazer. Guarde este e-mail e apresente-o no dia do atendimento.",
  },
  {
    question: "O que acontece se chegar atrasado?",
    answer:
      "Se chegar com mais de 15 minutos de atraso, o seu atendimento podera ser cancelado e tera de fazer novo agendamento. Recomendamos que chegue com 15 minutos de antecedencia para evitar problemas.",
  },
  {
    question: "Posso fazer o agendamento para outra pessoa?",
    answer:
      "Pode preencher o formulario com os dados de outra pessoa, mas a pessoa em questao deve estar presente no atendimento com todos os documentos originais. Nao sao aceites representacoes sem procuracao legal.",
  },
  {
    question: "Os documentos precisam de estar traduzidos?",
    answer:
      "Documentos em linguas que nao sejam portugues ou ingles devem ser acompanhados de traducao certificada. Verifique os requisitos especificos para o seu tipo de servico na pagina de Servicos.",
  },
  {
    question: "Como posso acompanhar o status do meu processo?",
    answer:
      "Apos o atendimento, recebera informacoes sobre como acompanhar o status do seu processo. Pode consultar o andamento atraves do website oficial da AIMA usando o numero de processo fornecido.",
  },
  {
    question: "O pagamento e reembolsavel?",
    answer:
      "Pagamentos sao reembolsaveis apenas em caso de cancelamento com mais de 48 horas de antecedencia ou se o servico nao puder ser prestado por motivos imputaveis a AIMA. Contacte o suporte atraves do email (info@aimagovpt.com) para solicitar reembolso.",
  },
  {
    question: "Preciso de levar os documentos originais?",
    answer:
      "Sim, e obrigatorio apresentar todos os documentos originais no dia do atendimento, mesmo que tenha feito upload de copias digitais durante o agendamento. As copias digitais sao apenas para pre-analise.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Duvidas Frequentes
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Perguntas Frequentes
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Encontre respostas para as perguntas mais comuns sobre o processo de agendamento AIMA.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left py-6 text-base font-medium hover:no-underline text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA Section */}
            <div className="mt-16 bg-[#274569] text-[#FCFEFD] rounded-2xl p-10 lg:p-12 text-center">
              <h3 className="text-2xl font-bold tracking-tight mb-4">
                Nao encontrou a resposta?
              </h3>
              <p className="text-[#B0C7E9] mb-8 max-w-md mx-auto">
                Entre em contacto connosco atraves dos nossos canais de apoio. Estamos disponiveis para ajudar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-[#FCFEFD] text-[#274569] hover:bg-[#B0C7E9] rounded-full px-8 h-11 text-sm font-medium"
                >
                  <Link href="/contactos" className="flex items-center gap-2">
                    Ver Contactos
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#8297AC] text-[#FCFEFD] hover:bg-[#8297AC]/20 rounded-full px-8 h-11 text-sm font-medium"
                >
                  <Link href="/agendar">
                    Fazer Agendamento
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
