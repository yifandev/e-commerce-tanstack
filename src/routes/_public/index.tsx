import CategoryCard from '@/components/sections/CategoryCard'
import { ThreeDMarqueeDemo } from '@/components/sections/hero-3d'
import HeroInto from '@/components/sections/hero-intro'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/')({ component: App })

function App() {
  return (
    <div className="">
      <HeroInto />
      <ThreeDMarqueeDemo />
      <CategoryCard />
    </div>
  )
}
