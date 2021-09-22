import { useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className="relative min-h-screen bg-gray-100">
            <div className="max-w-7xl flex flex-col mx-auto px-4 sm:px-6 text-center">
                <header className="py-6 md:space-x-10">
                    <nav className="py-2 md:py-4">
                        <div className="container relative px-4 mx-auto md:flex md:items-center md:flex-row">
                            <div className="flex justify-between items-center">
                                <Link href="/">
                                    <a className="font-semibold text-2xl md:text-3xl text-blue-650">quick-waiter</a>
                                </Link>
                                <button 
                                    className="border-solid border-2 border-blue-650 px-3 py-1 rounded text-blue-650 hover:opacity-75 md:hidden"
                                    onClick={handleClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                            <div className={`${active ? '' : 'hidden'} relative w-full md:inline-flex md:flex-grow md:w-auto`}>
                                <div className="absolute left-0 bg-gray-100 rounded ring-2 ring-opacity-50 ring-gray-300 md:ring-opacity-0 p-2 md:relative md:inline-flex md:flex-row ml-auto md:w-auto w-full items-center flex flex-col mt-2 md:mt-0">
                                    <Link href="/signin">
                                        <a className="w-full md:w-auto p-2 mb-1 lg:px-3 md:mx-2 text-base text-blue-650 text-center border border-transparent rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
                                    </Link>
                                    <Link href="/signup">
                                        <a className="w-full md:w-auto p-2 mb-1 lg:px-4 md:mx-2 text-base text-white text-center border border-solid border-blue-650 rounded-lg bg-blue-650 hover:bg-gray-100 hover:text-black transition-colors duration-300">Sign Up</a>
                                    </Link>
                                </div>
                            </div>  
                        </div>
                    </nav>
                </header>
                <div className="flex max-w-7xl h-full mx-auto flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-center mx-auto px-2 lg:w-2/3">
                        <h1 className="font-medium text-center text-blue-650 text-3xl mb-6">Pricing Plans</h1>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-7xl h-full w-full mx-auto justify-between mb-6">
                    <div className="group w-full my-4 md:my-6 px-4">
                        <div className="flex flex-col md:flex-row justify-between border-2 border-transparent border-gray-400 rounded-xl bg-white text-left w-full mx-auto group-hover:border-blue-650 transition-colors duration-300">
                            <div className="flex flex-col items-center md:items-start py-6 md:py-10 mx-12 my-auto">
                                <h4 className="font-bold leading-tight text-4xl mb-2">Menu</h4>
                                <p className="text-gray-600 text-center">Show the menu with QR code</p>
                            </div>
                            <div className="flex flex-col items-center justify-end"> 
                                <div className="p-6">
                                    <h1 class="font-black text-color text-4xl lg:text-7xl pb-6 text-center">29₺</h1>
                                    <button className="bg-gray-600 text-xl text-white py-2 px-6 rounded-md group-hover:bg-blue-650 transition-colors duration-300">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group w-full my-4 md:my-6 px-4">
                        <div className="flex flex-col md:flex-row justify-between border-2 border-transparent border-gray-400 rounded-xl bg-white text-left w-full mx-auto group-hover:border-blue-650 transition-colors duration-300">
                            <div className="flex flex-col items-center md:items-start py-6 md:py-10 mx-12 my-auto">
                                <h4 className="font-bold leading-tight text-4xl mb-2">Menu & Order</h4>
                                <p className="text-gray-600 text-center">Show the menu with QR code and take order</p>
                            </div>
                            <div className="flex flex-col items-center justify-end"> 
                                <div className="p-6">
                                    <h1 class="font-black text-color text-4xl lg:text-7xl pb-6 text-center">59₺</h1>
                                    <button className="bg-gray-600 text-xl text-white py-2 px-6 rounded-md group-hover:bg-blue-650 transition-colors duration-300">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group w-full my-4 md:my-6 px-4">
                        <div className="flex flex-col md:flex-row justify-between border-2 border-transparent border-gray-400 rounded-xl bg-white text-left w-full mx-auto group-hover:border-blue-650 transition-colors duration-300">
                            <div className="flex flex-col items-center md:items-start py-6 md:py-10 mx-12 my-auto">
                                <h4 className="font-bold leading-tight text-center text-4xl mb-2">Menu, Order & Payment</h4>
                                <p className="text-gray-600 text-center">Show the menu with QR code, take order and take payment online</p>
                            </div>
                            <div className="flex flex-col items-center justify-end"> 
                                <div className="p-6">
                                    <h1 class="font-black text-color text-4xl lg:text-7xl pb-6 text-center">99₺</h1>
                                    <button className="bg-gray-600 text-xl text-white py-2 px-6 rounded-md group-hover:bg-blue-650 transition-colors duration-300">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}