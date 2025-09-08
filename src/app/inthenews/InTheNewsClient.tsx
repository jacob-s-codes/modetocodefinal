"use client";

// import Image from "next/image";
import Link from "next/link";



export default function InTheNews() {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden">
            <div className="inthenewsbg h-screen w-full bg-cover bg-center overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="lg:text-9xl text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">MODE TO CODE</h1>
                    <h1 className="lg:text-9xl text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500">IN THE NEWS</h1>
                </div>
            </div>
            {/* Who we are */}
            <div className="w-full bg-blue-200 py-32">
                {/* <div className="grid md:grid-cols-2 grid-cols-1 place-items-center">
                    <div className='flex flex-col gap-x-4 gap-y-4 lg:px-4 px-8 pt-4 pb-8 lg:h-[450px] lg:w-80 w-full h-auto  '>
                        <Image src="/news/inglesidelight.jpg" alt="Ingleside Light Image" width={500} height={500} className='w-full h-auto rounded-lg' />
                        <div>
                            <p className='text-gray-700 text-sm'></p>
                            <h2 className='text-xl font-black '>Ingleside Light</h2>
                        </div>

                        <p className="">Glen Park&apos;s Jacob Shaul is making computer coding accessible for all ages. The San Francisco University High School junior spent the last year...</p>

                        <Link href="https://www.inglesidelight.com/mode-to-code-jacob-shaul/" target="_blank" className="relative inline-flex px-4 py-2 font-medium group w-fit">
                            <span
                                className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white ">READ MORE</span>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-x-4 gap-y-4 lg:px-4 px-8 pt-4 pb-8 lg:h-[450px] lg:w-80 w-full h-auto  '>
                        <Image src="/news/canvasrebel.png" alt="Ingleside Light Image" width={500} height={500} className='w-full h-auto rounded-lg' />
                        <div>
                            <p className='text-gray-700 text-sm'></p>
                            <h2 className='text-xl font-black '>Canvas Rebel</h2>
                        </div>

                        <p className="">Glen Park&apos;s Jacob Shaul is making computer coding accessible for all ages. The San Francisco University High School junior spent the last year...</p>

                        <Link href="https://www.inglesidelight.com/mode-to-code-jacob-shaul/" target="_blank" className="relative inline-flex px-4 py-2 font-medium group w-fit">
                            <span
                                className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white ">READ MORE</span>
                        </Link>
                    </div>
                </div> */}
                <div className=" w-full max-w-[1800px] mx-auto px-8 flex flex-col gap-y-44 justify-between  pt-32 ">
                    <div className="flex lg:flex-row flex-col-reverse parent-leftright lg:items-center justify-between">
                        <div className="flex flex-col xl:max-w-2xl max-w-xl animateleft">
                            <h3 className="uppercase text-blue-900 lg:text-3xl text-2xl">in the...</h3>
                            <h2 className="uppercase lg:text-4xl text-3xl font-bold pb-2">San Francisco Chronicle</h2>
                            <hr className="border-4 border-black mb-8" />
                            <p className="lg:text-2xl text-xl font-light mb-8">&quot;Jacob Shaul, 17, center, founded 'Mode to Code,' an after-school computer literacy program, and is seen teaching at Everett Middle School in San Francisco. He wants to study computer science at a top university...&quot;</p>
                            <Link href="https://www.sfchronicle.com/college-admissions/article/college-application-university-california-20889356.php" target="_blank" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                                <span
                                    className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white uppercase">READ MORE</span>
                            </Link>
                        </div>
                        <div className="max-w-3xl relative animateright rounded-xl lg:ml-8 lg:pb-0 pb-8">
                            <img src="/news/sfchronicle.png" alt="" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row-reverse flex-col-reverse parent-leftright items-center justify-between text-right">
                        <div className="flex flex-col xl:max-w-2xl max-w-xl justify-end w-full">
                            <h3 className="uppercase text-blue-900 lg:text-3xl text-2xl">in the...</h3>
                            <h2 className="uppercase lg:text-4xl text-3xl font-bold pb-2">Canvas rebel</h2>
                            <hr className="border-4 border-black mb-8" />
                            <p className="lg:text-2xl text-xl font-light mb-8">&quot;We caught up with the brilliant and insightful Jacob Shaul a few weeks ago and have shared our conversation below...&quot;</p>
                            <Link href="https://canvasrebel.com/meet-jacob-shaul/" target="_blank" className="relative inline-flex px-8 py-4 font-medium group w-fit ml-auto">
                                <span
                                    className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white uppercase">READ MORE</span>
                            </Link>
                        </div>
                        <div className="max-w-3xl relative animateright rounded-xl lg:mr-8 lg:pb-0 pb-8">
                            <img src="/news/canvasrebel.png" alt="Canvas rebel image" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col-reverse parent-leftright lg:items-center justify-between">
                        <div className="flex flex-col xl:max-w-2xl max-w-xl animateleft">
                            <h3 className="uppercase text-blue-900 lg:text-3xl text-2xl">in the...</h3>
                            <h2 className="uppercase lg:text-4xl text-3xl font-bold pb-2">ingleside light</h2>
                            <hr className="border-4 border-black mb-8" />
                            <p className="lg:text-2xl text-xl font-light mb-8">&quot;Glen Park&apos;s Jacob Shaul is making computer coding accessible for all ages.
                                The San Francisco University High School junior spent the last year, with help from UHS&apos; Dean of Teaching & Learning Byron Philhour...&quot;</p>
                            <Link href="https://www.inglesidelight.com/mode-to-code-jacob-shaul/" target="_blank" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                                <span
                                    className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white uppercase">READ MORE</span>
                            </Link>
                        </div>
                        <div className="max-w-3xl relative animateright rounded-xl lg:ml-8 lg:pb-0 pb-8">
                            <img src="/news/inglesidelight.jpg" alt="" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
                        </div>
                    </div>

                    {/* <div className="flex lg:flex-row-reverse flex-col-reverse parent-leftright items-center justify-between text-right">
                        <div className="flex flex-col xl:max-w-2xl max-w-xl justify-end w-full">
                            <h3 className="uppercase text-blue-900 lg:text-3xl text-2xl">in the...</h3>
                            <h2 className="uppercase lg:text-4xl text-3xl font-bold pb-2">Canvas rebel</h2>
                            <hr className="border-4 border-black mb-8" />
                            <p className="lg:text-2xl text-xl font-light mb-8">"We caught up with the brilliant and insightful Jacob Shaul a few weeks ago and have shared our conversation below..."</p>
                            <Link href="https://canvasrebel.com/meet-jacob-shaul/" target="_blank" className="relative inline-flex px-8 py-4 font-medium group w-fit ml-auto">
                                <span
                                    className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white uppercase">READ MORE</span>
                            </Link>
                        </div>
                        <div className="max-w-3xl relative animateright rounded-xl lg:mr-8 lg:pb-0 pb-8">
                            <img src="/news/canvasrebel.png" alt="Canvas rebel image" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
                        </div>
                    </div> */}

                    <div className="flex lg:flex-row-reverse flex-col-reverse parent-leftright lg:items-center justify-between text-right">
                        <div className="flex flex-col xl:max-w-2xl max-w-xl animateleft">
                            <h3 className="uppercase text-blue-900 lg:text-3xl text-2xl">in the...</h3>
                            <h2 className="uppercase lg:text-4xl text-3xl font-bold pb-2">Shelburne News</h2>
                            <hr className="border-4 border-black mb-8" />
                            <p className="lg:text-2xl text-xl font-light mb-8">&quot;The Mode to Code afterschool class at Shelburne Community School was the first class Jacob Shaul ever taught online. Now, he&apos;s going to be teaching classes around the world...&quot;</p>
                            <Link href="https://www.vtcng.com/shelburnenews/news/local_news/mode-to-code-goes-from-shelburne-to-botswana-and-beyond/article_f62633bd-b646-4dd0-9eef-adffee739fe3.html" target="_blank" className="relative inline-flex px-8 py-4 font-medium group w-fit ml-auto">
                                <span
                                    className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white uppercase">READ MORE</span>
                            </Link>
                        </div>
                        <div className="max-w-3xl relative animateright rounded-xl lg:pb-0 pb-8">
                            <img src="/news/shelburneimg.png" alt="" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
                        </div>
                    </div>



                </div>




            </div>
        </div >
    );
}