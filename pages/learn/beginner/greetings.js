import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Flashcard from '@/components/flashcard'

const inter = Inter({ subsets: ['latin'] })

export default function Greetings() {
  return (
    <>
      <Head>
        <title>Mrs. Armstrong English</title>
        <meta name="description" content="Mrs. Armstrong's ESL and English Study Guides" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-full h-full pb-24 bg-gradient-to-b from-white to-red-200 flex flex-row flex-wrap justify-center items-center z-2">
        <div className="flex flex-col px-12 pt-24 relative">
            <h1 className="text-6xl font-bold p-2 m-2 text-rose-600">Greetings and Introductions</h1>
            <h2 className="text-3xl font-bold m-2 p-2 text-rose-600 text-opacity-80">CEFR A1 and A2</h2>
            <p className="text-sm m-2 p-2 text-rose-600 max-w-xl">
            CEFR A1 and A2 are the beginner levels of the Common European Framework of Reference for Languages (CEFR). At these levels, students are introduced to basic vocabulary and grammar rules that enable them to communicate in simple, everyday situations.
            </p>
          </div>
        </div>
      <Flashcard />
      <Footer />
    </>
  )
}
