import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function AdvancedSections () {
    return (
        <div className="w-screen p-2 bg-gradient-to-r from-rose-600 to-pink-600 flex flex-col justify-center items-center text-center">
            <p className='text-2xl font-bold text-white p-2 m-2'>Advanced Study Guides</p>
            <div className='flex flex-row flex-wrap max-w-4xl justify-center items-center text-rose-100'>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Advanced Writing</h3>
                    <p className='text-sm max-w-sm p-2'>advanced writing skills, including academic writing, professional writing, creative writing, and writing for various genres and media</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Advanced Vocabulary</h3>
                    <p className='text-sm max-w-sm p-2'>advanced vocabulary, including academic and technical language, idiomatic expressions, and collocations</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Advanced Grammar</h3>
                    <p className='text-sm max-w-sm p-2'>advanced grammar concepts, such as complex sentence structures, advanced verb forms, and more advanced aspects of sentence construction</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Test Preparation</h3>
                    <p className='text-sm max-w-sm p-2'>strategies and exercises for standardized tests, such as the TOEFL or IELTS, to help advanced learners fine-tune their skills and increase their chances of success</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Culture and Literature</h3>
                    <p className='text-sm max-w-sm p-2'>in-depth discussion of cultural and societal issues and the study of English literature, including analyzing famous English literary works, understanding literary devices, and discussing themes and motifs</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl'>
                    <h3 className='font-bold text-xl'>Science, Business, and Technology</h3>
                    <p className='text-sm max-w-sm p-2'>advanced business, financial, scientific and technical language, including topics such as engineering, medicine, computer science, and environmental studies</p>
                </div>

            </div>
        </div>
    )
}