import { Container } from '@/components/ui/Container'
import BlurTitle from "@/components/ui/BlurTitle"

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-24">
      <BlurTitle delay={50}>
        <header className="max-w-full">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-InstrumentSerif text-white leading-none text-balance">
            {title}
          </h1>
          <p className="mt-6 text-sm md:text-base text-zinc-300 font-pixel leading-relaxed max-w-2xl tracking-wide">
            {intro}
          </p>
        </header>
      </BlurTitle>
      <BlurTitle delay={150}>
        <div className="mt-16 sm:mt-20">{children}</div>
      </BlurTitle>
    </Container>
  )
}
