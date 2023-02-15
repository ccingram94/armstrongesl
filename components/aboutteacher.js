
import Image from "next/image"

export default function AboutTeacher () {
    return (
        <div className="w-screen p-2 bg-gradient-to-b from-pink-100 to-rose-100 flex flex-col flex-wrap justify-center items-center">

            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl lg:text-3xl font-bold text-rose-600 text-opacity-80 p-2 m-2 pt-12 relative">About Mrs. A</h2>
                <h3 className="text-md lg:text-lg text-rose-600 text-opacity-80 p-4 m-4 text-center max-w-xl relative">
                    Mrs. Armstrong is an ESL teacher living in Colorado.  
                    She holds a Bachelor of Arts degree from The University of Texas at Austin and three TEFL certificates.
                    She has been tutoring English as a second language since 2017.
                    She currently substitute teaches in a public school district with a student population that is over 40% ESL.
                </h3>
            </div>
                
                <div className="flex flex-row flex-wrap justify-center items-center text-center text-rose-600 text-opacity-80 m-2">
                    <div className="max-w-lg flex flex-col items-center m-2 p-2">
                        <div className="flex flex-col text-center justify-center m-2 p-2">
                            <p className="text-lg font-bold">Bachelor of Arts</p>
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