import Link from 'next/link'

export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <p className="text-center text-2xl mb-4">Sign Up</p>
            <Link href="/">
                <button className="text-center text-white text-xl px-4 py-2 bg-blue-650 border border-solid border-blue-650 rounded-xl hover:bg-gray-100 hover:text-black transition-colors duration-300">Home</button>
            </Link>
        </div>
    )
}