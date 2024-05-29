'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import locales from '@/data/flats.json'
import useCarouselApi from '@/hooks/useCarouselApi'
import { cn } from '@/lib/utils'
import { formatToCurrency } from '@/utils/currency'
import { SquareArrowOutUpRight } from 'lucide-react'
import ImageCarousel from './_components/ImageCaroulsel'
import places from '@/data/place.json'
import { useMemo, useState } from 'react'
import { useLocation } from '@/store/location'

const Locations = () => {
  const { api, count, current, setApi } = useCarouselApi()
  const { city, setLocation, rooms } = useLocation((state) => ({
    city: state.city,
    setLocation: state.setLocation,
    rooms: state.rooms,
  }))

  const innerCity = city || 'Belo Horizonte'
  const carouselKey = `${city}-${rooms}`

  const filteredLocales = useMemo(() => {
    return locales.filter(
      (local) =>
        local.City === innerCity && (!!rooms ? local.Rooms >= rooms : true)
    )
  }, [innerCity, rooms])

  return (
    <section className="w-[min(94%,1248px)] mx-auto mt-20 pb-4 relative">
      <div className="flex items-center gap-2">
        <h2 className="text-gray5 text-2xl font-bold">Novos Anúncios em </h2>
        <Select
          value={innerCity}
          onValueChange={(city) => setLocation({ city })}
        >
          <SelectTrigger className="w-fit border-none gap-2  text-2xl font-bold outline-none focus:ring-transparent h-auto p-0 text-orange-dark [&>svg]:font-bold">
            <SelectValue placeholder="Todos os tipos" />
          </SelectTrigger>
          <SelectContent>
            {places.map((place) => (
              <SelectItem value={place.name} key={place.placeId}>
                {place.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Carousel
          className="flex flex-col gap-2"
          opts={{
            align: 'start',
            loop: true,
          }}
          setApi={setApi}
          key={carouselKey}
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
            {filteredLocales.map((local, i) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={i}>
                <Card className="overflow-hidden">
                  <ImageCarousel />

                  <CardContent className="p-4 flex flex-col gap-3">
                    <CardHeader className="p-0 space-y-1">
                      <CardTitle className="text-base text-black font-bold leading-4">
                        {local.Title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray2 leading-3">
                        {local.City}
                      </CardDescription>
                    </CardHeader>

                    <span className="text-gray3 text-sm leading-3">
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
