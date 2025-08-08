"use client";
import Carosel from "@/components/Carosel";
// import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function HomeClient() {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden">
            <div className="h-screen w-full homebg overflow-y-hidden">
                <div className="h-full flex flex-col justify-center items-center text-white">
                    <h1 className="lg:text-9xl text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-blue-500 z-20">MODE TO CODE</h1>
                    <h2 className="lg:text-6xl text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-blue-200 z-20 pt-8 uppercase">Teaching tech to students of all ages</h2>
                    <div className='invisible lg:visible'>
                        <video src="/newbgvideo.mp4" autoPlay muted loop playsInline className='absolute top-0 left-0 w-full h-full object-cover z-10 '></video>
                    </div>
                </div>
            </div>
            <div className="w-full  bg-blue-200">
                <div className=" w-full max-w-[1800px] mx-auto px-8 flex flex-col gap-y-44 justify-between  pt-32 ">

                    {/* Who we are */}
                    <div className="flex lg:flex-row flex-col-reverse parent-leftright lg:items-center justify-between">
                        <div className="flex flex-col xl:max-w-3xl max-w-xl animateleft">
                            <h3 className="uppercase text-blue-900 text-3xl">About us</h3>
                            <h2 className="uppercase text-4xl font-bold pb-2">Who we are</h2>
                            <hr className="border-4 border-black mb-8" />
                            <p className="lg:text-2xl text-xl font-light mb-8">We are a team of high school students who are passionate about teaching essential technological tools to students of all ages. We have taught <span className="font-bold">over 950 students </span> across <span className="font-bold">5 continents.</span></p>
                            <Link href="/about" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                                <span
                                    className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white ">LEARN MORE ABOUT
                                    US</span>
                            </Link>
                        </div>
                        <div className="max-w-3xl relative animateright rounded-xl lg:ml-8 lg:pb-0 pb-8">
                            <img src="/teachingimg6.jpg" alt="" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
                        </div>
                    </div>

                    {/* Modes of teaching */}
                    <div className="w-full px-4">
                        <div className="text-center w-full">
                            <h2 className="font-black uppercase lg:text-5xl text-4xl">Our modes of teaching</h2>
                            <h3 className="text-2xl max-w-4xl mx-auto pt-2 font">Check out all the different ways that Mode to Code is teaching students around the world:</h3>
                        </div>
                        <div className="flex lg:flex-row flex-col items-center  justify-center gap-x-6 lg:gap-y-8 gap-y-16 pt-8">
                            <div className="flex flex-col items-center w-md h-96">
                                <div className="lg:mx-0 mx-8 overflow-clip">
                                    <img src="/teachingimg2.jpg" alt="" className=" " />
                                </div>
                                <h3 className="text-center text-2xl font-bold mt-4 text-blue-900 uppercase">In-person</h3>
                                <p className="text-center text-xl font-light pt-2 px-4">In-person classes, partnering with 8+ middle schools in SF.</p>
                            </div>

                            {/* <div className="flex flex-col items-center w-md">
                  <img src="/bolivia/boliviateaching3.jpg" alt="" className="rounded-xl shadow-2xl shadow-darkbg " />
                  <h3 className="text-center text-2xl font-bold pt-4 text-blue-900 uppercase">online</h3>
                  <p className="text-center text-xl font-light pt-2">Online classes for students around the world!</p>
                    </div> */}
                            <div className="flex flex-col items-center w-md h-96">
                                <div className="lg:mx-0 mx-8 overflow-clip">
                                    <img src="/bolivia/boliviateaching3.jpg" alt="" className="" />
                                </div>
                                <h3 className="text-center text-2xl font-bold mt-4 text-blue-900 uppercase">Online Classes</h3>
                                <p className="text-center text-xl font-light pt-2 px-4">Helping students learn virtually around the world!</p>
                            </div>
                            <div className="flex flex-col items-center w-md h-96">
                                <div className="lg:mx-0 mx-8 overflow-clip">
                                    <img src="/teachingimg22.jpg" alt="" className="" />
                                </div>
                                <h3 className="text-center text-2xl font-bold mt-4 text-blue-900 uppercase">For Assisted Living Residents</h3>
                                <p className="text-center text-xl font-light pt-2 px-4">Teaching students of all ages the technology that they need to succeed.</p>
                            </div>



                        </div>
                    </div>
                    <div className="text-center pt-12 pb-24">
                        <h2 className="font-black uppercase lg:text-5xl text-4xl lg:pb-4">Our partners</h2>
                        <Carosel />
                    </div>


                    {/* <div>
                        <Banner/>
                    </div> */}


                </div>

                {/* Testimonials */}
                <div className="w-full pt-44">
                    <Testimonials />
                </div>

                {/* <div className='w-full h-[30%] px-24 py-32 bg-blue-200 text-center'>
            <div className='max-w-4xl mx-auto'>
              <h2 className="font-black text-5xl uppercase">Check out all the places we&apos;ve taught!</h2>
              <h3 className='pb-8 text-xl'>Mode to Code is proud to be teaching classes accross the world, from San Francisco to India! You can explore our different locations here:</h3>
            </div>
            <TeachingMap />
          </div> */}

                <div className=" w-full max-w-[1800px] mx-auto px-8 flex flex-col gap-y-44 justify-between  py-32 ">
                    {/* <div className="w-full text-center">
                        <h2 className="font-black uppercase text-4xl">In the news</h2>
                        <h3>Read about real-world impacts, interviews, and more: </h3>
                    </div> */}
                    <div className="flex lg:flex-row flex-col-reverse parent-leftright lg:items-center justify-between">
                        <div className="flex flex-col xl:max-w-3xl max-w-xl animateleft">
                            <h3 className="uppercase font-light text-blue-900 lg:text-3xl text-2xl">AI, WEB DEVELOPMENT, AND PYTHON</h3>
                            <h2 className="uppercase lg:text-4xl text-3xl font-bold pb-2 pt-1">Technology that students can apply to the real world</h2>
                            <hr className="border-4 border-black mb-8" />
                            <p className="lg:text-2xl text-xl font-light mb-8">Mode to Code teaches students valuable technological tools which they can start using in their everyday lives. Students take our Intro to Web Development course and learn the basics of HTML and CSS. We also dive into TailwindCSS, a popular CSS framework.</p>
                            <Link href="https://docs.google.com/document/d/1Zlth06mrS1nKHkwDvhHZauodJ-R0rReItN2jh66ooIU/edit?tab=t.0#heading=h.6lr3dxwvur1j" target="_blank" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                                <span
                                    className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white uppercase">Check Out our curriculum</span>
                            </Link>
                        </div>
                        <div className="max-w-3xl relative animateright rounded-xl lg:ml-8 lg:pb-0 pb-8">
                            <img src="/teachingimg8.jpg" alt="" className="w-full rounded-xl shadow-2xl shadow-darkbg" />
                        </div>
                    </div>


                    <div className="flex lg:flex-row flex-col parent-leftright lg:items-center items-end justify-between ">
                        <img src="/teachingimg25.jpg" alt=""
                            className="animateright w-full rounded-xl shadow-2xl max-w-3xl shadow-darkbg lg:mb-0 mb-6 items-center" />
                        <div className="lg:text-3xl text-2xl max-w-2xl text-right pl-8 animateleft">
                            <h3 className="font-light text-blue-900">BUILDING COMMUNITY</h3>
                            <h2 className="lg:text-4xl text-3xl font-bold uppercase pt-1 pb-2 ">interested in teaching or having this free
                                program
                                offered at your school?</h2>
                            <hr className="w-full border-4" />
                            <p className="pt-12 lg:text-2xl text-xl font-light">Mode to Code is <span className="font-bold">completely
                                free </span>
                                for schools and students. We are always looking for new school partners and teachers to help bring our curriculum to their students. If you are interested in having Mode to Code offered at your school, please reach out to us!</p>
                            <Link href="/contact" className="relative inline-flex px-8 py-4 mt-12 font-medium group w-fit">
                                <span
                                    className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                                <span
                                    className="relative text-black group-hover:text-white text-lg uppercase">Contact
                                    us</span>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

        </div >

    );
}