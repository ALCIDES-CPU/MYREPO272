import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AlertTriangle } from 'lucide-react'

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="bg-[#4A1D6A] py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
              <span className="text-sm font-medium tracking-wide uppercase text-white/60">
                Erro de Autenticacao
              </span>
              <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white text-balance">Algo correu mal</h1>
          </div>
        </section>

        <div className="flex min-h-[60vh] w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md">
            <div className="flex flex-col gap-6">
              <Card className="border border-border shadow-lg">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Ocorreu um erro
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    {params?.error ? (
                      <p className="text-sm text-muted-foreground text-center">
                        Codigo do erro: {params.error}
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground text-center">
                        Ocorreu um erro inesperado durante a autenticacao.
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <Button asChild className="w-full h-11 rounded-full bg-[#4A1D6A] hover:bg-[#3A0D5A] text-white font-medium">
                      <Link href="/auth/login">
                        Tentar novamente
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full h-11 rounded-full font-medium">
                      <Link href="/">
                        Voltar ao Inicio
                      </Link>
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Se o problema persistir,{' '}
                    <Link href="/contactos" className="text-[#C74B8E] hover:underline">
                      contacte-nos
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
