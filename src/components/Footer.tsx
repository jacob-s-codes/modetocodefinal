import React from 'react'
import Socialmedia from './Socialmedia'
import Link from 'next/link'

const Footer = () => {
    const time = new Date();
    const year = time.getFullYear();

  return (
    <div>
        <hr className='border-2 border-black'/>
        <footer className="max-w-[1800px] mx-auto px-8 py-12 font-extralight footer filter brightness-50 md:text-lg text-sm">
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row md:gap-x-12 gap-x-6 pr-12">
                    <div className="flex flex-col gap-y-2">
                        <p className="font-extrabold">ABOUT US</p>
                        <Link href="/" className="hover:text-blue-500">Home</Link>
                        <Link href="/about" className="hover:text-blue-500">About</Link>
                        <Link href="/meettheteam" className="hover:text-blue-500">The Team</Link>
                        <Link href="/contact" className="hover:text-blue-500">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="font-extrabold">PAGES</p>
                        <Link href="/casestudies" className="hover:text-blue-500">Case Studies</Link>
                        <Link href="/inthenews" className="hover:text-blue-500">Press</Link>
                        <Link href="/learn" className="hover:text-blue-500">Learn</Link>
                        <Link href="/uhshacks" className="hover:text-blue-500">UHS Hacks</Link>
                    </div>

                </div>
                <div className="flex flex-col gap-12 ">
                    <Socialmedia />
                    <div className="flex flex-row lg:gap-x-8 gap-x-3 text-right">
                        <p className="">Mode to Code, SF, CA</p>
                        <p>© {year} Mode to Code</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer