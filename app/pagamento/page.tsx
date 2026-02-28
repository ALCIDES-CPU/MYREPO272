"use client"

import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PaymentForm } from "@/components/payment-form"
import { Loader2 } from "lucide-react"

function PaymentContent() {
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
                Pagamento
              </span>
              <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white text-balance">Pagamento do Agendamento</h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Finalize o seu agendamento e conclua o pagamento da taxa do servico.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-[#4A1D6A]" />
                </div>
              }
            >
              <PaymentForm />
            </Suspense>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function PagamentoPage() {
  return <PaymentContent />
}
