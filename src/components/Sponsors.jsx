import Image from 'next/image'

import { Container } from '@/components/Container'
import SponsorUs from "@/components/SponsorUs";
import { sponsors } from '../eventConfig'

export function Sponsors() {
    return (
        <section id="sponsors" aria-label="Sponsors" >
            <Container>
                {sponsors.length > 0 && (
                    <>
                        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-dodblue-900 sm:text-5xl">
                            Current sponsors for our event.
                        </h2>
                        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
                            {sponsors.map((sponsor) => (
                                <div
                                    key={sponsor.name}
                                    className="flex items-center justify-center"
                                >
                                    <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
                                </div>
                            ))}
                        </div>
                    </>
                )}
                <SponsorUs />
            </Container>
        </section>
    )
}
