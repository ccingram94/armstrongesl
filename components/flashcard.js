
import Image from "next/image"
import Link from 'next/link'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid"
import vocabulary from "@/data"
import { useState } from 'react'

export default function Flashcard () { 
    const [ card, setCard ] = useState(0);
    return (
        <div className="w-full h-full pb-24 bg-gradient-to-br from-rose-600 to-red-600 via-pink-600 flex flex-row flex-wrap justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center px-12 pt-6 lg:pt-12 w-full">
                <h1 className="text-xl lg:text-3xl font-bold p-2 m-2 text-white">Flashcards</h1>
                <div className="flex justify-center items-center w-full h-full h-52 lg:h-72 max-w-2xl bg-white bg-opacity-90 text-black text-opacity-80 rounded-xl drop-shadow-2xl p-2 m-2">
                    <p className="font-bold text-xl lg:text-3xl p-2 m-2">{vocabulary[0].wordlist[card]}</p>
                </div>
                <div className="flex flex-row justify-center items-center text-center p-2 m-2">
                    <ArrowLeftCircleIcon onClick={() => {if (card > 0) setCard(card - 1)}} className="text-white h-12 lg:h-24 opacity-80 hover:opacity-100 transition-all" />
                    <p className="font-bold p-2 m-2 text-white opacity-80">{card + 1} / {vocabulary[0].wordlist.length}</p>
                    <ArrowRightCircleIcon onClick={() => {if (card < vocabulary[0].wordlist.length - 1) setCard(card + 1)}} className="text-white h-12 lg:h-24 opacity-80 hover:opacity-100 transition-all" />
                </div>
            </div>
        </div>
    )
}