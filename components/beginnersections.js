import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function BeginnerSections () {
    return (
        <div className="w-screen p-2 bg-gradient-to-r from-rose-600 to-pink-600 flex flex-col justify-center items-center text-center">
            <p className='text-2xl font-bold text-white p-2 m-2'>Beginner Study Guides</p>
            <div className='flex flex-row flex-wrap max-w-4xl justify-center items-center text-rose-100'>
                
                <Link href="/learn/beginner/greetings">
                    <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl hover:bg-white hover:text-rose-800 transition-all'>
                        <h3 className='font-bold text-xl'>Greetings and Introductions</h3>
                        <p className='text-sm max-w-sm p-2'>basic phrases and vocabulary for introducing oneself and greeting others, such as "Hello", "Goodbye", "What's your name?", "My name is..."</p>
                    </div>
                </Link>
                

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl hover:bg-white hover:text-rose-800 transition-all'>
                    <h3 className='font-bold text-xl'>Numbers and Counting</h3>
                    <p className='text-sm max-w-sm p-2'>how to count and use numbers in English, including basic math operations, such as addition, subtraction, multiplication, and division</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl hover:bg-white hover:text-rose-800 transition-all'>
                    <h3 className='font-bold text-xl'>The Calendar, Weather, and Seasons</h3>
                    <p className='text-sm max-w-sm p-2'>how to talk about the date, the calendar, weekdays, weather and seasons, including describing the time and discussing the weather</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl hover:bg-white hover:text-rose-800 transition-all'>
                    <h3 className='font-bold text-xl'>Daily Routine and Activities</h3>
                    <p className='text-sm max-w-sm p-2'>how to discuss daily routines and activities like work, school, household chores, shopping, and hobbies</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl hover:bg-white hover:text-rose-800 transition-all'>
                    <h3 className='font-bold text-xl'>Food and Drink</h3>
                    <p className='text-sm max-w-sm p-2'>vocabulary and phrases related to food and drink, including daily meals, ordering food in a restaurant, and describing food preferences</p>
                </div>

                <div className='flex flex-col p-2 m-2 border-2 border-white rounded-xl hover:bg-white hover:text-rose-800 transition-all'>
                    <h3 className='font-bold text-xl'>Basic Grammar</h3>
                    <p className='text-sm max-w-sm p-2'>vocabulary and expressions related to family and relationships such as "mother", "father", "sister", "brother", "wife", or "husband"</p>
                </div>

            </div>
        </div>
    )
}