import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-dodblue-900" />
        <p className="mt-6 text-base text-dodblue-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} TechEventsBirmingham Limited. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
