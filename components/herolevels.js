
import Image from "next/image"
import Link from 'next/link'

export default function HeroLevels () {
    return (
        <>
        <div className="w-screen pb-24 pt-12 lg:pt-24 bg-gradient-to-b from-white to-rose-200 flex flex-row flex-wrap justify-center items-center z-2">
            <div className="flex flex-col px-12">
                <h1 className="text-6xl font-bold p-2 m-2 text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-rose-600">English is Easy!</h1>
                <h2 className="text-3xl font-bold m-2 p-2 text-rose-600 text-opacity-80">free English study guides for ESL learners</h2>
                <Link href="/learn">
                    <button className="p-4 m-2 drop-shadow-2xl max-w-fit rounded-xl bg-gradient-to-r from-red-600 to-pink-600 via-rose-600 opacity-80 hover:opacity-100 text-xl font-bold text-rose-100 text-start transition-all">Explore</button>
                </Link>
                <Link href="/freeplacementtest">
                    <button className="p-4 m-2 drop-shadow-2xl max-w-fit rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 via-rose-600 opacity-80 hover:opacity-100 text-xl font-bold text-rose-100 text-start transition-all">Free Placement Test</button>
                </Link>
            </div>

            <div className="flex flex-col flex-wrap justify-center items-center content-center p-2 mt-12">

                <div className="flex flex-row flex-wrap justify-center items-center content-center p-2 mt-12">

                    <Link href="/learn/beginner">
                        <div className="flex flex-col text-center justify-center items-center relative p-2 m-4 opacity-90 hover:opacity-100 transition-all">
                            <svg viewBox="0 0 200 200 fill" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl h-60 w-36 overflow-visible">
                                <path fill="#FF0066" d="M56.4,-14.6C66.2,11.8,62.5,46.3,43.7,59.9C24.9,73.5,-8.9,66.1,-34.4,47.5C-60,28.9,-77.3,-0.9,-70.1,-23.7C-63,-46.4,-31.5,-62.1,-4.1,-60.8C23.3,-59.5,46.6,-41.1,56.4,-14.6Z" transform="translate(100 100),scale(1.5,2)" />
                            </svg>
                            <p className="absolute top-1/2 left-1/3 font-bold text-xl lg:text-xl text-rose-100">Beginner</p>
                        </div>
                    </Link>

                    <Link href="/learn/intermediate">
                        <div className="flex flex-col text-center justify-center items-center relative p-2 m-4 opacity-90 hover:opacity-100 transition-all">
                            <svg viewBox="0 0 200 200 fill" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl h-60 w-36 overflow-visible">
                                <path fill="#FF0066" d="M58.3,-2.7C58.3,27.5,29.1,55,-0.4,55C-30,55,-59.9,27.5,-59.9,-2.7C-59.9,-32.8,-30,-65.6,-0.4,-65.6C29.1,-65.6,58.3,-32.8,58.3,-2.7Z" transform="translate(100 100),scale(1.5,2)" />
                            </svg>
                            <div className="absolute top-1/3 left-1/3 font-bold text-xl lg:text-xl text-rose-100">
                                <p>Intermediate</p>
                            </div>
                        </div>  
                    </Link> 

                    <Link href="/learn/advanced">
                        <div className="flex flex-col text-center justify-center items-center relative p-2 m-4 opacity-90 hover:opacity-100 transition-all">
                            <svg viewBox="0 0 200 200 fill" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl h-60 w-36 overflow-visible">
                                <path fill="#FF0066" d="M63.4,-35.5C74.5,-17.5,70.4,10.4,57.3,33.9C44.2,57.4,22.1,76.6,0.2,76.5C-21.8,76.4,-43.5,57.1,-52.6,35.9C-61.7,14.6,-58.1,-8.4,-47.2,-26.4C-36.4,-44.3,-18.2,-57.2,4,-59.5C26.2,-61.8,52.4,-53.6,63.4,-35.5Z" transform="translate(100 100),scale(1.5,2)" />
                            </svg>
                            <p className="absolute top-1/2 left-1/3 font-bold text-xl lg:text-xl text-rose-100">Advanced</p>
                        </div>  
                    </Link>


                </div>
            </div>
        </div>
        <div className="z-1">
            <div className="z-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute'>
                <path fill="#FECDD3" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,106.7C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
            </div>
        </div>
        </>
    )
}