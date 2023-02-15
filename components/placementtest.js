
import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'

export default function PlacementTest () {

    const questions = [
        {
            questionText: 'How are you today?',
            answerOptions: [
                {answerText: 'We went shopping.', isCorrect: false,},
                {answerText: 'I am happy.', isCorrect: true,},
                {answerText: 'It is cold outside today.', isCorrect: false,},
                {answerText: 'We are students.', isCorrect: false,},
                
            ],
            level: 'A1',
        },
        {
            questionText: 'Which sentence uses the correct form of the verb "to be"?',
            answerOptions: [
                {answerText: 'You was at the store yesterday.', isCorrect: false,},
                {answerText: 'I am studying English.', isCorrect: true,},
                {answerText: 'She were tired after work.', isCorrect: false,},
                {answerText: 'We am happy to be here.', isCorrect: false,},
                
            ],
            level: 'A2',
        },
        {
            questionText: 'Which sentence is correct?',
            answerOptions: [
                {answerText: 'She have a new car.', isCorrect: false,},
                {answerText: 'We have been here for two hours.', isCorrect: true,},
                {answerText: 'He have a meeting at 3 PM.', isCorrect: false,},
                {answerText: 'They has three children..', isCorrect: false,},
                
            ],
            level: 'A2',
        },
    ]

    const [begin, setBegin] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }


    return (
        <div className="w-screen min-h-screen pt-12 bg-gradient-to-b from-rose-100 to-pink-100 flex flex-col items-center z-2">
            {!begin &&
                <div className="flex flex-col justify-center items-center text-center px-12 relative">
                    <h1 className="text-6xl font-bold p-2 m-2 text-rose-600">English Placement Test</h1>
                    <div className="max-w-lg text-md p-2 m-2 flex flex-col text-rose-700">
                        <p className="p-2">Welcome to our free online English language placement test!</p>
                        <p className="p-2">Our placement test is based on the internationally recognized Common European Framework of Reference for Languages (CEFR). It will test your proficiency in English and provide an instant score from A1 to C2 level proficiency in English.  The questions will range from very easy to very difficult.</p>
                    </div>
                    <button onClick={() => setBegin(true)} className="p-4 m-2 drop-shadow-2xl max-w-fit rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 opacity-80 hover:opacity-100 text-xl font-bold text-rose-100 text-start transition-all">Begin Test</button>
                </div>
            }
            {begin &&
                <div className="flex flex-col justify-center items-center text-center px-12 relative">
                    <h1 className="text-6xl font-bold p-2 m-2 text-rose-600">English Placement Test</h1>
                    <div className="w-full text-md p-2 m-2 flex flex-col justify-center items-center text-rose-700 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl text-white">
                        <h3 className="font-bold text-xl lg:text-3xl p-2 m-2">
                            {questions[currentQuestion].questionText}
                        </h3>
                        <div className="p-2 m-2 flex flex-col text-rose-600">
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} className="drop-shadow-2xl bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl w-fit p-4 m-2 opacity-80 hover:opacity-100 transition-all">{answerOption.answerText}</button>
                            ))}
                        </div>
                    </div>
                    <button className="p-4 m-2 drop-shadow-2xl max-w-fit rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 opacity-80 hover:opacity-100 text-xl font-bold text-rose-100 text-start transition-all">Submit</button>
                </div>
            }
        </div>
    )
}