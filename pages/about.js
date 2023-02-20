import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import AboutTeacher from '@/components/aboutteacher'
import HeroLevels from '@/components/herolevels'
import HeroHello from '@/components/herohello'
import HeroClasses from '@/components/heroclasses'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>Mrs. Armstrong English</title>
        <meta name="description" content="Mrs. Armstrong's ESL and English Study Guides" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-row flex-wrap min-h-screen">
        <AboutTeacher />
      </div>
      <Footer />
    </>
  )
}
