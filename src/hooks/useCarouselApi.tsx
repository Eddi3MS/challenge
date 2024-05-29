import { CarouselApi } from '@/components/ui/carousel'
import React, { useState } from 'react'

const useCarouselApi = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return { api, setApi, current, count }
}

export default useCarouselApi
