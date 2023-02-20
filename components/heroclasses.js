
import Image from "next/image"
import Head from "next/head"

export default function HeroClasses () {
    return (
        <>
        <Head>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </Head>
        <div className="w-full h-full p-2 bg-gradient-to-br from-rose-600 to-red-600 via-rose-600 flex flex-col flex-wrap justify-center items-center relative">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl lg:text-6xl font-bold p-2 m-2 pt-6 lg:pt-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-red-200">Classes</h2>
                <h3 className="text-md lg:text-lg text-rose-100 text-opacity-80 p-4 m-4 text-center max-w-xl">
                    You can book an English class here:
                </h3>
                <div className="h-96 w-72 calendly-inline-widget" data-url="https://calendly.com/constanceingram94"></div>    
            </div>
        </div>
        
        </>
    )
}