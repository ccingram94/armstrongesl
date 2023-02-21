
import Image from "next/image"
import Link from 'next/link'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export default function LevelIntro () { 
    return (
        <div className="w-full h-full pb-24 bg-gradient-to-b from-white to-red-200 flex flex-row flex-wrap justify-center items-center z-2">

            <div className="flex flex-col px-12 pt-24 relative">
                <h1 className="text-6xl font-bold p-2 m-2 text-rose-600">Beginner</h1>
                <h2 className="text-3xl font-bold m-2 p-2 text-rose-600 text-opacity-80">CEFR A1 and A2</h2>
                <p className="text-sm m-2 p-2 text-rose-600 max-w-xl">
                CEFR A1 and A2 are the beginner levels of the Common European Framework of Reference for Languages (CEFR). At these levels, students are introduced to basic vocabulary and grammar rules that enable them to communicate in simple, everyday situations.
                </p>
                <p className="text-sm m-2 p-2 text-rose-600 max-w-xl">
                At CEFR A1 level, students learn how to introduce themselves and others, talk about their daily routine, hobbies, and interests. They also learn how to order food and drinks at a restaurant, ask for directions, and make simple purchases at a store. They develop basic reading and writing skills to understand simple texts and write short messages and emails.
                </p>
                <p className="text-sm m-2 p-2 text-rose-600 max-w-xl">
                At CEFR A2 level, students build on the knowledge and skills learned at the A1 level and are able to communicate in more complex situations. They can talk about their experiences and describe their feelings and emotions. They learn how to express their opinions and preferences on various topics, such as food, travel, and entertainment. They also develop their reading and writing skills to understand short texts, such as emails and social media posts, and write short paragraphs and letters.
                </p>
            </div>

            <div className="rounded-xl p-2 m-2 bg-gradient-to-r from-rose-600 to-pink-600 flex flex-col justify-center items-center text-center">
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

        </div>
    )
}