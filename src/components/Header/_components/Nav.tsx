'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { HTMLAttributes } from 'react'

const Nav = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav className={cn('py-5 gap-10 items-center flex', className)}>
      <a href="#" className="hover:brightness-75 transition-colors">
        Imobiliárias
      </a>
      <a href="#" className="hover:brightness-75 transition-colors">
        Quero me Associar
      </a>
      <a href="#" className="flex hover:brightness-75 transition-colors">
        Sobre{' '}
        <ChevronDown className="text-gray-500 hover:brightness-75 transition-colors" />
      </a>
      <a href="#" className="hover:brightness-75 transition-colors">
        Blog
      </a>
      <div className="gap-8 flex-col-reverse items-center flex lg:hidden">
        <Button variant="outline">Anunciar Imóvel</Button>
        <a href="#" className="hover:brightness-75 transition-colors">
          Entrar
        </a>
      </div>
    </nav>
  )
}

export default Nav
