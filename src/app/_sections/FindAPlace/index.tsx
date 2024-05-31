import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DollarSign, HomeIcon, KeyRound } from 'lucide-react'
import React from 'react'

const FindAPlace = () => {
  return (
    <section className="bg-gray0 pt-[72px] pb-[88px]">
      <div className="grid grid-cols-2 w-[min(94%,1248px)] mx-auto">
        <div>
          <h2 className="font-semibold text-6xl mb-12">
            Encontre um Lugar <br /> que é a sua cara
          </h2>
          <p className="text-xl text-gray1 max-w-lg">
            A Netimóveis te oferece uma experiência ágil e segura na hora de
            comprar ou alugar seu imóvel. Seja de maneira digital ou física,
            fazemos a diferença neste momento tão importante que é decidir um
            lar.
          </p>
        </div>
        <div className="flex justify-end">
          <Tabs
            defaultValue="rent"
            className="w-[513px] bg-background rounded-[16px] overflow-hidden"
          >
            <TabsList className="border-b w-full">
              <TabsTrigger value="rent" asChild>
                <div className="flex flex-col flex-1 items-center gap-1.5 group pt-4 cursor-pointer">
                  <KeyRound className="text-zinc-500" size={24} />
                  <span className="text-center text-zinc-500 group-data-[state=active]:text-gray2 hover:text-gray2 font-bold border-transparent border-b-2 px-5 pb-3  group-data-[state=active]:border-orange-dark">
                    Alugar <br />
                    Imóvel
                  </span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="buy" asChild>
                <div className="flex flex-col flex-1 items-center gap-1.5 group pt-4 cursor-pointer">
                  <DollarSign className="text-zinc-500" size={24} />
                  <span className="text-center text-zinc-500 group-data-[state=active]:text-gray2 hover:text-gray2 font-bold border-transparent border-b-2 px-5 pb-3  group-data-[state=active]:border-orange-dark">
                    Comprar <br />
                    Imóvel
                  </span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="post" asChild>
                <div className="flex flex-col flex-1 items-center gap-1.5 group pt-4 cursor-pointer">
                  <HomeIcon className="text-zinc-500" size={24} />
                  <span className="text-center text-zinc-500 group-data-[state=active]:text-gray2 hover:text-gray2 font-bold border-transparent border-b-2 px-5 pb-3  group-data-[state=active]:border-orange-dark">
                    Anunciar <br />
                    Imóvel
                  </span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="rent" className="px-10 py-12">
              <h3 className="mb-4 font-bold text-3xl text-gray5">
                Alugue sem complicação
              </h3>
              <p className="text-gray1 leading-tight mb-10">
                Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis
                unde omnis iste natus error sit.
              </p>

              <Button
                variant="outline"
                className="rounded-lg mb-11 h-12 font-semibold"
              >
                Ver Imóveis para Alugar
              </Button>

              <a
                href="#"
                className="flex text-gray1 hover:text-purple-dark underline underline-offset-[6px] mb-[18px] text-sm"
              >
                Veja como Alugar sem Fiador
              </a>
              <a
                href="#"
                className="flex text-gray1 hover:text-purple-dark underline underline-offset-[6px] text-sm"
              >
                Saiba como funciona o Aluguel da NetMóveis
              </a>
            </TabsContent>
            <TabsContent value="buy" className="px-10 py-12">
              <h3 className="mb-4 font-bold text-3xl text-gray5">
                Compre com Segurança
              </h3>
              <p className="text-gray1 leading-tight mb-10">
                Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis
                unde omnis iste natus error sit.
              </p>

              <Button
                variant="outline"
                className="rounded-lg mb-11 h-12 font-semibold"
              >
                Ver Imóveis para Comprar
              </Button>

              <a
                href="#"
                className="flex text-gray1 hover:text-purple-dark underline underline-offset-[6px] mb-[18px] text-sm"
              >
                Simule seu Financiamento
              </a>
              <a
                href="#"
                className="flex text-gray1 hover:text-purple-dark underline underline-offset-[6px] text-sm"
              >
                Saiba como funciona a Compra na NetImóveis
              </a>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default FindAPlace
