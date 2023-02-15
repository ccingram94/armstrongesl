
import Image from "next/image"
import Link from 'next/link'

export default function LearnLevels () {
    return (
        <div className="w-screen min-h-screen pt-12 bg-gradient-to-b from-rose-100 to-pink-100 flex flex-col items-center z-2">

            <div className="flex flex-col justify-center items-center text-center px-12 relative">
                <h1 className="text-6xl font-bold p-2 m-2 text-rose-600">Explore English!</h1>
                <Link href="/freeplacementtest">
                    <button className="p-4 m-2 drop-shadow-2xl max-w-fit rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 opacity-80 hover:opacity-100 text-xl font-bold text-rose-100 text-start transition-all">Free Placement Test</button>
                </Link>
                
            </div>
            <div className="p-2 m-2 flex flex-row flex-wrap justify-center items-center relative">
                <Link href="/learn/beginner">
                    <div className="flex flex-col justify-center items-center min-h-48 text-center border-2 border-rose-600 border-opacity-20 hover:border-opacity-80 transition-all rounded-xl">
                        <p className="text-xl text-rose-600 font-bold pt-6 m-2 ">Beginner</p>
                        <p className="text-sm text-rose-600 opacity-80"><i>CEFR A1 - A2</i></p>
                        <p className="text-xs max-w-xs text-rose-600 opacity-80 p-2 m-2">CEFR A1 and A2 are the beginner levels of the Common European Framework of Reference for Languages (CEFR). At these levels, students are introduced to basic vocabulary and grammar rules that enable them to communicate in simple, everyday situations.</p>
                    </div>
                </Link>
                <Link href="/learn/intermediate">
                    <div className="flex flex-col justify-center items-center p-2 m-2 min-h-48 text-center border-2 border-rose-600 border-opacity-20 hover:border-opacity-80 transition-all rounded-xl">
                        <p className="text-xl text-rose-600 font-bold pt-6 m-2 ">Intermediate</p>
                        <p className="text-sm text-rose-600 opacity-80 p-2"><i>CEFR B1 - B2</i></p>
                        <p className="text-xs max-w-xs text-rose-600 opacity-80 p-2 m-2">CEFR B1 and B2 are the intermediate levels of learning English. At these levels, students have progressed beyond the basics and can communicate in a wider range of situations and express their ideas with more fluency.</p>
                    </div>
                </Link>
                <Link href="/learn/advanced">
                    <div className="flex flex-col justify-center items-center p-2 m-2 min-h-48 text-center border-2 border-rose-600 border-opacity-20 hover:border-opacity-80 transition-all rounded-xl">
                        <p className="text-xl text-rose-600 font-bold pt-6 m-2 ">Advanced</p>
                        <p className="text-sm text-rose-600 opacity-80 p-2"><i>CEFR C1 - C2</i></p>
                        <p className="text-xs max-w-xs text-rose-600 opacity-80 p-2 m-2">CEFR C1 and C2 levels are the advanced levels of learning English.  At these levels, students are near-native level fluent and can communicate in a wide range of contexts, using specialized language in professional, academic, and social settings.</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}