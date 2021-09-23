import Link from 'next/link'

export default function SignUp() {
    return (
        <>
            <div className="relative min-h-screen bg-gray-100">
                <div className="max-w-7xl flex flex-col mx-auto px-4 sm:px-6">
                    <header className="flex items-center justify-center lg:justify-start py-6 lg:space-x-10">
                        <div className="px-4 py-4 md:py-6">
                            <Link href="/">
                                <a className="font-semibold text-2xl lg:text-3xl text-blue-650">quick-waiter</a>
                            </Link>
                        </div>
                    </header>
                    <div className="max-w-7xl mx-auto py-6 mb-10">
                        <h1 className="font-medium text-center text-blue-650 text-3xl mb-8">Sign Up</h1>
                        <form className="flex flex-col flex-wrap">
                            <div className="flex flex-col md:flex-row">
                                <div className="relative m-2 md:m-4">
                                    <label className="text-gray-800" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="w-full mx-auto px-4 py-3 leading-snug text-gray-700 border rounded-xl appearance-none shadow-md focus:outline-none"
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="relative m-2 md:m-4">
                                    <label className="text-gray-800" htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                        className="w-full mx-auto px-4 py-3 leading-snug text-gray-700 border rounded-xl appearance-none shadow-md focus:outline-none"
                                        id="username"
                                        type="text"
                                        placeholder="Username"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="relative m-2 md:m-4">
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
                                <div className="relative m-2 md:m-4">
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
                            </div>
                            <div className="">
                                <div className="relative m-2 md:m-4">
                                    <label className="text-gray-800" htmlFor="address">
                                        Address
                                    </label>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col md:flex-row">
                                            <input
                                                className="w-full mx-auto px-4 py-3 m-2 mr-1 leading-snug text-gray-700 border rounded-xl appearance-none shadow-md focus:outline-none"
                                                id="city"
                                                type="text"
                                                placeholder="City"
                                            />
                                            <input
                                                className="w-full mx-auto px-4 py-3 m-2 leading-snug text-gray-700 border rounded-xl appearance-none shadow-md focus:outline-none"
                                                id="state"
                                                type="text"
                                                placeholder="State"
                                            />
                                        </div>
                                        <input
                                            className="w-full mx-auto px-4 py-3 m-2 leading-snug text-gray-700 border rounded-xl appearance-none shadow-md focus:outline-none"
                                            id="streetAdress1"
                                            type="text"
                                            placeholder="Street Address"
                                        />
                                        <div className="flex flex-col md:flex-row">
                                            <input
                                                className="w-full mx-auto px-4 py-3 m-2 mr-1 leading-snug text-gray-700 border rounded-xl appearance-none shadow-md focus:outline-none"
                                                id="streetAdress2"
                                                type="text"
                                                placeholder="Street Address 2"
                                            />
                                            <input
                                                className="w-full mx-auto px-4 py-3 m-2 leading-snug text-gray-700 border rounded-xl appearance-none shadow-md focus:outline-none"
                                                id="postalCode"
                                                type="text"
                                                placeholder="Postal Code"
                                            />
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="text-center">
                                    <Link href="/">
                                        <button
                                            className="w-1/2 px-4 py-2 m-2 text-white bg-blue-650 border border-solid border-blue-650 rounded-full hover:bg-gray-100 hover:text-black focus:outline-none duration-300"
                                            type="button"
                                        >
                                            Submit
                                        </button>
                                    </Link>
                                </div>
                        </form>
                        <div className="flex flex-col mx-auto items-center justify-center border-t-2 border-gray-400 h-full lg:h-1/2 mt-6">
                            <p className="text-center lg:text-lg lg:px-6 py-2 m-4">Already have an account ?</p>
                            <Link href="/signin">
                                <button
                                    className="w-1/3 px-4 py-2 text-white bg-blue-650 border border-solid border-blue-650 rounded-full hover:bg-gray-100 hover:text-black focus:outline-none duration-300"
                                    type="button"
                                >
                                    Sign In
                                </button>
                             </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}