import Balancer from 'react-wrap-balancer'

import { Container } from '@/components/ui/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-full">
        <h1 className="title-primary">
          <Balancer className="text-6xl font-serif">{title}</Balancer>
        </h1>
        <p className="mt-6 text-base font-mono body-secondary">
          <Balancer>{intro}</Balancer>
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
