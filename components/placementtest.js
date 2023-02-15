
import Image from "next/image"
import Link from 'next/link'

export default function PlacementTest () {
    return (
        <div className="w-screen min-h-screen pt-12 bg-gradient-to-b from-rose-100 to-pink-100 flex flex-col items-center z-2">

            <div className="flex flex-col justify-center items-center text-center px-12 relative">
                <h1 className="text-6xl font-bold p-2 m-2 text-rose-600">English Placement Test</h1>
                <div className="max-w-lg text-md p-2 m-2 flex flex-col text-rose-700">
                    <p className="p-2">Welcome to our free online English language placement test!</p>
                    <p className="p-2">Our placement test is based on the internationally recognized Common European Framework of Reference for Languages (CEFR). It will test your proficiency in English and provide an instant score from A1 to C2 level proficiency in English.</p>
                </div>
                <Link href="/freeplacementtest">
                    <button className="p-4 m-2 drop-shadow-2xl max-w-fit rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 opacity-80 hover:opacity-100 text-xl font-bold text-rose-100 text-start transition-all">Begin Test</button>
                </Link>
                
            </div>
            <div className="p-2 m-2 flex flex-row flex-wrap justify-center items-center relative">


            </div>
        </div>
    )
}