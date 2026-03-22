import { Container } from '@/components/ui/Container'
import BlurTitle from "@/components/ui/BlurTitle"

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-24">
      <BlurTitle delay={50}>
        <header className="max-w-full">
          <h1 className="title-primary text-7xl font-InstrumentSerifItalic text-balance">
            {title}
          </h1>
          <p className="mt-6 text-base font-mono body-secondary text-balance">
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
