import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'

export default function TopHeader () {
    const [ top, showTop ] = useState(true);
    if (top) return (
        <div className='w-full flex flex-row flex-wrap justify-center items-center font-bold bg-gradient-to-r from-pink-600 to-red-600 via-rose-600'>
            <p className='p-2 text-rose-100'>Explore our new English proficiency test: </p>
            <Link href="/freeplacementtest">
                <button className='bg-rose-800 hover:bg-rose-100 transition-all drop-shadow-2xl text-white hover:text-rose-800 rounded-xl m-2'>
                    <p className='p-2'>Free Test</p>
                </button>
            </Link>
            <XMarkIcon onClick={() => { showTop(false);}} className='text-rose-900 h-6 w-6 m-2 hover:bg-rose-100 hover:rounded-full transition-all '/>
        </div>
    )
}