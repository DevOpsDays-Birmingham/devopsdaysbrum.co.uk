import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Sponsors } from '@/components/Sponsors'
import {Images} from "@/components/Images";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevOpsDays Birmingham- Community run technical conference</title>
        <meta
          name="description"
          content="DevOpsDays is a worldwide series of community run technical conferences covering topics of software development, IT infrastructure operations, and the intersection between them. It is run by volunteers from community, for the benefit of the community. We are not a commercial conference and we believe that our focus on serving the community creates a truly unique experience for both delegates and sponsors."
        />
      </Head>
      <Header />
      <main>
          <Hero />
          <CTA />
          {/*<Speakers />*/}
          {/*<Schedule />*/}
          <Images />
          <Sponsors />
          {/*<Newsletter />*/}
          <CTA />
      </main>
        <Footer />
    </>
  )
}
