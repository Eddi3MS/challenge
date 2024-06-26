import FindAPlace from './_sections/FindAPlace'
import Hero from './_sections/Hero'
import Locations from './_sections/Locations'

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Locations />
      <FindAPlace />
    </main>
  )
}

