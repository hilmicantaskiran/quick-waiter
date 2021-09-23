import Link from 'next/link'

export default function SignIn() {
    return (
        <>
            <div className="relative min-h-screen bg-gray-100">
                <div className="max-w-7xl flex flex-col mx-auto px-4 sm:px-6">
                    <header className="flex items-center justify-center lg:justify-start py-6 lg:space-x-10 lg:mb-10">
                        <div className="px-4 py-4 md:py-6">
                            <Link href="/">
                                <a className="font-semibold text-2xl lg:text-3xl text-blue-650">quick-waiter</a>
                            </Link>
                        </div>
                    </header>
                    <div className="flex max-w-7xl h-full lg:h-1/2 mx-auto flex-col lg:flex-row items-center justify-center lg:m-10">
                        <div className="flex flex-col items-center justify-center p-6 mx-auto lg:w-1/2 lg:border-r-2 border-gray-400">
                            <h1 className="font-medium text-center text-blue-650 text-3xl mb-6 lg:mt-6">Sign In</h1>
                            <form className="items-center justify-center lg:w-5/6">
                                <div className="relative mb-4">
                                    <label className="text-gray-800" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full mx-auto px-4 py-3 leading-snug text-gray-700 border rounded-xl appearance-none shadow-md focus:outline-none"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="text-gray-800" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full mx-auto px-4 py-3 leading-snug text-gray-700 border rounded-xl appearance-none shadow-md focus:outline-none"
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <a href="/forgotpassword" className="flex items-center justify-center text-center mb-4 hover:text-gray-600">Forgot your password</a>
                                <div className="text-center">
                                    <Link href="/">
                                        <button
                                            className="w-full lg:w-1/2 px-4 py-2 lg:mb-6 text-white bg-blue-650 border border-solid border-blue-650 rounded-full hover:bg-gray-100 hover:text-black focus:outline-none duration-300"
                                            type="button"
                                        >
                                            Sign In
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col mx-auto items-center justify-center border-t-2 lg:border-none border-gray-400 h-full lg:h-1/2 my-6">
                            <p className="font-medium text-center text-blue-650 text-3xl px-6 py-2 mt-6 lg:mt-0">Hello</p>
                            <p className="text-center lg:text-lg lg:px-6 py-2 mb-4">Enter your details and start journey with us</p>
                            <Link href="/signup">
                                <button
                                    className="w-1/2 lg:w-1/2 px-4 py-2 text-white bg-blue-650 border border-solid border-blue-650 rounded-full hover:bg-gray-100 hover:text-black focus:outline-none duration-300"
                                    type="button"
                                >
                                    Sign Up
                                </button>
                             </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}