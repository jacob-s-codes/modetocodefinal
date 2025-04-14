import React from 'react'
import Socialmedia from './Socialmedia'

const Footer = () => {
  return (
    <div>
        <hr className='border-2 border-black'/>
        <footer className="max-w-[1800px] mx-auto px-8 py-12 font-extralight footer filter brightness-50 ">
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row lg:gap-x-12 gap-x-10 pr-12">
                    <div className="flex flex-col gap-y-2">
                        <p className="font-extrabold">ABOUT US</p>
                        <a href="./about.html" className="hover:text-blue-500">About</a>
                        <a href="./theteam.html" className="hover:text-blue-500">The Team</a>
                        <a href="./contact.html" className="hover:text-blue-500">Contact</a>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="font-extrabold">PAGES</p>
                        <a href="./index.html" className="hover:text-blue-500">Home</a>
                        <a href="./casestudies.html" className="hover:text-blue-500">Case studies</a>
                        <a href="./learn.html" className="hover:text-blue-500">Learn</a>
                    </div>

                </div>
                <div className="flex flex-col gap-12 ">
                    <Socialmedia />
                    <div className="flex flex-row lg:gap-x-8 gap-x-3 text-right">
                        <p className="">Mode to Code, SF, CA</p>
                        <p>© 2025 Mode to Code</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer