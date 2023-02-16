
import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
            questionText: 'My favorite animal is a _______.',
            answerOptions: [
                {answerText: 'car', isCorrect: false,},
                {answerText: 'dog', isCorrect: true,},
                {answerText: 'bicycle', isCorrect: false,},
                {answerText: 'table', isCorrect: false,},
                
            ],
            level: 'A1',
        },
        {
            questionText: 'What is the opposite of hot?',
            answerOptions: [
                {answerText: 'big', isCorrect: false,},
                {answerText: 'cold', isCorrect: true,},
                {answerText: 'small', isCorrect: false,},
                {answerText: 'fast', isCorrect: false,},
                
            ],
            level: 'A1',
        },
        {
            questionText: 'I like to drink ________ in the morning.',
            answerOptions: [
                {answerText: 'socks', isCorrect: false,},
                {answerText: 'milk', isCorrect: true,},
                {answerText: 'chair', isCorrect: false,},
                {answerText: 'phone', isCorrect: false,},
                
            ],
            level: 'A1',
        },
        {
            questionText: 'Today is _______.',
            answerOptions: [
                {answerText: 'January', isCorrect: false,},
                {answerText: 'Tuesday', isCorrect: true,},
                {answerText: 'next week', isCorrect: false,},
                {answerText: 'yearly', isCorrect: false,},
                
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
        {
            questionText: "You're not coming with us, ___________?",
            answerOptions: [
                {answerText: ' do you?', isCorrect: false,},
                {answerText: ' are you?', isCorrect: true,},
                {answerText: ' will you?', isCorrect: false,},
                {answerText: ' can you?', isCorrect: false,},
                
            ],
            level: 'A2',
        },
        {
            questionText: "Which sentence is correct?",
            answerOptions: [
                {answerText: "She don't like pizza.", isCorrect: false,},
                {answerText: 'I have never been to London before.', isCorrect: true,},
                {answerText: 'They was late for the meeting.', isCorrect: false,},
                {answerText: "He don't have any siblings.", isCorrect: false,},
                
            ],
            level: 'A2',
        },
        {
            questionText: "I ___________ my friend yesterday.",
            answerOptions: [
                {answerText: "see", isCorrect: false,},
                {answerText: 'saw', isCorrect: true,},
                {answerText: 'seen', isCorrect: false,},
                {answerText: "seeing", isCorrect: false,},
                
            ],
            level: 'A2',
        },
        {
            questionText: "I'm afraid I can't come to your party on Saturday because I ________ to work.",
            answerOptions: [
                {answerText: "had", isCorrect: false,},
                {answerText: 'have', isCorrect: true,},
                {answerText: 'has', isCorrect: false,},
                {answerText: "will have", isCorrect: false,},
                
            ],
            level: 'B1',
        },
        {
            questionText: "Which sentence is in the correct order?",
            answerOptions: [
                {answerText: " Movies I usually watch on weekends.", isCorrect: false,},
                {answerText: 'On weekends I usually watch movies.', isCorrect: true,},
                {answerText: 'On weekends usually movies I watch.', isCorrect: false,},
                {answerText: "Usually I watch movies on weekends.", isCorrect: false,},
                
            ],
            level: 'B1',
        },
        {
            questionText: "She's really good _______ playing the piano.",
            answerOptions: [
                {answerText: "on", isCorrect: false,},
                {answerText: 'at', isCorrect: true,},
                {answerText: 'in', isCorrect: false,},
                {answerText: "by", isCorrect: false,},
                
            ],
            level: 'B1',
        },
        {
            questionText: "I'm going to the store __________ foot.",
            answerOptions: [
                {answerText: "with", isCorrect: false,},
                {answerText: 'on', isCorrect: true,},
                {answerText: 'for', isCorrect: false,},
                {answerText: "to", isCorrect: false,},
                
            ],
            level: 'B1',
        },
        {
            questionText: "I usually take the bus to work, but today I'm going to _______ instead.",
            answerOptions: [
                {answerText: "walked", isCorrect: false,},
                {answerText: 'walk', isCorrect: true,},
                {answerText: 'walking', isCorrect: false,},
                {answerText: "walks", isCorrect: false,},
                
            ],
            level: 'B1',
        },
        {
            questionText: "The government has implemented new policies to ________ the country's economy.",
            answerOptions: [
                {answerText: "demonstrate", isCorrect: false,},
                {answerText: 'stimulate', isCorrect: true,},
                {answerText: 'instigate', isCorrect: false,},
                {answerText: "distress", isCorrect: false,},
                
            ],
            level: 'B2',
        },
        {
            questionText: "The company has decided to ___________ its marketing strategy in order to attract a younger audience.",
            answerOptions: [
                {answerText: "return", isCorrect: false,},
                {answerText: 'revise', isCorrect: true,},
                {answerText: 'resolve', isCorrect: false,},
                {answerText: "recede", isCorrect: false,},
                
            ],
            level: 'B2',
        },
        {
            questionText: "The concert tickets that I ordered online _______ arrived yet.",
            answerOptions: [
                {answerText: "will not", isCorrect: false,},
                {answerText: 'have not', isCorrect: true,},
                {answerText: 'do not', isCorrect: false,},
                {answerText: "can not", isCorrect: false,},
                
            ],
            level: 'B2',
        },
        {
            questionText: "The new restaurant in town has _______ prices, but the food is excellent.",
            answerOptions: [
                {answerText: "blunt", isCorrect: false,},
                {answerText: 'steep', isCorrect: true,},
                {answerText: 'sour', isCorrect: false,},
                {answerText: "dense", isCorrect: false,},
                
            ],
            level: 'B2',
        },
        {
            questionText: "The company has decided to _______ a new product next year.",
            answerOptions: [
                {answerText: "launder", isCorrect: false,},
                {answerText: 'launch', isCorrect: true,},
                {answerText: 'lurch', isCorrect: false,},
                {answerText: "let", isCorrect: false,},
                
            ],
            level: 'B2',
        },
        {
            questionText: "Her argument was so _______ that no one dared to challenge it.",
            answerOptions: [
                {answerText: "convoluted", isCorrect: false,},
                {answerText: 'coherent', isCorrect: true,},
                {answerText: 'concave', isCorrect: false,},
                {answerText: "contradictory", isCorrect: false,},
                
            ],
            level: 'C1',
        },
        {
            questionText: "If I _____ you, I would take that job.",
            answerOptions: [
                {answerText: "was", isCorrect: false,},
                {answerText: 'were', isCorrect: true,},
                {answerText: 'am', isCorrect: false,},
                {answerText: "will be", isCorrect: false,},
                
            ],
            level: 'C1',
        },
        {
            questionText: "Choose the correct sentence.",
            answerOptions: [
                {answerText: "He likes hiking, swimming, and to ride his bike.", isCorrect: false,},
                {answerText: 'She enjoys reading, writing, and listening to music.', isCorrect: true,},
                {answerText: 'They decided to eat at the Italian restaurant, to watch a movie, and taking a walk.', isCorrect: false,},
                {answerText: "She is a talented musician, she is smart, and a skilled athlete.", isCorrect: false,},
                
            ],
            level: 'C1',
        },
        {
            questionText: "The new movie, ________ has already won several awards, is based on a true story.",
            answerOptions: [
                {answerText: "who", isCorrect: false,},
                {answerText: 'which', isCorrect: true,},
                {answerText: 'whom', isCorrect: false,},
                {answerText: "that", isCorrect: false,},
                
            ],
            level: 'C1',
        },
        {
            questionText: "Choose the INCORRECT sentence.",
            answerOptions: [
                {answerText: "Having finished the report, the computer crashed before I could save it.", isCorrect: false,},
                {answerText: 'Walking down the street, the trees looked beautiful in the morning light.', isCorrect: true,},
                {answerText: 'By using the new software, the project was completed ahead of schedule.', isCorrect: false,},
                {answerText: " Running late, the car was driven as fast as possible to the airport. ", isCorrect: false,},
                
            ],
            level: 'C1',
        },
        {
            questionText: "Which sentence is correct?",
            answerOptions: [
                {answerText: " The president's speech was inspiring, thoughtful, and he spoke from the heart.", isCorrect: false,},
                {answerText: "The company's new marketing strategy involved reducing costs, increasing sales, and to develop new products.", isCorrect: true,},
                {answerText: 'The new employee was expected to work hard, be a team player, and good communication skills.', isCorrect: false,},
                {answerText: "The researcher had excellent credentials, a good degree, and thoughtful.", isCorrect: false,},
                
            ],
            level: 'C2',
        },
        {
            questionText: "I was impressed by the ___________ of the speakers at the conference.",
            answerOptions: [
                {answerText: "evolution", isCorrect: false,},
                {answerText: "elocution", isCorrect: true,},
                {answerText: "emulation", isCorrect: false,},
                {answerText: "extrusion", isCorrect: false,},
                
            ],
            level: 'C2',
        },
        {
            questionText: "Which sentence uses inversion correctly for emphasis?",
            answerOptions: [
                {answerText: "Such a talented musician I have seen perform rarely.", isCorrect: false,},
                {answerText: "Rarely have I seen such a talented musician perform.", isCorrect: true,},
                {answerText: "I have seen rarely such a talented musician perform.", isCorrect: false,},
                {answerText: "I have rarely seen such a talented musician perform.", isCorrect: false,},
                
            ],
            level: 'C2',
        },
        {
            questionText: "She is the only person in the department who can _______ Mandarin fluently.",
            answerOptions: [
                {answerText: "talk", isCorrect: false,},
                {answerText: "speak", isCorrect: true,},
                {answerText: "say", isCorrect: false,},
                {answerText: "tell", isCorrect: false,},
                
            ],
            level: 'C2',
        },
        {
            questionText: "The _______ of this artwork is truly remarkable.",
            answerOptions: [
                {answerText: "aesthete", isCorrect: false,},
                {answerText: "aesthetic", isCorrect: true,},
                {answerText: "aesthetist", isCorrect: false,},
                {answerText: "aesthetically", isCorrect: false,},
                
            ],
            level: 'C2',
        },
    ]

    const [begin, setBegin] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [cefr, setCEFR] = useState(null);

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

    const percentageScore = ((100 * score)/30);

    useEffect(() => {
        if (score < 5) {
            setCEFR('A1');
        } else if (score < 10) {
            setCEFR('A2');
        } else if (score < 15) {
            setCEFR('B1');
        } else if (score < 20) {
            setCEFR('B2');
        } else if (score <= 25) {
            setCEFR('C1');
        } else if (score > 25) {
            setCEFR('C2');
        }
    }, [score])


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
                    {!showScore && 
                        <div className="w-full text-md p-2 m-2 flex flex-col justify-center items-center text-rose-700 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl text-white">
                            <h3 className="font-bold text-xl lg:text-3xl p-2 m-2">
                                Question { currentQuestion + 1 } of 30
                            </h3>
                            <h3 className="font-bold text-xl lg:text-3xl p-2 m-2">
                                {questions[currentQuestion].questionText}
                            </h3>
                            <div className="p-2 m-2 flex flex-col text-rose-600">
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} className="drop-shadow-2xl bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl w-fit p-4 m-2 opacity-80 hover:opacity-100 transition-all">{answerOption.answerText}</button>
                                ))}
                            </div>
                        </div>
                    }
                    {showScore && 
                    <div className="w-full text-md p-2 m-2 flex flex-col justify-center items-center text-rose-700 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl text-white">
                        <h3 className="font-bold text-xl lg:text-3xl p-2 m-2">
                            Result
                        </h3>
                        <h3 className="font-bold text-lg lg:text-3xl p-2 m-2">
                            {parseInt(percentageScore)} %
                        </h3>
                        <h3 className="font-bold text-lg lg:text-3xl p-2 m-2">
                            {score} questions correct out of 30
                        </h3>
                        <h3 className="font-bold text-lg lg:text-3xl p-2 m-2">
                             CEFR Level: { cefr }
                        </h3>
                    </div>
                    }
                </div>
            }
        </div>
    )
}