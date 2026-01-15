'use client'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'

export function ThreeDMarqueeDemo() {
  const images = [
    'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
    'https://assets.aceternity.com/animated-modal.png',
    'https://assets.aceternity.com/animated-testimonials.webp',
    'https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png',
    'https://assets.aceternity.com/github-globe.png',
    'https://assets.aceternity.com/glare-card.png',
    'https://assets.aceternity.com/layout-grid.png',
    'https://assets.aceternity.com/flip-text.png',
    'https://assets.aceternity.com/hero-highlight.png',
    'https://assets.aceternity.com/carousel.webp',
    'https://assets.aceternity.com/placeholders-and-vanish-input.png',
    'https://assets.aceternity.com/shooting-stars-and-stars-background.png',
    'https://assets.aceternity.com/signup-form.png',
    'https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png',
    'https://assets.aceternity.com/spotlight-new.webp',
    'https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png',
    'https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png',
    'https://assets.aceternity.com/tabs.png',
    'https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png',
    'https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png',
    'https://assets.aceternity.com/glowing-effect.webp',
    'https://assets.aceternity.com/hover-border-gradient.png',
    'https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png',
    'https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png',
    'https://assets.aceternity.com/macbook-scroll.png',
    'https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png',
    'https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png',
    'https://assets.aceternity.com/multi-step-loader.png',
    'https://assets.aceternity.com/vortex.png',
    'https://assets.aceternity.com/wobble-card.png',
    'https://assets.aceternity.com/world-map.webp',
  ]

  return (
    <section className="px-4">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-105 w-180 rounded-full bg-linear-to-r from-neutral-200/40 via-neutral-300/20 to-neutral-200/40 blur-3xl dark:from-white/10 dark:via-white/5 dark:to-white/10" />
      </div>

      {/* MacBook-like frame */}
      <div className="relative rounded-[28px] border border-black/10 bg-white/70 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/70">
        {/* Top bar ala macOS */}
        <div className="flex items-center gap-2 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* Content */}
        <div className="overflow-hidden rounded-b-[28px]">
          <ThreeDMarquee images={images} />
        </div>
      </div>
    </section>
  )
}
