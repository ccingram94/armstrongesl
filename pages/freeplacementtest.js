import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import AboutTeacher from '@/components/aboutteacher'
import HeroLevels from '@/components/herolevels'
import HeroHello from '@/components/herohello'
import HeroClasses from '@/components/heroclasses'
import LearnLevels from '@/components/learnlevels'
import PlacementTest from '@/components/placementtest'

const inter = Inter({ subsets: ['latin'] })

export default function FreePlacementTest() {
  return (
    <>
      <Head>
        <title>Mrs. Armstrong English</title>
        <meta name="description" content="Mrs. Armstrong's ESL and English Study Guides" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PlacementTest />
      <Footer />
    </>
  )
}
