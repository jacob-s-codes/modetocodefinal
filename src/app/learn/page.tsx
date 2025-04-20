import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden">
            <div className="learnbg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">LEARN</h1>
                </div>
            </div>
            <div className="bg-gradient-to-b from-white to-blue-200 pb-24">
                <div className="py-48 max-w-[1800px] mx-auto px-12">
                    <div className="flex flex-row items-center justify-between animateup">
                        <div className="text-3xl max-w-2xl ">
                            <h3 className=" text-blue-900">MTC ROADMAPS</h3>
                            <h2 className="text-4xl font-bold uppercase pt-2 ">HANDCRAFTED ROADMAPS THAT YOU CAN USE TO START</h2>
                            <hr className="w-full border-4" />
                            <p className="pt-12 text-xl font-light">Learning to Code can feel overwhelming. Not knowing where to
                                start can be a problem. I've handcrafted roadmaps that utilize <span className="font-bold">100%
                                    free, high quality resources</span> that you can use to start learning.</p>
                        </div>
                        <img src="/roadmapimg.jpg" alt="" className=" w-full rounded-xl shadow-2xl max-w-3xl shadow-darkbg" />
                    </div>

                </div>

                <div className="py-48 max-w-[1800px] mx-auto px-12 animateup">
                    <h2 className="text-5xl font-bold text-center pb-24">3 TRACKS TO CHOOSE:</h2>
                    <div className="flex flex-row items-start w-full justify-center gap-x-4">
                        <Link href="/learnai"><div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden h-[600px] text-white">
                            <img src="/aibg.jpeg" alt="" className="imgeffect" />


                            <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                <h3 className="text-4xl font-bold uppercase">AI</h3>
                                <p className="text-2xl font-thin">AI is one of the biggest industries and there is so much you can learn! This roadmap will guide you through the basics such as neural networks, linear algebra, and more.</p>
                            </div>
                        </div></Link>

                        <Link href="/buildwebsites"><div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden text-white h-[600px]">
                            <img src="/buildwebsites.jpg" alt="" className="imgeffect" />


                            <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                <h3 className="text-4xl font-bold uppercase">Build Websites</h3>
                                <p className="text-2xl font-thin">Want to create your own website and share it on the internet? This roadmap will help you do that for free.</p>
                            </div>
                        </div></Link>

                        <Link href="/makegames"><div className="relative hover:cursor-pointer flex flex-col justify-between rounded-2xl overflow-hidden h-[600px] text-white">
                            <img src="/videogamebg.png" alt="" className="imgeffect" />


                            <div className="absolute py-12 inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                                <h3 className="text-4xl font-bold uppercase">Make video games</h3>
                                <p className="text-2xl font-thin">Use PyGame to build your own video games using Python!</p>
                            </div>
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page