'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import useCarouselApi from '@/hooks/useCarouselApi'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'

const ImageCarousel = () => {
  const { api, count, current, setApi } = useCarouselApi()

  return (
    <div className="w-full relative aspect-video">
      <Carousel
        opts={{
          align: 'start',
          watchDrag: false,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, i) => (
            <CarouselItem
              key={`${i}-image`}
              className="bg-cover bg-center aspect-video min-w-full"
              style={{ backgroundImage: `url(/${i + 1}.png)` }}
            />
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-1 mt-2 absolute bottom-4 left-1/2 -translate-x-1/2">
        {Array.from({ length: count }).map((_, i) => {
          return (
            <span
              key={i}
              className={cn(
                'w-1.5 h-1.5 bg-gray-200 block rounded-full hover:bg-gray-300 cursor-pointer',
                current === i + 1 ? 'bg-gray-500 hover:bg-gray-600' : ''
              )}
              onClick={() => {
                api?.scrollTo(i)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ImageCarousel
