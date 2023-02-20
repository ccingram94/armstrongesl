import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function IntermediateSections () {
    return (
        <div className="w-screen p-2 bg-gradient-to-r from-rose-600 to-pink-600 flex flex-col justify-center items-center text-center">
            <p className='text-2xl font-bold text-white p-2 m-2'>Intermediate Study Guides</p>
            <div className='flex flex-row flex-wrap max-w-4xl justify-center items-center text-rose-100'>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Education</h3>
                    <p className='text-sm max-w-sm p-2'>vocabulary and expressions related to education, including discussing academic programs, writing papers, and participating in classroom discussions</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Work and Business</h3>
                    <p className='text-sm max-w-sm p-2'>vocabulary and phrases related to work and business, including job interviews, writing emails and letters, and discussing workplace issues</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Culture and Society</h3>
                    <p className='text-sm max-w-sm p-2'>how to talk about culture and society, including discussing countries, government, current events, social issues, holidays, and traditions</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Media and Entertainment</h3>
                    <p className='text-sm max-w-sm p-2'>vocabulary and expressions related to media and entertainment, including discussing films, music, books, and other forms of popular culture</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Technology and the Internet</h3>
                    <p className='text-sm max-w-sm p-2'>how to talk about technology and the internet, including discussing computers, smartphones, online communication, and social media</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Advanced Grammar</h3>
                    <p className='text-sm max-w-sm p-2'> complex grammar concepts, such as advanced verb tenses, conditional sentences, reported speech, and passive voice</p>
                </div>

            </div>
        </div>
    ) 
}