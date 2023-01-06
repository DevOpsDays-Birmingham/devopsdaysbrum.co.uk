import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
// import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-grey-50">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-dodblue-700 sm:text-7xl">
            DevOpsDays Birmingham a community run technical conference
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-dodblue-900">
            <p>
              DevOpsDays is a worldwide series of community run technical conferences covering topics of software development, IT infrastructure operations, and the intersection between them. It is run by volunteers from community, for the benefit of the community. We are not a commercial conference and we believe that our focus on serving the community creates a truly unique experience for both delegates and sponsors.
            </p>
            <p>
              At DevOpsDays Birmingham UK we will be hosting a two day conference with a mix of talks, workshops and networking opportunities. We will be covering a wide range of topics including cloud, security, automation, infrastructure, culture and more.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '~18'],
              ['People Attending', '350'],
              ['Venue', 'Millennium Point'],
              ['Location', 'Curzon St, Birmingham B4 7XG'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-dodblue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-dodblue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
