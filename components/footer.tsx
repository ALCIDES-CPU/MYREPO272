"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#2D0E47] text-white mt-auto">
      {/* Partners Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs font-medium text-center mb-6 text-white/50 uppercase tracking-widest">
            Apoios e Financiamento
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R%20PT-UsUcqcgTWpGh4Iuh8XZV15jxd2SMVO.png",
                alt: "Republica Portuguesa",
                width: 180,
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CPT%202020-iUPMLKqARDRBGg9FoaJRBuVTEXAwP6.png",
                alt: "COMPETE 2020",
                width: 180,
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C%20UE-o96TqErBlA6hJycCPqLKPRkRASwPca.png",
                alt: "Uniao Europeia - Fundo Social Europeu",
                width: 200,
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PT%202020-oaiSRvVwOROeJBbLK7jKQAov01GkNU.png",
                alt: "Portugal 2020",
                width: 280,
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aima_horizontal_cor-rIl9RarT6CEu1ZKBjIgyK63jrgQiBj.png",
                alt: "AIMA",
                width: 200,
              },
            ].map((partner, i) => (
              <div
                key={i}
                className={`bg-white rounded-lg p-3 hover:shadow-md transition-shadow ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={50}
                  className="h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIMA%20WHIT-m7VFlS1VuK9sFQyvUg8OT2SLKeKqA8.png"
              alt="AIMA Logo"
              width={160}
              height={48}
              className="h-10 w-auto mb-3"
            />
            <p className="text-white/50 leading-relaxed text-sm max-w-md">
              Plataforma oficial da AIMA destinada a agilizacao do processo de legalizacao em Portugal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Links</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/servicos", label: "Tipos de Servicos" },
                { href: "/faq", label: "Perguntas Frequentes" },
                { href: "/contactos", label: "Contactos" },
                { href: "/agendar", label: "Agendar Atendimento" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Contacto</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/50">
              <li>info@servicosaima.com</li>
              <li>+351 808 202 653</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} AIMA - Agencia para a Integracao, Migracoes e Asilo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
