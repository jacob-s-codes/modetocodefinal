"use client";
import React from 'react'
import Socialmedia from './Socialmedia'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Footer = () => {
    const time = new Date();
    const year = time.getFullYear();
    const pathname = usePathname();
    // const navBgClass = pathname === '/uhshacks' ? 'text-red-500' : 'text-blue-500';
    const textColorClass = pathname === '/uhshacks' ? 'hover:text-red-500' : 'hover:text-blue-500';

    return (
        <div>
            <hr className='border-2 border-black' />
            <footer className="max-w-[1800px] mx-auto px-8 py-12 font-extralight footer filter brightness-50 md:text-lg text-sm">
                <div className="flex flex-row justify-between items-center w-full">
                    {/* <div className="flex flex-row md:gap-x-12 gap-x-6 pr-12">
                        <div className="flex flex-col gap-y-2">
                            <p className="font-extrabold">ABOUT US</p>
                            <Link href="/" className={`${textColorClass}`}>Home</Link>
                            <Link href="/about" className={`${textColorClass}`}>About</Link>
                            <Link href="/meettheteam" className={`${textColorClass}`}>The Team</Link>
                            <Link href="/contact" className={`${textColorClass}`}>Contact</Link>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="font-extrabold">PAGES</p>
                            <Link href="/casestudies" className={`${textColorClass}`}>Case Studies</Link>
                            <Link href="/inthenews" className={`${textColorClass}`}>Press</Link>
                            <Link href="/learn" className={`${textColorClass}`}>Learn</Link>
                            <Link href="/uhshacks" className={`${textColorClass}`}>UHS Hacks</Link>
                        </div>

                    </div> */}
                    <div className="flex flex-row md:gap-x-12 gap-x-6 pr-12">
                        {/* ABOUT US */}
                        <div className="flex flex-col gap-y-2 group">
                            <p className={`font-extrabold transition-colors duration-200
                      ${pathname === '/uhshacks'
            ? 'group-hover:text-red-500'
            : 'group-hover:text-blue-500'}`}>
                                ABOUT US
                            </p>
                            <Link href="/" className={`${textColorClass} w-fit`}>Home</Link>
                            <Link href="/about" className={`${textColorClass} w-fit`}>About</Link>
                            <Link href="/meettheteam" className={`${textColorClass} w-fit`}>The Team</Link>
                            <Link href="/contact" className={`${textColorClass} w-fit`}>Contact</Link>
                        </div>

                        {/* PAGES */}
                        <div className="flex flex-col gap-y-2 group">
                            <p className={`font-extrabold transition-colors duration-200
                      ${pathname === '/uhshacks'
            ? 'group-hover:text-red-500'
            : 'group-hover:text-blue-500'}`}>
                                PAGES
                            </p>
                            <Link href="/casestudies" className={`${textColorClass} w-fit`}>Case Studies</Link>
                            <Link href="/inthenews" className={`${textColorClass} w-fit`}>Press</Link>
                            <Link href="/learn" className={`${textColorClass} w-fit`}>Learn</Link>
                            <Link href="/uhshacks" className={`${textColorClass} w-fit`}>UHS Hacks</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12 ">
                        <Socialmedia />
                        <div className="flex flex-row lg:gap-x-8 gap-x-3 text-right">
                            <p className="">Website built by <a href="https://github.com/jacob-s-codes" target='_blank'><span className={`${textColorClass} w-fit`}>Jacob Shaul</span></a></p>
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