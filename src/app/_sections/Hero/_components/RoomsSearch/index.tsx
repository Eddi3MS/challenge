import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Bed, MapPin, Search } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'
import places from '@/data/place.json'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

type RoomsSearch = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  rooms: string
  setRooms: Dispatch<SetStateAction<string>>
  searchEnable: boolean
  handleSearch: VoidFunction
}

const roomsOptions = [
  { name: 'Todos', value: '', id: 1 },
  { name: '1+', value: '1', id: 2 },
  { name: '2+', value: '2', id: 3 },
  { name: '3+', value: '3', id: 4 },
  { name: '4+', value: '4', id: 5 },
]

const RoomsSearch = ({
  open,
  setOpen,
  rooms,
  setRooms,
  searchEnable,
  handleSearch,
}: RoomsSearch) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative flex-1 flex justify-between items-center">
          <Label
            className={cn(
              'flex flex-col justify-between flex-1 hover:bg-gray0 p-[10px] pl-8 md:rounded-full rounded-lg md:bg-none bg-background border md:border-none',
              open && 'shadow-lg'
            )}
          >
            <span className="flex items-center gap-2">
              <Bed size={24} />
              <span className="text-black font-bold text-sm">
                Nº de Quartos
              </span>
            </span>
            <Input
              className="bg-inherit"
              placeholder="Quantos Quartos?"
              readOnly
              defaultValue={rooms}
            />
          </Label>

          <Button
            className={cn(
              'h-14 rounded-full transition-all w-14 gap-2 hidden md:flex absolute right-[10px]',
              searchEnable ? 'w-auto' : ''
            )}
            disabled={!searchEnable}
            onClick={handleSearch}
          >
            <Search /> {searchEnable && <span>Buscar</span>}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="space-y-4 p-4">
        <span className="text-sm block">Número de Quartos</span>

        <div className="flex gap-4 flex-wrap">
          {roomsOptions.map((r) => (
            <Button
              key={r.id}
              variant={
                rooms === r.name || (!rooms && !r.value)
                  ? 'outline'
                  : 'outline-gray'
              }
              className={cn(
                'h-[42px] rounded-full',
                r.name !== 'Todos' ? ' w-[42px]' : ''
              )}
              onClick={() => {
                setRooms(r.value)
                setOpen(false)
              }}
            >
              {r.name}
            </Button>
          ))}
        </div>

        <div className="h-px bg-gray-300"></div>

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Todos os tipos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sell">Compra</SelectItem>
            <SelectItem value="rent">Venda</SelectItem>
          </SelectContent>
        </Select>
      </PopoverContent>
    </Popover>
  )
}

export default RoomsSearch
