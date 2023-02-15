
import Image from "next/image"

export default function TEFLCerts () {
    return (
        <div className="w-screen p-2 bg-gradient-to-b from-indigo-300 to-rose-100 flex flex-col justify-center items-center">
            <h2 className="text-xl lg:text-3xl font-bold text-violet-700 p-2 m-2">Education</h2>
            <div className="flex flex-row flex-wrap justify-center items-center text-center text-violet-900 m-2">
                <div className="max-w-lg flex flex-col items-center m-2 p-2">
                    <div className="flex flex-col text-center justify-center m-2 p-2">
                        <p className="text-lg font-bold">Bachelor of Arts, History</p>
                        <p className="text-md opacity-80">The University of Texas at Austin</p>
                        <p className="text-md opacity-80">2012 - 2015</p>
                    </div>
                    <Image src="/utlogo.png" width={200} height={200} className="p-2 m-2 drop-shadow-2xl" />
                </div>
                <div className="max-w-lg flex flex-col items-center m-2 p-2">
                    <p className="text-lg font-bold p-2">120 Hour TEFL</p>
                    <p className="text-sm opacity-80 max-w-xs">120 Hour Certificate in Teaching English as a Foreign Language (issued 2018)</p>
                    <Image src="/tefl1.jpg" width={300} height={150} className="p-4 m-2 drop-shadow-2xl" />
                </div>
                <div className="max-w-lg flex flex-col items-center m-2 p-2">
                    <p className="text-lg font-bold p-2">160 Hour TEFL</p>
                    <p className="text-sm opacity-80 max-w-xs">160 Hour Certificate in Advanced Teaching English as a Foreign Language (issued 2018)</p>
                    <Image src="/tefl2.jpg" width={300} height={150} className="p-4 m-2 drop-shadow-2xl" />
                </div>
                <div className="max-w-lg flex flex-col items-center m-2 p-2">
                    <p className="text-lg font-bold p-2">40 Hour TEYL</p>
                    <p className="text-sm opacity-80 max-w-xs">40 Hour Certificate in Teaching English to Young Learners (issued 2018)</p>
                    <Image src="/teyl.jpg" width={300} height={150} className="p-4 m-2 drop-shadow-2xl" />
                </div>
            </div>
        </div>
    )
}