'use client'

import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Nav from './_components/Nav'
import Image from 'next/image'

const Header = () => {
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
    <>
      <Nav
        className={cn(
          'lg:hidden',
          open
            ? 'fixed inset-0 z-10 bg-background flex-col justify-center'
            : 'hidden'
        )}
      />
      <header className="px-4 sticky left-0 right-0 top-0 bg-background z-20 flex items-center">
        <div className="flex justify-between items-center w-[min(98%,1420px)] mx-auto">
          <div className="flex gap-12 items-center">
            <Image
              src="/logo.png"
              width={169}
              height={42}
              alt="Netimóveis"
              className="h-[42px]"
            />

            <Nav className="hidden lg:flex w-[min(98%,1170px)] mx-auto" />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden flex items-center justify-center my-2"
            onClick={() => setOpen((curr) => !curr)}
          >
            <MenuIcon />
          </Button>
          <div className="gap-8 items-center hidden lg:flex">
            <Button variant="outline">Anunciar Imóvel</Button>
            <a href="#" className="hover:brightness-75 transition-colors">
              Entrar
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
