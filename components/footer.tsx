"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Phone } from "lucide-react"

const footerLinks = [
  { href: "/servicos", label: "Servicos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contactos", label: "Contactos" },
  { href: "/agendar", label: "Agendar" },
]

const partners = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R%20PT-UsUcqcgTWpGh4Iuh8XZV15jxd2SMVO.png",
    alt: "Republica Portuguesa",
    width: 160,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CPT%202020-iUPMLKqARDRBGg9FoaJRBuVTEXAwP6.png",
    alt: "COMPETE 2020",
    width: 160,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C%20UE-o96TqErBlA6hJycCPqLKPRkRASwPca.png",
    alt: "Uniao Europeia",
    width: 180,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PT%202020-oaiSRvVwOROeJBbLK7jKQAov01GkNU.png",
    alt: "Portugal 2020",
    width: 240,
  },
]

export function Footer() {
  return (
    <footer className="bg-[#4A1D6A] text-white mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 lg:py-20 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Logo & Info */}
            <div>
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aima_horizontal_cor-dp99dOkFSZoOboT9H50LBTmCxeGkVO.png"
                alt="AIMA"
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-white/70 leading-relaxed max-w-md mb-8">
                Agencia para a Integracao, Migracoes e Asilo. Estamos disponiveis para esclarecer todas as suas duvidas sobre o processo de agendamento.
              </p>
              <div className="flex flex-col gap-3">
                <Link 
                  href="mailto:info@aimagovpt.com"
                  className="flex items-center gap-3 text-white/80 hover:text-[#C74B8E] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@aimagovpt.com
                </Link>
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="w-5 h-5" />
                  +351 213 585 500
                </div>
              </div>
            </div>

            {/* Right Column - Quick Links */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6">
                  Links Rapidos
                </h3>
                <ul className="space-y-4">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-[#C74B8E] transition-colors flex items-center gap-2 group"
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6">
                  Informacoes
                </h3>
                <ul className="space-y-4">
                  <li className="text-white/70">
                    <span className="block text-white/50 text-sm mb-1">Horario</span>
                    Dias uteis: 09:00 - 16:30
                  </li>
                  <li className="text-white/70">
                    <span className="block text-white/50 text-sm mb-1">Sede</span>
                    Lisboa, Portugal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-10 border-b border-white/10">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-8 text-center">
            Apoios e Financiamento
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={40}
                  className="h-6 lg:h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} AIMA - Agencia para a Integracao, Migracoes e Asilo. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Politica de Privacidade
              </Link>
              <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
