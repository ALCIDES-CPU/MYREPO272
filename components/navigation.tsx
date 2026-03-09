"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import type { User as SupabaseUser } from "@supabase/supabase-js"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Servicos" },
  { href: "/contactos", label: "Contactos" },
  { href: "/faq", label: "FAQ" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    
    // Get initial session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setIsLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setUser(null)
    window.location.href = '/'
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#3A1060]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-[4.5rem]">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIMA%20WHIT-IsJtsie9npT4L17xRWtuIA3HZoF2y4.png"
              alt="AIMA Logo"
              width={160}
              height={48}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            
            {!isLoading && (
              <>
                {user ? (
                  <div className="flex items-center gap-2 ml-3">
                    <Button asChild size="sm" className="bg-[#C74B8E] text-white hover:bg-[#B03A7D] rounded-full px-6 font-semibold">
                      <Link href="/agendar">Agendar</Link>
                    </Button>
                    <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/20">
                      <span className="text-white/70 text-sm truncate max-w-[120px]">
                        {user.email?.split('@')[0]}
                      </span>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2"
                        onClick={handleLogout}
                        title="Terminar sessao"
                      >
                        <LogOut className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 ml-3">
                    <Button asChild size="sm" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 rounded-full px-4 font-medium">
                      <Link href="/auth/login">Entrar</Link>
                    </Button>
                    <Button asChild size="sm" className="bg-[#C74B8E] text-white hover:bg-[#B03A7D] rounded-full px-6 font-semibold">
                      <Link href="/agendar">Agendar</Link>
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white block py-2.5 px-4 hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {!isLoading && (
                <div className="pt-2 px-4 space-y-2">
                  {user ? (
                    <>
                      <div className="flex items-center gap-2 py-2 text-white/70 text-sm">
                        <User className="h-4 w-4" />
                        <span className="truncate">{user.email}</span>
                      </div>
                      <Button asChild size="sm" className="w-full bg-[#C74B8E] text-white hover:bg-[#B03A7D] rounded-full font-semibold">
                        <Link href="/agendar" onClick={() => setIsOpen(false)}>
                          Agendar Atendimento
                        </Link>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full rounded-full font-medium text-white border-white/30 hover:bg-white/10"
                        onClick={() => {
                          handleLogout()
                          setIsOpen(false)
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Terminar Sessao
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild size="sm" className="w-full bg-[#C74B8E] text-white hover:bg-[#B03A7D] rounded-full font-semibold">
                        <Link href="/agendar" onClick={() => setIsOpen(false)}>
                          Agendar Atendimento
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="w-full rounded-full font-medium text-white border-white/30 hover:bg-white/10">
                        <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                          Entrar
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
