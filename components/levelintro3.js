
import Image from "next/image"
import Link from 'next/link'

export default function LevelIntro3 () {
    return (
        <div className="w-screen pb-24 bg-gradient-to-b from-white to-red-200 flex flex-row flex-wrap justify-center items-center z-2">

            <div className="flex flex-col px-12 pt-24 relative">
                <h1 className="text-6xl font-bold p-2 m-2 text-rose-600">Advanced</h1>
                <h2 className="text-3xl font-bold m-2 p-2 text-rose-600 text-opacity-80">CEFR C1 and C2</h2>
                <p className="text-sm m-2 p-2 text-rose-600 max-w-xl">
                CEFR C1 and C2 levels represent the advanced stage of learning English as a foreign language, where students have a high level of proficiency and are able to communicate fluently and accurately in a wide range of contexts. At these levels, students are able to handle complex tasks and understand specialized language in professional, academic, and social settings.
                </p>
                <p className="text-sm m-2 p-2 text-rose-600 max-w-xl">
                At CEFR C1 level, students are able to communicate with a high degree of fluency and accuracy, using a wide range of vocabulary and complex grammatical structures. They are able to understand and summarize complex texts, such as academic papers, research reports, and literary works, and write clear and well-structured essays, reports, and letters. They are also able to speak confidently and participate in debates and discussions, giving well-informed and nuanced opinions.
                </p>
                <p className="text-sm m-2 p-2 text-rose-600 max-w-xl">
                At CEFR C2 level, students are able to communicate at a near-native level of fluency and accuracy. They are able to understand and produce language that is nuanced, subtle, and culturally appropriate. They are able to handle complex tasks, such as negotiations, presentations, and public speaking, with ease and confidence. They are also able to analyze and evaluate complex texts, such as philosophical treatises, legal documents, and literary works, and produce original and insightful writing.
                </p>
            </div>

            <div className="flex flex-col flex-wrap justify-center items-center content-center p-2 mt-12">

                <div className="flex flex-row flex-wrap justify-center items-center content-center p-2 mt-12">

                    <Link href="/learn/beginner">
                        <div className="flex flex-col text-center justify-center items-center relative p-2 m-4 opacity-90 hover:opacity-100 transition-all">
                            <svg viewBox="0 0 200 200 fill" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl h-48 w-36 overflow-visible">
                                <path fill="#FF0066" d="M56.4,-14.6C66.2,11.8,62.5,46.3,43.7,59.9C24.9,73.5,-8.9,66.1,-34.4,47.5C-60,28.9,-77.3,-0.9,-70.1,-23.7C-63,-46.4,-31.5,-62.1,-4.1,-60.8C23.3,-59.5,46.6,-41.1,56.4,-14.6Z" transform="translate(100 100),scale(1.5,2)" />
                            </svg>
                            <p className="absolute top-1/2 left-1/3 font-bold text-xl lg:text-xl text-rose-100">Beginner</p>
                        </div>
                    </Link>

                    <Link href="/learn/intermediate">
                        <div className="flex flex-col text-center justify-center items-center relative p-2 m-4 opacity-90 hover:opacity-100 transition-all">
                            <svg viewBox="0 0 200 200 fill" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl h-48 w-36 overflow-visible">
                                <path fill="#FF0066" d="M58.3,-2.7C58.3,27.5,29.1,55,-0.4,55C-30,55,-59.9,27.5,-59.9,-2.7C-59.9,-32.8,-30,-65.6,-0.4,-65.6C29.1,-65.6,58.3,-32.8,58.3,-2.7Z" transform="translate(100 100),scale(1.5,2)" />
                            </svg>
                            <div className="absolute top-1/3 left-1/3 font-bold text-xl lg:text-xl text-rose-100">
                                <p>Intermediate</p>
                            </div>
                        </div>  
                    </Link> 

                    <Link href="/learn/advanced">
                        <div className="flex flex-col text-center justify-center items-center relative p-2 m-4 opacity-90 hover:opacity-100 transition-all">
                            <svg viewBox="0 0 200 200 fill" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl h-48 w-36 overflow-visible">
                                <path fill="#FF0066" d="M63.4,-35.5C74.5,-17.5,70.4,10.4,57.3,33.9C44.2,57.4,22.1,76.6,0.2,76.5C-21.8,76.4,-43.5,57.1,-52.6,35.9C-61.7,14.6,-58.1,-8.4,-47.2,-26.4C-36.4,-44.3,-18.2,-57.2,4,-59.5C26.2,-61.8,52.4,-53.6,63.4,-35.5Z" transform="translate(100 100),scale(1.5,2)" />
                            </svg>
                            <p className="absolute top-1/2 left-1/3 font-bold text-xl lg:text-xl text-rose-100">Advanced</p>
                        </div>  
                    </Link>


                </div>
            </div>

        </div>
    )
}