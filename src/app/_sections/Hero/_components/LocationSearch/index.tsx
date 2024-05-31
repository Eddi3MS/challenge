import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { MapPin } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'
import places from '@/data/place.json'

type LocationSearch = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  locale: string
  setLocale: Dispatch<SetStateAction<string>>
}

const LocationSearch = ({
  open,
  setOpen,
  locale,
  setLocale,
}: LocationSearch) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'flex flex-col justify-between flex-1 hover:bg-gray0 p-[10px] pl-8 md:rounded-full rounded-lg md:bg-none bg-background border md:border-none',
            open && 'shadow-lg'
          )}
        >
          <span className="flex items-center gap-2">
            <MapPin size={24} />
            <span className="text-black font-bold text-sm">Localização</span>
          </span>
          <Input
            className="bg-inherit w-full truncate"
            placeholder="Qual é a localização?"
            defaultValue={locale}
            readOnly
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <span className="text-sm block p-4">
          Busque por cidade, região, bairro ou código
        </span>

        {places.map((place) => (
          <div
            key={place.placeId}
            className="flex gap-2 p-4 text-gray-500 hover:bg-gray-100"
            onClick={() => {
              setLocale(`${place.name}, ${place.state.shortname}`)
              setOpen(false)
            }}
          >
            <MapPin size={16} className="" />

            <div>
              <p className="text-xs">
                {place.name}, {place.state.name}
              </p>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}

export default LocationSearch
