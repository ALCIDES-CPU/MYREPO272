'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import { Loader2 } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/agendar'

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      router.push(redirect)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Ocorreu um erro')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    const supabase = createClient()
    setIsGoogleLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(redirect)}`,
        },
      })
      if (error) throw error
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Ocorreu um erro')
      setIsGoogleLoading(false)
    }
  }

  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-6">
          <Card className="border border-border shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-foreground">Entrar na Conta</CardTitle>
              <CardDescription className="text-muted-foreground">
                Aceda a sua conta para agendar atendimento
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-col gap-4">
                {/* Google Login Button */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-11 rounded-full font-medium"
                  onClick={handleGoogleLogin}
                  disabled={isGoogleLoading || isLoading}
                >
                  {isGoogleLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  )}
                  Continuar com Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">ou</span>
                  </div>
                </div>

                {/* Email/Password Login */}
                <form onSubmit={handleLogin}>
                  <div className="flex flex-col gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Palavra-passe</Label>
                      <Input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="rounded-lg"
                      />
                    </div>
                    {error && <p className="text-sm text-destructive">{error}</p>}
                    <Button 
                      type="submit" 
                      className="w-full h-11 rounded-full bg-[#4A1D6A] hover:bg-[#3A0D5A] text-white font-medium" 
                      disabled={isLoading || isGoogleLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          A entrar...
                        </>
                      ) : (
                        'Entrar'
                      )}
                    </Button>
                  </div>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                  Nao tem conta?{' '}
                  <Link
                    href={`/auth/sign-up${redirect !== '/agendar' ? `?redirect=${encodeURIComponent(redirect)}` : ''}`}
                    className="text-[#C74B8E] hover:underline underline-offset-4 font-medium"
                  >
                    Criar conta
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="bg-[#4A1D6A] py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
              <span className="text-sm font-medium tracking-wide uppercase text-white/60">
                Acesso a Plataforma
              </span>
              <span className="h-1 w-8 bg-[#C74B8E] rounded-full" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white text-balance">Entrar na Conta</h1>
          </div>
        </section>
        <Suspense fallback={
          <div className="flex min-h-[60vh] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        }>
          <LoginForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
