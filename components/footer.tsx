"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

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
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aima_horizontal_cor-rIl9RarT6CEu1ZKBjIgyK63jrgQiBj.png",
    alt: "AIMA",
    width: 180,
  },
]

export function Footer() {
  return (
    <footer className="bg-[#274569] text-[#FCFEFD] mt-auto">
      {/* Contact Section */}
      <div className="border-b border-[#8297AC]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#8297AC] mb-4">
                Contacto
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Precisa de ajuda?
              </h2>
              <p className="text-[#B0C7E9] leading-relaxed max-w-md">
                Estamos disponiveis para esclarecer todas as suas duvidas sobre o processo de agendamento.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Link 
                href="mailto:info@aimagovpt.com"
                className="text-xl lg:text-2xl font-medium hover:text-[#B0C7E9] transition-colors flex items-center gap-2"
              >
                info@aimagovpt.com
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <p className="text-[#8297AC] text-sm">+351 213 585 500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="border-b border-[#8297AC]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <p className="text-xs font-medium uppercase tracking-widest text-[#8297AC] mb-8 text-center">
            Apoios e Financiamento
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="bg-background rounded-lg p-3 hover:shadow-md transition-shadow"
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
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tight">
              AIMA
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#B0C7E9] hover:text-[#FCFEFD] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <p className="text-xs text-[#8297AC] text-center md:text-right">
            &copy; {new Date().getFullYear()} AIMA - Agencia para a Integracao, Migracoes e Asilo.
          </p>
        </div>
      </div>
    </footer>
  )
}
