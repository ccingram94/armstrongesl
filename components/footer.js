
export default function Footer () {
    return (
        <div className="w-screen p-2 bg-gradient-to-r from-rose-600 to-pink-600 flex flex-col justify-between text-center justify-center items-center relative bottom-0">
            <h1 className="font-bold text-xl lg:text-3xl text-violet-100 m-4">Mrs. Armstrong</h1>
            <div className="flex flex-row text-violet-300 m-4">
                <h2 className="font-bold mx-2 lg:p-2 bg-rose-500 rounded-xl">About</h2>
                <h2 className="font-bold mx-2 lg:p-2 bg-rose-500 rounded-xl">Contact</h2>
                <h3 className="font-bold mx-2 lg:p-2 bg-rose-500 rounded-xl">Lessons</h3>
            </div>
        </div>
    )
}