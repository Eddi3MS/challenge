import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import places from '@/data/place.json'
import { useLocation } from '@/store/location'

const LocationSelect = () => {
  const { city, setLocation } = useLocation((state) => ({
    city: state.city,
    setLocation: state.setLocation,
  }))

  const innerCity = city || 'Belo Horizonte'

  return (
    <Select value={innerCity} onValueChange={(city) => setLocation({ city })}>
      <SelectTrigger className="w-fit border-none gap-2  text-lg md:text-2xl font-bold outline-none focus:ring-transparent h-auto p-0 text-orange-dark [&>svg]:font-bold">
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
  )
}

export default LocationSelect
