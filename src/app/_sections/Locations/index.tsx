'use client'
import locales from '@/data/flats.json'
import { useLocation } from '@/store/location'
import { useMemo } from 'react'
import LocationSelect from './_components/LocationSelect'
import LocationsCarousel from './_components/LocationsCarousel'

const Locations = () => {
  const { city, rooms } = useLocation((state) => ({
    city: state.city,
    rooms: state.rooms,
  }))

  const innerCity = city || 'Belo Horizonte'
  const renderKey = `${city}-${rooms}` // força o carousel a atualizar o estado

  const filteredLocales = useMemo(() => {
    return locales.filter(
      (local) =>
        local.City === innerCity && (!!rooms ? local.Rooms >= rooms : true)
    )
  }, [innerCity, rooms])

  return (
    <section
      className="w-[min(94%,1248px)] mx-auto mt-20 pb-4 relative"
      id="locations"
    >
      <div className="flex items-center gap-2">
        <h2 className="text-gray5 text-2xl font-bold">Novos Anúncios em </h2>
        <LocationSelect />
      </div>

      <LocationsCarousel locales={filteredLocales} renderKey={renderKey} />
    </section>
  )
}

export default Locations
