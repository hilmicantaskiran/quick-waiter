import { useState } from 'react'
import Link from 'next/link'
import Cards from '../components/cards'

export default function Home({ data }) {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <div className="relative bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                      <Link href="/pricing">
                        <a className="w-full md:w-auto p-2 mb-1 lg:px-3 md:mx-2 text-base text-gray-600 text-center rounded-lg hover:bg-gray-300 hover:text-gray-700 transition-colors">Pricing</a>
                      </Link>
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
          <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
            <div className="container mx-auto mb-1 flex px-5 py-2 md:py-10 w-auto md:flex-row flex-col-reverse items-center">
              <div className="lg:flex-grow md:w-1/2 md:pr-6 flex flex-col md:items-start md:text-left items-center">
                <h1 className="title-font md:text-5xl text-4xl mb-4 font-bold text-blue-650">Now easier to take orders from customers</h1>
                <p className="text-xl md:text-2xl mb-4 font-normal text-gray-700">A system where customers can place their own orders without the need for waiters to take orders.</p>
                <Link href="/signup">
                  <button 
                    className="border border-blue-650 bg-blue-650 px-6 py-2 mb-10 md:mb-0 rounded-lg text-white text-lg hover:bg-gray-100 hover:text-black transition-colors duration-300"
                    type="button"
                  >
                    Apply
                  </button>
                </Link>
              </div>
              <div className="center w-4/5 md:w-2/5 mb-10 md:mb-0">
                <img className="object-cover object-center rounded-xl bg-blue-800" alt="" src="/waiter.jpg"></img>
              </div>
            </div>
            <div className="container mx-auto mb-10 flex px-5 py-2 md:py-20 w-auto md:flex-row flex-col items-center">
              <div className="center w-4/5 md:w-2/5 mb-10 md:mb-0">
                <img className="object-cover object-center rounded-xl bg-blue-800" alt="" src="/qr-menu.jpg"></img>
              </div>
              <div className="lg:flex-grow md:w-1/2 md:pl-16 mb-10 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font md:text-5xl text-4xl mb-4 font-bold text-blue-650">Beutiful QR Code Digital Menus</h1>
                <p className="text-xl md:text-2xl font-bold">No app to download</p>
                <p className="text-xl md:text-2xl mb-4 font-bold">No hardware to install.</p>
                <ul className="list-disc list-inside leading-none text-left">
                  <li className="text-base md:text-lg">Great for food and beverage menus</li>
                  <li className="text-base md:text-lg">Optimized for smartphones and tablets</li>
                  <li className="text-base md:text-lg">Unlimited menu items, unlimited scans!</li>
                </ul>
              </div>
            </div>
            <div className="container mx-auto px-5 items-center flex flex-col">
              <div className="w-full md:w-auto items-center mb-10">
                <p className="text-center text-xl mb-4 font-medium">Restaurants Working With Us</p>
                <Cards restaurants={data} />
              </div>
            </div>
          </main>
          <footer className="flex flex-col items-center justify-center w-full flex-1 text-center border-t-2 border-gray-400">
            <div className="container flex-col mx-auto mb-1 flex px-5 py-2 w-auto items-center">
              <div className="flex h-24 w-24 md:h-36 md:w-36 p-6 mb-10 rounded-full bg-blue-650 mt-6 justify-center items-center">
                  <p className="text-center text-white text-xl md:text-2xl">quick waiter</p>
              </div>
              <div className="flex flex-1 flex-row items-center mb-10">
                <a href="https://www.facebook.com" className="px-4"> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="https://www.twitter.com" className="px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com" className="px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>  
              </div>
              <div className="w-full flex flex-1 flex-col md:flex-row items-center justify-between md:my-10">
                <a href="/about" className="text-center text-lg p-2 hover:text-gray-500">About Us</a>
                <a href="/contact" className="text-center text-lg p-2 hover:text-gray-500">Contact</a>
                <a href="/pricing" className="text-center text-lg p-2 hover:text-gray-500">Pricing</a>
                <a href="/termsofservice" className="text-center text-lg p-2 hover:text-gray-500">Terms of Service</a>
                <a href="/privacy" className="text-center text-lg p-2 hover:text-gray-500">Privacy Policy</a>
                <a href="/help" className="text-center text-lg p-2 hover:text-gray-500">Help Center</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://quick-waiter.vercel.app/api/restaurants')
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}