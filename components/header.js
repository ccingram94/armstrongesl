import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Header () {
    return (
        <div className="w-screen p-4 bg-rose-300 flex flex-row justify-center">
            <div className="p-4 flex flex-row justify-between md:w-9/12">
                <Link href="/">
                    <h1 className="font-bold text-xl lg:text-3xl text-rose-600 opacity-90 m-4">Mrs. A</h1>
                </Link>
                
                <div className="max-w-1/2 flex flex-row justify-center">
                    <div className="flex flex-row items-center text-rose-600 m-4">
                        <Link href="/learn">
                            <div className='flex flex-row justify-center items-center'>
                                <h2 className="font-bold mx-2 lg:p-2">Learn</h2>
                            </div>
                        </Link>

                        <h2 className="font-bold mx-2 lg:p-2">Classes</h2>

                        <Link href="/about">
                            <h3 className="font-bold mx-2 lg:p-2">About</h3>
                        </Link>
                        
                        
                        <UserCircleIcon className="h-8 w-8 mx-2 text-rose-600"/>
                        <h2 className='max-2 sm:p-1 invisible sm:visible font-bold bg-rose-600 bg-opacity-10 hover:bg-rose-600 hover:bg-opacity-20 transition-all rounded-xl sm:visible'>🇺🇸 EN</h2>
                    </div> 
                </div>
            </div>
        </div>
    )
}