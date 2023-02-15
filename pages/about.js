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
      <div className="z-1">
        <div className="z-1 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute'>
            <path fill="#fda4af" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,106.7C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-row flex-wrap min-h-screen">
        <AboutTeacher />
      </div>
      <Footer />
    </>
  )
}
