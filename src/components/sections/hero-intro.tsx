import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroInto() {
  return (
    <section className="mb-4 flex items-center justify-center ">
      <div className="z-10 max-w-4xl text-center">
        {/* Badge */}
        <Badge
          className="
            mb-6 inline-flex items-center gap-2
            rounded-full border border-border/60
            bg-background/60
            px-4 py-1.5
            text-sm text-muted-foreground
            backdrop-blur-md
          "
        >
          <img
            src="/apple.png"
            alt="Apple"
            className="w-4 h-4 opacity-80 dark:invert"
          />
          Apple Store · iOS Experience
        </Badge>

        {/* Heading */}
        <div className="text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight space-y-2">
          <h1>Discover the future of</h1>
          <h2 className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Apple Products
          </h2>
        </div>

        {/* Description */}
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Belanja produk Apple secara online dengan pengalaman iOS yang cepat,
          aman, dan dirancang untuk kesempurnaan di setiap detail.
        </p>

        {/* Actions */}
        <div className="mt-10 flex justify-center">
          <Button size="lg" className="group">
            Belanja Sekarang
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
