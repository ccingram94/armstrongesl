import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'

export default function Header () {
    const [ top, showTop ] = useState(true)
    return (
        <>
    
        
        <div className="w-full lg:p-2 bg-white flex flex-col justify-center items-center drop-shadow-sm">
            <div className="lg:p-2 flex flex-row justify-between md:w-9/12">
                <Link href="/">
                    <h1 className="font-bold text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-rose-600 opacity-90 m-4">Mrs. A</h1>
                </Link>
                
                <div className="max-w-1/2 flex flex-row justify-center ">
                    <div className="flex flex-row items-center text-rose-600 lg:m-4">
                        <Link href="/learn">
                            <div className='flex flex-row justify-center items-center'>
                                <h2 className="font-bold mx-2 lg:p-2">Learn</h2>
                            </div>
                        </Link>

                        <Link href="/classes">
                            <h2 className="font-bold mx-2 lg:p-2">Classes</h2>
                        </Link>

                        <Link href="/about">
                            <h3 className="font-bold mx-2 lg:p-2">About</h3>
                        </Link>
                        
                        
                        <UserCircleIcon className="h-8 w-8 mx-2 text-rose-600"/>
                        
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
}