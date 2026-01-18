import Link from 'next/link'
import React from 'react'

const Casestudiestoptwo = () => {
    return (
        <div ><div className="flex xl:flex-row-reverse flex-col gap-x-12 items-center justify-between z-20 py-24">
            <img src="/hackathon/fullimage.jpg" alt="UHS Hacks Image" className="w-4xl xl:mb-0 mb-4 rounded-xl shadow-darkbg shadow-2xl z-30" />
            <div className="flex flex-col gap-y-8 relative z-10">
                <div className="absolute -z-10 inset-0 scale-x-200 xl:scale-150 xl:scale-y-125 lg:scale-y-105 md:scale-150 scale-125 bg-blue-300 -skew-y-3 rounded-xl xl:-translate-x-12 -translate-x-8 lg:translate-y-0 -translate-y-6"></div>
                <h2 className="lg:text-5xl text-3xl uppercase font-bold">Mode to Code Hosts UHS Hacks</h2>
                <p className="font-light lg:text-2xl text-xl">UHS Hacks is a hackathon organized by Jacob, founder of Mode to Code. UHS Hacks...</p>
                <Link href="/casestudies/uhshacks" target="_blank" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                    <span
                        className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white uppercase">Read more</span>
                </Link>
            </div>
        </div>

            <div className="flex xl:flex-row flex-col gap-x-12 items-center justify-between z-20">
                <img src="/teachingimg22.jpg" alt="UHS Hacks Image" className="w-4xl rounded-xl shadow-darkbg shadow-2xl z-30 xl:mb-0 mb-4" />
                <div className="flex flex-col items-end gap-y-8 relative z-10 text-right">
                    <div className="absolute -z-10 inset-0 scale-x-200 xl:scale-150 xl:scale-y-125 lg:scale-y-105 md:scale-150 scale-125 bg-blue-300 -skew-y-3 rounded-xl xl:-translate-x-12 -translate-x-8 lg:translate-y-0 -translate-y-6"></div>
                    <h2 className="lg:text-5xl text-3xl uppercase font-bold">Mode to Code at Rhoda Goldman Plaza</h2>
                    <p className="font-light lg:text-2xl text-xl">In March 2025, Mode to Code began teaching classes at Rhoda Goldman Plaza, an assisted living center in San Francisco...</p>
                    <Link href="/casestudies/rhodagoldman" target="_blank" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                        <span
                            className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                        <span
                            className="relative text-black group-hover:text-white text-lg uppercase">Read more</span>
                    </Link>
                </div>
            </div></div>
    )
}

export default Casestudiestoptwo