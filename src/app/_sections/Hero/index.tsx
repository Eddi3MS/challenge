'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Bed, MapPin, Search } from 'lucide-react'
import { useState } from 'react'

const roomsOptions = [
  { name: 'Todos', value: '', id: 1 },
  { name: '1+', value: '1+', id: 2 },
  { name: '2+', value: '2+', id: 3 },
  { name: '3+', value: '3+', id: 4 },
  { name: '4+', value: '4+', id: 5 },
]

const Hero = () => {
  const [local, setLocal] = useState('')
  const [localPop, setLocalPop] = useState(false)
  const [rooms, setRooms] = useState('')
  const [roomsPop, setRoomsPop] = useState(false)

  return (
    <div className="md:h-[55vh] flex flex-col items-center justify-center gap-8 relative pb-4 md:pb-0">
      <div
        style={{ backgroundImage: 'url(/bg_hero.png)' }}
        className="absolute left-0 right-0 top-0 bg-cover bg-center -z-10 min-h-[173px] md:h-[55vh]"
      />
      <h1 className="text-white text-lg md:text-4xl font-bold w-full px-[20%] md:text-center min-h-[173px] md:min-h-0 flex items-center md:justify-center">
        Vende.
        <br className="block md:hidden" /> Aluga.
        <br className="block md:hidden" /> Conecta.
      </h1>
      <div className="md:border-2 w-[min(771px,98%)] md:rounded-full flex md:bg-background group flex-col gap-4 md:gap-0 md:flex-row">
        <div className="h-full relative flex-1 flex justify-between focus-within:shadow-lg p-[10px] rounded-lg md:bg-none bg-background md:rounded-full hover:bg-bg-dark group border md:border-none">
          <Label className="flex flex-col justify-between ml-8 flex-1">
            <span className="flex items-center gap-2">
              <MapPin size={24} />
              <span className="text-black font-bold text-sm">Localização</span>
            </span>
            <Input
              className="bg-inherit w-full"
              placeholder="Qual é a localização?"
              value={local}
              onChange={(e) => {
                const val = e.target.value
                setLocal(val)

                setLocalPop(!!val)
              }}
            />
          </Label>
          {localPop && (
            <Card className="absolute -bottom-1 translate-y-full left-0 right-0 z-[2]">
              <span className="text-sm block p-4">
                Busque por cidade, região, bairro ou código
              </span>

              <div
                className="flex gap-2 p-4 text-gray-500 hover:bg-gray-100"
                onClick={() => {
                  setLocal('Av 123, Eldorado, Contagem - MG')
                  setLocalPop(false)
                }}
              >
                <MapPin size={16} className="mt-[2px]" />
                <div>
                  <p>Av. 123</p>
                  <p className="text-xs">Eldorado, Contagem - MG</p>
                </div>
              </div>
            </Card>
          )}
        </div>

        <div className="w-[2px] bg-input my-[10px] hidden md:block group-focus-within:opacity-0 group-hover:opacity-0"></div>

        <div className="relative flex-1 flex justify-between focus-within:shadow-lg p-[10px] rounded-lg md:bg-none bg-background md:rounded-full hover:bg-bg-dark border md:border-none">
          <Label
            className="flex flex-col justify-between ml-8"
            onClick={() => setRoomsPop(true)}
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
          {roomsPop && (
            <Card className="absolute -bottom-1 translate-y-full left-0 right-0 space-y-4 p-4 bg-background z-[2]">
              <span className="text-sm block">Número de Quartos</span>

              <div className="flex gap-4">
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
                      setRoomsPop(false)
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
                  <SelectItem value="light">Compra</SelectItem>
                  <SelectItem value="dark">Venda</SelectItem>
                </SelectContent>
              </Select>
            </Card>
          )}
          <Button
            className={cn(
              'h-14 rounded-full transition-all w-14 gap-2 hidden md:flex',
              local ? 'w-auto' : ''
            )}
            disabled={!local}
          >
            <Search /> {local && <span>Buscar</span>}
          </Button>
        </div>

        <Button
          className="h-14 rounded-lg transition-all  gap-2 flex md:hidden w-full"
          disabled={!local}
        >
          <Search /> <span>Buscar Imóveis</span>
        </Button>
      </div>
    </div>
  )
}

export default Hero
