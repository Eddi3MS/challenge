'use client'

import { cn } from '@/lib/utils'
import { Facebook, Instagram, Linkedin, MenuIcon, Youtube } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Footer = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const doc = document.querySelector('body')
    if (!doc) return

    if (open) {
      doc.style.overflow = 'hidden'
    } else {
      doc.style.overflow = 'initial'
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <footer className="py-3 flex items-center bg-orange-lighter">
      <div className="flex justify-between items-center w-[min(94%,1248px)] mx-auto text-white flex-col lg:flex-row gap-y-4">
        <Image
          src="/logo_footer.png"
          width={153}
          height={38}
          alt="Netimóveis"
          className="h-[38px]"
        />
        <div className="text-center text-xs flex flex-col gap-2">
          <p>
            © Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <a href="#" className="hover:text-purple-dark transition-all">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-purple-dark transition-all">
              Termos de uso
            </a>
            <a href="#" className="hover:text-purple-dark transition-all">
              LGPD
            </a>
            <span>Versão: 25/10/2021</span>
          </div>
        </div>

        <div className="flex gap-8">
          <a href="#">
            <Instagram
              size={32}
              className="hover:text-purple-dark transition-all"
            />
          </a>
          <a href="#">
            <Facebook
              size={32}
              className="hover:text-purple-dark transition-all"
            />
          </a>
          <a href="#">
            <Linkedin
              size={32}
              className="hover:text-purple-dark transition-all"
            />
          </a>
          <a href="#">
            <Youtube
              size={32}
              className="hover:text-purple-dark transition-all"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
