
import Image from "next/image"
import Link from 'next/link'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid"

export default function Flashcard () { 
    return (
        <div className="w-full h-full pb-24 bg-gradient-to-br from-rose-600 to-red-600 via-pink-600 flex flex-row flex-wrap justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center px-12 pt-6 lg:pt-12 w-full">
                <h1 className="text-xl lg:text-3xl font-bold p-2 m-2 text-white">Flashcards</h1>
                
                <div className="w-full max-w-2xl h-full bg-white bg-opacity-90 text-black text-opacity-80 rounded-xl drop-shadow-2xl p-2 m-2">
                    <p className="font-bold text-xl lg:text-3xl p-2 m-2">Vocabulary Word</p>
                </div>

                <div className="flex flex-row justify-center items-center text-center p-2 m-2">
                    <ArrowLeftCircleIcon className="text-white h-12 lg:h-24 opacity-80 hover:opacity-100 transition-all" />
                    <p className="font-bold p-2 m-2 text-white opacity-80">1/20</p>
                    <ArrowRightCircleIcon className="text-white h-12 lg:h-24 opacity-80 hover:opacity-100 transition-all" />
                </div>
            </div>
        </div>
    )
}