'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLocation } from '@/store/location'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import LocationSearch from './_components/LocationSearch'
import RoomsSearch from './_components/RoomsSearch'

const Hero = () => {
  const setLocation = useLocation((state) => state.setLocation)

  const [locale, setLocale] = useState('')
  const [localeOpen, setLocaleOpen] = useState(false)
  const [rooms, setRooms] = useState('')
  const [roomsOpen, setRoomsOpen] = useState(false)

  const router = useRouter()

  const handleSearch = () => {
    const city = locale.trim().split(',')[0]
    setLocation({
      city,
      rooms: rooms ? Number(rooms) : undefined,
    })

    router.push('#locations')
  }

  return (
    <section className="md:h-[55vh] flex flex-col items-center justify-center gap-8 relative pb-4 md:pb-0">
      <div
        style={{ backgroundImage: 'url(/bg_hero.png)' }}
        className="absolute left-0 right-0 top-0 bg-cover bg-center -z-10 min-h-[173px] md:h-[55vh]"
      />
      <h1 className="text-white text-lg md:text-4xl font-bold w-full px-[20%] md:text-center min-h-[173px] md:min-h-0 flex items-center md:justify-center">
        Vende.
        <br className="block md:hidden" /> Aluga.
        <br className="block md:hidden" /> Conecta.
      </h1>
      <div className="md:border-2 w-[min(771px,94%)] md:rounded-full flex md:bg-background group flex-col gap-4 md:gap-0 md:flex-row">
        <LocationSearch
          locale={locale}
          setLocale={setLocale}
          open={localeOpen}
          setOpen={setLocaleOpen}
        />

        <div
          className={cn(
            'w-[2px] bg-input my-[10px] hidden md:block group-hover:opacity-0',
            (localeOpen || roomsOpen) && 'opacity-0'
          )}
        />

        <RoomsSearch
          open={roomsOpen}
          setOpen={setRoomsOpen}
          handleSearch={handleSearch}
          searchEnable={!!locale}
          rooms={rooms}
          setRooms={setRooms}
        />

        <Button
          className="h-14 rounded-lg transition-all  gap-2 flex md:hidden w-full"
          disabled={!locale}
          onClick={handleSearch}
          aria-label="buscar imóveis"
        >
          <Search /> <span>Buscar Imóveis</span>
        </Button>
      </div>
    </section>
  )
}

export default Hero
