'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import locales from '@/data/flats.json'
import useCarouselApi from '@/hooks/useCarouselApi'
import { cn } from '@/lib/utils'
import { formatToCurrency } from '@/utils/currency'
import { ChevronDown, SquareArrowOutUpRight } from 'lucide-react'
import ImageCarousel from './_components/ImageCaroulsel'

const Locations = () => {
  const { api, count, current, setApi } = useCarouselApi()

  return (
    <section className="w-[min(94%,1248px)] mx-auto mt-20 pb-4 relative">
      <h2>
        Novos Anúncios em{' '}
        <span>
          Belo Horizonte <ChevronDown />
        </span>
      </h2>

      <div>
        <Carousel
          className="flex flex-col gap-2"
          opts={{
            align: 'start',
            loop: true,
          }}
          setApi={setApi}
        >
          <div className="flex justify-between">
            <a
              href="#"
              className="text-link flex gap-2 items-center hover:brightness-110"
            >
              Ver todos os imóveis
              <SquareArrowOutUpRight size={16} fontWeight={'bold'} />
            </a>
            <div className="flex items-center gap-2">
              <CarouselPrevious
                variant="outline-gray"
                className="static -translate-x-0 -translate-y-0"
              />
              <CarouselNext
                variant="outline-gray"
                className="static -translate-x-0 -translate-y-0"
              />
            </div>
          </div>
          <CarouselContent className="pb-2">
            {locales
              .filter((local) => local.City === 'Belo Horizonte')
              .map((local, i) => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={i}>
                  <Card className="overflow-hidden">
                    <ImageCarousel />

                    <CardContent className="p-4 flex flex-col gap-4">
                      <CardTitle className="text-base text-black font-bold">
                        {local.Title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray2">
                        {local.City}
                      </CardDescription>

                      <span className="text-gray3">
                        {local.Rooms} {`quarto${local.Rooms > 1 ? 's' : ''}`}
                      </span>

                      <ul className="flex gap-2">
                        {local.Tags.map((tag) => (
                          <li
                            key={tag}
                            className="bg-gray0 rounded-full text-gray4 text-xs px-[6px] py[2px]"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <span className="text-xl font-bold text-orange-lighter">
                        {formatToCurrency(local.Price)}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
          </CarouselContent>

          <div className="flex justify-center gap-1 mt-2">
            {Array.from({ length: count }).map((_, i) => {
              return (
                <span
                  key={i}
                  className={cn(
                    'w-2 h-2 bg-gray-200 block rounded-full hover:bg-gray-300 cursor-pointer',
                    current === i + 1 ? 'bg-gray-500 hover:bg-gray-600' : ''
                  )}
                  onClick={() => {
                    api?.scrollTo(i)
                  }}
                />
              )
            })}
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Locations
